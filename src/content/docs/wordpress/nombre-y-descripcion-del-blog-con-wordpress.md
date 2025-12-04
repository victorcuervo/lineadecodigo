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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPBLIXC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAxWm5dwF5y4HP%2FjwgzFnBxTx79Xb%2F8LwTjSMbCYn9jwAiAWzQVpTDyv5gtjxbS6ovNfFoKao8wToNLSThsuCYXqZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMaHBDVID%2BQI4mt%2BJnKtwD1k%2Fq3hZJa8i5cxAI0nDzJuDg4ZUEid5fvW3DQrOX0p%2F5j%2FlXYCugLZNaj%2BSR4fQX%2BtJtsEW2J6pcBl4p2ZpuNSRZA93aqHl3S24c4K%2BdrbraSwtp527lTuCQ3c4SCRy%2BqaL%2FTigSRaEUIoJFMGcLEhA6RXr%2FB%2FCY5WtsPJd4YdhbbeZlAcc6cCNelrdGY2jZ9u9cYpAovS4Nh6EBQ04GIBLXTZRvwwqwgICb0x%2B2Dcg9vzP6g0VZEXRk7nBnaAJhPiuVP%2FQadoivyeqH9VueXFBGRGDC38baXXY4l0Xx6iukj6GZg2CJ1p%2FjKh7lj1T3sy6QO%2BazLZyNeMkchLWf2Ekc3G4TfUQ%2BYhTrM9HdVPU3Dl65K9gUOuA9AguYGHruwKYjKYvBiUYv1IlRwqfk0zXlPzh1TtWFoeS82dec2aJjHkpn1FgW2GkfAYcuCXLzT9guw7gWpbxrE%2FT1s%2BWPpGsm8UlWcYILje13CGVqgwlkKVzmF8CAaiVybrSX1uUJIhk67cnQntbUe%2BTaW0cBKXlvyB7RJseLzMfAp4NmAJQ%2BVSdEf6YgBnUwHa0pUl%2BfNt1bjm%2FEv7REKhzOuJFq4sS%2Fb7Kr3iu5Ct9LpicKN9f%2FkmI9aaKVD6TTb3YwxbDEyQY6pgHCNvqo7aRVHYtP6aLBW6Wupksb7iVbUR72BrUl9%2BjQUwRt464g0XibkSxqB3YIKPrN2QebQcv%2BYAvTrrB4ZCHPF0NwsfZQUYt8blyShVsWCVbtZhvyITLI0MAPv1qLDby%2BQNqj36HuOL2ASmC4mWrChYf85KylwvIO08X7eWlBrb8Boz9Bl%2BNs5rUet0gx3RiXvvzC3%2BxYdhrAz9EIrZT4ZVVA0nDj&X-Amz-Signature=f75c33bf1d183f6f6321b6480c725f360b4175d2346f8d9fe3ece5d8707b0d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

