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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHHUJO34%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDn7i6v%2BtMZ1ukZxdEnRq7NlobK%2F%2FkebdvFgJS%2BE1crnAIhALbiS6ZqDkFJJ6SkXU3u6OM60VLQ%2F2I1IxtOMkP6Egw%2BKv8DCDcQABoMNjM3NDIzMTgzODA1Igy4IU8VH7Pj4KpKK6Uq3AMETrN90gbElroiC5sZQkkUoAJzvsFGEHjhJpQ1lEZkfxYgsrn%2B942nEwheWTPoI%2FZ%2FMpDvrnLYMKuBWOg3LsDk4g3oOo0M7IiP51SzRp8ACZ2y1LFAUYk4%2BUrdqjCoHYSSZ1b3JiUjya4zlUqIwnS6J4kz2ucDo8d0tjWMkqVSs7LZmUoWcvxs0yOKZzhYZCwrtXkxJWVqX71CeMIJ1yhWP9533inqc3O3B5US51HSYTBg9icjARVvFB7JVvyDIUVLG%2BpnGPQhUtU7J0EWdAOD3102r1dh0flkWscBjN1Nji9Tfc3CEYyM%2FrwenvSeH0jd4%2FqYTsG4SGvwIT83%2B6INZW9lr%2FDE3FLZYbVtVL6wCePwbb%2FopCdoE8ULjDTEW0ekH9c%2F7qYc5W%2BKm3qBS503uPFdL2%2FApaNDRJbLzpwfswmNI0Z2NTHdoc%2Fw6uhb6LbmwCzwwm7edmsI8qs3o0ASkWIc3q9byRVUHyzJXFY%2BsgibwxJEIqkgsdFQd0EKbzGOT0Gn6fSQaILH6hJVLqGJ%2FUf7KCu9XlIY9lCjhoXqFG7XSNc3t13xQe5pzB9LaIGTmCmwQ5ksds%2Fti6uqLv3lFISCHFhUR2LQ30kpCq8aOIl78Fdw1%2BofAKOfbDCG3cLJBjqkASP9VIBVRjGveLUcN6bAPvJYEZ5Q3UQuBr7EUd9IpLsIGa%2FtYQBIfJ2VB6nrSAO%2BSRvOxd5ps3IHEptkKlez5WhzfDuGqu25ntwve7hlLow4PLJYOWE6f7Vh9GLOkq6zKSGnhdEX2h2EeE7LhLYKccq0SVRn%2B3q8vW8Mz3WacRNRiXRVxDO19m97Oap0xwxFw8JOxK6BHcKX3aSRCJTCOkoc7VFp&X-Amz-Signature=942b189ff4d77be724797b3ced696cc7173b6d0eab1dd452381c79840236397f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

