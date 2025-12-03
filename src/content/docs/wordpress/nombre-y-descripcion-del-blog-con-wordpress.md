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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6FYCSM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCFSwsTo%2B4Oa56CxL0QPgdgO7DyNMODzBy%2BnEthuc%2F0VgIhAPkfKrGk2HBDiUE0XhHbsU17Kevtb74NI1OalfpjwgdFKv8DCDYQABoMNjM3NDIzMTgzODA1Igx9Ja5UiY6qUqh0Oqcq3ANc2owup65pE0cw%2Ba6QU797YQm%2Bg5BnjaSdNNPnX4l44PYInW2lZ%2BpTfwbCycBm3j%2FHOUIGm49qeIAWCWRVMqGxtJyvMRrI7lZk5ylRCNLKXfS96ekk8qe5Pd1HZYzJqU4wgCDkTdfbrcvn%2BXhNKge%2B1FkqKSYYd4D%2BKQY68wkbHLoA4kJniyO5gwspeQ%2FGsOxARoiV6kV9f2oClaQoMYM3sNSN4ownET5d8tpSrYClpvPCPzeqbmgDEli7tUlq86vXx10JpoOg2dZnnr4J%2BudOXPAQwJYpXUmXJ3sSHwzHgTQH6c%2BDgUbgvSfrY3IJIne5DDZ1hoamnWmkxJj6G78P%2BwDkb7CrXJF%2B9jcnbkZ2f3UAGhWs8ei8PbdoImwg1ssFleJIPoK2JHvZo%2FpAiCCPQaNUjr8eX5%2B0xLOo806JpgsrFAWbfDFKwQj6KdhIpdPJRnLJDlNwE8pToVPt9%2Fv0IE0pRKTIvEympk4ovz5v%2BJ7AVNFclr4unmBpAtGISfFebn4fRQDsV5y6rV81Y0i3eSqxFuDV3p5mddxCzdepN9aGI3QezC421cG6OroxtxhxEBqQ9EWdg6lBMh%2FcxW6s2%2Ftzfqv4C4uE0brwVyrn3mrExHuHt9Ry1fBFUzDWvcLJBjqkAfDOEqOgaJxNcOC1dQC%2FnyUXD1%2BXnJp1N1LLLyTQkq82l4qYrBZjmLVOhw%2BnMXWVWIcDg0K%2FZeRpFimQGswuzylRtIIGmqjyBca1Mb5rDzd%2BIhFW9MIWM89sY3dHex9DHZrirsUIhvCtHObDh9yijoq%2B%2F74WHHmwTFZy1zjR4ZyHFy5xZkCORNuxwASjfRfc8SjRW90MJ%2FIzPPWt2ykaoOeEVJVi&X-Amz-Signature=1348aa87fc96012eab9d52fc32a97dfcbccba7d9793f06dac3f24fc6750ad0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

