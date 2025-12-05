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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5YETVW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNgkUACCD%2FDL2qu0NfqP1JC2FopSX%2FxxxNorMpLO3n%2FAiEA4Xc%2FpTlST6yuTAEarwKRPL83HxAepzaYHV4XalBTBOoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGdyKZgscQOMTNbmqSrcA4H7HzTLArusR6dZq%2FIu0HHm5P1JPr%2FgsrtneS630Bb7wzprM%2BbjkivZrbn11i6MAkhtGzu9EC%2BcDJ7xKaTFvQl4P8bQSRiamcSjoI364IBrJV2Kz98hTZoewsTyaeoeT5E11kNu7Bxn4n4qibSfx0a4UHY%2FGCBIuRXEg5FMNLdU4Ci2TUIiYKp4yOgVSnlMc6HWuS4PMoCjA0QuywCcCQuFCrCYvh60bf9HQ89MZzfDr1TUXnnpD%2BbFCCbUy8mh5HzuSaVs1h2%2Fhob%2Fbm0f3p4EiKLfOc2OZW2FSghzshDXJ9Nj%2F3W1QcdKatereBmC2fKDGTVsL75j3zWbuWHnPxUclSmpTxFZhLRqoFqRF6dw%2FSF4T9J8%2F8YP38fFPC%2FrVNL9k%2FtCxrxwuJdPwddKxr857e2YhjdJ%2BFsc75tIhCdbZs8P3ld%2B7ZNnav%2F8WGkg8GmTlWaqX6VgZXu8c%2Bh5BAN4Wkwk6kNueCmDAVX4WaE00t6ofmk6Tv603Fv4MvHolY1N2LFQFcDF%2FUNW2yif66pq8eRFmmtIcoQejt50esHJVtwm9XTqKXDzamGE7ZnLiEZ8c1G%2Bzj9rA1l9enp9QJRpua67VxKGI%2FobuSZjAhtrICChr6x2%2FE5Y8d%2BrMLyMyMkGOqUBEb%2BqFsc92HfM4E8LxjOFfRlsCBgjbYLHQ4XJ2rfxlZZZo6w0MAUwV2xvygo0ok0imdNETopoeQ%2BV6awH3YfgcKGI8UxxPBOZWcs84bd3jKmJhekHD5OevcT%2B2ORCKNJMOt5qMV1YwZCxIq%2Bj26g%2FaWsaFsnbBHeanm3xEKOWDaOB6ujBSsRQajdweQ1oWhHQwZijzBB%2B3FvZvPX9mlvAocu%2B0YRZ&X-Amz-Signature=06b2affa6b40c5cdd4266ad67cd12fcbed06ec36948fa6361f350513ed93bc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

