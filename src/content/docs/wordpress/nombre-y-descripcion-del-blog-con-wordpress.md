---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COWGQ3U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFb6XIM7ulMDxUoP5rtUBhH%2BoIMvW92%2Foth6T%2FFCV%2FqgAiAvWp6It5%2FG7ShmsIgk3gLIXsYQ0g7%2F3WOtcx8kArPHySr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2F42buBGyEC1UtnPgKtwDqXwFptQPUdF%2BuRT3ibUwnO8pqFf%2FluIQlLVhMTMIducJcJY7SXqRcsPd5eWRTKAlUqvmU06jfzhqIbJf4yukaRexv2ME1m2e%2F2NuqtdRB%2FtIsYf6qFytCELj90AzRnPOXyTq15W2nrPL9Mgrby%2BakJDCdRLh6d7VpYwmVExVQsFFbjkMXQti5XlckEMt3Xa%2F0o09fiYB7bD3SWi4f0zeGd48hva%2FAIqAi4CvUsixAxwGNPFX94u5eGB2lmRh0%2Bf8f3roHC7IatqCYdlg%2B1oHZLiNEhd9xzYjPshODf7w6Iyz3DaIdTrnZwsJ7ZlPqKR21woStB7seFRsJKqMhP7J%2Br%2BEGa%2Bv8dSUdNpbnQSNDQ8vv2f6ImJlrNigFKzoIins8M0VzCxkRkb9Hg5L98kR04F5eBB%2Fxg1Q%2B7c9MxaTeDSSKLiMD1T53qhrYxxhZhAH%2Br4c0d3KPFRJnblXcz6wzBhp5ww0seYl%2BqGBCkzwKlku83Kb9yDRFjmOC7W8%2FPT6PvPbR%2Fgd646ZqU2GWXeosGrxQpeaUEWdp90B8zW2W70RA52PJ3ya6KWBB5JgzStgi5dBliQ0bP7z173F%2BQ5M%2BFh9hOjpW1c9YlAYzAcNaIDtiF1G5%2FoEwkoRqrIwipHCyQY6pgFedYPq%2F1bUEC02AiC8wo6zgJSTXM%2F74zwtI22Xj7L7TgQQ9sn4Rp8gJkQXSQB4tKXDc9DX1iJpInHdGz7YAEL%2BKs3ew0B0kNHecO1sqBl1QEUIyNcXkHnCTMIOLx3PSTQThNMo49ufIOOPuFuk%2FwibHY8xVgHlY%2BAj42IgvULSKdZBxd%2BaXB0wnapU9qvX9z4o58Xm33zFZaEs9hRzYPi07bUh7pQP&X-Amz-Signature=8b3587163f4fa57d6ba48cdc6a3a9e8d717b498b708a15260928ac28c2cfed40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

