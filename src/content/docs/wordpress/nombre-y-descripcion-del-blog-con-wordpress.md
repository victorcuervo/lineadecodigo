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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNAG7FW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICymAy9BAm6plIIkzn0IHxkCp23u%2FnPIuFJSoksEYyXaAiEAkBWTxjPy0B6oEvq0Y%2B9Yu2rbIcsqq2qks2DOr9DMFZQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHiQmlY3wH5VKB%2B4GyrcA0cCo2jhtamjqmK2zU%2FVeKjChpB9UbpnjwYWoxElz9HuIAxY7tODh9cHEFD44p9ZERlPxH5Z5mXm2dvR7fKi8g7BrSluVl0%2BBR%2Fk3MKpusCLKX8fgwM9LmMuNFRgi3zgoZwqOox53C3bR44nz5sFuKr14tcE3bdcvcZk%2Bh3DqGK%2BIKWijIvTFHqXDvCGxJQ6eCe7pQYIYNuDPZ5yczBqrKmF4Cbu78XNfdBlnH65n%2FLXSSl%2B1ImtBLF%2B2%2BaIk%2Bt6CQh7LAe0G3nKBiPH%2FcfommeCocmQUWXn1cmoymTHy%2Ft6NoZqgSo1jQvxRfqPUyWuHTqJUkSYeg%2BqxDxsjO8%2F3x0lkuETvQt0viROOf01ium35DsB8xalRHtk7dzBvPYqWLfY%2B7NuEGEmPq3YRznBx09vlsBuDkjdjVij0uQGgFuvmQz27o%2FoYOp15WkWp9XqA91bFfriLNEvvt7KHFEtM1GQTbT6b4D1x5dKrHkDqwm5IdZ61iXhpFT8e9lz5gczkAzC3OthSIj3KFiCb611aAZuGB1R2WDSiZ7CjFG4msY4Aw%2B2j9O30dqVbI7sCcyXyMeYus3UzntVwmq643Yzvu8%2ByQSfsde2szp3AZ1z1qQVx%2BFZu%2BF4jVSNjpBeMI6n0MkGOqUBA%2BDPfKsHGlhth7YqGzB7OUTCuyDp6y%2BfSY24tFIFo%2FQbFlp%2FdRPQbpUXD2N6y%2BFJTeab70Wxq%2Bl3%2FwxDfkuAQEp7w9nxDbVy20aPImx5yQ2iFbGQqhiQwcZMaq6I7Pf5LVdUmZVYVtrwsMulBQWScIuoC5Ryh7yGaoXEqBvNcyiUyMhOfiQ3l3FsvGC%2BQpRyd3c4oKfjtBs9uktBlIESl2KRoQSK&X-Amz-Signature=8aaa061e7ae4b7bc90a8d04f6c60c0ed3381af8a2c16bfdb6e53a7e3af7078e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

