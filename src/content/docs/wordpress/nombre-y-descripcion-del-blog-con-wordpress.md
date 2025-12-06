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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSEBQ4G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaZjvF52XbK2FU%2B6IpGYeFa%2BzB4tDgSOR4WkTr%2Flyp9AiEAhWsy6clhJVz56a%2BeQWUFzSBCYDP1A18A5mqsrwEd2nAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNGxD75ohJXE2XoUeircAw7VrXqpGdhZXuK9hRknOYTWwHAymDP2uadUZSKFV3C0z9FJ8k66ORsGWcd%2BHyLrBFYymMa9vjbt08%2FTcZzqzWbT%2BySc5pISOBmo1MrVeOtu1%2FBZHfqtj1IYOgaquzDkD%2BvrkgX2ydvj8K71ib0SmBhBwlucAMCTL7%2BaKlBuGRr9%2F3EPwyI62ubS4aBUW%2FDjCnnUruyB%2BGdXc%2FiXKMo%2BoZSYGtT5BCkndooxr6knVGJq4VweGjSqU2cqkoV%2FYYeuZ6t1HscWqf6%2FsnZmyLdyUfQ8i17x7%2Bi9kk006QSswNLzxgmD%2BYQVdIQvENAVzgcbKNRU0CaCxJOHVQoqUwZ30tyvQCV5zYV9Jjm5O8qRHwdHVHNNUPHHGAmmxXqkuzfyQoT1MV6B9NkI4tmvZ45j5bTqGR%2ByFY5WfoTYPiwPfsb3F0vKO%2BPGYVhyRJOA94v00MgWOSFKWq56wvIk7cBQjAI8a4gZJwJVsLp1t49zCq0meR1JFmN3eQZBaSHS%2BLeAK9%2FxUSX39YrSovPvtMAkidf4U8MnqsvMEa7ibekSb1t%2Fk9iCufNPb6nO7TJ6SOXYYfwWqWg9bbinTRoAAHBL2PmSlfImbKi7M3kMmrNfG6WnjJ0ZktQfzNER23pxMJCnzskGOqUBryNxBUhY8bf7vianjr8BeZ1Y7fo2r92%2B4esdvZwKdSidT2go%2BPt1JH%2F1X%2BuZ3rrJ2d9Wjis20j0KYbujaOFi5gG18P2K1YEuE%2FK%2Fk7ej1fmP4mb5%2Fc5967o%2FVWrQ8ON97EtkOISItE9ocHJhaN7Okmr%2B3fzDkZdOPmtL1bDqGE9jRChGAV%2FNNrqMBzOLdAi3CK2WuSvgASP4%2FK46JsDzXLQR%2F2kM&X-Amz-Signature=52976827ebd9d1e045780038b36d5b6bc9b54349aab3f155a6f0068f8fa37653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

