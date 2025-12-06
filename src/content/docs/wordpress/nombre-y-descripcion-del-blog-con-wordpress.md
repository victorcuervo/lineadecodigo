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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPWOET4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHpthhA9gExiAY73Eb7R9YoSvOrYaDjb8Og9xoSjoVEAiEA0j83Px%2Bwy3t5P3eNMHHMxzNG%2BwCrNxJeOE96urx%2BVNwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDn8gWVl7hWiU2EetircA5dFuc%2FjSewOHvQJWPzPF687bBsqTnn%2BZhZ2XMUpmvLSNcQ9vgxCihYL0Aj6FqYEaQgNh5PMkvr%2FRJ%2BykHna%2FVa6NP1doQOZuWbVRmQtfrwoetjkT27gSmU62jsebEpKBf3%2F5P0IhF8815aoM2i5Z%2FSs3xEaQaA2Jehv%2F%2FRsJ3fV8iN7Ob9V7NoxDEBMf0PtosW9kinKF1NlCz%2Fl4hH9dUc7KfyfDKmyB0ZBhORpeIHemH322d6ulopkjB%2FfU%2BVjbMK7OepEQjHArls4oBWTgI4r4lcgquHPprBVSM2zaBeIeNnUMaQxvsFwmokwdR%2B8wz380Yu5wkKNmlgY8iiY7sqxNN%2F0Xqbk3qCWHXpH9I31Xsq4p28Z5MY2txhV3auH42oLpP86Q0Z80mIAE0k%2FmwxES0f4mZgPovUgq7CIZDBXLu16%2B8FGPb4qxeG9V7EiNTg9wbcZIrF%2BoZ8%2Bm9gqJZsSlXt%2FFhfz9WavNbdvcpuOukYlsMH3AXHIgI7TOKpxhPZNq99o%2Bxn4yU1LZoy3deXoT43bO64VJIqjG6V80d0FAwxsTe4fz3FhC8JzC8BmwTcQ%2Bvp%2BEXybtXdu59HzvrMfZHexUmGSfhWlDhjyno5SygSKejoJQC8%2B7x%2F9MLvT0skGOqUBwkodSksp60jPweXMqeVctaWNZj0Dhv6sWh5HgKqkWj%2BK04gnd81gNFA%2F81sPbfzm4RyKu6w7nW1yW58HrqnG9fDISAgsILwXZTh8YQmv2UeGV9vKXgEWZ8C7W6M%2FPruMGBxtmQZzcevNs9WP6AKbX0HJaPaDtOAo9ATe7N1r7%2B6%2FaSp8eTWLw6uHC5oyG%2FTKnyee2kthIR7noPA7%2BKNxMK1uMJGX&X-Amz-Signature=d6ed70ba0c4c479dee35c058f1fc0f9d5bb20080dd11f8061ec4b831e47d1889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

