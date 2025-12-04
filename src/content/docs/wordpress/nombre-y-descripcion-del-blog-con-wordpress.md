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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3WIEUH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDd2Qw9cYypxFiw9tWk9y8zH0pc4iWEoZIiQo%2BT%2FeOhggIgWf7WxVzegNIxIfBGbPyfvepTv81uwT2%2FP%2FoXzIfcHs4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJpwDNZ78kFCSfgrzCrcAxt4bkICs7x%2BUDwDkV4zwSzQ6k9YbWmLGXPN68d9fvkN48%2FfRzILKG2F9tM4UwZIoSSjIpFj7HNZV%2Bk2hjL9wzSsFDDG16gjEERnmrcn8Zal4lhj%2BUWKOdn1Jbgvc4sswwcHO6B8P0u4sv58Kws9Xt8mQC6PZl0ov4X06fHzJF9%2BLdUHLCTRXC0eb1FsymKytZ6bKC9C9leCMl9piJTaVbnLKiJCtIE1PFEgdvkEOd6aEGKERspolkfGBOnpWK0%2FYaz6zKlcwaMOhOsib4EY%2BjbKR4SomqLVbYijCKhAodeUt1EnClRTeiBY%2FwhD%2F%2FYFz776N7Tzplb1R%2FyZz5j3mD4324C3uFfSOfyi3B7fbcnNIUVoZ1af99q6ed80Axi4LcD2Y6UlnBNr5LNWVk7r0ioWi62eR%2FJTnK8Ej%2FfpoXnlkkccXZyau2Va0bauH8tJpRRPxsNbFfrre6vtug2VXNGKVcwlt2CyzlO7T7gly5IwtR6aGvEHYPfomA6maUXVcdXJ0iAquNljfwCFfoEUxyuDflH1bWOT1j%2Bg%2BXk9QjscqF3R2Q%2FFdu%2Bl%2BMNurzBtjH%2FayNp%2BPRzrZe7NQhb2OHJhLpOlZcNqYb3YxfoFqDW%2FSf3oVJvirk22OSktMNzJxckGOqUB7z%2B2eofg2jHdu5q5t0UmQjqogpxtiu3LU4fZusCr3t6mUgPqzonebMA39ov5kWZq942IHnDgsgCxteIFFu88RNzzKfi75B2XhaPiHvpvxqLAHa4V75WotjP4ynkBD2TRlaUVkr78n%2Fz6%2F%2BVINAjLVxU%2F9%2FebxaRcejtm7KXCix2WK%2FwaMY59UyJA1JzN0IqCb2wrLJDLeeJ1vnK434VE%2BjtAE5fP&X-Amz-Signature=02873c00c3dbd7da39e18af4747476d0e97285a4412e02107b420f101c38955e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

