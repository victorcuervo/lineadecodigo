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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5HWOPS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCkkNdGzgJr7YTuau%2FUkGSyKBCvkJJ1FzIWGuikERl52wIgR1iBO1mnA73FLu5sbba3ZAUCnJFHZOtHkQ3tn8BROB4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCqMbXiUOCMubp%2BeircA1VNkstyRpOO2CaYoSyTNVyOUIZYn0K%2Bb3Zy5j0rf5%2BxKqquJriyH5oRalchxeULmV8h%2Be5fuYBEY7p1DzA3lfEEUY8Vz4q9%2BpXT3oEw7EiXSqCAI%2BDku%2BKGEpznHsEaI2J6wlNlxiAM9GiMdZhwTMPCLqlA1APO%2BFaxrsadH%2BzM0WkpEXJ4M7pPZ5L9xU5rUppnF9OrH7T4z3EvpJt3m6FpI5k6DZgL%2Fj0XZRgr8jgj02R1kk5KHKQ8aTkZ0mi7QG6mAI9l3LgYr0PW3959MZRNMldXpM4V2NaXqkqqBoRHgKqVKfN%2FL7P%2Fw1dLZx%2BxmVR3jpGIz2hrJ%2BZByu91pMwvvJ68F%2BF%2BEe6Resyzvcz%2FzDCEqJ%2BArYfZQLuDKNf2GvaaX0F8bXVbkmlmtazzdXjW5EJ7Lgesl2mtcM5c07kTys1Dtrss1xrFHKIDVVkyo8VtOOD60OwLhOFHwEguvkscQ0zTGhLgz9erqrXasfiBAFc1oEm%2B9F%2FuDqvgrG95pkZhVJ4jTzw%2FdUI9oW43mFUKWKDfqH5eS89FXogTPDQXg5JqvHzCT6qC%2Btpvg%2BFviId%2BSOr28S%2BdqJrCHnjHPWrzPTPk3ZQ%2FjN9Y1ElQVryFb%2FarG7zV6nzSY5owMMyGxckGOqUBj1L94bK8Gh3AZwSrrn66UfNOty%2FxIUX4n7vnB70Es5T014YLjuMZFZk53i5E57Sw5iCwOrpf4GdicNi1OdGvI1wDkTe6hyYvdDnQLYH6zLxH1wkn2HK5C2ZC%2Bj%2FOyfFNtNVPRgpTGGCbmqPOof5ODYjZKWWX6eKRSsILbxf4XLyCwVn2%2FOwyWFIUAZDw%2Flhy03VluwssYW6uk2OxY5BtUFrULs8l&X-Amz-Signature=4ace57d9a84631416669259ba0d75cd5a90e71d5a23f4bcd912932a7144b975e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

