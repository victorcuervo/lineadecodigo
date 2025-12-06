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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBLL6ZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0U7TeBz4v2QhGSdkeKT6KlpuxYY7TT3QGoP0px1bieAiA3Lh7SNsklkwlzQivGY6shnzjmGA3GwwQ2IIwb2e9PQir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkxF%2BZfX8ljoaB0PAKtwDBbLBFVktt%2F9YPqPDELTk7FhlvlG7kYMafKBfnGOL8oZ0MwU11R9QjhNKgeIimTyW7hzD6RBlP1N2C4r4bP%2B3utC5rCTa5b%2FVMgUnXgY78f8CPBt2j%2FjwaWH7D%2BysezOMHsLDn%2Bt2y9bspkzzyL5pHFZMUsO5mtqZsQjPR0FAs%2Bj0nwUz9S0shK5jrlF1BGuxbwDDONiTXT0y93wVfhkQmPGz%2BH%2B0XibbxNX5RXH7rW%2BF1eqHb6YiUMuhg6VA0WsMbmuYnAErcE3sYJn7PwgFYU1BxZXbPCjv3sIzzJ9CLbXR39GMtedurQWvgDfMaTx8%2Fgk%2F%2FmeYphiZRpO5w3xx5ziiyEPYFmpTtxvBwDL7nJb6hmB0InhfWKzJ%2F7mHyE%2FJcRlS7xI0cv3F2qxKREcfhWhIVnHrs43fpB5npUjSRuoUKsMas%2FtKJ%2FnHsOH%2BwDFktIYM82r3ybrONIBLAcXDFsr3mNG8Sh5wI%2F5DZpE5%2FOFhv5K6%2BvQbmvC324L2mYQKHrcVwMosXfoY%2BYZk6t6%2BHIyQu7VAqjnPaFVxvW0g22WYD5rKFdEc4qWOoeLTd2rc6P6kIcwcFWMCbUtkjPlmK16qCOTUVI61rX%2FDTbcb3%2BX2X3%2BSc%2FOBANtUHlowlrzPyQY6pgHWPT9OAsCp6gpnNZXqIOt1vpEKLxRkxXHuEXafiw0z4rAnwhDrP3K35kA9x%2F5kcZ1TfNi9RKIJUqmc38VdwwcvSmD4Ce39SJdbKYfyhvw2OKxQh5ZdxAiitqUWdxIgheQdPqDGqWvvH0DOuyKqCRzI%2B9k8pogQz41W8B5W4vHtzAM2pqfLR8OyN7TFR%2FStBRL6aDLfjbDY3ayZ7xyno65%2BhEBsjb8U&X-Amz-Signature=b825caf631ddf0426870853cccebd1a53ffe4f137d1206b1a32b5dbf67471e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

