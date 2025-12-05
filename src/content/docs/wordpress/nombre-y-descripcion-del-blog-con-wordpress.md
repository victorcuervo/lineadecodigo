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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FOZ4WI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE91JGso3Up5Ov%2FqmOrqGaiv5U5HZwa1%2FtdwTZ%2FbqvGDAiEAhKbgGvuzHRZieIrDW8GmqfcA0CPpx4OLNhrTfG%2FuY1sq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI4TXCl0qgMalQfyYyrcA%2FibFl3vJkmdi%2Bnfe8fE0cRDPbk7RA6DKAX6u0ALTi2DKIZxzzr1gMj7tWJbEG1et2YI1Kqea1SEc136Le5rhFxO6H6LqQ%2F8QyoEOtsxDQkWcOGVkAR1ZYlqEdxNbwsYRHU81PbCfSA19xmwE4%2BdY%2Fimy51J8mqc7S%2F5ruLyJh1PpyCkG92c5z5ow6iJ89fGjgjBrP29BDg%2FuJW5oCaO4gvnp16964ItvfCr8221QZx3KNtXJymP0LJHxA7UdeMUyG8q722L6LVpMGDoTW7EaRFV5bexNEYLP%2FU0RRdJuRNiHcOZML8oprVzPX6afdgjdt2Ju3aNPAwZFfppXMNYSMxFDb%2Fhwy3bm%2FrnRHvgoh7BHb8i59Y4b1e6avgY8hjrQgs9mB3qWMp0XgcNqgyGr73%2BGGV5qw6FtrbcfQkMs9Lznu7Q94Bc0rrmmrkJduKKn27p4YoGQ4v6uZzCSa90ya7bOt%2FjiLpVrwaw95kidt9NnBo3kAOKBdeAgPTd8Y0KfP%2FtDgnYDS6IhkCdXx%2BuMbzuobjMd5dUhd%2BKJV5caTuro3QPczAAI4I5qNk4oBb7Pr15qez%2BkfeSyGE%2BsmOnm04MNBPUUx%2FGmlam1Aj4aUF2kYaOQ77UHwVAUn3kMPrMy8kGOqUBhmc36It%2FRUwpPt8JcK1U9iBPRGdIhW1tZ1y4Rt8m2vxC4xX1jzmn%2BaJu%2BgKaZjI8MO2OGYWehQZkq4%2BDoA0f%2BaN8toI90Es8tX2CW1m0r0flvU6RzV%2BX%2FiQV39mlv%2FXtwqI8Rlk7AgJAoUoyBFCwtIkmNjNGLAtzbW%2BcjbxO%2F3ME3kgFJz006Ow6%2B41%2FkmWjfjnoFsyB14RmzUrCsSjJGQ7SnZly&X-Amz-Signature=b278537d8026281035a66d7656ce1bbcc99f92a1c1da0b1cd1169a9853fbf074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

