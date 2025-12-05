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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOX6XCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2BKxhP%2BIDc4c0swD56fE38ptwGVsVIwvRRTbk%2FslIIQIgEskI7g%2BX4Cx2ERRtspYFJZToWAhMWJiPaWn%2F%2FdCc9gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGM66%2Bi6eiig4qTfGircA98fzTMZWhf48PSyW5EXmCr4dLIsYiYFw2pcfGtHh8Tpbg%2BP4%2FYkd2%2FcX3T7gYHfPc05IN6Zmlzf7VdgtcPEa78JfZy7dyttk6rtuKwPgaHxZQ7P%2FvviWbawx%2FqgS9X%2Fl3y%2FoCFEW9VpJkdERE17c129fzS3JI0ZOt8EumghQclQgm%2B2W6Ij3vA%2FqVdqbioPYJB%2F9fiFpHjmUB6dSPAxqmLEhujdgRVGeEN1gqkC9x5z6z7d6eC21R4SNvvONVKuktUliXnOxXRoOaX9Dht56u92qg6GwbhUmfl9BptKz5i7Z5FXkNvHhHLIwBmYT3nTvF7IywdnirL3QkU0wJF9RgZuE7OTDRVoMPdM6H6xnGQCq%2Bpn5Goj%2B8pz5W3EJoVog2ytanCnKz9hEjH%2FZgCC%2FcW8%2F8ec%2FBKOibW5b0g9TTq6sM6m72KPiGevO%2FT6m7M5MzW3bq3OAZsBSvI2qoWsdFAPmZ2i3KUSQP%2B5K%2F55aoILhYrqxDEy9cPgoLA7CIqRV7Y0VDkdrLi%2B5PVdM%2BnmN5%2BJ%2F34TJSBQOqh3CD%2B3zctFWLEMADKLNxjCcUYjtWaIKcA9cQoMIwUox31CnA6obZZFjMuBNsVhEdvXPoAtz3LOgn8FAd8COEt9T16eMLGxyckGOqUBTtV8NFGnzDRfR6bNBOazQ4vyOG4yzyBBWNQ372qfYjY3VmKJSlBX%2BrZS8DVe3StCI%2Fo2RdKMR6CK7UmpsUOFahXwmsTrGkIXUUwOP6I%2FP5VlRAwTQzm0U7b9lu023n9v3wdQIWHiUFYvEUiaFQadHJTkwNsD8uQO1mi7MLw%2FHaqdZFr1I3%2FfL8jjNbSA6TKBfcNORufqwpoNr5gCjUlE3EKZ1TcY&X-Amz-Signature=be9e6c1410eed9365a470a05ad71732890b039a00ecd7f59e553a769efef1801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

