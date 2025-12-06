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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HOXW3W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BdNSSQhpT2YnrXNNnVO2x37g4I8zBPjz%2FcFIzEa4NhAiAQgHj%2Fl62KCvsBgH0HfpRtrbVfcgrsrQBye93aWzx4pir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMlCoTeY%2FOnDUP3dKkKtwDWSUf9hmCehAehdrNq%2BNYmpZ%2FtUrBE1X2SSjDB%2BnQ%2FHh9g%2FMS498ut5QJIPHH14akY4FSBfbN3l3Zq6K93AS9cvTmpuYZl4Nh%2FEudRnqf7IZ%2FNkp%2BabIpj4FUJrnyWVT%2BPMkkJ0HiYYKB2Sp6yHSDhc7sI6y7uL0TKjVzDZ3xebNUzZwbXwQue02tt%2BrZo3IC7obK%2BLv52HyEvy1ffj839r%2FEZKG4fEL94YD0lRVKS1Km3q0cxzF3NfmqQdeupPciI3zN%2B4nnisNv71eYFwTRtb5iq0yMno5%2BVcGxiUVxwDd5TPJ7HA3%2FQ1ksyOt7gtFvmV4Eo3V2FcMwYLRrjqrCwQvB9IMg6mWayrPX6EZEhrOL7aUsnqK%2FBLYtmfl8y2UIYKXU4Rd4%2F4RfhaHIN2q8PnslGWrxk%2FK6k1bwTNVrhoV%2B0GB%2BZqO6CeUJreGv8lzpnEG9mOyYJ%2BjAVbyQKR0o9X8pSvYRHodVbvD3%2FHdRbyz7RkOGDC2dxJH5HsXL68ekI8PfS5dqD5D%2FpiM1zQ0qSiODgwxmUtUpfRB5toD2lok6SdzdyhbdCEeddzxN3N%2FVZCNT6Vdl2ku2ZVFWFQflss9bVG4G33QWfnO1vTJJ0uBlk3T6076bziofMyswvsPOyQY6pgFdzP3lj%2Bh%2BFqDLuhNd98AHQ7CpQG6LaBZB0jSgrsWjIBsrTT%2Fja5DkLIBThiX8ohe9PB7JW8ILBRo1u%2BruJIGGoYtdRcZNnxCfxnUgSd9Nh3IZtR8%2BWfTLIQrgFrayXhwxtZ4GCjN4YewLy8fNL88WmxvfZB8mjaXkR%2F7FAa2zq7nsmj39CjILAkB3SvRojL8XVW6jVtFffro2X9dUvBoISAtrig82&X-Amz-Signature=c1d66dffa65aae37dbb39a849f6b354d886317dc23cc22bed252fbfc10f34446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

