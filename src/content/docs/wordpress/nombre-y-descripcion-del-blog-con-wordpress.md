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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XAQL6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCyMqXDfgV2hi%2B63Lom9WmCiFg8IQeFD2ZIDuVZXqJFEwIgNKd0T67F4IDXz5e9lCUxNyErO7wsmijjnz%2BvEUK20Gwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCg1CPYg6ijkUy7qeCrcA22pDHnRPifPe%2FgpfAosTlkYFWSfgYXeQoohueCVx1Uidhp6h31vNInQnhF6zXXZOP6s6Fb2Tg9%2FBXKnHi8qLBE3Miz0XH1KasosU4eA8NE%2BG1lJaMAKHmN%2Btkc6JTv0IVz66i8s5bdGLy1Y%2FEi1OA30mNaTWajkHSgfbQneeCR6dHMAtviUZrt%2BRglPiR2KqO8%2BPGy65qGGCay9uXr3WjQsBxbsS6TG9%2B6k8AkJ8fmKUJljxU%2FAqfSA5lM08RRebrvdS7U9SwpkPfG6EXuX3g%2B4JPDIkSTP5FkG6tQmXFUYX3Tsle0Yr9t5Z8STEuO9kx%2BbE%2FL1H%2B64F06sLxczI8Qs2kG%2BNxRDU9Kv1ogGPekjVC6i1V%2BXb6uc%2FQaubw4EbFhi%2FRA%2BvRvr6TJLHN%2BLwPDvdfwLB6NFqMhOMS5wfCiz2Nc7gZ%2Fw%2FGo51flLurae3c0ME9ddeJ%2BcBuA%2FXYGpkdY1IZhNDXK%2FIbHvcCf9mt8NXFajacMygskyQ6n5OdbB1GpfEI3XRny%2FWnWJim9wJFP5zM%2Bg9fUXR%2B0%2FJMvD4TL2VX%2FudjrMFocjCNT6Lg3fs6sVbS8xSERmhEUeihInKGTofSzH5C7mZaivzrGDqSTOn%2FuiDlja7qVeKTBlMMOwxMkGOqUBMGCOVUkpRc22P%2FbBlpNHnB9zDJ%2B5m7Ij6qWGGfi8phO4mzHponpJsQ%2BByRut84Ou3MIqzA5SVAy9ovreSfcwWS%2FlosAKoHx0csXpFkPWho5CHZ4vpR3102AsHYCx7fQq1nC70nbFizC7IMjz35YB7Pds7LUlX5c%2FmQy1vMq5ysNBsinmSg63w9M0nr9ebb%2FZDbFy%2FeA2Js6PAgrfzU4e8T7NhJKN&X-Amz-Signature=204d5e752fd3cbc9c40e7bb00e4bd816afc625e5da937dd788778c46d94e4339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

