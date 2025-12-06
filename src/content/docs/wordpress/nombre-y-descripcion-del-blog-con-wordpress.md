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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOAYQYL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlHlXK%2Frupcs1D1cJM8YPEozuqjmZq%2FNls%2FpLf1%2FbmcAiAdzOYiBDZoJ8snGH3Nsk%2BcJRuN1ICGM3clq7d6c%2Bd5iSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKjOchReX3QonRnyPKtwDVxAku02LOH370gQDSLYdU1TwABDpk5ZNjdQUhmYKAgFEUOUS47H5YW8LRKEDxpKW0TvjWFTOW8v%2B0IwHdHKZhkzagH1VYb45C7sl3Kate7tVTZhoC%2F8uv%2BXkjf5wYJ%2BPnoKnZGXCm94xadJtMK9vwqmDnodS%2FHu5VQs4kptJ0FA693hpmH6J3hLPsxrwV8qjDcJRPp9OHS%2F0HMrUDB89JUMEQcAjaynWK7czpVOcFVihXj7Gv4%2BI45qXB1%2BoffXXq%2FAwwMXmQEeevSBUtn%2B5gaxyZoJz9qBmzQB8zGGV4t1XwnCfC4o%2FRt7bbxPkXBxI2Icrs%2F2Cxv79b2ul5trYz4hPD0Aum%2FKTEaUQL3AiPICXDVNguBK1EyZBwFbufjg%2BjrJgJcCBC9ZM13MR0MDaTyFBA0arMIWIIdj6Pep3NjHc%2FHDlXz9R4Yd50KF6sPIS8y%2B99XoO%2B6oEbxGyLk%2FFD%2F%2BskbUaOUGWCykMqBCVQNpdDPeW7h%2FOIRkOqlh6xqju0en%2BBG%2FTNMgMmx0ejMfVDRaoUPon8yBPCA7Hm%2FSOqEGpTghfnxLQycyMzIMbJ5a%2BaYir5wejkEJm%2FhphjxbAugaAIPjSzvmlY9ayv%2BqFGLY2XfqpBGe12rEGgekw46bQyQY6pgFR3J8Qe0OVyTre94eoAAXCKyjlmhGhK4cEmHw4GPATArLwHnpyg6xKZEvu9GXSXA8IHtMRRFqpshJNJU3pA%2FeIptuhKlpHx%2BOEsdlaxNhZe%2BbNCgh2i2lPm6cPSUBwFu9%2FyVOQjJlWZSCt28UkUQ3FFp6Be8BQoLsfb63BRNgYTuUkQZjaCvsSVawIW5bJS%2BGBmX%2FSs%2B2%2BKr9yvrIWb3PVUIm0Wqjl&X-Amz-Signature=396ed26033d963691568a5148746db2a961290f70d594aba79fe93a88f2cc69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

