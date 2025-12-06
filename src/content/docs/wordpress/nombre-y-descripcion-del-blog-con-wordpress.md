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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ3A2BVP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQgVVGvPtX3aZdA0i172ZfF6ka3GO4WxX4hfwe0Z6WnAiBCZqBRcD%2BWuNb5SDQmqpyGP%2F28X8k%2FVnvC%2BFH6JkKBoSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMUZ068uGNCVE%2Flc%2FSKtwDcfvkicBX4XHCxF85P52NrofS8isXUuvRkW3cmQnaT1%2BmLYVa86hEiFDh9doV1BS7OYPQ2D7Ey0f2iM4eATh8oNMOEFyrwHqmhkKBwPY%2BVe7FLFl%2BnWcdavvuS2Fhq6LE8UIlz3%2FxjqdhtLvoBa1ZE0zmNrbkeYG7Md9J2gZPcbdt9Yb7piRA5QFJhXZa806E67XEV9afH5HRahtifu8Uj%2BiYQhJMLrrm2f6nKWOpTiiaqCMm4joMaJqoefFvmQ0I%2BDJxJsDsvyMTfEahvAINFpP2yKCQleoUzfGxhQOYA4%2Bs%2B85D7eoWf3xdM2Kl3N3RqtK8sUTZaMNy7Kqz6CSWOSx3VFKbgzwyZ%2B%2BVPUtS07xSbvBFIDHhb0P6nADvAKjuGHQGxmZvs%2Fjt%2F0oIaYPMvv9ljVkD6ZOXMqGM59%2FfKGQ%2FJuIeMbn1xrkagBbwLHSQ1QuEE8hJmhVH5jdu48oddEe0YIphRkui1tlJJMFfIl1%2B5BDMZL7FcU%2FlHgrSmUq0aDPsbB%2BoQVqPSWqqRSPdQ6RRo9a6mbNtNbq0bRO8FfZogmC8IBaijF9YXHm%2FwMpm2iSYDwN8LyJrgWhcx%2BbFWofDmjEqxykZQ6b5%2F1saygvv5t8T%2FlYm%2BD32k4EwgajOyQY6pgFgvB43wjhx4zCJiH3BODUr5UpuTiTemV1%2Bm2BPxGM5PyBRlGlZhaRqYAfQnjVDsGJNTcQP2c92vSKYMRpuINoyhnxP3IZ%2FehN2rXFL%2Ffj6Z9UX4oSNAwR0iS%2FR8tN9pryWismMdnlg4GC0C5uS70YRDmcTjfQQdrgnM%2FeLNbWbO6dQA6JKLXtxVna%2FfS8VJo%2F6B%2FEuI5PzTw%2FIClbjECG1%2F67QXqZN&X-Amz-Signature=0b7e97dc02aaff42f6296c5b00cdb384b772b25361f7e7dab8c29a30cb6eda29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

