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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV2562S4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDYK%2FSwQrbZpP7MuFIshSCaHtTLm0t7y8ySlEgEDuSvKAIhAMGnno1HGTLTzIVhGELwiKvDpZByLiXod2Jq0rtIQnTiKv8DCDgQABoMNjM3NDIzMTgzODA1IgzqhLG02g8wbYfmfW4q3AMyOpDYKWkyxYhu4Zy8s9PN6Jbthqk12R7Ai75SvYL34AyhlPUyW9ICeAtD5DMk%2B8Vzoh2geO4IWBXQARGGp9ufQSYHbEvrqd%2BE41thg5TrKZHE%2BaO3yj3vGgpNORE%2Bj0EqCpk%2Bj85kTbMTIgLxZJ%2F9CQ%2FqaWDLaXE3lun3cXVyhp9ehD4jnE5O79tE6tdi8Xhg8Y392ojGD8bvKqsVu1NyKQPc8MvJdnUBszFi28pmVYZqrPXn07K5li3WcVHaTFhAPmDYbu9XmZn%2BnuopRTkBs5tnG6n%2BD%2BbvZeU46RmLDUFhq8u4ZqrYmbazDg3sGZfVf3jsMDnMRKByIVaoK65Cq%2FY%2FhNeeIhzgBPYlp6oM4XPUaRPf2WGJiRNYCXZi3jYU6%2F6CFD%2Bi8HEilnN9wkFO9yJPuNE5tTAsEpT5A4hko8YqINqZfOSwdvyld3gKi9yT99tsZzYu60VVRstPaznr8EY7jrvcOxFDM8zPBLy6KkSkdtSbSzH2tGG%2BUfCxvWYhBaM2Wt9nr8QEqGEZuRue1YFvVXltAyO3TW5YlVsu24Bll8pJOzPO2YBnVwC8F4Djczi26%2FqehYthio%2BDWZGlscE%2Fz0leexRZIlOMDqGHYFDrzI4yHMxpgCWVizCn%2BMLJBjqkATCyP%2B53Q57ZNBc3YXo%2Bc7FnaPG5%2B8UI8CzCeAW%2FAQrQLPpuvn2rG2VDZS0yYTVuHpZv8583TvaKXS62nA8uLVJ79guU%2BhhPhlELZ6gu3UTwy3Grv9PtKeimODYYcFNDI6T6oEbToOYBtBgfbx%2FI%2Bt%2FxdnkfbbFh89%2BOqB95PsT8dzhl%2BOmA%2FrUcqMFYS0%2FjsqxsmVEwyGi6Z7R9O%2BKYK5AhLWf0&X-Amz-Signature=e81d736de701360d456dfee3fd8587ad807e0de464f68cdac9172700f6db82bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

