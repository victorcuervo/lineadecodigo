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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PSGVYT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsIri1sUEIzV3TJCHukvPs%2F6Zz0Lwte0lE616op9ElSAiAYZLycrEUuqfWFcwX1yBRnQpznuuT2pTxeTEWUkuZU3Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMJtkf0MSzNyB7DSFyKtwDg5Vk2%2BanzHJVBYFwdOlai8fWuGuL4bF453zfVOsRltBiz%2BFs9WcAVtLNyjYdnVEri8hTwQdS2t%2B5jl3%2FKe3JOHp3gxn9hAQvk9o%2Fqu0LNMiaeu97VU%2Fqp%2BdTVACOReraCF8WDO6vy5XSGQ3EUQEJtWEB7wqTaEFdHZQ40%2F%2BJTVV3xRIZrqXQ2HSg%2FWvraNHQSIckfahNAr5x1uo%2BIdtBbHEJYw5ePPD3LnO0B8XXEfF%2B1N4CBQ6TQiFDxJ%2BkG1PngCn2R27IFgZeIrXHy9aU3J76VXvlhTIggHx954e5WxqaIoHE1cO0G0Ovhqzzagt0zp0CIuJVLmnVwR2QKCCjjAjdFwJh9y1MXEVKYFqb1NZC7BMZkI%2BCJkuOwLBKvQ8pePRZkGKBe%2Bi5tie%2BAlfLmsYTDKDDKRk0tua0L1dR%2BERhFMs%2BIj%2F5hf%2FqRKvwIE6ZGeK%2FJloUrS%2FZo%2BcpH8YYh1siz79tufZT1KcsrJjA5orh%2FVPNGkUOmitJgT0aIQo7XHaG2OrhyPEkUKrtLz2XLdVkpNjF0TMiGpIUL6CZHspOwO%2B4K5qh%2B8%2Fvzwxn%2F2rRBNP8YVizLRcbWlwtplXAQZ%2B9RDLiBtayUTKROzc%2Flqca3ulu5yaoekOD4UswmqzJyQY6pgEEl2JW%2BexNS%2FfLYPlE9FI4%2BsM8GZGGzXsHac2l6UkeFjRa%2FcMdqsM8qSd0zGwvdhGQLa0TWIJwCSnqveGF00tFf2C2HiW0sQMBYJ%2FBqFpDElxCD6eXrbaP9cXmZcCdCWslz3dn%2BC%2FO1izhBSinsY7zFO8wb1bVGtZB3505xzVBFRvpNOQeGUNSyQ9CrU%2BY65F80wa1bpPwfjCxytC8bQA6EukjBvsc&X-Amz-Signature=fd4c474e29592b6753914bd31edde7c07476c865c8fe2a920fce902353a0055d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

