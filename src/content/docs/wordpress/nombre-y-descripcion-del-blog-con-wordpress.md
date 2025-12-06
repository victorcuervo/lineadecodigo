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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USEBYSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7vvmfXQublI%2F8J44vxUzWXeC%2FRtdU%2F0JEzHuUd3sS3wIgTslEBjsxpGoO%2BmbBGBfPziTFNI%2BvOayiOMZFXBFi8M4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPhm2msFHUg0k2th%2FSrcAygARNHno5UH%2BCJZnYHfT8IdhmHx8WwdZeb5pPnk4NXtuN53O3lzNRWPhbHMX1QJdaNYcaoHGjC3%2BWrHEPV%2BudWbaMOHhVMzFQNoLGFuXkJcaE3DripGAXm7iXwP0fJbc4WFONS41WtVmr%2FgtFuRfw%2Brfu00%2BBDugCoxJ8AsBaCqCikoCqqZl9KChInEvvbFi788Q%2FRO3RC7c23oWffudHdpdgA%2BvQlV0JBNMKwWK9pHJxq8MtxF4D0vbIP5Q%2FaWYw%2BiKqJtmW2VBnnMg%2BuOjJUIVAqgRFEo%2BH6%2FmXmNmyxyM6Opl4uGw%2Bfpzeh%2FdwRbysGTcyumRuH94aIWMr9Or03X3CMe2Zvd%2Fb%2FLYb63tRH%2FqH%2BQ0Pxp3V4YgANUBkIpUfBVnZO9hu08s%2BZAgSep0BpavpXSsvZp5z6aURWkiTqBA1%2FC92jBDMyNVx15N2NlpfWAJ2HuTt2pg8IsnMidh43d2e%2FLVSf7LUep26sKxLkgHADqUHV0TRUDCSISHxBNvVWE9GghWSmJh%2FkFOr50GeJPdAmSD2K75yD3HVfma%2FlFM4J%2F%2FflAPQaBOhaKDpffP62JnGJ1wM5AyE1b1cPbZySdQH5mV%2BEsE6x6v7Off7psXVP5rBehIin0iwh0MJGn0MkGOqUB7SBxU1sg%2FWZJsAM7zJLfPdlL14ymWPYcl6%2FSLN%2Fb5T%2Bu601enasRiTmw3Z1ISqK%2BKnXjfl7qUMroCryC42Yw%2FIlI5Tz0eixjMvuVR%2F5BchUkb%2BeMKtj%2Bbk1lxR9cha7EMPmwNS8ulUyMh644FYxN9yNMx3fG2Dom%2BsSfqE99vjyonrRIBwVmeTb0X5TAHvn5Cp8q20421khpfMI4OJeIN3IWABsb&X-Amz-Signature=599b10f3bb72fc10bc38e6f030accf4b164e04424b4d650e74f327ad13334993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

