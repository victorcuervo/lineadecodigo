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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWLIQO5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDxbN%2F%2FlI3ax9KWpcKRIiHcFWi%2FC%2BZNmdGb9XuRkZAkjQIhAOYJ%2F%2BvyVu%2FMEynfrllksVpnmTItnfeX7oCsrB5SCXbwKv8DCDYQABoMNjM3NDIzMTgzODA1IgxHTscw4Lg%2FA5beCY8q3AOJbPHBamcpne%2BXP1SkoRToRMjdJMo%2FyY%2FAm5sUApKhFKw%2B50SRDeIK3cT79LlK5i5zNAGI%2BVtXFIGloNUMbNeKHEm8B6J5AxExUA1XziSn2d3TAAh%2B3agoF6TWdmpS6KdyaUSPV7B88qBCbe7N2mML%2BoOALyXPJEya9THoqbP%2Btt5PgkZwnsle%2Bt7JJxuZPTzscu2G9GaDg%2BRWQKxivQKR0QLSjVd5s4qMd%2B1kbYLeh%2Bkc4x6ElemsOZewKi8TU78gFzeNSMB9GpYAYof9cqxeLhhSv8aQZv9gAcONMuSHnoB%2BiZFzxnIHkRE3SK1LOixYRKoAl9vHNF1jDk571DZbyxHO9LEEYFCYxInq76dw3ETJOboOcW9AWWdv%2FUQCeQfAZc80JbHqEe%2FzMv%2FAVFZY%2FGSWWaYKFR2UY%2FmmcYGx64rZXKgI8rHJn3g2J4UkGlSkvF1UKJjNYRIUTi3bNh5YnI1h0bYMLOIRi7uTxa1hK%2BmZerOGbBbikoICLzIdeUU5rsstkVECrzlv6XAuew%2FRWRab4bukBCDuBbz1bfcrm0bp4LSyitBcdgI0uvjgtJL2y%2Bx7%2BruSXu9KaLJT6x1FO0g8stlkr%2BBb9x%2FRuc9xT%2Bhbd0wZIcCYfFWxcjCyvsLJBjqkASnF8h4tWrw8wpzSv7XlkUn4tjPLMA3ByTO3GpbWnqqAx1olA8dTKmljBK5kJrphxSy3pwpNyaQINSYtg3zSz9YgTVFL4BjALYEqEVTloiOj0bYCD53yE%2FMgkUKhe7UVPHh%2Fh7YnVCtnnBGTGZ0bXUky0HlhMpJcAAFvHMhs3BPz6pa5tHB1iqJ9U18RYEi0frQEJdNGq1i2X4sbFXSXUNc2ONIf&X-Amz-Signature=83828c3c1b17a7a2aca798c9836c25aff2d3267c8cb0ff7bba968d48e6bf115f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

