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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23P755O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuP%2F18Mq7AaokhnqmKKVkXT%2BmLY%2BFZC7J4ahMdZPDDsQIhAPlNmGMlmL%2BSgYFFx9Wb4ihpYrV5pgpbQx%2FdpEgGZTHQKv8DCHIQABoMNjM3NDIzMTgzODA1IgwYcKs%2FtxOxXHdulCcq3AMySGwGqYLU39Sxg1c4OHCSv3MbfdiE5EyRf2XLBi33capDNPwBM80do%2FoakUCkbjBoY2m%2FkG2lezkmemmgSN%2Bd9Y2eIzWkwD0YKJMXBf1Jd4Rkn5zBr167BDAMn7xoIlQ67JBsGtCYOfW2Xupv%2FY%2BG43La867fkXga4LbdT%2BWtr68axvaquNpIelkeXt38A6r%2BqX7O15q5X38g%2B6uvWCXB%2FctOvX%2BoIMzl3HDgfT%2Bx74pRTLSWECH%2FpyDH%2B%2Bs3drRMCNrrIPlvN%2Bh8WtWhaNYLl96JXw9CF9bRnQAXjNX%2FRJtCiFxYeR%2BqznzPr2tMKpvW1psAy1jfv2eBBl0S0wKBxwDkHc2FdR7BZo4Y7QbUIjiLBkb7R26L9Xj5dbcxDRGPsZDYyhVFP7UAJwq%2Bo5CHnPjHMz2QdjsoBZY3FerqvvY8Cty9cfcVsvQlxh%2BH%2Fv%2FLLc1kSVoz1Y3dB30TOjeOSqa%2BG9Hodh9w9uDFauHhBu7Xg1kLRjxqdCv32RNMF%2BimOD7dU8vpbHGSpk0%2B4WDPdl0ShyBkcKixcT7%2BtMEj22K6ZN1pMJtoZVK9hXCuk4rmtNvrFQ9sn5JFdPO0PEYnROanLT79rdj9g6amrmQ5j5MG6BRuBAIuCQS3czD168%2FJBjqkAY%2FEJv41d%2FsHaDnc7jM9fV1OaoUlXM5gxXKTppNaVEuyWxs63Zg6npN%2B3pgZ%2F%2B4J6WaEYTvGVmOCUzcgunukBCiJ1i8mTDDrJrMEMtGGshSV97Z%2BKilraUNjsst5cCQmAPvik6AcJhKsQggXSM22a6D7SC90hKcn7TDehi1yUGNpOnC3RnPd4OY8b%2F1O8oUkyjyq8ODmTNgKhtylQ0o5Xq5qJXFQ&X-Amz-Signature=abd5a6b6883465bb8065c93e96ddc05d3b28a2b840f5be4070aa2a12d990bff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

