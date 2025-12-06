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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3WRSVD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWffIZaAWMGC4UufMKPqySwzyWTMjuA52fGtTm%2FgW%2BHAIgXXYl92r3oSV220ePKxwGO68Kz9U6eyRHrISBkRc8U34q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFCF1tfe7uBPXsagtSrcA0QzEr%2BjJ0X32qAm3ilXlfTJtmGGOa8zfNLoqebL5XpJKgvJdUWm94DEoOOVjhBJcZJT4by0Eu1iQJ6cfpQUikCcezpt5hjOTvY2WQBvY09Rdby53FOKvOSZdtT1nATPt%2FkP%2Boto6dDwAcOC29%2Bapbkc3ZtGB8qS9BLNKtuwWcCbV3f3GtQjz5CVbeuwBr9J%2FaelhzA3eIoyuuKxJJ6YvA4FnauayPZw8sENVRWtFa%2FOC2tQYHiY3fPf%2FwvhfcXwDo%2BogFrS%2BxkhLyg7e9nZIZu8P00I1TuMhxoPsBitHjfEP0pZUYsnVT5fUtXzFfrPph%2BbZ5y2ZltJFgcUXjh1qhRvxD0JH5qvl15Lk4AmWflzqmugQamPGeZn4%2Bvvai92IL2xEFe02ZAqG94ZIdMZxnM3rc9eva4FJyorW0NKK%2BA%2BL9lqSK7v11ucP3u9Tk4JmwNeCTOtQ9UgGIVznsrB9AXX2UJYbUHlKyvO6D2a%2B%2BS070skrfcMFGmLMz68%2F3d85avrNrLNyWZuJHrWNL%2FFFRm%2FW8brqgULJnZ%2F7PI7ANt70%2FPVNvGL29eAVSFaWw1GXGwt2jm61Wi8s%2B2uWWeTJGT%2FsJAHzeHH8FNShnjejXeToxsjZw3wNNdLCJUFMPam0MkGOqUBVOnLH%2FWziQ4RkIbnKCrVmYZfY3f%2B9%2FtIL6Xscp57MNZtjeXHdsvH82XMcqZ9JBRMkMC2l5uOuZWv6lJmw%2FW0pd6PBeNLkYsavNSF1N5ooAFoFn2qbRNtXL%2FZ017m7t8HZ%2B4%2BlswIWlq0nbOS%2B8nm%2FmiEl%2FsMln3eJkwm8JnpvpOscTOU0rs5Ekw0%2BQOcAyCO%2BokR38aQ%2FDhAdPAM9pE6Y7m%2BhuPi&X-Amz-Signature=b599b86ecb0cbaabd5c5e03b2bc798685b317ee98ee7b410709c18d6d6e3e6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

