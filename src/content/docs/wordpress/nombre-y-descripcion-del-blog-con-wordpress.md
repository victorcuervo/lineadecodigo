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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGQVXXU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ5QdnuvDoKuhbr2vgA6UnJ4b4zRCAORUJRPBME7UnFAiB%2BVgUwwpvkKoYkvgzkQ6mXxoa7yPZQ6%2BJlq%2FMEC8ci%2FSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMFW1VQ%2FXRBzildOBuKtwDw43w0qznEY9m1lJUQMI8ePhLpY2MVxDs8jmwSXsBOiUOPmGgIL%2Bwj8UrQAGEn3SJ0JvbMi8qyfYhm6zQbskBk77GsfnwKzCmYcgDveT%2BhDVNIO6kt5z3HD4dLq%2BCPzknuYyvVQWr19CYnsmoPVF%2FLsVelSV6SzsWJNg%2BEZ5SE%2BG4rYmbo94v8zpHgnlEXHNPCrbhEp6SuAaeqLOJc0NdbKgV%2FyxlB0MUKSS4rkVkyHr%2FkoWoq4m1Kol88NYpH%2BL7Vb0qR%2Fbeg%2FVHxqoXYHix4VZI0KVZc25Uu5tcvIizvVFCJUPsi7B8a0hqFJVKbdUW0ywB7TVRuv8cjKPsAnqGHX0qpI5sFIRMbvaIpXi%2BF85AMNsjF3XWxnqlbtK0wBEy5u9tm5e%2B7n8YwQFW9XP3v3ZrD6ktyugbcUcDgkQxgSmnT4F7NaYNep98IdShx385EGVnWj%2B6rvvO8WUSSUkOgPF3X7PYz8DScROXH0jozSrWxRkTklqVjNaUVjSeNCW46rwAUt%2F11pva3AV0%2FDlaQh34qjj3qrkDOK%2FOw4mAiQ4F0lEaPfqN3CbcV0qWbEgG%2F10XgX0MNpNHbm89dehZ99OF58l4%2FNs00zt%2BsN9yCt4Jg13mgsZWYG8l2KMwsqvJyQY6pgEPnreiP18Knz%2FU3VKUqo%2BbuXVgXS7ToeTg%2F0SXUVLXZDENJwNYi%2FhqlWc119DROxHcMozvC0H8d6J2MztFHM7maqERvntXZNY9K%2FYxnqFLu7jOAyaVPX7ze6dQgc638Lynd9f%2FsJV33a63FpGTmt0ivicYndVmTVFeA7H28ZA%2FIOn2AboazKaH68ump25OQ7obOQiIYMpDJKPWsw7vqzJYsPSIdb7S&X-Amz-Signature=882e41c9c19b685a5c9617183752ea2b43a03a06f88bbef5367b3c5a132f445f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

