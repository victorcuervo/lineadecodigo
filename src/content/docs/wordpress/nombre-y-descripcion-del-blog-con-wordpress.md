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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4OS54T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIB5eMLrkc4y%2BO4UmCHSs0yTVuIEguTahdOz09EP0sJi4AiBfOca5tdSisSKbwhqz5hhUJfusr4fqERc84CxdglZaHyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMA08j9urfxL19Dc5mKtwDXBmavAQSbPKwuBLiG1vHU9odJZ0QSjYUewcfiuviGMQSfI%2FqDCyIjMsFTPSRSNNgFZsnwmcenzrI7BRfJA5pj8KVOPPznUrBe%2BtmXtr5wHzHuNF7uf6qJ3Tlj%2B%2BykZUWfoaugWcAQCoOzf0JYMZ9Y46WhBNcWFFIpWIup9IOZ5HYUVMuNwEoXoUSljUOj%2BwWQM7Ml2TjrNNeJqwcTBNLiskz9e2eVZuUOXffPsKqv4GLJl3pl%2Bqo7f1py4pMu4c7st0%2Bvu4x1vdf7UDbPnfzSSWnadrnyvp4qn91h0b%2F%2BDHdes8TqjJAEXpqtcJC9Nc%2B5pujibbVkz0GZHhQ8pRWFH%2FrmDhfKqNuShi9RDEaBjU9UHSCvm7Uwkn%2BgITRD%2BCaIojqGJgsvvBi%2BZR%2Ban21eKt4bN4K1gH9Rzd9N4jVRVEcjDviNLFOH4z%2FDvGWC9RNH2Mu95Ba41UY%2FH%2BvUaysIu8oGnErVP4PcGQfeFTPttenihYuAnS4KZ374qBV%2BMPHSn2g6VWD1UM%2BeW6hmi4at0FdZ9drfl76zTY0y2jABlaE8WrpbHZjhrbGTKUQ9gf%2FlVJCK0FxUquVuONP68oMQ8nIuhCHmy2Ej3z8ypamZ%2FmjZpKBAh6EmYRqMl8w767EyQY6pgGER8e9hJjLAsK0o3oQeEHSL%2F7jwPLH6l8N3AswESEBshJTae0sbcbMmd8KkcoQlrRzW5KdmVZhIApWtS1jzPW%2B4kRaYMieVPQKQqt8I8YKmXQb2ovkLXECKIPo%2FoxV6LtqVaD7WvTxOTKtekPpIASCWTj3lmuZEKZE2YW9xK%2Bjv9136epehf2bRW6IiaCnpzj9OSHJyA1rMFvw4xRr6Xepk0pX5UhR&X-Amz-Signature=d2f5d2badf1ca2f9961e33af1a000ad00a238ce4517983e3b07aa5efd6098f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

