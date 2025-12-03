---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2SHX3N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCdEQ3kQEIyo%2FoXtPH8fBkJb%2BBxy82%2BfORIWu8i1de%2FRAIgRq1UgTr3akSZX5puGOQh9fNFJ6ylX4D4FYk6WLsMbXAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKHNN1zeM9HqbxlnRSrcAzdSgmx3424ZR%2FA9dhIQcNcT9zpmX6k341wqkJDNw8CIcbrcoDKCdi7zCW%2FkSejIi2LY6GaABtKoElqZ6mn1nnioexRYACP9whRLRtQkWA0fMb3b%2F%2BRAxF725uALCqBLq%2BtbO8jzfvRNgYbUlVihMqidemb0jL7ODrIhjJWMYddctNwJNbU7Lrgge1BbLmvhCQqw8Wg0vupnZ0Dh3v9AXCoR24%2BXrhj4CjKqZhOS4I9uywgYoQcRaFW%2B54O0o%2BNivf9f5rqHrpdjyLVGWXQby87%2F2WkVPSkUm0TqRUY2imOuwXZPzhS1belx0YkhVptHUtduvOMG0UUd%2BwWcjuHAzKN33Cm%2FxXewh7VJQcH%2BFchYyakx9q3rjgHzWbiMHv7v8Sw1AThyVnSB07lCRN1vDyhbxG1%2Fhbxsc64WyrZp9MOzXkUYLWgYd0bTwcNo71DY889w%2Bcs8hk%2BI0s7cfuYForXuIR1v4XZZRi3LR3l2bHUQPXF0cTr0xWdsKlR%2BjPcOO6lbIF1sMNYbsGITvdD0C1VBUh3HKIZOriU%2BJRnPsZ3WC5IgCWHkvQpSLFyS2GanZ%2BCZeRWGAs4dKHwnh0mFVHu1JDK9q6KIAZA097JE06HiUfsUB6FoMFlUujv0MOe9wskGOqUBhOJuy514ySLNOK%2Bv9kx9GT%2BrPziaWVOB6siIqnHZ00tVGyey6Lm%2FvkO2R0rY9rkwvOM3B6gwLz%2B19pI8BYy8D8TD%2B%2Bk6un98UMv%2FYIVKJUNl8x5UoD1g0GiBYsECpvsaRN%2BN6W0X4zgFlsFsfvC%2Fz5tWBjWZM4fYV0Iaxn2YWqqRD128cLoQcP3DgF3ZGiLc9icktSEb%2BhvAzZ9lXlRhaXiT3Nn3&X-Amz-Signature=806f083badb0534e449cb344427d55143ec29af546adf7f95c843875dcf086fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

