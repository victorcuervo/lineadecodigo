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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7I5JQH2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCwkRn%2B3APTp3jkqmZyQy49DBbuC4R3TKPmmKivBTZkcgIgPtMtVT9uTJZrdsP6MRmjNM8GngJGEKq90FgMhIgzNYsq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK37mXVClVF7j6FZhyrcA51ystqdQqkC9TWTReoMzb0GW2kNoRw1ctDuteiz70haoxBLN16KDan40h0CKor8uAqGT9kWNesNSxoR4u%2FcZbdidXqyH%2BkXP38%2BOFMt%2FsVy%2BIorQSVX%2FOu40DE2qVcDMNZp1GUEivDbxUkOG72hb5DaNVUUUxJInJEd4YbJucHRIAZdVmTp7nqqA2xZyc5kKxopIM3QGyIPxMwGc%2BRHcwSarX%2BqjnTok2RCnJ5PrHKxsgLDMaul6qLxoiQQ3ZLjkEarTxvp5giCBAgg2BRYpiLYZT4z0Ci7v9VvMZyxVze%2BcAEEAbc6GA%2F%2B3hRpONeAISe5KpyAn0zJQ6I10FE6z0kv5t%2BF4r7ilqJFufZYl99bMQ5v7Lqo5JE3AtTqt8Dn9TbtJ%2B7%2FLrrRc38gAiwHqtAH3uCFTriP3mep07DW9QwGa2YhKrKbzVtoYH0UaRzxN3Gq9bTSY6IaqabdQYKbEN4S3wJpEHBtvKwq5yPZWKj7ksyvl%2FIh%2BGK0dK6mC4eLoATmt3bUjsWuGc22noXMNAdn90iVLQkh4eNPnPiLCDF82ZryUnOuXPDES39QwQ5E%2FopSzMbHrOFTZFTOw94Pb3PR%2BivC8e0sLxPY8N5aMmX%2Bx2VaX8tIuVNqbZJvMPjKxMkGOqUBDkoWXwx9sb3Norwv93wanJY8%2BvVGNWqxzaJTcBbMCWsdh5hqJt1Wl7f%2BSJ8BPaWQoXJrpAiL9jqT5izh5txfHgdi%2BVPh5Q3o31eEwdSZ%2B3pXIYcdzbpBxSZbg61A8mZ5XMW3O%2B10csmicvoWKhXvI%2BSJYTvyjlF7veO1Mkk9a1DnKYodTECoQtmjrPgxZWviQaXNf6Vl54j0WrVEzyigw55JDpBq&X-Amz-Signature=da853f440e13b980d5e35cbaaaf0010ba9581585673faa504293c55f1972cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

