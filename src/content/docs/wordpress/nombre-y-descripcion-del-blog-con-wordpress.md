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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XBNHBN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ne50wv0x46l%2B1VkD5M7tTw5WlmEiY98tBhp9zz90OQIhANzQzLZXL5HeaqlktsjTG3gqXTJTNmB3Cqcy%2Fexkx5UPKv8DCG8QABoMNjM3NDIzMTgzODA1IgwyIyWIHC1%2FP6POUe8q3AMLcntT7uFdAo5sJ2Fdh2Bb%2FehVXmHw5QgFFu%2F1WzwUdSOmCFcjD8wtV9iwONi7N2j3cNsdS7WzZDGPcppxlpvr0ZBfsOF7bYDYmadt%2BzSEpoEEqV4rGjxt25Q5gJuvWnoIYaBrWnh8WVuDwSAr%2FQ10KWuRJGM1%2F4Nv%2F4KcSj7g5XPTyZPAjAMOJAWuCNwBE%2F1FTxpl1Z%2FWsfldtcWAtPbrRX5Fu68aFk5NACsd6%2BboUcXlws499YjCzkxQHNHHhUJFCchiPmx%2FGc9JKF80K6mPBrqlZcFqna4j1O6Jrv4jd8BEcKRloOj1al5maeGLJW0EUk%2FrtwAmGtL2ZbXHPUarvd4TZko%2BJ6IzAiLzZgsYitmJZ%2BZnh5peRCrDBOpeMw3bzI%2BzpJz2%2Bk92h9cPXx1r7aaH1vCzMeIlwbTF7n2HKlDfz%2BN%2FpuWcbo0yc%2F96tKb5N8Dz5jSVUl7GaWsY%2B4QQRm4mxPU2P%2F%2B6eUsHeSYalE2D0kKRC3E%2FlHxDqNR1TSH90bV0sWiqqFgimUHqJDELgNkPo6NnTY8Kj5%2BBVeLFgK0Ywfhh1nrRvUg2xDPiyL4Cxgc6PSyc%2F7Y1YNXdt4O6slsSbAPam01lsQZt5S%2FVy0BOidO3qIYAnYnH2zCq%2Fc7JBjqkARFEkbl6Dz%2FY1KIJSc7lhFozuRFaLXa49gHdZBVzlXQ6EUP7Ktn8uwq307x3jHLLl%2BDWBBcGnJoTDmwQUmbnkW9Tnz7KHzif0Pv3TTK0%2FHyiJ0iWPf5GT7j1ao9G%2Bsf8rhJtEeMbeHy%2FuiL4cYzCO49FoTUUYaFpnDcy950KagAKljKvaQajUGPiHjm%2FxdRufz8z4Rb5Z7nBctFXahuvOiRPAVhe&X-Amz-Signature=d7aa781bbf964173b99a8445ca0a24e774c067bc93d914317789d49f744fe5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

