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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWBBN5K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBKzD3k5Og4GAUcVOUeP4JfC7bgN0eaSxCAcKhTtl2kRAiANLepzlOM%2BD4utE%2FGiBLN24XbOVzXDlZEOD%2BCr0UaB%2Bir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMnx4ETzsflHF8n4z7KtwD9w4qhkgz6SMUf2HfuA9U9SV0ZHOEFeZeiUG50sDkOLxWZA2ReMGnKQlkAzoYZnzTbMWgtklVLNB2sa7PstU%2F9Do9FXmY3bbEkI%2BbMMhmEUN4pdTYvKwGBKeCyXGVwmIXcp%2B6BTQ3YMu4sJsI%2BFGN2W5VZnbIBfrcMdZfcPt4B2P8xehWPFhxS7tW1Ky8eHcyPiLXSB7%2Fnl92%2F7AnHNfCty7cdHsL19ji6JjYJiuFb1vVAOBTJ3xsrJr0fuvKd7PSIHoWgEp%2BH5uMTvVxkRsOf2t%2B%2BFHbauk8qOVbc2Re5eDI5F6SheAquE%2BS3p%2FadybYTjvnyqVBe%2B3VYmp2pMbdoADVdjVZhg9sgvlVu5OTiLFElLoXg0XBIlmPtxMUL3CYbiak0bqtb5l33bq2bMB%2FpwwwtS1a8lJrh7RAxe526dgzkStDl8ddwLBJJ07iTHO%2BvdfFrlXh0r4NNpgFUgnAqHd8HPBp%2BvxsXrckRZvUsFUtwQxJvtcEObGntKHpg2BaFqYM9YP4ttyIbu%2FJefJXR90n7xvTNU5349asXfO4STL05oDKLg%2BG8eyghT%2B3KmKGXj7Z%2FEUa7gc89TpAsJ7G6bWEyviWMygm7t%2BWrHT8T0UQONMuEEHsEvOXl2UwxqDGyQY6pgHCUIh0nHLDfr7ADg85LlWzTib%2FMmhLgsWj3iSMaMBy%2BZIIm45fCaHhllwb3Ytlne5g5010ua2TJZ9W%2BlvGoaIndKWfGFjLzXY25yOj5evVgxV0oZf6h3eh3vxcegp7YV%2Bo6KrgqN5K4xfyyuTAdaUMOQ6hUVMwFOsGz9OtteO0phUFsn6O1hDkmlr5O0fBqRWniKsUOtun7t%2Bm5YRz9UdXBt3ICVXH&X-Amz-Signature=4e6927632383288ba0f19f8718693715a737a6588f9dff895f42b7ef5f10cc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

