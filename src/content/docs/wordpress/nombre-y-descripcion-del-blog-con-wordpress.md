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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCOCDCI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZHp%2FjObqlWh3r1ETF2Jg7ohGSxjFemWEeA4u8vxu%2FQAiEA%2BSvX%2BoPuvNfRs5BmdWcfgfE9GlLinPh76XA2Sp991BMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPWYZiQ69BnXZatxfircA8RDTrVmKGs%2BSJYrVSaX0CQCw55ZWCxtzKI3fj1Dt2tZ%2BNnq6XrAO0qSHnRRQ%2BzRoYT7%2Fay5yp3dHlpRXFZO2AD2sxRbwWQ36sg%2BhXgaa8J%2BscaCcDHpXn367Au4wqbNI%2BFGkvUSjLEiUFVNJlCg0OHQ3bH%2B%2FifT97YemSJ0ZK1Fe%2BRIj%2BbAcKXPzmEbIPh1OJKjQYLETDwmqGk5L11Cwpjy4KG3srXDsIVdwGpNJnCZbAr7VA7kiUDPq5NeLsQNX7%2Bpp6TcMQLdZIuepiEVOEkAmZMyRQewnCAXU09WXnKojIBidd5tOO66qczclVjiOz233MwpxHIpUiVukwuThvGI78vvrN8ztfYKAVcOJdAzxvQfbZFuENRBFu%2BzE%2BWv5V1%2Bg67nzmwkWDMOOqouLOJTMJp65t7uZMZ%2FFpiwesq7Z1zhNw2ZKzG9m0jWeHd3S47jYFuy1vBrddrmsqxwx3eLDS%2BPoQfyAq8fO%2BiulCxb0DzAZUnC1zTTjrhKsLaMEYU%2FgFpQUxPIHHoiXQtmb8xXDg%2FJoY9GR8i2D22NreD3Qlk8vWgAFYhlHd22LJGcIT%2Bizm7rRg%2ByPD%2FTMy8Ygw0upQq%2Fe%2BgOh%2F8zWq0YJV6%2FffwV%2FRdn3GwAB%2FIrMLP9zskGOqUBYwst%2FBXgqHSqix4kryqpSY3mmf0rFoYrtVzX2j%2BV7eo%2FbWtBjZb8kET5ZCkZiIfk%2FnOk%2BOJrrBqibtoaOXItwWGzd68gzaux%2FJz7k2YOxzMIMB1II%2BoIc9krpicA5rINbOvQaHbapeuelYidx2byPsgYMnJvDO4rmyZLVWTm9SBrkzLkXedPe3dizfJT%2BWriKZuKYjL%2BDj6DlKqFeETUkL9r92I8&X-Amz-Signature=c955b8dd0ccb3b0a9a95b5af244b62ac829aa5df71d5b629cefabef9a1747556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

