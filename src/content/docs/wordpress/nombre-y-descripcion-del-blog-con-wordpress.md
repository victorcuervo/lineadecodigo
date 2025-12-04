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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SKQEGYF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFwYP%2FZ9oDlRajN73YVhKgtFw7w5OZ30SoYs%2BUCKR3uVAiEA3u8CIqYWK712jmnZN08ibIUgOGWEbhN%2BAHHtvs4UJXAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHbghF5%2FIMQEXzPD5ircA%2BOAid%2BaotaEdJj3%2FCPSMjG%2B09Dl8%2Bcjip3iITqTmCVku2M%2BNobvc%2B%2F38jV6Bp8Zao7Zaw2DcZLjeHtWyXsBXRur00YtQ%2Fd7MQJijZKZeAs6byBmu5iemGmeI5aAZ4ajCQG1QVuy8PzUIjruCITK6s2vxrBl8e6TEZpxqZNTMpEABdQDjWWnGNcTlrIMWPQpAr1EHJxNN%2Fk7aSRwlgExRSuMoPYcAbgbmqP9JKYLjzvAv%2F9JRsyosNVCJ4NbNmZo8ISHMrJS%2BylOOrR4uRWsRYQoYia2SiNn6z1TbBIrC3VEXO8SDdzK5gQRv2afGnvRsVjFfDgO39ftvavmt8DHE5rBk9T8ECl2mZa6RZzRAxQa47HtELgQRNAqQSU1gdAssK0j1hh%2FEB2JajiPp%2FQKbKPeCnAKt2DIwob1d9%2Bja88VcPSrNiOkPZAEwUQT%2F%2FS4Z1kMTy5eYgyM%2FPtD6ZtZxX%2B4%2FR4A3EzCESFClD1XVDnhXPQc%2BxWIr7N%2B9cdxowNeVak4%2BsC1w41nIkO16%2B3k4a9AJ8tboy60fdU2fQWg%2BCXtRMeGqglVioDG3iV2OFQFbaKdB%2BaoYRszhgpb4SK823LcIcKfbAf9ipTkxoHwRVqGtOoqpDwS1sIA%2BbzhMPfnxMkGOqUBzbhL3lZluhL5IwuRb7jz1GhxM9IzTPhz4TKm81YMd6vS9l3KjTHAo7%2BtD0w%2FyOGl0AXJ%2BKhZ%2Fdy3ID2IjLpw%2BtrdTdmNf9i6%2FeuEdVhntwCoXMM55EVJgskb5uTdNFGvqcU2LZT1gZu%2BonPnZNIWQZNMVYjydBcyBBsKPcTDw5hjhgzF2NrLsyAwmghvAoDuTjQ5gNa8EmzDFTMK9a4xnPwGT3D1&X-Amz-Signature=53cf845de4e63b83cf0b3dbea096e11ef84697e3974759e25792ffde57ebb6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

