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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TOD4G6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEveM83N0%2BMF0ldr00LEyTUQWCfDTMP%2BWpiiJCCIX1ZtAiBU2Qb4cn5PGENSj6PBJ4wC%2BjnikOLe6yN2h3poJS4ANSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNrxIoPM5s5tKwzbFKtwDgyreArpqnpYPN81w526XaN6jqkrqDisJtVpjHVgeECIaYjk5b7IImRg777H1ABcd5L5SfO97BH6LBdS1PRyr8vpwBluewIFq8jAKSfXsOKmNbxZUl3d4UBWYYtzYF%2BZlz4vWUYQMtLoQu8pJVY76psKEeJUd1rYiNNrUCevqMO%2FMOv8IQn2xdTRZ4FEWiydadrDh2Il7TIak1mS3D%2BumP9ycdsDjM2Y7V4TWRsq%2BdDrAT3V1G5A0VwwC5VW6hTSyXwGblou0wW8t71r5%2FUlMuUW0%2BUROya8wHtH2UPRJrPjUP9A%2BhEaC%2B0gEDuSdEk6IwjR54T6g4FaQjecwy78Wpv%2BdR6wIgvuI%2BpjqAPn%2BetjgkJPvNI6LW%2BELx8Kew2729e0W9weEUYYN1hlJSxsDIi0BrDICkggXNKixXBSTcN0HwijYK8TFX8kp0Re2bsRRQ9CC3vjKIHR8Crl9uzfP1lTq0BFVc3iSpXzV9u1vq%2BNFQ%2FpJq8zVUDe94jDpB%2BFaOiyyWBFBMHko5lY%2BfrD5iqqlwDnM%2FiRq0z4Rttf%2FHtEA6e6jLm%2Bn0%2FRnT2o6%2FMbwv6DW0RdedWpr0ehH6LOS%2FkeLUQa18i%2BXQFlXRmvwHzqyOGyc4%2Fcqv5WBircwgN7OyQY6pgEhNjV1n83GSWMk8z5n7aCEMv%2B2aiqek%2BXcZzaRUih%2BVJRFMvQM%2BKrBKmZmSszyGtnXUeY3EYy4OPt17rKywloiBewKIsdbswW5pxs2PeAyXMUJSxzPnkU2Hb0qdNdMDdPrcRPbK%2FtypL2134Wl5YuU0L4rbUD9hwI1Q6xqsOU8FAHH1F54R4%2FFosdkxczhQOrkN9nB6xLxSmbJSMdGZ%2BRmVoErOhgg&X-Amz-Signature=4e76265e435f7b9af9225e11fc4a5d67fd24d365e77693b1f653513e43ba664c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

