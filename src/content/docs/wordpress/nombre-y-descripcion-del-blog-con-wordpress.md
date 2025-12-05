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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGXLIS7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzElMT671kbtv%2FQAhAgVp4ZVJpY4XOAgkOD%2B7X7bHDXgIhAKK67rD%2BXuRboZvZTEMjfkj8itKDN7dYxcua5fGJQbe5Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwAJsSHKPMmrpXMDD8q3AN0ibfjEfMLwIB6gk340Nv5T8Y1yv6VUl%2BG7IXsVBudsTcDRmbpKkT%2FRyx1V23WpCgjdVgLq%2F1x%2FbbAfjEIoKY5T3ZvQFQeAIEIazOdWTVAVwgH4MdHYaWQYoefC7NfwechAs9sLDD1lgCIeHdqLkfe902RY8flqnl0VBHtC3eaMtG1u72DZpEoKKZHzTA%2FzF1HHfdSrz44oraQI8WuYAXEQDg98zZMXqkDGs9fG07PPi1qSG%2B4Bkg%2B2%2BEyWrQqJk%2BR5rY3Xn8MhiB5Ot12fB2vDf4Ni42QC17ADcLlwRhQVNqW3GkZxfPwOY5chiyYg%2FsGgSRmxfHP2csKC7DK0C%2B%2BF9nYBE3VaMy4L7dOgGpTn3T%2FP4ZaDxLghsQKAfzoXq2ARq6CwjbHwFf%2BuHi87l%2FBg%2FLOZTgMPU%2FqmZWpZhnynpbB7MbSCTdzkxD62nTfuJdvpLhSnQ35tSYPBmPClaQmnZ24jZslwONlZwLxc7N%2FTcY8az0YY%2Beh5oSN7SmC3L1FcB50fjy4HS5o%2F8GMeDM%2Fbaq2Bx4pp1uMs%2F3YxNPFU%2Fl0S9TjD4sb1ncssu0CZpMXirbu3v%2B6vxl0TaY0oRILeu%2BjmG4%2BmP0ErV3N%2BD%2F0q5PGbQ5TZnlz1ppTSDDvhs3JBjqkAfsW4s4AicLmdXk989o4mYu0B2swm%2BVPgVPrAGH19gs6u3iyrJY8lw0U1nws203Ust29gACEReltswNrZpkfgFHpTdBjcd8CKgz2BLECiYabdw6RwyyVmeI7BrmnEmBJiVVaFuR3QKTIuUE83Xbmc7f9aE3%2FpGXNy9U3jog0oDM07u2gIIQn%2FOTkNi5eD7ZVwzLQBNNNTj2gRi8kAPII2PG02K8E&X-Amz-Signature=5c7b2cd4e96daf5a5e595ab2addfd3e23c64d0445e4c37867a929b44c4fb7201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

