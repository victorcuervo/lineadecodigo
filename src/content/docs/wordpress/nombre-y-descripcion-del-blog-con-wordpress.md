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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3D6DM6R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIB%2BIK2mEgyEKIHwhun2ainqGVZfx77vP8tFnY51VHeoNAiAJYfJaEskEBkogYP6UBpPFanDrmN1w2gQhP7VtHB1F4Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM2K9m5%2BtTbpo4GuUeKtwDEdYRVS7HDHnJ9KDC0hEPTyscLpQtzmEG0OszLjO82MPe%2Fid%2BG0wC6O6jSjjD0KD3y7ubmEUh3mAJy09vrFjWsV7lsWXhmPi63WGfn7R0GDIBbX%2BKxNAasBuculFKY%2BLJQpNDzVPiam00sCRfWYj2pylOamenA0GhzHFlT%2FclCTDvVPQXkpIh82sxc7K748WHrwFfJpnmqIVUXvr92zynRrKyf77OoOr2gGsn7eOpv8ty4j0bnUlkkZHQhPXhrq0BsinI3lmxkCtZyr23LGbx9pFXCY9gDYDTNvmIsxO2ZqopnXn%2FmlSKeBcImGrFiLUKwqZ9k5agVPihogXDaRRdYHql3U89b3MwuOuj0ZL8J3IqsVSsBh%2BQl2i%2FUVzgOffa3iJs8SE63ZddyKWXdOfrOxZqNLJAQyiSdnnjsHEy6i7LsV32GfckT%2F5%2BF0e0Q4wv%2BrXz6SPHOZ0mUgFdVkgahi1xshhSYh7JT5w53LqgIBhjJDhA3JtecoEunbN21x5NgT3QdytKnmJCUbFiWm7hsIJCl%2Fmn7kSZWjOCLDkAp0TgIdT6X7EwlCCup3WtRh76DGWfhPVhZpsANIVrgwpTBVmNnrPsVeFSYtc%2FLRIRzBfhTfGP5H5wlQ1gVS0wo4PGyQY6pgExUkViTjzP6JCXY1571p82o15Xgfu2jwsGlmGTmwCwvlAuApncFkiU0GYKVK60KdtbIrKZSabfrK9yMh%2Bf2GuUaCcBKZk0jk5VhPLZZ3%2FbpcBi8llV4Dy7DMS2hgu1IK0vUHGqy%2FxSqqL4nsisYgeS%2Bs88KqvxG4x5RC9V4%2FeqoP%2BzTKRruqAtB52LSOhf1ofEKMs1GWjzb6nZgCxIH%2Bcc%2Bx5kGobG&X-Amz-Signature=a6d0a071cb7140e03b8f62f199fd949ba7f7a2c52341ded1dc714f99b8e573c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

