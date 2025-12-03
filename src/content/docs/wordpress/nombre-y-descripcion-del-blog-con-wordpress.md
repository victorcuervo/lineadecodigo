---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXY6M45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDSzBkkxvaVlgw5CkoryiN%2FzpM9eA%2BFag85hyCTx6JkeQIhAI6TP7zTHB7NkyyjaLPfoneuFMwzsEgtzgta7WFnhagGKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDT1947snX5OHwGjAq3ANcXIOU7HbCpsOW3GnyUHHv0TKC%2BiYY%2BX1shmngjNwbtrkGtU5Z7rUxVqSEU7GX0trlPpWDkW1ydGivwbYw2nzxfqRZ6pnYUvCZUaAao%2FgyJBgFnmC07avBzO6qVcTZ5z715gw5lm3dWetLQ3acBr%2BWZt5ao7OOsgCg4wKA5lZHSgsf5fpbXpzUSZFSvbo9szVpxxPqdZcrglgvQasreR%2FWfm9ml88rmkLqVlsBHSanMqSFci42b26M9%2FcuS0XoZTL0L6zxeL%2BS8IMtm8bZmEN4TaKb6x1dwvagVu3Oy0v9VaAZWuONtoTPeWW%2Fav0rfzGB6sW%2BZWOqY7PH0Gex2xL86Q6WZTLnO9L0Oi1fKh7f4FwwzIE%2BKn3Ydtdt1aPTT4YO7yOBTZ0cuwjSM5U7oaAjtiN3AEMRw9%2FdpNXAAZ0hQT4fYLknSqhpSTBH2Q6%2B2rDcnPzVOL5kZpa%2FL%2BXMSY3voXiUfIAa33l9Y8DAZLrJtV4Mk%2FxUHQires%2F2%2FtLWw6Wu75kUwkqpBN2wUpT5nlhnQvD%2BXm67hQdp6iKQfQwZwr%2FsiJ915exJvmfYoTj1VgpZuZGfl%2FqWCpwI%2Fhu4%2Bg2kI4DwsSgQjcr7%2FqM5dP3qs1ZRJjSXpXe6dNvL%2FTCxvcLJBjqkAW6jHv5yQkVsc1%2BhjSixfpFfaesSKlIiVQLXzONP5nGYBJ3%2FiIFklMDh4EIsoHF7pauestTKz53tT97%2B3em%2Fl2OJOm%2BZqvq4T97oEZ7vCr03E%2FmiUm%2BvlU1P43wu5HYKiuiLeNsEF%2FVZfZ6uF1LQEE7aHn7v5V4BTa86iZu%2Fe4%2FiT4oI0GyVeUZkvVMRTsgB8%2Fl8bV2OmvM5NtPNHAZW0aA%2FIlaY&X-Amz-Signature=fbf3b464df43dee694975a90b918ff3adb4c1adad8c47d6a6f1e03d94c72793c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

