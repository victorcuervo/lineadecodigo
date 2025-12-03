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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KX7KB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC5gjmjyQzmeROBP%2FyNNnf2PT410q3mYobv5%2FBIiQFH5wIgQk%2FzwCpTgV%2BRc0sztwIZgsdUWfWANBxD7oKHTTWZ0mcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAM9ywo9UR16IUKoECrcA0goOeUa1E4G6OtrA3%2BVs0h4M19255wAyKaDsZg5ugJc1cZTCGIIosgCU3wlaa3gFHJDvv71Xdm50bUURESkALdVni2vOUv8%2FKkwlTkQy3GkQugt1qyZXF2wAhQ59LSNOm8%2F6lcGaXRj9T2n5bVb0zDxEhup2WETIm7xu3aZuQykb88TJVlrP1iD5yJ7FeAJ3HPbga3Wqvk0v7WP5L6p3B5eD1i3TC%2BScYAtcEOX03Bxmd44q3r9OsEX8BRKOHyDag7RHdH9%2BQIibHaw7a%2BKFpcbugQJWfGxpnGIqr3tdr%2FCfG57VLv4mtWj%2FtfyNRT0WPU%2BjW6v3xEEO46ITunkMlFB6hKaQYd1IlRJ95Nva0ih7LJ7MtU4%2B3CMHKwHlAb1753SXuelgA6xCMlD%2BcxX7Vz%2FX2rW%2FhjgvZhz34Qs6kZUn8YaxGUr0qjsU2W%2BeZeV6f6cmTFtmTdEPEp261rT4%2BnZzcEjCENfKnhSqcemgbMa1TSHhaem2jrDp3I05BI0DmxSgK%2Fu0rJj3O27m1ez2Z1yjPO2ALeqjPmWs%2FY5HlxDLU%2B%2FswPAdth%2BrPjqblLmKkPPudmCsNY5TANh7Y%2BIShUwVdSuwOdHZpWWYHg0PsJZ6mXB8dYHH0ptAUrVMNX4wskGOqUBFU3DS%2FvddrOoVcrBe75p%2FZGbYpvGiJXEMY8bJWOAC5zfcKGsbbm007yoyVj%2Fcx8QlA4C3hzL0p3kh5eQMToZxZHT2Hy2wO4%2Ftcrz4osjQPLX%2BhPvegwpeC9p6odEmE7YCkuX5WXuBC63owBbiw9BLnPcaMVuJMlgB%2B67Fkc2oeDm2vvsWG4yyyxh4%2BMd%2Fr%2FD84tRPKA%2BYnCevOBt6bnMnfCJK8yJ&X-Amz-Signature=417a7812fd6f4571f5cab58f370474e4e6011ad7d833056adc652ede820ad8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

