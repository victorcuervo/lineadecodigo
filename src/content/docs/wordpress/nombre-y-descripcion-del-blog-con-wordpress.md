---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYM6BGB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEHw8qJt2sFtSOE9YI%2BwcslVi1ZAxgbjhZdgRxFqaCZjAiEA3uF%2FMmzBOZQV7KX4OO%2B02TED7EW0GtjNbz6kLflo%2B7Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBza8h0eekHnB6zeyircA%2FSu2VTg0ep38nL43WrJyvLcIjoFZMeKA7oT%2Bo6FYzZVP1ODZmeWdiM6KamBCOsl9IgEE2r6%2FHLmN0N3G1qydQ6BwrFvoM2Zt3OXOeTqgH%2FaLiR9DJrWiwve6k3j95FRROwh5RgmhG4IIwWj%2B5XBXVaNHqy1C4mj0y7Y0UY%2BVhl%2FSSvJEMbSBG1afm2Wave1ym%2BAKGfguHTVDUTXd%2B%2Fh%2FcYgeU22uTAdmKJCPPWGmbEVZxmLwZ1RyKQaav88N8kuJfRIMIvOxRh8PY%2BYjPMdeSKZK2F4lbTNShSR0rYIs%2BVAZkDgZW0T2UIq61eqNGrlZaYPsGr%2Bl%2BsOZjTuIYdHUKONrg7mBe2xsq0UdnAKgNFoiGdlwZMxlgnNb37nSTFojuWBc%2FsSdcrCayrGmsjG%2BqozPRA88eI3PLADr3cOM%2FndSegoz3mumD1vP6Pt10f8TA0fziwB5Cayg%2BkYI%2B0bBNCEtfVFBn6ief%2Fz7wec0avRr4ByEyVkb%2FooKaQIjRuUJgV9bCOZOvgHcndbY4aAUISn8w9Dwg0m2OR%2FPkSS3J749QJNvjXoeMdsMfSInSNnjVkj9EBQ598WJCffjBzFh7SlRaKG5rTblv029gxdQxVnHZf4QBugZhxZvk4eMI%2BrxckGOqUBkb6N%2BzPGizZqlP9nwQgzKqVe7XpkZHvafMi2j1Os0nQxOi%2BvvIAuUNpKkKE2oTVleNqjLUUanorH7eI4k5H9SqoJJJzXFLwLo0mGTLU0r%2BW9eOYclUKegv5Jqty8r77JJfSbnamRMOTkn2iqEvC3gSvZBPp1Jqgh%2FH55ZhfRp8G2ZZeDGWOVKWH9NrRK%2B6dnTJyvQzwiZP1etWcSDPjQC5wydbL2&X-Amz-Signature=223bd8ca9d94e6a5463b79b4432c2c61a8271d8854c8741d125fc23faab56498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

