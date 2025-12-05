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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDGXS3H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGOBQcaooOFLQudIGj2oRuj7v9CXy3Qlwl%2Fsgwp3WkcAiA%2Fm6cUbz%2FJtAEx7pWo46ErkttLsc2ura%2B4gCJQQJesKCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMa2om4p97%2BIrv754vKtwDVnYIOYBIwsKafuBnMhm9gJYJu0E1YowdfFMDI5U5FnlJOzaNeITHN5IwdKuY1SBJ9SZf%2BVbvC8LlgDNoq29U44xNGtNDieWe78J%2BG%2BDadWkXzbQfYWlEyA9hWAfDAJZbOMQc5ewEf1odMOU3RHPH7YzLmN1yxWxMumqnSiyrTPCBjKzPBHdbppvqBHfIzqaHI8gI%2FaLL%2FWW%2FZdXYPhRwXhFEDm6RPsNI5oW6Vt0smBIkqQ%2B6cWZeKN7MOi7qU%2BIGskTLRGUCmw1eUUb5p7aEiIC0gYjaIeUv4n%2BSbg4LkSnjyHKdMsE5nrex4O%2F31als7uGyDpGws1OtVbc0Vsvmdj%2BGpqWU5KVs0rpRNNe5UaN0R%2FwqswSq7VJGsGojKXCmWjenYsWW8MpkU7Ydy%2FviXXgupFLhkbRIvgdPrJOPp4LpYVmS8NsMmFBHaqFIf3K9200DzMa2k18y9k55B9ymJnBa9xXieo7UYOlLrsI5%2FR4stkc5TMo661I3P9m%2BIPXRf6ZQkGA4B%2BhcIFDh3%2FKK9ylOTZudy6yYQDa5%2B5WS5VMWUu%2BFdcroegoh8Up3y0dZIoZPrwMvl7n2XzUSo1eJs6VumwvvCjDoUFcWNeaBB6hrVsi%2FcKejh5ATh9swqszKyQY6pgHXuKywx8UTIe4L9G7njsqtOGFcbHlwG3WuMb80ylNb3nPUW5905%2BLCxHkLY72BV0m%2B9q4Muid2l8Ofu%2FB%2BbL0xpM1xQKSbHwJ5rClFs8Iv2uWLG6qfvaMzKLBiZtwSMA7%2FhyTgJ%2BJ952yW8le5Kwcank9v7nNpTXz0pD%2BZPwbmJyk5p%2FqKd1GA6buDIEOlMT%2FvwxOLK1OUyuIUdqTQRC4eAuTIBVsw&X-Amz-Signature=f2979c56f583bf3c7c29d95cdbfd31ecf77af4c09b4712ebe3951f76e640071f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

