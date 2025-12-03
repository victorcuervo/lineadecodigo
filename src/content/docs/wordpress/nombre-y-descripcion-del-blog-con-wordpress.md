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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C733AS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCQNFpbVMyU%2Fv4L4SaWBDvgF86uNVNJnQODHnscEObfbQIhAM4mgNInGx%2BRYy6kPrR5fc78GbkPvQrSWaeuz2wDofa1Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxgyjhAq%2FufUGRmyHsq3AO8oJBaen1Egb8qr172eDPR6kFit33S%2FJEM%2B%2FU823E%2FyxiowmSm4%2BE8kbXAJLBaGQEJFi2AtdnLPyBrD3mG9PEHQzduZiTCXPHqMk1hAEVrEJlwN2kK9EOn%2BTjmoXB5m8EAYYJCtlOX60uHG141hk3O6wbYK8URe0XFPTGzdF%2F7QPiikJ9C0DjKb%2BntAT5Z5Ri59YxShIqXvPcDlj5RgKHzLsU8Z1HK4g1TI9eeomN%2FgDE1Sjp7XtXpArgyft5Zd5CeMrUZnXOnl5%2BbBu2urC4aWEDCLz1MCSLVAeBVk8SE11WJQBB11vxkLz1VdPMIZo5G1k9Xg3neZ1tOkSc%2FCq0%2Bc0GdSGU14AMljBFV4LfuYFeAMpnmWsJzrCRNtCFpy5cFX%2FvPXDfMn4qIPBi3w8iZmowTqWLZvmaUa5thCHoahZDDO1w%2B9WhxDaw5JxWoOQxKk7bMdvOoTLyfVKqq2L5ex3kcAwHU5OqW7xHzZpm607w22X3o%2BWefYuRoZmNqWao3pAZ3V0oRra31Ugs5sKvYeoEdyIH%2FmqgFEQgR%2BCBDi0Zdg7QLFB4tqDMclpW9TdEZQkfpZJt7QXiNGutykv67zvN1RTT1qKW2%2BWsV4mWTBYh1q7Q2h57mjcFrzDDz%2BMLJBjqkAV%2BiS8IP2hEJAJf199sUBUrio%2FoopwR6jrE1DHIeX1a2FJjg6w5uFwqam2MU%2FWcNzoE2b8c7zxyAhU6%2B8t9QcG15LaP8jf9I%2BgiisVC8lU4p7rsV99ySYGc%2FSYm8fX%2FN7L8gAUgmmZOB3tpBQO0NbCN1GhUUdajD9OmIUEbB7QLipsmvVcdJGwTmUYb1s%2FpkfGsMx3pZoJvr2ttjLlVXBjNNlStT&X-Amz-Signature=1b4fc43126b54a881766a8af76c526990ac848eb27d265ddcfbb63fd870918e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

