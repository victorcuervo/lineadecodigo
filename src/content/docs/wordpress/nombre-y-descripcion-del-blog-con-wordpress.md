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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SLOZUJV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTCeW0tsXnqbBWBF4kYWdheFzNcr451kMde90LMQFkkAiAzFvxMKHXessL4oOwddatiq5C%2FyGMrVN%2FdaFT2XsF51Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMx2oZ%2BkH2c2VAxIIhKtwDNtEIxrAXr9QZJF0j5r5sPUvFYSliWQp0I9WOYwllRGLT6aLN%2FHFbyJ0dm0Jz1gMOqUce2gBOaAKI5u2doMBeOSx3lNN522VR6iQgp7HZnGZbGAaCk1vKqR3j6wCxd7%2FR3bxqh26a4rGi67DUnzjci1NrbGn%2FKp9OFCXOs3nRNjeCpgPOBNT3RkOQ1%2BmSMUjCwvOSU8KHNBp6tprgqd6KxKp%2FhQCotFcjrVkK4LsJ7CUq68%2B8geW%2BmaZ6sEGTHuW2lJ3MogiANUiIBB6RjVc18ijYDFkapHCDeWEL2uYjmitAJ%2FHb5n9MdVhEt5NZnLUKLssRqC9NGR5yDjiffQmRb9voZc3jh6lvJxz%2FVhDKbIw2dJCzaZqzjjMVpzagRwrH4LOTbjsZzmlFnqkqjaJ%2FNOPRuCWO6pQrzgcOiXmi2UVUwunJn1WrI3d5M6smKOY%2BXdrfhIWUzM5pMvmm6an%2BDdym88vYo99IV79YXfc1SHmtb8aJlBifx5lHMP0e%2FORcG8vklRwH54NUu1ry%2B%2FMYbjdGMjWGFZBdYuJh%2FXuZ7ZCyJeuL3mQSW6I9vKxG5RccvfeshwbV4vxtJ7hx6Y6tW6PJXRrMuyCP8pcxe79IGQNamRqgD4eIk9l4n0gwpr3CyQY6pgGh5kWZJK5b4Gfhiounh2H3YHN9s1jw06fMRuD%2BfGRMpfYu8A7v%2FubfElKqFMkqFJ2g0VQcPU6FoRBHPiM5xe8VvbEtDrwvtpnkCmylStZv%2FODt9sk3e5qbjlfUZOO6tzYqI2rKgp5WFEvy8Va3XvU4eOPyuCjD%2F%2BAhJxKfpPJ1w2Bkug7y9oa7lnn%2B8isdVdNK%2F1xCj4hEGn%2FVNMUq%2FAsX5K0BK2Dv&X-Amz-Signature=c8ec51a18d1f14446dcf9c1dc0c1180cec2bdc7aa51aa2b5230504c3956ef133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

