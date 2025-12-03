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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHTUVWHU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDK3nIG3yCiqQXRD9wAgsb9WNRDwG6zb8hC8jznJs0B%2FAiEAt6%2FA7LCZMGLfNdlD2zLigXjQyq7%2F2r7tWam2dqbyX28q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPfqAx%2F%2BgTaMP6UGLyrcA9SkEXqbyKUiSlU740THQJtJsiWmlnFejzeinbasPpEKgngQKxAlow8chCJ7V%2FW%2BVjgOZEHdLRLKQ5DdpG5IhKfvmeeS%2FnAA1euVd9cwBNkT1inFemRT8lmgsv9iLbQ3LksW%2BWKTB%2F%2FZkB1lBU7f%2BTbsw9HHOmjKEK%2B2XevqMALtEDugotjKZcdi72F%2FWXRpEbZalOmxCqWueOHinFN1ngpfyQxJiJ998G2B8tKTMZzO0oKQXDDwK%2BlfeDuF8v9VS7OEeLfYRcGNaVnOyHrjBJF4tkuX9SE6Q0NqdR0RsD1RYawh2TrCj6Lgjm0gTVnjMFoQY3IRdTUCjTB0RmL0M%2Bc2hpu2VbIZXERVU3aTZ3R8VbH00xukrDnljoWf5J2Oww%2FK%2F%2FxLCt39GKOVdwGZaAwEW46t5h0c7895Yz8yrOVYEJLETHr9rsNXJtQLnv8bJ8PMH5NpWqrf1818J199dJG5n3Gp7DJRDGo4zzOIJHnsxDeXswVdQSTwJ20Dg0crPI4JnRp7uhDm4%2BFPhzEsP77pUeLbBF62fKme%2F2FeMAhcEyRNAiVw%2FR1mmRHH0ZWhfm0OywyfQZqH4S%2BHdhiXXkDZL%2FK1%2Bq6X%2BDs1lbyKOG%2B%2F7TpINQpbkAdWz7l6MLLdwskGOqUBVSKr39%2FSrBDZYIswkEuCTED%2B1v2rDothJCajxRY67Go31m6fvlbddGZ8o%2Fbpl7GeAD20ZxdEYhA%2BooCPDn8J45rvJOu1%2B%2BRhjqrYGH5IiyTO1pEXApUiXDrrA2Eel0Q6wJ0v6PhEgI0zCCXH2qX9Ya7zszYAWb%2Fq0lTC7Os1Frv7xx4AjEpQlfPSEMUIXqc2h%2FtcbZJg7lRvVKkaSbimqcvnZmMu&X-Amz-Signature=ae857c80336cd8971ac88134ba521fe25f5cde6a891f3dcda9f7c0b237019538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

