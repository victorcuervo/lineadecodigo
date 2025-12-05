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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5Y7NCO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJfQhT7a7oEIJfuVJQyV%2B%2BrgctOCccmuQSh5kETpYauAiEAyzxf%2BQaagbfKcX%2FFNhRs5j%2Bc4lpJGJbkdpNLlofg9ioq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN3M3ViKFdBoilqkVircA3JPV4hsEGdtuTgS4i9%2FdVlWKNvvS9MTw%2BQ2SLRHllrLB1p2ovEB61X4VCPAFKiaTLH%2FQ6g2rhU3GUJBcY%2FNseidGEJp0xzSLHlQbVvldfqHaW5dUWGk4jSRj3ez0k5wUoBB34vZsrPmqMaMcsWQtuTNqyw4Gr3yZeSjLYv4INPj%2BD1BpUbS7pAw4ewdFAoWFav%2Bvia%2FD4SZvSsV%2FRzi8wrpwJ4mzjjiUH5epzRouJkvddHuT1a%2Bl%2Byy5Zq7ypQbf%2FF7b8bl3xi%2BhPXy%2BD5oDkIMvwASho%2BBndiCQt0tEgCFJ%2BHe0TRLd73XJ7wOLG6GKCKJuPfMbuKWDotdButvNVIpShJ1Ji9U%2F9hBwXMTG6uE0UrtnRexuXZlnxp8p7fLoZFVLuh1XsBYMCXd2qCMyo5aTJIKW9TAKN2qupnYpz0ng0q%2FsMLFGzRCJPKaHuanZbpOMPa6ulKPpKYuiuc%2FNsZvagdb56GV6YftN8R385i%2FNrzMDTu%2B5jATY7GAqwWJI5Jh4kX2VRVv3tDp%2FcKBfR94Y3YwghlF67IwD8l2bwStq1fnBEVU%2F7utLp3Rca22Rpi8x9iAGBciXywod4R6dd5qv%2BwIKFtpNCDKKBt8EPtmUtpP7DlSPHw2HqBnMOavyckGOqUBXj64%2Bajsjmlpb%2BCL%2FMwsbIs5MveRkc31BmPL%2BwYKJbvX5oStPG9re4VX%2Fd1nH%2B%2B468%2FHjiZcICjE63wNGYSTWN%2Buy3VsdtW5vfLcle4%2B0bpYxeXxGx6cqH042StNpWjxMR3sy%2B5Be6zxR4DNmbNs56Igdqfs7Ax9Bxk%2F0NRBcREG37%2BwYlFn7ckXKtvzYS4gDCb8R9NyCqrUh42DzvMrxgp7QfH1&X-Amz-Signature=99e07a88a51c3e3b76ffd76f859f30f6aab3cc12cb0cef882c805ece719007db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

