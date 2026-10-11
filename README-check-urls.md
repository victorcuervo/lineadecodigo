# URL Checker para Ficheros Markdown

Este script verifica que todas las URLs en los ficheros `.md` del directorio `/src/content/docs/` devuelvan un código HTTP 200.

## Uso

Para ejecutar el verificador de URLs, utiliza el siguiente comando:

```bash
npm run check-urls
```

## Características

- **Escaneo recursivo**: Busca todos los ficheros `.md` y `.mdx` en `/src/content/docs/`
- **Extracción de URLs**: Detecta todas las URLs HTTP/HTTPS en el contenido markdown
- **Cache de URLs**: Evita verificar la misma URL múltiples veces
- **Rate limiting**: Incluye retardos entre peticiones para evitar sobrecargar servidores
- **Retry logic**: Reintenta peticiones fallidas hasta 2 veces con backoff exponencial
- **Timeout**: Tiempo límite de 10 segundos por petición
- **Fallback HEAD/GET**: Si HEAD falla, intenta con GET

## Salida

El script proporciona:
- Número total de ficheros escaneados
- Número total de URLs encontradas
- Número de URLs únicas verificadas
- Lista detallada de URLs que fallan, incluyendo:
  - Fichero donde se encuentra la URL
  - URL que falla
  - Código de estado HTTP o tipo de error

## Códigos de salida

- `0`: Todas las URLs funcionan correctamente
- `1`: Se encontraron URLs que fallan

## Notas

- El script utiliza HEAD por defecto para minimizar el consumo de ancho de banda
- Algunas URLs pueden fallar debido a restricciones del servidor, rate limiting o configuraciones de firewall
- URLs que requieren autenticación o tienen restricciones de bot pueden aparecer como fallidas
