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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKON5WP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHy4S%2FM8CqRF19xtv365P%2FccEdGWpqpWwsWL4i1APX3MAiA2%2BwbDRKv7%2BRJxykTa2TYfy2JJ%2FyPnhvWiU%2FjyH%2BQZYyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMAf8FNp2CPvBMabg0KtwDjviOUjnPts84fqN1YeHcZUb3pFi6iOAUMXxJvFRcQejGYD3xKWgj%2Bv3SUd0wmiUbyG7q3UXMTCYLbjJg2re7OUQmVkvoICWUMTotJiyD4GUwQl6RVOAWH5dfL2CBVHrrpJ5BiymlVwFJZ1ZHajfK%2FRgDvak%2BQrVD2%2BZOfBIUNFg0BzFLOXyUBS2YqDhtc092dg9AvXL1o4JhprT6ZnJ68XdZDYBCvBFU9gXLs56MGC77F3JsrYZkdtnmooVm2Ie6LQGSUMa1CHV4%2B2DIdjGuVpoYODfyz2ANK1ph0Cm%2FHD1GRkBoMFaFX3dMX26V4Ic7OBmtvMwNf1rFfIqiidUGAoSdYwz0w5aurphKj05Mgg48l%2FgEHifvOgHQ5S7d2ykHkyK14p7ZhGUxXnU75GD7%2FLV4eWaygthfJ0XJPbv1SNwfq5RtRaYKPQUSZ3ObRub1RmSx6o%2Fj3eNELJGt8RMiGJKDPb9fCF8Yk79AU09yKjml9bUPe8mfaMIH1AukrpT8ab128uEfKo94LBHr0rZGdmIiFECzTBz6ZHBKN2AL3%2BLdENLzGAYk3lUhAv6Vf4OPyTQ0PWVbZvh%2FUY04xhZkyTBbQ%2BfSLKOTS0LykG%2F1TyXyZhnnYBho1hLuRgAw1%2FjCyQY6pgE%2BYVDL8mtdqvn4ynMtJjOOBM6X0fGAM3plY436Pu86pSNjK5G49JSdf9rYD%2FXIUvko2VYA7xjCYrzPdgV%2BaUgGoah96KRCjFFq6FImef1aFFeuJPl8lE7NT56iVwiyfGBomgFa6mtjnWazE%2BL%2FzebDZtrrvvyykCWqY1mMBtIyOjz45qsINfKI7%2Fw5vMgxlge3S%2FIjNUP0Vzrue7wd18FiJq8ntZpa&X-Amz-Signature=c123fbc8ac8394e269318c0c17d1fc02ed7861bfd0e1f4ec1785d049cfbb5949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

