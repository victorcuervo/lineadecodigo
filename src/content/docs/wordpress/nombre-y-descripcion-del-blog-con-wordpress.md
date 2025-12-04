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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6YJ64C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCNJcV6vYED%2BNDHGSDbLc1xnyfmFfpzptJ2aSf8FCH1wAIhANUPfwFQ3Oxa1vQxFTXuOh6b%2FB5wUcVRKvMO3GP3FGhtKv8DCDoQABoMNjM3NDIzMTgzODA1Igz6GNCOOiGUZAdzuj8q3AOd%2FiU4Dpzb%2FnKPZokX1pa57Jlack1ay4uxF6kUZF%2Bj4G6s7ezadiutL%2B2wwvtjkfpUoCaxZfEGq2O%2BwSYven3DFUKkWdSBDW6vqvmQfmASzlhYibgp9wku9co7vJ8LYQzpA0gAnsSMFzvGZqifZiWU24uyoyDWK4fVDEkOXJNrZNJqOeqWJC9jX8zbLBgqXCq0nXxQNV4cHNAm%2FjLazpJsQqr0Pit5xWYuq%2Ba8kIvLVCCT109H97FTl3stFmOLc08%2BQ%2FNYXpAC7L2m5Bo8Ap81430H9xwu5%2F40DXUEnH38HwI7LhGlO2qEip1t8nExsXCGM1%2BPXAKoawPZQiCtgZglD8VZm%2FjCyfYEkOTJPPIe0mW0YvAm%2BA5WSWA7cSg72cXDbZ8es2CtMpoLBdDYzXLmnrzqRe5hKdXYmLTCZ0zzEkhW1aPhjMTaa2%2FMyb8ji2%2B6i36gwPwtrqypnWlaxoK5mYK5hNzh5iHHYx1ybRyClGWzNcTySxmAUU572qoQCxvOXE9pux5WOgwezLpPPTXEgNl1w1P7GXZ%2Fq2CfJ7BwTD0%2FAJ1X9gJmso2sxgQlwjqRLAtDwoHs4yMvzItsDN2QlLvukUGaFoKHn9ys2OvnTpj0k97NoAC7gmgYKDCvtcPJBjqkARpq6I2uPPPrv3tR7M4n06KOVJ2N54Qc%2F%2BtDnIQzNaYzaRQ%2B7ePTVpbNRJxv2lAqj1S2xp%2FjJ6S%2BQ1v%2BQMwNRRfeBzBkfNAsKrsuzWclWeBwaDabso4xYgQlp93ac044R4BWItubNVEeYgUB3Nt6SkpFNHoJ%2BNl6kCkEwhQgGfIGztvgfbzZlv1o2me3jnJR581OTc8FnlWD6d%2BAyu2ZElS9KZ8c&X-Amz-Signature=54fc3977e2f818e8f13e1c19f27912c6137e9a4b8f5dc0be77a2a780defdcae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

