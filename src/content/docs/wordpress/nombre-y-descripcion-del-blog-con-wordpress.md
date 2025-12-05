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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGQFD6U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRgu4TAZ0XoQLiyX9%2B4Tl3ZvlPKnPIJ83XQPzVh%2Bb3kAiB8pksEFvIjQmI0k05dmhLFtFHwWNcYSd8Qu6tKMK3QxSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMEVc0Ia%2BMlxWUt0nHKtwDm3bOkLfhokRq4hYYmaa2uB5d7CPEuahAddONv4y1nFsrSCTnsOITdeqQBcR3wcA37Kv7p%2FMAIo7YSv%2B60FCq6xbodF50q83kdWWHQeOpcU4lllE9HXqNeqa7iEihqjr2AVHOUS6dVhUwTwJu2cTbWieF4FIAutsOlVXJ2JXauDEu%2Ft6xnMUea%2Bph0yd87sqlJgdKLC4KYrWIBFQ5gqjHsDVRJqE5hSjeTwFCT0lYc%2FbjUeVlCi7HGAr0vXalxGC81XzOOwfTKHMoUCjiCtBWY7RdDGeQkwQttMs0SHA29aJeuxfkiicuc7Mq4uZHXtHVo6fXwIOuys1wymrggaGy12Ggyt8As705uya65TrM9%2B0Y9S4KZ%2BkrzR31Tlquu1B0eYcsfvO5slHSHBMMSxw1lKgt2y3REEWXi91nRkJ8HsBsjELw79%2Fl0yAWy%2FK1TcMqiw6ICMEnh1%2FkQSdGYi3oCNHaPQz%2BAzarQYS0uL2vAK9V2A3fdVyqJZb1WgyuKAlNcMOmcyoxfubhKfLGuwIxXojl59LB7bxw9L6%2FuKH%2B2wHNSTaks6NEH7rQu%2BDJ0bYOfPVsOG3WVWVZPympU40peDj6GVH%2Fox87OYl2d%2F0XdGkdpnAedbqmSUpmyqAwz%2FfLyQY6pgG7yzD82bINRTZmuaUy4b8z73wWq5zVlhU%2BXoh0MNJ5PvfIgc2BD7UZ8Vbiih%2BFJoyJxSP%2Bs3SLC9dGnnMNHQm20Xh%2BGjV0gTluAVtRJNKA2unoZtn4fr9XejO9CC6F8hFQP%2BDOPQoAYt4zdEqQjYsW9DqHa29S%2Bc%2FlJ%2FNqVMX502HuULr9N873iG%2BjrGLq8zBMe2CEn1GQ3b6yr%2FsaLx4%2BHo1Vq5av&X-Amz-Signature=1a7f181cc59e423a64293247771a2ab66cd6eec0d1f55c7c1e33f01c3860207f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

