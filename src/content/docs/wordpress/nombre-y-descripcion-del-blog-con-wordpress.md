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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFJCMLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk6SttyHgW1iFvKP7yxi7slDoyaYPKUN8A2rwn7hn3%2FAiAqH9XpdKlWVvbUxJmNgEcLfmYcitMUo%2BCGE6gLvTSeXSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdJQeFEqw%2Ftlpnz7DKtwD1TBE9fmYAwlTbL82fc0Dwe9%2B0EmFWMJKBd49A27ZseL1O%2FcyRIKovEaVWcwDC6aH7iV1Z7kGSBZisKK8BBuM%2FLkm8apNibM1XYTKU1CYSCOPjkqB0RQ%2BhlKh6GFQ7dBJtMHFslMYYAdogmBCQqHcjMzJm5zx%2B1WoAn4z%2FXijVin%2Fb5jBCpwnmujKOVJH4IF62%2F43Ee0XiTP0jglLPgsSyqTYls64QUOQlQllKWtvdUgCSw6J9xiXaBIyFMdYXOhPkXP7Lo6xTduEBb5ZNBJ8Q0hj1Tf%2BGzZNBSyB0xe6haXbQcX7XBbslveWet36ZhgzDPP07IYvpauO2wkfC%2BLsbLLKGCp1%2FGbO1mNDUDAh8J1Lwb%2BjU1h9u4ApvKWvqyM2H7ZSmETA5bpcR2r1DB%2F5V5FXdbZ9QtM%2F8yqgI4xDhXHQJiLcCnnVnUfBvsmkEG23bOMDc1ulA1jagyte7nu7Ln7pLbBg2vxh8ymm%2Bwl5SqoyG0AmMIAqmzBtdP83fC30DM6r6xViIyPDIyW7txZBi9hlabqxRfMzWW9vMSvmehymwC8mSo1QPQrgab8jpLKhUPOoyTE8z3RF4gI134FPt%2BSCl%2Fr4xNvF2DI%2BV0H%2Fubsu%2F%2BySm%2FZxEsXfJHcw56rJyQY6pgFDO1RWNFXoLvvYJDv67mP8b974PmAlwGKmH%2BvHVn1OBNDL8gu4XrqwX0vvNCLHMZmoGLV4vxJ4N%2BysmKCjqQWtjm6nxIF5I6vjCsKMn%2BHXvB947zKnmGgvepbpDj5jLr2wCF2tQF84MaFy2tMov3op5w8ieH1IiRxF42mZobR%2FjtOux7xkbHEDDCZzl70gmGNXLi%2BFyoc7CDYR48crD0VRDPo8mYwE&X-Amz-Signature=8db6943bdcaffc14aca7c8fc3318976705b696eab1f75d42a7187baa9a924ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

