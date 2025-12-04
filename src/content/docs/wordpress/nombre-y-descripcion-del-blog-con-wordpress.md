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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVAZHZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCOggA6kExaeTJuUynmP2Y2Nag%2FfFbsDpuBtBrMyLaq4wIgMbPay6AyqbSgZOqYuepgVe9C5iofATrIKttHLwx9v6Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDGqjo1%2F%2FhUCA05xTircA42cjR8DsNjKvPKeAei4iutpDxglUs9Bp0uNYSw3%2BjxN4jVA28U9og06aLgBg1RvFo20XEkq%2BRO3Pc2iF6MGMwwY2mnK%2B8DEj%2Bj6xs%2BuuYqCNRYnzTN1F3b9i8ZqUYUnGjbPFLFRJiNSh8xsam8BFCovkKvNahulfjT5%2F865KzHH4%2FX6EP%2F1iBTFtjPc7ym8NSSo5L14H63ETcXQt9EGybX0MCweisbhpPgmwOFNVo58O8lGC%2B%2Fg7YQ%2FVZcKRh4M6Zb2C7c9UnBr%2BmAt65UFIqK4CS2mKOe4WBPcUrYn3rrzLGLIjd%2BbqLILZMxjOTcKZ2swigtbpO426jeG7kw5RR7h5MKjif8y8Xi76Rx0BeuGKayhWGDJkMcvvId4QSe3EzEA0eoaRUV8D6c39cvUCSsPc%2BnY03Y%2FSDB%2FP0rz6wp%2BOOOuXFJ3ZJBFyPl6vQJqwTzmdHkFtiw08PhG8L1OjhD0oYU7VvtUx19wvfzpQdE%2BqrrD10IoPG2N09FOd2OQ0cajI%2FbDsYpQUjNo%2BoxQ9%2BZvMqrC7jfGhcCQtU76C6E3FBKoCjbyyKi9zP6lfTs2eTdfE6XgUy2PreHg%2BHPzPLJu1Yu8V6qRa84MoJXIFAC81Jj1aFxfCbKW6a0IMKWVw8kGOqUBw8eBrK3mMOKaV6s1wC48embRY6U6IgtBNwRDrBfE0jjzBQMHax6bcM7BS7fXG7RCKGL0Q%2FikRF8EsNeIExaWNf7A0hivDoD5IfKfDGbA%2B47jw%2FERrc%2BDP2GU%2BfnbxhkDWHH1Hutnn8tbSnii6eoYCTN7rDrJNzMLmMc1mHhTyakuWQEiIZ7612ckXWgj27hDXZEL%2BZ%2FDvFDMkQ6EKual8jYUugKD&X-Amz-Signature=434f6c3e40fecec0e800c66c15a554c66b460dbcc03450bd7638814bfa8144cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

