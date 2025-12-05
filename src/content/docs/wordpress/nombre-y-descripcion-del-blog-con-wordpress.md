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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652MSZG4U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4sej%2F1jkFKW%2B84E3tZSXaoJhOganjv%2Bo4Eeu32bSXAiBesYktllwvq6Q6tzGdTc5Vkuu8jrpDZxYhvDyUF9S%2Bcyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMr%2F7caP0ygWteOLzFKtwDu%2FVk%2BmGGqoPZIncJUacu1is1y0BpfZOa%2BIuXm5ZqoEfrMnvrzCkaSb2vTPKqs3kEf63u8mljlIKXURld2XKsMLqkpBYLwY8llmNZBeZtE3nOMAt1TkeqalKGVeWSLdqgQp3gKcM73ItVhU%2FCsSFqx%2F4QHDArFwdBTIbWX8e1jbP10kslooxyo46rsvRVCEZlJn%2Ft%2BKgUWDYb5EswwjDop8avFrQJGkb6C7aJfnilWbY1EPVIu%2BcX4rpzjqCIg791Q%2Bej2BMzYlIMRE6nJaWapaKZ48OR%2FZ%2FAqi1jYwbwIC7ilqd2AkvVsXnyTvr0EbX%2B5caBnve44lbZigPEIiEx5%2F3RZtUiJnKL0%2B8GsSpbkz9vnJ2f8CV338y4QqNtVg%2Fl%2B0%2By5RO6a5FyoCp1MsVwrbIbyGqcqR01o6jXMfp8sfn1eyGlXnEH3g9Af5aPuj6490wRzlgRQRykFEiVOlFiCZ36tQ%2BcHTBj5uxSsEy2sGyoblRXpL%2BtlIxZfyVPHy%2BCCxRHtlZ%2BIXYnoZaPNOMPuavue6bRjqWe5EGZ1K6TF26vpkpY9urOKoJNRMha5aYUz1qFpNlOsh5leQfU82GtVibmWU9g7BMb8ZVAyE%2FBDZGKh1UaIICWbKaSnzswi4nNyQY6pgFY2905qGVmFvK4wE5hQK2m%2Fw3Ns3XPW74QosuuJ1s7dk0sVgq%2BOYyAW1ZImbi6OhNoRti%2BT%2Fq%2FOiws99SQxVMyQJM1%2F0%2FYHLOP4GTOexsIpvnDnVNOIXnQIbAggQ3HPfTb%2FO7Jmutp56GJSsLRwr%2Bd7vlHdThR4q3A3ybIf526%2F6xIiDoZri08%2F49ii4xI9Z3KzQ9Aj%2B6sUv7XjtWhr6E6opkTxmHE&X-Amz-Signature=897f03ce8d80178f68b1b4fc119cea5a44e673cf152e34124d36cde9a15dbd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

