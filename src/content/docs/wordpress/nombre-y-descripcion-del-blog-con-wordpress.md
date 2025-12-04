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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUEKZR6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF5J9wqcqBaNiNNmpcmI98NRH5ZlIoYR%2FEB92L8CDPPFAiAFxq4EqrbiYoIa9sKc64h7%2BEhaJGkxsLH2UA%2FOXhIobyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMoKylnmoAFJ%2BhwIKpKtwD2AKMqi8Ds%2BX94MkFmbKg66dz3%2FEY8qzhdDIoa0vuAY26pRBpsgVTXJ5FPzuVhRBkIi32a8FdCCZddEoxWlOZ8T2rRunDS51jqXrs61yK5rAjxHSNjPtO0HLrCqDSNBEEq1CL6VmIA0GM%2BKaplgjRZBF0uiuLCtc4moMpy7xRbv%2Bt1KBsToU6%2FTi015qeO00xINEo0PN3s06lCBHr89LnaO0q8BZjPvqpDu7AxbdWvDyOgzY3zEKKqyisAN7Fe%2F%2BQChexAk%2B4PkOLBWNBakQjxIZWl7c%2BsATNHry%2FE3rk5LXpNepgK5zy7BNmqAsOXb8YRQUXaYjvFmZiTNuLo4MCSyE3LwdS%2Fbth8%2BfapXn1d2hptYXgdIuVF6EvvcPQB%2F8XpKmysPod0WwTrrDIA8PWI6zyT20sKSMaPlBNXIF1m5atYkipxXHlaM9YL59NRxNwFBrtftQ0kqneDDegNKwb3P6CwbjsLNSA7mgpO3AEk%2FldmcQZEeClvew4s0WhOim4wZRrMK2cuveBDBjMJcauPk1WyJrjLk9VXTWpaw46ciZGfYPA%2BnCDZfDkEUc9G5mnSXkglCkcxd0mXgOC%2BH347SsXD%2BjtR%2BC%2B37ccEfPxAVblh5x1CZMs5zgWWg0wrIPGyQY6pgE2U8m8zRI8mj%2FuM9SQHpIi5hlawMWKE3cux%2BFYmZoI9R9a%2BeMlRGuzehmmlI%2FcEjcpJj7Blq7gVBGhwm7CPOOrietjon%2BK%2FOlJmKd7%2BS4Ir86JQAw4YJvSSituvTnRgEf0SZGYndSQ%2B8cMsBfgZ%2FA%2BroxUBTLM%2ByOE9AwOv%2FH2bN0PMqIYVxJDr1tJ8stk%2BDGsI5QPKJdkOJKqLpo47kIADX%2FLWAHS&X-Amz-Signature=abdc8ec2a01b899df45fec24d7157be65e29d7f277d3a828be212081ceac95a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

