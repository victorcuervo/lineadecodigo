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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWR3GSH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRX6NsKm%2FBWx%2BWuiELJ1AqCaw2HncnpBXDgu%2BTxRSMAiEAn%2BBfnuk9fQmcpsTQdcZMjFqPyAdRNImbkR4NyrVkJgsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI1RO4lPIhSX3X3oHyrcAwYlihU0xv6wsNvp6zY8RzTpHzBjdSmeDnzTZn9BATzYHOKBV86N87y8gsiVQTcHt3yP7Pg%2FN8AWKVrPuozG8VbvuxnsYw0FNXCtbA72ZH4GRIlbkvLA%2BiTQJA%2FCefTwZGpGy%2BgTwlYOTQWIFAhJu8j78%2FeCbI1032X92%2FoJq0XFnghsNm3kNQKiFVezZhS0oczCRBCc8p461bvZ8gXqfadpDLsaY0Ek0B%2FgayDX5FdAP4c6PEQ0R0vMHcc370P60wO6aG2IQto0D5QUhHxTpY5pQj4xx%2Br7njelAkXy21PWBtOiGYiTgZcG9g6dmGqSRzze%2Bzb9t7zx7%2F%2Fa3BLtGsRPv0u3Byzt8k%2FrEIQDem2ssyLGc37QsguP9r5HPnEv6aX%2Fbn6T72rE%2FeVadv%2BnFZ0HT8Av3%2BVwXjyyYHHLoOM7woSKscB%2B%2BWje7mh004o%2BUIYOsD8HRejLXSEeJpOtHGIFNT4yjXVW45DJaxKbMYviit3V3zCitq8YHje1Ztw4HKpi7ULfUgua6My2g02mkm5Co0SorNNOBhyHhaWWGz3hz3dPfkoMl8oTmyeNG3muZM1T84udFku0dR9kGH%2BU9UUHZgbPkUIH7eJvLBA3nmAPFu4OjZ7%2F4V10Pe8nMPLdzskGOqUBy8BMRBvCP0KYjdirzXAZ%2FHxHgFUndZBIuQDrxv7vXDhtQtgjZhdhAa5pFZgVGcfu5vcML8QOkXL4nrmFjhWUOsPw2%2BmE6iDqFytIuwgpizY3Zo4l%2BY88gRF7SvpmDyJLF9eBTaolobNezylp8SoS4NCp1Sp6nZ4NseEm09Ec3tvU9eFxIioDj4SL2KGX5%2BWOFL%2FoNA%2B0VIxNrhwj2g8CyPJOFqJJ&X-Amz-Signature=be0bb2b928b75f48d4d07defb26eb655c7bf3b2ca267a3ecb737875faa63c4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

