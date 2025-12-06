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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWLHU5U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzUvwNR1qH3Nz2aSm4%2Fr9lAD%2F%2FVGrloookaODoLKxIyAiEA%2Bn6QnxSMhnLhRb3yASuUPH%2BmQdyzb58aQdYRAa3iFRgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMWKjiEU1idxtsqjJircA2HzVhcfAmn3DBQeSGpNuYbmqdZiR2reViZ7RJHf%2FwAhyMSmzZlM9J%2Fq3atwfrF8t8PDMhmJ%2FgbomZ%2BomOT1k%2FYiggXWZNm9S%2BHNufr6ocwQDQiLnTcE06KHR4HQObORV8DyUMgsHg0dbdcrSfFu6ujJt5K%2F4yp7cAeN0AUSYutCzNIXLGgjE9w8tL%2FM6skUnc8Er7p1knkQ%2Bd8iDVsCqhUqFGSRT4i32XgmB91VSltb%2B%2FoaYLDjYziK9Q7z3zm7XmpkBfgX3ndWl2ZQEzme%2Fuyqne8MpyGIuM5NgiUaFIlPsT97YBT2KavIDWseeGg5jdE67S9nT8Agdb0u1dF8W3thK9XsERusSuh%2Bt7AtEDIGk0fcS3HSv6He%2FBIhCwbMzY%2F01%2FlfkVmLxCe0nQO37VsKZfbZwGAyx9d1WL5mGusU7VdoTanEeDshAEmTpQZ0SmYuY%2B7FQnCpwg0u8G7igfL4QwYIoyTnzovkFu7%2BQOdr8xwXLPspZVyIL0VvZcdiMGioyvCbTw2I%2Bf9LnsClNo4c7OsBlRmaOxo33yYEsd84w%2F993XZ1V6R48KGjDT3d%2FHTUel5SFNLIrfFNkW5Z69m4DL2Gi1uKJgWGPRR%2F1bmsmL131H5v3%2F2qHMtIMKam0MkGOqUB4H4jzinJFZmpWHsNIZmnlpC5f7pG6VSBOxnOay%2BYd%2BzdSLwlAPi2%2BVIRG9SvDxy4rLXy3V14MrM5BztqlxhqHoVLgjVmQLK2YUUTq2W8NV%2BKNJZXdfQT1TGrArNLfxdlUFLps4qPWsV%2BJn9PGRfzUwQjM5hMQoFQ0A%2FsSbvCIqfw%2FvGqBtapNY6HX5ybQnHBYb%2BW8RXL2aI%2BeUEqcxm%2FRBEZd%2Bn0&X-Amz-Signature=27e2e2aade2fa976eaa0c0940c9118d8f9d704e5dbf420e9e8480bc9f8ffdd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

