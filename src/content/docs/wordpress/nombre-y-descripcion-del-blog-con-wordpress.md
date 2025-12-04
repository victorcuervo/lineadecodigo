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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW75CLCI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAOOJTQYm%2F8e32lXq%2B9eKdpXAJ3mrlakxdcA1wcXCbw8AiEA6KnrHXkY%2Fmxdh1JvvaTunVtqh1U9kvowrMYxmJwEoegq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKn8YXZsRcKjGbeIbircA5MrOIa4sxEos8x3u04aYbM0puvUfsfZjwoUABURYkoMNzAH8ypRsChYTH30sCU5I7DoW0A6QKNjWREo%2Bo26osjn6RFq3F4pxg0gxuaf2eGbXFNWIJ6LTPMFtYAYbF3zwaWFcrgUTUf3dRuFILtYzNcSe2SlD0Nr%2FHyHushKhF6fzML%2BztNO62knHsKDP72nizLAq4SJs%2BetEOusuMX3Ozp80BGI8IerOx4xNJmtmElKLGmdV7B4twXa4sTKEly0An4EkgEWuj%2FDGBUlgaGosQw1t3ikhZct4FQfW%2BOExfwomKFcqXsIs0aLez0pDG3%2BEhIhANBt0YNsItPrD5G3CBnHbOxGx%2FDgmqGfdDnyEmSt2DbeGyy5uji5yV2FW6E7A83yLe7lmR493XzxemII91X10v5ib3PZ3%2FJy1d7TGZ%2Bvp13XOo%2FoJZR6%2BcnJ8vQVoWPDLAU5lf0OwQzpSOmELRXfEnZBLA96RveBTuOx%2FozE%2FREW%2FC%2BbPDT9IeuUVdLtO8Lx3R9aDfEUhs3HtOO1%2BQlpsRiB%2BRY5Qjr6kwLCxQG1m7tmnQEEZFr%2BFEzCx7U%2BnMEXtL7yswe%2FxaD65Q5NiMll3XRGEz9R3RKcST6Xt5fSytgZh5c0i3MctaWGMMHUw8kGOqUB89NH34GnDAxykkBVpmsSFs6Nf6M19hWUF4MEYNkIgGIyVB%2BQG7V7sj7tnsHK0flV9zR5dIkAeGfb5AycXFaRyqnvhFohZpEY12HlKhYbdS6B1QhJiGes3%2Bmdqt3qBtRHsb9SgVJu9p1Gz9Evjb3K51A3RDxNFjhxfa6E0%2B0IrqETIe02wKZnarZWumiRLbpmrgv6h9nEG37AEqSxm3%2B7xKD7ZDB8&X-Amz-Signature=1763b0641e809cb8e5e2f9b07cc1bb01822eed99281cefa4ab0f1f67f88b67b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

