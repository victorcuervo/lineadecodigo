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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPU2KURS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRpPyVE7AmSY9DBpiDvkvJBnLEz1iqBsCW1lC9nttVwAiAVWipViX4nzoM7wbZBfBJpV9LObx2iXlA0xhTLVkMatyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2B%2FKcizaTZ7Qpcm4pKtwD5WsdhstIUSY5iJT8ZlSD347YmmFcQC%2BEB4I0btXS3PgRxDmD5f8mI4oXP%2FfsKK4iPyuZ611NkjwiJ%2BRFehv4q8FCT91otskF%2FyZvu0%2BhrciDM1QhSJEZa637lJ2UvIUEZHON1msIHpURCRNfHzkjrtpdTzUqoXXWq5mdUjt3y0XkzWMhrgaaGUJnM5hlmcA6Wz6zU%2BL935WwlXw%2BphkIX6R7jIc%2B5hsYmXo2GvpWKSv7%2BD4AWCOuJ2CiQccToVkkQpSmuQKMcft%2By%2FcTfLsobqwJJLwAx9WtHFamD7n4ukJB%2FBCC5EESqI9SUFWNXrElK6Mi2pXqY96QNuIaXN8M4k4cP5qCGzovaLk24AWPs5Z547T8cS3RTII2Krpsgh1nnVQ2nXyUTuR%2BG%2FZJHY%2BIDlOvcoaDqnrTcw6XCNQbhQ0%2F5%2Fvbh8yS3pJWz3Efx%2B%2Bnp6JsNy%2Fn1KlZag4jHNI3UfdYnGZFWyztWkj7t2Pp3Y8VIkxrt4kUehG8Qxqu0Adzi7pUxwMSOZXd71ujktdBddbSK2iHBJ5V%2FzLLxVxZaMTMbIfMzy7OfWMSPtuGKkiMBxtRuRALtx9zwf0W7W9ob0xa2L1g9E9ATwq5mlHy5ku45pqT6MFLq4nBKNow3dTKyQY6pgFniWrXTw2n%2BbCdd1OXSQqgXWoV%2BGZyUun2%2B0%2FPPpINmrDe8TvWSbMgg872FCCVb15qVrKfceo0iqiUorJb%2BUrFoHwYLr%2BmE25Sy33YL2o6Ds4jImvCfLPdBcWyo%2Bx1zTMh29dteaFFMwTR3u3uSG4Qx%2B0wAb9QU2YnkmbY7Rwt1IP7ATSAfhTUgjWRw1AxsADQFDOkahUJMFLf7vND%2FGNPDqiKt2Oz&X-Amz-Signature=89ef0be14b7a48a07f0c749af9e9307a5d3f88b62ecab735f13c19869ff6d410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

