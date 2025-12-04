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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZNX5X7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICx0ldcNgJE396EoYSWSBodmh5mmtLkTkYTLRvDlZuWrAiEAmQ3YVRSD%2Bqy%2BTYIdHWpiFoH0cN5FHc2R%2BX5yzcw0520q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEmzDm8hsNATy5QeWCrcA6E3cA%2BOVs%2Fd87NsM%2FiSp35NsjXcBcbgdD5LgOSBupFqwK6odbtu9y1TiPzJdhrAPcIx%2FyNkvWxjlh076%2F6A4N5TDeTOtY8eKTU%2FH1k5LYeJYsE7HYFGzxgjDaQs45cutFTPE5WeINETFLmE1bvVBRa7%2F5L05bHKcPZ8Dwl2sGB6suYOPCaaYwElLe8GOjNCPJ2nsIh09m8nhu%2FuEbBtx3Knn6yegXpem3W5Ugv5pM%2F9tTzUz%2FgGuoB9ohY53H4pt76d9l2k60uoqB%2BAYIXJbNnOScHmRl72MDFb2Dahl3EVIMUgdmlnFHXO6u9AquIMgYaQr8Xi7%2FsnQQK%2FccEE5c9cqmhmbe%2BjkMUQf2MWCfi%2F3z2PMWgEomz4w0SKIWavrBIaN7kmSbA3H4w12HbiabzHu2m3fE9VxLTeC5yJDcJTAhirFGGMOSip3UyZUWrW7VnDjc7oTUuOaow5QLcTYkTMdEoWIaEOF0wqDlF5nlkZkm7vUiBq7GKgKGWNGhgbqkQKeOFw6WWgD6JdzniTQ9JzNPeb5Zqq%2F1DyrrZDe33VCq3TLwsfermhfFf8iSK8Bd28GUXRFkny%2Bp7GRfM9OSDK2sYcTSk5XHxOOzZOGlUQubFDvHIFZDYnstrUMMihxskGOqUB%2BkEwLudFQ7JEDm9ttNGiXLSjkLth22KJ7NFChv8f%2BP3QpKvTNHXhJCGBPc8ng4pnRVbkoAXBHD1e5GyV%2BMG3RuXjAzpr0Ypx0DwQGkb17mKZkufQQIR2pnYUGp12DOc2PUCbpthdJAjTE%2FL9xaItISLJep3V5S5NdBrLzEqGr0rkmkGtqBE3lkZ8hU%2FGzGQUi2zkoJC%2FIEhQDImrnR4BTiWkd9AY&X-Amz-Signature=abc4a7f61aaef21d380cd4650643c516168088c97646d00c58433b14bdf56655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

