import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOCS_DIR = path.join(__dirname, '../src/content/docs');
const URL_REGEX = /https?:\/\/[^\s\)\]<>"']+/g;
const REQUEST_TIMEOUT = 10000; // 10 seconds
const MAX_RETRIES = 2;
const DELAY_BETWEEN_REQUESTS = 100; // ms

// Results tracking
const results = {
  totalFiles: 0,
  totalUrls: 0,
  checkedUrls: new Map(), // Cache to avoid checking same URL multiple times
  failedUrls: [],
  skippedUrls: []
};

/**
 * Sleep function for rate limiting
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if a URL returns 200 status
 */
async function checkUrl(url, retries = 0) {
  // Check cache first
  if (results.checkedUrls.has(url)) {
    return results.checkedUrls.get(url);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    const response = await fetch(url, {
      method: 'HEAD', // Use HEAD to avoid downloading full content
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; URL-Checker/1.0)'
      },
      redirect: 'follow'
    });

    clearTimeout(timeoutId);

    const result = {
      url,
      status: response.status,
      ok: response.ok
    };

    results.checkedUrls.set(url, result);
    return result;

  } catch (error) {
    // Retry logic
    if (retries < MAX_RETRIES) {
      await sleep(1000 * (retries + 1)); // Exponential backoff
      return checkUrl(url, retries + 1);
    }

    // If HEAD fails, try GET as some servers don't support HEAD
    if (error.name !== 'AbortError' && retries === 0) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

        const response = await fetch(url, {
          method: 'GET',
          signal: controller.signal,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; URL-Checker/1.0)'
          },
          redirect: 'follow'
        });

        clearTimeout(timeoutId);

        const result = {
          url,
          status: response.status,
          ok: response.ok
        };

        results.checkedUrls.set(url, result);
        return result;

      } catch (getError) {
        // If GET also fails, return error
        const result = {
          url,
          error: getError.name === 'AbortError' ? 'Timeout' : getError.message,
          ok: false
        };
        results.checkedUrls.set(url, result);
        return result;
      }
    }

    const result = {
      url,
      error: error.name === 'AbortError' ? 'Timeout' : error.message,
      ok: false
    };

    results.checkedUrls.set(url, result);
    return result;
  }
}

/**
 * Extract URLs from markdown content
 */
function extractUrls(content) {
  const urls = content.match(URL_REGEX) || [];
  // Clean up URLs (remove trailing punctuation that might be captured)
  return urls.map(url => {
    // Remove trailing punctuation
    return url.replace(/[,;:.\)\]]+$/, '');
  }).filter(url => {
    // Filter out invalid URLs
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  });
}

/**
 * Process a single markdown file
 */
async function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const urls = extractUrls(content);
    
    if (urls.length === 0) {
      return;
    }

    const relativePath = path.relative(DOCS_DIR, filePath);
    
    for (const url of urls) {
      results.totalUrls++;
      
      // Add delay between requests to avoid overwhelming servers
      await sleep(DELAY_BETWEEN_REQUESTS);
      
      const result = await checkUrl(url);
      
      if (!result.ok) {
        results.failedUrls.push({
          file: relativePath,
          url: url,
          status: result.status || 'ERROR',
          error: result.error
        });
      }
      
      // Progress indicator
      process.stdout.write(`\rChecked: ${results.checkedUrls.size} unique URLs`);
    }
  } catch (error) {
    console.error(`\nError processing file ${filePath}:`, error.message);
  }
}

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir) {
  const files = [];
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath));
    } else if (item.isFile() && (item.name.endsWith('.md') || item.name.endsWith('.mdx'))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Starting URL check for markdown files...\n');
  console.log(`📁 Scanning directory: ${DOCS_DIR}\n`);
  
  // Find all markdown files
  const files = findMarkdownFiles(DOCS_DIR);
  results.totalFiles = files.length;
  
  console.log(`📄 Found ${files.length} markdown files\n`);
  console.log('🌐 Checking URLs...\n');
  
  // Process each file
  for (const file of files) {
    await processFile(file);
  }
  
  // Print results
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 RESULTS');
  console.log('='.repeat(80));
  console.log(`\n📄 Total files scanned: ${results.totalFiles}`);
  console.log(`🔗 Total URLs found: ${results.totalUrls}`);
  console.log(`✅ Unique URLs checked: ${results.checkedUrls.size}`);
  console.log(`❌ Failed URLs: ${results.failedUrls.length}\n`);
  
  if (results.failedUrls.length > 0) {
    console.log('='.repeat(80));
    console.log('❌ FAILED URLS');
    console.log('='.repeat(80) + '\n');
    
    for (const failure of results.failedUrls) {
      console.log(`📄 File: ${failure.file}`);
      console.log(`🔗 URL: ${failure.url}`);
      console.log(`📊 Status: ${failure.status}`);
      if (failure.error) {
        console.log(`⚠️  Error: ${failure.error}`);
      }
      console.log('');
    }
    
    // Exit with error code if there are failures
    process.exit(1);
  } else {
    console.log('✅ All URLs are working correctly!\n');
    process.exit(0);
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
