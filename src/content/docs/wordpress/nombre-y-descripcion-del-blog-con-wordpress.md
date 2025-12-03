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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFS4HW5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGTq3FbaWHarHZasnBDhZKkXvt3JSJFhlO1EZEGVMq3vAiEA5kthr9gQaA8YfRI4joeCLtydBo2uw%2FykqPf%2BP91Q7mYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJo7ZC%2FCTLZ2Vtn7%2FircA6cRf23q8PDG9IhkEr1GYMhY9JIx%2Bi%2BnM1s%2B9SxmD2p2%2FiEF3Uuxy2XUoq6dk%2BPPnzwvGqR10MEmjN45sGTmay0P3KK8Gti5SwLap6wgpvNneyh%2By6ug4a4oWCGgDIA6A3NWT%2Bs5qIm87yw1Fj45qEFnCmivrdqVRP9gOJQhqdcnTPKasGTD2Qtq3hxxxI0Y%2F8Sw9X8lQ4x5hurFNj%2FM4FV0EqNpJi1xKHhyhpOXnR7IhvzArHXGRYNs7M2Ad9vRO2HFr0GveUXGRxploHQ%2BYxDviC0iP8dUdpFRqRntfEx4Z9ROcME3DkX2bJRaZBQMbtTLiHplQbTG3DEmK4S%2BzgbhjnPlM2xBnukBdA5cc5F7%2FHjUhXG4aDdwJ6J%2F0p%2FqnWVrLn7jepxLWYAuTNH5tdDKq5XvVLL4ahSLU%2FdgyZUV65VkEE3MeHhncMUISDzwWFw%2BvrYRgXuFlQ0O9hjEjqZrl1ig2wAZdM0ahFIC8yu9k%2B9AGrvbJdBgJ6SKYDS2gP5ezyQu0co4Kblx0Nv8K0emtvPtIqHRR4zIfBpcPO6eIjY%2BPd0h8tocQQfqgnSt0QKC32qhckC%2Brotgp6Ut44mKKPqgvjj%2FSvzaRI2pyCAHw2FMSfF6o6vf7oL%2FMMz4wskGOqUBhlylynp2g1RyDLQpRjVAx4W0C3UXt9l9S%2Fre11BZHJHo84s3K439b3ZHm82n6iovEebD12vGcQWYaxEOLvYjvY0pKRXzOOSVv4iUBpIeUZ4hNX9NrJLZTfzpv3L7iRLf75BwOX9sDTAr1Ld6QZyoBEL89wpGZPSVpg8JY%2F3BycCWqSX%2BAvXw%2FTpK84F5tP6z78Zk3DuTHF461aEz%2B7n9a3gHMw4E&X-Amz-Signature=44782216d2c39ee17fb2b3cff0fd00302e9c80fcb12389343ad0110bcf474829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

