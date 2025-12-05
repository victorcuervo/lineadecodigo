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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672D5HW6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZ3UKEmoZhxRJj4ewbuclF9MvNE2njRfQ6WdaVBBPhAIgAg%2B%2B4dRP7XD2Csu3RaDE1%2BxcfSy9HBPYJ9SZbqLxQ54q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBfx3xMpWnJEI0%2B1pircA7I80XSHn0rxiBSWV3ypB69qWKS11o75I2ppm0Njvb%2FslOsgdNmqhu8nRNkTsKDjoFdgN%2Bjk8BvMucDYXAg%2Bjs%2FZPeecKeRuxhIu9Rk%2B1v%2F9TF3GNjxg2MCyBoy%2FeeVWRPSyANbdo6mp%2BAxOXQA37DRtFYJoz%2BFAAb%2Bbm6cl6Q6SFd0Edt5GaVIkfkVU1OPzpPIBMu58zTfD92HAedqHt%2BBybBrGQHaGuZq731WEmY%2FH4i6IOYQfVidGqRb4weQNCJlWtObPOrX6hlqbyW7aWxN0NQf1%2BaSu%2FfPJKDv4Byj0%2BIpF5GbhvXt%2BicAAuYFa2%2FfWc8I2OzTUFSgi%2ByU05vmULWd7AAvNk4lZdSlvwp5czSiwPqEFpDQb6PQ8Kpg%2BnQidBSshDb%2BObl9VG%2BhlKlxXtx12EjqyfyctXlCwjOdw4iE0ME9Jwy2j3QAL3mAEhfMSNizZo8EQsUKf0lquHI%2FvS8XsD5N1sIEYvFNzG6CWVCny7lOKlW9FTV6yI9P8NHV2XUnkATsuBpZBBm3KeOo776vaMTtT4%2BLyfJ%2Bg5j2%2FEjPXoDErG%2BDMpOApVMQ1lMvHYSMdZkTwldjoTHhjwhOJB3i6TpOsJ5NI1m%2BVpwnrqoBVGZMjWEEQQOZyMNbhy8kGOqUBktUxhy7KNyWOfMzE88jdLmZfPyUkkb%2BRAcyIwE0f5j2OkmBmSHho3CsfiPXK1lQIDeEvz6MrF3dTs%2F3DsSJfzBpPNiDDO6Y9RQP%2FYRF%2FimZcpzk7fi%2Bcs%2B55JEn2%2BflWa9Jzqpz%2FGUHrzGqXCJ7cda6tSzZozX5%2Fl%2Br3Vv2%2BTaqN5v1lzLC5TQXQChV0BFLnVywWrwvQnaztuBQ482xMBgegO8eN&X-Amz-Signature=a9b0ccd53e6265d7fe9c10cb54db0e438e0d4c6c171d842746d311d1891205dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

