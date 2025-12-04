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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66JDK6B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOZuwmu4CNyVe3wafzc3NvoJ6FNpjJ%2Bgf5yOqqM6fbNAIgSnnWBVEGrkxt%2Fn3QDMxBmpsEleja%2F85vPBTkPQ%2BPKP8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDN5clXGFlR%2FSA0QQsyrcA9jwa9Y1zDs%2Fdx7Jg%2FUtjOW%2B0qR8TzUH7gi6sKA0s5tCmwK9ewJT4Vn87y%2BvRmEiaQVIxaZmF4hN6srt3ftZB4bKxg%2FHl6eRYDAMJnULQ92sznPyvtRJTazodwD42cF6gZDcsHCtMkyHfyxT%2FH4ZCmC9S1oFbGP%2BNPV%2FZuh3w9xCM%2BDHZBq9dLqK%2F%2ByoAvj0KQGjQnHYU9WYT2r4%2B2LCHzss0YXR6XC9QCevk1cNKqvVtmXhgy8dASQodkbiApxHg7xFuBcqFZgVEe9jvvhMD4fBUgdVJXR1W935eJRujrLZTTZqhOy2iAQDVLXTwWfYwfwUCpNVCQtGXQrXoDuWaqBLb%2FEFPdzbd2UBpgHHS5WBbs0cmwZHgvTfEaUyVRlvf6Wya65C4gx6%2Bmr2P%2B2CLPQPoD8F9s84iP0RZGtoxuy0LOmhIUqUtk%2FV7sQAA%2B9W5BQkWCpEU0D0fU%2FZbQ2cufMERlCkqzELAqMR8AqsfnnbqfBMyh9qsmLlmuTLHs1tHtGzpIoOGNjZZH0ziq%2FBzofK5fEq%2BeTAZIz6UQ6RGUNwsvDbB%2FYP%2FW%2FGuExspAIY5K%2B08V208kGIw36Eip7NpzXkqHvamOOZO7nbGQ%2FTpQD955O565Wgzp%2FH%2FV%2B1MMSwxMkGOqUB8EkPdwuDWcWYJFMfE36%2BY7aJllXO1Q5c9HShuRhB3v8HegeW4yk0%2BgwvKFYLUrA4SOjT6YYN3sAZYKyj%2BZB7VTW6O0EAsvL9eFiBOP%2FneOYnNJfzM49shZNcaWaLzXXWYOHYdYkORIcCfrxnQXsA4d48LHtuDr3%2B6z7yMOw7Na70qIX2DSKG4fI9kXj8OIzWJTR7nrWIHExMZt1Wa246qT4s7rFT&X-Amz-Signature=db2c35477a0dcea68166c871e773f996ee57105b7b1833f187236ea191a1e986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

