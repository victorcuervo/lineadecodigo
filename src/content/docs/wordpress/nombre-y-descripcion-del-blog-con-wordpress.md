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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJU6RBH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6aOM6TWPRHg85N0NWDoWHOey5WFZTv%2B3o%2BBTT5M24AAiEA8xH5%2FyB30Aphr7HQHEE%2BVLwOWCxQHP%2BHg4bbdC2mxNQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNY8GJvNwNG1TYgTACrcAzOPQQJhspm625IhtXQd%2FTWt6nKcVej0L0AtMa2wOCxEzbzYyQcag0dC%2BhfG1AYauanhzxSO%2FvKeTBsIb%2FOTCmfH5OFNRnjly2JHzs9B2bjF9B7jtLH8a5jxtvZ3fDKJ0J5YSr%2BhU3v58ZW1uckNlRnvKRryYb0Gyl0BXy2dNXOp%2B4kXqPrDm8apwI9A%2Btb1xNcWdzLqunNTNXsVv9H36ZZAO8icd05tovf7a7lYppKnBkIy5huZWhZOXgOyU9W%2FEO9Tpk8C17NDXKr3EY6XwSI5Qw75VZe3FP%2Bd%2FVicqbJaHeEt5QRL8KuiIVuGg7nk%2F7RyN%2FkoiUQ3YNr0isBGv0%2FjE8wOg7ciVYKUKNh9iqOe0AnCVP%2BD8JfWNZfI%2B3%2BjK2arzGfKq%2FG%2FzHN8KuR4Xbm8jySdilraXi81Khm41EVU1poAcwKpvq9TtrCn4fixL%2FLHQzPbAn89V4TVCwUKmsWVnMvh%2FMjhnAPLA9Rm%2F0TjuBBbkn9HLZKm6P9e6guxcRqhlC0VewBQFzrI6qj1Oex%2BTvC0gKWgLc1I33DwR0hghghe%2F2w%2Fbtl9qho8UTl46ami45kwTqyQJNhEf89J69%2F7wDDbLQLMg%2B7VokqEflltjrI5r9ayeLxK3plIMK6n0MkGOqUBDJUegbLxJYGAdfTVdNMza8ckmu6OBiIRb67Tq2STTyP1Q4dTjp%2BCSAizn7F5cobye%2FEdavqU9tjedKKykYxN%2BZqkC2apRcXq5lCfvvhG%2Ft7PnXrxZo%2B8Ic1cwQfgMpDpDE1JQ8kxAfWrmA30tR4Q7XkL0ibE7t2SOQZzkz905tJ4ciEfHXj8SxuFZOErY3RArEVcv0Zn%2BVPkOyfZA%2FMDpkuPotO3&X-Amz-Signature=92ff0ae7c3009286fe692761a09d81dc4f35e9c1e4b8fae58c90273c2eb95f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

