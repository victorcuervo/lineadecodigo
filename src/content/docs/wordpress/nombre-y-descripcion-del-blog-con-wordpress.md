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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7BY3Z3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC1BoddDiZjpayE0FqUtq7t0CeKNmAxUeK9UUXNuIRnVQIhAL%2FVFfocpf0dMOn7YONGIJygUvq4aVlWZyCgS5nBI9zwKv8DCEYQABoMNjM3NDIzMTgzODA1IgybsoQqj1Vag%2FKpiPEq3APChLJ%2BI9Y0DieJ5GdBUjlVe2Vikbj4gn4Ahta30t5wvFegsQDMfNqXmwoAIxk42tq7ls9vxBdKZWBeZ3kzTQxjGXyHMyGwbhknGny0SQa7vk8OwyzdBJT%2FjMLODiSKmfbHLemSj5UUekDp88nGJKboYZKssg77uVTrsdv012ksTLq7I0IaahlbX5ZIV9eD8D4Wr4tWSm2GEH7hNdfrBmP7qZ%2FcXacCb%2BXfgDnFEuwkGRaJrHnpspNBhDKAMo8qW1MacqGxMxAiuJwHBcL6%2Fa%2Bb%2BDsAqtGN53K8wQFbAUpOndRrp7GpCoWdM2Tc7lQhcOg4QqEy%2Fdt8YINDuwI%2FTdiF9VqMhGgT8TVvuT4TVR2WZjPNGPaMdDLS5SUJAMK9uKah2L2R7Eug5r%2FvY%2FivctkNUd8h7hk52vxJzIOXJYMFEQXoj9BQ29RVTSlGKB8AuVpMOC%2B6EnUF1xwH%2FwcXtu32zu6dV8jS%2Bs3iVAlcXbK8xBa4NVPHPXQohTjXEwr0%2FBSR2k%2BbLqU5NnNEZ88tCbglmPdju6xNyIfwkgfma%2FoDJ1OZCfsTuXToV0fktT%2BQq5V%2Buu13l3azVKWWUIY%2FU3BLtJQk6XV1cgIYvMKLG0tvBGum8QhU%2BeSwiMt1sDDEg8bJBjqkASEDDaH0hhZ2VeKBhxJ0C7UJk7NBSjFCNIcyA00BwHFTyyIjW%2BhimxEIgPT3krN4XtRLSf%2F0NJr9XFrWyI119tvAb%2BSgFRwq9UpnI%2FNUCNIYshpsxEUs%2FEFMwTX1TIQRVXPnV5qvXLXgwi19iCsc4zsXaWTAxqJx%2BCc%2FVXI4jMQUb5n75LV22%2FHoOBKkXiAkNE76O3kg5KuVoMTnEhuQFtkV3ZVe&X-Amz-Signature=00561b7b85d05b428fb9158c7484968533025c1175977a62353bf2fd70b1f46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

