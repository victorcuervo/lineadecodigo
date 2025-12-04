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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZADCGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICSNhjCNYwNwWrkQvmjkESipG7LxluDYFLflRzNbFxGbAiAOs9oEJj%2Farjm4M04%2BLELwYp2bvc01ixroy1ris96JkSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMt2kgu5n9BvwiFcZMKtwD5nrwsWgbLyD9N4MSqF2tvcITo63NftzgpjosU8izPkK8VFqBoyxmNtwa3Ntnlw15%2BEXqQo9Bx9TW5ScSKCaE%2Bi5sNsnl6jPG0T%2B18EDcxZe9zYvX21eKEwQahKYhKZ%2F35ndGE5d7IF9k5lpT9cZaeDN7WvvCMHbsJ1gyi1iUcP5DmEqv0cox0gKhkUNVWZkNvaToOXZzG6FLjZPUwLLLfyXK8eZQYUHryWhoSZqYdc8NuoeqeG1gc72AKPt4NqyoGWhUghN62O3VFYuxB2zG5K6%2B63BvVef6FJ9gVHf3CCEZGfJom2sxeX8X50TErewzOUD6TQe1ks%2Fzo58opdEF%2BRFxV%2BtYUnT3W9xtgeii%2F3U0rrdtksk96vGpQKQQgm91fncOPELUrFdLP0zbn2fLr19Ta2JGv6wNaPVekjLhhK%2BjOntPr47HJ273cw5C6YUjq19%2BJRMzUYUGuB6rnXWOJ082jV4SBJZZeyii9uLEZ%2BE36dSaj7iDIOOleM8dJohO%2BDG6I%2BAMmiwLCMct86sd5EnZw8mrqH8kNyFP7laHhXgM1YQrpjYNHupC%2FXTW8gSeU9h8llg9aw0CBsDfE7jFoo3SiuagafIU9rpMlC6fV4BhAVCvpQf1j%2FguKtowtefEyQY6pgHWmQA%2BriVDJbZ%2FPWfdRNF4gAg4XGKLKaqdLgJv%2Brt8Dsuu9OY%2BcGbsqhirBUikmucpQJ6n5qdN5WuPuCuNqQbjlBy3jScnCkrd7OLqSp%2Bzin8p3h9rz1oNCGivPechE8GVSNySpKOjlBhkK2c6jRI8rfuSfQirlcS%2BixZ0YGUZ5pTIF4d7uKMQS%2F79j7drRqC5CGug4jLX410coXgKhR%2B2RL%2FZOxD5&X-Amz-Signature=f6a4bb782c4a78d2fed81d468a2a8ee832c29db4427593c9cc5577ed81bcdab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

