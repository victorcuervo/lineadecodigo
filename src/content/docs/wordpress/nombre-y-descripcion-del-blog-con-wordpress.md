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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7S45VC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICyi2H5BK%2B0FhLvwYiyUybhoe%2BK%2F1wLmucfZk1H9626QAiBZ97a4phcPU2dPNxDgQRnk4xfASjK%2BFrbfpnEhZ2Vj8yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMs0eAJOE3bBef%2FVyeKtwD9X8ngGnTWiwu%2B94q8Lo2vt5Fwqa45Scn8n08qNLouB7vxBf2FRPXr8WaUFBIixRy854qVRQmx%2BZmtGkLSFnBU6599%2F%2BJO9Po3kapWl09nsdV1qdzCrJ8CHtD5l8d3IcUpvpd39Rtiuasevq1batqdjtFr1As8jWUy09J7VsrPaOxHe6o%2Bvee%2BX1pk0rrrGMU409qVH1b6Bw5muGX2x4giwOIG%2FUVM%2FD6CRtpcXZwvFJhSUp7ARuYmf1OvcI9A1pHbs5Z9ynT%2Bb%2FvTs6uE3%2F7kzUC0FKUoF1V4%2FspkkmVqDjD3DwipxXLAY3J9OgCp6rENX6ZIZh8WRJZ2Ag4Qp%2BBtDZpoBQiogm8kmKQHmR4AigfFQg%2FLhcTkzkniRyugOE3CFPRIU%2FkyYZKl8kohR3Rug0M04a5q5pbUMoXG6f%2F%2FAwOa0VLktdLGm3LBWGFuIDeCEhL3bDOTUKGOgOb8teav3dx22Lmnnvud97AyD21HB0M9jvBx2ISL6WCLaSHeUOkTXWZsV1mS7lliKi%2BogBVs8qxx759DuKA5ouc5O5z5BlIbMW5sxAf4VqXRXYrc%2FQKjrayMWbbi2btTvFejbPH7caJAjTJtjOxS%2BojwClKYn76RHT0LydJHH0KtGQw9ufFyQY6pgEkc1sHBcLdrPT8s2UI%2Fc1ekrDDZeBIIB7wvbahs8RaLUFnr1mQMc3OjeX%2Fm8j8IrStkJL4db2YA1IPEVtlgUnPTZxR7k%2Be%2BfS4So4pHhPUCqz6x57v%2FgEPs%2F78KHzoFAlgw0SlE2eBC1BeeyugJJhLrgyoC2LXTFYFhP5yyo4AkxRYlhYQOwJWksFi6q18w%2FywTpSPaiHgpTHS1%2BB%2BS%2Fjez8nww1iu&X-Amz-Signature=de9cd61c3845df1d5568b73f2dbeb8f5cdb723fff50d975af7beab3766a11c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

