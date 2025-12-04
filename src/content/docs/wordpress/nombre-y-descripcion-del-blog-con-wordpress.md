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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MBKHGAG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQClN%2FCnILgP5%2BA3Now6QMfjNtGywEOQaEa2cCkLg23%2BlwIhAMVYgEok5yJQzKukTa47KV6Ol%2Fz3XchFySMybbjm4%2BxzKv8DCDoQABoMNjM3NDIzMTgzODA1IgwCAoZe%2BnSXQNfMkd0q3AOLhzxG2m1Bio%2BCuju8okNNY84uNXIlvSWoi%2B2h9aQbSExyZBkRwDajzN4XIpWnkJ%2F0h60G%2BAWCxSYlkHUoC3XcIIo0g%2BlqIMLRuhtupJWlW%2Bjzjg8Bp%2B%2BirJd0b%2Bx5ajLTv3T4gGvlJwDOHq3GC5jP5%2Fyh51VPCCsB7D1FvUHiPza%2FJcTunCyHlNlzNpE4Snu2aeXvRfCsQr4mXLMtBNPyAWGdfcUOOV4NfpnSrlvDDPLVvuKQ%2FgstjkVMFidZY9eEG%2BHKaDJ4w9SdMedPf80dT8qojw%2B3FoQz9VYamalffs6d%2B2TLUmUhd46R6tmjqqeg%2FqA%2Bke%2BP4Caek2E%2BdNuuyQroHSCHmCukNHrp36pQ69chEyoXD6ZqMBRQ4fqoK%2B987mfm3rdZlQPcpQ59zAWZ9XExaeI02EFP1JWDOia9sbGSEW3t66g9%2BUNNUgDbMLpb%2BHY2IvJF9LE%2BZ4lvjpID1gEMWzmeqSRd%2Ff8eleq8jA7U0RzsCH%2FYgUjqsg2dnBubgBqdmlfnHSFbABW%2BcxE3ur9kcZxmdiKfCNSkmv8aJUYd0lRiCsaej6Q4pByE%2Fl5nea2EG56dfk0iVGKz3SvBLScXfkforoPT%2FZ8gG1BO%2BdimXAzyuulxyOPSNDCStcPJBjqkAVT2%2FtZjXLHAKfCkjbfIDhuUEZZOO66TEGs4P3tF26KRHcSzrRGLFJtY%2BklzmHm%2BE6IMbQqxefRLLEy%2BG4MNA2LUkZP2BCDFzR6Ip7Wm9Fuj6igA%2BvcRWUQY34xVsQFUJNFn9fmr1STsHDuN0DJZoUZxi7B7Ip4J7nSoPbvR0WIKyVcwJHJEsVqz%2BAgUT710EMX8eo%2Fs%2FtmY6nLG01iCOcNCKbci&X-Amz-Signature=39cb4efc1a1972701eb17a4da41a49d108136c28c1ee7894f9b29f0ef1d41d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

