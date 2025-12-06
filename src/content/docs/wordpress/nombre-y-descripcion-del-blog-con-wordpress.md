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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJQFH5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV213PEDk%2FvA3zFnbCRRcRm6Sk5IKEnjPQ81PDj2QIMAiB7UXaRfGwEP9wF1wFaGPym%2Fe6KlHjZQ8UKEm2AE6eGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIML4WykU3NkPIOYBvpKtwDW2Mj5ynEhnWxqoc%2Ba3Hk6YmDbA0686gBz22Ll9BVCZCoK2NauS8abyLAuCX8SI%2B4X3GnWW%2FP7dN926wo3Qj9TVuDqXFhR0fbRsbZpYSwQWRu%2BuH7A6M9%2FcJW8haAL86SHm7U19LYpT6dnTT%2F0gdiZlkY18RNrhpv2GyL4Ty14B1paQE6IoRoYr22vHqs%2BeIHbLZV8Gl1MW%2BpxIyW4JPB1bj54xflP%2BskkF93bCsF0zMkagXzYqY5wdR6waDk1Q%2Fmxi8qpBL0vuip1%2BuEz%2BPU9BaUzeJNbskEEtA%2BHQodtkAK8f8DWoeNqB%2FYnjO0kQNLbdV6WMN91wcp8KCiQ1fUm6EenSmJFd4Eyot6WPIsgs4k7l6SXW6lzlcIzvgYhCM%2BiqHHgHP1GJZtQgV5pd1OYaR77bOum%2FOgy%2Fn%2FW3ms%2Fy0QH%2B1tRPM24B9h%2BFcHI%2FnNxwN4MWobs5ykvwx9UNsHn03r1Ax%2F3mlbk7AZfuLTq%2FwSHne561Vx9lIuIvDlnfo%2BN7F0sYHf6KMdJETgE5Zqv576aUijMyioRG6phGGYXTABV2hXrHx7ihu1GtM715jacraM6zgst%2BUg2HpnnkLqC%2FUcZYYbqYkW3BhXP0CGp2FGZ%2F0fEmrvsMh374Qwo6bQyQY6pgEGS49pIGUN4cdZkc%2FYrafq%2FL6dc5yGX4%2FAPNDN0g03JpVeOZdlnbjmu8ckoGUt%2FMBoVRZJyxlukLkae60zkwoOt7Di%2BXBD94DLSWUZNYv2Cw%2B%2FJgO%2Fzeyws8wYNUlJcS%2BtpoCZ0r1EAeIvEVMeGVnLmaeXgg%2B4tfDDXFUF4OeWmTpKNbhRhJx9rWbaHze3PJP3SQXfTKrl%2BwXlcp23pSWMQG4kMyXW&X-Amz-Signature=74d68c6b5cfa118658ec9a1eb1c64bccee25f94d314aae2202f00ab164710c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

