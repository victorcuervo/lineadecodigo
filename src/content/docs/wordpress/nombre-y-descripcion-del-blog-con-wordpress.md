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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKF2WUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocjc2gCSUJ5rBbYuFGGwYi%2BJEcYCzJDEOzd6dsTmYFgIgX7ZEODJfzdda%2FAosYyaOfNKUcoqWOsjVOllX59Igmq8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ64WxD19%2BAr0GiVpSrcAz4NlxuvSr7dA1sMrQUtAJfuQ7uW205O7li3CcMvC%2Fxkktf65bj772LfF6gARriJvyQciVIapp4KD0u3yW1YqcxovVTvKznBfNN7LKLFl0XaWOWuuEj%2FAZCuuzhzvmfbUZbQAuKwGTScpkB%2BsIzC%2BEKewAo03iRdvlCUm%2FrN9wwkkpjAw0qBfdR42kipUrP5V4WStHsCa0qqqmJRaIb8LzOj6pWkwoj7lSiYD7ttAOoylYLei1EirYcW2Zlay%2FXi8MTUmi9YXw8svouXJ6DQce%2BAiexBPgfvFzr8D5uTw8do5LWudWAc%2BUfVNlIQTn2PZjhq3xlKcZQCrwb6JqFihtl42A7ePqmp8hYXITG6agqJ%2Bgdw8M5lpZMYpLqCO08RjV9BZ5owBQXG%2BrQ3aYccsrFf3ds%2FMqgku7%2F223vpAJ8h8xP5HjJ6d62%2FJFA%2BUlsjUdBCBIZwSKKC2Eos9v7B2iWg9F0%2FRaky%2FB60vOLPG%2Fp9GekD1djjTvE12IxmcpA%2FCvRfvd2xX5f%2FbcOXIsKkc%2Fgxq%2FAD354SxOTidXqcEDO%2F6hedRfDH7fQWTU65LojR%2BoqHSVQ1vaSAaHtw%2F%2FQv1tw947dAaE8HvFAa3Heuh%2F2QzIzXoJLoqFD3ebWYML%2FCzskGOqUBwkhA3cs%2FadXLm19qJWDLUL0m5CwGzOXqDs14FZvCt61Xk9%2BMxVPbQXkZOR0b3DMZm54useekrejE3FzDdf%2BG3byGT02PLYMsx%2BOkImAc%2F6BjOJBNyck7%2Bg4yEG04wtMrejSDxSVP3uo%2BZ8JKA3EK3GT3YLmN6vC9M4CftLUquIaEhxKJ21SKbIViEg%2BUh%2FWwjBb5pdSVA7ZTu089eWHcC12J582z&X-Amz-Signature=8df5c06ab5e2d0dfac16503ce79afba05cce7bba613fd55c0c3f82ad6a5ffded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

