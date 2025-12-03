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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5QVEVR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCgBji4T%2BeFHNAfe2WVzHXgyMvSYxdnZS8LvbwCNrbWxwIgPD7fDKWArM9qT0khl5SFhl5%2FooBsaGxQ%2B%2BuIwmEF9mQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFWWYtn3MRx7myWgBircA8b1E4lEcsT885ixJZghnYV0YV2IuX5mTmBO%2FgDOfnGW4hoQZncuydlXaxaSddKUP8CxoJ58VW%2B8jlPosy60RASPfZKWuU7T4hKeaOje1zLLtg6yfHa8bDcNzstXoSxhyl9ceGe9rINKKdlN7Esf6o3zBwp5eWGQ7sFexAeClrrXxLWGT6MvXu8fHFkj3yysmR9Rir8DU2GdZ2%2BjOmhfswXH019SiQo0XT4bp%2Btcv3wZxDXQ4TwIxflYPHjypNQuGz2ta9sG63mjEMpVhJLS9hAcqoXpqzE%2BXVJoljky1BdYwaEt%2BfQmdCWU4uTkgrrzJ4bHzdYSNLT0tORx%2FPXyeqCVv1m6muq6K9UxTsyxJqNID17ohngqOo38EHMt430GzdlGrAsn9ut5cEbAYbk8IR1TVaNP5rflxl%2FSTG6vvrSesWKJ1mpwo9h0%2BjYm%2BiaYRUsVoFN5HHf2%2Ft7zsy%2Bfb1CWS7g%2B7349i1kEZ02JwvC%2FT52U%2BATmF84LzLAe%2FzLXKoVPPAaWqtB67Yceoq%2F4NvlsTbXjLNaXi%2BHYfiZgEIkcSs9IAtl9nnChH74sDlQOJ1V4RP8MIvmwubzxLFVnnAyKu9grti32M4D42aodeqx1hqkLT9wt2RAk4cFQMNz3wskGOqUBci7DZSTDPiLVXcBCSbIgUHAgLZocwJBxIIyJSHWjjgpY%2FBQhzFoBgOj633wm2J5jshG%2BNWTTOxfpFm7p6TdKQxYSJylJhwZHyr9oy3GDZ8TW6cMu81pCcsOtEBiwB9mJOV6xl3Z0tFXXEzj8t14PqOh0r9rVNIHB%2BUIc%2FcrFD%2FXzp8YvZAxraRfPFZGBp6RHvn9a08AdMQTnHM1Mqta4lV6DV6kY&X-Amz-Signature=f7d2cb0baf954195f72c1d82fe69158b3da0c6533041c245f87758ca335f05d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

