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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASRTH2O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDyOLp3PIZem9Rjn3piL%2B7i1RX9iTJXmEn1cYS7R4jfwgIhAKi%2BcRco%2FHKTPRlPJh9y2jCELwbaTiEgxQyyFZvM8%2BUhKv8DCDkQABoMNjM3NDIzMTgzODA1Igx0gKP4eV%2FEzkVf3rsq3AP8QX48pkwd64qEzZgn9SyBtJ757iWE9yhAuncquVU18n0BrK%2Fc7bC%2F5uraRcNN0fQdXT9Ve%2FedZ9aIbDdbD80fM7FDph8REFy7VcxUC0wmh713vL4iJ2DFhjv6EBfIsl%2FzYGOsorsokoi%2FximjbaxKfvlLKPSATKHvdErTDr0u1LOwVdm8LuZzGdsywe%2FGHzSiW7BRsK9TYEv%2BWwVp1WCjdhq6BnoA7w3Qa%2F4Zv3sb9grmUGAcPt00A88uppRJ9aNrjNc5%2F9E2J7Xfbhl46eZKjT3BnOEoU4NICQOGgrJ%2Brs3x3dFjZYux2Mu5zXxXqcVzzxEzmB3Z4qryDv0dVZRFKGjJPm9XQgbPxhMXefNAFGl8CkHp3BA473WeHY%2BVtISNyKlLsGgc4Z0tURilokWiLSeyCs8cK3RunlcESO46i0DDUaHq6MXn6J%2FAGYURF26MJtq57HfNX%2BD2ogZTV89nDAjqazs4F9krgtAbU%2BFZuOZbvKOXk64MKO3%2FF08ZOlLNGtOhRxNj0EOunoS6T7UajdbTN35djVzrbd0E4P1MC3F30o9AjO1n32YFImlcLp67OMYV%2FXfuQz13QHWKUhXo%2Bfw9TwKUqvN55kl6FcMNaN%2B8wMCjd8jV6uDgLzCHlcPJBjqkARpYVY08bFEKDkuRUPGyUDGRIJR%2Fl2BC8og%2FoZEkbQDf09a3QlSz9MUEF%2FpOWkMyCXOu0KuxnxVODA2TPLY%2Ft6qBg73OAr231RrhkFJM7ujCdwTLOCrnAxJguQHXrIWGieX30nX6%2Be2%2FhUE3WIhSaR0voXnBkHMkQMHNFEDfAZ2EP9AU435tEZrVI%2B%2BgZKemhgzxX0tlZzWEaNFTGnDDjSBrI%2FN9&X-Amz-Signature=ed6b3bbe2dcf75f1eb6bcc2c2756d2902c4775effd418e1a3864907331d957c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

