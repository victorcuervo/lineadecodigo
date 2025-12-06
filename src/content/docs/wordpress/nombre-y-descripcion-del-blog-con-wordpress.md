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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6V4XZFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV3kIpdx8wUN%2BtwcMl5pwJ5RbHXccEgPPtK%2B%2BLLE%2FNHAiAn2qM%2B9CYUPde3Wc7JdH6AkM4zR15AL6QwpT3Zkcdx8ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMRM2g%2FV96gXdGQKWSKtwDGsUQh%2BA8WN0djCG5YJnPTbJDHDXG9ZQUEYI9jx0gtQPX9jHJQBVbEAzcRm%2FfAdqghWDCk08Zc9d8O2r9T83UZukTtkDShb3%2BTb%2FlU0x6I6nCecW0jWbkbgbZDtYb3KndfDyl%2Fq2ztOKYPEuhMeo3UaY4CWjw9xPJsT3b9mHnTbXnkPY2%2BFEoDAdTEvPYDL09pScd6VtO0w2I3uPIaBnaPjX5NPZXn%2FhGtoWhqhyNuHramKBFkMnes6SVHxVqIoDfjxU1qIKmISwQmPokslumC7WHXSmftf35hHU4M6b3DdDTcMHrbLN%2FJIe8CL6ZHjkwn5URsPkHfbIxOd5nVW7rKyV5Dvorg%2BD6flt4mDNmLRrd6VfXcuDWiYHpY9Uq0rXLI6nwn%2FkSEGk3F%2FwNkPVzrfpMIP9wClaXdaNWvGS3xc%2BgrWy23eEQG6DY%2BGB9Pg3yRviJ5uMs1klwp9uVJ%2BUP%2FdFlUqjl7v4ws%2BIJaGeZIrdgFn%2F3wr3Co8KiTsNQ82nmj8LZYoUTqukTOmZnukHu8u9dNsr2ixAwynSddirmV0bDzOc%2BbQ0aqGduHp%2F09YLuhMd0mUBOF82COqhT%2FHJaSTSI%2BhAjGMhBxEN0U7Cbg6Pf378ZR%2BJWqZcuV8Mw7qbQyQY6pgF91ECdEE0eteFEET73dwdUkhUBBKBEvdpF3AvVfkyCkWc9vkTAXO8%2FasUpssfOddy0hQWsdy1ajVhctLCYvAZa%2FRmlVvk%2FxvrQd0clX3jS3O86pUcw31t65EYw%2FyuLdtnkPORO%2BmeVvn7RNIuY3OGaz%2BFsjBiUBr4C7%2Bgw8FfiM2i6QuOjB0C8oU8b5EwStQbxSgDeFy5%2Fi7Tyu9QcoixL0Eoh8LPE&X-Amz-Signature=494a126d6ed304d099e4d849ae230e2dfc81c002342f49c0ba5bac631b367f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

