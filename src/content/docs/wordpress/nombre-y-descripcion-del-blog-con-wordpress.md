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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73YCHUL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDFZfpRVb3IzHyLOcU0bnEG6rPMVEq2eHD45VK3HxClhgIgWAXjuCJWBWwrY57KsRqc6AMxSKmx0s%2BEHN0qL%2Bd3hZsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLzcxe5uXoKqmUKPIircAyqghwDUznDXofhxq3AJyV2fNAlx4VFDhAOdP374wyIAbDf0sYNE19PQXD8I7RkpHJpDkx8JdZ5WL%2B3%2Bc6e4wFw17vgkHnh%2FkZj0gIdn6dAju1BimcDSY0fR8cAR0Q1WBLcD27eIbOJZ3iZ0mLEAd3b%2BdHxdQjfygQFXplXZ6d%2F4X7cCYZlP7YITiF9KpFRSzPDkO%2B6qqjA2WH9nGTaeOhEJf4u33yKjUqFazkHqlEIvdOqhA%2FFMyUtBxyocV5ENVEDlmcy6OK96J%2BoNlRolP%2BlH7mbgDBsVMICUCFVSqPgk18GZipW%2FuTyq9ofVZeaSRcg6aW1QejjheabyGuQ9L%2FlyYFbtHeomGGH%2BZ%2BFSHWVsmhEJb92r60qF7XrdteGm2XlUgTfmH1sAY%2F4tN%2BufRzEvMI8RA01wfl59Sw042viUdf6XEVoMXAT0rz5J06n2zUQ44gp9f%2FpYIqvkwPXM%2B8PK6LWbtJlAlm9IjBvUlNwBe%2BJf%2FDcPm0ig%2BZs%2FvUQvh77hPrpxv3ToiStuworm57opfXpsbIQThThus9PgTf4UvsCzFE3V9xYIRBbTjdZ8p1AD1qaeY96t3EwB1WJDGOGkfPjY4i31P8un0LcrfHMUQ%2FODRivzKxW8RWkEMMWuxMkGOqUBWHyrPo2sP6tDOzmZSncxsP9cP%2FlY40LqVcY3Laolj6XP1dyfZWwlzqX%2B9P%2FcHMcWzYW1p%2BsrQzNLQexDE9C5JpAhvguVE5gwbGEJwDDsQRHMivxjvHxsea9%2B3aDC1t7dFsB%2Bd9%2B0hjmvzxurp7AWZZ6sdw3qvob1w35nSgRA2YFlQdyFLQWpPTz82OUnIABgN%2FL7HfJwn4q6LM1uioFaoTJmZOG4&X-Amz-Signature=ce30e4d7f93a47c9a0b4d7a58ac11d02a5104ee7f1c8eaf2d79f7dce59940c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

