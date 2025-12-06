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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWOG7M2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdCQ15B88kV1dvL0HPEkCwz64HXDU6yYji%2BIXLh2VgpgIgJiC7%2BL7tvxkRRy5c1nM7WxdVKcb%2Bda9UXXdhI7qySG0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPu%2B048%2FJ8GPJGTz5ircA6bCKncSCeXZ0DXIUaSXeWX52yj1n3dh4V8RIisAWn4IB7%2F5ZMFP9to9JkeRIkGWKnHjirCpNMVOnHeOGJXN6RJLd7L%2BletDE02odaeALChFyoQzDHS5lbiLcuoSbkD4fCWcoeQTEnxfyNvjwXgHIq1kWUEDjRAJzobE0cvMf7c%2BsVVt%2FVRkZIE2oGviEwBu%2BzKFWka%2BDvlzEpIn%2F5sZOTDlZqKpCf%2FvCKkWnDXyC5l7qeAUGKYuoVaKZ8aUjWEAGxTgT8J6K4I%2FjE88QNxThHYuhfI8cJNY5TK5p%2BO0uo2wJ1cN34ercjvJSasT6%2BW44HdGQhoP%2F1FmCD9uXjdIoF%2BbdFaQ5WGft3dRHsi5fdFcZ8qgV9%2BgVcjWmliIuO53rPDGqK6t%2BafC6ozwJiCsEZfMjUeZAIII%2BKSR0cz5cH%2BQdi4xmGDgOrn8fSojfnJ24GmxbTwOcVKis7z8e3HCVXCI1U3N8CPatAY%2F9OuEMus42FiMgIydgGIGC6w1Y5akzgIHMFN%2BB%2F2P6G9rs9o%2FdPLVI0jmP8vYgyqPlT6N3d7cCMe7HxanfHFg5zcwufwOoj30kQ53tTI64zYe%2BVOhRAmgf%2Fr7ly7XRrjgx1Odg8oB79hyqqPUDwOBmBB6MNHG0ckGOqUBj1hHIucZxyl9n%2Bq%2By0f%2FTGF0hBqj%2ByAk7CifARo7q39ElHRAs%2BqCl8vmJv%2FRW%2FjBKprUboINe4X0CfZmwSeN8Px0TK6%2BPdL%2FBqZRxoDe89rCXyfyYdsv7OYIF7WLiS0J%2FsNTfqjvrChQQ9kePeE6roDpWuBgA1%2F%2Fr%2FRQOMTByu3Kn6vYFKT0Oz1t4PtAWvqfIUqfcKxFh1mQRjwGgXXT189sIkTn&X-Amz-Signature=af5b1906bafcc899a170c1d9e97d1518ad8e01760ed6f389c978aa625a24068a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

