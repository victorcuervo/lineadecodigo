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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L33VN22%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDqlrB3r5kzavUYMjktBcUJTG46khTt%2FI04cbaATf%2FNNQIgQaJy%2FHLmP1NDN7cyE%2Fd%2B2zLtI4BduMtm1XnGGVmnfgoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNWlQrSr%2B9EZUb7zbircAyMN8tvNrEPjASd9gFg1sAPtZ%2BMn6ZGY86vLielSJmeIKEPdINz3kPmLvyXH86x0draKa9aZ%2B7iffaYraJfqm5GRW0hmPe7KR%2FbVD2p9sREcD0YEz8NDLzU6rxF%2B%2B0Ihx33ssxDalJsAzsZQqs1PCajBcYymcinlA54bT1KUU52kVX0Ex%2FeVCywJEMwZSXxef2LSd7Zt%2FHhDpqckVqoqqJ5n%2B642aPYIYbxfKJT4P%2FIRswtfaMH0ensc6h%2Bpi8taPsj8opYYXSV9GUZy%2FazddgNPRzut3WQeUTjjR54PUCsYenQKWtTG%2BNc2XwjLvdccm%2B%2BJG783dlJAtUnO5f2TvBvXaLznZ0VVTeiCJXFAPg3lZIuDa3xhsb9zOrdPJcCknUk%2F%2BMUEeFxA%2BXxrHLB%2FSh5WPj106CG7KU27KxAZ9wzWF3ZvkMnY%2FTns6qkF4j7B3vpupTtXfkfHvcOaNHqDyMEL3s0jWUEwes4jUDkDRCK9IGUKECkWNFKaka2Hu5Azjr%2Fv7FhoX5VwzKbDVWLCZNkdbH7KZLeylrc9H6K8DnuFUmFi3EJyEougXJ0TGaKzMkjzvDIxReDtWq0VS8qDG0yIYbSHOKxK%2B1geEDepNfSUOYoisor0fY4nyH9WMMD4wskGOqUBeoXScMTEZ6tH%2FxG2aGa%2FkNOl9VgBR6ZRnwJJG3DBikZLivhxSs%2F30mIb6bqCzFx8vcZeAcB7jrj7KkWfdeJkwsgPvBQItvlwakQsbm%2BZN0R0adL0wcmBqsRwJ59l%2FGHwwxCso1T2JfBXVtrclloLYZ27ghAMgo0tTN3F2T9fj8AJipuV%2FaddDcCPysM1LEXRGca6MBMUrkptYJl8bjH%2B5fmvI4v5&X-Amz-Signature=28b0170c1133bbdb1047ffd7f7a12dac872542ea64f4f5b10948454293616e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

