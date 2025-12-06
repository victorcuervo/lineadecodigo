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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7MHSX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbumrPY9EpsHuoZ4P5ZFcll1hebFI4bFf%2BAYFKg1F3uAiAxUrS8Cs9h13Fp5R3UGJ%2Ffsb2nA8AGyMZ6%2FtYFMRqYwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvgXmK98zLy0YTjitKtwDIy2ZQYzp9lzTKqI0X3bWTA44dmRbPtOpc3gqqEkZluv1Uds%2BYQd4v2P3Jjw78ApbXCwKaJGmipYzvI2vREgkCpAwdqWmcPlPna5Hg8h1IFmm3I7Cm%2BG8gSi4ynD%2F19gnK28sR1dWDMvSk7p60rqQDbI0I1k%2FsvoDooMIRv8vc7O9tuDg90PfUfkopDW6WDW%2FTdmXCERiyxIEz5vjw3KGcuZ0h5Ra3Obb6kDmFfJkh%2BOCEmBQ9JlUBVWlIkGsqZatUn1J5xBjrWtKrq5iR9tKp4T%2B3zbxYgigLdDwXNzgvZVP16bqrGhLICFNER6CkskT0BCmvnr%2FIYjSmEBih%2FCXCFNkoRTsWQlHfXVVp2ya4ZystVBgCOn%2FSV6pgnpkHtqB60P%2FQd%2BMA6Xf7xG3wHiQAvIaXaA1EZbrF4FTuD6NWvCh5gi9I2Fj31GWuQ1bk5TYckB%2BrcLhNAl56OsShS4rWIWZBHNYfDvmIzaiZrHl1UQ9HSG6tT0mBtA2%2B2wdzs7gEYi%2BIi2TN8J6UzHLPiVd%2FwbO%2BKN9E61BhW0ig3tZ808OYG2w6hWqCOk3L4surZNUQ1cjuUV9Ffde%2FS6i4sA%2Bq%2BH55yYyVrPRYl%2FApDYVJlkYFLvCAaHScPrQz8Yw5KbQyQY6pgEwTuivP40GhuXauuLlqhfcLQkiV%2FTR3IbYaGkVxCZ%2ButLq8NCHP31569HIUr9tRaiJNSB5Lzno3AlnYawL4593nmaEF8c6r1bxksKrgvAWjIWwwYEeUsCMU%2FJhj81VRZrDiUbVrm0O3CYhA5mm2T8LupbrO%2FYS1ikm2mm%2FZVpZzJ2PzhS3OLLEULVxRjDwUo3hqiWzLNCmI7nkm%2BrjfpY2CMlSuMoS&X-Amz-Signature=6ef736f79bc161dc1125029be44b565b0021aaf1b6f7fa342242c5af5cbe657c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

