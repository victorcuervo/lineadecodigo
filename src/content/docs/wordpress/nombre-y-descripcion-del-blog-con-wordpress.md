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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VE2XAGS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkcVPi3VpbWC0AFRPSTKUcQw3dgoRkMbvzH96XCuFE%2FAiAHWLg8HuW8F2D0LIocltTzoQW93p2tih7RSg0KWwUHGSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMf5HWmgccVgD6r6I6KtwDzuWyJ8QBoDnJBhR7vG2xlt%2BcPSZNsSJqhKt7tKfgoG1JE6gmcuFu35WA2kIHB9rnC%2BqIr%2F1C8mMIw75EqGP0evE1T2MSQJA2azS5rk4HPTmJzC06tLHgv2TERCpSCiguTbtYQDciEId6tHUL%2F57NqoNE3oPR5A746jgzcqOnkN82cZ3219t9m9wo4dzZ5Wb5IK9gpjeyLNtMUBEqx%2BWAcAxkpLlKe2dW2KMidow%2FoNdlKdSWR%2BnYnY%2BqTWDI3pfUFWGsWaO4l8OY132djDSnwuoDfFjY16tzHF1x%2FWaC5137lKsQeE5JPrfc1WVFFAd7i0ktkl1wrHIatMiSdrYJqhHTDDmD83O5d0%2FdxcKfJnLbEbHX1C2kEgw4tPwJuOxjoOVlMcEYYpFg0zGbTtV8nSCsFS5YWYVgh%2BgiWkCtqXaNXzRWKeGWGl3Z3Oc1%2FUv1mjJWeSV2E2qqZ0m7ntaGy43NjhrpWd5cYFBJEV71QNgSMJX76XzMjbc6JOZroLN0NkGVWK3MhZxN7%2FIEbQPYfi67ZF62iqAPROz8a%2B0In5%2B%2Bhml%2BTlMaNCiOZp%2FqwKUwBOyR61JuSGMjpNNWizjNtnFs4pgX0xlsyAStDgOf8OPD6etmN67IVt%2BPGgow5%2BzMyQY6pgH1xUfuNQxzPj2Oyt60pHkC%2F37zrNst1Wv8lqgLK8DFbKeB3%2F35qz%2FQNAtX%2FqyEn5NYV8%2F1n%2Bu9CKy%2BUyd%2BLHYuJ8iZgR8Pt3y1raXs5b%2F%2FT1M0r%2BISFJyo39l4LqJ07k99FwPO0aFqp32uBtyPHnxYb2W9cCSv17ERHWd%2Bq8r6eMTFIQLMdDL9c6PUz%2BMBHqsZtXqmC7JQ7vmXnjh9KsqlM4z9IIy%2B&X-Amz-Signature=0fa6070bff6ee747d514a39e3cab0412657c4e081dc2e8db5377899d3201d41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

