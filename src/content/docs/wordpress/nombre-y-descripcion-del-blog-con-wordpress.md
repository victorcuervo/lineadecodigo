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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I53DH2H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIE7MvSuleKhUtUltDgZgfxBJUS7EdTwKvqpBBXj6%2BS0CAiB5aNI5tFIw62MP4pD6Out59KiecGcnUXogmEgPIkWnoyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM6JKrEUqTTRQPlh9AKtwD8EfvWoSY%2Biy6pbG%2BDT9uHIsA6TKkYd0COOSMBDy2%2FbK9zca4UVhyXjePUyVfj8jKmVthm4oYvTIXhQJCFt%2FmZG7M27bqlLMAVMOle7RUC8RPe2KZthPXfpK51MA5oarXm6TIc17uHlgAceipSmoUBlDwNKzgowVNsww2Fcgwv%2FNhTWbHmpcDrn%2Fw4puXVxqEztus%2B7hwbMkGSLG75pr4G8kUrkeE1E1cHAQ5U34Yp0sEBX6wk17cOzXkmlop3TQUVyMi9HWY0tydofQNRyCabaMcddwLtzaAUFOPdSvhw5fyn4an8fqoOGC%2BdDjIqikefceGgyhPTfzBwutSrBSwg0A0p1SPst35SruGWch5UYgoViUOvnEZnBPoU3mUZZ6UxtGXa2f1%2FSe3G4gfI2p9TfFEiRV3qdkyRQGx7ALtlR30csotrMJ%2FsOTkgsdnhaHHBtgMOy3AsDr5YN0IhZ7hfn31n4a%2BUbhNdJHR8Mkxu%2BmNFaraMRPNwv5PjZCpmWPOul86c%2BIxG%2F%2BKymoOgYqaoEgVpKIY48nGz3cgl73YTrH%2FohuhUWZb6KpQIP0yBk%2Bt3%2Bh6sOG4u4uphrSK3BtkeGbqvJ9sMtNQxJSDnxgIdT8BwlWumC4q0FVHVDYw66HGyQY6pgGRrXD6ci%2FHTo5hXFFQ7FVdCgaKysQ%2F0sI%2FYairRq9qfpcOq6Z6OtUY7BQxNGR65ljlWViD3Tyew%2BsWXk11ucftUa998%2FWSM51huWupQ8pWHBuYzcRvCPn5qkic43wmW82ayikqlGQihTN%2B0ihrQjhl%2FZiu23yrI4HfT%2FIvrPs5pVsQbfaNzK5vnigLtGh%2FvCrG7HlZA%2FwFpp%2B17%2Bbp9NqgL1x2LlJn&X-Amz-Signature=6281a72e8da41ec304d14a6db8eaec18cf6d6997667f0c17d91c33d2c96eb78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

