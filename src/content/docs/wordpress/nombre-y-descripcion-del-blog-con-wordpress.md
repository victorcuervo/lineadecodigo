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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PREBW4D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICulZ2OCi95rO4fdAunkEz6%2BQPtTi63IbEOg0Nm0nzywAiBkaED4iNghyc%2BG9miDkbVcdU%2FXxP5PhqqXcPs0lsdU3Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMb26l0yddb3WQSyUrKtwD%2F%2FCTvrdOwkRyOqD2vyk4hbUxEXmZEUlKV3swBYug1FGhfYYoubyuc7xnbOwhjItWIMRKTMKNb0gRt2K5VDxDJLlmB43pDjHw8Y6Eb3LRA1miF%2BD8%2FWwVXxSUVzO1jfvMj27e5320iWyZd9x7iav8rektMRYoge8kScckgn0b6uZ8CJOdlvKQp2xZXww2RHpj%2Fm48uS%2FSgDLT6C9jL4v5WAj3TQRc%2BZkbTWHykip9WNvOOs1q%2BMFSINDITYz2CdHnK6lOtBuHbKIAoHgJNwkuX82Nw%2B0h3jOwoMTUA6Ouj%2FbUKZniYJZcGRNfzqiC14QoSmkgJZaDXKIrBYIIunJz2QiFZVuMO%2FvlxzzoiE47%2Bp7oK9%2FxfMI5Ez7WtXNoyYd50xxPUaGstu4j6n%2BQnfCOEEX13MUjZXAC2gs8qjlUw0ZL6MjH%2FIo%2FFrvrqXsOZxuSqCaPGoilW6DJSLjlBaD4q35yl3YA7hOhjmyOvk%2FNqsFkhE%2BtWttru8iyfQ79MaUetcWs%2B2L77IJ4GeJ9r7%2F6MR5aT8iOHwObyBjUJw5qOyDFnDfjQW%2Bgo3GKGgeUXABee4uCTOPcy%2FmLlmBvNsDuIEZKcCjkZU0iCLYL%2B4H5szi2oT5mWN93%2F8zs6yIwr%2BbFyQY6pgGW4c5A5g5PF%2BJ5IQ0pa2p532wPXMOnpohkaBEAhw%2Bqr6xPaJRRxL3yqJaOe6MKeaAHDPyrJn5yj448PbHMZJmWs10PnZ7vD%2BzZNGgxNmYF3kG%2BS2aT0ZgtBbFKK0MMAZh%2BaoynV%2Fmc8lSHtzXtL68%2B7cPBIOisrli57EqEUA3yFGjiLLDyOJW4g%2BhrvC0smDwqa0AhbfmB28hMB4DyGMSDVnv7Y9d%2F&X-Amz-Signature=815ef1e432290d4e98a1ba020ad78f36b39da0d3e82425fd339940bb9b1b2ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

