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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652S7MIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQyLlmP9xYiWQXEimk%2F00AAuomV4RTSaBZhj5fb3jPYAiBuw5s%2FYhwP1PQnQTQfq%2FRxXRyY9fNASIhUiP42sJK8tir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6iUykec5i3dqDNy0KtwDPm8698xXm3xthaT%2FW0AwxBfiAl60zJ4cVOsVO2PlQWuxi%2BxNT43O58A0g1xS7FlJ4bQIQscz4dsSN035bT6sL4eocxggOGtiXrrSRH3qkcVflRv%2FUWSQ4d8AxD4I%2F4hfYlW%2FAM5ENe4x3EvKy5ceBifgyK2k3qCcjJI3%2BXej8Sd5Q2MjFZ1%2FHOWD%2FMA4TIHnv5wpRvu%2F5eAY9bfgYRzBPB22eA7NqZPlhtaZREkq%2BHa7g%2BLlnoOQOfx3DMgOjHCbxZfUzbLI79vZWp0JSrlPslQ87AmY%2FmcCWFAi4OnzLoF9y%2BeZ23R%2BiZp%2BXzuqraGDNGMT%2FfjJVZxYCrdAHpD2YAtikte5A%2BraOIFfJGzs9GrpdMBlcnO0ohR%2FJlFDYMoEV92zsaZR6fj1Gyh6Py0VS59l5J6osguKM12S8up2ctPrqwkVHwHbdLBSXR09RV3tuHY5p1A1LCdkvd2ZdI%2FUTCS6JKXFhk5AyzcTN0UN7jWpqRQoCkXhVOL9EYm%2FcgQo17aNlbp%2ByugMpDp5tEg5gcmxoJ%2FYLip2uhXi8GNXrO6A085jKTTSyI9puQsm3iVvvy5i8LWeb3JSK51Xvi%2F%2BskcAmjyYGiXMzS23ktB8%2FW6yD6PqQF24MVe2j5cwtqjRyQY6pgFzSM13eJwVnD4yL2p7ZJ9BW1ze5KLkkpVGc%2Fy2l%2FPHUFWy3F1HZzY%2B1Yx3YowRjwJCJT4TLdXCsMfCbf%2FTyc%2B%2FbJtAMp71SQAeK29%2Bdl7JtTnxVOkP4Qhi4dx8CySzN3nk5MNAOnrHt7GHzznjIoxhPoX8Y89CWs0FkCU%2Fm%2FaSI0Lplcx%2BIG9NwQDk9gM75g4AnjMh6aLp7SzC0BQOnKRYPs3yE2Ew&X-Amz-Signature=8a81e27cde4c3f16b7757a12c8312310425b120e561cec8dcfa1814d360adb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

