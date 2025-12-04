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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR52NXN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL97MKDlCq%2BbIJfLN9ErvcmKXRF6qnQybggCU2hHGEAAiA%2F6dGdPUqlAS8gY%2FGpg52ccarmWjn%2BgVqG5gVcx8%2BOpyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM%2Fw0yNaara6SGVipRKtwDlZRglG3gJK%2BKluZRDlW7QLRBqw3P0FsA70pXSYTh%2FYdhKQDwkTvmbLoOgd%2FocpweJQW4dciIe0QnizeGakFJVAyar%2FpOZdjn0Tr5qdTaa%2BgOpmZuifhq0CoQ6pSQiqhSAq5y%2FHzGVWDgDXvxwNz1p%2B%2B9NIuiQhfdZq0LWBlQxwkg8myUb8G7Wh8hag%2FeVsDT1lmBjj5PDh4LaOkL%2FvwXt8qkltfaHhFCwaFlYgVfRHW3IYgq8bbEIhT8FABpgZ9uHA0iXNsVv71isSW2%2Bt2P58QpfML6anHaSmM5smGUKsSEJg62NAeWhWCT9B%2F%2FllecaEYhBTnmcFPaSlH9kCU%2BYhQKh8iQ0rO8HQMrqRpfQr4Ud8V7GlYWHsSN8jPJsiCu3JmGr1jkBT5L%2Fhv8FQ%2B%2FjdRp2kbOCD5zuHTK49njIVdYyF9BVnC9Djy76UNFa%2F%2FPAdXB0ZrC7usLGYJ0PKF54K%2BKpK2ifwFBIdM2m9X7ZS2gxEY2BQmxTZR1K1n01TQA1Rf%2FSS0Tzh64BhZP3W%2F0RX3J2chW%2FaLjmvSJWBamyEP19a8KDQralL9e6lAEmxf2fU6YhhtA%2FqOtwMkVOJJhfQCOKjSXwYyPkuyV4EcxCFEQ95gnhCuzg9qPiPsw99zGyQY6pgGPTnlrKiPkSGAkmEZ8C5zh%2FfaW7R1gQWtjOVLv90Wk%2Fjfpc4m6Lqv%2BEb1z9lixnpghhEFeKD7hesjSQ8HNreLBDw3t8oa%2BoWG1bOAywXOK8HjZ1cn4YHc7x6PJsIggUGMF8EeRPLV3AMwDA7ETx7Dt3XfwXZj9Rbc58LIzCHFNySl8wzMBMNv3wD2CYdC%2Bl4JShKk%2BXf0mwgVwZ2ElXG8baLVHVar1&X-Amz-Signature=925f3ba42a073dd78f2e2f06f53f0e4f79084112ca62faf6c171a45db076e364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

