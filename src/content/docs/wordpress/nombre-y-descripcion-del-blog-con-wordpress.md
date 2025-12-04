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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQUJNRE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCJy8skRBlhLxvFB%2FTon3cCGV0nvB%2Fomw%2Bbd%2BStIQcKcgIgBDt3rjU7KkwCNp6jBEEvGsc%2FGkYp6%2Brzv8GHRQgKX1Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMDcKCrDAMgoS64E3ircA8X0mJPvzDxHkYsJtecLB0nSvZWpWNnclChwC0lpZr3Egx8OtfUZKWSSBmuxduuemmPASRM%2FCcP1tB9ZQ3lsBHIbg%2Fy9v%2FKPH40rEV2dHltSRQzGZ4qDAPIU3wnySMGg6ca7b4DqfYkT9%2FA7qnIhbNbj15sbPH5fbLgXCq0p4bMmTro3JkJWoIVdNCU%2ByaBrj5sV7unhoxY7qGFw9gKy93%2BEUbFW1In2%2FfugQwy3aqLgb%2Bo6sQMsKGe%2FXw8wu25d5AQTTRJusCXSGMELZbb2GGEmKklAzGAjeErOTl45A89uaDiS1ZlsfskMkVxBDccc9kpan%2BWkxPlNa1DKGYcuCvuYLCUJfTUcRO0gssg%2FAs%2FHWmHF%2B15VZdHrR%2B6Rn%2BJeYxopJt46H3%2FBA6ASCIo5iK7vPsFcYkkGPb9%2BTqlNbrJa21NSAjKmNAvwL9rXPTyh1CUOjezLB%2B0YJaVMLMXxZ%2Fv3bSe73f5N0ZK3V3Bxctv2onXOyFjplM1IZKN%2FjXAfafMxdOxD0U8rfTSxFu3tz3r9NWCJzaHNLUZApdGAI36KZfF3O5hxzhR02yzoFa2CLaciBuHr%2B8IQVxXeX3Q5NbF0B6QjVJEB2LuBhN%2FyQXDLOBNy3m8ae2%2FDQuP7MPXoxMkGOqUBj9j0Lez68fL7Ft8OR8UtSxCdBmWJQ0aZ0xcIHsFhmEwJatfUwFVChQwlSes2iFoCU0bc5yE92BDtY0gztjV71cEGMv5IEx26UGLsVh0NnmqKorrRzIy7t1z6E7ItjFB48djRFNJvGAPhjZQ2DFYYwL%2FETvXHFu%2Bxy1%2BotqAIjudTE%2FZbmMAsw4TKHevJpSz6uNdBqY2f0jryIjrktt1LvuTbbG%2B6&X-Amz-Signature=66e2d7c843d572759a659fb335eb4ba69eb2822727dc19fa5ed08b8004ec3ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

