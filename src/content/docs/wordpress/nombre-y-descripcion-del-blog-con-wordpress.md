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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5PMAVB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1WfaukO9dqGUPqQesrsq7aGmInuKR%2FRBzkNdo4EGDugIgQS%2FWNKT40rmLpkTjNFkuYk8sdhjjuXLkuYQwv%2F3aq6kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDD4O2OqwJhuJl9zP0yrcA9ul0QNj%2B4PjqWFCe%2FYfI%2B9AgV0jWzrQctjcUJlbspf2SaDA%2Fg%2B0Olu6dYbJhy0csuzkrkJOuwDoDw8ZPKf7a6mafrGaAkuYP1qCbMkvjNRAuntdN8O9q8J%2Fh%2BSw52I0QvWT2cWIgPn%2FwlrpCUeDdivqrCt9NyhJB%2BILA%2BjJxfdDj5SZAT7qrHF4d3jGMpDj8xmjr9yl130wNqUHesCl5Yxv2A%2FNQhwv3MRIq%2BH3%2FH6ESWcXRy40Q%2F%2FSevID317nGTrNwPRrcoxwghddglyxgBQts6FJhl%2BMKkQlVuBQJw4pk6TWs9itNGmUt8yKSajez8OlPvbkJ9sA%2FcHJnWjzj9rC%2FqQOflrA6QXT6re%2BcsRr8utlEZroxPItCs2vkb9LO4aYRoBqWwuygUYu7vhgPbqg4N6VkNlwPoE1Z7VmU%2FlH9d1xe5%2B%2Fn1WN9IFxE3XPE3GaJCuND4wC6MQ7IG9DJSSAmpzz%2BnGERplTv2lE8gTzk15aSu4FX4q%2F5WQFuv%2F2XS4FYPg3iKkX3W%2BI9evKYAzKxOeAO%2BB0Q7k1pYF5Y5ECsZIOAnfjNPeLWa2UptQWuIPbgyZFO36sR17skYmxTnFbx2FL8Y4iqWLCfIEe7cd%2BGbmmiTSBH9fo7tIjMKynzskGOqUBwi6SjZ%2FZ076z%2FUoeFRj%2BYHccLBiSSgJOWXN8hbnIRpCSadlLw%2F5X1H3BTt0O3XicgFR%2FC3zPvwI1gUyRWdIIq%2FL7ZSJzLb3%2BwvgzjeIPFWmUQgB%2BeVnvH9dVKHE5S8vdZ%2Bu2OT3l7rW9gsiBzUiDoDulqfDONUvpWAZsfpT2yITs7CuFZy4PG2%2B8b9QeSfayOhHE1Xv%2Fb8%2BPEUUQ128JiTDiu08V&X-Amz-Signature=99e88487e6a36900d7e4498df16c141ce42cd5fb48151dabf9fcb729ca152aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

