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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYNOOTWV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfCQnkNNiim8LFMleCMrFNlwHm1iuSyyyTlP8ogR9jWAiEA%2FqMWo04xkf3rFymQ4SRa1kP2Xp%2FSZrO5MxEBoOfj1Hcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCYQ%2F2cRDsYBc%2F63bircA5Cq%2B4bl1W%2BDCKDq%2BASGxjOVJF9k2lXo2PslBX8GjmkPOKM71VuFj87bL28Cfu%2FXhkGkW7CMDKtoxMODO1sg5J9okhCkX8HUXvjGf73k%2B4Bnr8Y6N8eae2m87huy4BIyH0%2F0pFeygfb8Mo86Oks9Z%2BEOZOtSyK2GM0GXoCdap50A4daKZRkf9ApVoX5Yoq1DAYPCgv6iQcA8vunyzSv4ld7qESvfo0Wmn8dSNJFs9ZkSAdH9yXPHCBok3krQOXNPQmvyOl3rcrO9nno4VQ%2FSP%2BuKi2wik7YutjYSrt2v1sr%2BzlPo2W5KseSffEBsrTKlrpsu3yIOBkMRT89SKUYnwUiOTntwzjmrRQjK8zbJbo40JhZuRcczlHkCEQ0UEd0MGLXxxEdiY24ga2oGcD9sAMBBswaI8snXjyjqQKW%2BPx%2Br%2FUvSpWFsd8c16lhyTv4jO%2FMoRM%2BfKY8%2FkV1onj71aNoZIe%2FGUXry30vGwcHE6Y3iFKGnMUqsSyo6C6%2BL3%2BEEaAg7yJhavNop%2BTcGxPAzoOjgixKFBq0KuiJ%2FIkXIa5L8fk9utA241QqG88B8VbKQPRHV%2BBCE4Byrz3v8i5WHV3l%2FwVtD79kZbnUly6MsE0Zu4jYKrc9siM6cU7IzMInT0skGOqUB1vsnIo%2Fb%2FMbrryualn1WFhQ4J0zjWYCSMadaYFo%2BFeQmMe1SAjsNI8iqMaztDmfYTQdMHfQMX52n5gH2pYc0GlD5xXIZwXYB8zcS1kHg1pAanmaPlqYKlFo6KmJ%2FsQS7T72Do9xX310MW4QdAUXkFwvycSc%2BDh4RmT1rQFRjN5M962Rdti%2F%2B6L6bNVwQaYVdeT9TkyG4n9PgJXOrOBsWFoTRwDoK&X-Amz-Signature=976e6959a25635d1900e81923dc00b30653d8a7e93c5e84f9233f5fd847801ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

