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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWKNRVEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0YJBQ3TFW%2Fda2pxsUo9Ivy6lRXP2VHdxHrAgyarrpDAiEAhONjoAflwgXEaPQO8PVWrXS996fbHIMp7k7X0BoTa1kq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOuohsq3oYNZK5GbzSrcA59J%2FU9TxpbTeeLm6CsJJHYxYnDGYGBxYXK99cj6%2BhZY3T0LRn0n4q6%2FkM0jPE%2BM3JCwEg0QhL7ZhEbYALndTbQk1vyW0oHj8cEun4KObYfGiOOYYTJgw%2BAYjT%2B0Y45leQYtp592olvJHnS4qHedjAAf6UHaXVbhm%2FfrMoUnfYV5CVYzKcSlACiV94Qsyadl5jp73UeE7ZEIJ5TOE16OhFpqD4y3%2FvJB71%2FVRhYATA83Yjfg9MF8ZuROWy6kgDVZAjhqnc3TkvPVa7Rcc6IcHEpnmUyqhA47%2F9M%2Fk%2BWNxnbivPNr6aXy%2BYWkJS6YYNnqK39gpMVD%2BV4N0EuY8wYNfeGVA0hf%2FTPaUmN1hWZMwo0%2BRI4BaK4K34%2FXJHi61OGP3mEkRfjLMOVXYaCCTubIWyUCSewlFC6Ow3Ig27pVIqj1CFqgBuL22%2B%2Fhv5lYvgZuT0BNaGME6t5SLcGdssh5SzddSkdYkqMWTdYALgvU53ndCSOmzrQkcsGUg%2FAXKT9Ji4olCR%2BEQ0KV1kYtA%2F4NmwDQR%2BTxabSVbnQOCFgU7dk6lJ7B%2BxNFbIvVOY5jxG9r2qbaTX%2FFYQlfkHC1xIvviFX5Cc7w82Kn5ftrIjRTKhn9O1SRzYXiYq6JM1aTMOzDzskGOqUBUQMQRdCnRipmpj4gYrP0KWPW9db37krdbD%2FiZ26VnmSeafU6UwMhnwxeJJp9bPYDsAA1FPuYAA59Xauu2kH1pqFO25oZAhl6xjurvu4q67oqxged6Z9Vj4NZlFLjszixQOLDA5VWPfI5vaP9fcEmYeLLvyBk2pQ9i9RW1ZdxJr0TdJwSXE%2BXDUbl7z9KLP6KVNkP6UitPJQmMdEuGmRgD2xlp%2B1k&X-Amz-Signature=3af78373675812ddcd3c1f50a320e793383a2bd66882c3025ffb5a1738a07d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

