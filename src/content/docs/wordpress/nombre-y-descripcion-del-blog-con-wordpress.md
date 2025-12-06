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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICT3GBN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvYLIyW6jZnBFjhAzT0IbRv5ESXuhkYTsfjnM9wU9fQIgPhAD0bWvgK5DQ4UsVb5usTK6tFckQEWSVgblpkJmmAoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAv5PBbC7dgszVW%2BNCrcA0lo6zS1uDI6%2B%2FHIX%2FkiPvaFXdk%2BJDOF0XwbaQmLe%2BLA%2F22UGBgkKD3PQNqgEZsC1qLRQCD%2Fz7cd7Ecoh7gS65ETrfRXldvDkggQcsSPsO1DxUumg3ApX1Gj7KyVQ%2BgtZP5KOmYHdOvtfUJhcCmv9TA7TgkLTMy1hmg6cakCUEtHS2tYJNIVmjNvIfyGCqyJCJ5TawU7crQvRwdXh6tNR0fz%2FzbaSSMdKLeASgP4PEYASOUiG8FeyUgnPeGBOpuGtmQRcJN7Uol8WgrFftboix9XP4ZBtjhL0d1kq53KhsFoc7Mtcg6%2Bl8tXe66Io%2BXYxrSwWj34Q0WyKAp8aB3WS8AWaGUCmDGyEzKYrFZ2Su6tS8adXc0ssbd0CAfiuKUELjYXNJSIlJhjwKghxsZVdU5Q7N1BB%2BCDqxKVy3TCuI8hyzpSZrxRWDcAmWeB4XYLSjahpefia%2F7kpCPCTcz%2B5n%2FCHz3bu4%2BKTUxpjoky4fY12JJYzyBIEGQwNFfYQmQsgTuN2O%2B07YrPdGYau6sV3Y8oKuzIlVsGPfgo%2FhAKROqFNh%2FRI7gVEZ%2Bfu9e5q70eE5jWDw%2FResLozYOqvbtCt3acJAZzRTo2Eiio5nvJEhEY%2Fbf5GHEvhhuu2HvUMMSm0MkGOqUBjeAQEqBcC5HgIWALzl4AoAhx%2Ft2p70CtLfQJooXg2hcADFjrLAyuFxZEk49gnbQ%2BkZ%2FneWGufkS0EOHz4vpVL%2Bqd%2Boy%2BLpnh5B2Q%2BwBZObDbxlytv7L6TZgyxDaksjPCj962uKuC2BsvEgUJ%2BDZvRMEjY7MKnID9w%2F%2BUSVUszr2oEfdSEnD1VseP0M3%2BRI6xzpaqB1ZdWmAilZcKMs62sn98VILI&X-Amz-Signature=0adfa6654837072149e53998ef87c426042b6e54d7efaad1f78aa0799da63af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

