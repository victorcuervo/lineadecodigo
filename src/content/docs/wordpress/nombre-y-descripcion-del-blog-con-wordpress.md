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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAHOKON%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC10cLpWR5kENgN5zi9Zekf9yf1G4XeIpbyX%2F1vyPP6agIhAJSNuEdCRAUuuU80av%2FWAgVHeWBiVv4%2Fkahd91sWtaJUKv8DCHUQABoMNjM3NDIzMTgzODA1IgyZCPEqqCkl%2BBvuCvcq3AMCkslkQA4eBo%2Fswh1cyksC%2F0z%2BN%2FyeOx3%2BHCSluompdHA8iTf4LczIMYOIa3wLa6X0y3sfFHxb4GIN5YfZJ3wM6Ao28tn%2BtL3y7DGtsqLWCNxIO9k7%2BeuVVOjSYtbaYG3kBKzzLBteA9tTUxh6knK92K%2FiVte2JK329xkNFFTZVBiCfR4DwvgfyO7PbgvnzGMEjiHeGq9%2BFz67B2iPfnaNq%2Ft3gPoGaAcSfoulh4%2B614w8h7mPUTZrtyZ7SRONZyaj1ZlE%2BZUK88j65I2%2FokdBNkn%2Bzr2%2Fgge7SZSFnk62juTYhW5oWibtuDwxKt6DX6gXrKOqOe0ydpd5P2l1PZru4GKokcIK5CAMHJPmpAaIPAfb3VKQim72dHqs5ecAdbkSUC06sz6kAeJH1Su6ggLR1Fzb8Z1QPW%2FZpRwXGvqnoBkGGw8AvzjfGCC3kdbwzaEhZiikBlD1BEvVtZxTkeDiG%2Bjbs2brDAg5VMEJ87K4VxQFVjMWzfuvEKzwJuwZYydlCHsUpVfWSm1dv%2FOIJ%2Fw3u7b1FgzglMz%2BkilLdn8bTCnLjz8qt4GBBT3SaiOHCLVFeuPza0rXVSXdnkrtdHz01QotQHGzNgg%2FTj8552m9hbr9c8Xen8r1pkpV%2BjDuptDJBjqkAf11Z%2BXRDOJ7SEWOYkyNA0m0S%2BdAXb%2BEhHUuPhvGMhx7GbnXadRfhCI5oHo8GXSToEmkSIDdYoHTQsjeK3oTgiMCNvmlMSzNQKbgTv6cVDgJ7lGgHxukM3JD%2Fx%2B2%2BFY5pc2LCJaa5nTikGQusafnceTkJyKUxCPyUhcrxpyN4PL6k5vdfwVAIw0giUKSq1eZnyGH3nBTOeyYgqF0zAW%2FwtdYLb4q&X-Amz-Signature=bf03dee426cf95d67627aefe7619e52ab3dd0f4893a642a4a7dd1ca62c903072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

