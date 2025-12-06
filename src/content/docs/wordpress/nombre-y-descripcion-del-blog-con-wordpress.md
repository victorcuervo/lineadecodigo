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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRL6D2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsSUN3pWoBMejt8cmE4%2Fp4G%2Bi9IsCLHJJdUxOPZ%2BiPIAiEAqm8%2FYva7QIQecna17CWVw58MYgsguPWTz6vnL%2FmGI70q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCmq68IV89RbGHzSzircA9rX1M75FaJUtfhIosRNycsYZ0U1qr5Eve4e3P1ER%2BcTEFs0EWZ4UxlOFSZTzxnxUOq%2FUFaS5ZVs1Ji%2B1iRKK1ILny4l3K6w7hXGGfOoChxj2oqyvpwbZCkHNowC0UdjY9ObcL2Sv7OFBr8jmOTVuBC6pCrm%2F%2BH1pAUs3%2Fvd0IktPttdnZl4O3VP5ghXjcxLrIDf%2BOvf%2B5e1LqpoRRW%2F%2B5pXmvlA3%2F%2FIafiIyzohlfE0eONp0WuS2t%2FiyBTQh0zcYRI4i9%2BVNfP%2FzrcgGypVhL7y3%2BkSQKJ481Vs%2BYWTbFCBglh73VW%2FAgpvoMX9JO9Wk%2B5yqBpWZ%2FK8vT3yChft0ImijCESM%2Bq0WNoWOg%2FVEY6wBMfdKohg9C2zu%2FqKEjJxQ16FoymWyWgrl%2BbZRWxC7mw3HPvlSZ0UNU0oGoQIKTkIvdU%2Bi512ADLiXr8cNGvjWiqTHAl%2F0fNcmh6w5vc5v0%2FlnHJ%2B3Dz2uQ5eo7SBmVu63N%2B8nSZUyy3zOSjZB2%2Fqul5otJyvoOD7hY8zhjbeEXChsXTM6820lb7KgMyu3ntf8fR09f5al4ioJ3eE8ba2kh5hfn%2BsKkfPhPD6D1HJwSp4pbbXWOq6Cjto%2FTA2%2FmfVWAZ5d6rwWBqDJx4rMOKm0MkGOqUBFtDuZf0A%2FTh8rVBD4dRArkZbb3h5NAJoX45Be4t%2Fe%2BRuFm31gvJGlJKuB9L0%2F8FhU2wP4tApi4ZkPl%2F%2FJ1UkKT3gbHF2HiWryNpw%2FBo50p4DTU%2Bo2SVvI3Y9l2bDllqWpqTfCwLf7Sm0IGeF0%2Bm27GH62mYHdfD9jjDa8GC7BmUvtBWI4g5T66iCSYlh2rpvVxYsITKrRbLcbeBBH%2B2pt9e3yIxe&X-Amz-Signature=9343b3e633a894344f40312f92e69e1f8384a7075bd1d7e546f23e555361f275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

