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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCXYB2X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbStoOC%2BvoQebQGYNEqeXqW9X7KNmuH1tgTB1n%2BQStvAiBz%2BVwk8lzgifl3yYoy064AixN7b%2BbR3p7UFs89uSt51Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMHwp6cO%2B7vXdu9ATzKtwDf4a3Ud%2FMQbOB2pVrVtQV7j5dm2e7ZrcIZ7gqF1%2BlGWlsZvjXAF6I0%2FNsh%2BgoR92R3DesEJ3qEMin1kRrM9qIL41t8iJLg9T%2BA1iWZGxXw7yyg%2FRdrBPvLfvMUJmwYCIiOK%2FIW16j5OoMM0f2olT2PgmZXp%2BJLVmprz2a0UDbB1HJl0iYrV7m9CL46DTrkH8AuopWEbXHQz%2B1x1c0rn3D8kF%2Fq9nqCrBLfUJGltM4vnRfBjYLFDI%2By1WVODTrZ32i0L92LZJQxVjZGaz2KpvGlbNeqJ1VoA1J2WwvsaefTr2xWGAzWe9K1yxPFY6NPRc4CQ1slKRr2V2LpYXWktqqOXpaoLvKlVVCCQze6kIFjdrQivnpy1%2B9fnbk4hKMxh4QhzUonqTJn2k4%2BpZdYX4aeFyd0vIzFBIF1K8%2FwLxckEZucMO5TV58c3ta30pLU7%2Flc%2BPDJnfUAOBVjNXYG1pM6ycjD8nRPnOuLFI4D6yMdecfNieMpuQgSI4MhLsx6hv0X1jcP6lKQz1uXQjvORFhHN91e7WZXluH7ifKNPdQcz2b5YTPz3qAHkadFvNMUbmvjiciwdwgDrh0Py6GMLlpq3qq4SNPrgxn%2Bmj0o6kbhlEnrk8KgBY6JROsIQswurLJyQY6pgFGpg%2BZHk4zL3p2OFfQRzEn360xBEAuXIzfK7zJ3HoWX1MCHN360vyl1cdQYWfmpqlhMOAnNcanZPm%2Fbf%2FYARRtJwjWfDlBesPe65l8ZxVJtfHaf70AiH8L%2FL8aH4YZVKJAmciJrLXzB4wYA9gs87eIpsLVNjnYOGn%2BLp1e10FCTR%2FySbtEbmLq%2B2fBtH%2BiEiRLuz2wl2vi5YNC41QXbUu92Gph74%2FZ&X-Amz-Signature=1603cf1eaaa293d14b9b65f7327cbaac1d625f74a22bcb32b54e12f3cf8693df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

