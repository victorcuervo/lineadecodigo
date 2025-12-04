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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVQWDPF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCpWrFRz8bsiQQFIJTFZBoCQdeYW4RHYLnPn3MoI47G6gIgT4zVsXi4ht2wVnMozeXsrRC5NXQQmB15S1BG1YXD1wMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDdWXc%2FhvZ991rEoqCrcA29Mz9tJgeCPBLruKbm7UcvnOwhoRQr5uIoJNb6naMtwbev%2FjtCOBJFln%2BeJKUiquwb%2FxagweB0LYZ2bx1sUInHHYjllj5m1OTSd5oO5n23B1qezPARdpJG8Y7JWxk8ZToLpnKgKN5UM5TFAoALt2wSQGbqHVvy08IgJSaEasfu6NJvfkCvgCF2qoZBmTE%2Fi%2FuBMSFJm8XUluJ%2F1ZMacgx6TDBJ36%2FtxOsP6us0NLG4NgYBdvp6evGxS9mr39hTlXYrJz2S7Nzf%2B12Qi%2BK%2BkClItB3jxhqxqyDbrbApPGdb4NyzVQ9cFm1g3gFxNcd63kkuQM6JYHdZfAUlEFsLtMZ5E9urBQo26EWHBJD8MriUcLVPr6Upd53R3snd7dCkXeRW1betzd1hXAjQ3MBBUnFJ%2FNruxQB0mMcm18TWvpvs4k2%2BgiRPB5rfuUqlX99mawuU92CINxYx54BDIMSUMn3tSAhHKAETMP4Pzjs4Eyofa9WsLPua9xVL9LDUQC%2BSGRZPgT%2BBgjsfSPa0s%2Bi6CKpetWaFNdLY%2FvIDQEXRtm9DvTWZ3agoh9qDhivN%2FaWwAFGu0tULybGy9vGlh5TFtCXMJPo2LGYNvQOZ4yMJQmQ0L7F%2BPHmQ9xzZpxigGMKCuxMkGOqUBkXdv%2FCUxqqxD8I0nSURDHMQ5ykwjC5e0f1jl2TiTD2xKOXH0jP2iV2wlmfmySYW2UFZw8ArNuqsmhTU33ZyWZ6YqxHxjyGaJHmph4l1%2FkgkScezDkCWZgs6Fr6NBtA8g%2BevKcJELs15J6rg1daNuhB3z4QijFi%2Fy18O413PFSDNG7A80ast6CxYeqV%2BPlpVFo1eAEkwZ1GK7zL7s8bexeI1dCyWn&X-Amz-Signature=e898a565c4efb2bde3284b64ed05c71441c00996cb88a0d0cbbb2072e85eec57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

