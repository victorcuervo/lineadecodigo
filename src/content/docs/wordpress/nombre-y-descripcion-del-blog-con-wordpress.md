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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJFK5W5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCw6BCLh9qVGxl1EKWmLTyXYfWIfCk0OJ1ci4HYJXnSYAIhAPJJ2jrhNQTzNhonaW12S50q4Uo4L%2FfA8KN9BMKMNub8Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxDumxftk%2BIFkezt9wq3AOz3v5LhG%2BxvrFHS%2FygzQWt%2FKy4VEYjo%2BqGn08K0hZJBdxMNFZB4AqCP3L%2BCojCl3IB3jhxLQ2Rw0bmcJmt2Ic19EkIQH9iNRPLZ1D0OKnrE9l6F8jDeQ6pUociFtyHULQki7y85yWV6O5OhT8Zcv3go0m54FwYLYFiBwfAinJXUhVTer0QJe%2BIGKiHch0tkq%2FuSKwYotlD2WJ84NNaq0DNCjdBMxnF4W5dZREe3JLGRErwiaVsceqWSfdw4Jub5TZwPgFLKR3iK0afWoPNY4kTdUVHQaeJlzyiRN9oTZvVyvDxi4JMcpZCd0rod3mSdS7i%2BsOfgh3nexCxPUQrMd1HckUC5SKwc038jgA11%2FzjDEa29tbpFTEbXbV1GCIxHSKhiLhlU3WDLtVHKqsQ5TY214B2cjSI2lConaYWU%2B4wppySFB9I0HPCa3SFaR9wuOx6JDycrjlU5xq20%2F9Y1K27GIocHiGECEN9mKPghtEb6%2FWxJAev0Fy4QiBD%2BH1xdtxll%2BHdZz5hbu%2FNRTw2pJYlDM%2FpQB3OnntETcucosblA7SRMvDMkkuw9QLPjxU5boZHHdgqv5VhyZHaynGN4ufmfv8ndu8n5ewBdNfzrvsV2g8Hzi5XIOUrUxoBJjCPhMbJBjqkASFtvtT4vGNgqpim3pB5dkwirvGbTTugn7afgpvS%2BHAJx6ffZc7R6qvMfoZ%2BbAs8lyvLgTe5GaxGoi12gwfsIxT9PulHM0UCPVS%2F%2BCOZFK9VIMyg7zTrPOAJTlN2hXvQHpFGiS%2FtqG9uLrynQspa17n966nrpA8%2BuiY0Rs9PNW1GIWYKPakg3xVNB9RYYUgzgZqKIwmJRlFoBc4gLSJdeJbzQZWj&X-Amz-Signature=345f1745a6d48e9e1eab1547b918858da20e917ba341c4d7bbb6a64a5a91e8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

