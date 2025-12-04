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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHQQXSR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCHhj%2BF2JLclt1gTTrm3O%2FOtg7MFAy4sYRYKdHugTY34AIhAM%2Ftl2KnLCIkluFkb5Txeqx0igaabCCtUoQm66p0HNKBKv8DCD4QABoMNjM3NDIzMTgzODA1IgwpexL%2BnMtKCG8t3lwq3AMQjLXcS%2Be5SVNGw4xfAC%2FRaGyZ6Z4ScAOGFq4MZD%2FZphzx7c1Z2mISBJkztzuA%2Fm4MJ34G2X6rZBBzdfZwsGF0KubQCrTPJKbjFBv77X0aC5sqj5zAVt9CSm7wtg7kzgylMIGL8kNu6fPhKUmXnOGySDHOngTIUpo718EhuhiXvibXeuCGefqrjVfpR%2B9e1uBSfP3BGWIznZ3uqeNindEXUnO%2FV1NDaPYI%2Bwhsy%2FXtCnjLq4gVz9l%2BTT%2BoRg%2BTsDJLibkUf5eEWK3qL22cpC%2FJiJ1Hhj4y0RDk6ZTT5lJdFPjDHExN5DxCkTK%2FWoIudnGlw%2FH5T52w723j%2B8gcK1JUcwjkkAcKnzmqPtFWec6GllOeKQ6fMS%2Fftq8%2BH%2BilpXUzTjuGDljtZcdudPW7INliB0IJwOEBbj5UUtEREkocEWyhwQMwpWcuJVEZYNClpM6Aj6NiMgNF25jDAyxu7bSSUwx1VRpAXIEamQnGqLxvNoTz3cJZYzJsDUTXpMLBx1Jk%2Fr0h%2BWdE1JK0wRqKhtHAUjvueG167eqWj%2Bmc82Uj5FsuskQaCrhpKg1jo%2BQqvOnGq6riW2wfzhwRV374t2OCc4hY2vwtqslSX2TZOk6AV%2F6DPJU3OO7XL7p%2BXzDurcTJBjqkAUJN2hH9%2BRcJ498OVtWSnLscuV4ZpAsyqnECOFZocLcgzLOP6f8mE2ypqJBnI80QgblhPm1r9RG222RVfHSoxY5HCU0H4XUZnVChd1OELYlapIRkP7UCZBmUSjEVtiy1gDynsBS5jDoadtQm4q6obr7%2B0x7ewLVNXn54%2BHq1Lj8kZyDBm2o%2BIxPZxjhaUMP2TNRKmMzYfBpQJNnjrscOiXI9XYrZ&X-Amz-Signature=e1cc59d81719bfbe0df9e0028fbfd457ec377e3ffb5d397937a626abccb55533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

