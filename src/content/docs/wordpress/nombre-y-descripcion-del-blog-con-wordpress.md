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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DGSNPEI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC%2Fgt%2F2MzAEbiNDi2mQMMymxqQS3F8MqVPHU0FG3kGwBwIhALlqZ85wX9KjF%2Bpn5XVhTqkyZmxZ67Te2sf0LB3myfN3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgyaG%2FCXwH4FoYh52%2FEq3AP4JPxqJb%2BIz%2BaTDVVEgY3S7qCZNmdbnNZGpcIqhhXsqnnv9BMJvPSkmheKtmdSZl0WliCAQTdXjx9Q3wKlLVl8%2BqfOSyrbTYal%2FpMylLhvh9qfL6Z6Kq%2B8bwgl9HhkFlZu2GjQSvDsJSrF%2FnzaY2CZ3nvzdYYZk7%2BzLXAPtsGZVM%2BJQq%2BesdOl%2BFQCsO%2B%2F9JporsqhEL6CNTxi74dILiSNhGonQh%2FOuzydI30oT3%2BpX%2Bwm%2BOyw%2BHQacxmVokTNTmheO8U0YIXbXHGLcc1qrqacGixQ9zXgTq6wfTkWn3F%2FjNA6jNEyKpyb96vmxAHtXgHOVb%2BoJKJ%2FKygkN7Z0DRhmhML0bNsbjHxAj1rSlt4GfbaPVKDQV70%2BQ3VSaRyAuxteQ%2FRSPj%2BEy%2FJbDjeT9u4SkaCYWYMAPvJ6WfhH6%2BtXzlM8u23NbrgTWXGpotfZc5LuM%2BnXMCES2ck0KNs%2FyCQrf8%2FdV%2BPz5aSHp7s93EIpxAAfaxwattg%2F7QcZFKp11UCpIfekUcjnKbpUBFtbnUZWYwuMxB0PsSuxnqDFuW%2BgCrGHkQtuYXt9H%2FfCK%2BELCBTgptsYP%2F0sN8TDhX3KcS2UDLyixPeihRibeQtmPca7ho3u%2BB5RcwR3hSMTdTDU58TJBjqkAeqyJ5MliogyfuPZESIvMtcBnvS8%2FnS9M0EvFzNA5cBdZyV4PGMd6wcE8pEVLPaWCCyUU7Lk91UJVtoJsXLmO27qK%2BPNLuyDTUTkOrvYYWk60gnpX56nl2oJLRfWdpjlyj2IbV9lPrNqY61Lakjw7Vb7vYzEP2aKod7keggLhu%2Bj5utxKKni4MiSf%2Ba8pLHr8g%2BmM2b43DI7Pwfh9plj9QD2JKWB&X-Amz-Signature=1b176db32f720058534791a1ad4b394d63b333e9b45763c49fae47994d4550ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

