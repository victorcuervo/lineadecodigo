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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNZDE6J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCD3Slr6Vabdxl5YDLraBQ5FHCW4EUvUmPJY9x1FaRESwIhALASVMJjfjl3gbgbblzubXL7hr1PT5uwbzY%2FT2EK1npDKv8DCDcQABoMNjM3NDIzMTgzODA1Igz3k3Jql8YH4nxsit8q3ANq3QbTGRfKcUtB8VvKNxr7w7wh0LVqardGjuUh4bnxTeRfn1y6QxTUh25GUPP80DYLtPtaq0ArQXMju6RnY%2BsaHAauCfmVztr2fP2QIjV2XO0dYJARUZX1KC0xSSGKW1%2BgUGcGvxjGJCK6qmhEXpaXufnpqLe%2BromkAAFA2npWHv9LWYUkYho3uX4pd7tq5ujdxsFMgB4mPZIerL7l7624KFwPYgszzkjCFvcdgpIgCzD5DRE6NEn0bmnAI24I2%2BS6ol7twxm%2FrHdGjNYpYo%2FKXT8p0w22PyJSJQhMhKZHSqBd1YlmN4t%2FrEAzEZade%2BASqMxbAXl4iQvGxKQVIuY1AJqiDjSx2LFf%2FPahFNKUa%2BZbXliruPPhnxBR7dj4dgEGxukgiXclcH5A7TuY%2F%2B0haN3%2FgZ2nE4RO4SB5XR%2Bq75IisoxpCC6qd%2FCiYHd2hP1G5ZFkMtCl6XVs7dbmLZlm2VHOPi%2FCWiVHHqVjkvTxe339NCcm5%2Bfmxw9tZ%2F0Be6j8eEbU%2F0rXIdu%2BpOfMc6oYs3ZNmUFCFqfSAMDxiZMp8%2FAs26r%2BxDcjFtLHQO9mXtMRkzehlmyvYMW8ixXUweE28hLbfVujgK9DO5tparP7tfJD%2BhMuf4Qecns8DDCH3cLJBjqkAa25TQMjZYGhDnKxRdACfeHszhmAVLNKJWFtbAM3T%2Fbv%2Fbi6NhaymLiq2cuHOOF1TLbCULy3FpN%2Bg5Z%2BfsdfeJ4j5P%2FUti5WOm2PrSUejGr0eGtkndsf8G2rp%2BS3xo9Ogw6t9WOIiT5DRNjiB%2BznellNpscrG6UdpEZtFPVc6E3ZIbPnAKeZ20QhJlvpRURjWfIZLlFJRshwj0dLvByCQRBX0F%2BB&X-Amz-Signature=65fed9223ba8b8595353baf8c6a158cbd321d03c7f41f997e53c1b1e397659bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

