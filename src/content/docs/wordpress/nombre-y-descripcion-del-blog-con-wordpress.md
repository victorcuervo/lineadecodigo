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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ3QWY6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGa%2Ft40tbNptnRV%2FZDjNudOGXvUKocjWMgFP3s5Yo1eQIgUPMi7ApBuFMbItWvb%2BrebyHRt0TH9hpB1tQM8PW1yMEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIEyg5HX%2F67RYp0oNSrcAzxwoQjRiYXHFSjniR2x5oTLc2z%2BtGgKB6%2B%2Bi4w2OePAYJ9B%2Bz7RgFWANi5KVEMmeapuYE6HW5W5dV9wp%2FW75fOW%2BOJ%2FevN7LXAOGpPXjCY3343xOM75S%2FtTvoa1u75d6MMvxhr%2BCYePu8wj6DZrlJy1kiYDTCBMYuuJfH8VifpqX2jirfldAlrEcP0Sax9WJUudVWg0AroZicGPnXZs4Zt86nJsfbfTQAhqZfDwa3ukv2UCD8y70xBZm7FU5SXMQZ4h4vizr12L%2F6jGbIWOSge%2FXkryaTMGXn%2ByaYU2kOPyRuqb5f2GvDqhnWfHpAgteTfR6mysTKUl7y8Nr2Lc7XOG1ng6f96J5MIIQACPgWtih2uY2xqimETQYYTi%2BhC3TQ9pYTu3Ma3C%2B2kGieb%2FlgUEqOQjs9GL%2BPtwQZmRPxFh9lsmPGI16VkcAZ9KlnTCq1Il1TqdgMNbTc6C8%2BDGAsCZL080kW41CaJAHE2RfDF5VkBGQP1wDoJ9Jzad4YTepkxfxGuXnrgV8AWV6UtykEHij1clrEFGFgzKYyraLMQ2ryWN48J1oV9WWSaSKhWKt8SIONuN%2BAY6HI7Z%2FFyAl6swjLbag0cgu%2BE%2FvPG%2FCckw88RGZkerm4F66fuoMLb1y8kGOqUBNZg8QIb4pP1X9nBh0Q2K9%2F6RthV7TP7QVdCz%2B%2BaCvXQ28baDw5kYBUAHBYwss%2B5hgAy3rak1SAjV7fcCpNYx1Bl9xYrxC%2Fk%2FQxfG%2FzUCY5FRe3GRhrRtJqLn1Myg%2B4XP20c9x4WeVLTaHxW67fE6kIKY3HbfOqwd2AoCXUX4faAhRw%2BOdJUUyPWq8cyrNkQH2lhQ1GhpjiE6NLlZ3XCdZjZeCHR9&X-Amz-Signature=64be201ed94760d3425ca5179c0c6ba0c52508d0494e15011d2b2dbee5672e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

