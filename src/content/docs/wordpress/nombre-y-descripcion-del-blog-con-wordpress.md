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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLZ7IJY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD%2B5ARt7H1a3SDA6vXD7fPrbzv1QA%2F1XY9WscVeiIbI0wIgaxBxBiFF%2F%2FLuYHg3HoyWG7drAPjw%2BPr7q3X5uPFHTMIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOwo6v3wgNnlsAAQ%2FyrcA%2BRjgQhlUSZRDI8ACzYcW4cdjr7oXEyS7rsaSqVpHU3iLY8EbYO6NwZtbzRvez9Y%2FeZntumbWidnTczmWd4Js%2BqzosQF3Wb0R%2BM%2BFypwbkRbhP%2FiYZ2VCs4uahD9urzq8aFn%2B7VTqf7JGezMucUHpAp763FPEqdMRw%2BdXYWMagVg%2FZpkpXihFJjuTcuhl%2Fhm6AW3P8C5m%2BBZ7sP5EmG2vbX%2F1fe%2BEnGe4xcjC9aYMTXj8%2BXKdk4KJXAFNX8Jw2FJ4vWbf0X0aT5sXkOEjby7pmbQ%2B2gSNaJXN%2Br8NJLpTrIrqyKTyKIqeWa3Qw4rtW3hOoE2ffOkQuF9Or56YXtx1R5HHwrSccqvoVLE3pFGi%2BZ2%2B0btfaePoK7IIS5JrsrjCinwhZdbQTmRS7Y%2Bc44CVZblpnuvgd%2BOLmAXSkCAzd79Ijis5hEVyXjb5U0eSyiSbuIkcFpn%2BViZ3yv7ADv4mFthPMpsYcSeZfHs1aKZ36JhzK0B2aoJhuPv3F5eZ9pxi1PGFs9w%2FpiTL2rM8BK%2FHHZLbR%2FQlZ2Ha8hf5eTGTzwo1eXM2LmZ3k%2FJ%2Bwly1TtH49pUPXGetvoi8PejIMia9rXPWuweJd%2FJx2p%2FsekBSQH0KINVTvS8flLlid20MMLUw8kGOqUBcvJkntoL8Da5qsP7HIpt4nespAW2BpOPdTObwq5KfC2l%2BX%2Bh4WQ8kCBcB1lX2V0QqyuTgDb7Sl5p5oJC4UO%2FnMg0ypTMpM3lDYDb5nf251aONIWS8CYjBcRBnxRRILWycLJGxs0rR5D4h0fGZ3L4f%2BUu0Pgduf9t5uSRvUvn%2BFbYJ%2FSaGC3Sjz8G3nCS0qhW0qWnw9iOmzdqf9mjMnrV%2FdrNzq30&X-Amz-Signature=f60e85053fb903bd313f1223a354553feefbd8229e320f522d6aa65b5a07a39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

