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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFKGF5L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVsKpQhBhpC7EaxOktlP3Lk573MTTzD9G1gzuCR5Pp2AiAsKIseZG8l8Q7USaE6mDjQZsNDTk981LQ6X6F2N%2ByGiCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM7DwGH98gMra2tmAxKtwDtjCojBa8tQ73WKNLdoir0f7l8nE5sO%2BmLr%2FgALyt1Yo7e4%2Fr92J513S7I0oQr1YjLSISfsVQ3UsqyCe%2FEUo6%2BcA9PotH07NiAffM6ZbGAI36iD5xQp6qdzqZF7t5VfDhy67ay%2Fuaf2qkBYw%2FoEhOTzuqzkt%2ByQY%2FNwCBVAHwI2ggwCw2O1aSAFdn4EmzeIC336%2FtFx30C8t7VND09SE8LF%2F5S0HJ9wwRyGgNkWnldWbr8u%2BBTtTVd824PLVlUKX9qgj%2FNHyUF31hqHyrxDiwMPG2xbwo4znZHWH2HKs9oIUXp9xBYiXvpuCZKnoqNygqiD3grroM4Yj7o%2Bf6xK7knvRMibKMQePpSmViMkln7ub97u%2FQTsLf7%2FY7g9sW2hHKxmUaCd9A1wX%2F%2FqgIJzIcV8qfQ8iiLrQaNJ4HT1GYzAw73u0wemsUGoXB%2Fb6EsZ3MtfRWwOapPX6dMX80ud3weLuGIDhPO%2FxZPKsqjSVR0r1F7d7aIxQhxz84xwyTkF2ikrSgmO0WBjVkS%2BDs2C83rY7%2B6KBpD%2FVa%2BWrPLvmPMT5J3Pf7GpfG6T3v8kNyavTSdVx0R%2BtTdBsLVeMp1xMj9Vo4rUH3COiML1pY9o3OrQnHAgfA8IVLkSVz8bEw4vHLyQY6pgGpanKR3p5WzkI2mjhTrpNkv9O3w5WrXCPvb79Mhd13ixPYgLsKcykHwWFwjNA5rtV9o8QVAV9NLIu8XBHc3oc8zZ4lKPFGyb3h%2B4J9rUcOBK37DtizF0ixhFeZtZjdPihkbfq0y3Y0ZVIj%2FOjJUnPI7alz%2BwRYq4bRfiy4n%2FKbSwSewpQ1QrYoyT00f5a%2BCeD8RddIIW2FPohEVvIjMisDnb0S%2B1uA&X-Amz-Signature=029ba1b2d5ed2dd25d05f198ece80ddafe7882b706b88e869a1134ebf32425e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

