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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644XOL6QW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxiC400bTpEpiUniR9dQYuu5CnhmVs5tHWpdI0A3m00AiBL1P9UJ34KqB6gjMguXeinBhmQ5uWBksN20BBm%2BvMWOyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKR%2BKaQDq6%2FrR7KFGKtwDBmnr6AK0UL6T8HssyPhCSOe9inq%2BQelWadDie%2BxZqvWEVKg9VblbxXOLkBZ4RvjKk9fxMXuZI%2FoK1lSyXGC9z5jw0%2FonDqsnz6%2FIENidS7TvQ5tIRDx8F97s3MOXUDsselVE%2FY5qWZBbSjRyZpLb5O4SmvJcFOzU4N0M4HQzBoKa8fFPefWDnXiIXmcMn%2FbwIRS4q7IpWG0G3jD6ejLRPqBmegBD4r9Pkxb7BGdjT9T%2B5e49APnPrkV4tkkasuWAApgNqxvCz7N2c8l5BBTMliqmIwYSB%2FxBL3xqwwj5g5HLWxsvL2AOGg6PXLeJZvKKbtv86SAXOMzQNYpxM4UkC03f7tGEQH5jDWIk9Ra9eY1jS1%2By4yr%2FCKRdMKevcp9pPAfdwQqNRAVR%2Fya1iKUmZER3RClrbPcxtmirCB2eJIirB1%2BJxmpQnev6okc88zxZ%2FrLs%2FEd%2BcmgjFMkdjmiKv6PgaUUDH7EiLOaI1K5K38%2Fo6n1sj%2B%2BtLhl0B6WJlWFjbgT%2B4t6lCnMONMz96n569O%2BgCHfDBa4AFATjqhbKT5BciLL7V7fl1ZZjRCxBLrUUb4KSA5MjrIZATnoqhI0Qvq3cYr0k27lCWTKJnbawcXsAfbE%2BrHcgILfqpM0wi8XRyQY6pgGLO7piKV7jHOtNYq4wWeVVvxvEs%2FEuL%2Fp80r7Ymm8cSFmbXthO07pwSPKdeNAPgc6YfGONHvCNBtxGRS7LtTRAXaO5gVIVp2l8Et%2BOBY%2FKhkwwPfPFjQ85v%2BSm1628s%2F%2BzE%2BEKw8bxqNsULjv4g6Co8xfplQF3oZnGeAVFWj3s2TWDgp1RmyntzJVdjAMJ6lX53WwHw1RYUpSbxI36Qb4Mdv%2FrLlY%2F&X-Amz-Signature=82749622c91c1f100240b7f0ccb896a1f19a1c8bd1596cc7bf41ce5cbbf0d84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

