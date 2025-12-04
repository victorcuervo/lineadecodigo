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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2DERLP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDbTM6KxXBxbRYrNgP0hEmdadmqn%2B%2BVsnuxEUURNxH9%2FAiB7rlWDBB%2FenMk%2B46fvQHducMJ5Q2GtnDvAC2b2ixA9rCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMjre8AQC%2BUGPN3yl0KtwDO6%2F%2BRZeXMMW2BQP1YWxKdZCauPnYoLQcbjd8wQIDDuemy0biO2SIb%2BWo4BxBzsmn7WXR%2FJNlDTNeQZI2seV%2BvGv6IhncRSA%2F0XEzSYm%2FiKQQq5Y9xtkwNSC3aNB5MDH32KNhaHsjtWEMGq2k1fKApxtc5kzXVBnSYGu%2Beeta5NwbRZC2dvXJzlOrBytzvWp0UIDCctA6z%2Budu07rcWiwc8szAavJUkfgOHnzRYDhmoqYACp0UXaMQMRswqKDVgjI8ZKU%2Fx6XMg3EeTbN27ofW%2BkXkHuTwG%2FnW4Dc3tsfIOedWJ72gIKwDDs1PZRPaTzlqM36BRa7DJynQ%2F4nERK7V4rPms3DBqcV9PFYEJ3bktqXZljMstWLfq88g8158GHhWOG2POxzru%2FQMFXNR4WeQvQHGxlYcLVpiWTUxlbQ8x5k8WGy64K%2BZ6ZIufS8N5LnxtJl7az0keKKAfVR8drpBUv%2F46UW3dZ85WDHoN675w2z6w%2FpTStOj3OWP33CVKXXS93W%2BLKOk6jU%2F2HGGPPdV26WaJUSZm4kQaFb7EajKaPyzsRGLD3Y5qiN%2FW13d4qJe2HpnBi5B6zSmqLUiGPrXXmHvoSkNOg0lncvpHffLapufz5TmGST5hvTbwUwxLTDyQY6pgFYBtpfay6ztfa4iBeBnwAIN%2BZadlQikmcxYu%2F%2F0Ic0GwXUqO7Npocnyg4kuw%2BdlLvt1HySFKGUrq8OcHBxrD1nrEkeLaCGKIKQoVNZsqbs%2FB8kqwmK4LtspGqoG3CAPqxi6U%2B06UKlvbKzz515uEt8SvBE06cybgvhARU%2FtSVteu07yvJ8%2BjCayYzT7v9C%2F8EM9ZLbFCRC6ccWkddad3i6LMIJwrUF&X-Amz-Signature=63a0994d115f3f5caa077636f431c88fb2f0ad4f602d1ade1765f030ed8b2831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

