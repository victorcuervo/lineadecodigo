---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JESOOI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGoRAslPdLL21iQ0aqxg6oAgbQbjUBjYOlC0YvYmDdScAiEAjmMw11Mn4CuMaBXa5jpyX39qp2gtiMXfCABG85e151cq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI8mC2RnPLvp1QAtCircA9pbdhRpk%2F%2FQxbrJ81WZbUOGJOtH7wVi3nzGHn0CF70M1i2fvz5DWG2KfMw8qfZfF4H72KshPbCukxH2x%2BrmtWcTo5Tzucj6H62EvicozPCb9w8ugnj%2BMM%2BadZ6hVr5nexP8xADyhQ%2BF3%2Fy%2BKK5tV5Cz%2BhX5HnjP1RHlXjPc6TEKdcOR2aLpchAJGSRGIoJaLxa2di%2BM7ZL2zak6Hcro62K4kNcP%2F%2FXav%2FzzKDvnlQD1QyMXY7NbmHanFyR1MzRe5zSYkKzpHKkrwM8TWgCb%2Frr49s4XPzFQbHBpmFFR9eDYoX%2BW9szhSjrY%2BQtSNAKjPvGJ3BEc80LRJWxG0BsmkJpWv%2B9ezY74WUbj2QLfvxAXX9ysOeT23%2FFd1vI7jhKUZRV4ni54t498dMuPf25ixbTPz6aV6MUgiFsS6ilAJqGaeJ%2BZGwu%2FYLw2Ge%2FXTKyQb0qfQKKUoHWGiGMondma5kPPawejAwtKeIN9StgBNrVu7RXa83%2Bg51t7byvYA5qHKOVnPQ2UO2dVcr0SqZfPXywrkiIArSEVSoWka3yseHhyXnpDEOoKy4YdzC%2FJZh31mOBiuM4psjgmaq%2FPYbOrWDAmnqMg4sjkXLW4bwH0C4DnTBlNuWUUau3RYMUOMMy9wskGOqUBxkjAi0YvThyd4Jy5BGjqjk%2FZ6hBQ4LVw8aydpIL9jCZu9q7rEGI1J0eMyJDNw5hlqFZqZZbLdqGBmGKH57tj%2F%2BJv0Y8zkJ9pF10SjzLx2tp6SS2OEX6YrbbSOuEH5EHhkOLZP1J9riStU19tG6wsQ1QOwElY2fJtiOY6bSmldvWuDbWEgMhLAUMqSwlwmkwOu3UWpnTounqiO3Tn%2Fe1wzIR3fVhk&X-Amz-Signature=5efc5bc29b289d4095a85014a1bb03fcb381a79011b6bf51ccf637a5d40e8d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

