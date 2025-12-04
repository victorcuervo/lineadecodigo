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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67MALCI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDiCRZpZi8S0Y2%2BYnm2YLJPd8XTLKY%2B08sRXdxn0Ix%2BCAIgPuvv79SjSzFLYTrX5OQ0N9KykisA11JSur4%2B3ZxjIpkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFt9iAgCIlNLfU9dvyrcA3DLU34OAtmeEJpOJqJX%2FGb9Mfne%2F7OWPg3HkvgADlyuTmW2VZFVaXsZ5QVriuEQTBY%2F9lTQRg2K27Htsj1AHCTLIgZPDRWlyc6SaFIyoh4wHkaZZllykrgbxnCgF0QPBzLooe2ewzF8luxg1xL3CVJD%2FnjTzQ7e3WqxBjoez21xcI68AXp5suJsq3qt%2FVxsZSIodxI0so%2BQQCprdwrXayztx%2BXzXF2JfPxLskxFOIlsaH6mfRZOy%2Bq%2BZOg2a%2FkPTUg%2FmRZyWYlEL7Jm5fohGEfd0KtccjJrQsjxceCd%2Bde2NwRPPL%2BRRgsxS2uHmNz1GKVqZeVYkISlUDHJjL%2Fywr56pvhP2KvpmHYoPrmxdZKs04rdLuaGjCZ42K8%2F3wNVYmekBEVjS6MFQW0MXrQhcG6JypvCqaRA55HtlKGfvTEcGiz6IYAWmR3hNy8wiBrCW2N2QjLxvdfz60FeattYctidleMzU7eGZm%2F1FEYnaL6hRYy95f3NfyUm5Rv25WAWN%2F3DQNanEJYLp2yaC7YKpg7sD3eab%2B%2BsFjnMo%2FErAD61vlGhZRkWclrHj6YlaZq9HMdA7hoT7hlvCOjrCylP70W8g3qiLFlPAIDDPU50U2W9ZRTUjTQYy%2BaBHadHMLnUw8kGOqUBiooe7QFcsKVLBaMpkwGsLUh8Q3I%2FY9mO%2FUSh%2BZ%2Bu51jDUrSiGKLwUKTpJF0ZyX2weRDb%2Fdb9R5xVK6ahQ%2Bg0Qmx93L%2BRO9Yr03UzNqJJlJnvoDb1SMabIQj%2Fig%2FnUoByRXigEUKGtaMfuQaKpmuo%2FsNeLPQ%2FWsmsTyHVCAHyFmfd7yvoUcUme236CRcCns2vwcCdC1uxpfmvkDhmS1M%2BqNwG9hlB&X-Amz-Signature=dfc05e26447c99a7198fc3516dda955526b8a73c97cd1004eba4b19c02a1a732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

