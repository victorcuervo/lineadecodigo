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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMOZKIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyBTjqH9S382zL95ikx9THfZiL43%2FYB%2BwEzCIC7%2BDOSAiEAxZuiz5CZsG%2F5xYkZcGF59eiw%2BoOcpbcTgiyzpAZlnPMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNbL2AAC9bVDVL%2B74CrcA4pVddeVBetZfjDLC78JeM5t3%2B2Cvp2pRJ9MStwGEt0OAcyzNZQfru0WvzDtb3aUAwDEkem41bXvJkGAwRYFcDzOHpYdwiSWPuxPsYfz2bav%2FL%2B9MHkxQLzze5Gk%2Ft2b3m4IWWw%2B0P01RbLI6unBfQHYGGcZMwIcI7hPGtq8VgYQQ7KHabZE9%2BE%2Bn7OYQCa%2BRuZaxJwbfne%2BEh%2BgwgL7obmX1wU5CE%2BwZUnR5RGY%2BHGA2tcfMd%2F4bCIB4jHXjSY%2BU4aN8ypLzbL4AbUIYetu%2BxtcMgZvZzKbkSzDJc%2FIDVZRH6YFTJFIP24vnqtd4e%2BBbIDgS%2Bk2mu754pdoxF7obuE%2FuUZ9PEVuAxpZESvkpuVdnCabr8Rn%2FAF2nMemKgwOpenJIWLIKZG1AxIom55%2BrJ%2B9qOAkscdISEdIut6a6W5nFTSw0qqzkEpSS7RnXfahaYgflYHZc93YDFqjDbwaRlxKt8atNyrzo65Cs9tqTcE2UzUQlPfe79I6dpbwsrO4ugf5NPusQa%2F%2BSBRNhsr2o0qbseGn3SDqh9pKbCI%2F7sRjIqt5mVFn2PEU%2FQNDgtUSbz8dvG9OmFl6oh8oQ2RZYdDzJAS7RQ51MM0q7YaBQdJT6YAWKK1fi35B5NlJMMfrz8kGOqUBW6EbexEwRJ1JL9YErNc43vH2AOzq3%2FkJJ7JmujO4yfvAkqpJgGRXmhQY%2FjVhGgBb1t4Rg%2B5YkjfLolFqsSI7H6Ex088etqZj9inJmzbO%2BtaSid1I5kxw0ZCAcVsu0qqfEKmcFOP75rUPL%2F5E14O3TgbQghqimfJO%2F1ZzZsM5JHCjj8SJ6ffCRDwQSc2QKr2JXetBGU3gKWs073SxJ%2BBvim3erCgC&X-Amz-Signature=0ec575e560cf303ac0686e878b09609446ddcb4236f96b881c3c46c14f1e610a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

