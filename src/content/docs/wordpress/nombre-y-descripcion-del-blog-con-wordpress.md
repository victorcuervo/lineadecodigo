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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU3GG3Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8c%2Ble427tw%2Fda5HGlFUBYsCv%2BpiC%2Bx%2Famx9CYEezhzAIgJO%2BTeyG2WdF0%2FrMZAD2Wl2VchnZUcmCeRZughUfmEAMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCLePOHEny84GIq6YyrcA3nx8wvfi60ERPl3uQzf9Xc23UaR0DLtVeAuPZUHWn6PKFOSLY8tkySV5RLwGPRJZSfREV2cUt97VHxv98g7pLe8zoYPcItiPr5DrcX7IVdGhp3Qw%2BkAfrtOnBrrG52VC7GwKjXhXbjgKUI8FP2jS3x4qW%2FKWlspZ4kls%2Frrs34mVOuVtFNEKNTNJeFEty4LRovOa3sT%2Fdn%2FiPqpgImguyT%2BIGFF%2FiP58OxAKibhLZXkRt0zF40JyqUGxPTVN1pwSd%2Fzi2mT7T%2FLSoYVGFcwuvHcOe2CZt24vfFhOxfgnt7Q0xtsoIGx%2Bxa4%2BHFCOHnArDXe8309CSv%2BQVg9GJUR86oF1HJqW0FwdSpPStwkzPYcZJPxnyQtQIhpiaJxbcO5Lv59nIQQ5yYf97L8mr%2FUQeqPpBqB%2BR4jbF%2B%2BUS2hqaRFPhn6pAG%2BIYOIPsg3Hf1BgH9YLNIvJturtLnK2Y40GP%2B4b8om6CuA2o4%2Bi2lcOEBYj9tGK70sKUtnDc5nEf26blR1Yl2y8TIxDCfTw9fMysTGp4dS6fBSLEE91mKt1rPKtckZpwZPKXsJ%2FlBY9Cx7NA86NJcvc7NVdBu8%2BACRop7th7J2Aa398cRP2g1%2FvYxfeGIUVMx%2FvCY9pM%2BvMJSYzckGOqUBHAOPqO9RlUj7hMiuChb4fzeT8uj94Yl1yVBYnC%2FpsRKTNPw%2BGw6FCnDjZ7GEIILWPaPtEuEipvFZ%2F%2Fw%2F6kMFmFrJIFciRbYQViC3%2FOmnU%2Bs5UNO1YnHnZCC%2FhLgAxQ8e8oFhGgWRoktrl%2BBjZS6jedONqIaV%2Faq7kcojMaY9M04234pLgC9mmt8dlkTeYmq%2FjSYR80BhnkuDLelC2aifZa8PSvXp&X-Amz-Signature=44a8c3cc61ccd20301fa353a36b959738b0a12d6cdb005a08cd3ab1e2a96cdba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

