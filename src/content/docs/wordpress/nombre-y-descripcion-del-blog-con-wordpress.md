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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYH2G5ZM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSVLXvhENPhzhC%2BFr%2Fy1g8uVUTeduSJqL9t%2ByfREXKPwIgeNNZbgSo%2FIJkzurbj5QU7qXZZdKgAXq012zaRWh09zsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2KNUpu%2BRFNhY27hSrcA0rtM9HeyZXVXy9PyPU4RG%2BUBjU0LislFoPsJS61829KxM5toZ1zgtYk8B%2BGFYAL%2BZNH0W9d%2BlT9vrnT8deAK0J6ebK1p8jOoc69GjK1kTuVYiajEcOL%2F9U8C5SwB72mKc7JN3ymsvKOmXWZrnBPs0V9c%2FzsXhuTBc5lfqI%2BXtwlZqDOrYpDmRjCXLLWGHSVEPFfR3xTUJ3jeO6L%2F1dhQkXKMrveo8w4G6XIru%2ByCg58I4HOgP8KefGFcKzWbQoeX3ock2NgOsaf2LDAVf%2F82wRgL08mntbI9x1kfUzPNunxIpVmvT%2BJERlIQ%2BQWbdkS6qc7oyJ5Ij8us3SfjR8A%2BZyzIkRi5qlAiJaJsRLYJvhza5tQg25OIhR8hKyPPHUxw8S6yrF6x4uhLQbY7exq7x%2BrbYFlJEHG4T3Dr9SA6GZoE910jrKIgzxuPENOyQ7%2FwH7x1gLeUhaDILPYZuxY49HIWv6CMFr9MST2Xq%2BanWLwkZQW7Bh4%2BkSjAtQyRsZq%2FacVRJxii2d9dDuRTcpSKBJ1F6Ia8qpRkoPvSrFjEDzIlMCKEMx0M2yzbklxKPVt8ZLpDrltax%2BxRt9y6DaBXsxejK9OAOiw3ZBt853SUgqx8fk48gt0L0nBd9jqMOvVyskGOqUBFvmNwT8n1cvPYrp981SucXbmd2e8CO%2FgMsjjMOtWVFh5cLfVMWMsmOCnjqZaEzce9R4IHLXkniEwHp5uQBh72GQ1AoeZibSVOAXTBTNdc8yuMQvAaPHwwNPK7zU1aXwQJVPgb6Ve7Mpsh0udbMEx%2BVPQV8AIS4%2BauLQeyO3G0ilnqbJzLSA6Bhjg3hr6GXF6GZ6CyYcGPbzk9MOOsDrViR8l3MA5&X-Amz-Signature=2e6894784af41d13b2cf7cbfc570ec968faeb637f2eb75ce225c3f2b09dbd165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

