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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4INTJXE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHd0%2Frxc%2BnGQTctkwo7Cm9%2BaNh2mdfmf2kC4Pw91UhYgIgHsQmbFvPc8KIfuFSlryAylIhZPbaeiMMjlqjlSpsV10q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLujcihDwUimf6bciCrcAwMDybu%2FUKBzDSqop%2Bl82m6lThR9AYN8PisXE0MsslLZkYxLrIWdR%2BnxLL4NxzceUJQyd46fZBocBD5LCxBPLKNbbTSiEOK0OsETr%2BA9Oa7bxWW1K6NckmGYrf%2FR%2FqtiTvC7wwm8BkthD2wDHXon1J7vfi6Gi2Yv%2F5JVpVdM6mpY%2FFdI7URBp%2B2uUlYbcsVwMiLFadQ8jaVI%2F0cnfXsHL0iGlzy9oc9z2W937cHYusn9ltdwwHCcF6NSldEkA5Rl4nseQ737Zt9MW0nuxKy2i1YIvfM1B0RDFVV0qmXSUnwheRi%2F%2FPzNGJQTFcr96JOCTtExEEAmVUv1uboDxtnro%2B0j%2BPKx6cIyO3Eat41DlMiXqTT3RScLEQ%2FchujJQLQI%2FDThrkSb4FYI2rfDCeceB%2FUGz9OZtKDDbpxwtj1Mg4I1eLDv9%2FqLWhsA8pYYJXV2LKuYODUXcodKibLS0Rg8US9SOl0kFV60hd9juhOMjhxcI9k5p%2FsWivfI7g0LXV3pi2qdg7X6g9685yFH4x%2Bzt9FVNh76rRNg2GdDpf1A%2FRgmvgerppMTf2LBqMJiajCT%2Fcs1ICZ2uMSyhEZHzXA8vR2PCX90gmRuRQi%2BmrjuMW8xwHtB3IaHH%2FxRg3ztMISMyMkGOqUBDfdJk4BDFQx%2BhvoNfB0eK6qpFVIdFsAALUb6AON%2B0ThXmnFF7bf2H7REuPX5bCrdNh8rLwSOy9zhUg%2F1OQpJhFLy1s2%2BfOWOEo%2BYoc1D8WqoIzdWgrG%2BSDuayp9y4eJT2Zy7t9p%2Fxfs%2F6eU7jJXlBO%2BLKfh3fbn4%2Fct%2BQZ9HzYP%2BWhveWrDckct5IB9FAIdaqOOKxJGf%2FQUmJu3oHX%2Bz6bagp7zd&X-Amz-Signature=ac41efac76721b7513891c71413c3cbdbd48fd13cc66353273ffb83355bdf991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

