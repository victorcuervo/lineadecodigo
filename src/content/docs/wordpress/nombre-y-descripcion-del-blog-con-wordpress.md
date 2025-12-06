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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCGQI6C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyygipDz7VDKqh%2FQj3JrfAnl8a3aYjUf6yK8d9VOlQSAiBfFzfLOe2XV2iaqQNseTSMrfaqwfFweXpLmhanLr16vyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM0HXgcXjrGfh4nhAZKtwDqXoA5%2B6l9LiRhWr4GNU6Uv2%2F%2FHeGIvbncOWsvF8TZrD3o63M2rmW0Jjjw3cmaQLfeT1gBgBzRbjlR8VTNGr76dooO7dQ1no%2Fr%2F5E%2BbkSq1yh36kZjw0bdAm%2BeQXvmh1WafA6FcMJ0br6x6n9bMrpM6iOVxMA5ycCSKSNmfiwkteG9M%2F%2FvmNbCQPDQoPoUSWwVbxC87VDDAqvdUrR%2BxAeweDwvwi5ZDYsIyaR6bj8IG%2FvoVUshJV32xaOY53rDjQWkc9OcJI9shZ0sK%2FNBAg8KbWM%2FtPDhwUNJB6vp2ADI4uyU6d1kOCxx%2FWyaVXA1VuZLbo0bHTKn2ur%2FTm6YaFXlFibG8iajkwLsdYqMb6%2FvZTPr%2BNYIMZ2m4H1T6gXcTfotUFwg7mnr1Ovat%2FrjH1RFf6I%2B%2BMO6Lt0d0zxSsPutqmFSx4AoJTHkY6A2hyng%2Bg3yhC9LvE0uCA4zbDKBzxLKXtkH5wLQJmOzGh64nBI%2ByTQGrfF7Gd8v9NkUZJly6LWWtzQEyG4De%2B3t2cQ%2Fyywa%2BmJZijEdMkTI5IY2XKNuGazjxfLwXl29xKsmPrLBSzL926TqMpwaxypGFDj%2FOtq%2BYyfK4%2F7k6u9jHD2W0HgZOM5CK3KHqdT6xWD%2F9UwiJ7PyQY6pgEYvZkW%2FQP6so6u%2F1YpTtY7bmBduLJxtLHe8JKHz1N1rLLYeUbEV0Kk%2F6Jxl5OOrXIjJ0UF94gTeo6DWaQak21%2BTs42%2F9PjMdjxMlvyrs%2FpBvRsE552KHh2JpaRopTI9NkS5%2BVwCIrhGMhBHHDn0QkouzpxMKIR%2Beso4qN5%2FEElaj8nwD%2B82onrnd2ObHyknQ4tCZ3qAwJKTRcy5%2BqB3few11%2FiQe6Z&X-Amz-Signature=d69ebaad19d8861a869bcb34204fbe48dfdb896544646670f188c505d7408c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

