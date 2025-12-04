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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXWKRGE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZtmcC7AVGtjt7jJL%2FKyobsx69Cs6lcaY9WZfGXAfixAiBlpnleqjp4a85MvimIDtPGknfTcTUZDQ1vBJRCzwCwqCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMcgYORNqZLts6NshmKtwDxNgrjvurDqxKmSFR%2FF332ohlW%2BrL4quvMaxPHDhyCLtGnVwuuUDTW4GAzyEk%2B9vQWNDft%2Fgu1Cdvg4vzVWNNGh0y3gb6ZblDooZQ2B7mq6G8jtUNTAk2Rpp%2Fw2lKTcB491H9Ji31p6SWs7Cd4q2%2FCbaPnbFZ%2BlR%2Fr9n2lJ2Q4eUrddqLvwxXYtvxZ7agzX2%2BmwlaJuSYn1mCBwGpWFnO3ncsuV2B0byvyeuRBzstx1BqcNthflO1YGVeysBUF3MdWHagTVO775LqDLLYmRF0mykrm36PFbiJKg6kx5wxZAQVUruRFLfz7caNfE5CSOV84Xo9Lcw1H8aHrptZOU6BNuoH2lrelyw8KbfvtkvhcqafW9edj2VMR67t%2FSFacJ%2FVLdqsIXSAMg1FXYhf0xIoY2%2BbMgivbgWBsy7hWzJcTIqdsyBefURTHWJ73M0RUhZkY1HRzJVPL1%2B8l7y%2BlPP4tpZOGbmfyS3pOJtdtD%2BGtjihnawNXoL%2BhUTC%2BUa3vaZuPXW%2ByioX4fqciOOnm25ij2lMhaRGmr%2B%2BgOxlhv2orGbUI89nu4WJ%2FLRSmwwUA4J3TzS%2BjOolHpb0OhClAhkdJYiw1IVuqFay%2Fol%2BN2PEZNk0sVovHcPUXoeqgFAwqtzGyQY6pgH13UoTQAQIL9%2BaafqzgruOdstsKf%2F0WVmU1otc5DnuvPrUJqaEMrMEcM%2Ff%2BJS95TGQhBSSV5WQ3mDC3I8u4OMZCSfFxhibodbUi6iYtmkbBL5o8KekMqdTZkziIMs4Ffi%2F%2FpS4FCu49BA6ydSgTK3SP5lx%2FC9BqIMD7dxO%2F8EgrWkc3Gb%2FJLu7Keyad2GNorj2nZal4bnx6rFOtTCysqA%2FDM5NzeAr&X-Amz-Signature=c40f1884f680ad4ce1092222aea16071a1839ffd72c9a7f46eca85a578f05413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

