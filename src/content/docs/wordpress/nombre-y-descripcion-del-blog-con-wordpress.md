---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZBMNOH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQClnA1UrIHvjDJ6cYsngYterZ0qS0s0LUzxDSNvVgZ0eAIgBq%2BiAtADpPOyrUyW4x3tttl3Lu3OVBHgz%2FxEE5iUfgUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJKB3XUT3pAnmvrhJCrcA2EsteRKQz3lbjJLB2PumL5A7HBvbtroiozGi3QgTzwJ%2Bb6I%2FudyuyrmnqC%2FLSGALHKbplEZu0vxHJkQ8umtcQpm2xjelyHRRImMxQYRD5Rgxt1KUZMKc%2BmbZt9cYnQjq7MO4VNXSQGIMdQXSzsRR95IDs5jBCbTCxQ5TOI72CTujqkEURYjsawrFYJKF5E3g0byWNeoozS7eMeKOe04DR3zFRhgcazWrnmtxSnuDDUN0s3iHgbWCGpX1kF3O8Og2VZuZenXC5Zex6l96H7iYUtMQgiTAN0JaGAf0p6CipazxNb4VnPflRlVlm1oU41wO7Q1vbzGvbO9Rct%2F1g%2BeX7Fbr1LN%2BqOU2T20ryrl9YDBxR66tJ83K78DJidPLhW8e795roS0VrQ%2FD2ZTKuwJlGtEmKl3lyoOLFT0l%2FeqFz8ffVEYwf%2FeXxhgL5s2TQ4QpKEzGKr1oP%2FNdWuAnmL3T6jRj1gV65McTjbf%2FgmYpS9avdiOiWdgnlVgfND9EPC7O%2BInERO5M29rLiB63QA6hgUSPIw0uGiAWdDh%2BmoBjBXJGGhQqv55NaoyAl%2B5vPjLYStgHBdwYVS2tTgS73OrAeZugCSPt7BrL5HjhZ87se7A6URKPXEecPmw00WAMMz4wskGOqUB51oEOHSYRYB7PcAjxZj40G7NVFsW0Lrk1kF6BLjpL0MTle%2FdjA2Yb7xQ85ZoP6mnBd3O4iAkPb%2FxDyw3dMbDGFWIBxVt8J2VUR3B6QcUpOXZF%2Fz9%2F6%2B6iru9610oikGQdVINH%2BGCdNgAU%2BW7pgRq29htkWlSS2Q9ajS%2Bo1xbGRkz2dbPno%2Bicse5zDYDE2kyJ8M5rStZ%2Fj9D6K%2FSXfV9gLJQ15bV&X-Amz-Signature=6db0c1082c4ebb68b7a7e052c78601d1eb5f95231803c6848533c7426f85a5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

