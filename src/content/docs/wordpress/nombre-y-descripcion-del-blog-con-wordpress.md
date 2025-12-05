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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3THANC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp7iHSeS7ewVq%2FdOQaCkUgxF8Sag5gEFOlgqWPUhEXvAiBrE66p11QhnpXSES1zh9u4%2BNhiRx8PJv9DW8QT7mz3aSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWrbSMn6jAwbb5yWrKtwDaMiZFno5Gmor39rkgPbwShJrORTBwWJfu4af4GzfXwI6EbL5vYI7x2%2BVydw%2F1vZDjef7Y5QmvfNnu0DGKk7BJUGP%2BoCGvM8QFdQ2jqMkmC5sshJ5oGAmhsvLmY%2FxmsekbA4h8j6lt%2Bc3B8b3j5JU%2BQdL%2B%2FiX18Fa4B1ZMy%2B1ht6fxf%2FIE55RbCyJof9Q2PQz2RE7%2FotGcU1G02eYPHDF1QiNb49tkcGS%2BV%2Bl3XAHlEX0b7elxyr27Gx35YtGZHGhoM2tZABHFAbNYxCccTLWLq%2F0q5%2FGjEgteo7OCmb9vSUW8PSc%2BvbiUXjyM%2FqiUeeI8WBwppIAdhJdu0QXmj6SOpjqeLLYV8CXnLov9xuGNrAEFTd9DyPOnpnpbCPa6cklEozVx9T4uyqUOJKAIShxLuCBsM4ahslOJX9m35gR1PN8q1bXoT4HVJ48KSWtoxwMiWv2DGfGXXWn%2FPb2iU7%2B82%2F4OXlmutR%2F%2FyR49hKZWKLAaReCsyPNmlWiNX7r2fQf%2BeO%2Bl6ctFskXJPxwQoC6Wuiglt%2FuUHxgjUs5G5kkGC4THpdph%2BG%2BZZ%2Bi4YcsvfVrrCuPbHd4wQqvp92e2xHqbcar728k9bn%2BQ%2Bff8NG7OkE14NJ4bFNmfRol73cwtb%2FKyQY6pgEfUDmOM65CNSuGUJXW2EMMTC9PVacGh7EouiisFwYaLm1Wou3pJ4bRaWK8kL1LH915iNjtVe%2F3kEc3bqlCyEnEYeoBh8X8G%2FDz0ZaNzeid4TpCpEVlDmOCHdnjniSgxz%2FtX1VlJc6asmoffHqeiezuh82p1koQw2TiCJE4UcVKn6Fr6rymQQITDJ5z5lQWRJD7BficUt%2B4OAVlgjF0V%2B8Zk2SgABx0&X-Amz-Signature=2daba315ec817cc80d4239aef407207604a62c80e76ff5f5ce37ffcc8780dcf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

