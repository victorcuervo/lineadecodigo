---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635F7TZB4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHitEFzN1dIrN2jYuZKCufGY%2BW9PJBo4FEGT0lIYdbufAiA40PCUjIVzPA3wISxb5wODljB64fzVq3StqOzeaVV3uCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM6BUZGoExpBTzdoV6KtwDpBC%2B9f1%2BEG6Wqb1BiaOtHyo0%2B9HT7yMccmJtYxgoZWegJlb3B%2FiGotrV0Dh%2BOK3nZ70jbna%2FWBygY368Br48Xbp8wTjAyN1IYUlXYwunBWFqyDQpfkfMwJiWJUrVaQEMZqeZm%2B8g9sUkqcxYRcPXXG%2F4xrvobDc2eY9KBK8j0ZuUFink8n3h9TPa7%2FYfBsuPRw7aciZAGocxq%2FsERXxGR%2FqCEI%2FSTpiExK%2FSP7X0CiSnY3d7o9NlrRsc%2BSVN8bX3VBgJ1KuBnCudefYgiztDLx2GDF0HZ7wv8eUbzpXpjt7ml%2FhH%2Fvw69I8XFFHLhn0PulIbgmzPM9KdMChb%2FjK2NqFcW4YfXUNaSnA%2FmFYuGhDwYXALEXd6lTKnEgQiweR9wtSnmcI9hInFguSVC0rTPn156pBxL1rAXnysIa52ua6oXn7EoQN94a9AYx0q9bFSB%2F0buCm8rZoQFRhjI%2Bodf1BaEKpuaZmS8LD6BjCBvHz55DytaB7liPQVzfWLWEhzgkNUcHxAAaqXdqoKM3m1Cnrq7oU0giXIrN36Fm65bGInFpXp9CqwhRP5IyjzjzCrXLa%2BcTTBh%2FnowGCrHMxpRWJ7c8GZGWU4oPIHlmtm9Q7u7UuFTcTfntNGAT4w5b3CyQY6pgG2NFE8d5KybdGBa9WagKAOEw1cHn2cahTkCrI99kqucyBzVTgt98NvNJ4LKBEQ9pq92zqU8pP3jWr%2FC3WC%2Bf2c8vK%2BjpR4ipBN7ImjG%2F6QZLDswLRWN26y279jbK9QhFTvB2MPgJ3yrXPrunKZ69MIJMME6CRWWqAN1KYiebHzAEHnwEd4ibscWRyFxCXoRn0SIHnUZFywkgUAbU4CY42tOs53R7m3&X-Amz-Signature=6d81ee07e573cb50845a1689aae4193b46125473b4c5a0668f72897e7c65e77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

