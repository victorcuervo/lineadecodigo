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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4YTWKA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC400mzy%2BKSTrBRsQI%2BaHmnbvm%2Fatw%2FSqZEPxAOh6DWugIgP%2FI9ZoXfWnyez9BjdIsngNPJtBPAvtmI%2BnynDtfRKA8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK63WdjzUl6rAhPZpSrcA%2BmtBpRJM1YRO%2BwGhyXeI%2BYq8HNsLEAf84SAINWg%2F2CiAUzEFpnYMFuc7HJHGsGNz6D4T5XTltvxge3B1Nw063qh9lF2Q4OeaQMxXfz3SXD7ZPXfiVX6rprUoMGeecSHyRm%2BksDblF%2FAwi1GN0gssFMc%2FHRqiYtee03D8hx%2BRlQFDL0Hj0LeqXuA%2BPZT2ASlDQpI59tkhj%2FgD9aj7zKA8CLBDBXfRayBTWM7R3xTYCrTkSRaKjdFO%2ByT%2FYHUAD9F1ZRub%2F%2FTyr%2FLU23U5%2BWZzt7VacQ6TM3bA%2FsrqVoRlG8q3Ks82bma%2BiOYp29pmolYnfwRv2cFewd%2F3fQ9Ivh6pb4xz4ni0BIdCX18egHeyqRD5a0h5RzVMTmkRBzEe1ltquz8I7gvnl54KG5NpkjtE1jhgQu4O7D5oQ4O%2Fq4ZeNJEP1TJMNAuDhWQqJuD9kboA%2FC%2BsY7sNzmuovnD953b9QQbf%2FL0fKj%2F%2FfWtAl%2Bl%2BlifmQY993AyaLOtnOoWNGQTLA9OFZGrsZIv25zH%2F%2F0nNVI0JoGag%2BPDRwX0g8yQLiuQfIp1CwI9sv9UFpIcZD9hhmmn9xWkEv%2F%2BBa9gTisBZA2vngvuDQ%2FC92yA6xVsAUu9eALolJb%2F2PwqTuRIMLOvyckGOqUBWtkkWMdbtZQ7NiTlYTcgiR3Tpt%2FiY370cHf%2BxwCRdHQWFodVSWWP5r2QUNRwBWCR1e%2Fh4b30%2BN1AQldZDIgHlgqRQKdvVSfeJaZy%2BsxWjUCLCBRg2qH09963vBCqLvvTUEAnwznXd3pOuF4FInDCZjqSrfcURROGKN5rmNUW3mEEQQo2kaokhR%2BVBYoh%2Fq3qYVTHEXOWkt5QwoiA3Ls4Gv9R%2B9sh&X-Amz-Signature=bd5be1720aa6e025794eff9ca0bc82932dd4091277a19ceb715ed77a04d9f2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

