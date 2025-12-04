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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SOAFHS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICrYzOT6pKM5eW1gbVXZxV%2FQBCGOAgL6LegT4%2F88ge8IAiEA11c6WkzmVf0Q1eB4%2FuCl3kl0h0tCKgwJHkTfReOyNKsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEc1T1tOtEeza3ctfircA9hKvZevi322YSXSt5dbfqxc0MGS7Tx8ZKMd89a7Kp6MINKCSXpOsfW2HbfWQa6JiImb7tOKgtsM222xnF8N7xuEGINu9MFoi1ZeUVKNKGKq3OC7GMUAACTun9QANe7%2FEauJRVgfDLLUnU%2BKuTR1CkqdFokPgLYBfQfhykbR1nsl7GlM66y4lZ8tiS8iHACwWixu3ZaRbSDnLzZFpnW%2BZnOsAeLMLci3O9Bitj9IgT0geflgXRgpbx3nSbDypjKJrn2mMdugCHr3Nlx%2BgIXDVvGVeAkZnit4NxW6EGpLNNpMaJu4Zox5oIkqdK1qikUfDaL4Htu4H5O%2FH1HZYNoGFvYOw2JwF11nV412rfPh%2BsCu4CfG2HF%2FeVwKr5vvqoddmoF%2FsQ1Y2y6WCmgfwDG3nzcl9UScawewg3KMjV5XvG4Zz0TIL3YEnOV2S%2Bm9VgaRbdXhuPi6OD%2BNxpXdqvt6bOyNALiL2fz%2BBUbK%2FM4y6o%2B%2BsUsOGgPjxr9eBdV70cReLk3ta86iBksGJYr3Z5bWLk7gZd06bj9P0QWxeXs4UA%2FWxT6CbhRkaxZTN32gyBP828Gh9ZJh3zzE%2B4nbakZpXRj8rd%2BU76qmWeji1Sk55myVnjY9tD5qtIvxAeefMIC0w8kGOqUBxRk%2BgXz07dbPj1tlBOONpnZ%2BDPp0ehUXazVmbKm9U4GkU9dPIpyxmvrdN%2FXTTsLZW1bGZF9f5hfQN6WGssMnev0Jmp3T71%2B69rHh0UGPOavUli7Al7QXwsrQrooM8u2%2FAc8nNVVnS3uULOzob42JyO10kDBVjUyHkPcoIVeW5FFouVhAuuDiyGt5CPwARf3IMF8mjVlRPMVSbw36RepgdNMLGElG&X-Amz-Signature=38e31c14672b23930a2c9a4c9be9796132317acca5b5d7efa10bae719f925d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

