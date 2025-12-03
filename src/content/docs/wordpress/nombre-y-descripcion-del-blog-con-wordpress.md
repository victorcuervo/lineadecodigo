---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPYH5KU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDS2GlmuZYuH%2F2ogJaPu1czJFDxSMWxiFxYUZraZVuIEgIgfHxKAGqAhGDMGwDzngVU%2Fcec4pC9BLIaGdT9JP1sHwcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPe99GK8t5MJ%2BBwHOCrcA1yam2%2FBk%2F8YMUpX9pbIE5fWoUgHtOXKay88%2FFjtEPgQ4WcrT4VovSOl4Na5JsWyEPyU%2Fx0BKtvcDt6AGsEL6SGJ3tXCUYVmmUqO3QNNb1w2DPauoL1shjLIji6kJE2LAXZL4szR20oK2X7T8ol8IPwQzetXyhFCzO6jhqZGCmpiHXda70vuRulkKnNn1eAjp4DmiaANsv%2FzXVm4OQJaEN%2Bhy9U7io0MENwvVF%2FcNU2HKuaMvF%2Ba9OeAfv2inJo0Js1DlZ%2BmEJjLNRVBL4fKSLBUpJmCR%2FfWwmfzj%2F7A41p%2F76QEzN5PC01K%2BxRyorrdIh9BuJHVqcEQGCYiD3K%2FuD2arZw3bOxjzAk%2FMCLo0AQmVv3kQTUHK6TYhTdDbGUvNFiUis0RPN5XD0AFZ84ayyW0GdtcfG5P5Xr%2Bgy6A4sde6SHeaV764XYJcefh0o%2FGYvDgW6orV%2FB303vHICm%2B2zq74JdFjZ3eSUadAMh2Oox6%2FFqr1pVdk2tLyV7tMEC8n%2FLzf%2FsdanPiwg4xXyq5zj08rR5GfLcd5XsuubC63bVObUTobwDb02SGADlzCZwd94E6mxsTUaa%2FGEdqRA7Qg3jI%2BAXQRGOuMHdQTejBlxzFwVxMuM0gS5BLw3t0MMv4wskGOqUBS0TRJk5AnkbpZg1seemVE9FRXvQ%2FMlQKFkF9lrWwcV53QsSMESnUe8lU55MXRTD%2BHn%2BoQobWO3fhSZgdjAwzVVyiUAYV3wUieXTaY7CIzYOf9iev%2FmZc44Ec1zPCrHEajqQ%2FQcQ5RlwYe8SDYRYp%2FLF%2FeOCDHoX66S%2BUhFnaOcoMbOhcW2t4LYihpCqzelpt7xmRyZOQbNX9Fjxax8gbTTyFb1J6&X-Amz-Signature=d277945d32f3a5e87fcc36bb7b1c8f64b8eb6832cc95c04926f23745986803b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

