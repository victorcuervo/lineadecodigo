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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPPY5VV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCxCytWwBD9lc0b2qqF3D%2BXrEZMj1mCMdpfrnOHRVJJjwIhAMAb57J2jPvA0PH%2Fx2aob6lKiPErXyrhRa2GBF4xGVy7Kv8DCDcQABoMNjM3NDIzMTgzODA1Igz%2BAeW0NbDfudSOf7Iq3AOt8vMGILoKIvzlEOgdfjbBNH%2BQUgRQTszcuc890ApNB8rPlGyZR40ENsuieNPHVCwI02kQ8LEWH2IG1RU2%2FNcyWqbVEVXjsTbpX8OjBPaRkTrcUh2tqWKEzzj2HL4nO0toMXxZNXN%2BsB%2F5F7O4rEak4jQLF0UV1ezQDuaRYco3qXEB%2FpnWpMj1IjsClRfp%2FRCzTEqocMkX1t7VnX%2B9ydPSjR3fGx3yASJwc52aFsdX6sfymfUvLx7PqMKDx6QRYX8RcLvuGXPG5h%2F%2BIEwkAtGQMOzaiXwI%2BuUxYB6NRa0czj4xlBo92VTinopX6dVMHP6rQkKKREZ8ZK04nfwG3qpnnEfzsz1LrmA%2F5WLhN5UAnYmWFa3YH7FBut3lMpPUs7qDqRqn0E19Ep1upnWjOOyoPbFQ0e6dp5wsEixJ2l5lDwMlyacAh7X%2FyTDAuCoPzl6HbKPWUQFs3GTNaDJX8F842wsPQ%2F2%2BuFPr25HVHB1cvrJvA50ADUFjv0oQu3tAIfLFjvIsPM%2BGet86U1v1StxD7yMlP68I%2FhLtozMOdJDyxG8Gn4TUFaCJ%2FxLFtc9IbrAoPQpvcwsC3TPn0cExKWzPkuyx%2B2quluGG4nTYmfbCAB%2Bo3zLtaH33sYB0NjCQ3cLJBjqkAY0%2FW%2BAA1mydFyPHDjzrlru557NGA9eRKLw4ut%2FqQXa6RF8xc3BMt6kIK7lMCRbJrqEjwE3v2R126aLw8moU1YRR25uF4tKVwKwiaAAh3lbpJixK3DLyU%2BLwkeMsfhWHBFid%2FHQTqXXVGMdDo91qxI3Qp4NI9NAGa1PAPwX%2F9ggrzS7PwVfD7Vdb%2FpZPWAygi73TOR5M0eFDRyfN%2FstODoIdA%2B5Q&X-Amz-Signature=07c951c034aeffa2bbd52b6a44b436b83c29ef5fc3db2395b021a476336bb139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

