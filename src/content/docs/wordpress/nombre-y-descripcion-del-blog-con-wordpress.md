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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NQ3PTI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbp7Fip%2FooYdhg7t%2FvE%2F%2F5vckCwhOA6UbKpXLu6L%2FnAIgS3zNLFSiTHxxaon9i3rkJj4PW32VwUPV5bs%2B4A1%2BfuUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAC0MFQbzta0GCnEFSrcA%2F1bFxJ%2FIoadUp%2FEtXSZYe5zhJrUTVDMRSwuIKt9a%2F3GqWyJHTtISYfsYxBDZYB1IjM%2Bb6uOU%2FjSRcRAZi0UTAoCIWSftU%2Bc4EpEREcxmSWJSZb3nOIdLKnebUte%2B5EDsYgfW3UM1dBooC9UUUeX1U6%2BkbUWOR5ZsJU7XXjo8piAkUYRJ9OPHl34fpjXab5NeTY4PQ7KK2DT%2Fzj%2F5nc3KFZkryMkUnTTvF6j8yFh%2FMpEDH%2FpT50nWtKa2rsXMpsXaYHoPf5GmqYTgDK8%2BSTtRVTtAYln3U2FuU%2BX5Qt36LM%2FnCcyKiJGO%2By6VaqW90lU5KOzQLPR1dkoT4xuy2v3t2L2T79FGoRsXmG3rDcs%2BX68tYwFSyb9scHeDD%2B%2BvBmNCur8MoVzyqeUi23OGGD1AJJpz%2BUdNQRjU%2FiKcUoc5EZsksdO6h6yFNf1n0KKfDjFDT%2FvtKQzhio0VBXox23MWN%2FvG9f%2F1cvcRQ5rovyFPe48CQ7PrKYbfD%2FRJfoGoE8kS0dsa7bu0JXqxyv60cmtqVxnO4YizbmEfKzHrUgIik%2Bw4j43SwVm7xnX42D6pWK1d0cE%2ByDWMj3Jxn0wC3%2BR6qj%2FQ26NRe3xR2wJt4HR9SINGF4S88dnjS9oGE%2B0MJzNyskGOqUBNAKLC%2BgDI8bL1UFnSYlxvxuo%2FExZ5wLAvVzabPaDc%2FIyl0QwHKGhjsluic3l5ROS%2B5Q4DcuQA3eFA7gtIPtV2Wykc8t3Q%2Fajkai1b0Aop92fGey7QhwrJbtxNuNjngowLmsqN4oweXRTRwzkGofJ8Rii5gE%2Bf95kmWxGbKZJXdxP2C5cpCV3Hjyc2jboiewj92p1tU2YIDlMqRfG3ZAKjwJtp7c5&X-Amz-Signature=ad44590ee88ba70d7a81bef1f562b7a5012b62986cdaac8be0ebebf0f8740ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

