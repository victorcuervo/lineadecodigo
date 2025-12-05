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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMYDTEIG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVlUhsItOs%2BdwPD8VUXpiRHjJ9sHIC0ybPA%2Bu%2B%2FySEugIgEJhZPmQi1qwu0RVxSH6WpetvbRD%2BYW1N6ngfZZR%2Fsnkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBPGJL9Tsy%2FEvgoxlircA9Na7q1Qq4si0ZiEXzVgH4UMAO1lqjWQM4R3bptkcAJVSHi%2FnHLJi%2BGBhPDTkOx8YR30FD61eBYUDW7FAVOvQlJOymcFwykkIyLaKJGJJpWwrm9Tn%2FU4bvEvhWaZy5aM%2FwWF66LbwVOliGIvls%2FjAqZnLfE1YVPnO3GZGGYVHyV%2FMApYmbKRQ5WklRraMCHyiKZWl3yqt69CS0AjM%2BzooT4F1EsrYBwRN0S26sMYdbrVaguRCwpmF8yZHzFDPSd%2Brbrs5sgNCS5PmG19QkEnJM%2BfXr9bzPkFWKoaW9574NRRmraXn28pLGctVNhdZF5FG6sUs%2BJi24xo5GzJacL%2Bg7wkOZ7e4E8lrUWC5TxY%2Bw%2BK%2FeVaQY0iMkAWEBWCzMVn%2F5ieVQL2%2BRjzECHvDDJPKlrnubBOq5PGQyJQsBrTFWFj1eKaVieLrrAlqtrTp1%2BV8%2Bq%2BjQnVx9y5hVOxG0EdSP%2Bd45c2EnsPNUvdwL3XXBza8ghlX48UGZ6Z2TuorZ%2FVSDgMvGi%2F1%2BfiPXnoZoijMPutCubCkAE3WQj953mEZb3NZt%2BuqkY7isP0RGMpIf4YJImVlTIGxnbSlqVF%2FoMv%2F%2FpmfQYF9sO26RheRIADqEE2w8zp8A8Q7VasRsqYMPfpy8kGOqUB%2B2ngdYtDlCo1xT02xfG0BtM4fdPHOcvF37M8Fx59fTXGbrtgZpWULKEqlt4meEXT964LEGq6DQGPkQGW27Wt%2B4wWK131dINjqRIJhQhhoT0f8t8kdMXSNE42M5VkU2T6sOGA5Rfv9sly%2BDPvmcpm%2Fpp0PsItmtjleB%2B3S%2FdhHPWPh%2ByOJHjAhkpYAXsIzA1gyUwHm3Iiq4NY2bGvDlkp5EZ%2BklXk&X-Amz-Signature=040dfa570a11428b2e74dd3dd1b76e00f8bc9678423c19312c5580843d1429c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

