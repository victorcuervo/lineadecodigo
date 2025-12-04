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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZZRTKY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDtqAbnpxnM4XK5wbr1Cpl3GOshcxicVK5qC1Ip9mFYmwIgW346D3TiRLV3WiTs4A%2FLum0%2FJ2auAITP9UNFJSoxLhUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDJhWVnXFaSghITNBCrcA5nxm5gS%2FvFn6usKgpVYnlReW%2BtmlZr%2FqUOeQga%2B2412N05CcBavu5P5qigzdHnPQ3R8Rputvr1bw1SUkYUCUwz79gCmeUnT%2BHv%2BIy9TopYONGZJderuTHgGGcNRrXyjDhojFkusz6XQs2bxh9xHraRhJoixb%2BAak%2BOqkKYw3y2bm5uLnK5diV1mtI2BDbDkDE%2Bd2suNWXwwTsiAM4y1RiUeJTdoapjFA9PNmGD73p2oxbgHkVa%2B1o88GRdyfjJKXSujpqLaYDzpgLwuPbV0r35Dh0qjp4Zxly3YxCOq79G8O6oTBPz7NpFKqzIPfbl8rB5opt57UiA3%2BBIp3Lf8MoKf8wzBuK%2FfzCQBqrHcy5YJv5UHp%2BM%2B07uwGfDHLAHdQ3mlRGgCcPDJpcXtWuT%2F4rnCGGwcEfU7LeQIVYHw4CEWK2H3fI5mqlhVdUjKm%2FQPtSCnAXR6RqGs1MOud7qy5GHOXOG65%2BorK6FdhAD5Td%2BnlqxFM6yN5kk7kHNQKNcxMPKUo08PvwY3mHMv8%2FLugP04HXn2ZOu%2BQNI0Lb9UBv7xgBoOipu4h%2FhSaXZBBEV0oFUCBvePVWf6cTvw2D1uilwgxtiroGZe7d0JEyKcsbi8OTZqkPhR1%2FHnDfb3ML2%2BxskGOqUB2t%2FG4ItcTyB3O9w81EnfHteqKNeTLcP78HpuPMhNccEaJtCSbIhYQ5F08RpxAv13PxXSSs80rai37O0XX7IWe11fPtjOz0Gq7ONgX92Wrm%2FSDBmPziHvFFE7ot0YBPVgSOenIeJsxhtk7RLLpKUKvvROJ9drppOZ5e4bO8%2FiEPbFdRmijWy1DlRcLvh6k4p7e2j8%2Fla6RclwN9zCkPHcj%2FzFrhLh&X-Amz-Signature=5a04e7b94098813e38bef48d0b2217a6fb073f1d0fc04be5563224648ba6b064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

