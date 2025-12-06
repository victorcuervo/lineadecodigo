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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CZRMWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWQK3%2Bz8SHYljEec3pF4y%2BDtQvUAmfGK2dJ9Vac3C7iwIgckFLGrV6DyePQSJpSxACuVp1a8zdI%2F1qg5%2Brw5%2BEAtgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJSuzjIS127YoSVgHyrcA0czm4QT0VUKq1eNA%2Bnth66uWsQ8rOK2GYxfDqCxzcXQrY4p3f9XIUI%2FgGe3FW4fcr5oWYiUQ8fnRW9yaECv8H8ExOb0kPChOCTLfgtjJbjCCZoFQF1p%2BIdY3RWM61UAk8bRyuNVJoiNk6QH5Hu65BrTR3KiQNRPteL%2BlhqOZaU62S%2BsNvvjFHKHpC8Roep39BGUAlPZc4z4eIRyWTAO6dMQ1KMSXBM9oVlQYqBYsC3BqteKtjG6pt%2F9ytDlVRas0py47qNXn2ZyxByg07ZW%2F7qcUaua6f8Jye%2BzlizcSsKohO4U%2BeIhX%2BUzk2xhKMu4VZvN2cjtC%2FsP5sPB1Z3wPgtfjMUqoB3t1S%2FO1o%2FmGnMvx0LpFNf%2FQB86pweNwJGRP8T4UbXfhPhMCiJQdZrKbFEfbuROK%2FnCf6juHU3hK90ksNRf3OQWVAfG5gL1UhZX4r0ooyDoKjfmXA%2BMEFaQxw4F1oRCQdxM5cTCLuQtJUSNYhxoDf4ssEcU2%2BUkympGWKBcRG3nQ6sFBsrwrYVcQ3ohndemk4lGXDcwxe%2FOXKie7LgXnbWx0oKH5dSqFQhVfe2WzqKTA2SPt9P66B8%2BOwk3nqy04WZHgPwX42c3P%2F7B3Ds4ZqVtUkH2GKVnMJeozskGOqUBygzI%2Fz0oecUPmjlAn6AQwSp37zQ%2FrvbMapmMF49myq59uT3icke1g9XVQ%2BnnVd3lmFS0goerT2at77nsuz0EE0cRMatkZXe6nCO%2FYpWCPmb2BsjEUA46gNShtslAGcnXnMPjiDAov1S2jxA%2FSfltuMkWWHUsy15%2FXzh8YtHkvw%2FeQ08zWKq35G6v8T%2Bd65CTYikV%2BPGsU2rR8KVzGXN5BuzhoJvx&X-Amz-Signature=cb110356e1288cf47b02a349539219b2c3dc2ead48c4f9464e10687c8f7a277d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

