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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TOYEHJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKLyarR9WoiDkdHN5BZce6YwEitHwqwbUJE9c9M15cvAiEAlLBBclmHF622y9Yjb8yhGhYSVE1392EKyEhP3QPuACAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP%2FVvyDLpk0nSjsUACrcA9%2Fef49dFGI%2FFWzkSVIiX8p%2FXHpa2VrzQ39ekrsPSXaAHEWO%2B%2FnDmxltIDGY4Eyqkbq46mgP0%2BbWl3K%2BINFVUHPcvDfoL0Wov0QLBPGJDZBmTDpW0py5pykouROd5H6lQbWi2zTJcJOJ7aoWOWuX1aTnFoRchs%2B38yh0oO%2FgtIKXw%2FvX0y01VZRS1UlsO0mqJfHvUnYs%2BoOft9tuTTEQsT9B3thvDwQA9IuZ6KgziMNwYfEgp11isSaRF8%2FX8TPNDESYzV8CLAI7lMfYF2x3xb%2FDx7YoXvlXoi%2Fxnlbrx5nYaiZHLpZgzDZRpIzelB3u%2FLAaBkcC4V3aV9eUNLqHtE20cuIqLPduyI5hwKtVq7igS14vu8Wl6u4JeFG5FnMpC9l2HCfQMzdrPpm9S1JvNRoLuscXqbU66LfzSVTDAY5oIvo2jAtVAgxLZqWauEGRoZ3buKLEqhSFVn%2FAzAC8XHYRPjwfI8yLts0wfd%2Fauoqn9l7b%2Bhdj4kzb1xp3neZ%2FpElidOq%2FGWtP65A5s8Ez%2BpfNiAta2hHvAl50pn0tTcwxqZBrnP%2F7cYik%2BhboJfQz6iOGqJ%2FmJo8gfcZ7rcj%2FpZmxTpuGvb5xlcn3LN9WZ8AovsNb4fiaNT9%2BQZ3dMNPcxskGOqUBbRCfUyol7FBk%2BEVqKXC%2FDtcSmuWQrUjM1qK%2Fdl5DOZehZQqa54l8Kl66kxGDAUXO%2FVGLqIUBzGOeFfuzv3O2IwPyP%2BSilUzWjGSb%2BNi9FBgD1vZ%2FSyGKLDL6HScyLREQtQzHL5spADS1Hu7V5JcntgHBkbR7pIj4JNK%2F5CMZqT1FuFtV%2FGhpnn0UNek2wRAcT2JLxmMFbDvHdoHOmxM0DJq%2FhLU5&X-Amz-Signature=7f96eb4fc15b0d5c4e9f9fbfa11d0dc2dd19bcc82588ae551136a016feaa4763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

