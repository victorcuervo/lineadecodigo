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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPVERZL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA5AjK6Zo9Iy83bQQ84LkPNT8Ga8pgMQXZo%2BL1e3oGgAiEAploFJP%2FzSTKGeiF9bWMWVDKoExMBxpi0NJQLdWN97IEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG8MpVaOP6qaeaHJuCrcA5Acr5QWfJhT8bYLaQf0fGOocA8sGWOG%2B075wIq8E1rW7uXCtUu%2BD0G%2FOzJxOoHvw2x7S%2BOVZC8jInwLrTF29nt2A7eaqlKHmgfwy4U%2FKAnfjrqrjLq%2BEHLr7LYBHRBSAbjBFN0Kii%2Fqw%2FDz%2F6xy0RjE%2FZi6vwK0Vto5205mBTnj6XmCXL5FrYWY7nY3AEKAgASG3NfDixSdM6XqG3Ise50loEQz3%2BRlzC5XVuALR5ex1Kzuiq7fBZhKcxcKg8Jx%2FJJjV9oVqjItRPtZWLaBbOth6XjI9KDUDD4lSvcLE0U3ABCZTyvF2QmrhO%2FblYqU4lXdDH%2Ft0bV7tOdRLKgF2QsXtJdKVFIdpcpAdJtOGlzJANiaCklI1NZGwd%2BGdysVg%2Fr9LZiwE7RM4Pb6uASCpGZFP6Fuj1BNabhOzX2SPCR2evRSui6O3%2F7lLoO4eHZfgiDoLCVDNT5jl7OVCMjOJqa8Arn6r%2Fs2TVz3FuF0jPP7wXdksE6l187xRUVzeHnECHAZh%2BIhJ8PXaYnHh9Rk5fn7UG6GXwdaCfsLwPIE39m4WK6wta1c9c7NUk0%2Bp0J6XiVJzB0vEKR39Mw6Dicdqu20UsleUE3YbqUcfTjxLM0KnTYQ19hoouRJfulQMMTM0ckGOqUBX1iFmhV3P7A4SrMiS2Q%2BRJHKV3RM6HaVxEPNPCXDc%2FFbfEwQQ3qnwjAg3jemzX32N2AStrs9LyiM9lZjbjqDDUupamKJJB0gfivJ0iDCohFfyz0z%2FK54xeZeI%2FTE7TsItf1XcROt6Q%2BXOS8zxxC6KIzRtSb9jgf6Qw9ZJTx%2BBfki%2FqpUPgAXKP25ZCv%2B%2FiTH2CoWN1OTJ69FsQaB3nX2D4W81H9F&X-Amz-Signature=88e4b34b1094a00fc830ae2ada680f995ead5046842de42cd57e22ae04219314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

