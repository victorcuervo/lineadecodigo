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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJEZGZE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7dQS7XJLpwVVIKSiOSgKvhU5DdCOwH%2BI3RCKN0RMOQIgESo5K1N3BZYx3ynQFM6vUIC5MNsppU8Kof8cypTMk8sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOtITHbz9NR7yLvZZyrcAwHaqeNywxkjagd8Z1jgYbmo%2FKkHKTVfDQ6Tvii60UGQABrtdeUBHGlArf%2BLnuw9V4ltSl%2BAFKcxD%2BQDByvIkYqed%2Fnyt6TGFBiBmHvbA%2Bk2Mo8bPHVSZ4mPJCsvlVSQIqQt%2Fjvhl2o%2FcLYjqIy8TPfPsfdOnWL3UBEcpd3WnHu0k1vA4%2FMekhsOpwl%2B6FsPLH7KbwdD3UvbDcc8h8uDJfLopjFCV15WpDQb6HJamHcbDJB34De0OWbYJ6kwmVHeSUOlymLdsb78GM%2FyR9oU%2FLiHmBPfDo2VoFMb7deu3t7mvNy7AYdNAFyNSJCGVK1TDKgLHgH%2BrmMQu7MMbcXfX2wFH2urbkCjuVm7%2FAdjgmOHfQlgsy3xmnDzR3F88fqYfpZO5AuF%2FsReGHkASV43wSHYr56hCzntebKMtEOA%2Bj%2FsMGjFN4lyeFabko8FBWeO0IHi%2F0GxagjRXVOYjGPUB1fB54j8spBKVBv8x%2B5oDTVfYIAAm%2FiVlYkVDazHpTfDACRYwYmhCFajbY90sFcJ2oXETHdaVq13ipRa8H48TErTGWQHGHbkFh%2F5AKVCflAq043H942mXmuvNBIrbjmpM9SkSRE%2B8WgHhPX5v%2FG%2Bb4Gi6VOqgO3Y8%2FF0rPnTML3vy8kGOqUB9IDnVl9%2FK4y3glO5zwEiLmBDJjKvIZQR%2FWm0ap3fFNYT02B5Pya9NJabkk9GbSjW5rmrr2NCIsvwamdHviSsKOCdZB6vIv%2BnYmhHNc09QRUSuviSxMRwDQuE0ZizNkc3bOkN6i7wWdpaD%2BGY%2Fqnnval5YGRWIo0Jr7O48yoWJHHZ5ucPO3FCRZ%2Bug%2F66nxprFL2EBD8BLOYLXgH9E%2F7qm7ykYOg5&X-Amz-Signature=76005f3e99d8fbc2cccb5df3de2491ca2fa29fbf6f1c7d2b506da19bf60a967a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

