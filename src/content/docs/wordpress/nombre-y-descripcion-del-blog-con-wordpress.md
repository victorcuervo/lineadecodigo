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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQAYWZD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgug7Y0uu3UCO9ogj2pA88E6U7w%2Bh8Sb2W0JKGRpDGcQIhAIcfpDaYYQtf%2B9v8CI3gmkttD%2BuXPC4jsV3HfInGT6AzKv8DCGEQABoMNjM3NDIzMTgzODA1Igxxcu1hoINrd2VpqM0q3AN0dxYTmQurfkQl9lksXdTZB%2FEu9a%2BYy4wzeo5bqrQ%2BjnnFQq06GhUbsx04hrE1i8VlERT2j0n5TSgY%2FaeZ9PC0YP%2FuMEoEyJabEUGaFbdQlFQCD1x58KgZOOvZBtiHFVS%2BSOVXM%2BkLu1jPPf%2FVILrovEW2DvHULsYgRhp%2F296%2B5ghN7trq4fR%2BJjUxH4tl3gAL8Ye54%2BXpute3W75Z5MOF2irNP6%2F9Lj3d%2BoDn8rpS9G8ApzElcexj1LL1FP9gpooozEcIgp3EKyBfmiIXDxAgAYEo40f%2BTiFMoDRDvOqPeqest6YY0HyZb%2FWVaWNd5GKBoN4lMeohfln3NvsGGX6BsC77oDpmjkII6FookGEnUu8%2FpWyCkIlOK1nOfbkJAEZ2dpA%2Be50YuYB5KQsZNz3FrHZmYzAkyxvxGGSekrHsUj9qlSmAxGZLfZwJauQZAX1rl%2B8gYWazQZpM1VVOo2N%2BJJiXWgzy2AnWZBODPSo8xRuqdcWSk0rDk4KdGlb%2FabpLPfos1peHtRIHR3sqOGFoZd25GDZDqoVC6FuFi3dbUe%2BADXRh8hv90N%2FFL9zLwKAnsW3MqwuRUkAbZIMQQIg9FChVSW%2BrD%2BcROBI4nFa6VceK5tH3kcUO97Uj2jCW8cvJBjqkAaXk%2F4aK5u1t9hpw%2Fb5T%2BF9HGl58rBLJ8o5%2BCVd45sTGWoERePtARaAtBqWZxLVuItms1%2FoSbMaxoYiZmdhKz1mM%2FRdxxYpU8jDK896Fcq%2FXRFxw9YSp32X082ab%2Bjo5iC%2FEBmQOAtVRnN4ItuY%2FcQKGuvAXTec%2BfesEvqx%2BeEP5RV9iZIJANIhsdh0qEl3%2ByTqolBDb1RJW%2BEDylt3aP%2Bje9Eri&X-Amz-Signature=8a33fb30b4b56a257a57fbe7b06cdcb4329fe5fbd717426bc99215b26d570246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

