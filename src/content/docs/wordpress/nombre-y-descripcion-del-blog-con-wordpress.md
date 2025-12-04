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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKLF4BH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC5%2BsEhz9bPK%2FZZZ07UxYWTifB%2FKdw0q1NPsgWLu0pxpgIgIdaRljwJpga2T%2B0fXWnLBgjdMCvHZOhrGzwEykOHjewq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPaxNkHuNtJ55UahWyrcAxwodYziyEMYHbMKImfn46PSZmHmj9dMzlWcK9FTMOKMD8LwP2qTUaSZ8ynbuQoMhLq8q29Fuj8ZofgZoxXhNxo4wWWq0UVMszd1V%2F4qUeyQ6EHVTAL5lWtScByWWKTG%2FW7qzTxJpYFDeKsfa7GN82n3TZ0GnlbAxYdhIUoiQvnhd7otCl71Iuj94rc3p32iN6lugpdZlbQ%2FKfpHiInwb4U3%2BU0Uv%2F63K8h90xHpfpkUHdrHjmkdWxWOVCzSXNh2tM0CyDqEbNIiyCg9qAw6IiDipVtjAhRZgWB735ux38vaB9D%2F98qkT6cvnCepWA5cWyP%2BzCVhsm2tZcHnU6gzpdGYexonWleWH7y2e0dk%2Bfm5xikUYCF4BoS2h1EomcrcDMFojqWAWKrq1Wpt41wCPb2fW8wN%2BvGG6YA0xg5cePFs43UyYK510bp855SAVaJ8ztHQD0Gp81h%2FRXZwnUEpJ%2FA4N693MCIfyOvqBgxxAfsYf0rH1dS5ObZBiZk%2FPrte6hvOghyVGmEQr9XCzWjCGNTf6rlYRKZfVXXPxxQ68Miq63zcf%2F7aBLV0uCY01wegmUZ8jqDgPnknRW7Aj1czjYCwhIoaTQ3CgA79ok5fPPYtg3EETq1hqSPd86JxMIzoxMkGOqUBrkuX%2FlxgtvHqPhfyIp3ELuyns9NGzkyIEDSJ16Dlw9JCCSyCxiAPD5a8VC9slQn6ZD2kvG0k6a4OjMS06V8NKEO3WjpSad413PxjBi2jdXPO7uVoMbvTmYQQ0f3zpboYw8L3CFzw2OE8hnzYVihd7LwAWef9TIhg0C1Xh3eXhCU6Rm1XJqtStIjzm6Q73iY6q0kJ2%2FbMISA5qhehtZFd6lo1KXyu&X-Amz-Signature=694548981b62a6f3940df62c51fe744684fcd5c25fd82cbbfd1b594533dca48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

