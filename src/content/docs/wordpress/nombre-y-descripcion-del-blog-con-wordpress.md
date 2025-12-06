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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYTGHYT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEP6YF8VEYm2xhxJtnHYDGcg%2BcwFBBo82NP8mB%2FSI0DQIgHN0ZaBcaYT1HoGWLUCFKGtD6HmJOR06ZJ%2BUlDyrIW28q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI0efJUYlonKS0rH3SrcA86gj2BSVbFESyOLD9o6tbslFkrdhK7t0OFVtBjQNl09Ms%2FKZ2ESvyxdDZAvx3fxg82wAbla7a4BGtHfm62UeYmZP%2FqfbR%2Bfh3Jfg51Ml%2FDLN32ZPQk%2BLf%2BBPGcoLGXvNd3ZFVDQWhUq%2BvH5ZOqsczu5e%2BDEw34PTUH6ejngff5tahmW63s4x5Xgz2Y5UjdnerPLwVwd2%2FiglTs14b%2FFTwEA91KmXwDml%2BbgfnnKF4DrCfQc9y48h5Bn%2Bnr8ppmzaZ0%2FwaGLMmiOBV32hLv5wwqA3riXjUSVePhS1X%2BUS%2BCGu1otzxpgT9RRdDk%2B81SfhFFjBATVObrTp62ry8SIMyvSvCn0SCUx%2FeGhZM0sh5x7WkNd%2B9tnyaJvgTaJ4x02XGFSilN4yqzZyi3rmOSynHLfdU4cp3R3WPfUwRBHZF5IbY6QeO6dX59T7NBtAStFeOXqFS2hZuu8BdzEVe%2BPVfk6MbyO1c5hKPBCFI5VK24E8kPbIJprUIR%2FyLXZrsbXAEGUekFSvuZuSDi1BYJ6MaY9q0Wj7nUvRjbzFRYUBmbenYkXNfobmALBLh8E%2FeUpgGcmjZ42GZwRz5kNvxrjWSXU9jLW9iidc0iPPidmI52S6KG2fR06SJffyVtLMLGm0MkGOqUBWNs3fR5xSb9MRdmaqJTt4vLcH99sKvuLcXCgWZ5QxPuYD2lU1t7gs6eLj%2FtQVNroR3MQBi1OmChOA0zM%2Bu1sUnju49YT8zOP1rfo6faoxWQCZJ1MPp%2Fn3tF2BSj4JjJI3TaP%2FrZrIgb0B0pkVKDXQ0Yzr38AytE%2FuAi7wD2LOsqka1HnGAEMPZts6J%2BKSOfccI9ToMD%2F0LLkXKj%2BPVaGDdr5wvlO&X-Amz-Signature=3813ab0a12191bc2e6586bff938801dc2fe78408f85cdbe076cb78a43ca61138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

