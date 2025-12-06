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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R36HC6U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZ3lkSgsbBXABwDAvEHuUBRQEwNFkAIFDkDc%2BofGhGwIgLksFT6gjeaAmA4qmOFfnx6JkoGSqBClhTNrwK9TIb%2Bcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL1eAbxUFNaxLEw48yrcAwqmYU%2BfNjmW6AqWkW5xt3%2FSZLoWOklwBvT9HhdPhKdUVCO1Gz3w8o%2FQCBhW8W85aFNbo0DhY8sTFBXffPHDfTu2sODFd%2FixwVFpuXYIqbJ9IWJ%2F3sQRU%2FwbKDweuuFpKU6hsKXCncv%2FfaXjpNVhQwV8XCVVcfwQ8kymQS5DSpJSsGWP8E4HAxvsP5Zyq8lRSNm%2F37krEjxQsWbgIfctsKCYRdDK%2B2NpzILE2btMb2OkXvNm1yF5F1zjetZKFhp9DkQ%2F%2By89HihxsVXkZH10YdVp6m4u7ZojTBWFiFy1PFiYD3%2FC8Fj1%2Bw%2F%2FzOLa92rADvbrT4s7P5AX6cAxmJZzmmxg8ZoMGb9Pe84S46a7cdEGt%2F2qRpHdV5Bm552ZC67%2Bb0Y9VEUGu3UI2pShe27S8PXaiN7%2FLL%2BmNqCesjBxJLc%2F4jf2z7ZJ3AQVz6QoshZoaghvOChA9roJjcV9%2FJNdBzWEvqtd40vibIy9i%2BO8Y37ImOQp6nB1KPfgzmb5AXzfpPrf63uViCYRvWUX6hAn7aI5%2FQMFP28%2BjCA4JQywnQslW48R4WUotExj68cWeDf25N6OLiy5TUeE0hVuBu%2BkMxbOMuBOfXESf0lSg%2FtYxcxyJP%2B7Lfg98VwGHf9gMPKp0ckGOqUBk3q4PhPwikUWcNidxWh%2Fsc89pfus0DfLrWwlfoz%2FVKflXIPw23oBJZpnLf4t2vxQL94xGNP05lxl26waTqHTp2dqi5BR%2FtuAa%2BbQDW68WC1IX4qEeLl0wozgpiWf0VFgQ%2F7iDZ5g06FoV3YVQ1Sy8cM2AcaB7SAxsZ8gnGcXH1yow0v5ggRumjZMkfr1%2FNfsGTA0SHcW5b%2FGpA8Y8wyUdKoqLMRl&X-Amz-Signature=05a37c746310518e8069162ee6268459879d5860d379a61a29a61ed5c5d4ba72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

