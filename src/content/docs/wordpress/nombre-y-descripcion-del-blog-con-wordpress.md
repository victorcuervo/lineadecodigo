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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTW4ISG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDA%2Bu69bHNTFQNNDEYylehduWYPSNBWU%2BAw%2BY1lYr6PcwIhAIZxhjMyrato%2B7KBSEvwYUXjQYdMwuSf7QdG2ake%2Fb%2BEKv8DCEgQABoMNjM3NDIzMTgzODA1IgyDdby%2FULr25KkchDUq3ANaRDS9SO%2BeZtgtiGlJQTqfEAdMJA%2FviR6i9JEIlUbGKHOYh141N243OCIlxLD9CYjc4tbA%2FJK%2BSI4R45PNy6IQixs%2BJ0YKXzAqKxfRjgXhmJQEHSaCqjEZMjB9BwMVrtys4lGIqAzRMCwXm%2FJECBV0Ny190lOyy0htCj1fq%2BP%2BSjgRFwmysFTHkUu7RLo4e2wa%2FehRZUnHYyXQa%2BnZpd2GaQlyrfpTKeB7y4hbg0J8RNaRzgcNDFCl15naeQAiG1%2BWIJOpT%2B2NeBvny0%2FZN4HP%2F49bnyn4xAtFAEeRcCzaYh78%2Bfe1esmzaKU%2FzLyWmfkXTq4jxMlw258pE422Pqua8mR3YRuNLeiV442Tj74g%2F8MS9RHc%2FJIk%2B%2FHakSbUQLuXZ8ljM%2FQLD7a%2FPZfSYOBsAziIXQDgj%2B0H%2FOmDWIS8niMn2SGiQZIMI8wXeF%2BoTHUcF4BuXA%2FtnHZtIyz%2BAWvKg%2Fv9XBOLfHqqZ%2F2j3WaQFBmZEGQWXrxmew5orDlp1T2vmWpWDPvk1%2FZ2wKoERD2Mxu53a7c0LFrqfRYf1Z8%2BXU03g51BxSq78AaH5X5yDMe%2B%2BkgctMyiI4fQXx%2FWSHw2c%2B6R6XX6zFwfZL2%2BXIfc7rnLtSl9pWGtVFck6TDLvsbJBjqkASS1w7IeZ728kNxdWaiI5vg5HsswyVfEE6ozIiAu%2BaX4XwH2cKHzZP3QoDVNKm2vs9PgEofYmnEG5epbMLHb09AC0mDTqKN87jCYPgsIKFSR70txd7G4BLlvWNdwSqqE0tlKmUzkAR33xL4oQEPRlxqfFkzVSuLbNbXKeAuQlbr2Z6xkBtuyWeaM%2BSyZmKM3yUop76AS1TWfXWwBE5L0uBuA7hRo&X-Amz-Signature=d54ef53ecb115288ce84008654717af0a513a1f4948e1e102cb5bc5d1fe522e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

