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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4JDKU3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBxoRFkzFc6ZU9MI0NOIp5TNLNL1pe%2Bz3%2FqA%2FYXpzTHWAiBnIKQd1dTmik2JELCpLx8snTsKSEED2pANQGf275si1Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMrwKJttkholLR6NtvKtwDtE1CG448IcJXnLsfCeWzJPSlZMqAZCKTVJplyYcqyQG%2FBMeqyYvKy44t8dMmHXimhR4nGyNiIcM461z1YLM2LB2KjnTkSQklnUhodmSVHcFouIcOl%2FHftUXEo7cLe2dgF1qNZh8Wg1NPfvq%2Ffj%2BhMZ4A5VucLqZtrVUS669JnYs2yQqfH65k6mdEiPVYClZdarptKMvvmraUlFJsM3rQYH5WPJNaJCq2wzkVlHRcogGDphP4zhxwD0iCQKtcBT7CjjASI6RSthzmx0EqlGGnAqM9hd0twD%2BYVD6DYj6xOOSFAeCKdIbdipXBPsP2sxYNGgmL0jCD5S9xjR%2FHcOnaAvUjtRSMP7iXPACdE8MdzF%2FpZfbjG%2BqJvQuudmlHrEhv3SGrypSso36k0CDmxPcH%2BbKRw1QzzorZWSAo4y2%2BB%2BUsl7Lt9BTenMWe64jrup6l97ci1wbKxJIIVLZeCCzkTmDxnW0CXRIzQ6jB0jyz8TIhoAustwVD1GTGt6ZCft21ExpxrrJ2jv%2FUc0PK7hoeqZMCDeTiq33mr1nsn0At0txeoSTJ1cZf9bK5dpuN9evHGeZeOxeVl8CSfObCxbcSVo6MeGaS242Lr%2BkC%2BcgvXgznf2CMO%2FKAsfJP0bow%2BdTDyQY6pgHI8EOH4ls7xqVECp1McD8wYMUUGtAQtJ5Pc0RPpIq93AeYgPLq%2Fhp5NzqnrGAKuZkJA9%2FtZ6DIuMhu8C12OcAoSzl2Mtq%2FsLjdsT%2B3hfIfWqXHUb6EffKg1uXHPGkxw0G%2FJ%2FKrVNw42rmKhaVozi9ZUzSTUTV8x47JGYAb55LnY64KI1a8eWHxcGSqFlK3cl1fxkxHA%2B71yCSB7Jeod5kqKHo0gawv&X-Amz-Signature=4677ba29adc2e124ff4140447e4532ea3f9bc54f4fae693e2b07a038e23f33c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

