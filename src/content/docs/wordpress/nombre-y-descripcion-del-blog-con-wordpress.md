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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKHPPG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZGN%2F6iH7lprG7BWW2dDjqEgwU%2B4YqLMhBI5nkROiEJgIgcKae4F9MKFGW80TJ29bvRULqgRYIpjsMrhJxQVoM9u4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK%2Fh3hVGA81BMJF6GyrcA4eNrOViX9tKuw4xbfg%2B%2BuDMZAfN25RrNyF8Kcn12X%2FWnMJkl10HdEbEV1dl7kVLIyFJFUEodFfK959mrF0x%2F24vlZZ17TEjwlaRxzXcZcOJ6c9FkC3XfFLn6n7UhTxOB2Y%2BYP3upMeWatlvLuebec%2BWJcN5c3%2BLmo9HXR9GLz468P8d0ys4hXHjph1urBDC2GvTFbv3ab%2Fso8iN%2BhijmKaNf7h6g%2FejPhOjVQcqGv1DlyTT8JZDqwglInxN0pPhJVKtnBLIKmS3PTDWdudtimf27B%2Bm9Aj9Xh3nl4ScJXT57Y4S8EHLmZ%2FT2ibHGBT1QcGato5%2FX0qm4wfH2BC6%2Bwfg1KBCNVmhFE0OWGF3LLcL5FLN1GRgFSFBmx0WkJUin6rc2VfL3%2B%2F5escp4sRVQAJjBfCaJrDYGFdhVgOWWyOEdieojPOhTE2oUikQIVa%2B4HFXTIeDPY1LG%2BLb7%2F9tTAUBgEkNG02V%2FUTd7NTY8qugRlj13DIG6KN5PSPQ5jfDaMQZ1EkslF%2FDydKUDYYtcCJbVs%2BWl3jbjdLF73vlzuxmyh3tJ6aYRDjyCN3NVrSltpE%2BAfsDUoHPDVVu3mUqATV8%2Bt8o5BVBnUOrUhg7NUe7iS%2Fs32mejU0CBdDKMJL4y8kGOqUBMtpoHCy1KnL6aRmMunqaL1J4BrgvnJO1uRF6j%2BfKC2gtU611zR4JaPXuLM9XhzyVMUiks5J%2FH83Qmvz4oSZ1ANLiaiOh4FbrFdAmtsI4DO56tY9raacXV9kD7wLlHRoUwUx5ex0D0brZdWeGpFm%2B9qIYELyVCZm8eqnSBq%2BmSlTs1%2Bcf%2Bz6oBahpEkIAtTfLggggIY%2Fn04IXkat5nZbbr7l95UvA&X-Amz-Signature=d551a8cea5719c54f3495246d07e564244e9a7f7a2d053e0f0b55e3477ffe869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

