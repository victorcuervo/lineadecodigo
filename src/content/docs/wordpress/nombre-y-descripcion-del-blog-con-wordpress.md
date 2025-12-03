---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTIYAOX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIARhEGtj6ve87a3u1xHps82WsUGJQoprZGRQmcHFD4vVAiEAh8GK9S28%2B51oUqcylvdMSBbNiNiEdh3CP5ePJc5%2FoOUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2BxbfsJ0WRcNZoVVyrcAzy%2BmKu1ZrrozJ4k3CjV63yWpLeOCVlKLMzfcID9Bi0pgfs%2B8X0Jmu3tLx2Uq3%2Fac5JmXesVsbUxunbI80Pwl83RHluHcug7BzID9u%2BcytGY9zr5Ai9xWIeZ%2BRdSaMph3XlWHuyOQ1MoMe14tRB6BC0KJau3KEreslmhQvgHBS2QcKsyc%2BzOC13BW1aK1B0WrE%2B%2FjCN%2B8%2FHckIzm9XLxDtJ9LZznH8R4l4V%2BDZBSg165vo2BG0lPEX1%2FoAQ68tGec2ooaTcFLYMabaUGFga%2FpIjHQz3Ld8nCb%2FBtqBPXY%2BTfQyBAoz0NIy9IdeA4dtbS6StSg9tue3cG2hdlnUZcOdXEM7LAdWalJkx2kUcxVPL%2BVqMqlTwEyk2KrkLTdXTjuoNCY5pyvhhDwxfK24cVQG%2FApbTIn4qBAKsieq847JO9g3qZRhc7GV5VtjKp2D7wCuBt2MYZqpBQhfpISxmhHeQ2hQesC41ZZAQDDp9ByYeoIEnHVirOZeLlr2N9P1QYwVXvov57pXqZMX53Qe7KeVThRsKDgF69aK85bpCTTefO2BxZYbS6rE8sQ%2BjPx5VJjsboaZGYKV3gg9RI4MU%2B%2B27G80bwMY6Ooy01onn91XJ%2B%2FpqoHy%2F8oDwdhtynMMa%2BwskGOqUB9A2o3MNSHehOg8JRan8bQVrqVEU2GCjORsOi7vFjs8dFpThHQzuaVRGIyWPfcE4GOF2bfUsQgaLIF4WvHke%2F4ZuUv0ZC2%2BF3weDuU9Fr5V0WI1U4LzLsu%2BuTmxGHEGdiw7v6lK2rIpxeHcFzlrnTO2asR4u7dEQvHH%2FtR5O3tDFmDqBbQkbMAkFF%2FAMjn4EyfMq1tI6Uo%2BxrzK8pIRySfxaCMQKM&X-Amz-Signature=52d55d9f8ccf3b14203fb25a77cd36ac24f71ceffafa933d061da42f6e71ad10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

