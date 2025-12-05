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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSMXMTU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYZcPQIKlDRu%2FxfKqb4%2FU8G5D47MN7BRXqyQHtG1b8aAIgA4Bl7HRy%2BLfaWvHE%2FKgXx6bw29UYHZHzZwJmrCv4Yxsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAucseOMLVu4ND0CIircA5g3Fqye%2BAJ4BvVRXLJKXjZ3DJSHkxozgi3MIC%2FMLTehOxw03hqWTXHches7sPHeqSA8m6efooaC56RK88XOVKDCX7d%2F%2FTze%2FKSMm92mdvNdC3vFRye%2FllCX68E06njAk3WSUXXlrL0%2BX30qV%2Fqw%2FG2Ud1aFyuDuerUw%2B05mae8TnwIdhfP2SKm%2BhyiK8KoVroOPnq4LCTTHI9l%2B%2Bwdol1OHx1fCU0uPiT8koKV4An5GjY4OCy2DEnVOchJ3T5el9NNG%2Be61nBYeJq9rganhJEXDSnLVUIIZ8fa1WAwikb4nBXh0wkDlh28rAGZB8N5k2WJY9EKFdUjjFpuK4i5z24mAVBK3n2ExeDW3Q6JnnBRu2pEwYw5kwN8kPvsUM6yVVJwGVbkaqRoLCsyX7905tzJjkNbNuG%2Bid2Rh2xB%2BdEYIY07iXDzmvMecmEsidyJ6VxeDaSHflsnp9%2F0UdNVt6eBndY1IKOdBDP%2FkXYAzCERWhXhSu72Pmdt1jHQ%2BdpiDr2QHNVIUxQLL3dFhqaa9M%2FY3ZM7KVhfgPx9BZ5WlPmHz4ivlS5%2FoKcHKGuR5LRDAK39UTI8mE4YZt5B%2BOa0iXXzGBVCkavanWrbMs4za9ONbaiJxt%2FzDlfA4EttBMIfIyskGOqUB1LqkvaQkfLsIOC4Af8D9hy4kPTTeXzRnLi5eJIQ4PBvhCco%2FK7qQWJrL2ppc%2Bf5wOgwDgyvRVzSxDH%2BBH%2FFQ1heu4h6A9HaeSHfd9kSltp1H%2BSu5F3UAz4jM6NWi3NU1si4bDK3vW3NZgcKodUzDFglKc%2B2uMtq9XTOtU4lufEVZ2r8oLzEV5uOt4UvYc2WDyQGavZFKpBm27dhKLXDYBaBFTuHe&X-Amz-Signature=d30b7deb1767284b418ff5107657ddcde402c53172cda5de284a5072a4e8b9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

