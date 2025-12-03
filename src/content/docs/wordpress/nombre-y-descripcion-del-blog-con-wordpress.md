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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHDEBIF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCf%2BHMBgOikG1KxFDYBhUm47yGkK992onmNP1fruVqt9wIhAPBHEvvSfjBQwJZ%2FjcBb3ih2aqopfE%2FP6IFOeR7%2Bzwj5Kv8DCDgQABoMNjM3NDIzMTgzODA1Igx6tnq0Lhe5hMcAFW8q3AMHYILI9N2Sat3V5XqKQ8zMWERInNO%2BDlFxduLVsOQJJo2JqulOoL0yuPkhaoJ9AKURrhIDDZ%2BYW2ujvBp19%2FgUvwQisQbnkwALF8P%2Bn0cH234B7KLeeRf0tbH29m%2Fj%2FkhlH6u%2BQHFVwu3%2Fbg7ImxQ4c0hHLTnFQBU6cacznXwf5NQO%2F3TDSNTzknJXjk8EOD436UIS9hirSDE4LBDfk%2BvoGrjQfWYJv%2Fb1vL3uXgqB40ihp%2FKPApECh6Kyc2x3IagdWUUVWf1Pcdnl%2ByR5FN11e6e05hb%2B%2BgmcACys62rwZEsmUxF7cYGwJcKfEFVKUFOoern2LjlJNCq98VsIQJVdVk5FiwmTiBQqHWSLhH%2FIRI3jNHNLTXKGvMbtzMecc1aMquosACMl2CN%2B4kioXPzEbO58b%2F81hQW%2BkeoWlqBhY2mYAHM%2FIIC89WSI%2Bav6EYslCO6eVYWlBXBTRN2YBepqNDUcjmVb7nghEGB%2BKMVqMfZkK0uiFnsCskrn76TsoWUcR5rJlFWBvgiWATx4XLVtXHVSHwHa%2FE6s9f%2F%2FkHNQorXIQHYqRUicocrNwIcq2iBmymkUJ4QvFvIL2GDckB%2BOdsNhN9gcU2YIQp9mte6Fr0p1%2FetkzEUSQ%2BK%2BzzDH98LJBjqkAUZGI0GwYbqz%2BFIoXznbOo798pS8lrXkossfMwf392ZBc1%2ByJL6I9%2FeawTeHDSTKEL%2BYYxlItEtwwExSVJCaIZktjlqQzu6yvzeTvS3oyMbArU2SJdlgn44SFRJVSKO1PEtWcf%2B6etJs%2F63oj222qkDdsA0q7SkN6qSxg4SOVTunlyEsdURQMI%2BLe8Eoq7UwgTCowSHKAB%2FV%2FWdpxF%2FKUiD56y%2Bm&X-Amz-Signature=b600676761c6cdfabe1708605d1689a463de0feafbf3ee9d0d074aff6454f7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

