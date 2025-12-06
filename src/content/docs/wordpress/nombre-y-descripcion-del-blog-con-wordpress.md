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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5SCKUB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfCns%2BMJmNhfKI2KUkwKDlaexzNrFiwXxer6%2BianxIjAiEA2%2Fq28y1SxeMMXZGRTH5EfWWz7ZBHl3qtlr5iD2t6L%2F4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPy3gwd2%2Bla%2F7X2qpCrcA8tWaO3StI%2BfOtL1JsP5B%2FCLXD%2BTK2pHwEGPZ%2FyR0tv%2FtUPLkw10%2FdhpxyR75wHb4z4U4p1K1zLDhUgtK8ffEBEXfnWOR%2FAS0icIJAuGiNpvsNVY%2Brnqp0eEzMBi5dm2nPDZCuaY%2BYOttAJmMowCYGluZVWolj3x7hwwtGpOOQcl8qtS65kwcdFPIBBbG2Os%2FPqSTTk3FmkoZDgTSyvUUa3atCdNW6%2FqX%2Fl2pVR8q7ynKbDnIJ925lgk93myBf1YLAc1LExp7yxw%2FSCdAwkZ58Nd4FTsZwNKlsZkqH0E67INi%2BYz%2B12v7R0jRV%2F0s8%2BtK%2FxFxS2Ofu9A1ZNQYKH3a6Z4tdGSW8mYtIqbLrZxeYADIWrzrqSQPGV9lD6u6%2Fe9RwqQA1ycoIGqXIGo2ZldQEQqoRZ9N7Nxc3gBgyO3U9bnzQtc8brGVx1oP1ihP4nS%2Bbpy1dXUgtdtHLT93yNrV6x1vo6nlL4lL%2FRBt%2FPXs%2BPJSKsJ%2FaZ3mysBLWy1TySQz86D3vJTOAVIIZ9a%2BPwpTvOsOktV1AiiRN6uTEUj1kDr7vbO%2BOxkR5j4FKlOPZx%2BwXV2ifHQAdrGc43ctk2hSLgq4MhEGw6DMhOuptgrerPfsxRz22WHUKIrAvZ4MPem0MkGOqUB5MeoU1EZVqqNKH7iQ8cP10hs8KDi%2ByR9f0z4TJ4t2%2BAJCSHigqopgaFk%2BaGKeeeUUXTPZA05Zu0ubJk%2BCAaKCZJTLaG35XuuIQljFiCXRU%2BpK7jFOQVrsaf%2Bv1mRFazOGXZz7dDSWM6lZFJAE%2F%2BT6XG4OIPsiUI8sito5ka516mRjHzt%2By5xhOEq%2B9d0R31lcXK2YA2xq8NO5CD%2BdLkBjVpTirQV&X-Amz-Signature=7d2492588b173b5fbfd6b5ca84831d20e29ebb77aad5cde0d85a026701e21b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

