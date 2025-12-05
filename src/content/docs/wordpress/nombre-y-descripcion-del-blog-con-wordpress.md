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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIAJY7K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTsG6hDUUiH6eCswIKi7MZIh8Rt7eqILQCowIaZoT7QAIgCDsmmCbF4FwLR3kX0AlrItq2jD%2FRsZK5IrAK9RQVWQ8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNNz7I5nu8nDSqFoNCrcAy51e0a0XHfRhviyOTGBIvrRt5hP7fxvAovg4yPuwac1wuVf62W7ZBBwyt6yXUJW%2FHuxvh%2FNrVHl%2F0yuwqe9H%2BXL65vPekuGD%2F3Bjxuf0U7d1AGVsaw1oBR%2BzoKa%2F5MZHxbUDRVCkZSxZPbYxuGTa5far5KP%2FEy7fPjqrrb8ZvYVbAzi1%2FmJgDI6GHz7MSKv5JT8mXWN5H8S4B8WeAy5gckisedVn2%2FwHwvSh1EfS9HsCvHWAQC1R5bOUoigV%2B%2Bds%2BWJJL48A4FfIq%2FDCv2SHus9kqASWfb6l5t3ixGh8hgxPfyl3pUQuBhTEGC99HA%2FCfy5y49FNkGCO5rB1UVjKb9sVTnNrbizvJIzKGD8K9A7ukFtcnRtB5HtqIbX4fUw1kD9rwWn1JkaUIdxJ%2BlJCVYpqhCCKiZ3h6CdXOJ%2B4brp6WILN5WMF%2FGCGeC778by75vtmpGbyo5g71qhA7XqEJiWzrme764a2jwvAju1n7jNzW5x1%2F3gQXKGpr4w47Mmt4vdGfZEaIWQciSydDB3IP%2FqfLE8Gopgu1yEyYFF%2F6i%2Fn5manOBGe5BIKcaZ3n8KCX0pVcRc7YVGoDC4ceykdBwtCIeS9yIx2nuTOo0WfZRQbTRDrcyUJzrxPpH8MNeMyMkGOqUBNCToAp3GAlpdgw1dq2Ez4%2FlnNJfcIjJ5KkE29Zi0NzJlPyouYYGtbYysR6KLAhStBsy4MIVguISqB0w85R3XjdZ13ROMznTjHwBOOFFurrI24Cp1x7CSpcXa2ZVuIroTPMzD%2F01%2BC%2B%2FkDrLKq%2FSTL67Zjy0wPdmEegmgzAdwTd8npwY%2B4ypsUPh2m7Rz5eYs5vRYdF%2BmZCwK0uCUD%2B6LTPwhgOc4&X-Amz-Signature=2a590da70b7c8f6014966e9d226353dde29f5f89e4a2c3e8c6d5cf8255564552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

