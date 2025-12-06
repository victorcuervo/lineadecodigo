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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMSVOCV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALzDbqe3yPkJNTOh5wl%2FdTSths8a8BI63Nm%2B1ppj8V3AiEAsGvTgwbIMMLs%2BRoaVxLYsbRF3az4wSF8WrJNRb%2FA9iwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF5P%2B2OhBjmPWzfXAyrcA0AQeaKKPRIj9CmdCxJzwN4RC1V4Z8MLcQ8ecBwAK1QCE5BtLvg51AjC%2BC36cygySEQRoMlXBEYrG0HRuHeH95EvJOKmK1IbpYrX6H50NPANVWu29%2BJgMogRVDzigkL7SGQXO5um3T52ceft93mcNeF%2BFWjKgWdF%2BoXFZUXms559Z%2BtZDW1kHi6A%2BYRHStoIWp8dysu6H2hpD60sFGXTOLOxkveOJUpQcwz2onqVz8qT6%2BKUEaUkA4tWcXmB9ZkP1d%2BbYDO%2FeNji00bU9fQyDqjY%2FvhqGSuGW2lPHkSCF2OSHxg7RYSxHKEGWSvqVl5QZr3UmrfwI9zaUAcKM2x0MSMxzHRtnsGMQLXdTJCUU%2BgyOfk5bvo5IxXY6DmmNswfo1oYb%2BVIVmLFBTXJJdc3RwJ36YyMTbliMr577%2BQPx5kckRkEpYIp2RM82hAUDgZooNvY8vj8REBFWN5pVnBadPcR5zFbtf7Z7Bw2%2F1H6h89r0ggnf74kRzSKU%2BOubGyLeLipx9zamk7x5%2FP904EzyO73OsQ%2FmdbBzHyUrQg1y1tLWENHXFeqafS34zEftsJ72Kqf7QTWdAHA6W%2FYWbwJrRAvgv7vMCyOnx1i%2BUFC0aJIVEfh8Qy63OkzKBkeMJ3rz8kGOqUB%2B%2BT8avax5FhisRQ65kp6w%2FyVdXEOieXS6XCL%2BqppK8TRlFwOz%2FqVXsaUV%2BiyfEeO%2BQFzkzyxOfrI4hRF0P3z0py0uygsYTJVG1cj7ARwSClKJYF1DH58cubp1HzUNE2efvSNNmOAcqbQfTkBtnkNi1paxt0%2Bq8Qnccj0gRYMTRr%2BUP8hc0xZPEfh0LcS%2BOglr0BNG4t2kOfH1z6HcVR1CQqQWgvj&X-Amz-Signature=e742eec2bf7d16bc8eecd9f9f33c0ee26acf34e8646e0ce174f84372ecd41c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

