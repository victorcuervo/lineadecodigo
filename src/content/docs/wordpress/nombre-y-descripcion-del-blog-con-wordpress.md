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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSSPC2G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCbR2FwXjOJSEkpstLflAcOu92Xp3HNdbeS4IvLtAQkAiBgj4EdpL6tSv7%2BiCq0l5DYbW9%2BvciRNMmgfaxm9eVCNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM2Flau4CrAjsbmgoSKtwDHfDFdWDnfest%2BwQe%2BRDRLsXDEPSrMSnpLzXpuSWAuQuoNqI5T3KbR5jzzePDikM1x3QHqMByggFiUw%2B0EfzNb6WY%2FdNoQpQghqgdXj6MmopZN8VgZ8Fo8HS1WEo7PkmgpaCgOyNcqB3MkjQwa3hH3sc5AG5pjstFfO8tNjhIrRb73I%2BkqKOj%2B7yMWLFvVOpQ338V9YnMXhJxiEG6X%2B6ffoxRTTkYhUnmLZPQOw7IpeFkMJI%2BLN5w1oCT1eM40onUVMCS4RJPuS67NMMw5fkQgzijFptH%2B79SwCLg%2B1wxW5aYqPV4T8qIwaPcqKpT7S7EYD911vbNoNlewa%2FADrx%2B%2BlnbKqqUDobpv1DIokYinA39qj%2FbBS0F2j3APZxploqI06XcnuyYIjczFo5MnmoICK9QT1I8DaGX8l3s2ws2gL0QuCncJVTOQNv1cfEULeliuAJWi5VXSdIO4nFqDDl%2FQ1cp2KcLH8XNgOm4mr1HTJpDKE%2F0huDWjuOGhcEI9%2FezdmKIrLrX5o350Qt4p2zOtVDR8djpAdEyD%2BIYOiOD1PXnADh%2B6W3B7gvAr84H2Hc6%2BxlsSmH%2F4IKEVeWBYEHpJLEj4yVECgH5DCCcMjATSj2Zol87l%2B9y%2FNba3MkwvKvJyQY6pgEc%2FXAD%2F8wVp828dVArTv%2BGoJ0HUP1J2I9Kq9t1hLZjqrpLtOekFmGw5NqTpCWZeMh5PWudh1ZY%2FJ4dUuZjZBnjTRwjLwBDegixMoCMcSZ2zHEgCsE3Xd%2Bj6l7T%2B5ISCG8PC%2Bg5nwoP%2BVYDk%2FyGb5VGSBZJBxgfdLsNtl8s8UC%2BPZoZjBPdM2XvFO%2FPcOnGqDoc4pxz4L70dmoXniYUS2ItiN6cXDd0&X-Amz-Signature=c35bbe9ab7c03843ab3ab2d77290338901c2b8e896d05749cc0eaf1d59e4483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

