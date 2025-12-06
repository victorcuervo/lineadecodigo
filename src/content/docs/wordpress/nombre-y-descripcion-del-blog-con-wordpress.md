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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEJT2DO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF77pInyO9OuGPMKSwfgMGgLuOzjhzczbn9e0pEBISQZAiEA61oliVW%2BcxmbQKCv7hXvSBZVNYyqRL%2BgT%2BWSrmsT3VEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDGncINI1NFowDBQiircA8Jd6CR80Pg0BAGnqQcuZ3OS4Ks9hcXOeBDg7atGqw2biZ8%2Bwdn4oioJ1fH8kp%2Fwcp9IhISpknqeeSwx8nassWyqj6nM%2FMVb85MZDxUoRWDmPmrWt0gDf%2B42FfKSAvPsED1jeyJnpu8a8Agz%2FGbeD8We0JnxK9m1kAw%2BLZAUmj3hTgzE0%2FftvaTpaRXE85%2FgDe95FWk08xoMHjXqgp4y7oQMcSE%2BQ%2BmWeiRTphuPOoCFQYGEVa%2B8VsPmV9IFj5lHJeiwhO9q6e%2FTF95vHrU5fOp2PlLzLseO7uzotWCdVWupX13Un5qMJwmwA9mbZ5a9vHv5hVv1%2FVP7lAubsC28M%2FLSnOPbn4WgDo%2Bk4xjn%2F6XSs5r7lMl8zhjJwSYYoJAtsGKGW5ZlGa7BqS7ZrlZly0btiwIgBTWDT3re%2Bu8goTOS9BnfloMqbcTU26QbmtLZ3UoamxGXM6CzvYMKnYVmoQXVOvlydd3h8PLjFf8DjvYiLMl5zwVk61X2w21aKoR1yXmXqhTMB7tQeIg3D7Tw7Nq9ZdjQ6qBzeZ40GPigDk5%2BDdFwa7jBRt8wQs6NzJ3uS%2F3UF4iU22JVN11zYaH5ekrckhhSIuZeCQvWkEHykqxK7Z4%2F8wvXUKnciZCTMLzezskGOqUBJsZdtu8VGCfOOUAERdb91rNOJxNX%2FDeWyj%2FA4n8Ue6XG%2B2tcOnOohRORa7pE1HPdsGU%2F4EbFof%2BBZq2GgOzeQkWXzeiIw%2FsDJ2xPbPekRqgkgc1dNQozeYBd%2Fh5rco%2Bf7jLvXcSdgi3AOiylBDIr%2F5fSrONGA3mdRVOfMvjlX0DqDUjwlrM%2F%2FUG7bXIKAp%2F7V3WkkQwa8StHIH40zkD74vy3Wa4x&X-Amz-Signature=991fbaf8f39c9dd54162ec02d2ef7bcc29e41cfd77aa3b5524ff3495dfff7c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

