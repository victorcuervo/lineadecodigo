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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMWFY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRw8Rf8OgTYHTMgWF9pBsLN7LSsw5ngu3%2BN0aDquw9QAiEA5YR2lndLAKlQrd6mwhcLG55gnQBfeLH0M%2FotqGpXp1sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDj0BfWrv2p7UQxpzSrcAy722dFKbvGku0Ou1%2FF%2B9dh6yUlrQx5gOFQ90IpB0ga%2F8D%2F7Wm9HvNApS8S91YOrln10W1%2FAosbqvXmWCOIfC8NR10gMiHlSRtkF14ZT%2BoZZ5G5oOU9ld%2B0PWZu1ZNKPdj9AwLQinr4x7EfYGQZmKZmtL7opQp%2FyHHbdw9fCjkiZfzxXp2q1IG0Na8uw1UD22a0djzvnKcdCbKnwHNqeB1UIDFblek5n7hJCRt%2Fr0CNBEYbqv2zCmRrni0qLcbAbvvkhTAFs4YUA42ib4EABCnBlHJU0qJPeQPY37EqsxU8pDsvVZLSokYV2gH%2BLIo3ADcDB%2BPsqt%2BqeWonVULJVEwA5aV4%2FZ2qQCEzVM9u%2FaeGTlXp%2FZMI1zs9zA%2BAHLEv8JTWPl1EHVgk05JstZbeqPeg4JLM1hdq3Har%2B3EdmcA%2BE4XaKJH1vnTHIKzQu8FxuFcXIGOE8mnMkWu2ucTQ6CjI3hhtrAfyxH6GRQ7TziXFkpQKiQojGX%2FXEgf4qB0zkpKswpXkl8M8UBHrv71BN8FoJCmno%2FJ0D%2Fa%2BU3yHFDgx9KVcewRsTrQLZgbljr4oCMY%2FHNjEhvWxnveLT7Wze8j8VmX60MUoMo5cS3dSZu82%2FtRkySJr9DcXHQ6yJMN6MyMkGOqUB34s28C9t3PAWouFYAYIlFkrxBmvWTO02gMwVUv%2BnV0JG718Eu4Hc8Gbr1kmfikqT%2Ba7KwEDslNgA3CrndSOsKbnRAZol8U57147Hdih1rEPQ4pxG7%2BEMEOPFtOy5g%2FWaTyzkYfWSer0%2BLPmRqQVhxQnzA8rLZU4gWGOfQr5qcqy9EKotK%2BbG%2BjMMtTwA%2BwTZWgoonN2DAklPdQd9GG8HRaxNoIW8&X-Amz-Signature=3756636e842f55c4b881b7ae681bcc39fc112af3aa50e2394b3532ca993f0b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

