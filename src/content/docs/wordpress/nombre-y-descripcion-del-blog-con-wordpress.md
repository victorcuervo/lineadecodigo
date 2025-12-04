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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXOURDS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDe73v%2BJjyipKPvmb%2FWcFBbSeiMLYXVMME%2BgH69GPAPcAIhAMVidlxqSblVcEvBDIot8O4tORrsMxEUcMp9n9Xi8xEJKv8DCEgQABoMNjM3NDIzMTgzODA1IgyAi7K%2BoQXcXyzsLN0q3APcIlr6BfN7dAjdTK4QgauT%2BN3wnI2fy%2BZc%2FWwv0QxibvNGfzCRiMn6JITE8Owu%2BOUNOaDiPfdW5LWpxhWE7fZUVCuj3Lp%2FQAEgvU%2F4T8pOZS6%2FM3CikiAeZjvcynsnZgrdeK0dJGyts4aCzP2T3SvCrhoBr%2FFOo8G3o5SWhtaGulUa0HKUa2qJQb83Id%2FT%2FAiwDCF3ZVLmv%2FiluerTRVjWCO%2FbRNcRG5qpDXl0i9hyflhUk1ZjP3aZlQJd7NsPigUhHmCBWQULm4vvQJ%2BS4N0wWuWRlHp2ha73iLoi9xaSRT0VA3mTSfv0VEW%2FOUwHWWSDT9XK%2Fx53C%2FM2v9V2Trn%2F3qZ4OKXgEITZfgWSnyZfBVthN4eAvoCyAzQSuopziwNU2aH%2FntqXAJOa9vbiprFI5QMHZHfHdOhxb5qwzAFhU7O5LD8z%2BmYBaYsLgMsFkq6RjF0qtdKpSRxUuuBgxRNnNSL%2FeVG9wledEbML8rpKDLuwzpKUosTKQ6wbVkx9bGzmI2w0a9Ro%2F6H%2B7zbfIjfz58wV%2BVfy73QEl3rXzCcGLk9Xs07c%2BPtRSjeTP8ZC4dypM%2BLwL1youDcmBHA%2B%2BK%2BxpolFvwzg2MoQGxGytsQ9u96bjvAcF2PiSMecjjDHv8bJBjqkAXVjc6JTkok%2FFG%2Bs6onzET1ZnY8nOriK%2FQ9VA6HiZBXaOQDn6GdzqeCXNiThu4NazX92CgBhstt7uHaz5JxBX2yqYyo8qQFes4jClXFm9LQ3GFQ69f4Zl%2BA4ztywYMFHdBai9l0t4BiY0Zlnmtozpo05YNPz3fGJw%2BT1u0J8fvPAEB3Y3e6s2GIGnrMAkhukZFRANyAe%2F9KOJRnuZG3njsjVS60%2F&X-Amz-Signature=3c4d10412fd72f72b6b4ddae508e06491b39e1a1623cecb7a9ea5db054a11c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

