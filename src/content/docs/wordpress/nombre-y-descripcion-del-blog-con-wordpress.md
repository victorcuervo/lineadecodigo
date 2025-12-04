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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBNHCXC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCICsdJev31V5uQnFKPFgL4ncNVf1gwLcIfvdYk5Xy8HwIhAI0GkAJR8SjbH%2FPm6iwRqL4ZckywytFTynq6mP9AtOKqKv8DCDwQABoMNjM3NDIzMTgzODA1IgzM6fwTNLO3N4MNQEEq3APzxeOx6AAfrbPptXQzpNmbqoGUFJGOy1IX5Az4feMF8YfsSXQ%2BQPf0xo3qX1BmQQNRKvONE6PEl9ItIaoPKY%2B%2FH5k3u6WvOhNyKSR7LwTk4u5geR%2Brbyyeh6HPHHkJgr%2FoQchnaxqyetX1PFUBveIt7ZAO35n6640dJ5Kz6u3qYDjp2I4bxU6Mrl%2BJlv2oE9W%2F9sbHG7yBDTs5gBnY962QQgC5qRkkQRFwTmYUMAUAz4njdGbK%2FSgMOGvx%2F6ZYZ%2B0cO4T7X8e8mDSFkn2d%2BXUALSH%2FNbQUXE4sqfozbAPRN3sV9rVEC6%2F5bg9edzuES5RE4PefPSXgiVX%2BeXH1v1bndhqrjn%2FpPRtA7eSvb%2FWvF%2FCdrtdTdnXCYgzhxcYJ47OZh%2FrAFzLAVWL7xYZ0DggUDmJf5e4XvkmLCCk%2Bdf2YJTryRBAZA0zWgDfV8hYAlycsODqotM4%2FfUM1m8iV41sx4EOwXm%2FZu%2FuYsY%2FdV3nEjw9LzBNwW%2BATHeQExqiv29C92v3tfgU0zR2TR21gcBXbLtcQR2GScc6ImABhOBIz%2FhPl7QyO79J%2F5SRr0x%2BJcZkSExo0SyPEISWUy2E%2B0ZE1zNY45KmDPq2q%2FdWXOyRXqD28OZXJeUf4v9B2DjDC88PJBjqkAcp3FtNIjrhIiYIigJiHi8GcQU1%2B51iIWj5JO3eLiVjZOsrVfka8ADBanDhz8J%2FRrd1ylpVJjVpEsJT1B4KRIDf2HkzKS4G2JB%2BIyQEoebdnpRT9B4jCuqBJUDmz0oVC3X6CiyllCew0jAx%2BM5uRF3hC6l0rlnCppWvu0aswuxtA8CoBymdgx7iTyHozj7prhzd9Uk4mvcgjeyIaILjnvn%2Flr822&X-Amz-Signature=3312d3d4f2f613a32c5df3317e46871d3a3bd7754c2e2d1346d1cabc680e6961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

