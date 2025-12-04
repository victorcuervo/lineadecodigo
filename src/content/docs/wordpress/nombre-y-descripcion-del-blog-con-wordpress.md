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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFCW6QGK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCb2smxdE5g76ysUd29ilJ%2BWaz3ny6%2FRKWzUoDiGc%2BYEgIhANZyiDIB%2BmDNnlBHgRKIxxJpdQdiDfH7uTWiDgOH8gpVKv8DCEYQABoMNjM3NDIzMTgzODA1IgwHiiEatvh0UqfKIoEq3APVOXBICNROr9DnFYH71Zqr1MkxztHmJPCa2MQCUssKk27jnNTTQozSdPCTX5dBvGm0r8Agu7Ju43qMefx3P9UMWC%2BPRk2ArYkK7GlGfLzTse8WhhVLFcF9EGIll49yIT7X%2F0nV%2BsMxzk4FME3kcJT0tzLM91rAKEEY5R41CGtMjPTflG0ISBWrKLOjSilzQAGEwuCOfLMAO57XC6iKb1MUmxE8Wcv0fbmCsQt8rJt5LBR6ekEEwodBCb1S8UKQyjfStLvoVfWpJLU8uBr9gt6645nGMxgmbjkoxv0KzNzIbbrRR3m3NqHb2ajtG2Bt0rTV244Gsrl7Y4yN%2B5uAYB4tvSH%2B1oOMq9ogmYJHTnZFHsKO2yv0Oczdo4tScro1gjl%2BqWHB3aCIlH7AwqI5lIdytF6Pet1oGCgE44hf%2FVsEU818wKnaF6y%2Fp603QJHadTuNXPMSzbZOPsg%2FSKcc9NCWUnmSuJFW2JEdmKZUxAu%2BQKIzuQnV8OjIepXVqPPFwPoTyMwHLSU6qBXWkPPay9viM%2B1soOP5bfRMmAZJuDcUdyB5qvowMgKEQ%2Byd5X4lHcf36i0EHugpV9WMi97E4j1%2F5xw50ChD0sk%2Bm9RtLeTPAyZV7U5a%2F5%2BE67wLrjCUhMbJBjqkAZAaXLVDgpZRvRpdGPFN5c8Tgd0LGaXU5WMDKJiDYrmQG2JoVDs7jkqsl03HPAE7x8DYOiTS%2BXw3ozH%2B8RDe0na%2BDoemQCQIOGU4Jy%2BPHU52pVe1OMKh3jDuMBxcbUaNT7GQTgdcMB7pebZMbuHKkFq3qhn1ajW586rEUWuAaqVyk%2F5b4C5NhfCe2KwMCO7edq%2BG4W4qKqL7VdPw3lT%2BmttNyN%2Fx&X-Amz-Signature=86b7518496f278a681bc775decfb2532591d007e7c5d023662c21bffdfb17712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

