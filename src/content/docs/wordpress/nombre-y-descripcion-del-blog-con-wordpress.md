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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJDNLJW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2XuuB%2FeZd2TyXIg%2ByqDa9EjZkhK%2BSBxdTbeqpIp0djQIgMVuTqsRvBeAxPjWyGd5hw%2FRHYtCqLK7J5JdBwjOqzpIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE8qgMe8AUutNToFNircA8l1GAJ0FvmzkP4ng0DZM34cUiCgwpZVIPW9O5Zg4qb3HjZEcynzkQTQGBwotg23ldUen7BO1OSHlwxabFwfK2jOF9R9N2Ufq489yAzquu9MAx7%2Ble1O5AC9%2BX2rICIUPO1i1j7y9J3zkbVKdXwNik5lQt6BudsN5VAF138hZCch3kN3WK%2BimY%2Bmt%2FcAa1mwjEtXF8vOOhA9TaQjRfPpnODMSZAUcdcgVQ4BMGqPImngCwgAFupKGOgXMJfNJqlz1hZ5MAQV2XpcnUG2OA1t4MeKnZKdJ%2FvM4I4ONgyBKYoCAI0y0%2B%2BJol%2FeoZ116h1YAro9Zj1pfCxItehW3Bw9ByNBf7S6d1MoL52%2FURS4s%2BEAoo7s1TQle944r1kNFbcPyPI37Y9MrcOrs7GQO%2FTDwHGNqu0DGFymeXq8ZQgbT0g5bWujCZxHy8x9QYEj4SwvuF4vfv%2BykSOlCuSmeNw0QX7yoCHUl6tU3Y9hhRcKG7nQXmT4X5CL%2F6uEBpyuKGSmYFQXGU9u7SKPJev0GTfdnet8bxfucUywR3h%2Bl5Mv%2Bh2UUCZe1Ot8vPjdMljwcg2GvRWYXyQubU8lO%2BOdWmrf4Mp7q3o8Xp1EBA2hQ6vAcgbxv1n%2FO0DfAumjRz1GMLvty8kGOqUBqC7bkn4WXU9wehFInoZmtWAGTvnJMOPv1SaBGgGr1T9x4O9rDzKiFANUyzHdJ%2F2IYWJNlWEQTNncQMez%2FiRhMbBPyiDY8X0eJJ%2FV73XJYhtBXM6yFdGWeRn%2B%2BNdjWFl8y7eYOzUZXtfp0tX5T37c65thpKk6pXPPYy2XIyJLXDAJxxcSOcMqujUhwVba5t0OLWFWE%2FAlf5O8dKV%2FqoJ%2BKigP%2BKeX&X-Amz-Signature=960bc4acd058e46cad6f0d70ea97ee33ee0b807cfc07a29fc46c9a198c39c5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

