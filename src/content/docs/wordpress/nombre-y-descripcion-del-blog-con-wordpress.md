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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBYGK4M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsj9Wa7Z6sX2WjS2alTGDdbdqF83FNz8vwkdPsPP14XAiBPW0t7R7hQ0v5sggPYdcTZIbK2VhSe%2FoUn5%2F%2BDFEIkISr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMWl9S2oD0qmWPVugoKtwDDSlcoFyhF83g2TQjUnzH9Sn3DvK3%2FwAV2jmOuJJ9wVqV7dXuW5NXPf2xlFSphHoCuf0xdyO2asZLo5lfYfV5d215D80GVQWwZXToRSFYLQFCBggK90rPQYdJKayjhqERhb%2BAJ6iQoNuhoXZ%2Fe09VrpuNnaw%2BDIt91ogrTJWArMTAzlk0DeX%2BsIXyXX0%2FZB78Up4oQWwDKnaAIQ0qG3oOyjZv2kyFCBBiR8PktbDQap9sr8hSM2%2BeZTYh1vQLbbFN7l9uEJzG%2FlQT5t2Wgr11JT9vVvLPjZ3%2Bh6vqa3IlaAtLvukP7SMo%2Brg22NAn2s4um%2FOpOsvjwn8u1QaKfZ%2BGSrjo5q%2Bs4jjv3Jyo%2F%2B54mWzXpOzeeRYUkhwwqTpe3PAWExlO7tFGCYl95KGcd%2FPwgBvtXj8CSubQvc9Eo1QdCfFBd7PXulr670oSujoEV9hl1drtz2UYahhovYmILGP86rfZOUwG9x%2FFhj5yXWRzY8Q9ZSjway9czQIbBz%2FwF7eIiTPX3pzs%2Fr%2FiZ12FpYnZ8KS2%2F%2FeU%2FIZsD06KJJ3RyNGl%2BYC1uUCrryO%2FA%2FPF%2Bg%2BeFw5hh4pPSsg6esP7LuAoG8flqBBoF4nwLYD5FzQqxSlOk4CSBexMtrzRXpow0tzGyQY6pgGEd%2F1tilS7a%2BHGkcIiDJF1ykwvQgfk3N0kjLlF9Iwc81sNy%2F%2BiUVXh9ZGNBIGpxWuBfyCatfRcJXgDHjYx35ZZWvd6C3YNGytF8a%2BNN9Rw6afi5YH8WfIziSt7fp%2FGXKP7%2F3Y3gYmqzLQwwRTzTCqfBhFaL%2FFnjPLLnJJDSlxDdgDmTETT40AgwHn%2BX1IH1RqbecZYTAd9MGJi%2BT8b%2FDO1E9UiHsFh&X-Amz-Signature=a8a3761cba584fbc8c3a65e3ae708e9b2feda5630ad35194f8bb44fa4200cc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

