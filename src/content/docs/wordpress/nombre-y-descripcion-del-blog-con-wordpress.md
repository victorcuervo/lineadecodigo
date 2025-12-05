---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
slug: /wordpress/nombre-y-descripcion-del-blog-con-wordpress/
author: victor_cuervo
---

Vamos a empezar una serie de ejemplos relacionados con el desarrollo y programación sobre la [plataforma WordPress](http://lineadecodigo.com/categoria/wordpress/). Para ello queríamos empezar por uno sencillo, que será como mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/).


### ¿Qué es WordPress?


Antes de empezar con nuestro código para saber cómo mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) vamos a ver un poco en detalle ¿qué es [WordPress](http://lineadecodigo.com/categoria/wordpress/)? y ¿para qué podemos utilizarlo?


[WordPress](http://lineadecodigo.com/categoria/wordpress/) es un [sistema de gestión de contenidos (CMS) de código abierto](https://arquitectoit.com/cms/que-es-un-cms/) que se ha convertido en una de las plataformas más populares para crear sitios web. Originalmente creado como una plataforma de blogs, [WordPress](http://lineadecodigo.com/categoria/wordpress/) ha evolucionado hasta convertirse en una solución completa para crear cualquier tipo de sitio web.


Siendo el [sistema de gestión de contenidos (CMS)](https://arquitectoit.com/cms/que-es-un-cms/) más utilizado en internet, muy por encima de [otros sistemas de gestión de contenidos](https://arquitectoit.com/cms/listado-cms/) como Drupal, Liferay,…


La tecnología que sustenta a [WordPress](http://lineadecodigo.com/categoria/wordpress/) es [PHP](https://www.manualweb.net/php/), por lo cual los ejemplos que mostremos de programación en [WordPress](http://www.manualweb.net/wordpress/) serán [código PHP](https://lineadecodigo.com/categoria/php/) (aunque en algunos casos también utilizaremos algo de [Javascript](https://www.manualweb.net/javascript/).


### Características de WordPress


WordPress ofrece una amplia gama de características que lo han convertido en la plataforma preferida para la creación de sitios web. Entre sus principales características podemos destacar:

- **Es gratuito y de código abierto**, lo que permite que cualquiera pueda utilizarlo sin costes de licencia y modificar el código según sus necesidades específicas. Esto ha fomentado un amplio ecosistema de desarrollo
- **Facilita la creación y gestión de contenido web** sin necesidad de conocimientos técnicos avanzados, gracias a su interfaz intuitiva y editor visual que permite crear y editar contenido de forma sencilla
- **Cuenta con miles de temas y plugins** que permiten personalizar completamente el sitio web, desde su apariencia visual hasta la incorporación de funcionalidades avanzadas como comercio electrónico, formularios de contacto o galerías multimedia
- **Es altamente escalable**, pudiendo crear desde blogs personales hasta sitios web empresariales complejos, adaptándose a las necesidades de crecimiento de cualquier proyecto sin comprometer el rendimiento
- **Tiene una gran comunidad de desarrolladores** que constantemente mejoran y actualizan la plataforma, garantizando su seguridad, rendimiento y compatibilidad con las últimas tecnologías web

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELIZVVU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFktCsOI4CACnPWhK2wbaL93EdO6ZUd8DiZerBcnukZOAiAaOyM3FGKVIabsh00TRjqa5i1Jrfg1pMcOUn0EfHy4Iyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM37Z6V34u9ytanme%2BKtwDyE9kGcrdNJKGgZ%2BQ%2BXlm7x9sLMCp16ji1KNAsGktX9YpriFwTKUJ54zj78SLW5S1dxB2%2FsvWW%2BOYYQwxKZG6ekVxWijE%2BKh%2FxzTLd0jvmbTvEARD2ymPCgP5OORyuKIU3wIjhSsOEooEBEFi%2BzVI5%2FoGYK6MmxBjLea0vGFjaEd%2B%2FMnThuqGQU0MycWtOztSH3l7c6guIRe9sFCWryydZ5D1AE0e794R5H56GgETHA%2FV6gDnzl1OFq%2BWPbNO7yETD9oDDXw7jba87ILUtpoA1IgH2lY6DF9Iqc2tL3cW%2BNnQhDTScju57fxFta%2BNhHbAO%2Flmdnj3zK4ojeOWkwT4kTybAbsYxNaRqi%2BowRO2Y2uWfD%2BJmI%2BuyE61FxZQ9XA7JduIYN1l91V7NP5JPc9hgJ5w42LGXzFDAXFMqIn5WNf9OSdsjIhy%2Bwnx2VViYpA30xakx4E3drdXbmlKRRTZ7muYsJWILIbbLn6OrzT6bz1f%2BANzNy83sIBk5n4UDGYHd1j%2Bxilusmqx4HVOQ5%2B8sYgSLdq3YF1Rtyd%2Fs5ZDIxAND7O76Zl%2BRKwEx6KgC%2BHx0yubd1a82%2BlCsxFtoKI%2FETVFtpS5IXh%2BuY6NiFy9f0DZhd1ItmhexziaTI0wp4jNyQY6pgFxrht%2BoTvQ%2FS5APl8eGHIA7%2F6PKfTDNAr9kJhtuFsZMVADKQBs7h2oyxvtejVmEc700Mq0DDxDim1lo7lko2KfTJ4hm5ZTHwoqBw8p5pCyFAs%2BOsMTgRRbMGTsc7M5vHWPBrAIYBz51ABdlFO5KnivzN%2BIdlV1nt%2BaTcG%2FQWtZ1TqB7sSYIIJhjeywNsV2z10zxkqk6rOyPh9u%2FaAqRcLIM9R6bLFv&X-Amz-Signature=2548452a511b71e39a967c366b0e7b18ae7a4c6d4cf4f8d3ca5f304f870edeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Fichero header.php para definir la cabecera


Ahora ya pasamos a codificar nuestro ejemplo de cómo mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) y lo primero que tenemos que saber es la estructura de ficheros de [WordPress](http://lineadecodigo.com/categoria/wordpress/). Si bien, ya entraremos en detalle de cual es la estructura de ficheros para poder crear un tema sobre [WordPress](http://lineadecodigo.com/categoria/wordpress/).


Para este caso en el que vamos a mostrar el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) basta con que sepas que hay un fichero que es **header.php**, al cual la plataforma lo llamará cada vez que se ejecute la función:


```php
get_header();
```


Si queremos mostrar el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) vamos a apoyarnos en la función `bloginfo()`. Si echamos un vistazo a la función `bloginfo()` podemos ver que su sintaxis es la siguiente:


```php
bloginfo( string $show = '' )
```


Dicha función recibe como parámetro el tipo de información básica que queramos extraer de [WordPress](http://lineadecodigo.com/categoria/wordpress/), véase:

- `name` - El título del blog.
- `description` - La descripción del blog.
- `language` - Idioma en el que está instalado [WordPress](http://lineadecodigo.com/categoria/wordpress/).
- `version` - La versión de [WordPress](http://lineadecodigo.com/categoria/wordpress/).
- …

### Codificando para poder mostrar el nombre y descripción del blog con WordPress


Para poder extraer el nombre y descripción del blog en [WordPress](http://lineadecodigo.com/categoria/wordpress/) necesitaremos consultar las propiedades `name` y `description`.


De esta manera nuestro código fuente quedará así:


```php
echo 'El blog se llama ';
bloginfo('name');
echo '<br>';
echo 'Y su descripción es ';
bloginfo('description');
```


Como podéis ver, algo muy sencillo.... ¿Te atreves con tu primer tema de [WordPress](http://lineadecodigo.com/categoria/wordpress/) ahora que ya sabes extraer el nombre y descripción del blog en [WordPress](http://lineadecodigo.com/categoria/wordpress/)?

