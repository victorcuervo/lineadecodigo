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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R223NRC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD2dFleDaLyzJG1wY8x1z%2BV1IYgryKNzOhPw6CDMwsAEwIhAJU%2F6aWMlPCgNg4JCV5EGwIiGruY7AJec6oWZu290ERzKv8DCEMQABoMNjM3NDIzMTgzODA1IgwRETjPeVKJXGnP74Iq3AN2BX8xlg%2FUSrtXsEwsBfl4am985Sths%2BUbCwXzxhP3zEx6uLAe%2FwdedDkRlfdJf3mdi%2BmlCa%2Fr6evCBdswfOIRmEaef8GtD9STIyPR3q3asgJCS1vltPMB5Yy3XmbBrfmTIhlX8gyOM96OwMUtJEwl7opie9FgvNr1ggVthCWgKRkq3QAGibpbiIsqLrZooXrn8Hmx%2FTqIyApO%2FYam%2BZbfuWoWsMKdjwqfYNEd1zUijJOSEb3u%2B%2FSi7AGgMJyzhb3Zmek4VHzmq06nHvdfKUF0qBypUkUyQlU4ySYKT%2BY5QnSSip0V1RFFKndigKTfRL5GmTF0HU0RwoDnSnlGKr9oMPHLxE7mXltvZjr9yQ41g6EVOIrNDNfLRIHpWyGIzrCn9rXMX1%2FlaTVJZFKFYzVJv88P8sS0KiuI%2BNPeAQfZaBNqDrNQDMlLYcGrF6i5WF7ukm9pJ3p0zGPT16SEXDqEnCx2%2Bj8djmtsPoyAnJO3XOe%2FT9mL2tTdcjaRhV4JY1GCkiIdVzcTsi5JZ0aLBAdIiB2%2BTrZcKJjMybzu3AdHVjAb5kyyOpb1R2Pm1Nr981JjeI3%2B1jM1SfJAPF9VoJ0LQ4tNJHyQiGdk46herk7bprRK9EJpI6Cg4yz7vzDqqsXJBjqkASpUWoKi8AKnMRmP6Snt4ZQM17F3bxBvpYQpYvzuBhSl9mrNvJP71FdLK7WV4T1ETsQJMgIVe%2BCCj4DibTnz7l2reBNvyHijBqCzgRLE0zW8o1MV%2F%2B%2B975wgoP4nG11wVFaiBneH1XSbiaovq68HwSuvc%2BqX8%2F%2FkHluBCcAZMV6pA2NolSsAZTqe6i%2FjVIbrLligvUmKjipppa9SzYi0ZJyAEPy2&X-Amz-Signature=065ce26bdc6e9ca4a06b7b4ac8f0bf99a5bad0be19cc821d8c9d8b0c12de77a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

