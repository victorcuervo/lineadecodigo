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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QEO7OU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuvWRkXYejqIV9EiAbrEbpgL4XcpFuGmdqx4QCnqOa6gIgFDt%2Ft%2F4PeHoJ4Y2R0E0m4e4o1t3fJFWqoOViey0CnVcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBZQLkyDzYDdOmrGwSrcAx8V5vaOU0%2FloW1P4cCK0hZn7cI2zFEPJnmYOm92M2yyLAKmhQdPTlOs%2BR78zRNMVap3Kew5e%2FFA5Nkc1XHpsoqaRRInPbPcqnM89%2Fy9H9ftTQ5zAz%2B5lfXi20Z6xMQ0VG4b%2FHc7NZ0ngySi9jZ%2FFIPAgnzAYD%2BZc8gIoO%2BjuhJS51n1A1o9tA9SaKVwmoDmvs%2BBgCiCm%2Fj7WYBf1DP0MxocNwvlPOGkQ36Agy5pJK3mLsAg%2FM2TSE%2BIV9tUnrs4NKhseCIdzHOSk7VMyPdnHUaQbZWzNOzvNqJ42M9LJ9QOqUi6%2FteEevKhHBJM24hp7UCxW5aY1Tu7dYpe%2FXl7Tme2pX6YYow7j%2BvVVT%2FxMvJKJjL6Zj2i0A7EVKn2AF0ZTFg0WwUV11A9B9zlB0CCn7fJeNM7thQW6eVNVtz72ccXcbee46UbBJhuQm6%2BleHmDLiNVHPhnbKlh%2ByQ%2BErgGsNA5si0yebk5Gf5nWykdNjeoEFN8Gc%2B8kQ5M9BLpxJ82pZToltUPUHqIDDVEXLNnAQMH0ksqHLKfogjJA8kEB2DCANgPexHl96uqyptQZuwuPuQXLt%2BypW5H1NT%2FhxQnlTCD7xUqZETawKeyL1cX6LRh7uSByc%2BXzvWHKFjMMKixskGOqUBa8TgQmDnAHshZ%2B%2BjsJmOoM2OBbiuEYRBxsnbgMO%2B1jtOSj%2F0AHqdDhItgF8Ss5ViHgL%2FKo1Tf8bz2HwjCYDLvM8MXhSWL2oodeGCJOT6hvBum2%2BYGKTcjJYQeK9BGpIzyB5Q9sQ5WF5AZLFxQS597jAUXkGGq%2BDaW0NzC3UN11ZufC1hzqWSx%2BtbH%2BKEJHqbyH5vMkd4GGPqZZybdQTU4tIt4m0p&X-Amz-Signature=d30fe079b3177f23682f3895082b927ca9080c10c8ee914f5c2918ece85988cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

