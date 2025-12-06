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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5FWAVS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRCGZ%2F7FdLbdp%2FhDCfatxFKBeDGX1EJLJI56zHRdaWAiEA8aVT3ufmS%2BNjlGNJ%2FGrw5X8TG%2F9G5xlVU9ZW%2F8YAmJsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJo0mwAOw4CvQXZB9yrcAzqeIv67FVCFdmRJMF16JZpCXWlXGAy35PYB7gCNe6F7XoZsNaPzEu83nB2FUxhNKA6ujmyGJpA3H4DUXZ6npX4g%2BcxUdM0cQtjIrvZA3Z%2FNydxdsxTnjzK9blSkEJmlQyPlfM%2FWoIWLoNCL4T29qRhMx55CsyHGwTUqx%2B0OOzU0NXS7842iWAGsD%2FDA4cGQ7MIhnZSQUljEyXpo%2BDG2bD7ragZ8me6fHF68ffnfUUkJ5bv9zNBvT3KZ2bJfqNkXL3jbF0DE86l610CtB6IKr9eswm%2Bb8xmYp4NbbVJ%2Bp%2Bm9YspJTSQfdz8eatNxtL34TBQGDgGzBX9%2BSTgpHa5q8C%2FX36T%2FF4xgWYK3Bw%2Bb%2FcJlGH57MyEqVMWvUoO1cr0JIxhpZrZGaAzeVmwjYO6LKlRRdJP7JEWPXzU%2BJaGhSA24erM104i1v%2FSNO%2F%2FS3TfcfCDQ5d2eYfApcmXa5MioHaceyRDCu09OmBd4AtfsDUe7jsuTGPzR9ewvA9lkf8xCr650d7BYWnCySlmhLfFM1h2NaHxTa9cmjcyZMB49zItYyCWMBJXd6GCHzDZzSw%2BOfx2ezIsimhSAxOBRcxKMjvx3QlJqRWGSQvi0Jgj%2BprnkQffnXeW28uNujQfDMN6ez8kGOqUBJ4qwfZz9pgEvc2YX09v59cF8GKfWTF5ygbc%2FoQQuZ6dxFVSRsJ2gWB4tXpVE0a6A0mjehywip8UlhPP4NUPlUW4bjfIIUEitn6%2BMZybvBvfcjxAgXv22okrYFvicUDIiQ5VUz22C1fQK8uVVUbYM%2BRf7PKj%2FgKya14On%2BKWm%2BGNQoWTJhcC8dghymscrNVxAAO6XF9V%2B4QCP%2B%2BW2GkQc6mDiAYpw&X-Amz-Signature=a476d0e9373bb50e11cbc18c0d666bd147b171744458d6b33555e7b66880a98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

