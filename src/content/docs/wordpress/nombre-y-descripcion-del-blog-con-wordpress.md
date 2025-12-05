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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCQUQVV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtIKJzh5fK5HwFijraSLb5kK3tQeNau4PKkw%2F%2BRUzwSQIgCkZNK0HYpSt0vqKgKEKNWqROt5t1%2FHqMuW%2FqlIxppHkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDALtc2tLo6b7feKg3CrcA9SDnQyN9700nq5%2FNmcAS%2BJAriBpf2XaYeexY%2BDmC4ymj9C0MlHnXayn8V%2BDIzKm5FNEWOebKoKDxhpuB%2FRAFtQ5PRLbjZNNedB4jTINl5R0CWP0IBM5HCDbfZ5HKlDCRep65A3W%2FXFBymRYOLqnFFM8urrCCaYAzO7CxprJgJyxPUKwkO4Sg9nP7LiDL4pG35%2FW9fv7FUl6yYwCDvqz2S4DBWbO6R5N%2BysXLSdg2l0Qebclvt2EMvfkCa90O%2BQts0veUxgvjgCGs9AN%2Bohd6VI4fTSz%2BklDG4V%2Bi8R7l2SH%2Btd427TpM5ut%2FkX0MINiUgw14HAHFI9qnLLrQvNems6Jzjoblk3XBrMvFIgM30G3X2QZK3AIzZgDy2bB7%2BuWTQ8bRHOtOMiB8gWyJw0%2BbCLwF3ljFao%2FmHiQinlPNpO%2BtrzccoNUzx%2B1Ftx0RAX7MKMFkCZDUrf4i8XGi%2FlmT741UE7q5gZ2t5erD6p83ZkUdkuSJj5yTtTg%2BJFgH8VdG6TjVTuuVfI%2FA2sh1TMpMHVk0HZMYI8IstnzeJPnx%2BV6Rx9cIQ5E7VmxKo%2B8QFSvK1nN3Fo6PNkHO92bSijqvU8irpACHhWsOTYPMATYfD1BfFw%2Ft2Na8Tzq1la7MN7IyskGOqUBbpebhSVs%2BIrjx%2BsmBwkgV8SC0pPOFjNYrZdM63Uddw%2Bdr0WSLYeUMvWJxL%2FnQ4LDk8WL5c0UcUXlXMROknGLUY2%2BTCtibWga4w1jhv%2BJD4LCRvwZ%2F9ZmGxyWfGjJbI61HKiquGHNQ9Meuz%2BgcQM048N4U0vNziSBOOHI6NWXX3xlgnPjE6EASFhjciVoalrCsuVlYZec8uBQwUhfoz1bB%2BX%2BPZrv&X-Amz-Signature=909685e58380cf9d6d38249b94d9a6f83a585453d512277f16f099d38afb5fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

