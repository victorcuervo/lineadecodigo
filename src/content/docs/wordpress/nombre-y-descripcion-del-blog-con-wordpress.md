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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCT5OBM4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfc1Q6000o4YJ0PZOstDPc4n4ez0Dek5LRJZzoYXaFqAiAITk9dentxyvCAM%2BZcguN%2BZmOsWBH0NF1k%2F%2BnMERjn6Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIBn%2BibQ2WX5g1ohmKtwDR5oKy4ysGtVFpO6ZS1ubKR2GITmJawEv%2F1%2Fto303YPMbZSTiwm5hv2JtQOO9Cf7yhDWVJ5MEgT5naKRy7EF1lxhwUj5UeBEk%2BfEL4eu%2BZoQt0f6nfboy0Exwh3Z1yb0853uaz0kSd6dv%2BvGMpQMhKF%2BvR3MG71Wk0lM1U3PQrDuFy2pLSoq1uB%2F%2FVueFs0OMriRp%2FEkMXt%2F%2B3L8c%2BC6S56t7%2BEWEY%2B1JsqtmfZ09sNzPja48cEQAfR%2FbWayg7ZGbfBS4eDo06tXIc2MOOeHXSJndjajgNaBBYumsYGQReawV1O5n8Z55Qt3BikyeAt6XgVxSOqkK8B%2BkhTRo6MLyqGl4Y%2BDB3iB72al0Gd52086lLj6rSIt%2FJJmYMLE1wgS8OwkkFg%2FWyQGTdvCz4baKTzyTWw5HdhD4NhWJPknmqTZSA%2Br8%2FeD49XeYs1QbKuBdulqHnjcn8BxbrVwDLXXUSGMm0bAu0fHHjje4qe4y7BcsU560Wn0BE0juDSlLD9T%2FkGO3%2F09%2F6guJM2IBc%2BSLLsTmjyEPG4XIKRt9cayBcgvik7Xqi2GNpQ5lZE11abgK9Az6%2BhRlg5bnaxfOabYSvuU%2B1Gz871kTXl9D8La9Mus0wpQgpABaF%2B4QZ0cwuInQyQY6pgF9qgqkfxd8tLmjhtZXr6WB1hw7Om6rKNsdVIqEbSJ09DPYAacLyVFVhs0tfpEiWy04c%2BUxzMJXLYEsZT1wOp2M3JIuVNEZvotId23bHzrv0pks3ezFhAS57mFZxbnTb96q58o%2BxJsjsXeEhsM5PXXAC0ps24xKDkTCkCQOfBi0bfipNtA4r00iCyPNV9jxXvKqHoGq0vWtOamdtTrvRzbHZL3TSU9x&X-Amz-Signature=89c8f92e5aae6c182acbb771cadfd73f5f8bda4a1fe988879fdcac7c171f9074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

