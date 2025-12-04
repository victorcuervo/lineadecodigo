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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRWIBTPV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIB1Zq1JQx1j0iaNlx5%2BrJ0VxkF85g6sVsiEewhaJ%2BYWEAiBKVXkFc1nkRr8g2ecWtusp%2F6icn78qs6M1jmKtwJIbIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMq0%2B7w%2B6LBJs72vIaKtwDRZatV90y6UgzCxPLhUtuH%2BMDHRZnpcwNKVyazPQLjIPPByQ2AF3nv2%2BOUwb0ARNm%2FswLjXlv%2FXsf2CFrlLwnD75SOuP0BtU12Sf03%2F%2BtrU3nFqVElcwYrwacm2f%2B1xnpHnIFnXMXkHJTLAASHzOV%2BmQvlEjovKQ2X71fY6bp2Yr9VKsmo8oawHixNSz%2Fyi5XrEsN1ahXNOYvBrUtxIWtftsK2HPyoZk5gyF5WwYUki5p89lu1UqhhDCu2ahT52D8vnpDrxD6alGPxERAR8CU%2B37mzC7vveYo4TATtjXbxbOzob5Dpzjh5MxJ3IWhsDVtQ0EYKdPybevUV2TGUB3t5Fvi6CgZtpynogo31LkVVW0Xeej4f1Rcr0EYcAHTATViIFf3pxOUaJ%2BmtoiGlCA%2FANp0uUARoz3LA9hsWbMwnrKxf303B4IS55y7nI07L%2FGl4GXBaNE6J8oNFG5d7n8fLZOR5HSkLF9DAfXXF8Q99fvCyKsanzzy5mmUGNQlgFPBQYKnc9qdKPK%2Fn5RxrlWoPSHghbxbt0TOXquDrDWQriL4G2VJnCc%2FILYbpdGKY71uCJgPvqOyW%2FCYA4ZCy%2FAPJk2qfNqVfjB8%2BUYcS265bBjVPT4hnabVYNR3i0IwqJXDyQY6pgE80s3FBEfR%2BBL8vOk2LR%2FHcN%2FJB9sT7eeYGiLotmi9XaS4NPx%2FvTZNrWJePtcuUHrvaC1l2eIwrM4xYrX5yHTpmht9Nj35wkT0%2BG8JK5WC0ceY9ftu1IH0Z0i7W2WRTn0DW1Z68whVdpxxonT0gnTKBdfuNGnCAe4ICTAinH6tQcCpyQnN3f2NHr6LP64XlOFyikGWU1RrZ77atTYqMhKU3zUaS8oz&X-Amz-Signature=3bab990ded4769c9e465e64b376fe5ee83851aa231936ccd6bf1de8cde903a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

