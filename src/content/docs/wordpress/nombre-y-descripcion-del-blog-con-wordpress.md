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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI44TXH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCdfHnqGDmh%2Fk0y%2FqZYD3P67IV%2BlcAH801rG%2F%2FY3ikPAiEAmP%2BeftJtPNlT%2FOKpG4ZFq15mQ3pqiu0cXruu2XOeEJkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMF8HWCtwtsDpc%2BAtCrcA%2Fnc1DXsXHmMBkC4Zy6aRAr7Qb6qJS7IyuCbU9vnQ0%2FM9rS48J9l7I2yn0%2BcCTX21J4zwJmhPT5q2Np7KN30k%2FX6o7OphVIhniDkvTS4S%2FLBjBmqK9e0O824Sk3yjeDdxOz3TTdh2wjADUbWEgY1iYnoGYh9zBm5dx%2Fkb85nYChm1tmNySM1AShlX%2BsNwaAeeE%2BGJiCOvfaTo3MrSmiknDp73x76a27AYuLAkHi0KphzIy%2BqbygyEjPYHOenp7yQODCfwq9wWyOm8RhQwM3gznFs1yVdjirdC8pNUkZmBzyA1nX7cHL9aBJDPvFhNgYSkwHuRSUYIX9E7f%2FoAjI5ibIMKlb5OwQXv5UZqy1HELWeC5HNL7oLgbtWPlaLJOegzUNmsf%2B5MOIwt4SqR7kwJ5%2BPcGoMQd%2FUkaae5VUCk9TorXIXhDm3KPVfQ%2FDqG3QFlbrfgqi%2FMBiulEszCfj%2BkHqBlmq5JVRXZPqpcJFeZSZ%2BEmvmHT%2FTc0ms8QPFAhNG899ac19oGqw9DrZrng4DQVgdBm3ztr4ufPG9qF%2B7gq5g%2Fqk36q%2FDK3ZnWAmOdQqH%2FPDogHMTkwoMwKAB%2FhdetZI%2BH9SijQJJ2UCmgUZbPqO%2BzcXTntYhbVt19U3KMLvDzskGOqUBK9UX0HKBW%2Ft9MYkBJjMzLBefdfRby%2FzJVJgupNnnXv4LxX3MAmqgwbQl9NsH8pYfqu1bQ75e6Ugse1S2Z6p6vCrv4Vu7qQGDcyFZvRTFX%2B2FUHErt2UqDlLghEO8J2qd3ABt7io6c4U83VuMYhHubeBXWoXk4jWDX3Vz6eg9%2B9gmRFcOLS2eH0P%2BOnMvq5d1nH%2Buh%2BLiWDJTngRXlE7MCvamuwKS&X-Amz-Signature=c05817e6e1c3e38e0267771a3a2343bbce691fa52636ecfd021ff7178d135dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

