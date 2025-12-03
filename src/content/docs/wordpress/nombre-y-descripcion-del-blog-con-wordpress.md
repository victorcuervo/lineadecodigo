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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWVHMN4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFvE%2F0VlFZA%2BD2TnplcKsbT0fS%2BKp0OC4%2FNVYndFX69yAiARvv9CqjsLRFFWd43mar4Dkl1lkIVIG%2BWd9c%2ByLkz%2B1ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMSIc7d4uxcks3ssFVKtwDOSDbP8R6VCkkUAI1%2Fg3Ng%2Blk4Nj2KsMZHRjTSQmyQglmb%2FaMHc%2FbwBuNyitEHfaWkB5BdYskaVcQDSzcBuhFmgM%2BM6ZSJptKWcw00fJd%2BrCL95ySWhEe4LdYLQ8KJaeJp1vXFxHoTBdM4elb8suYpgc84oyuawShjarFHfE4CSGVt596PHX3LSjJhG8H%2BqIM%2FPPqDa4iYxxTsm4rJwX46GLZdfNqo5kSTMmyw0jaOjTcX%2BYESgwZdWa9HUaYwpxIH9WUz29JoZeWH63LHZdVIgp%2Bc91A9fTNLNYnBpP7bgCrrO0UU5w13Pp1qf80hpGfI2YW4AmBCYazL365oGoX0UeqmXxpKLlGvcyYojeG1Jvr3F1pT3J9%2BMqUiqb8yeRP%2Bwou4t6NPezImtiThrZGoYmJJuFbPhFALTQ11cSsMash8msz9y0uY41HKKYaCpCSpnmgDBrCf4BSl4cBMUtsfhJrv0Jhy3GzckTv7NGBBD%2BXfDKOUQMBiCk%2Bfw3ploWgfLF6UzH4%2BimjX6UetbJIvcOVqd4KdcrnaPHBIkliL0l6cMBdcWl99C%2BKwGMEG1KHftbkewXaAy2b5qbWFq1zbGNPXDJdnm%2BqEf5ItN8RzrZ2okMJ8ubuMDMBhZQwir3CyQY6pgFvYzyyEe9Z%2Bdm9B%2F%2BlCpcBCrCkSRY2wFj3o3bzfN4FoTUjqOahFmlGtxv4hXcvzp4X9Aj8MLmFpbimAONzvn0Et2KIVxwYNbeEJNWBUpQUDjYD%2B%2B0Eb%2FwpfTGm70eiiv%2FejpZCswPyma%2Bno4MRo9a6OnipzzzZy9BT9S1gz9IooYHzsmLx8CevLnAaqPk2EO5yNwVIDrV0VQOI7F8U8k6tNagV3npn&X-Amz-Signature=52bec8283ecafb167bf0950fb74cb04f17b1ba412c23f486626e2c0cbbb0210e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

