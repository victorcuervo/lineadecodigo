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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6EA2YS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTOn0tZ5GVbn4mg0BCWB6gaH9oBPxcxyBmSgVQw7V1RgIgYUc8U8CDUAruv9vaN2DgNaY67lQHBrM8JkL3MF%2B4oO0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFiVf2JV9d0XjLYE3CrcA4CmHro7L2HTiuEFPbJfLR3WSx71NaugwOQoKOQOPxvjOy9N5JuSR8oiOiwAfv9q8b%2BWMjtHcx4WgVs4%2F%2BbNFSzATx1SzXDgnZyT7LZJ7yX%2BIEALiRmHbHVqBg9dhuBrEU6XSrkkSR5Ry2iVzPYdO%2BxsM6s8jkC6Q44aBMDCoFJeW1Q347%2FboIGtsVMT3ZVUUOG4OYAMNNUyNuA4Wp1Pb%2FfUb2HwLkS478GYg2n8EXMC7FqAlE%2Bvylo4BHdSQ9gHz5pqwf6uZf83hqLiFAvuK%2F2JUWdEAkNXotx%2FQMfLlm4EophPj3xwap%2FC6py27%2BirVKQ5fnyObHiWopzXJRnkHJ0%2Fu5u1HM8LpJGS7oIkIJ03OMydpxWNBqKn8UAzAgMhuCDEphqn4gICgA8X7%2FUkH254yIDBZKPEep4kjoPFZ0G5bsMhbAmlfr7I89VCuvFCAYbuS8Cl1IkAOi68UG0uOdxS1fN3i2IO65yt2qc4Wqm5lcCdggZY5yXtoeapK4N93lhTAnNsCMILDw7%2BkO1eGLSTAMk784re7Ftmsjw3vGcuE5gueSu9C8ybBrlzjtf5oE2ZKmuqOSmoRkIP4G8HhD6C%2BUi6Yo02Pll5KSOveRIkAOxhXwGR%2F2bBLejjMIKn0MkGOqUBZLjU0f1L33A9cShz7uLTDJd5My%2B0i2ijldUF0BwuyQYkoIoBeTAOpW5KGPqCL7sGIzC2ETaM2JdUUpJIpgD4zqqLbQ3q4%2FHYQz2f%2FT2iB9uUdLGPgG%2FSSs150c5XEe2hiR%2BY7ZqXrExBnkPl7IWtfgFUCYd9oBSfanEhY4qK1x51yVwc4PUXfXtqlw8nCR6%2B7J%2BcH%2BBoBdOYhPfIiV36nQ5n6siY&X-Amz-Signature=17dd6aeb26bd46d4aae44a6401d8d7c9856b91b82c6efed02c1156e6314a1ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

