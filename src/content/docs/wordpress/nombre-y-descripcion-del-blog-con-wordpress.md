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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCH3HAK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqPOMIeX3xy1dDVgYJDOTup5fDeoEmJiE3hQ%2F5FCuV1AiBkldj7GlaH17s6j4lvmH2jYogybuVlPkqw6wH8tb0RSir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMBwvCywmgmqpjADN1KtwDTStSLJDc4DZfAZlhfvFSizJ8NBbQwbPgp%2BdwKWdauB2RvjOS0E7Qc2nPPxTQeok3fspRSdrlGuN98Gj6%2FNWULHMimMG2T%2BFQ%2BrcGTsZkvS78eOkomMVDTvxiVJOq48sPPL4bhBC%2B3L0NdOMjrjIGfXn1gFjMGchvV7TAQhfP4GnPc1mrRq1upOmyKc3Luk8IoVu8YJuIs5KEY5w7YeeTHsNk0Vs3fQOI%2BEawP6NAMnxdy%2FIxi4d1oBuLXAbvPfvgF4fD8lkK8rJ9LmjeaHSRdTawtCyOE4bwcacgh9YLR3xiMKmytP1zH3z7wgX8keMpcJBbZ0url3wnRmJWI5daJ8yiIeII8oYs%2FeQMqLJT4P0Q%2FUhaKFNsZgcIoWOiYpvZ9yuNU5GzsPBlZ9EoosxOqI8%2FDmzQ7BXmkpgAuOA0ppV0hI5gPdRFSAIBY2we5gst40GL3FhoA5mWE10gYaxnxm4K0fg8ZHVq9Fpvp38XuegSzqBCgkC5KU0VPqGEsn5fapYSdneQ11zIFkR3iPJL9kq5n%2F0uQP6ndz2ub6WUdTXemMC5eiPXLyextTsX39tdA6EcYCwxEfwJXtMDPhVY4TkRx%2F%2BHpRvEK%2BYoJ%2Fn%2FQbvuytSlvouYFAyxX34wuObIyQY6pgEiXYrNKDSk3E%2FztTs4jcF1EJYnmGRyI5GiYQT8CaumJIOwDz6KbW0IW6C6JkoxIIsWXjdbOoUhuKluJtSsYhD%2FQSEN9qKYS0eGaTaCHoQ7JeiuDTS6ElgvPJ7dzh1U7gn3KL%2Bv%2F0jhDrX%2Fg8YNs6sB551h171nM8Qfj9vpm4jt5%2B%2B%2F%2BL3hap2zap2vO73B9u%2BNDyF%2FoPcfXZhrSWiH%2FAS93hcrjbPo&X-Amz-Signature=93002c7e8035a2eeb7bb1efae374bc685048f8a097f27b7c3097bd83b18d5b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

