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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBPU5OP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh66m7Q5nx19KQhWybo5E7VkvpVECy7XovYdxiTUowxgIgKaa8TwqQHXH3dxAhRhNLct2J6yXb6A0JsG4ZJTGbhQ0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK1Knvt7urIXX2bv%2BCrcA5BzS9RoT2xc1vxJR1QXGN6EIcda4nLEo%2BkeeHglz2po8LsQdh9igCQPFNzlP4oRZSMTJOrkoKI4OaGjOyxSCNA9Ncd2zPqCva%2FN%2F%2Bpm9Rpmat6ElaWLNfBF%2FTUKyvY3Wxg0glDV01%2FzbojhxTaPXxPMldUyffQG7ILDFFXPYuCYa2A1YIqGNOGN71EKuHy5rVDI3AAw77foQ9FkvQPMWSX8lKvNa61CCPmqtVnqsYEDuTOd4R1%2FD1cQ0%2FsccuUFDnhJOn%2BhMkO%2BzM%2F3Bv9RYbzbjIr%2ByWWnLFPH7znQbL2pjHM%2FYxk7AuYwkDc94W3d9X7xL3XYcvL5LtLYjtJW%2FvslQVNtZMVgxNFU4pNkG2LIpUpaexmebjxNQ9PcN45s%2BFKRrBitCEBcBCpIx4ZOueXQQqpSZATCW3S4kHrFzyPqVvMKyAqHm7lwCofW16mtP95DNpOFBGhwcWqdUHSMu%2FG8RHha4AnJ7G03l6OVxCGHhIq5IWfGZYO6puwyZ95rZthe%2F3GfUfPXcyHlCHttlJ7wtenLNuF9h%2FVd7pGQRDJH84gvE05XfViYkGtO0twhX%2BiBo40a4604x81WlWuDfjk04kFlQnE%2FEhs7sWZ%2B6Am6ZSQRA7%2FVWl5ClG%2FGMOSyyckGOqUBcLnDLCLHNCY2xKDa6nkwlpszxxIwJ%2FgB%2BKxT%2B1reSjeyr9P3FopqyJOb7uxs37C5RoXATWk86%2B%2FJBVo2feubkpaoJAW%2BfWU6TCXSxh4xnTqqKAXs5uKUsqrt%2BWeqRefBdR8nt%2BqniFSXiFdG4Mfeyk1RWv0OUXcZTSeBah61JpHWx2lSPEpEQwiN%2BTtoTM99snYX%2Bw%2BtLspI99PMzl5o9JFvVcKG&X-Amz-Signature=57ee8219cf0436d7082c7266b90c65e44beea54c37a25b9109f63349449bb929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

