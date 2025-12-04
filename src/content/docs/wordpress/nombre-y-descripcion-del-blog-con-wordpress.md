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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUHADKO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIC2MwIda%2FgUrPjmufTMQHsg1gAhQLo5aLHnZN31%2FapYVAiAUqxOHUYvG4PKDqFE2BdH8LJoZtB%2FRsbhpCMPmzD1xsCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM14I1oE8G%2Fbh7ivnuKtwDKqmpp81XB694ZRcTethTJ%2FRNT%2Faau8yOzFxckarozc%2BHoSEgC5D0AfVJCqGHZPnTy1s%2B%2Fy4sw5LCf7nmnJFR8rf02ehWWHomPw0OXYXyi6L8Drqu9vv2Mt0ogZvjVvTGFgE3hn7IjQa18fPVKLIzjzWrA%2BVJX%2BpEwzOdjs%2FCVKviUUmWvVQSXFWIryaDvhTU6aUfNrczliqdQHOqwsU270AdSUyobL4gO7ncTCIxlMeC7JNM2aBFbK6%2BVs%2B%2BwfxISbYLWzrdHDq4mbRMGNfwk1tng3Ig0x%2BT6YzmjgTvJaWltOtIdPOok5xAZdxBvUEr88LCltE0ve7SKDmiGNC4VH7E5VAgT1g8t2zgjIeIYlwp9YvFNls1fcYC9VVOFd3h3A45uMV3SywQPPkgOKvUI1mh2iaAXgeFZk3p3MBMuOgCisc3j0UBdh0zyVkrwHT9doTfwbEwtBRHRLcMruyKCyAmjlxPnxRQOavmcr6jvnijfK5odVeDQWFldMHEtgLlxH7pQeQ4RDpemgAIlfx1ogI7KWs4KZENRJUgW5JIqMnVlVUO6KTqr%2BU3ILwlT1gYlxsttDmKh%2FvChYcSIP8UR2NIZk981QtDXX0%2FDWZ7AYiN4Hpj0PPJwc%2BdygUw6K3EyQY6pgFfPhCUyPouS5WJfozsbKUASJwu7ui41oHuF3vDY%2B6olMLAPxoraDwkz23ioF2GvNoqQnbvld8lctEVpBcM%2FEwNdmdSOrcTx6A8X0I1OgsuSE2mPAjOs5KQS3jltsVxNev9FZvTrY5TPUqzSrSJJFUTgOJQZU4QpN99w%2FkGszMHL363MTEG0d71yrf1iMFWvFcJlbu1Pl8F8s0z4TcmPvWhPCk2Pub9&X-Amz-Signature=9267714424b81fed7554b4b100b5d69fefbbeaf0d562d81dd3d01e4392f8017c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

