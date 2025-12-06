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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5JHKIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLdfPv8cXt2oRJG9mhALF%2BfBOcXrrz7dhqVtDG5LEw%2BAiEAvo3rRjtzUcjZK235ncZ6OF2Py7c%2FZAy3fuWBSfvQJY8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMyrZ1oCHlxG8cf%2BFyrcA%2FqMcqeLsqWJQM5KQExYlNk%2BzbiuDVQjBZ7vxq0CNHs9Fkm6cIq8Ek1pMWaLtxcaDR2sfeETLimACfhcGHx3dITwFUcZfUDXl5ORXYE1YgJ%2B6kCrRn6htNhfdf%2Ft4bixJCsaLZQmaODxDLwAp%2Bo2qmRumBOh6TMgE8Dx0oVuqHVC6Zqm12TtDqZcXJeFmZ3vo3mBQ8sePonO%2FP80azNinOHie6%2BEKVHAcrrzVwz%2F4S0kbvCHGTKVjlWCdbH2msoKdmUJNlBoTPQI%2F7Mmz%2FdyJ%2BGwBAsikK%2FY6Sxx0v0JuKIiekhX7j1pBhPvzSQFSrBz9qlZc6JC9zWLpmw0y8CpBrV%2BBcXipQB9wk9X7jtBRUhynw3G%2FcqZSLf8xz3LuypJHhQCns6175BVQelqCrMoWDaMZTbW81Zb43sShqK5ezadA6iGZh6a0M7dXSjIXgvWheM8YD3o9bvJfDuQf9p1qECPK99Gw2Xc%2FLhZowUq6wqqvEQT46%2B2c6ncIo4c5QVyxhtVC%2FfVJsOi%2FzG8Q0Nsp2v5AmnkzZxrnPVQm6J8S6%2BA%2F3DPOACKttxjl3lj6%2BUU9kqW%2BrMFdLHEefoozXsIXx5gZLE8s%2FMo9CTUZDQ2W6lLaozh5D9W0jVMIY9AMMjCzskGOqUBpEJeiQ7GseNiHtCNPy%2BdYf%2Fo3HK5Sd0L74ciDuufC1K78mk%2FW7Hh3dN%2Fvi8WYaQz7REJjaxgMyhdrZh28rYuGugGwAq7CEASJmnAiQehW2ZjgOH8%2Bad3kml3BqJqheB4ebsOsSLvKu6d7MXUlaGOIv9M3I5eB%2B%2FrtukzEo3%2F0q18WV9fDWKAKKmb2adfscH%2FfuCNE3Tu5tlgTnTH%2BPU6LbglxFPw&X-Amz-Signature=9b3226f3a8c2c0ebedc9a8f158d41fc41b42a5f1a01c31f88cc7c9c60008238b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

