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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T67SM5M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKHnEmuGA2uucZmK%2F%2Bic8hqrElKOsxxhvB9FivBmWGLAiEA48vaCfrW0K3Rhzl1jbbcsToE%2BAcGK4qtf%2F9ewvnk1Mwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD5CclEKZfo1pXabPSrcA6D2FNbDQEnzAPktzu%2BV9ELVvJrCVrCk3bv6Gcgoy8lwrxO4Y8rqM%2B1uvCiE21COfJaPKudPWBFbsvQNkMC1pL0JPOz3lByz6gpzfdg%2BUklgI1rTLyo0xLJGgHvZNSXqP%2FDlZZGmfmzpm1fqIba40vnZTZYu20qYm630uu5RPjbriCU7By%2FxT%2BqeNQfK6%2BS3uZSHZKv1lVKIkNIi5yJHTJktXCAbiTqet40JE%2FA040gGC5VyXE%2FVn1nago6aWiiz7bTitYdw1h%2FITNVbvqHafA7y4iE2uESvFUfNkL7w7w64Zlenled9Qb2Rvz%2BpJRjbhdXWnVBen51h9OSTkl5FQxF9H%2FpOhLwnazq%2BSqakgwZqqA%2BwNDx7AdEGrR0jo77bhWJlzCdvvJSdgiPSrBlhItLYPW%2F9pkAcE5zGjzoQckP2rnTD1hIZ%2FJf2UQkCVpYFmkqMVMqp%2FqYIEdcg1bouuNL2%2FrdHxSigP%2BRGSBPZMpo2L%2BQtUxpXwvCObUIIQ1h2pP7%2FH43apFhS8rFOlFjeT6ktUQI3Po3O9T2t6Mcz3Gh9k5ZvnnWy5%2F0KqIE1hg%2B22RGYq50AdgUgxPNu7mVLeyX0oYesU7m4ljQCyXYMJVDyOZYR8b%2Bsc02bLFo5MLqm0MkGOqUBW2jkvNfZOaVWnVxqMHHoOGBHWroyGJ2vr6mqqJsD3dwkIFWp%2BolXsqv6DleKFR2uxZhuySoq5C7OgnmJ3ZSLoiY1jl4JQr9JR2Zg34SC%2B27n8u%2Bdj1UrUuXji0oZQcPciqDMy%2FzFZCHx7nnovFPUDKHhHFlCNTJsDQvSHjn%2FFl%2BBA0%2F88yg2QAF2DjtXyR%2BheLZVdy9pWzcuWA4ciMdCAJbU5TBR&X-Amz-Signature=15f24f06b02877ceb817a3a3a3b8b4c333fc775a07c351fec89d7f119aaf9cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

