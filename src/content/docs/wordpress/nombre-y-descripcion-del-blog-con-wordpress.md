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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T7423X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ8b5mF4yK4FaT27jtn%2BNRLsshXF3J951Cyg%2F9ohXO7AIgWZHjxY1NXYr0EfYHNZWcgzRRL6xppf5QPjdZxE20EOEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGoJ5m3kMQw0njAZHircA8on7vOcLi68dlGwYCHAjqAZbP2aVLyFO%2FBypaL%2B9hsr6xA2OF%2FyCRNtIXyCZFUmpSwCtTwspOsbH3xLI1t8%2BC39Zil9KdT3o6gLlXMh3eqnpfgBFdvJ4bvRm2owQHFXHOnAn%2BRKphCNTPVH6jzzqQ5%2B2rZ85k9%2BTPvQNQIO729oGAXVZehG1%2FbU1EPsYhxSw2cW5vsCL5PgX7zEjs7vEcoBzXXU08ksiEyBv6ZQq%2Frhz6KZG11Kt%2FsGmmZVVjQ8GErUVNNfrQqsl1SeMYdv1ewQhpsblmb331yS5IczRy4uVwzYgz02sbuGeNk3omlRB85K105ARDYoYpxH1zyT%2Bnj1BsgK1v8RTSOVSYs85SL3MhW9h0iO5oQba%2FprPZp0Iv8RnNTWeE3xnnppLJTyc%2FoTldgTS%2Fsmwd0AUL79fMd5OqfWXcwI%2Fw2W7zCFL4lGzJruKIF6RI72EC3o7gKZEA7iCLv8UrRPWsCkYIA8UlRLQg4UJ3DbgRva1rTdQ5OWI51INSfSW0CkkfLIsbnjJhXys75xnafBhe7hpMo8oeM4FCpmxJyLY7URE2a3nG75G0o7SiWlrvi2WE2SMHzgK%2BnPcq3eOkSRVUH%2F3NmaF%2B0ioM0kGSxF0iuj7wclMOOmyckGOqUBfsjKrdhf39JeNmMv9M8%2FvyApgwGDCMEj9O4SClQ2Ud1qG1iTn1QVtjPHLJ02jTaGTz2fQokRtg9hwBnJwWWyp7x32sem2etb0lPdp6G%2FiTPnzvTHRM3Y5MKhCT4MwjVtPaMUS%2B1%2FkzitbXuFRmQ2I%2F69Tr%2Bs8oY64VZd3sXPN2ULO%2B9Rv2flWw%2BSDj81SQa7M8r5bZtsFXZgC%2B3V9ddD8FPcSxzM&X-Amz-Signature=21b4ffd88f0f5789f2d3aa27ca1bc0363bfcb46d110c0d782a59f9492cc6e130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

