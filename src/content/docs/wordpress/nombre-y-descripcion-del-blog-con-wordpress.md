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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWFEZIV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ%2BoIX47qXM7EdnPLcKfEGAc6ehTz6x%2B8IiHvsZR3AsgIgH5Uwhu%2BjRBaBmFCZKhCJUdHCeBKdWWfLQPGPsgoPjB4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMp5B6VY%2Fld1PnZVLCrcA7K2n7uxeVf7xMXvROFsUmuMhDfOSfJMZtp6eA%2F%2FDNe6VoJyG%2FDRU9Q0KKyI6phAZB%2BmnlCNSpUR64ETYlyOMtQhxJ6mF2V4bvexM7Pgo0bYaZtFqnh3WvMld2Pn%2BbHd4%2B0bOfKMnQGqXslBdoijHYuaHCXbLZ3jhZosg%2FL2n0QzClWjS%2BhKom7kfF42p3rYh45jnXz3rBDazV3r9uNTbJnRKkcpoyB%2Ba%2BEnM4c8hUBzDNmS3V8aYDWSacgfnSrjd6V4SLUL31qcBjXbRbopOmY2LfNLZzr1gMCBmD4WzqhhMkSD6gOrvQMjHJp9MKL1MrllBk1ZSGueqEqyo9r3fELA%2BP5g1jE%2F4duUrJedXyVZER6yc690I85xUfNxMHSLVSyt2I0Vdq%2BEZxfWFtg7d%2ByygrIyEZzAAtchPOgIL5%2FwkZuMnm79%2Bo0ubzx4uxV4SZCf9p8tgxs8hDTXS8M4YkJkSkYe8j6EPzxZ1XqgorwJDhCgwSMpzC1r6Dv5p9nJ%2BRPJb39OwBtuwtHTrmoUI%2BIEQSt5%2FM2OtRNAC8NpctjjbOSyNsu%2BZrW878Q6%2Fr9krT1Qj2ikjlMgPgu9%2FG%2FP6bFiikfTh%2F1x6Fo4rvolyUbqAcueGdTYHGgMfEYIMOfszMkGOqUBbHXDUZTHgx8e8CA2jgOwibs%2B9%2F1x83tyLqIdLGFdzN4yMrkg33YClfHLyXFYJVWDLkSAIu9XKd7144umx124drN5ofcOw%2FpWYs2lrpqUf%2FxzWDDopVFehebNdIhNMzKi8r6I9SRWPJsrYbyFVwROBN6OfmT7%2FJHes3Bz9kPM6nyTBQ3x3a07JpZvwzVJE1Orr7C7UapID8HO%2BZKPaVmbiXdgFi99&X-Amz-Signature=3ce9b2c68367f4b86778093627fa9062bb777f8bbf48983c098609b1084b7b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

