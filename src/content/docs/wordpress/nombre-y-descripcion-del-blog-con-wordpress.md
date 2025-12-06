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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZFZE2A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRdHJECb7W6Z5LrGmMfC7MOOSiezaeKOiN0fcNLT3hAgIhAIJLXw3K2O1YBSRq9b772inlQMvjrZ6XWTlr2iAHslL6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzS2fq%2FWxHZx63xB2Mq3AMZ5eVtN4DZLRKWRFKEILUPT23BY0tzj66cNwGpS5YHkE44N5ENnVLaW61nzOEugzAczgg8gdDhXU4fAgBPwcVs%2FiOzoab%2BuvR4W8ETEMUol%2BeNBzlo2bxHRpQKzcARdRZxOnh8bx%2Fb2FCNmXG8jZxOGwsCdRg9W%2Fl1Hh2ODeo9w%2F4ZTKg3pZQnerid%2FMQ4T8yopceL6bZtE1wHXbSVKtccRv983QJgOncKnIRPo1e2xoNnzyFNjIFqYxzMQ5HnOvTMlBmqVHFCHyy6g0mXJE24FkFZcAx%2BCbzqXtOGMjhw2eXvSYU4chATZTkAJrH9ncrFtDoCVJS17ITW23TWqOuj8%2Bbp5zP6Wh%2BrU5am5ucOSPuXKyJWpE%2BVvMgg0qMA5XvMl2xjBZm5laxxBsb%2Fjj4mdCJknUpwz6LNgG2Et8iwRS8oJDdMkLxN9HoFt7y%2BkNgMbrziLRXZ%2F15zXPtQCXS7ZOPiDy6i1RX8lIX0Ky6AU1lYat%2F4TqmnacyjoJm6AsPT7GVj4fNg2tZgY0lWy9%2BqdW1r6g%2Fz5Zq8OamvcoGn3N%2BIZCgcMzMuT5HXN77NCZDewI0O6xMmwJy564EllsqCEd5caJ6EsJDz9uY2Vf%2BjG%2FC%2BmOOq4ybKE%2FtQSDCkptDJBjqkAVTNwd1WcsYYD%2F3Plm%2FKY%2FKjsGLm%2Ft%2FKo2mvPHjZKvzTQ4uFnMwbbqUPz2OC9N3iIneJzgfx8eZQaCG3XOz6oIsENVp1JBEVABq4V16JUxPHSWdSOYs7j4FevBRayYDf9G7lquiOheBn20DtaYn7%2B2w4gtzPgNFOp1ugqsOL7omhvt%2FGwUABgFRvuyCEmyPLava9GtOetlZk5ZRP8M3GyltU42q5&X-Amz-Signature=f91673888321bb73f9fa5b5c726d02e54db2144c4a008be2ea94b0e12dbc4dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

