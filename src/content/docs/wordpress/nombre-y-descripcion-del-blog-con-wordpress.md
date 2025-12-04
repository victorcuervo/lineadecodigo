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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOPZ6VP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRrqwsr9qaFh6%2ByjLecdUlAWE2PwGoLLJGWykBqAFWIQIgEkH6TER41KiKhKaMPKge7apEwy8%2BwlEnMCOWoIZiWfwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEIAkRffsElHGdG2myrcA6oTD%2FnvwtRfrUdww4P3khlD4Eld4UXqjq3%2B6G6dlgyI2KUivnN2XvRZZuugmSWmCA6wvLAYMZughYi%2BqZKD3q14YvCuu6bKfROqdCbmOStFhgB42BWRkMJhMbnCD1u31Mp6otyI6swNzOU%2Fu0ioKD%2B35SLaLiWFoP96y48EYQ9c0g0b7x%2B%2BZFvtqiygnUAUlNJ8mrDP7lScVyyh8A%2Fol0d07a3QrPQR%2BOcFQrzFkUKaRZKi2QPqEvMh9DAGouPGJoICHA36lQI1ftfXmtRjd0DggnDAZ8%2FcOq6Wt0VUe0JdYlNOkX7x96p35kBC7NB0yxxlj3vTb1e0azCYweE9ZeTuTqHo8aDJ7myEE42FnTqXP7i9g4DRWEfA0Fcu0JaxTsdNZEpvW2MNb3sAAJT8zD1VXIQmEQ0Wqd7sKjwpl7m0AhENH8b3OG8FVosneO23jIKC%2F5X6EMWrMQIluPDRddC39f1R9K6%2BxY%2Fp2fl76T9wMNrQMa2jl2nSoTh2sfHCYtL8YB9caYkfaVMIL5hXMAXK0y1nJLUriKSylqa%2F6MZyTWzPv6T5qdY35eq3kYcw8SEaUo%2FvK%2Bt8Jbot%2F7HFcaEG5hwJ0%2BHVYLylE8k1fII7AKJvH56jP%2B%2BVQmdxMMLcxskGOqUBGgznIgAz%2F9FDm0M05DaJWnSb51pkYMZmBivDUoafHfShHbXLBlNeTHjVqJfoqxhnVRmwcaKXQg4ijRU30h0aS191%2FS%2Fa%2FtnpR%2BDxQ8FF8zB5duaPeiT4MZ8J%2Bgpin462%2FFaB7%2FGw%2FQxtG7FYoXZCYY9o9ppDsPaJoDJ3KH0FhZEHU3U4Uoh%2Fvee%2BAp3T%2FhbW5Q7cmj45j91xPmaUoEz%2BqBr%2FI%2Fz7&X-Amz-Signature=c25e96a25616e5a1527d5904e25c4a37aff72672740880e22ad783b7485adaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

