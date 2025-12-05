---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
slug: /wordpress/nombre-y-descripcion-del-blog-con-wordpress/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE43GU7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN3OxVagUH4ju%2FDxoYJlA2yACZhOVqWsR6cEQnnzujuAiBc9z3nefBmwKsVoMJrDlnHTzbscQ8djAoPEkAA7gBfOir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM3VNYIGW3GuxWhTlBKtwDKyEmUqFH%2BAr%2BXW7ZGPZTgkrxRpFk8MXtCxGCn6iH%2Fg%2B8QfiMa7DLGkI1oVMZ%2B47x571Me%2FWJZ2DuivE0fHTTGSJdL%2BUWzB3J%2FpU%2Blz4W4Hl4GA6I%2FaE3P8KNW0y4DdGenV0zDV%2FPtOYe%2FDdQ1W8h1ey3P4kxSkbjSPsHUwp8qXt0WPER4Mdidnn3MSJFaB4zV%2BBcqwrQ88UvDxCMrkKL0KpYVfjbC4U5F0UyYCRXrBdoHUr6cHQ7Y3Tk7ygWlBd5q0UDsC%2FpJEe6Mv38y3HUisV1bVB5b2epF271Mkpr7Bkla2MyyA%2F1RoGJtJjlBDuitsI5gFoGfMe5h6KAYMj8bc5I0P7VmTZdo%2BidxMXYg7J0jqRrMJnrua9fN%2F%2FQicAIWWANPbGLrQmYfzkPmuoGC617AUl5jA8qZ25nKInKj48mcUeZZ3Gl8cTf4fI6AH0g8i0GjqUok00PnCl4nnq%2B56lgymVbx9062aPVh9ErxYexUl4QLTNVld6syFWDYo7s9oa0OiwUEaC9G7K6uJsORfOs0ADznGQGCTP0C4gVJcuKTW4I0KEfkcGyZh2fLX9SPUALRDsVDPToew7B77xVvBNVWNXpu5ZOJkiquHB46RuBGl8snzfxvgjKzUcw%2B6bKyQY6pgGaWR%2Bs8Pt9RWZ9Vb2RcKV0yXs9Sk2R%2BH546TYibbmee1pHCy%2FdfLTg52pI9BdT%2F4MCmHeQbxzLudaY8kiQ3K5fS0cICiG3nBVjfa7bNrUaQgu1CutzgnTODnTqv7ZDLeJngfGJcRUjXv%2FS8DFwzloB%2Ffwpvtqf3ERNhyVdKVHdA0AWBAXPP1an8gc5hwaOdK%2B8eI%2Fy%2FMm96Wu2tclPnqSdE3fPZFVz&X-Amz-Signature=8f21aae9ea7c351b3ed8706dd408e7ecc98821c7ee8c531d6d8b7516ce25aa91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

