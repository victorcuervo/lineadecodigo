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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJ664UV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhFPX3C21Jnq46DXy5TZEzpslro9nRVZjw1eTN6S41QIhAMA3fNlkfbNOiNWrQIXf4bP%2Bc49K2He%2FvQKgxuJbsPL2Kv8DCGgQABoMNjM3NDIzMTgzODA1IgzVguKTvxyxRqd1tboq3APAHHrxrx76mg38T6F9S4TPcnIm9jmLr9ugEtWpbOLRH%2FKWuyf9ZQaZ4wd3c1aj%2Ba%2BzaK8KYZrHLYi3SjSLq3JeKFEXunu7JpqbEEK76EVneY%2FGweNV2M1TXA%2BqKDG27JyX61WpK6UciPBQwwLYx3TX9e5dbPLtOyzz1SNqAjklak2i6WyA5jTXzvK1oqI6PvO%2FPk%2Fm2CZyrYh019ci%2B7ajJiZTC3TzuDHI3SDLmP0wMWYYwHKQ6o1%2BnCOxoPXJmu%2FbqF1tQah8l4lJEmk%2FlcG2luiOz%2FzNpBwjpJ4%2FwqQtg8oAcBf%2BDAayTw1aJkz2Ckvp%2FisjLBvmGdCnbFFP%2Bh%2FY%2Fap1CelhWjyT9AT0uTCjjhigECxEqB2Sy1s2FrO7BHMQqqyXn5RWMZW1KNZKu2rp%2F2LdBN%2B7iV8dlqFd%2F4wzQKBzekw5gJ1qjcUYWKQ9JMZJ2B9fSfJFwutGkAiQPN4LDaFjpmFEOeNBf8QjrGwQJWAaigg9f%2B5%2BXWPo3DoO%2FnUqb0cl7jmrWHZ%2FfzgMrGp0o02AttvsSvVnXQ41w%2B9TwWlV8Q0we9ZuBUp4QdDk%2BdIA7eiWyKGI3sLKMbdwkKOztwpfIXhkD1YvhpaElStvWK4P8ul%2FD7rcm01PbzCJxs3JBjqkAWBtgaXj39VGhhqynwkVYlgSmcyuBGV89LFyVUyGkRDLE1rduXPHei0ySr6CcllyXh9YGnV%2FUu4wa%2BO0fSWe%2BssJxuO7LYrC34q6GTaRdgL1gYT4gIhZFAOA%2FqnNHaXpoVXsKMz9G8b3tdI4VHrOkwichUNWDJMMkqjEs6jX2t2qyZ18j6jxSd2sWleQ1cOSqqY%2FEqkLitAWjGEkcqF3glsPupHM&X-Amz-Signature=12dad245e8be6daf8470874d7b847e1e1c06dc0c453c947436d4d2c80f085055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

