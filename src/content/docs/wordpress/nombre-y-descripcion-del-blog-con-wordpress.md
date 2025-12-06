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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPRWCYP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQLkjnXtyfEA6xMBMmlo3Ysb4fUYqpFDvCNe%2FrVIQC3AIgIOQLeDi5euFk4LRrpbK4WPYXtDXrCYhHfO4s7z4YbEUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDc7Zh%2Bqxla5QXSaeyrcA9gf2da2baz7gQbC%2BHgylUw2%2FoUVJuqTk1yyRc70YEB79215%2B8qdEMp%2BsT8Ac8aMuSOv%2F6t453UeWUDOzTuIbHe%2BmPJCYTS5jWDfaHJMREhEZiymPYQj66UQe%2F8n2TEMra6fONZhqqYSGuPXySzMTu9v46%2FFE%2BbWOutfyf4gmSyKQQg8abfx%2Bw%2B9ZccghiBoTH4Q%2BSYIJyzF4%2F%2Fubc5IXlpYLnlEhpkgtcd0Aod5OajzkB0pB3XHyJZ66wWFMi24L0kpkwXXSHmk%2By%2FZShyvKcUi8NqkCr8YmRfoiF21WybQZtd9kA2RiRirTgmr1t3r7pzeo1e32oyrgUYwxC6Ml2%2B9647bYXSI9IQiVSG2FsjhtVr4EVH1qI%2BAKsmsypkaZuLPQ6TJ4CeuElDXHBwn7JJtzOMgInK9vTwXNINh2w8SoKPnD%2FD68En%2FFD8vKH8vMJq0fBksUPPX3P8mBt1yTup3FROpf8BS4yasdr6yqj2CPkyTwpgVJcKJ5eNsyjRZjRWQnefguxLC6Nc4JMLnyTw1z5fWs%2F7HDY4xJY7mwfO7sERfiXSmBp%2FnNawzMeZDecJjrZDMmYLM2Am1f4mh4NMQc%2Fn2VdwXY6O%2BbejRxtRm7OHAz2jpKomO0co%2FMOKm0MkGOqUBBO%2F%2BcNsDlP2OMuyUrRHqpHKQVuTBmQ%2FzuEeJbCpk8f5HRv1NUhtNP5Uo4FxpZhxNo1b8tBi1aO2z1OARCz%2FW7Lx7dvScixS8KiU2zYJu3vXTmpUSLlmIlL25O8zEN1d19lD8rjYdF0Zck2Y7DiCmNNRvwEQ%2FB80SOj0SpH7m%2Bmm4JXp11EQa3w3%2FJf18WPluZiJnQrOPH7UMoak8DIS1pfgTdcXQ&X-Amz-Signature=4728f4acb39fcf44ec6304be2e61b591b94b30d9ecdbf1c763d104ab27255f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

