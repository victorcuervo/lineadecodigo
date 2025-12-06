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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRBIWDC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP3OFqszjJop7dbOX11eWCoXjZcRN5Xrpeh3%2FuNEXLSwIhANTbw8Tx3RZl4wQCXtM93%2FzlvlAwuuFMVbJrQdCQc06mKv8DCG0QABoMNjM3NDIzMTgzODA1IgzzhBa7J4AC1ho6GTwq3ANeQS%2FXB6%2FlJOhiIzdFux1975T7K46HlGca5OP2I6KB03bVDk3NeDcx9xnr6Rxp8E%2BQ%2BQcv0qhR8h8ubJt%2BuVTdb%2BppfDwEXL1OgBYny0RtUhYQgFqdKDA%2FYw8AOGkB%2Bjz2Ye1NLfwKoF9BhE2ai78FN621atSNd424N7PEjFgptTe5jTwYpOxl%2Bp5eD%2BPq%2FZRu3uTBcUrWoz3P%2F%2Fu5nbrrot8bnMBQEjfq3IOn8Kty4ep2UuDbnwkw4uLtlioZRiQNdtrOJhpAoYMf2ldoA89Daeox73c%2Bo0T2F3UR2RGdsXAR2Rs0mhKEaR1nHnVEvL%2Bzf066VyDlPCLl7RM5DLqdbLa7gv6f4NuoSF0kWZRV%2FXAIF6Unt%2FFUKM8cZRxWjEAeZGsQKlvMDcZSmwdcI2coH4Zhq24UZ%2BP%2BiKh0A%2BZ21XeO9Yn6wGCCtysNyE8Va9zcMeVApGb9C0KYUNJG2RZv34cDkZ3N3jRRFpRWMSKFdF6BCyLLDeRrSqFTccBPpXMpm8UflFwkl2XRyH7j%2F1XpgdDnQyT2sKfQVPC2Tk4BZVhtuhNSHd%2Fhp5H6wh2IfAhJIfqqWmnlGU24OMwGGj9XARcTW8yp4mPhcb%2FVANmrJfcbwWmahllDANKGdDCww87JBjqkAetApkFATUpg6QBoQWK2b4Nc8Vh%2B6mBmuWUUPD%2BiR1bwTGB3v7q4o0YTfo0DT%2BpSPBdVgQADK34ZVI2kKUHyuB5g4Yqi7%2Fl7VoOdWIA%2BGR%2F3PfPbxxF7xj4vSDzU5RleTXhc02G2bH2MLZGGHjBYNF%2BeLVdJl8lvIJ%2B1gE1te6Gq9FOZ3sspVdx6LohiemLDa%2B%2Fmc%2FBKZaHY2QZQjQJGWUdxtqu2&X-Amz-Signature=348eba3f9e258afbceb5acdaa9362a7bd7e83a09b10a5bf008b253f079718a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

