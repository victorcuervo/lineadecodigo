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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRY7KBAS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMWYRHSX1NsdU3O8Vw%2Bq4QuAqsslgLjXuvI2Vi08HeZgIhAKS%2B1TvHrm42ouL0ApTM9jVURxeYOBNgB4NUikXV4r55Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyVUIdTlU3twuMKTa8q3ANmCOGaBMu0C2URyK4CiEFEX6HeeOipbsz96uGnkzC%2BcawPgUWy%2FIw0ZxmvKKfTGzw%2BTDPvQ4Osk7VByiu3%2FNZ1OVzhlhWYuy2YJvVdnCaVCOWKpblwbKhLiQg9xD5B8nqv%2BD2J0t10RCk5VPzIatA5zQGYZIbMSjedsmTThGOo5ib8krX4Dn48uxbtVNInZLZeUOWx89BWM%2B%2BqlRkhOyHHO1YjSfXevrncyeD1FCoOXhVNXEwnKynRgKRLhK5V5Y4PDOp2ALjwjWwP%2B6mJaDZtF8RKayxhWhdoHDIUXXDkLYwAZwDUakFL9P0OeWIGtkYlfwLy8J3%2Bx3X6Aw4ft4CU9%2Fwl3Gw6u85bX4ZLUV9X4kT3g5bs3cBNz5ttRSJ1KUJsGx0fPyReQEbOEXRomHI4N4PDMJ2%2F2eiQOYhkPyf2OgK0skMVTfmD85YLUJt73Am1MdSHljTn%2BjbtzVqJZdMd5TQONiL%2F3RSXDhrFJvQxl0s76po3DC4VDY3aAjPAU1S5TefiHS54H3YROtg4aNDoRDPRuF9sd%2Beup0I%2BJxx5KfBrupNJ0KVSjayQI8EXVvvJ1iwe9%2BTrBI4e39CDe5%2FsriU9zG7bZqM6GjhTzygI%2BO6fxCuVW6AJBrJ3pzC%2BkcLJBjqkAQvfgZT%2Fm1wCbl%2FyY6VAkD1jXxEpNec5kzhmqD8YUOidVW64w0AkYFU0sx0NA8Nqh4mxL3WBWFSkCcQTcRDPAkhDH3QpiQvf7F2pP7G%2BpGg2dVFrQK2ZVltStf%2F1%2FGbJ3RT6BJKJRjSjgS23vro6EGeoMjEv8iCTOrYsrVrkT0HjxykGrt57NqIxru7RM3Z5%2FqKI%2BqP%2FM3MoHTRR1xz3rRSy29OP&X-Amz-Signature=a24f0c39b9e6bcfaccd3de53522f3ce32e8aba5072b2de3d1cb0b795e64b206b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

