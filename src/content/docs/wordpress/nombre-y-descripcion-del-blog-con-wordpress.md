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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAP3IB5U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICfHsv6OEGn0uk%2BKNpCeVUjyY7Hg%2FZcR%2FGkwrQJQfaDIAiEA4ejRhy97BD6xhwCJkCtuaxenzD3tPYQGdVrMHAe6Fboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCr3pee036%2BJP%2FuGryrcAy5yOImHWpk7nOfgmwfU6LFvusUyYQrrzU3RFVOZYd2QXy67UcDJUDzIBcMpQYxT%2BBIfkdq7i5k8m6vQmQoUEpiT9KaBJVHBAwP%2FlnQ11Ip80ESoXf%2FGSGuqJ4%2Fn4%2BiEWYQ6hkG5fQRH07Mf01KvCDcuMy6SWqdswhssbD7Fv0C3WlTdZYQQwicNeYnqwBwIdIpDUVQ0Ded5hm8eS5%2FLETKnIy5I5y%2BnZHc7pdaKO3AyuICm7VykZWEKc83F9oRZ%2B0eik5Lb%2B59g%2F1wQa1QDL63Eb6t%2FzQRvsdTgROrRJcKnCBZqvdiYSQp5asgsl7KtKYpsRjenfh7XTZQrs8gWove3SjhCFXFn2fpal82TGO07sr5drXRqhZT%2FmE1gv2JhVdlO2chuLqwT0exvFYe8FbpsFIrva0SaapAqfFSnJYHiQd%2Ba2hogbQgbS9O%2BzAWtDTqMH4eTEyXOi0qbd2TMENaRr90LOKskI95SzaBIdhsftGvYv7nNmmv%2FVqOSbpLWftWvCsz6xQoy8iJ%2Fi7OPovHMixgI8hUDE1MQgx098HGth3M15Zq1am%2F0pz5LrlkQALQQeWke0AyWdJBP6t2Eo5OQS1VCjasfsqVz6NTtKuofPlJmOw%2F5FQIQH%2BlcMLnUw8kGOqUB6poz61CAbsi7uzUw%2BmtcX4H24yYfQgr66o1ISWeuq2dB82BVJ3sfzEEUHIqfwV8Fs6NVlifrQuKt51vIfzPXsFAelVNb%2Fek38Y6DlOKCeCaqkTk3PimYUQF6e4ZL22Q2j2YUPJoKN4%2F8B%2Fi9Ty7jzZM%2FeaNVRYTGUzsbOWpm9Prlt5ZaZ6Cw1gOrCM0Vu%2FUa0SRuH%2Br2It%2F04VBQ8vD3BvmW0eNs&X-Amz-Signature=bdf2d72ba521e0aa3c0e97d640eee73206c01faebd8f14f3c9fc4ff441532ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

