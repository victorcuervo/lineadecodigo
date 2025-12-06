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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLAUQR7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpo5yTFMF%2F9%2FLwg6zVHrClcwxz84PVuWxprF%2FG%2BwCU9AiAXWGKGZw4vlTRP8PgUdQP3k71YK8nc1A%2B3%2FnmVhB07cir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM27UPLT9BacCJUSywKtwDHp%2Fd1a%2F0xSSP45fiSS8kw5gm2lTsA4WQaLTrWVBdS1rJivw05PdwrR3FAbXj6tSssVAZtnUP515yF2EcMCDCbOkVbxxA%2BuKRTjCp2kTVjn9blkm1V70j%2BNIBL%2B7R2w2Ib54rU66KyG920tpkbIMqFzlFlVmAG9uBAvvbj%2FdoUmdEgd1DI9g8tdfrEaWn8TczFWtqJGN4qCItlNnOvda1JVhf3k2bhnUN%2B0h%2BROlwmHroT0raDjCzt9uxmS5jylWvhcgCFTn5NJUjCW%2BLN4xzWVQoWwvloGcp3esCrIHyNW9bc32iQyFM51%2Fw82vlt2tWUTY%2FHRhb6SvhDz6TZwng2lKiESER4fhGQfLbl1zPmLj740sxScGwHj7QHzrnnoFX49HJVJK49Gj24ghcSiI%2BXzRcFqRU4pE2Eu7Bwh0zap5XcSbCucDKBKqQ%2FNKxo8kJP7gGsvugdyDCmfj68gxZO54AasexZcWNITBRjCZ2zCG%2F9MiVo%2Fu8q9XNTJONtIKH1XOyekjbuwUxhgTOI%2F9o%2B6%2B%2FAtE3lJc5S536oKgRjXV2qqTmQfvP2s%2FL4M1fHLjc8eZDKI%2FIWSDCSQl%2BT%2FiYLT5rmRD1Pk%2FRJQPJn7Fe1HS5FEVuM0WnMTC1aqMwqv3OyQY6pgHe3%2FZf7Lj84Om7vVihPY4L11Vpo6yrMXtBmX%2FfxKznvqmOXrV7dZu45ouQwc2dAA3vXSEgw67k05MH%2Bv5o%2BE8qQvX747%2B9typJuLq4ryO3nBGAkQ%2B4rrmanRKZcEbnp3PjPSjSKkj9dV9o6%2FK2DBJhNOaOysghoR2CaLJpgdnicDKAr8QSAhqopp1bpPGYmPaRz8Blhn3lhe9sc2lGqE9JJzeOMKdX&X-Amz-Signature=a12adf9f0362438faf153ea296c19e13fa8d372237c887a14f0caa05e56a34e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

