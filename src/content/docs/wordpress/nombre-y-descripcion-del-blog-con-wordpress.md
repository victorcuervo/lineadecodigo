---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXKFZAN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGZ0kkPd7CP5H2%2FNrisewdgx4K91%2FjQKQTHfU4npRRpJAiEAu%2FsPLNibQpVrMWELb3yao6CmOwBdo%2BmP7XGlUpjk10Qq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJm1YEOuhl50%2FrvmuCrcA230%2F1gMP9EJBkpgF6XCW9qDkfmT78uL%2B7Y8HoQ1fsCAsQ8l3XXjAgRK225ReueAx72DHvuiodhawFPXJAa6Wc44G555czp5dqGolXVz58dZos%2B0P4Vv2MXMaVTunwSgPg3VDU%2BGopFN4M4CqnRJWR7j1L3t7c1o1ZQmykNgd%2Bg392bR3OA82r3MRGZNz%2Bn5kAmpV%2BvOrcIbl99oGYF4PhTFyFU%2BvTPBNVFbfL%2BHo40QJ9%2BVId3G5t35MOH0iZM4rd7WrfD2V4hVodyE1GdwtZzlB3X3GNuk18BHAzGSm4V0biBWIqPYx%2B9imFF70jTd3Xc%2Bmq8FVTGKXQiJL0YfPslJY%2Flo1nx%2B3H7gagmA98ys6GXc6VAhyJVolBf3RC5munKEmAgl1%2FmsBX2dH980jjTGoL6lqqPEhBeQnVMk6NMu4KflZJp0MLLbsIj6O7oWxEfPor93DtUzgcN1pUiTPYmhlRdXrv2Noj7mNU5dqrrav%2Fe3%2FbMdeErsvY9le4CpRCPga1QW9Gm1Z8f%2F%2FospbBtxKpPmNURbumg%2BJnQAIm8iVs0riAYLz8jupLSwLe0hiMND3k%2BMeWLHkN66rIO%2F6rB8VRzsjTRSN9O2o3WZP6XiG%2F61aqFeOM6cjqRlMKO9wskGOqUBXRkqam6ex2oHaoi%2BqT8I5RN2TITCvCZJU8ajzQ8fsL6Xu40f%2BwTACqSKcIBXNKk6yQ%2FrMVx5uaogITIH6bhW6i8wJE2LCy42vKITLBXi8PeHC%2BzOoznWHt3GrTZSSD42GcorGH86uqvjLrWwQszw5k9TYyBkKu8QIxn8CRdY7mrXAF2%2BTBvKrDGalq3dvO0qAA3TfRdmM%2BYVRtq%2F60fIQ0J9xwrM&X-Amz-Signature=82e5727ccd8bec96b04b10da09ded3c05622e7e36fd7c3150928c7392dd735fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

