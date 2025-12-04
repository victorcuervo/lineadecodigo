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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCA2SEE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCrMS67ddMQGa%2BtMyvhrtSQOc1xUtWvv2oQKaThKY4bUQIhAKfudfmFlqt5bXFLIaIyqa58pesuAn0%2BlfNJpln3v3P3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgxVqdbjBy9%2FKtI69XQq3AM7lFr4E%2FRURt66lO7Um34k%2BK7x%2BfBULrZCuu53cocVgMZMC0TNjMpw7y5%2BjCYpC0tfzzWVV%2F5EalKiz9HH8qQbI68KOvWmycpLGHkbw18Pki1lckIJOxmdxvWuhav9K037lXhKbUhSMp1KoiYFAA8CPP%2Be1lH57sd8c6f9nYE6WHLChiXIdPu%2F2Dy5EgOaAr9Cv1dKVXCZjlTpSEYx6fLFML08z6O36FKhxTDu%2BOupcnyBvWkRoXIzb9B%2F%2FWPIFyHzmCR5URxyKO22sH%2F47mtKtN6Eczw%2Bn%2F2ZEuYaX%2FbjxMDfBIuwq0jRQQBtBLXUA2b6RaY%2Fm9EuZiUHtBvlSxVOEKmkNBtRh1zZJKy3CBpSsR0M0iOCsBt%2BFbSuEgcq4CgYbZM45VLN2aRENLT9%2BpfM1JEmwXxyhb2c9qzI9eRxLkMDy1sZ7ry6NXkc7VOfSivxvKR6%2Ba%2FowuYw%2B%2FrSh7sOoSMZ0tlbt33bT%2BNIH5R7hv%2BCANSpSvsTTboGavqh3hEPZgavCvV6oJZZm92WcWcPigcPQMHa7OUv%2F56RP26bz59wu%2FcXuhTdkFMJoigggKDjb0ZAgvJMwQAwbmRzfuxhcIJ2txbLqkeHSTvfWA0JbPaN4c28vPCzaiDEQDCmkMTJBjqkAe2zY%2BRUaw8t2gLoB0Y4BGBkHnwbOPxeU1O%2FXUVDeRvKV4QnzL9i0jqDj4OAsU73QZvs9C86ewGqmFU7X2wFsgMkHmn84%2B6wjogJ4%2BwriAMNOTzGYvqrr3R6xPpS%2Fvi36fAsDxwOgk360e%2FhpS4kRHOoB9EfVGslob7cSbkbxvn81RAREQr3FmHS51SIc8afsEr%2FPbFHxXxBSBaIav2LzhTqIycB&X-Amz-Signature=3b8db82ab2f95a3b4a895a10eb0b0f1d9deb3b25d49b7774beda1bcc138a55a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

