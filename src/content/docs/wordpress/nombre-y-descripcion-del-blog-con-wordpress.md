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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5BP5W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcifPPbewTgnuclgK04nPbxYc7m4NtDHHOIg9uH%2FoPawIgOWaTpETX6VhK6nNvM8ChMoohI9kbYG0Hzm2Uysp0UhEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIlGUEiv3ukRreuZpCrcA%2FM6YE4dZw3vfgRRiSiicBuA8aBNB%2FOZOvbP1xRVGpa%2FyXCSJx%2BZkOqQbmibgpXaclbcNuT09%2FkBGcTg8%2B2cvC6eCJwbfFCQgLUFxzhRdIcOjtGR3vawI%2BBYXcRxCLqV1XEbhkeSz3w%2FDChfZxHK4emSLMwHUa%2F9iM%2FoKTEmi0ZljDvveYXpOWzeMw6c5QzgSK25JcGOAmI9136r8i2pAftaJ5Cjo9%2FHtMbYlN1EKNo5rvIkb4n3N8zf3S%2FIAL%2BX5IdiCPDhss4llS%2FJOOO4BYDOZA0KhcEYHgFeOqqPf%2F%2BtXJ9jvkElFV4t%2F2ovv8t%2BSpPS8ZedgCTayC4uANqqFZTN3hQ7u%2B8cZk9KHlXHvEWxTz%2B94S86IyuB8d%2FivpSU%2FTnqRN7gjTzXt5mJiLbgXoZ4kLrxYf6OcaOwryNpPhfvVS2Gl6qKdc9Kqp45ip3U8UCwdbCkC011kD867NqHta%2FYbtXhcT8nZflLY08GPyf69A0pSPl9FKBJBbs25cZ6gkx%2BO7Bzq3k0dz8BMJxuuIg9Gc24u987LoX3Cdcg7NEt2PZ12VMcJH%2F%2BKAjNKv1kTUoSVfkk%2Bzc182SjCZY8tzTrbzlIWYynSkWljcSzVpa4ccu4rywckLbvZ%2BllMJK9z8kGOqUBllH594U548BXeheNsb7QBxYExCPeJMPreS9%2BL3kQRgIsFGxtr23ft7k3Ye2s7Dx5y4AqolhS%2BzC1Vyg%2FJ59yqeZEueXaLQpPNIi3YjNIvZjG%2B%2Fvi8Gfniq5uOeJ5qPRqpG8Le5vSuJjOKBsKGgJ0RsJsjngdjoonDmtPglLpiUz4w3FultLb4BO3Aal3ZsZiRIY%2FwM%2FrRQWDRTiLTygWad%2BnxHkq&X-Amz-Signature=ee3c164fbba4b453e290651de469e841f02b0da3681921088cf7a0aaf16445af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

