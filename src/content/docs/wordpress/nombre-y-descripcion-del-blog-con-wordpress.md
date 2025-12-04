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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627O43KJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAchnwwiMjhdKic4%2BDmw4zgk%2BhlQzYDrxa84dRWRbChLAiEAhB2YDaLJAKLJIbCDeFHFembHShAyd%2BtVdSkRuKIp8q8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAlkwx5lFFUI4xN4FyrcA5XkzT%2FzITbEYyULgRTJUSvfmM8ufPHYY3Py%2Fri2ffrTxaCCibYagtbsV6AYGrPYBl7QB4YCqrnPuzHNkmUcuLlXFyzGv5mkD87gAL4%2FZX6iEIBOeYImuxapbWBQnCcZCJlZcVkaEnPyt1WuBbvdRRAscgy6I9dYGce%2B0dIIhDl6wPzPoL0nAek7Uz7OLfaeDD6Cg7e%2BZY0M1nvxtBd%2BoQHYub%2BFXkxJkhZYtndE9kn12OoMxq%2FXfBGQ9Qjv8yPexrrsvSgcq%2B2GGPjANkAv%2FQWa5oMi0SK7CFgbc%2BwoTsoXZ%2FsGC0QUncn2xKfNWQQfh0LYonq2rZCuL%2B2plgUKnFim1lz5Yy86u5USi3qHTDRFGjZLDLeIDQk6mNWo8o%2BLVNik0pKAlYmY4QWI1IP4anNJqv5ic%2BqL5mOQZ1X%2Fkfwk9PzwFfxKQSrjkda3wAvKqg1oSIaHoAcoc15RBrIE8HJ%2BfyFIxq2b3VcIXjr77GQoClzkWWgDjrafGo0ZSFJ0T0U9snS3PzOU53KGl7oKczva2eqWEya7sTQTEJ6pKg%2BBNXoBSNJpv8bTn2Fv6K8U2Tc8jR3kfILBEC%2FnO8T9HSgww6UPtzZ6D5os7NnwR1zAHWJAoXh2mZaBjxcVMN%2FMxMkGOqUBzcKrYStNxuKjUtrycace%2Bb%2F0ixeQsTzBIK30NxpUHV8LraD0ZFXRlqjF7EinbRPFxFIdnYLxmqXPI%2BRFU9K0ijk7QFnyaz9TEYdduDH640aVLl2IXokLOTbA7WB3q1OqGoIJvL5lUnOcWEsiqrYxk9fljrHqo3ZI8WsAF0siMOeWixgR17hQSvD0au8nsQ3qoE4%2Fl2WX%2BKdXqCUm%2FNyQKtb83Ze6&X-Amz-Signature=195f473351b7380f06676f300c314b566106a53a9f44bbef9744fff633b8ebe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

