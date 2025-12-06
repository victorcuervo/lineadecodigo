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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JDXT22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FoaQQrvkjUq6e8DGyiJoboh%2FrO7LpI4yELa4aIR%2Fq8AiEA4PiCJdR%2FqFHvSfpABKOvnZsxEM%2BH%2F6jVqSnN9pSjMf4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIOPsFZ8P0DHvIGCbSrcA%2Bc3EwQz8d9NN6a2gbI%2Fb7r55hifey3p6phE0w%2B5vSFWZpQpcTxbeTMP2%2BGSPfDnbgPsIUCV6jX2KXz10rz50rYIeagvNSAD2OrTCE%2B0ho%2BCTZgcs0PPQRHK0W2fJMRM5HaYxQ2%2BprNruv4VORt%2FPjOn6KAnQvluDvswU4Md0ZXhPIxHOlM11d%2FQJPLm5EfJS4HL%2FUwY%2Fe1eAhx0gQiNmB5O1gfntNmDGA%2B3fjZXW7rqcciTXa6ZXLGdCRG52xfyCSESxviTW%2Fo1bOlHrvZGrd3rGFy%2BhU9gMXgnZ8auxeVuTCYEuiGhFT89YDGFOXyL81ypEHlagWpHQoRuxcavpO7OKM1%2BEVZfyb0uowJBlB0YVOOc1kwBv6R0JdQR6k58f6uIuZ9%2FWVRiLK9Fa0YXkpuBgdfLeN4UIPRkG0Af48vNN0VYaJSYsKrLjXn7qnyYz8laQLVdiULFc51LW%2F09HObMQBQO8FtaFxHlZYsFLnQO9Q4DW7hX6XbD5l1YtnKK1vATl2EvQuu2FpLXWqzxo57o0Ij2J8I8I3LJt2fDH9qAdtPoxQh3pcUvaPGauoXL5YkgRAt2hWk1k6qnsmq4U0QwlLUTqR90PhWQDQJa2QfxBurirK0BPD3AvfPBMPem0MkGOqUBE%2BQcD7hhn4rJtsb9AbhqmJqFvM2SUrpGNwasLRr8hVgrBI448PGVMdhpPQsEVIPaAAzoojJxC0q2hkY5DkxnlAnsxJeT6icQwtU9w6MMCjm5BWge0N%2FDbzoUI3YF6egvy0GD6jqFvAJH1O0q85xWyoSfJ%2BnSyBNJXK0nJtiIm5ZcbTP0Y5hU8%2BDIOk3cZdMQAp8zU9BxR2IZAYBwbB7IeFdqqyqD&X-Amz-Signature=c8e4080c6a5d69e963ea39860b8fc734eee856b923bfbd8583794ad116f68184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

