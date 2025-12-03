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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N3Y3643%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDpIJPYxOpOa%2F39cfBt1MOztrR6YZpd6mBBGnTcjU%2F1UAIgcQWDHfABbHVcnqFjU4DvLnQAemthvfiqPa1rclN2S2oq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLdJmv7KFwwOQu%2BRQyrcA2D9YpnJU5oQMKJvj5j9skjtcyZwvTuoYFJimQBmacYQ7WXyNmUU%2FM%2FuoUho7yDs6nwuIFwb4LlogfEVJESL%2Bfk7tk7J1HsFEu0pEZ9irmuCoelmKCNEDCMkeUAPV3cVtxhlP%2BUAvFtwrWKomYHFPEgb4eiXgicTekqa36zs51yOiZuPIEakCogujAnxvU6tgl0sNyFT28BRPM2vfHWlMbMbZqajaG93l9EPfTS6sc0%2FzGasHnb2w84%2BGS04pAOpyLfFFUsPoRWmR7iEw8GpnjW9oeSgPpeGHbeBhUB5ciSxBSuz9bGz31ovmu15s6gXuzWeUXeHMqoGWVi65wnT5gv6WFsuLa4Rp%2BjFHpA2HxUwcVCpnJSEVSU%2B0HW14EThzoQy2oOc1UMtnsxaxcRedyZR%2FblU%2FbODROeVEvv0fKzMasdHYuKfBwtA0MaaYFHHSi3A7IFGW%2FBZtO1MMEJcY4%2BrHKqVLZo7S8UbO%2FArhGtfCbDl7%2B4rPSsKSI71qhHgzASZ6X4noGE%2FOsggj710ZOS9NH5R%2FS7FMqbstSztbq5%2FzIvY5M7jB9Det10vSoV8a%2BTYYPBd4js2n8ksy35IXzruAfNMg67TVL4QA1oYXVHJs9sptXzizAem344CMKTcwskGOqUBqVW9e%2FPRrSwqbtwi%2F0UJ%2FHHTHxRt119BbdxLhT2kuFBw0oIMeSOy5rTzyWMfYgq%2BVUPXDOdT8Z0FnlgXvERGQjYdgPZbOKVI3M8H5EJEjWZ9CKF86zhpgSLMFc2Cij5LeU%2B1CRK0hp0i2Kun%2B6Fs852N1SwFRhIAXOAvS82z5D7lu8mdb0caR2L75c2Yyz9xTdsQE%2Fb6%2F1ISZ%2BfOmS0jLkC%2Fklpu&X-Amz-Signature=58eb871f60f884a69b5ebef20c6edbc211fd3f99b6d528cd9c929550e4083b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

