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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZZ53RE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2xe1PpUX9eLonfJZEMw61be9bNPzgiEodamyjNMIrHAiBzY76d1Bb6RS3PO%2FMsyQfuSY%2FPLWsuhSIGZwPvqjsswSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMT9G8sDkEyeYO%2B5KYKtwDg6d4X5Tjhgw0D5qR%2BCMyU5GK5bSQ%2Fq1lXbL7eMc%2F1YtgGRHpBFH25Rg3XQFtmWy7%2F%2B3i1z%2B0Rn46JsA7ZEYC1y5K1XdkEQ16VXxr9sRlksiFztMdq5WSdxUdRkFp%2BA4SUhJdnSf2N707LsuvI6R6t%2BLTOU45FZvfnYFGURP6MB8fLwWFv36fGzW%2BksRk0SWmAQwAwKiD6FHOPXQBldxsybsSL%2Bl83asj1x51HeWi9S%2FD%2BfN8YynFLbkwTvBkbCuWWLgaQS0h4RgIBJfCHzsMgFxR9B88FbsAWV%2FGoE%2Fy8ojPMGoQCQagB%2F3a%2F%2BeldY4JCtqS8xpgSTL%2FnBSJovOFwg47%2FtFbQfjsznr%2BnzUoz5U8CTXlUUvuGKk%2BAhYOvxI6%2BQuaxgndD%2FRL3MSzP2zRcqvAuF3N329Z4aLZBbmFilX3v%2FkxDc%2Fo0v5keZRNfibd7Q3%2FBzAiLekIcPtCw%2BOHPTJdOKlpqBj8P1B39gga4t6uahSgnNLIOCvtEo65mB0T2hdULlnW7oCRfYERJRTh6rk1bvIqL%2FEYdKLs%2FkhBQS7ni%2FtUTiE1mM2Ws1IWexKojkCzK8gubg3mw3qJaNp6jbrmIxFkM3Ih5kkHUSte2XtxJnBjObnuui%2BgCK4wwsnRyQY6pgHT2RHFeWolb%2B8r4PiEdDnxxWGtur0mu%2BjFQTEvoQUceX4Vi32fZYtCa2ycJCi%2BQXeyZnfmLoc%2BimTi9vyOSziyViWLktz%2BvedB8fmfsvIbhzKAysEFu41JzFx7yuUYQvUbCRvDowBjqPmKqhiozydAJtuNQQf0rq12iL8FGY7fjDCmp6nLw8fVFc%2FA5mNVnsjdrv%2FQCNLOqPxmgf3AjVdiFlF6wLHO&X-Amz-Signature=0895b1b9656390cfa9eb5d83b452181fa9e231f64940bc356b6322bc2baa85b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

