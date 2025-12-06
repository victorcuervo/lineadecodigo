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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCJIEML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAypQsMQ%2BrTlotNxRuorjID9w86mL%2Bq5EcqIYGvBoVl6AiAQXaRHgU%2B4s2ISxtHReAwQGPTWfIYF%2Bp0mq4Pq96c1sCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeTjruBDqilcbGMa5KtwD0SZ866cH%2B5lyw8nDst%2BukP93L%2FEJLQX18JAhufG0%2BYkuVe6K0zl3QU17MPpshfQfErJ4%2B%2BztkAQQS4fUS0RaSOTeqxLd9%2FHo8KvLspX%2FE9GHVP27PVmeuk1769VB5kcf207qXqq0ZtXJ0nWRnOfMHy3zrC2enDaNV10WE2vgxdnQ8YE%2F7hkQK0A%2FDI%2F0G4brX2Jl8XsPM7o3CsdLLxuMH5Ulr%2F39ynRQXxEZXDibijsV2DRumC68WT6ep5ROjcBhXG5tDoZ0uQPq%2FWlfItd9%2BDPKcFWIPAjG%2B3kvbKDSsk%2BSB9L8FDgdZwTNG%2BhoA2AVtyZOnPepM6an8g0IZuXDLKUXbH8CXX%2FkgEFM4ZoPvgoSItkpYzfrasmOX8ZSVPwSAmkDrqki1L5JhXe2ACdUpEGCjR5Bm5XveIKlX06HnRthar5%2FDN8CBsE3SAK2d1pF6WVQ43Sc6ykgqSPhvIffg8Fjk896kmxN58aOqnWrHC0B9NgWGTOpSpgbV6Iqa9%2F2jx%2FbXQZLU78Ep4X5%2Bj7ldBFpFCjIurTtH98dCgc7qCy9dhaCALwGnE9JRIneOMO9o1GDJ5b6EvyTXZ9a7LQbaGXm%2FeaQ8U21nzW96x0VTCnG3JGNuJm%2BkrlCBDUw7qbQyQY6pgEsJtrJiOTywogKxb08fn3gI%2B2YbDHin%2BjHWsyYAtMLPcNtfoLXatDTa0JwzP5edadei51kxiU4r68t8TuETb31hSXJPAk1sUMvrPqIWUSVPGCh5vyBVQcUrGeSErVCnkxRknSXqwKJARNmxCFx3TaWM9Qj0a602B27135WGcvAv%2FyqCIDgWAN5%2BbpyMzE63YN5F%2FsjY%2Fvq48L8TBmYVpl9ld%2BDBhgK&X-Amz-Signature=711015122bc6dfaaea25d008ad4a2968f79233fc1ad45b10f25608b0779d9471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

