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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV22FBV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaeKx3ayR8FxeixGRraBCCe7DdjFVQO1HGFDp0YIxS5AiBH3VMPcwvdhAC0BmL5CygwI1wKPM%2FdeBsTsfsg0DcZyyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMwpByvToDi%2FTgiXD%2BKtwDzwE4ZTx%2FQ7zRBYmdsXIH1cfSzZYCFB4m4BvF23oE%2Fm0Q7JTEmySWB3UPAn0YLPEuSKYzMKFjCqUG4eFPgw9njHBX6rUQbLPsSj4glX4nuG%2BNEvtOaWIg%2BbRntAQu5IDKdtcNFCq31Cg0e%2F0Nz9U7oyqwsSZaOIBjJ%2B9Uo%2BqlZeZARwCkQxrsZBfEbSXs0Ed75hgwpETmYLn9Rfkro0fjuJTksrALOtiFSQx%2Bdq7yNrwC9lLovfu2vw9Vb3VJoI7vkJssalAI6IHhLUbTGVCstVk6YDFekCHTVHDbSg7YOQDmAnuzkFZ%2F7Q%2Fdt9RPLQtfttg8Ay8WJ8GL87lIqatWlUp2RnBApPemUoXj%2BEd%2FgD4Xy4vCy%2BC2SITG3HhebSlwW8kcChRLtKZIePZg5mS%2B6qOU4pRzTaY5mhafsS0duuz8ZLFo6HUgQp4NdfCBuMQIwPS6SoF1UOOKJuhWWiNjV%2B8X6eJvFIMZnnmjSCmbn0xf12UIQ4xRd2hdmu04SLZpM7qvO%2FrhLyc35OHS233Xdz0TY65zNuzaALtHWKmE5DBd%2BaWE40lN6mmQ4fyON3Az0CbDXlmRzWDst1K9wqraQzW6Cz%2BhdopxiU48QN4QSzPvRTXs65UAdxwqPh0w69XKyQY6pgEPMV3qM4cK36rywXYXyvINPVFDPTsbAxxM4xbOiHEFReTf8Af4Rr%2FihJqi%2F3OymkMDrUFlkc%2FwGoBe0kGWSaZm6WRckMcIjnir9Byhdcfr7hUUfh5HP1nQeFV2n0RJkBCqSHhC6gL%2BHtfRph4ZzxiZbG7Aft8p3cO%2F1cpArSkWtvuW%2BzRisPe8DwQY3Z8f4G1OKXk%2Bhmci4DMd9S%2F7ikCkjzLrE91z&X-Amz-Signature=750d5f66e9e12a7f1141d562077dcfef8295de87b20d4fcf4c3bd6e9d4d83408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

