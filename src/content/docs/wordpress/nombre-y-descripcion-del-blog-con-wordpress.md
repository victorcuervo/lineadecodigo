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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQDXSL4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDN3kMKevr4LWlNAeK30Q7jiCUhdM0TkvjEYxdIvX0QKAiAIXi%2BEx6tPTt8HT064mVe7y5tXHczXpOLFEi9f3mipMSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMOblk3jaTd5trzE9GKtwDeeegy%2BsMPJR0cGVXhCfJ8dmssGn%2FYbrmzwiCE8TW4aatqmJipcRM73jy5QTn9jut2UhRyxAU%2BrvDFndRSSfQullX6%2FgA%2F%2BKDL0MkEkkSRAXWQ1T2PEGXeNtDauH9g%2BTvoqmj4Vk8KP3h%2FPwv3tPmwwpmO%2F%2BboAybazJB2cLZD6vsIOgs%2BolgKbVhTAzrByXjl7hqWfeu0cDI5ShNwTzFKShB2B3GP7sEk4B3HHSew116fLgSaWfWwWpK02HLtAO%2Ft6DuDbZnrPef9ZAWCaA054NZavRubDqfnVCKoHR5yBhir6FdIuTe%2B%2FbgA57ewzevzCO1CdzBHqtjhlJYOFLcQH7tfRkWH8%2BNnwfrmFQ55JhKzr%2Bq3sba100epyZvK9Psn%2BdiLGJ6iWkmDjCHNTDd5bKhoxMWkAIvf10TnJGbnCmnK1Y2r34nfMFcvNTXW11RoJIyW1tnvv5LRfdO1mFlVbALVGgnh0Zudul2zlyzkwN8Lj1mpBloBVySd3vkE7Asd3IxhFm1iHgC04s5yJO9rcj41T1YTmh0v0rNgFTD1O53Iv5QF5AIuu5kinYQTJGB0BNx4VjV%2BHO5gFE61WHW%2FVpoZHhFLRdX7SQgDwymBPL8ifmo2Q55AN2xMUIwgOfFyQY6pgFkDE4M%2FH1TBVPPQKg7K%2BulwcPFg9XTmKq9qWFGLdoAj%2Bx7d%2FyeekZVfd0bOWOPRvWOVKH2cpNMzKm79mMj9LFmcoROWiC%2F%2BuRf8gkWMNWm48a%2FA5kwD1%2BqkeDsbNRwb%2F9oO6g%2F8TQfIyVzZXJDdb2%2BdiMmEaPvCqTDnDgC62%2FXGJybDiZolTWY7QX7BT67XCx6a0womlnUh8S0aTBSc9lQBGErofkw&X-Amz-Signature=9d764dad3ee4bbe62a931144276a6e38902d0102721610d7c520b0b666cfc01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

