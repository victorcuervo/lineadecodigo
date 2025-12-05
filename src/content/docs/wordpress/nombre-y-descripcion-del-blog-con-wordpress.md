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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHBMG2I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz6ZX0JUjIWwivEQ0g9CPK%2FQwvUcs%2Fx6ePOS%2FL2oLYcQIgK9LHo%2BCqG52mVvKzuojuIEe%2BfGGKuAqf8WniPDxBgAwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAU%2F%2BGpEUsZTn2R20CrcAwsXhxAtt%2FlqBzkJIM4B%2Bi2iGddRaXcORvsN6SBnAUr1TCdViaTAfA01SxhxM78NxfRbRvwBDJqernP9m23lre1L7AF9IE595maVeLaE7nSZejeTpfvoP24sVbqjdE%2FJq%2BqgZXLu1mgCmWHQDMAUKBWBhxijD7YrCrid6IUoGEyhNDAxDuwrHgwDcN%2BgJH2BYm1r8YoljFm02p6RxwFx0PnoWKK5TzSqDZ3ObxYfHCvu7XtycF4yhaEXCzmdXE7uftsTwC%2BmnAFiLAjK%2BmL55zhkttfxuGktGXVK9n5oFtWkhspxzbcGmtAuAav8X2nqJ2UXzmSjl6LiDIz0LTj5FpwlAYb1rwRE3QRIX7n49%2BBAo3Kw%2B1sMofJmpVA3LpAogisGYpEnXEG3CtVo%2BAPip2NotDu2AtdHHUNsq28i9vBAj24Jt4%2F1s5v1Q%2F2SYN45WzLn5ZZQGfWWsKmbpXXP%2FUH%2FnaolKw%2FfSwVsL0r4eSWuXSSJFIQfee69IdH3O4q8RzVPcfof4IBF8OPjWjnTfyHXMmij8QdP55EWYy2KfczaTFR%2BCD8FFzrupQWC2f9pHMbShz1L9TBUj6iOgMs2Gk7alqbSJ055de%2BdDErOTN69wd4bLxnZk05kZatsMPOryckGOqUBsvMJ1OZdo9fDncEF6ev01MQIOyEW2lXyDSM0xp%2Ffk6%2B4fa6iJwVzb6j7Cfn%2Ff3vrlGiGVprmGho%2B7KAu0MCRzrQ57M5vkz4o7Ch%2FfomNRZYw%2BheLyTes%2F%2B5hLM%2BNHvAaYzhyBi%2BfuHlyE5BJUGanwjk%2BEJCrDY6P0XlXkNkckt1VzvVr%2B06ManTAsKLQc8H46eVM7NxOWP3mTO97J8gpIwpT297E&X-Amz-Signature=5d6bd6b3eb533bc2fb56caff45a7b81e88ca4d88a28616552eba81e6e2b61f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

