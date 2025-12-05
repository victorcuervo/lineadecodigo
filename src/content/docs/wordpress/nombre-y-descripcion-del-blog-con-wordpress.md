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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDY5VK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgOuP0X0i0Qv6frpCD3ERuUU%2BSUYfOhWRwROl4rg4kxAIhAIYrEeXNtuZ2%2FzfL4MWfvZ%2FPZt6zLFp9MBUI8ggzo8rFKv8DCGAQABoMNjM3NDIzMTgzODA1Igx2EbLZw%2FAmfV024e4q3AO2GzH%2B6t9y3aDaMjq8GNeO0WI3Zw%2BfdL6%2F3nBRDSxsp%2BD247HgfYVA0PgHIlPByVR08ar1JLbDbSg1dg7I1qDlKj5I146ygr%2Bk82qxWx9yMGdB7XsybxkMaf5M7%2FRtl8qSKO%2BR2Q9Bhi5dq2oGul40CoTrqGralRLcwhx%2Bf3F%2FIJ3MTxVZYsvHLqU8WnJ8XwadhoJiyK5Tdf0r4vFzeGMJkADKLgb17fqoOZLJLVkXwOy4RJixzAsKqQvyR8Ona2RSufdveexXS%2Bx8hnXUdBI2TyCqCdeZm29YHxbEwJnZAYCHDFOfr7u93271iJJ%2FQFh3yeiNJH28M4hZ%2BUzETOO%2BfYOcI%2Fhmn9fOen5D4%2FzrpClbDM2nRlS%2BPfM%2B1N8bPTzAnGWW7i1jwZfkLN6uFNfyvaXaJthNlIzluBZaShAInaPyR7vDwk1orzuMCT03ahid62pef%2Bz%2BA3U7m%2FzLsYPGZHU24a2n3joi%2B4S7%2Bws6hZbyUy7wumNxn4WQUrAloTAP%2FiqkDTrHxtvzDYqOlmw%2Blk%2BkRR8KnyAfcSzTiq14Ge5tKmYgLv6nWBgYUNPhGYfP1x3sj%2FHSqyDBD%2Fb9haQUibcUdgSD55zUSwP%2BsAUKBKzD%2BcRCFgpCjIQDXzC58MvJBjqkAdE5yY4BswIw630A8OaW0scrYcY6r57fAWwvXnilNP3CGvnzFKYG6VEElXGRxnpfef%2BcJ48aLVVnRLJv6nGcBCF2FVE16eYDgqLE5X8U4yS4Yk5zL0%2B%2BjsZuaw2aMksj6KiHycUWzU5RhqXW1vaq3WWty9jmZ9DOxNAaQ2PKuuBiLdTagtGP%2FBbHgnpgHz%2FaEb%2B8OnzE8bJIqJ6eijUzZFhPoSuz&X-Amz-Signature=f046595c948c935382815da6a722d1a4b0b277bce615bdefa121e6894fbc9f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

