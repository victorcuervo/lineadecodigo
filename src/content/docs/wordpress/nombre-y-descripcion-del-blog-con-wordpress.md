---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGPTUFP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDXzY2tq42EFrQxW%2B%2F45xaKv%2FwKr%2Bqv498Etmec0sP5%2FAiA%2F8QB0yqXWTXj%2FUmRSmjOcG20B8BHgW94vmZHcN5aNAyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMvmZjcI%2Fvbv1Uq5%2BLKtwDAezlLUhmpI19%2Bq1vpT2yuGRWYQ60qkdnzNEwTpq3W3EEGQiB%2FrtjosiFKbvRh1WJhcpoONfPepwOrkSRRRAJP8HQSByBbNXT1itKCBrsWk1qnBa49NB%2BJTRGPAsgxY5VdH%2FFz2Cho67zkR7quYtEYXYGFsNwjzk2QoKOik5cLhMw5N0WRtXuhKeB%2FzkxKrULMsJA3iZaR3hwReOFIAIruq%2F6OMjRi9AXa91I6OnfbPu6B7h00aGXIM%2Bcj8T97fcbazYw0qeR2koLFT1nKuCmzHzSy957zkcx4EJsctOSRqpHYZHE0wDArrbSCLVjIwBDZYWxbEuRpiYnrCUpYNjiv8i2EwtOxzlEUzWn%2FfsKL19NUe%2BWs6V2HwZgUrnAKkLD%2FRbVnBkYdn8KoTmpqyc72wkb%2B8T78vdWdkl2hBU6u7MKnH5JE7L2i73XO4fYTwkvicMmk9DSfmaXnECDDMaAX0gc%2BqeJ%2Fv4Y1B757VKgHcC4HsQm4UW7500pZYXnKgDrzimLhlBuTbLVf68vVuQkdYeBbS1AOv5E0O7oj2PxAfJ1ifs%2BVI80kgTvyMmV1RRCPU17SfQD7mtRAQO4wfGDZT5rbCq%2B%2FkKdKDQhfjAL0XiQOmcU0ph70F%2FIV08wkN3CyQY6pgGNeFV9wmjG9yDtbgWm0xt0IeQHUMt3Ue5u%2Fesbhxst%2BI%2FmNdYiLDvH42lz4UcUJoNYE16ggChxEKiLqvzGyK5xe5OkhQrCyt%2BqBz4vjcItRru3WgTV%2FMnPs5G3Qr%2BXtSmw7jZ0i%2FgE2d3me%2Bgwt8%2BwFCsYtHwEZF67SZBH%2B9j4WfNHLGHDgRw2UZsg%2FW7yrNujTPlOHx1D31HBnKW6uogqYRFJc5Q2&X-Amz-Signature=3ea2ad715d0b5d8102bb07ea6182f335df5c2ba10145320a7e0c30c924f452e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

