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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMCU4GV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUXRCT5eKFiV%2F%2B7x56pCc1D9yJzKKlbr%2BDs4s7ZYW1PAiBLp9bsMT5GH6Z18lRgoc%2FN2O5ZK3y8qyJC7HQFxvR7WSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMBZrolGS9%2FeeLYp6%2BKtwDWzaxUB%2Bf4m1ziERshI%2ByqWct7L%2FGnfEdVvwFIF6oGMG0vaEOJBwnQYzKYuaxAuorg0%2FqVm7EmOjmbgMIna4Gh92KxfjOcBT%2B36zs%2FF67%2FxG61K9yD4tG1c%2BjO%2FJAETXr9bhp2a2MaDm%2FApWzYFIWzN5Y%2BbqUXJVHEuskQwnH2%2Foj1Drl9ApWYePTFFdCIZJkPDk%2FVJhFbZHsMhSRRBjXH7L102dKb%2BG50OcNmQMIcbuLYtHythtZa8iYucgG3yJDJExkkF%2BtslRRnVyjTAXlrFVqYvJqVUBbJGd90a72Qk%2BctcIs7Ul%2BA6EPE8rzl9%2FG55QuZGpJbL9jhdC%2B9jEAFFAeJrIj%2FSPn%2BFFsfiDMWlALPBetEjnZ9yExqQfZVWy9%2BDCdDlQvUVV2mbEoRFQzolujDK9VA57P1Fe7JxWJnnIBbhFytMrZ5J1514WevRZB4fBu5GIK5g8Hb1zrXCeQtLUOM4jLhbFsll6agiIl3H4bsl0ISEEQGvgksUvQdLOqfCkG1JWmBUxZ2iSkecLvNGc2WgWzuboQxht5YCO4pxHDYeEz7ugyAZ9gmmTUb0BzJ3xa42oxi3mtKZ5KFJfQ4b3HR%2BvVYwFn0nMr8kXdxuVyjM3TJ7T%2Fk1UW1WgwlMbRyQY6pgHdnzsyREzYJ%2BuYOF9WnEgRhAMwWDDM0wkEJkKmpUKloIfuQ4jakY7QT%2Ft9n61onHsRdb2O7E4hML6BEyhgY3Ei07rZ922J97NiwbzQp%2FJ54%2BU7cKVkii%2FNwciA8rEHI6jyqEewrAkf9HTVAN47j5OLx7%2BNn5l%2F0w0lGpWK%2FhvpW9LjxOXzPHZh130EiSsAIatX1EhC6DJlS0Rj5Gpmb7qi1r8yr1bw&X-Amz-Signature=a96ffcd9d60dad268fd9ce31c9673bc6ed3b67c952d927d4033e03eefec16504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

