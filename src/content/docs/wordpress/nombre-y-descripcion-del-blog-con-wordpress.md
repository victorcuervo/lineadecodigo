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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P72P5KT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCL4iQpBjEDcrNTToOfffG7JjUNfGY8K6Q%2BzZlz%2F%2FP0lAIhAOzCZSH16%2BkJEZ3snlz9iocP1lGaGs4aEnaIqUo1eOJfKv8DCDkQABoMNjM3NDIzMTgzODA1Igz8EiVzlIEJQUKrbLEq3AOE%2Bh1DjMqCWi186ZdSO%2FWkw02VAvNfKmywtG7CA%2FRXV%2FH79Cj5inV09nSTjcNVTWeSmTXHl27P2RZO9UBduMkedz%2B%2F3lh2ziOUy3O8Dg1zdSW27AR0aCqmYiBA9sEHiOOgMTm%2F9GiClz8P6b4n%2Frk1YlhGos%2B4BxTFafw0ztepeefLwRsGLIpck9GMMjGemJ0zYkdb6OjzVOX%2FMnu1uqsqiUx4QlE%2FfRweU5A5IleI9jD5dI96I2omqwauAqo%2B%2FbLC1W2K9H5UWCfVdrbHKB63TbUsfvW0CQwweYCwBO0uf8hyDagd1HGrwnMG15bCBYh9q37gYT%2BTKhPK1MoL13ULYco2capjnv0TfpJFFerl4cUyQfzB6PA8uHT5pxoIy4lF1jR4BVpcW3HvwCCtNt42IZHXtj3QFYEzvkXh%2BzI9XaHli1ETOXcJ1htNAf4eIIF5HqqpX5XepZQngFDURSbXirPjxPqQ8JhxlFAicKE8z8GjkWFSekkSKaR4QOVdBNmh%2BijxVhQ50T%2FfIeB3o94mnl1wFOkTjOAoWpjv1BDOF%2Bhh%2Flqzf4UQCTQXwajc1Q5Udatv7wKhI5OWjdnOSBBmGuMW3xneM4Qu7eOz1ZAIdZusXfoS7puqmaMZSjD3lMPJBjqkAaSBbs4rS2ANoBlacFSCXQysZ1zOndMXikBmtu97uTH%2FBPbMQLOx1mufGmlsLJS3Ie7tjiIzFdrmmxFHQ76YUIqIj0j0soJy1Y%2FRQBa%2B5hyz%2BQ9kdrj%2FMm3jPsboOo4sM%2FSsI1mMX1ANVczJkCInirIHQDOM%2BHIL%2FeZC%2FAaA6GfZk3RorR5H5D8L2jJexX%2FJsPIePLFtUxbQ1g3arhfz7lLNGPIF&X-Amz-Signature=62b2893a86807de710a588aa90b4867bdddc00626988580d3bfbf19f26aa9ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

