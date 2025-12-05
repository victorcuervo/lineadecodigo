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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YZ7WLRW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRkSXTULNJ15D%2FVbC2q28xwTEUsd%2BuWQIbixqagofF5AiEAi8%2F7CUzT6zml7JhylPbmwynZv8HXjMzAMQfhmsCLKKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGKXrCEVvvuh1FrrXCrcA5fYF0A57%2FmwDvF4KwrGv5IwLuXgtQ58pCUMgOA%2B8Maj7IZJLlAuMfVUjzCU%2B9317iyKhQWb5CgVUWcbiasfKYRGGGezEtQ3as1HUOmsc9mdsxXl6Sy5k8pvKfA8Huip8Gdt6Bh4XCoQmbjs20JiZtYgTmvHzeNDpzPYz3KZmzs%2FOnrqR4EVzo57MDo6PVa3lSA8z3lmUgd4PyVPlXsFsTS6h3ObiVfbQFAjHG%2BVNsN5JSRFlyxPMmBKFs2B%2F9YYWv4H8gphMU3vXo%2BtGVuY8trNi2jPkNEHpV%2Flw1sk3ESe0HCUkz6UsRWqb7t28ZIYROE20xnNO8QeZe5%2B%2FBE%2B6lEfhU01gAfWE%2F3yA5MaIBHwlohcHuvEVWL5FXdSoDgqyA%2FOmT%2BsgU4KlrD25NxjVt2188Lpf89VJE8mxYKKXo2%2BZaoMUKO%2F74dWuINK8s9GMHKg%2FA65lBlC%2BUeZ0ylCbVks9aCrI9a5Xr9LDRj7vv7d1BS9et%2BWzORz8F8mj8DHJKBLNr7%2FCEDtGRXpZz8Xt0T%2BSK4oPB%2B%2F9e9jox8t%2Fk5LNUl13UumKMHzqHSSjKneGQPC6l8B4Fnsj4ffyuShOzgDdnUTampZV3%2Fm7sdA73ehAcIeET7kEJuF%2BE5LMKCNyMkGOqUBrjedUQUt2EwZUUqK4hhtcboNbK6n3Mn9nQPHG8AwCDlbMxAUMWnsOu%2BnXnOAck0JAp%2BR4mh%2BUPvvTkt7HRmRz4Dv3YTqmYLBSHvQDEfdHVJa24w%2BJ0yi5h5c5EAm9gzh9W40d2fv4taI18czOirM9ccsk1J49XUSewv3PU1gncbCwA7pxOeiX5H7rZDcFhmNtVc1qkSxZu5KG5hb%2Bp3JqDtCFSg%2F&X-Amz-Signature=185377a765c34e9de8cbe0e6052157d88bf107234d3a134a405d1029cccd6177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

