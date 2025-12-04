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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQPZRA5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDSLrwdQ8zDoW2ZuHtjDMLxd3klRC52cZEjw%2FQPjdAuRwIhANy5XVLbA3noeDhi%2Fo4jURXaMthFiGdYMp9HMjK8xHawKv8DCEAQABoMNjM3NDIzMTgzODA1IgyVKl7cb5KBhmwcjGcq3ANUJX0MsSgD7N%2Bv0%2BbB3QgRBt6DTmWI7Oc8OEpBESuWDCAoh%2FtWaKObNNkJBSh6pT%2BtlQSSAZYYaMxKfGrwI3zyIEYsPhf56CViKoiE2K03bzUvoue00w5OhfTlateQAAhNP%2FUvKc82ZbDu1qZqydzOGhY8FbTvXVaOhhsa49JKspy32S53boULHIEvCQwbOTGo0T0P5fhN7v3ETGV2dYLrshLa%2FKnLtmEsCa8JPj28TFtH1QtBJlyjpGkiIBPTsRRvQqjT5mJsm%2BAN5P%2BviKy6khflbeJZbrZF2QeIdh%2BU2K40oJe4vhOsGwnRGuZJkimxdsx9%2BMW9QelbG9MvU7X35MKV%2BcXKGRVHxS7GYyKhOo8bfac2kRYXS%2Fj%2Bl3v1zuefOIFNOkC2Km9%2F1iKWVGcVABCb6k7DyHjxIe4sH6qIncy6knCT9c72aenKS2kcFyHJJm49QKwTQllvfNj7ZUCVXbf%2BOSRa9XaLwKewVDpPUt9dtdodRkBavxQPmcydCycthfMOFwYrc2VIQm3wzZNR2CuQtbK273v34tVqMLi1sMqnZKsrMCq4WIRgsvuIATxNt%2B4k%2FIP0e79wR%2F%2F531n%2FXWQf7cYyIzdwDbHW%2BMI3sAvvpgixQzuEzIqkezCx6MTJBjqkAf%2F1yaLeECQ%2BgfDVW4FHNpLjMikP6BvEel5MTbeaHI%2BbZhHmKl%2FQr4iHLnCDiYlqyAbPCz2JfpgRA7Btpt5nvbOJVOLkqb63Zm8R8061gqKqFrFr8%2FoU3Eh3kd6L7qGnHUe01wUmUMcwL8QhooZ6IUkMds3Eiiv8VRpbb88vNrvbJVtWFmSdD%2FnWrKllXpGYq36n67sNq%2ByoXiFUma9zY3HExrYp&X-Amz-Signature=671ec7014d5794d654af546c6650d9f34d663d4d18510e260b45ef7c099e6b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

