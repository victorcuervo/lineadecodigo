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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD37S5ZO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFQC62Dff8Gx6cjtLMp9NpVP2bpo%2BF19ELB7OzHScAruAiBol6i3f3UqjXEBVSIihPoMQO1yfojM0UIxQzKYsuhOkyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMwRNYJ%2F2z%2F%2FHWc2LtKtwDNFrFxJiU3cNgAcsnZ%2FN%2B%2BSwaIpfoE2KBqUoMU6vgwTSS5wqQTaKHEN27966ohYMUss5jppMltVtoxmOrbpp%2FjXJSo4EpIK7eUNlv7cqVdJu4bwq5XO9qTXPOUDiS0s3rdlzrtS4JFVoIym66l5vSEOPpIzBQM47a4gCpd2uhzkf2Ksgz4M3G2iVUp0bGtYDTA7D2km3eQJ%2FUTs6vZpaFjv5IMpZ1qRT5Ly0AuuQD5Is8NJZZSWo1ePBZlaJOE3T0jVAmE4QJApQXfonqY1o3ie9hLHT2O%2FZnX4sDQ1LmSuGPDsLDYDePCUj7q02OCNgQO4eFyPx%2FXxYxH3T9b7csfEYtHSQBmpFN5bLm4R3pNAHQKjeHbkZcPOnXCO0OHxsccM0bsXzBFKeWF%2BKWu3h1VMseO7n9cbZ70QJDme6NI1hBPrOuCk1G1kdfHQfKEdP9dLx15U326jFaZOXYjeLdYGOVi4edSbDAMhJgulsZDt46M3duVAXNfFIWdzJPWIUcDliylgiurJVaHrKgk1AiB0OGgsZaXVXw7mSUJQTdI8oSuOhLaT9j5%2Fj%2Bo9AdMLxFMZiKOkkvBZGmfg5x8bBDiEavd2RvOplLwFLmVkRN7mFPnxfQ6hv9mSwwCu0w7ObFyQY6pgFlyG2B%2BX0stw7NlNY0JYe1D7bwyEQgxmGxIzbdWawNVkQ%2BHzvPc68KUCe4DgncLNmrv9w1dHCWuVIX5IfaCrXGAm3eCXaaDSJm854wiHkCiJlWcWjh8WwLU4ClhZtEbZekN6r2ZhopDVz9WMgRYMuuFP0J2%2BDNZjxAcJ5yrFQ9L%2BTkSkTrJ4my4XZRUfyRvSrJsSj%2BS811rfG3t%2Bi3KeI4oG4CguQ%2F&X-Amz-Signature=9ea4bd4aa2f228f2fdf22cb4c11e1b80926c513a781b8e6ebb70b936185fdbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

