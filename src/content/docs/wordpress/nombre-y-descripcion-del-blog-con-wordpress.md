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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXKLIOB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrUM%2F7ID0PyZM4eV5ec7QeDeASwoZBFrc%2Bd%2FMNOzDV6AiAzJiPpX4hsf1VXC68Yx%2FFrbJh8nHO9rQdmJ86bwh%2Fy%2BCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMGSzHxizA%2BKo2OJUDKtwD9j%2BBAEwufNpifViU8b2Smbt1NQ1KACXb4PqyrCH5rHaa4jM7J2Itqk1IB%2FKHiiPdzOMFYwXvSODd5E4rSDd6lKZSsimFKmX3WUD939w7wd%2FcWHaiv4mkOjcLws54bRE14Iz1YsDLGjpPyDCqg6VxuXcKs9xYYPyYHnkmawDcQ5K%2FJhh8qHcYcBrZCfnKNC9kYHRkBfknZete7FHb8Z2L5yhwTu8Kmu8zuDM%2BT2Q%2FDheVULkcrFxc4x6QTRGtVFRZb26DuUWQQQa7Dk8TobFrkbwzB0iJNpRYkcLKBM%2Fy%2BgeF0cdrh6ujTS5X%2B3BNjUxQxvQWfw9rhmtYGAZWpMC%2FFQz1ZBJaN5i3VAKYQNm%2BAhp%2BPo1AdjspL%2BLL0rbPsTh0v7WytEJAS%2BHdH0JTkNJFwHKCKoubdEYJpSaoyYxWSW9%2FpZuS1SV%2BYj9CBoPz53GObbCNEu1uljV%2Fhn1a8RUSMdrfL6%2B0fTcEhoJXaODFHQXgBmvvvfD6KH8ILQUE0DImjV60zyuC5%2BvI72w6A3dS6XJTKGj%2BqfbMMbvN3HZJw8w%2B0%2F8pYwlKemS6bY0UConqsuT19VCbqWpjtlVOhZahhBv7myVIYW3LXaS%2B8o3Ss%2BKzE2Y4CVO8cwyF3dcw5q%2FJyQY6pgGAAAGjOYmyYx4WePHi1D9GMv3ZA9pgINPa0PlhcFuqu2ZMVarkg6gQ%2BbR6c%2B1qWESJ6vqmHw2iwJlk0ig49HM7IrTVqxBlMUgo32p4WCOpGuLouynG3iXjnyBhkMTRjSR0KaZUGOT%2FwJvz9Q3xLWYI3N34Dxc94Tqj6erWY6gYfwqv0n7uBDVjlIZeuRAnQOBXviYEDERzanEOoypj9J3PYurY%2FCL%2B&X-Amz-Signature=525549fd9666c99ca98018df46c0b9abeafb5da122a2942633cfcb815202da81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

