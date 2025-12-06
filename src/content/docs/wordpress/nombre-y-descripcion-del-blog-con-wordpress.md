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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QFGA3H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZs7QD639%2F1AQXwqSHOJcr3yE2MoUc7rrsTg%2FVw8IfgIgLLV%2B7ACpm%2Bxyu5pberkiNZFuCLBv37Eso%2BzVXTT%2BPSIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMwmTXHnmZG6%2BIDkcyrcAxqH7RMAquedPEuF2wT5DVY%2FQ8B55z4Tt%2B93MqdjT0wlVJJ%2FvR%2FIvV%2FrHgjFdkUP1fKEVXESt%2FhCMOth8YS1QN%2Brb73bAFxmXOisM6GksJmDwggF24ZsmgYkv1a2DSUCmALKxZBZGtLED3AgU0BwyBqy9cQtzglf4WRG7kXLDA0irwMjW9A%2Fa2oaHroAX68FKTNQIuFN%2FeMMVWtY3eV%2FH970cvaFIKW8EJCjb%2B1iNIcXDkpdbzlM1p%2FEFpjTq0jGTu7OgQo0U5QoWkIL0YblI3d0t2EgtKVzzi0kaGSsk68lOoH8xzUHViBeR7DDiAlmu4JeldNbDF56DIzwuxW2zVhDmXXgyxEft1Zn1m02CrXJWQBmK%2Fs2DUVV8xXc3rRisvForPy%2BlPb%2FWqKMFI%2B5qrsIz3TVBJU5D4sl7CS2ovaXkIjyqwM%2BoXWavS8NszO1TSzdFaz2p%2F3yMT1AfiPDmhRJdSJgdSqLTtESkSynTQZpaT2pdidVUbo34wT57NyefpLiC9xazFGkxxw%2B84Ko4d%2FYuINeNEVmjZdfL1bzWUcISdPYL34V7WggOu%2BgV6nLqPaMhL2HFiNJdpBEsvUf9%2FcyuvmtgeZEcZkW%2B8lqY91R%2BnkD55aQvXPQgnFzMKLG0ckGOqUBt0SrFfTvZ1T%2F4xVpjj6YIzE5AYcVN4XThzgvpylob%2FtrSEXjXEq3CUuemc4rDLpC%2FtQluuF3tPcNXTYS5LhZvtlF0%2BfHkS2bsavvRjckVvUcGA3ag%2Fl13%2Fj3K4VHo5qaiVFL3LWVRSw%2BZkCHFVeURBGUOtUykcAguFFdgMQLFpXGFTRoP4qB9G8xSCpxo4oB9ieukO1dAQsijzTqtjMCwhdTRpIp&X-Amz-Signature=4e80b096ca309a0bb37db8e61ba1034c7db896980fee9112c6d4d285e3984f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

