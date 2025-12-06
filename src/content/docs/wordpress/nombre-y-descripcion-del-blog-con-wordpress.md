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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPMXZYE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf51CpngCya2Po68W1hFUhRN0L3H1i73sG1rlPT1%2B6RQIhAL6y3t4e%2Bj2ItveaDLShkaL16cJGkaErAxnzX8yejtsYKv8DCHoQABoMNjM3NDIzMTgzODA1IgymtNwFHcVMB0x1bh4q3AM9c4IrB5weDSKyJHR%2BFlRv3gtVfqjI3%2BReTN9z75q1c8T8Lx%2FMeoLS3n1jZYkdo6EcbVgf%2FMMQ66GBHUsRqBGxiEnRQODh0ZfPSH6E3TKjOIL7sHQDy4VI6aPoI219c1LLj%2BdbQUY3QT1tCB41BsjSyxyDNs8jCX3HNM4gk2CYbG0LBxZkvf0Y0ULfVwv4OYu%2FrWm34TkyusVimWAQvGziBrpLFnoPDeowpCL1OTAOEcIlIq8ge334CDIv%2BFCcEXhCRY25VG9HTQuKIaE0PampQXwhmcH7xQ40aVYUuHmkF2mGlLXZwY75zkriUUKRr5auRztrxTtT6%2BJ%2Fn9Kwiz0s4ISpHYNp4x3xrD5kmguKuIdGq%2FVl0kFVMmFEhve%2BfvUjNTQ4YwuS1v%2BhxAKiUw15vLdNBMcI7bpuUUDWLLGTnqjR1zK1HIRq3Upbm%2BFz81WA%2F9elqce7We9Ry5zY4asMm4%2BcU%2FAqBT%2FQuLEb2qLhV95K0Dvu9VaWd6jnP6%2BpTyFB2TMVogN%2BZ3vV%2F3l0fnUF%2BlDo%2F%2FZlMB2yTh5Th7l0K3Q9UM4%2BoSvYLPUhLN8pLERy6la6dE5Y%2F1LFHcRgU38uc%2FhoplK1I%2F7zdlETFy%2F7nLgCBll%2Btrfl9KSHIjCOxtHJBjqkAcKeJFqskX90CMQ7q0L5Bt7bJw%2F4b2fGLFzUOPerf3Kjh9xRVmM6uEVM3ktHw9ggpt%2FoYo3zroOLT%2Bkbspmzy2du5WRtLxaEdQED2MkxuuPKoSXEXiWcc%2BYF%2BD00Pc012xeDyY6wFSDpRymuY0IdJ1sK8kYWg0TJs3JGVJwjIlpASGaEvY0mVRBPxnG9iWr1iMBsonmCuD53E54US4a2ug0nKRCy&X-Amz-Signature=4946d3dbb54b031d9acc28ff676138b9e3b0a1ee3de7a866abb82903da20b171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

