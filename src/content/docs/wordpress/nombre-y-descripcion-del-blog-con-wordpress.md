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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL22JSVG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCRbMW8P7dQ0EwjAoOLydDENw0QQMTssSR0F7CgSode8wIgHe15yCi9Iw3fstWCrv2Ia0eDKFT0UodHKgbMxfZbSYAq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDD22Up92fwekyuJPgircA0bUmWfdlUwjWuB1lR39BY3Lq34zcunuhxe48JkSXGRCDuUg4oCjOwwYy4dNWm8Trnul9wPSM5T5h5pBbxjZk%2FIzDnnGCxLOhVf0jeMgDfBNT2UDiSgcHPR0oKEv68HR0DwFcqx9PMkxcqTcPwGjGXBDhmMVsvNHyvECFI2Y26tnjUEfuyPTClZ50nUoNTxwGhDD4%2FbWE3TzU%2BWv0NxaeZ4MtEW4XggqwzSYAG2Z3m4xCa9TuSuU0HtaEsyPvQlvJq5Khn0aUGB0S2H4JSkNRLyyZ6u0iL2w%2B%2B60H8Wk5CdwVLPedSUN0VbZgVenFdMuk5NIcIZdBT1FMk1UmF%2BxKJNwMRm9NmGGO8pQxtJwFWbdsr2eIkCurn8hFG8uXdiiehiVPUUMQls4aKClPrmzt%2BvvT3zSpke2pvoUO%2BHJBlhyI3uJVSjuCdRh4zNXXTaxKYTgy4qFBo63mrvoiTdt%2BhJ2CUFpX0KuaHw8%2Fn6V%2BjSEKG8BeqnnS0E5O9ueir4z%2BslB4hXLCInJKu890ybDaqGUWlQTmAZANou%2FShrMwPqEh1dDVecqf%2BgTK82xH74PcpEs9ElmY17ob0QsDvtstGd45IFZyNo%2Fw05HpNOa5m2fEzyhg9Zv%2Fqnxe3DGMOP3wskGOqUBD0COdlJCtLsYCd%2B1DhA1ICflsa04oDzHM%2B2jPBvRTCRc3Icc93b1Mpd0QULNvFNsGFFsjjMnFvrPLxnBSVQ3H4e8upxi5ZPLVgNzPdEqym2TmC4yBebgHEya%2F3LWF6EXAHaNib7%2FQZfPaBZ43xP0HCkbLqdWMZFozP1RIqmOCckzENw5vVqIKRKwauPhWI9xK5lJc6KR8gU4sGsotKDxxxtCnwaz&X-Amz-Signature=285c9b032959976157dfc9ca8071292a3b7c91b9780b5b778360ad64d50bc1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

