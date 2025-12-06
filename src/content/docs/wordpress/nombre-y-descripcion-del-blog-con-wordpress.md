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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665425OAUN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdUwnbfO4Pv11eSXz2i5rj8zjDoBgn7T7%2FNHU70huY%2BAiEAucEfg789scrZrhcsYAzoSW7pMsymL843qLIZ4%2BS9mWkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD8xQDVfTAF%2BQ%2BRLTCrcAzXZw5tXOTTfBoJJe0sbOafYPh24%2Bl5nmq0d7Sy4V%2BK03FQ2lJxCCgCEOwBJcPC0KhrNKG1yNoxr%2BXiDKicroZ48u%2BRK3Oz0%2BTsT00vmanc3boTpnV2WgHUtrvR3n7lk1mCEbS0nkDRlr2rssi8SGgnSp9goATVmls6ZQQhwi2Y8PBNF3BeCNtXJZsg%2BVptjTPQhhS1H9vPHh1tMGujZThdEgnxoSp3pQ175%2FLK7Ulfj8npfWcyPZPBvMmaNHBT%2Fu6XOn0U2LKxcoUEJ7RAw1jJvOBkY4ro8BcOL1Kbs3J%2F6RSAgpvD94r8SKQi%2BMarpmyhevublwOaYAF9m6lfLk%2FbSGZKmy8%2FYoKg%2BEmUUmCuJlo%2Fkm%2BMGEAdKpfLPIW8OPuXLx0RzDI6PVOw39v%2B1xkUAd87hR6jdyWI75hqDAsnXdXW2xPt6mwuGhZjuJS8WBhcfpXxdIT7NH2xtYFeeXdAaj9WS1%2BBBgYTL9S6H4StaEvVH5%2B6VsaRE%2FnRs6w9yXCyUjKdpLxdmbvk2NOlMk0wIWPCRll%2BzGyY0r3ee2C3UxhcGcH%2BGBdR94Im9FCq0HqvrcJjSzIkEni%2BFycuU6c8uuzdLxvR8K7cVmEz%2BbeY%2B9SRUyQeYQQ95csZKMKTF0ckGOqUBUqg7Bzj3J4CAIARbbUOGt7tDVS1P4adlMK9B60hvoaBvMRKJWo8shvt2GyMOLNrRTHDR2r8DQnyowH2k8jYQic6V%2F3bzjDyBzQxaZz%2F5ctxhrfeZl6UJWgpvwi2CegT8cl7QNN9PkcT0PZFEccO44CQIPdITDjU88fBifvfXXo7K54%2BMn8eKBTPSwkQKgbkmGB1hxYhylJKCGHBsyqHh0%2BCJu1dB&X-Amz-Signature=c25335a79d9a927aebebb7777d6f07b017213d51107c7176c0ba044b9d87483e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

