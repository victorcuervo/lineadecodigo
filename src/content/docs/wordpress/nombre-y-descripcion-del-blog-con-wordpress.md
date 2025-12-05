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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LP3A4NU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2BBvD4C2SDV0%2Bioevx21U6ZzLhYba7VqW%2FqGQHE0p7QIhAOIX7yCKOWVIxhzqyOHKWktDJiKn6487VSYJmUYQ5o4jKv8DCGYQABoMNjM3NDIzMTgzODA1IgxJl%2BSATGYUn%2B3iXF8q3AP%2FUoa0CrMtEwMSznK7%2B9oE43xw7AiiDTZqGr%2BxDgAJNCfS5Ik%2BFJHVDGRl7ow5wa3vmo1QVA3T7%2FSDMCAP9aMiQ9TmdTkJ0t50OFXqtBw5NTBaKx4ZD9UFalxDmF0inI0tENVRBxzIMBXZ4FJWA%2BCEame6%2Bvnp875Lf0faAEKj%2FowLMI2pwy2V2G7KDd8gv49NG0UDlKCGLW0D0j0NGtJfU1F41AU6tteaYWHNKDaaTB4em1m7uKf3FyRALTIFUTBfRkOcjr1gLSNr7pSjkTFY1knmVR9Cz24DeHKCUkmCIPdj%2FwLu6WlVIjANHKWFGctJ8viO%2Bee163SDnHc8tLKi6KdhAnKm%2Fhvw30Ls9sLRU4ETwUGsyRTlQKL5UyyaonNJI7KsxO81w%2BxQ9iejixKavAUQve9JxTnM4bWdAIwaUN0KesOAKPBowWJlEKVphTM2AE0L0VcCGlovcJEsmMcOzt5Y38eklbCVIfj6SEXt8nyNrEu%2Fqv7ebH53pee%2BHdD%2FMbGmMvVVsif8B54oBUZD2xbJ%2BcO3tQvJOkMGlGBJ0XnSSWaZs1%2FDG%2FMUB%2FbOORz9Na%2B0eB3o06MElEGg3DGv2RZxEA1Xfqunx8pOuwqVtKz4dBHtJlIzrGGOQjDdjc3JBjqkAfVDak%2Fsnoyw6mOxFd%2FLGdZVnEopIQRzpgM7UQHOicnRPbJJb3W0%2BgJVhVZDyG53yHv69N0k6Nj3Vgg5v%2F0nQ%2BK94EF%2FMEwAaK8%2B68dAkPqv6egnsJ8cksFJSEYPbb8zAJKNTiHlwP82mZD5uODGf98%2BlMKhKpF%2BjLkrnCiF8PcL9%2B2M3XICz6OW53GGrgOBq4SciU6XLLUpBLEGVSKinwhovDTF&X-Amz-Signature=b7de1a95c41b5a6f7d2bdf35e0f9e28b7a836ab8cca2c24c0b575694d734847b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

