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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHMXOEX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiF0c9HY4VaiXm66zRF%2BZegszxeHZfviJPLaSdiE7UTAiAzS1vz0aFoW3bcxYa9qAgvcI1UjjH1yfURsQa6f%2B03NCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM%2Bs%2FJ66Rh6cq5hTp5KtwDHm86RUSS3g4fR6%2BzOA4w6uVyuQqr%2FIBX4X%2BFmNmX4LnnEaRnNP6nuomKXMLPQTSt4I6%2FolZGsZt5RAVOoC5nRSLRMXNABNOZNC27ovDrYQJ2t48KXghS4MHxYprJouMagB2cVfsD9%2FPdeRTCDwV%2Fh8nBElg59hg%2B0N2gy8pWF4uhB0ngXeJJ0BnMwnz1ecC1Cc0a3U0lO52cpW4WO1NEdemA2s883bX01NpR7ixOfEt4kIFw6KyEHnGsiEwg17ro%2Fcswk4RMeAa5J9XD%2FXjO5g048XzS0UEttSKQKGj1T52e%2BgVsLFM%2B0DgQrdLAIa0eOFnW7xMZtIxfA%2FQwCAlExrG5U1KkSRIvJS%2Fu3iVY7Gq35XR%2FnuLZ0hFNylC0sV%2ByTkBHw6zPMhqqj5r3H6meyyI8WaBkIireFO5PkyEnbaMxxgMPxGq36TadO9%2F8fjXoRLLCA03LmS6TL6sRiZJuf66rDWfFQkS1T4kMpOWngeKBFPVKXwWD3HHZlv7Bb9vFyK54SDiWfMwqYtZnxoS3lD4UOXHEx0%2FrXFrBzQXsX5BTCdvqoDoA92bXm9hTSiP4y5w7Xd6mV8J%2BqW8puq1PKW8v7haVlFFLQmi5dtUwPsGkIJXlHYC4JBOicVwwlcnLyQY6pgHaDm0B08Q3%2BHwG8aLowjZYFqDQHaPKZD0fYHOrk7EOgXFZVUt3vrdoN1sTNn2Y%2Bdk%2Ba4sJgjrbV4SFbm16Od6QPmb9IMvBn%2BJp4uTSTQBQnlFj7z4qE6qqarfAedvJKIUhGWlWtVxhcdcwcUH%2FZzfubmiuTFBaRAfbS0%2B0gts5ryVj9UoPNjsb0ldHO5wq3hIHCxpwHM4fY0lnK%2BTuCfIgCOevSq4h&X-Amz-Signature=e06f5642e76e06f86d3656b2eecebb3afcf842f4ca30fdd9f61b262395041df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

