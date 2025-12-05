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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3L6THD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChdPeKsSD3WAIjaxs5MXGOG2lMibq0uS34mISMmpL6MgIhAJM7nNhowMrS1tf%2F5yAsKrLf%2F3Ub0p4S0H1sHQYHdSfGKv8DCGAQABoMNjM3NDIzMTgzODA1Igx6KuPvkj9sM9jKZC8q3AMtiPnwd4yaSt8F%2FmQAMsZ2ufU50IAodNsBrgb8vLoXyPoxbreCtVINhU%2FguCxXMlris1dyZS8pruE9qt3xTa1ZbONb9YEDxtjFNTC%2Be5gNGOp5IT2eh1HQ1Hu3yuFgOs86SPRwhGyfZxQTLI1wV5yW4W5kqILVh4cZxnRs04n0bAJmDMTJOMMEjMwv0%2BYjWLd48oIJX1zCSYQSdNscqfNC6lDBDyE5NGPDxQwTRhGk1HSv%2FRkptkbNaZLYsNTzc0A237ixwMXytE4P6F%2BfoHvwVoPTAQEj7xjtfQzGt7c7lYQLJlQOGQRLCHz96C1Z6XH6q94N5J%2BRJi%2FHlgXn66%2BsG5ea30JhnIiMGRnRns7zWn4xFr%2F5pUUPx2nrjG6Ox2ae%2BB944nqdjWlZsbWi2oIw7SJiD4geA%2Bmw58RTQNY2PqCZKqkvcDUdAnU2zlrpUBVAEpuAgojiqjDvohmtpK8lS%2Fj%2BzQQJxG%2F56RKssCIFop1gpC1PQq1TLX5b0cCNO%2Fn8esHiW3unsXPzfGXsGs2Df1fqoqo90qoNYwtmbT8ppuePB%2B9QkZXZqgrRM3dZ%2BxAeLqYvFGrwgc6Hn4UtExKL0gkrxkS1VZcLuAyYT2h8Tuxd5vYAsLJ23A%2BQpDCc68vJBjqkATeg3XHo2LhrUf8OHmfGWG9QGSd7JZeHEOaXTWVlbM4dQg5coluoQAsVW8uOdh%2FCMhcMjOqX%2BP1UKnmWl%2FQ3tYoEjq79Jtx4VQnB4j8wSMTNHbblccwlMQ2IW%2FW0jIolRM97SIu%2BAjRkrV334wu8sBLcqTMH%2BJc02LJhRD0bWQqjXRIo%2Fs47mln4wT%2BxtNQfL%2F2csKIzlR%2FVW3WmqcpFXPQvFgBK&X-Amz-Signature=a380d2544e3ed0f08b31fdc1bba414d3d8610ac5700e86d60748fcb8cef736d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

