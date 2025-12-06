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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2N7PBG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUfOzC7p5Ojmh%2ByIN6SlDN%2Fzct2uMjaf7rfZzrvjqUOwIgGQOofUpbYm2w5KIfupcg20HNf7W4%2Bg4FBijDZ4lxvKIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDO93jXIx1BFoKma07SrcA0%2FLA3%2FvUMRHqunHm03004P7mw0oD3OAANj1V8Z7Qrr87pOMF8PGXhdopBpMCkFbkn9%2BJhW7%2B0k%2B4fy0%2BG96yotozZr75fzCL%2BeRo%2Fi5iosNAYrnkLB8s%2FiYSSWNbZE1sm887N9RUDnaVWobD5ZicTvz7v2Lr4VJi81CYION4Esah2fz1zqJRgTy1v%2F13fJhAX%2FZGCg0%2B0AxO%2B830MvlXSxSxMNSquvc%2Fz%2F5EVgZ4Ucml2whqYCUuNn52lZqQbJUscPFc14cO%2B5z2nohHWShjFxxOkcod%2Bx%2BLjRHMatn%2FkzhRX2UiqlTuguBC%2FvTNpJQRgDB576gKYk5Zp4WDOtqfmeeFkdWPvds5aP7C56KjNnvVDt%2FazI6KzimoFeZeHw6RJ489TpU0tqfgOcD3hqdbbCw18uDkrFb1KiMfycwY0Rm5EsTywhNUnNRlSq2nAaOzbLzw4vMSKVq%2FexJPxFp6kSppu1vhF23HMXa4W%2B9mW01l9oDITN%2BlAWDBcK95EiPRTs7fHkI%2FSkD6reGIVux6fAQf23WVQ%2Bhjkk1%2FhPYnDvQK6xh%2F4eTJ89qxoMZeUdf%2B2esuRDtIGB6%2B0ACJiu8rao6%2FMbqvLl03O5BWXTk4WACNr3Ok9Pt%2BFOS391OML3DzskGOqUBoBjrew8fo9r2DgruoWJTgOdyu%2Bv%2Fh9rnrifmmONiS0CARx7c7SW8UEUv019vZTI8azm08dljhKEr%2BiiUqXU3z1w%2F0sAd6Dg%2FcKp4HDz4rdy160pC643Kxp9YJ5qMa07H4lI8WZz4XeBHYPQKRtqm6ADFP7iirg0aa8RhPq311L7tdFTboc4fP2pZ4GHsljF93bYJ2ngZtdz0yiTAcC2nJ6Z%2BdyCm&X-Amz-Signature=2bc2d8ec02885e453857d4e3422c1ba524e2d1a5bed452f12e889a4347143e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

