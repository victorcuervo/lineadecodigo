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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ACZEFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm5Y0BpjFUE7CSnNjsPBEW29onR2GNDuySyzWAyF9vhgIhANXwqvUMPI1BNKkFWemPjCr5v%2FTvMtW2mxU90JA78VH7Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzixZWT5FDRvSVaWH0q3AOjbJ7VR2IjcIoQNGa7GAs8bP%2Fh3nL96%2FMaKjiAOJV%2FudqqkKy36uj17aGFwZKrB%2FZmDrRpupYQgrz2150nN%2FCra%2BTV%2BchUmlZHVrhokt6glTx9%2FkqTAeSV%2B2dUjYw%2F3om9HvKCx1uaBCe7SsO2KGt5y%2BjXA1NjFaiIm8oKOycvDbqtp2UdLvKNfP%2FLZiod6dVFeoWgHDkGNNfrGUZgWbdZYLaGjsFXL%2B3D7x2SZ38a16%2F7WKI5SIvRNRrKrYDBqPAddKDyIjkNoCjpzkkcD0lXM8f%2FKhCtf%2BqLk4tFb2jkRo%2FXZKAHLyFKJB1NIBG3Uws%2FHBselY71CyoLuVMzenfIYF7d0jPvkJ3p2kU%2BqNaXB2irbrSp8O4sUmAasf9b339Vj1h7ouklbYz2TRE99E2vZaCDp4%2FFDrRujTVa0E9S0St9QtBm6cAzVR2Q9Uqzi0lJHfbOwwu7CZzO%2FvwoFu6WBedxUkoSviNFXdhp3zcYFe%2B52s5irx3ge0r5t%2F%2B7KHDuNtdqo4ju1dDTaVi%2BCQ0hyicb7kGc2%2Bz3MwliQAJeKdxGfAb2HTNr9Thr4LoUO0KuRXyth4l9Y0kFA24FJPdS5A0gOPzdc5W0zLlpdyU3Fey9qdRsO0b0KnHT1zC3p87JBjqkAeOe%2FdhCB3tJpqysDCb3hmK1lMoDzzXSrAFOuwvzuE7317z9%2BtW5QzN3NI216qeIGCYi5kNAgepKqRHMSx1XV%2BG6Pgz5XLhnnCQw2flawFCuH5RpexzpN29ZCQVjO78KXNul%2F%2Bc%2B0IPsoQOgWEyTSomJow3ct7nJ9tq5qylKwwdEE2TrNI6XHAPCf9jOrVOnnyxyC0tMSqGF7wm7gn9RARW8vG5M&X-Amz-Signature=8879aa113c24dc3aef9f59c0b426b7b6d97e4d880e88746e8d9d0e9c28e038ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

