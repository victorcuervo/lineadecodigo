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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DIKB6O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUOq8PyIH%2BZ01iFdyfIZR43KcNukF1b5AvmxEx4jivgIgSAPp22S7KD6Zi4VdsS99QusMXhKLzXTfIycKqmGQM6Eq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHdBKlk8KUL%2B3rYqWCrcA8YAaXR2KZLenlFU1JHxAZpozRhnzquvBcunQj6boeJYvTJRNThpW0etM6BAcAUU6y5TP6YkEa44Zq%2BNu1YF%2B%2BGIiWqX9yeMfW8Dt0lsJYwGzV8ZBhkXbwE%2FV1tXRYlBsgPXDjFh3w0V43bgojA198QArGSBxtqmF%2Fros3zHo5zD64LX2fL4WTY9GH59HBljLu8DFLu%2FcB9llefgVAB1UbFKtAHi4dH6SloPEa%2FvsTy9NDDFdBqUHDSEOBJaKUO%2F1KwpJzwR4sOvsouhzao5oFvGy7zchBCCi4qvBkhdA5r6uY3fK3Tg5qk7j%2FpHr0lL%2BtWF6WxX%2BLDVlD3JCS2pMbmK4ltLeDBTUnzLil8wAt40i3ftJDgYdWZP%2Bd3Vr4Jke4AKci7zJQVPTy9P%2BG91AMWw8Qd9Z2D5DI4qT4v9FZnvlPIal1ImfcjB6gVLdQfP1UlWRb5J6hHV%2FD36vSvuNOlHw7y1W2kS%2Ft9MPxIYTyjTENMaxytcjue7SMN5HksEG50a7QManc3hwJy7jCEqKp12pxs2zq9eKfv7k435QlahEbTkya4a03z91X3AWtd%2FpT9WK8bj6I8lWuM0c7uFjUENkYCXhyfNY8E%2BK7dIbT1NLmrwKKuqaVtx4HRlMNLbxskGOqUBwMZXNg6ErrIv2QpKBs4ifYp0jjLY6Z5rxOfJvwKAw0zVfrAXC%2FLLQHtP2Mv%2Fi1NoRB8YM%2BF8l6veuYMoY5S3HgBBOyypW9az%2F7v%2F1pCtXl97jWJeqXi1R8FZ53WQ%2Bt2lkw1kOf%2BoZU92i49RlEVnCNenfpNvnYdb3OJ0bh8bk9%2BAXGoZW1cHPYlZQ%2FbUZA1Whr5k0wv5JU1mScezChnMhPF0LZ9m&X-Amz-Signature=7ad8f6ce5719fc79c2ebf58bc9a256cfc5093c5a10ea5c7b2082004645003764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

