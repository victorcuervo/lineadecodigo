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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PQAGF3P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICKihlgSuGCmiyb3TIJSA6s54Cf%2FZmZFOcHltt9z7RKWAiB7ngTPp%2FU6uJuEahyw8I46owD3SY8rnXlmR0eqEFIiRyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMLr6261oIb5o8YLQIKtwDnOl8sHNJz4rEjY2EwF9QqA0uX%2F02UIgooE2%2FVXbeo7RKuaOCWXR5uIwjcb3fVfQq9Lh98P9vl6dAPV%2Fz09s3Mic%2BFrXgM4XRWiyM4yQzvO2zDhz4tVp6Jd3peKrtgOJj%2F9qkfyQZ85ZKGID%2FZq5Mpemv6t0yyVKkmv%2F1Cro4ewGmJQwzTxqnqbmptI3b2jnb%2FRktV4kOLJ4o9Lnigvop0NwQXWM0WXdnwUePQwPe0RRI51DVcDx%2FL6QqoBhrV8FqObGvlhwJUe%2BFyk%2FBWtrzObKZzSxf%2FUlOg9MeCJA6LcyrX6c69C3S1aRsvkXdNnqS8RZnZCdYu%2F4EbHQ5HxEw9Jv4KLZ3CkODYG0TO4aKs1UcK3o3Ry4%2Fpp0eu%2F0os%2BeC9U%2BCHyHA%2Bzk9xifHJFugSstRuZqL7JH6DcPih07Geth9Qdf7uBpG8xeG2hFUznyZLt%2BlfRpE%2Bt2TF%2BpcFq%2B5Ky3IQaMmaYVsNJp0j2%2F21D5JoyOwoVSiN1RB6b2BKWJ0y3gkpXXw3cWRfUWRVX6I6fuXmB9xqJxGVHDtI9%2B%2FzfgfunzJnLqUA10NNc85CbZFn%2FrSHCOag9QcCvwVJseEHrYnDvJqviWNZz%2FXj%2BBZGFjp%2BlkfmBLTmb69O0oww7XDyQY6pgFvZETjNjiiQhIG74fw%2FqJWhvXUB6oDixH8jiO448Z0AldE%2FCoa2mLy4OLFP85zVSnz4rrLN7JL256%2Fjvl6CrIvz9WwSw%2BQWjElXoykLAVjiiPsjwNg5d7VtWzAWBrWLc5FdBIpKScq%2BI21fOMsqesKBFLOYNXyBW%2FtaQiDYfU8BmgSewfIRGRgBhE3LJvP4rPLSi%2BjUQ02ZvD%2F3Xd6FfaWGrVYkJ26&X-Amz-Signature=580be3300e18accbb8d9e2a1f4115774d65d2532387dd4107084c9a483ea3dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

