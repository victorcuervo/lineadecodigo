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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYS3UD2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIELEKWcVnC1zJXG9Sa8Yg9dn9KnrIEBO%2BCp7wQHlteorAiBs%2FcLlDYXalx1LAdDj9jSAAzHIhiYiert50So3pkKRxir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMAMkyKXnTPf3AHAodKtwD6p9puviVqwwB1OpgiykecH0W6OuXGKoVAT%2BmeCsGR%2FPX7tbmGHsRpLW%2FPAyMTD2Vtn%2F7XQeLeEQWwjAHOiO9Lde8pYmb4R7u2f1qTyldD5Bgl6zKjMK3fA2lbtjsCz%2FMHKamzA37%2BqjuE4cosP9rvH2qFNDo0HCd0RFqcBBMb0y0FRZMzh5LZbzXpiI3XyiGokCcrhBAcXa5ckgsJ2xRznL%2FYlPiDhbjnAqHlhxBI1rbocq7dBhjjtoFaYWzW34JIs9lK%2B9wpIOwrlNrC07nwZWQSiDbcd0yJYEMMeYpl1FdYT%2BWoUaw%2FMvc5o2cZagqEW3T6ZZlk1A7Al2o9X%2BM6tOZ2VTZoXc%2F7NbJw5l5tg9ER9UBpWdWE9jGXLXgE4qgBNwa7%2B7JWWSKayKDR4AoYeD4oxHSfgPnArnJP7mcEB6YJ1F2fBgUm1Ci9JkeMAPn1mT7LaRy210gzA4xEVmq%2FfSj0lGmb8eMFHQvjVVEXkowgyS%2Bkuvq3YbAzePWB6x0XtFYzGTe%2FV7D2HtXxbbkKAp9zxQxhOUvcW7mDpxoqJ1uV0i5bMPXsmI1W7EMmQgI%2BAYey8fK5b6igb9EfPrRPZMdLLRQ8j8do%2BNkfN7kkxNGag3DznP%2F56do36IwnZHEyQY6pgEv8X0smYnmT1MKwJqUgC1L4f5401Ho99mcaDv5%2F%2F9GuSr0CKCRyWXrkJRX54yADftF%2BDW8snY1LiU1R3b1%2FxpyfaiW%2BwrUuIOgqesT9pAG%2FVDvza6ZWIljWwCGAmiRVzfT0Hb%2BAp51OJ6Mpn7zwXu3sU4juvrwCPgtyHLfmIk7gyl7R40O8ZqHQRQ4Jdh5hdU0Qbu971aJIgrAYC4HYs%2BFK6Kx7%2FPz&X-Amz-Signature=65459d3693fb92c6abb6a0d31efcd2faccfc956d59ed848e5d29f657b19eedee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

