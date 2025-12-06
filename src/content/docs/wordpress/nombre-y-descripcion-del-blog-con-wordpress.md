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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RKG333U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDenN4ovKBwVTqJ1FPHugi8g8x1FFsohseQCVJOC4toiwIhAImqHqgSWNxJ%2Fj7a4uHANGZvyI762e6SE6gaz8eeIvSyKv8DCGsQABoMNjM3NDIzMTgzODA1IgziqMZ1ynnQfUSUh6Mq3ANf6z8dz4N3ZK5OcXwjxeP%2BNQpVXKBC6yscnMh0WCzvtFhg8sPzcJzV2FH3u%2FrTDeUwYMhEldrD%2BsvYpAPjh1FK2uEUWyLjTLmk2CT7e0VtXIooCHuaXqZ5r3eaKmEr%2B%2FtUCVtwbhjzWVNIal7%2FFaMl1r15tPRS%2B6PZxH%2BCJPzA0AiU2qoNChS62JRKX7If0Y3oZGqHCto%2B1kk6blv6fy7B1gkocMybVCU3Yvytvxyxl7YKQ2bet3cymLGjeHvwJFp2CVOMMwPzmqhtoCSGbLVluLZ6MUpQJwr2qfCKjBoYEwKKx1bhv9jMP3m%2BUrxIJscjKdRi0P2ryh8yDIqFeiPZnhZ3ilDpZLUcJRndn1DVt6fwS%2FBTQu3FSO6dzD5Onl%2FVEsNbSKhXsk%2B7PNsJVTiSqw21j6nBJ8FOK%2FTpLvO2eOHB6CvxH6W3pgGk%2BVBL0YHlgz5UU%2FDAl8ofoFreamYNDbhu%2F%2FiXcyrQ2MmsQmMvvTKeG6bWJ3ObjFlQyzX2ck%2BIdEnOdN3adWH6trHGsUEHbUA8PucK4uzDoLLpco%2FRRwGGvnn%2BTT5iFOU90JgXdRcITPoU3N7yrj%2FJea%2Fp6VKHJhgQ8Ahs4q6ajAQlV%2FtkhKEG91VbTfual%2B0kAjDgp87JBjqkAWUeH9a9D0UVUV1LgiJZGehyB%2BEZi%2BPWCFq8P%2FTAL0d4lDA9kodvTaCxjV1cYg%2BmqtoiLSu9sq7YnIUpRwnCs8QZx%2B97lJVuILoQbUc1xi48FZ08sNVS1udbBbdriWthTf0EByVtR3c4%2B4JHLWa8MO6wPeSDYh4lxVlZFFDrVd6fjipMZxRLL%2FePxIt5NJLx3hxlMRvHObO%2BigtshSB2pDj3%2FS7b&X-Amz-Signature=abd1b9dca0a9c4b2a6bd10b6c2699b89e37c160aeee04f6e8d15cf985520177f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

