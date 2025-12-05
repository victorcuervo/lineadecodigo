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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBT2L2K6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKt7%2BOw2VAFImlHmbqXT1pHYyjBM1EYbckgbruw%2FUL8QIgU9VbhJQMgrJosx1NVo%2BYLEnV%2F4WCDDT%2FYQ4pMoEpx9Eq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP3z9m6vsYu%2BqT0%2BuCrcA04zw8juFkGLud9qNbI%2F8zmPLYcsy7fPbKtzGGE12I%2FJn0DNIDEmyrHwZf%2Fj9pqrWIKGDjNU%2BJ3X1dG8ZCuMplLUwvFt%2FwjAwrCk07D6OE00d%2FjXxlfyWzzajRIuewCBH5C7EJ3vBrniWS9xBtbnGSX2yaV%2BtZDxzXTqs5Xq9TDRqfF90sUIRkCVIKubh3%2BxguqrewYz1f6kmXfq0yPja8ksDaGb04oOZcthlDUNJN0tOropgQQp6otHIa5igVw64HTQlUoXwG43XD4J5atcLZCDuNAdCUqYCHvuYrRm1k%2FSEl%2BMds1hzrtnm%2FrZUcC9NJtNiXWqL99BPWM1RU4pygZeXXIouUSW1%2Fq7eoJSOc%2FcwdL%2BAcEbP7pMzK2%2FT8W2DMGvixP1W20W40eQWEATsC94z%2Fn2WCzQ0sKumMh3joNV706Mlb29%2FXUKyl8%2BJY0T7Rxc5nQycUKNKKATD47DQxbT%2BLuzlC7gQGZAA7jLoOidXeUg5wUW25PWRdxzmYewaC5EJZJydxmu7XK3r8q0oh%2FhOY4GCFNd%2F25bYzjN%2BwZflyllI6rStj%2F3wfSSjTeWiKB%2FA9L6g7fS9W%2BxfhkSE4sqnXGwGOl7t8lvIMNyg6HE9mHaV2k3zEmA30iQMIiizckGOqUB2IVL2v%2Fsz%2BN2O%2B0tJxix8OwnX5OeWMpaeNzBA1BjG2faCpb5517d%2BBWW%2BteRDNjdyvfBa32OmT0G4qwdstEZpLERrrAsFon22GJB7nM03Whl5FrKap6Ur1%2B7e1nrEXQ2qtVdtwaL%2BcrouxSJmJwiZUCEAZ9Izf3umctlSr3dSpdeKmSRghv0KU%2BAIMKyYD7pcRW9VVLsJ1g5lKgbw%2FKfILCfEfEA&X-Amz-Signature=9aeb2393c1ff3562a55df2b4495d0c098f24ce42bcdcfe375e55d04bf21b4ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

