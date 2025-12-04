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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJX4I2S3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIC7wj%2FbSTCWI0hxb%2FGtLexuY2mjB1%2FAdYEB%2Bzab7Zp8NAiBIvHKQh4jT7EGmD0%2FvmaLSOAAGC7H8wMNvdy%2BY9u2FTyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMNOQqrKheqs4ieY2JKtwDYTaDxSpGkhQxC93AK%2F1WY1LVsHwh%2F6fO1Cnxio1x6m188TchnAdb6IBZGF%2Fl%2F%2BaQkUnnT9YqMlPHYgUN%2BCt2DC8bqX3uciPQ55Td9phuCNl%2BX%2BxL4SA0dOJk70w0JHAepGPvmbeZrPqY5Q%2BjJr2eB6aBuOMwJbp4%2F3mpS0DZ5BXiOLBMXKJKDsWvRz%2B6Y86D9mzAMbmyAzi%2BOcxJPX8ElEfe%2FgSsFATcse8Ra%2BUQMIwizn6v7BjaGqXLJVHv5PDn%2Fa9K6b3pkeddpM5krlkHYWKJpoXKKxtQPQ%2BtlcT5K2GZdQQM5e2dAj5BfKZ1JBbAYMduLMLjUnHUJUYipv1kIHItPtKWDU3R51oGGMcEavhwm3eYBUY9dYIos6EPXXuS7Q%2B8ofUK3a9Auc8EacRl0QmlodZdZf9qsdIoAPlhKdJHcbeEYz2TTNSUyTUqcSTuJq5wOu%2B3IFK%2ByuX9K90mqazP%2B8zzhVBnLFdBqAgaRJcilYVBeq8bEAjMYA8G0cOYi8QYaMyh%2FkvdBkx%2BdVeaHrjl%2BevUxu5vSntGNR%2B2O%2F5AF9snAYThYBerNvxT1WqNfwxTlJm2aRuJ%2BKbD3FqxzZrE6R6p9Nhl8S2NqZwJELHgcOahKvjyszGVfL8wkJXDyQY6pgGePVcmbFtIB1t8GojnUSlG8UGyHVu2LRgSYRVYPfDeG%2FYQYe5nz7LQP0KyRed0DGhpiHrDihvrXIf6btbfcE8kkH6kzKOruyy60n5AUs83uWLjIPnzZTLtqtx%2FKdFecwOdfMqj4q5EP4c%2FWItYh9Hi6L5OMGdBsjUE3y%2BhTsfZkTAfVEtiyPtFzCdO0LoyZjfe1J2Vxed38uvtcG66CR%2B%2FI6t%2F%2Fg2D&X-Amz-Signature=b6a23f0f180556eb3513511f3cabf275a0eda3b93cde2a4dc8839d89b05d13ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

