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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQOUVDO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhBt7gW%2B37cYLLH5idJ0e34VmLdy7R%2B8pGzGvQRtSNoAiA90thiQ9Svat3Llft%2FRFgY%2Fl7fNL3LRssPgflN4X9TgCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2NT180pGUHajrPhfKtwDweWtxhO9%2FNNKyYgl5Ti0bFIuA3IDFbMhFhMlj0CwO8SNOr8nEzN1MDj1B9RgFzk1I3bK%2FrIigpGUc8VqgUdqnYcS7arPdcfctSLvkpiGEbRLybgBqlexN6O8Q7lThom%2Bxw2ld1Thj68u0rqJw887EEQn%2BGwQAemMVWIhQb1SJMdaOJHHS9wVYuPO%2FHWx3CZ4G%2B0XqxITaoLD6FpnnQUHHsWPYPqpGz2Pa0jai2u365%2F4PKiFPH0RfmDKJrPADd1peizi7x6Rzwd4VBQRSjXzUhFvbgH1rTbH8j5zkbrHcTdkZ2YDpqe1Jq5I%2B5tJCjSX%2BVfnlBz3buPdC3ufdSd8evz2GQ1SITcYQgDy6ojNI3DRlvUZakRc%2BRLh%2Bqjj2JYsq3YLu1dEwqA1FJ3jWkf2347eZS%2BB%2FhF2CQjkTIBO59O%2BCVvmctDBWVf5WOaUs49H9NwL7RP3M8tTeuatd4aE2F0y1fm5DEG6onZqX2hwfMjdRx%2FohVnKEYIw6Kr%2Br6X7WpBg%2FOaKQJHir%2BaAKOd7SmUHtQg%2BFq7ASrOB44YQPkGVn14vhY%2BtxmcQINkqcQhC7dtlozq0lt2n8ri4SIiaKeRUm4maNXU7GlgEno91oWXsBhcRLT9uipMiqYswr8bKyQY6pgHlHjqwgMzi2fzLZ%2FXCdqvGqhIISPTwezRTywFdPb7JuZao6g%2FTZrGAixeoLEqmugYXyfkU%2BMnrCEp4GH%2F17%2B5SMoOFJAMBuPUxot1g0M8gd3nN%2BS%2FtZUm6aT3qc0L%2BRG%2FikNBjBmu0MAn4spxLxrqEYtoLvJwAzu2VUDS3U3%2BzHRdcQkfLbbTacDASnVMAgxZBq%2B1mVbOwpHFGfeEUmkb4l9GERNBw&X-Amz-Signature=3c2b4adb2cbbf1c42b81e3d7883321a558f7e5cfeab8d85950d17df01bd613ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

