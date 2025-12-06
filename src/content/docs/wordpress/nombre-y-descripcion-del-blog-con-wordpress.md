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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5PCZ3B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHctDqymTRk4q5yRn5UerSxg4RmkvG07aXI6LJgd7fWCAiEA9nZ7FfwK%2BKNBF4XfAz6BNSB9JcLG840doe4e6smg9%2Fsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIqbQ%2FjJPzUpG3BGZSrcA2uzl6ebx2RSWPkgneq9fuYUEyjNj%2BdyAKf6TvOy8%2BC%2F6ZqBN6%2FoS4XHFMxcmDqV3kj6MPfN1OJtRpFgkIxHUqCdiiXjU%2FA8Z7BoGj93POTZH9dBkBUAnW0J83jTfBDjA4xmZGv34UrVefujlNjvrG0jk%2F6javuRXHkmAjv1H5JmqzQhUFE9xXnrnNyK7kmNqGGensb00FJjiaamo4%2BE9w7nkoE5flEnPWZPd8YcjaSleFfBMrh0wXF%2Bp9ra0YfuF8z5D49qp89hS369Cf%2BzXY1SENGu2FnmvGNjQniUGUth5qPUcU%2F5LTX5y1u3nLZCalseuSS3ZLWokF6NZzz%2Btm5wRFTVPg9B7403vRJ0wrlteef6G5VJafZW2JcY9DIS%2FRI26Dfmc2rrry%2BRqoGXTOYw07hiL4QXDINNRRmBeeFTS2bdqot%2BkFXy2SgJ1xQHZrq6X6hPcaD9A%2Bbw0CtLacVZSfO4lB%2BpxtNVnlnymBvrIGPFzDK6fTiXzjufj0Um9xKfNf4h1egtB6bcZTWdYtwVNqJB%2FR1v%2BM96pPCMeQU%2FhzPpqM0xK22CgEHwzFAfH2pADAwRKP1AFEu1PjXCXhipXlAXU%2FbYHM2ZB9Z%2BqQI4raOPv7RRyUaBWUiOML6ez8kGOqUBjX%2FtKJRtf16IX3K4YvFflt7nBiLxH52lS1C1OaS0EyZxUUMno7J%2BVhhHUxMZUWxkb8bZxureBhTmkgZt0PasREVu7Ow13vus0gsoH3J6bU%2F9kuGf73g%2FXeGetZr6khHY0K2UHSy%2FtLy%2FJx0z7NmuiT3hUbrXSJLmK4N%2FXw4IYtZWrK8pBuHX3VJdgo0eKDAWxJBIGRGeySmvwB1xQXa1oA1Jt%2FdB&X-Amz-Signature=ea289bc658e629c9ed6ea3b0c54fb2a8b73d72070ae97bc4f9c8dc2d7aaba5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

