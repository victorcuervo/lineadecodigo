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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQSGFEA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHy3XNJfF5fy5aMS9PqGbc7L270NMs%2Fl8FV67WHZCG4iAiA598IXxGD7A3S5xIdZDS2QNWRAZzA9%2FenG9hD3lrVkxir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMEG6%2FwhoQN4P%2FVyGzKtwD9fbiY6J%2Fc7bL9MTF%2F1zNVCfNqax%2FlLzkr4zz0qkW%2B%2F6BwIYNEw0sffNq2xdCuLvjZlhHdmT9fE0U968WFRNKRogSLV8l4bY1BHoxmgG6zyfXX%2Fh6uTiMCa0p6EQcci6BXxmZQMEcbbZp%2BiXAV0iUyL7u%2Ba78gyT88wYMrZuPAkOd%2FjP6VE6vucEZE6accL6SO70s0BaZTT12hSM8TvFPyBHZZt4mO83SWJvdFFNHVnRGnYr6OYtaZALF5oJm9hspTZ7Kl5gIlBz5WikKw%2FjL0fGiWispKNl1oBmRbZhrT2lvFrQ44KBop27UCbIz5y6trH6z7So6gTESEG8ZOqw1NSKziO20vfTZmgKLemJmpRzJjkR8n92GRIdVKd7g6ucmwbqTtCL1W5tZqoty9x%2BBWy%2F0CFwQqFgk0FePPad%2BCOKsemzLlosJnoC9wIiuDrS6u%2FjG2xxVKVxIrzB%2B%2FcMBVXjtzzqruLMzNgCu9oR1eTYs4CK%2FTHm33rIvTMX23Aawh2wxhNF3aV3K23GcKxQRQmVFftAyeJnKwERuhExo%2Fi259jYgqTFNTluGozNol9A2MDgh52sarUtDTph5latCpFEVerYz9qUcuQZah4x%2F4QGZdPRbcLL9lZ%2FKdL8w1vjCyQY6pgGiYbW1Sai17KGkHjOtYIy6LjOI1PFFfhJSergSwkH8K0fPN8BBodX2S69rwgl0X7VzL%2F8JQxmm%2B11Di0TCdKQPPqzbsnw5DeAz07Iiqix6sid6XJnjINq%2Bse1BOe1RWJLsOmatM%2BCCWO%2FmDVpUwinK8mkcxuiv2BcB%2BuKEKWsfdczWjy2NNAJVlS2T2BeSUbfx5NBQbRqrLwQGJSWagRcM52xc8VHE&X-Amz-Signature=6d288201f8a522b9d405b99afb387713bfe0e3f4bb85ebda6c68c55b40b555bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

