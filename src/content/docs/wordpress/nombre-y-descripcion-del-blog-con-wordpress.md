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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABY7X5L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCTn600eFoZHTltUbMphQThzqxv9qUqaRdwvf6f%2FiEcyQIhAP7Y5QegqL6eu4f1%2FZAu1oC%2FoWNJJKADQl2IvoPRvK2gKv8DCDoQABoMNjM3NDIzMTgzODA1IgxuaovJiceuuim%2BvOMq3AO6i%2FWwpmVT3pgB4bKGk3YQlmcTIkM4W0Xr6k2ovB4IZOmk0MRcvwc%2BXTgP0dm7oKO3nVpP7jJt6gsIsy%2BQSVirbzpK0o2s03t8IKv3zfSDYRNcwP28Hom7iO7ZEcFLds%2B%2BHoCSzX1uoiUVt50u%2Fbehpr7RHwwf66DktIm0F%2FWDqHdg%2F5AFdzaN2qh2Mpw3eF2QMepXVsOCXSXEnnYLIuOMuWU7Tmp5%2BPLXD28MsfJ3cm8yq7omdyPyJ0uZmLuBrTHOJkBBb7E9ln4Ni6nWoBHFfNCWCNqh1By5uNILLLHZO6VlzBcz2P1hoH1R1XOXvlbceAAr97uHYhcPX%2BhUYp8rEdtdiqCzfE1Hpm4fv3vq9UdBX5LvcOkmYxcjdrzqoIQ3OQWWXqtPtleGj8Y%2B7uhfQx9EXj6KyT18XQJfB750MHFaYR4oiqYF3s3AH7r3kBAUlKNmz10Gmq%2Bfna1FJ%2BtYadL26lVVpcl53ov8FUch0YkbMAzk5I0Ev%2FeZ5zMirfh53RUI5v1tC6lzDhO13M1N3IDW8LosEIFoH1lQPHFH0QLmosWn6RAtwvaRJQGR%2FOohdP8DYrmIYI49LEhoGRcjuY6N%2B4gh9XSdTK4upPRLrvSi61VtzLi%2FJpKTATC7tcPJBjqkAUPWoNjcsFcP5raE5SUZG5m1rCs9dJXwOdUnG6Q8Zw8JU4lJ9usAOPqb8h%2F7iOadMGoEz0mIdrcQHbUHMCNPCELPXVfRskKTEUzTS%2BxnmvO6Lk%2BOOd29DS%2BEWq5bIJzBTYdtha3ACtDOLi%2F5EHJ0usLUgIWtVnmJTIMlDbCdSpxW%2F2JKvD2jgb%2B2qW5zs0zs9BF%2Fh8DvJ7snMtG4Uv1yR%2FmYuxNB&X-Amz-Signature=1a041c08370266943b960247482ad37d63fab39a1605b1fda4a66b083b0d9d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

