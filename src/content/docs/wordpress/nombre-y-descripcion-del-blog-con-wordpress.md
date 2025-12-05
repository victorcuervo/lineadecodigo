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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEDH7J5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjQzoTu2PVxnL8WxHd6M7TcjBHVd13UBsL4b5RxhQiHAiEArtPaPywxi5Bvpym1%2FNnuQifv0PzdwIgCwrX4t2CLlIAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO65EpWR7krKLoC3iSrcAyaOvJH1bLehXHCJY7ejCE2CI9hu8anhWejUldNtZ79Fe%2FmW8zgyH%2Frrrw6oB50pIZ96rygwgCV0V%2FOYpAPYW2EUtAsRCyu581soayJAOzCdWUv6Bj1C1C8Y%2Bz6vJhCL1eOBefvqynHbRBdt8K%2Bsx6zfql2zThcmIR%2BjTqgHhxRQoudVqP%2BA1UZ8SM8PVtbVQ7UDq4YeIs4GaRnefvE5N%2FKXUp%2BCAOz%2BWwVejWeKvJwoS2jYN5PFFcfpvm2bTveKEw9z8EoiAQADNDi8lTxsK13AA97Qxt2Ksxetl%2F3zUn5k%2FqUf4EF4F0SfwFRxNKSMw%2Bwn4BU%2BYHM%2FGhDk359z0CFBUosA%2F3tgmZooprY%2BmEu51REWvAJ3fFyzeWBVKkgwdVaLpqO7xZIazcOuzCuTwGFHuFGG63%2F60zPBnslDJ4Pd2avbJIsQlmoU7bR260Sg5xnclkkK0AJVox7RHsB4EVdnQjZwFXbwdtq7ELJoivgVgi3BqzMmwYywTHwQsNFpzSPfg9%2F6NuoBs5hvuKIhqZ7QB1JhJpTcmZOquLeo2hBOYqsRYBm6GGD0LNq8aKT%2F7KP0sPin1YoB2L4FzXjG%2BrNVv9%2Bhe16uHxb7d58c0yVQ4Hqn4XLy9Nt%2BNo2SMI6yyckGOqUBXCjZD07Vod7Rt1Xty%2FIxakzcLf%2B4mBLvUXR3oWRkwLlGWPu%2BXXlzkdECfcPBAsQcuXZtOiasbSFKVywgP6pLcYTbW3JhJ3aYRmJrdUgvhPs3SAKCnXis46v%2FA7Xa4BfJuaWZ8uiQDwoc4ttKPCIGytPbcegl4OCN8WIDFGVxi3JhGZTbcl5kIxfG9EeIxm%2B7rYAx%2FnOyuTLC6E%2F8jUKq2uQYajau&X-Amz-Signature=e34306ada8d21c9394eee09504e3d80d8d0efb45bb7eec08f0a65ce130eb01ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

