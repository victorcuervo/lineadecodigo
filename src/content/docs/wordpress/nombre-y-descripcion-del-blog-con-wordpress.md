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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZAECKDK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDluDJxzKR1GoC9TwTCRcGmOmvJUJXnAJmsVDrFZ3EQcQIgPpAJpqp%2BBgWz6JYBKZb0eLiOJJY%2BLLP56FJSLp8xR0kq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDH2QQCc8EwJrkss8ircAzUnrUFQM5OVu70llxxdHuJLfemer7kHXNc1uO8ZBOSeQhm5Ed4VkSR%2B0WFKXi1BKR1KvD5wanrSBVeTwfa8rG677TtotTcmT%2Bb56dT4nAEdGCut%2FV9RRBrFmuY3HUgFyvOm0ZW5rqysuiqKi7QJGek7K%2BEOkUvihmZumhOSrTp5ZmZ9AGbSIPVGhodEnCgaFMc7rBL7MO59ODp5ChQfFvOYOmC2hTMpVYvuJ%2Br6th9yPOwBacgEjRHlJzg8SPSLwNminMDUouUl7vvlWC3AKgz0wMakti84XWOt3PTfQ74TGCkFck%2BGrjlb72Rhv0rb7VwFU5bCdLiie0nGKB9fSQ29iMBz0rv9lf4jY6JsYSZR6XbEl7EswRrVxtJO4Su5ycqy5nLKkiiVrbvwSp3xpjfLyiHOgkeeXSh%2BdwZB7AsPy17MG4HDzAjv3nfV70w8CsQBlgTsLNr83gYpK3Tz7%2FL73oMr1DUme%2BWsqwN%2F5PAh9qeI7vZb6prkLMAVcwv7AdekzM3ik88FryBnU6czRybNO9SM6ZdIu3cdffuuTlQ05kODUdF1a%2FmoTVWFc1vd71BwyWGpJXMFDntE3OI%2BgcWLLhx083VLgYfnvNr%2FV41PyAXQJd%2FVF0XYpRvNMMCVw8kGOqUBV2ouk9s6r5lp%2F7sOZOPEusZzAd5m7OhPxfZq%2BUTXJJMg5CuZ8%2F9vfph5oLTa8RyZp6MBhg4GJA981qsXKv4BJsh2JdD5zxT92zDMeVmmrHEjmbx2z2yK9JwTqmYFptuAna0F5BvHd8EoxTmnZQ9030PgOf7a9ZoKDCj2uCkI72UUmqXX%2F1Ef4t3WKaepf79SY6%2FvQrcRCTtB0WJ1dvuYFVwwa34Q&X-Amz-Signature=4acc313ef88f3f0299846900e4f83bfed27d1fc887b41003c8da70d2c1b7067e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

