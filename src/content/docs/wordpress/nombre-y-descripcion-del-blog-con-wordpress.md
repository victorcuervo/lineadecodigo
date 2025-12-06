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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYJRG7C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWiACiEQbZ4eAQ%2BnqSH4aZWhHcC%2FxF2qh53aFdUMs35QIgd7%2B5RB81TgEHjDb7NkyuaXnHwcpUh0JPF3zBEW653OIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHRrAVjHQ3FSAImW8SrcA8SQ7bOGbFGo%2FVgQWdaaFqpsHb0chQ0cbkBCSUZXafobOzZptUDeYkAroT%2BKsYaXTG8%2FiuPjeXCSBun3L9MSwhLwyqjwWqbQLwC%2B4R4z1PBN2F4gsrQ6Z8P8fgOIsUrSDwm6uj%2Fm7dkg5NSchBRZ81KaySvWsD5Mengi4EcdNNUw06KCrfqpKk6zAt%2FN0ApAcGOsALhlz097BgBIcPC3SshO%2F2odsEu5MrzQWz6gPvZuMARu93kS%2FzXBBA9xNTack8%2FzCGS3A9f8eORsa6FDQils2YStRLHAoz3aiNN0O3VeI%2F4uj6iRLWjLm6qcSa9OZJ3sXcoLzdW4tkJk1jRWyDA6Xo79ZokprMDaygtFraqQ4%2BSA0cjn%2BTAxGcJW%2BfmKqvk5iperFsnW7axJbOIby2GZ1ro%2Fe8%2Bkg3FA7aP5rN0h%2BQ9tQAXMiCVdCXdk7cpamSSXnLpoJI%2Bpd2QMTcbjlvM%2BSQ2FDr9xKc0pU%2BDhUopmcb%2B7%2Fh7cBBwkDYoAjpK4UVPuGnMWU1gDW67PXCmgBHkievyP%2F%2FZ28lchzr3aIwctMu1FT25y0xqWm2wYHePynySpTP7gjJUx4BMDDu4SNf%2BuLSzC0JfTCfb2vzy4iD6S1FFaI71HD59Zpe%2BTMJ7ezskGOqUB14p6tjxs%2B254ZEW1SoWXzbUTd8%2FrJuAckTPg4ZJ%2F%2FoYeBuz6TmqKBR5dtNkF56R%2FILXMEcSWIH%2Byu94eMTaqz06YmN3XG6y213J1q9ZzqEsjL9a5jMKwjv6Mr8HgOeYDEkpCx%2BxPgWyEz8yExbST%2FlLy1wNcTfEmw5iGJzmMsUpEUHuxGCQ8wPNDR%2F%2FTuqvP2ikzfhk%2FpN88ZMgZQgKhaMHW6G9a&X-Amz-Signature=73213616ba00622e11a11ce1c2ed200ec5ab154ea9127d66e75970877a550f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

