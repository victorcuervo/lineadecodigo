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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFVG7XK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQtaFJy9EMZR%2FjOR9CqKTbpbrBX%2B%2BMB%2FT5r4y9cxcMxAiA72Qe2BRTAn4MrGle88t50lJWIKLMZAnhgjW8GIINSRSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSKzNyw8sKxuhGOVHKtwDBNgPCf3FG03lkrU8TbYzuPGVARmrAGlK%2B7vgn9GCzhpiKNhoATTrLfW9YSAvzbdjWDngi3MLuh7nNU%2F%2Ff7fevdPohbdZPCZwZyF7kRAS77qvw8EXc4Y9crIlzIt5dkfF3S8uOhXrxQf9%2BRg%2BRbGDmslHZufff%2Fj7kuYNd8gfCXgSOBVTGludtWjurSrlbSL6FZn3LkmUjUTn1gE0%2Fhd%2FpLC7IdyfmNQ%2FFiyd65uyw3bZx1kU%2FLxnqGWpxJLQSKsS%2FASK4O4w3ZphQX79xwy4VdylyAhzH%2BHMMltm89mSUuYA%2B0ArjQ%2Bkvr%2BOHE450tuI5MkKNX1SqZI%2BBPO%2B1TLXe5Xvm3rTsylhwePsJ4FRdhcaD1HE4Lv8%2B6ZQ66wv3I%2BwK%2FiUqAaS0mgbPdl3LL5xCBL15aj3fdNT%2FFceK5oNjG9ts3Msb8zhGa4yelb%2BsIJWByKwtA8shzzSiw%2FV05wjkQ5erowy%2FlVCOE1BdkbroyNJtV08F0foWx%2Fh8LeqOjKjEq1Km58iUT5ey5mSTbzlVLQr17BdogEypKWyT5Bv%2BcRmyosNqmqcx%2FfdX1TqtziAbA0ssbqKVut4qLqgwXV8zHrQ52WEjs3hDGvUWAW5FSNojDBzQvGEuArIrsgwgPnLyQY6pgEsrK%2FXmYmIw%2F814eu9ce87mVnM4FViL2y7Sgb7ZsqBIIO9WYL4zvSmeoOqXOCg8wUu2DDa%2FcnmPQMXmiWMFdO2KqqW6mQxIft8ELW3r8%2B8CuEPs7INsZc0abeKLzSYbmRUg%2BQp695JL%2BnlaGxtU1zJmFlx7Rz3R%2FmUsoQIZmK7U4PZ99JU5nTpC6VLOJyG29KA8aG%2Fcldyt5XLgxKSxJFrHgEmPDBM&X-Amz-Signature=47adaa06d041e1ad0419f5e9e24e1bfe970b0250d5e48217a9ffd8b2d2455814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

