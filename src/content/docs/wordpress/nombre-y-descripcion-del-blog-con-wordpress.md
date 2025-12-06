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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFU5AWG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS1ExOwaLTidoYYkD%2FCNpC62S95fCHshX7O9FS6cjEGAiASPKij7PG9LUZEqAwkzNlh0j2ShGXgY3nK4GjKF922%2FCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMA3TFb25o6c2JlT8eKtwDsj8JB9UU496wMFIXaHj6Syhu4PuLH3etWFzIGbOIyApQleOkrrjP1BCB5110L3Lc%2BYuon%2BB7f1ZM35LWjFg4RnAKQSBWGzc6HTKbCy9EgdKvQmw3161bMbRI6fN22lIqDQQG0kLBrhGDJ5neBYiPjC%2F1OMF5K%2F6oJjRK5X%2FsNDhYFFyU7Eoh1aPITsoT2seCD7CgVxODzu4sKm%2FBLKuJNzsD65vFXVGHumFRDOFsvoHOGYQkmb5c8CDXOXz77lerOfdDI1DTtU08llJ6iczmLwugRPAUcBI2eGHjozUV%2BUZbyv5mPjbNc5J7dZ%2BhBMsoJ0n3MqcLeHX%2FaO14hYvwnJCfiz2GSGk6Dw%2Fujw9Z3R7NJ7czCBmO7EYYItCEpU4bhO9z9PO8JA0tN8%2F%2F9%2BXWSH9r0RRzCxAtGwbNNe8Ew7sObSxxE8Lxz8bkHEHXvsiG0IcQ%2BwXd9TIV07nTGKORDFdiMv5%2BqdjYXhb55kErrxeNqZmMhbMOLB50AKavJcb4Km%2Bat%2ByQfsbgM67RPzHL3c5uutzGSgmUkewaOLSEPD1%2BJ8id4Bzb0MchhSPlAClVSgOdawkLJ0qcxmCTyYwArEsAN692jFl6FcZJuKYy%2FG7YvS8Yfqg0FP9z%2FZMw%2F6bQyQY6pgG8DMHBbEZbWYKl9N1U4PVldiS4wAX2tUgNgHHkF4yyPvjY%2FphdEo%2BkeByuf6o%2Be%2FUDrUZ8BJqWh4nEPRF%2FnDt9RSjeaNI1aJLA3kXzeZjs7B3Eq3blN%2BVBKcH1LCLbvAkmVn38FFzq3QbHZlQu8sENvg26PAJkYVFbDoGbbb0GHbtMndV%2F4yiT3ec1Ssv7osAbbYD%2BFNQ5pqsblBS6SzAVVcr1pTlo&X-Amz-Signature=b152fd315b822a0a6e97a1b54ffb3b5c6301a376b8998eef4041ea42ebd78b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

