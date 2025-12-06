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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4EJYSYX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSuGqPdljMK%2BaprpIgBTiXJoLg6%2FbACWJXvFKxHqa%2FOwIhALrq1adJuCbNgEak3vpCQ3g5lZv%2BLIyc7xFH%2B4WWq1eYKv8DCG0QABoMNjM3NDIzMTgzODA1Igxlc3LWahvZvv26sg8q3AMw%2Bl6fYwXiQ9T6M1P5s0CRMCQfuJtfkZ0ZUEe%2B7ngvY%2FOiYgfaWU%2B6mhlK5MhuYsuJ6OHnt%2FFwLYyV4tb7cq%2FxwfoeazJdPONvGOS7dyUTH3yCNKKSBbCYBm5gHRn6gtEaq8ZOxRzFOtjU5PGTAmOCadmkC7mdBPjcIMCbsqtEhXtfTA2AlsrvVFb%2B3XUKFWWyIOfYKj%2BB7vwD9Mg9q0HJ4rHkz2k5twhyT9dpHAU8JG8%2B%2FCO5Sk70QTmgX6OLihnJUwskoFDx562GyAFHwK%2FoBdzkjFtFlfA1bQvVDgqx7AXWSLwmSX%2BGue8gdV8vJFc7YjjhZgAHkSMBuRIFzlkj%2BQl%2FMD%2BasYO6KbvpZpwjw4lYaEq1ZImEYHEMsOeTbSr8Qh%2BLw%2Fu5y%2FoB3iRK0CBevdHmKATU%2FEJDSKd5L0hy35CyKV9x%2BHf1GIlap3hRYmwkkmkB0%2BnknXkJysaYiP4euJ9l2HMMsUGbv%2B5A3WC3e7zisvHCKLONWONQibzz4sOyoySb3b9ctPw69lAAz8C8W3fd82Zy1O96UyUNFQyBbMQgxSvvNit1RlzAhvnBK3BsmH9tjmBg3FOwICn1EfxJrbtyFl0HE%2BPeVB6zE96lVIokEGz9AUMbMpRbuTC7w87JBjqkAUndVa3ronP7lOvTET14%2FkjZ3xjtA2KJ7ZfXbHZLLIMsCU1CROObM7GqBA0MO8G1HMza6%2FrfxNJ9ndi2ELHXKfCmE2xpmt9ts543tUMHGUM655fqTa9Dp6t42%2FP2jh80LuoJKEkWH9r7rQeoxMk0vX45dslaqWGQZrFPkkRdNpSoXqDOW58BZQNTbru9aWCUgHvx2nKbKuuejBdXuI9mJkX5xcgf&X-Amz-Signature=dc3fc6f006fd8ceaba7173e9c8699a536833731ca59ece7b8a0214cb20923acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

