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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDA3IO3J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2FsYAJj%2B%2FbbYZ7aYrAo%2FGoJQ6V7Sa0VeNHT8MRpj63sAIgb6eEg3uKIlwUEF2m0wiH%2BWtsQqYRmr01SIv5y%2FMxX8kq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN0IgFeUIFxKnr4lrircA0kvmX5Cshr5v8TOQ%2BBi7qlSueFPQl414aQz5bGUBIL9VoT5iJI9hkhhBi800s%2FUyckCyzAhuD6IBr0WfhYxmmKNDcKQ1bYak4dUaXM%2FIwpvY2pjpluUg7pfD3jzxkhsO7bQfVC%2BEN8GlF94r%2FpwEh6lxxfsgt1S9pGV9dwqq%2FkigWZOsxB7p0XMPZoQO8UHZhYrrloCHZsKDnus%2B4Fr%2BNhz%2BBAg77JOTJZRgVDtP3NyHuaIXWVLaFxt2dHq3AXbc%2FEod7bYeRIgxhv71tR8VSOacfv6y%2BpOQVpY8ckfcCi0yIzntBPVhNFKsqZWfK9JAP5Isv%2BEeT69bzxpJ9DAoOTWvZrsfE2NFyiEKgHRVZiM6IG%2BcVpV%2FFF6VPIdeW6QcQsaViJgv9fC805I%2BKPL9GQpv5GyVPMZB0XmXWHZTFfc6jTBjawTJHFR4V3Wvk9kpzKLBH85f5HZ33DWScw3XHVSV%2BG5pXAWa48xRrgFol5AkBCa0QvYNl%2B6NjNZK%2FcjxGCa9jxOIUSeOYSC3jwvcsyAardawuxyBu1wXHAUs2QoN2ILL5REfMT30Phnx37o5xwqhA%2BPSFFNYk6u7G%2Bsx7Y%2ByqZxg6SlwQXfmQkkdCKMF0YEQmDCVnP0DRJpMLGVw8kGOqUB4gGQNsvQ4e4g7TbWuKgrMTRz%2FcoEBeegz2%2F9lGmSAp5a%2Besy4oW5VYCHDYmOKYHh49rQSrfaVApEgMXioilZGxrda12ZZUCGIviQz6OV%2FwMjGDf2Lc%2FP3H0VgX1tAWBr26FXAwVmcew%2Bw%2FvfYE3hNSC7qAlg6wXnnYnSe7a7GzzPgLchcpSQeXMZxS177bpgmYvVUdUt5xBQ4%2Fy5hDt%2FM%2BA6CWpx&X-Amz-Signature=bfee35bc4d235eb1f5514d4000e71b79e0cf42ddb20ddf5a05991c91b5810a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

