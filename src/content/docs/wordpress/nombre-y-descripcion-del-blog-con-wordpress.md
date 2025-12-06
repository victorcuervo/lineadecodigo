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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBCRSS2F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKrP5UZ4SkYSwaqE%2BPkGIX1vTKUf9O0ZE5wrkmVqdF0AiEAskoW6rglGefUaHwnO8DKG4s6OAfXyNbslYE4%2FWch87Iq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBEb%2FbIAQSUSVTk75SrcA3dqK9nGlMOTW1%2F1l%2FHi0lthC4ok%2BX%2FuC9SiqfwRNj43rdwS4BzyRJ9E2lLk3APFetT1LZHJPN37X0OU1Mx7Ac6uAGLm1T8AswlxGLY60l3ug7AYom22Sg4G087Jb14FBXKcGACVWsVe2%2BIUzFSQlRo7TLiUo9GoWmYqddc43XjtPu0KV2zHx5sNagTVRN5RLRXuLYPVFv1rP8l9pfjErc7F6vvzA2CIZ5qecVdm94gizJRknydJWF%2B5225CQ3HpHVQx%2F%2Fg284UT9sONX3MeMtQ%2BVn5V9A4b%2BCF8KfeTYl4GO0ira5DuNRyE30mkpz%2FYBAmWQ1yGmjcabtWKtRWsbRMcue8Eeng%2FAeHa2FWNbAqLVP2Sml9g%2F0j51rMdwAPbgw79b7YY%2FvOyaDpPAsJVDSaxRhnf%2FDzlt72HOHlMV5YiJPee%2BuZp1cG2JkSXmpByWP0uKp4YDkfzfRpfH0AOpckHGdJaNcK7t6ELFZGBVrLxKUVkHBcZuPxZiMkQYtyeFxgfQwaATQoM72VvvSa2YsCdoC3B%2BVLpHJibf2PYQw7O3Z94zekc%2FlLJSqdieYey2v0D1SHSSlGT86ahD%2F%2B8emRTyau25rj8y8Un%2FVw8r6sZWX40Z4wfXKxL3mM4MJqK0MkGOqUB%2BqpkyifvBSngbC8yYo6xhFfhW9ppyB2iIP%2BeB6vix7TnRgpZ0rMd7A9sJyFSa2CL%2BfVYTmq6iAAqbpPpgt7ySxGcBIZpWjg1t%2Fh%2Btk%2BA0pIlyR45xV7rOrze0K3bYYH7IS6wGryEjhPOgiijjaDFNab13kQdTkYds1LOi1%2BePfW5pcRyBuJA%2FFEUu7Mr9PPJcj6kWT080HzLqArLYYJ9%2BVuyIDLU&X-Amz-Signature=cb932ff020ed63402adb4553b09740b865ac8a7ac0d4bbcaa8c6b613d24ecff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

