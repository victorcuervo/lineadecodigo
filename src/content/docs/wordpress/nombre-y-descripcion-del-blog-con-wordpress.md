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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPSSDJR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCT4edsdUskT17gus%2F3zPzJZerNtx0yftW6BJCiCiQsgIgQY%2B6P%2B5qbus74w5vyKtnpZTAhJlJt3vomRWTeVOv6aYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKpiR2Lgn61f5fRXZSrcA%2F08zBIzz8RI4Oyx%2Fi6ArhSarg0g8qQSGVdSRT9OgYEvDBFDEa8l2ZewoWjdOLYxHnJQqilgAdFGcgthFcYkqcodunIQeu4kpv8A2rezupUtWzHdZ9MkpXUujOYGC7pVmhcVw8HYoPAHmCo%2BYB8pF9MSx7k7i12%2FlddtROD8WX%2FaFDGopGF8YSzlXxEqmXqicb1aSkMY%2B%2FXGvHltPgQDXMRCOZ02n7pH6ybnCtR9mMg0gut0frLeh%2BYclqMDI3jqOlCoN%2F24DOywfejIEm26CAvRh9vXe4MhK%2BY0J8LYVr0iejzV4kq1J2lAv5ixZyLy47RmFdnQ2bMCqCV2GZdgDlrFgRjd9m9Nkmn3XjvrFzjAIlPTJQKUPpzxkoX3Ak75nTdHJ4R2yiAo%2F5DIl0AlD6O7P8kdvt28TGdtKrhRzlD3TksnP1zxNntTMU5QXmrYxbN8ASoHeSd%2FCspDj%2FqEf%2BwlZP0bkFb%2Fd7TYCwLiROMLJ5M83wyl8qOeNMueM8ZNWbBWoTGCjJMDlTlyH4nw04yqJa7utUaBj6NuoX6XJ0fxK1%2B8TB3rnaeGPsaci7xQq0HPHxEtfVT8tBpR2jAGACWaFK0Do7CTSX3WpaAvwhN2LICF8dPVCI3xYXAhMN7IyskGOqUBSE11fvEWHN4tB3Xfrx6%2FpkG62x9zJVE8ijW9%2F%2BP83X8%2Fw76yy2OEFBI%2FHjly35YRVG%2BmM1mVUQRzU%2BY%2FaILDEjEnYpevFoOfPHc%2F%2FWWebEEfX6oAAUXcqq%2BsnarRc%2BSk4X6GxxEpu5ZxjNkHma6SV8hz%2Btq%2BjoQetwkGnilXe%2F0Z%2Fx%2Bk8AW8CCyN0Vj0aci1ewfIBTBAbM2HXdNoGZV9kFsFKprd&X-Amz-Signature=472624e849608e9c542e55a803e9edaa5fe55ef54d678cf37a998f95db216c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

