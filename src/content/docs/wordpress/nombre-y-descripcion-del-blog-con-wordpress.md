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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIULVFGI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCxEtMxncQbSZrQVvctzsAfZQAB75eKreDWTZP1Lc603AIhAMHfV849jDGjedsbV9%2FSJrv%2Bh0DIycBh3ch8GyDFgDBNKv8DCD0QABoMNjM3NDIzMTgzODA1Igx5h9RrCtXrrkCQgW0q3ANJQkCGv%2Fs0Cd%2BMNMJaCVtAIFxW6KR55THiJmI6MVhqD36rzmb2OxCcWj11xiOXYtAUzk1E0iOdNnqs42DA3ZXb6gIqBHzmsVfb4JionXKBqsSyqh1Taj5oFzicdiyLjshSi5GYsixSn24bOKpb%2FaY3HkPD4R6aOmpnaPBjVUT6jKpz%2BbStGvk8gk9jngPF6trXYZgegLlQ6MIwf7fw382vnihcw%2BL76QK6%2B5D4PpT%2FhOubnVFa%2F1TCHKXnsQiPQZs2GdLGUqL6NcriOMADzIXHxYp7EWwSxYkr4esdJt7c5xR%2B9FOqdpZgCxGvk88NAH%2ByAE8v4I1Ot2BwCr1smzGJWHtKOPFSX4npzfhQesULSqoYkaaBEirTalmX%2BhFK7ScJet0T%2FrPp3IKmjewbG%2Bog2g%2BRqbOdBN%2BARg7X235UZOaqz7lzzuk7SrUSC1bSoWy7FXpyssZNCJF6qsa%2BEOtR%2FIq9TZddzlyiJZ9ei%2BMT5xNzH8qd95LeMicotns0zHEchXcunRRBsLHCL%2BfPDRV9QQIE3S%2Bkzg16CdqORovY9qG0tZ37y%2FUhLu4kG7dGF6V2WENPckmRKa7bb%2BgFUJXsk5jM2j9U6Y%2BTzq784N61FXrqEKFtnypO6igyyTDPkMTJBjqkAeJuOz3N7abk8xRB3zbPUqi0djSQWcaxBtxCOBFerNCTqogSoDne2iLg7XMiMUvKOqYyAkQtz1ZKRdopg%2FCDZ6wC2plwEdPbSd7E2Ql57X04drUMI%2FoBSlWUCFB3nDTLbEwLft7VnHctJRgtNLlWWFscTo1pEvHN%2ByAa2kzPmFfyqb3x9Un%2B0P8Cdtqby8znlhpnmVevH69wtJ3hBA%2B1dESCDW2%2F&X-Amz-Signature=f793a0a92e3e59b8efe8338be1b4d497fdd6645cf5eb7f5b217bbd39d938c2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

