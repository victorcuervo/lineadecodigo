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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673YILHCB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF6qeGtTELIlxm6SPgxIoooTh7UE%2BA8U%2BuyKAU2sRo%2BBAiAIKO3EnlV40w1o%2B%2FQRt7CQCzOU7wk1vlSqlq1C%2BMBLnCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM6xU%2FyJ193EMJbGhMKtwDAyl8kImHP0Q5%2FJV80JCJVB0VNpmctTjX3cdGrBMkLAESP4biWZLV5te4Bhs%2BWXXfppslR9nV3DWmqDK4gMPhFmNcPudDwh%2BecHimaA%2BCWqQND%2BTbu7mzBmJCGrsV1OoppDyxS7zrGH3ac3MSkp5x49%2BeDr5UhQn1unQSyixLKEme4H4FwCF7XZZx2Jhk3494mziFLcNGXeoDBEH9B%2BU5v%2FU4tJf3IYLXlzehKSf3KV%2BIPvmy5gRNDU9iaWBf1AX80S3wXHXMPCdGHoyXBBIiJJVFJzVprRnbnIxvR4vS5gY0KBC8JB0GkZGz4W0DQQmTzGI%2F8BfGZ1fq8y0UBdyYcdG2M%2BxmJyurMsAcmQ9sfmDl%2Fz2XrorA0F4k3%2FhxTTfh3AtGmtTxkUuGl1gRa8IV1IO7DDv3znlCu5muPjy2VCTN36igOWwV%2FCuvNQG9PatoNcD9jJDcEZULSRmXIgOsx3vasqpMccGeeEgItbBXvfcJ3OKWMAwlJj82nwrXiz4ycPDWMxgDa4okNUbR90G3YKIILladE90%2ByP9XVPa6VoIuQ2MhWQf5ty8pKQSd%2FlxQo%2FVwXzj293boziVA2JuMcs6wtpzmoIaKQdxG2ECTvaKpCLcGX2Erey1v84Qwsr3CyQY6pgERqGmK2ihDFlf3M8UC3InnJLA3f4UaiRmiu6CBnVWnMYuq8l0sKyYKc%2BkSpqsxTnv1%2FuArQNdYCs%2FljBuI%2F3Y8XfrZNxMKD3BvPvsWJPkFFPwK%2BJwQfmQlXFP9MYKVIIQfQeYP8KdnV%2BWDuTnzZoNMu54ewiOyVqodxNi9u%2BaNzwA9eAK5obaUeR31nhVS7JZwi9KKymTdB%2BZIHh63wZiKr6Wckz6Q&X-Amz-Signature=9b79256c8c42f4eda1d677dce4ee51a314a49061955448dd53b60ce7a8f69cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

