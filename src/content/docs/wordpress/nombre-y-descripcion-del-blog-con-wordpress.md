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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIROUON%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOh2YiLV748NpfP2AIRhUTor3ewwsRwGUNpn%2BihMNrwIhALm%2Byb%2FfewV1bwbH8ckPIDgN59MZEg%2BBJVXCEx4%2BzuFPKv8DCHoQABoMNjM3NDIzMTgzODA1IgwT33No3AmzQARhP7wq3AO0KTeRoW1ot8%2Bj94jUvEoYH2vjlrxEZbhjz96UKVunBBy%2Fe15gmW6114ffqBwZiDiwyxd2XGuljnITC5UEr8clp7ejOHk8ZCtDihqXIyMcFXKp5zXVzX0v%2BmJXs5Q6Myi1Jit0gATVl%2BOiZSjynRHhTuyaOLTbITfJX%2BffJByerHvwJHIMAmjdPzkt7C9bWNfE5yTpkDIwX%2FZTcZUBGuT3aNcrESevEHo7Delm5%2FiUIP3Pr6Osn3eD8Rn6W%2B1pdvdvZTIDRik6swOKDGgJ5fSHNB4ILDa3qp2DLmLt1auBnY%2F%2FIMheXftPbR3fdUTUSo7aFZc0AUrXLO6NquCcShaGUp1fe0ywfdY2G9yR3A%2BVPGvVRAao3LzKmAIA3zBR3qLQ2z71nxxKllJ5CoqmlyMdCauLkVkaIIuPhfp4OMCwH2uzmWkaikE5QagExo7Di7y%2FzO%2F%2FrLp91MpMtUJWXz8pJtiRftPDhE%2BwmAtM7I%2B1G%2FQUFxAHiiiwQy9ofU%2Fdt%2FqfSl9HLARRPeNxX9CYhap%2F5QllXQhj%2B83PAsJoxXWj%2F0r2l%2FoNB6u1KcTHguHPnyRnq46yO0kNfMNRqx%2FNJ0ObM9Knsq1n08eMKYgPqqi8oY14VDt4HB9dNaZ%2FDzCEx9HJBjqkAWj3Kel57vEo%2BQoo2xH3YFIfoju6ZQ6sq9YoO00O%2B8jEuLObsi%2FRZtsS8f%2FJNVH%2B7DNdx4I0Cc%2Fq%2FEGyDxMoujil9kV9ah7XzC47EE9g22GNxunhas5qyO89ieXVvDhdAMkcXS4bJMvvO%2BvosVQmGLcOld5TQNgNkvb2i%2BPpwlvIkK6kbG6zr8umgZjcT42zJmTLUGEV8%2FZYen2Rgqn%2B4rh%2BvWc%2F&X-Amz-Signature=524b4a15d60ff4177d7b64332a75c050a7f5fbfc0a49a85a13dd3b5cbdc9c402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

