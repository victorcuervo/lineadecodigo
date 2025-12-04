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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYQSGMV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDogBW2ZzKn3FYschvoHNDUc%2B13KITjJ5ry%2FJbFSnHm5AIgTV5HlhN0V3bl%2BmwDybUsnK1Xo5FCK9PrrFTZGJhkBqUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHvqjEOjtFl5gCZYDircA2xw9cgq79E2JKyfunLduEobWfqIVtSUIg%2FlDAxC%2BqCZbdrF56pK8ddrzzNj8g6Cv3M6Xz0eRSS5jZqDAc4cf%2F4fRsV5i0fYPqaH2XrtSufXSa%2BEuOd4FGN6hh%2BhRYTLi8mDxwwtbN2p2lnrV7UeIfrbp%2BdCdssdLEva9K%2BSDX7XQIthkpifWz3go%2B2AC%2FoXuogHzf5dBcgG%2BHmhHbZwPwXFZVHjaqKigptJ3MCIz5n5iiCvXMFdcjWxdq5c8KHEdjxVGn13s3ELceihlsbIQFvF0Q4aufqmXd6iWyH9wzY9G%2FYhj1Sx5sSOD0%2Be15899Bi52T95n6Teu4E0JY4SMpZTBkF8oLLtijspKirXfSNOGJju5FxKz1wYKWuC0Q3f9450gjPGXESdBY%2BrtqxA2%2FlMM1sWi9YiCLSJoVQPlb1e01pVj1K6S0U9MBugQdVEzD1osR8yjTVoPVN6uVm%2B5k1CxheGw6YKn5xL%2FIghp6QNnLWXfc8m01K85%2BdS09ZpyCxMGt%2BvF3jx57ySh9kpfVJa5C22l2lH%2FWyIizlpZz3zqKtNu00ID7LP16LToyWemfI8A4S0T5SJ4Ec0f%2B%2FNVng96WJ9kAqY45eOt2EnHbb%2FYs8ET44Qaa4ey0f2MKK1w8kGOqUB%2BsjLTgZGGQKWKMkG%2BCvfSKR0XstVWnPVJJds%2FIX0OSFxhgjL6dbKA2%2BUB4cbOTpardWIYJTTQ6cOwPQDwbsU2%2FJTC%2F1cNTpJ3gdkW1wrX2nf%2FryiMKk0ggLhYOm58KQ3EYiJ2wv7vii1gpJaD%2FmWFAydRCug4jyXiqXaHrFwNTwAovYbvGiwtDxqhPypcwGGmZNdoydh8V%2FAf%2BBdEkUf48%2BJSgg7&X-Amz-Signature=0ef5f6cf137cf17e7c4d8420253027d0bf819d212e998d48ed209c86ac76be1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

