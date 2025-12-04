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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAH426LE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDPr3IDI0aeHoghS1jEAFOTprysmpPJypyyqRobpzSabwIhANpohP1d8h2JSxz8Z%2BQ0tKVtnhRhiSvW2eg7gsrGz40yKv8DCDoQABoMNjM3NDIzMTgzODA1IgznAhV9V8b18IBPEIwq3AMNHZx8rBc8xoG1LsGTd%2FFD0MTsTadk%2BsB98s8w5nf49tVt9wA7eDrpNNgK0BOci21KHrPj2jFkYuDdDQQGI2WtIqiqAAyVA%2B9yNNwcvrTlh52cJ16Xvr9JyvwjGBEhQhyaZIbZkX07nHVm0e%2F%2BjlQ%2BPfNVrnlYhlJ0by%2BKB1UU87Kh5OJ034vDQordhw%2FIv2FVdJCfElX3z04DKvFavhjRt6mpghRJP3JDdNr4g6g3zS9vzICsksP0MoCAWF5U8Ll7HaDvJcFl0pCZU0yIEa0Ng7t%2FGMNxEptKbRwY7kgOGCtvYBr7h%2FClIV2g280DeD7%2BgAxpa8g1XtJpzoiX2Fa5T4r70it3I6EZm6h%2FU%2Fijc7KCoL%2FVZWiUfcwLdVwUKhxJjYJjNHtb5ilxnw0TKOFhI3e0TMsZxDO3tDeGMyGeqXRNIzrF74DnVwLIcrJL6s1ScArIgCwRT8J%2B9RMllSAhtcaxzAwk4b5W3NhghGjChdR9C6vOzKJPgZxnpKza9RYKE%2F%2BKKArsqhV6qaHpcLlo0t9lSpIrs66Ajafa6KDvrChBzntHiO%2F9KyBFQDku51fQouMQwb1cG%2FSt21%2Bdyc%2F4Wog3232cYYR645oTtEQeg5eef6p7KDKFHX2C6zChtcPJBjqkAV7Y%2B10%2Fi35MRDUdady6bWLuylX4t%2FDyfcvL9WhiqhkIUGDSerqjdZwTZxL7weLCQc5n%2B2NYjeizI2iv1JbzQ0DkvJHBQzQ7W15aeMB661ulzcisKlhR7w8f07dmrV1TFrUbqQU4hWZ5daD7OkV30Qa9OHqhwBS8qmsHCzeCGnPFHQwOeO1YNl9O1pm3C96N1JDIEqZ2saCmjJX0kziqmEDOjN6u&X-Amz-Signature=3ff1770397d7a7171e4cd8352d75e842da8d977d8fb30d362dc6ebf1d2120932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

