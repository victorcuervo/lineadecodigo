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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OF55NHU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFT4UL6ezSTBap0fvUrpQNjJ73Zran%2BRJEQN%2F4jryqPyAiBZlLy2znvjJ09pCxQUkcg8ShnTpsm6Mer4cIa7yAbIayr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMsBJCu%2BPnWwrlJOXqKtwDQYNB8%2FJ1lDHwdRKwwjIyfOY2vl1e12aPXWRzVuYFLGih3m1A%2FA2OUIom4KGi0bfAwG45PRwDlh7uaaJx9IDQ8slcw38MDHE4wUOkOmJYNSYavgGh8ZXnRHH7T%2Ff30JlX9WkARp8nS2wPIt8nQyw2J9llBsdP9D1cUQEd348az2r1GgC9gi0DLfJPpBUrs3WJO0as96W79U5OBhDj8z381IwTDI1Dgc%2BlOZgpoEJ6fDnxjhNa4PXfoPW%2FnTRLrL%2FM7ynIrzEh3vhAyi01yNLilj96e8zMLNzmxlPcHZLNxCHWfeRUAFqHWImNMxcjdhZVq7Ie1mXf61VwyV9ZRtGlNmGT3MZadBEsJ2EcHdUW%2F6EePKvCHpFe2lrUt4z1AEWSqlkRcllOiQg13MlVPsD5oWAedyzUvO9f26yOfvdF52qsRR%2FgdwMJ7APzmGiJ2ADY1i01ZB7SI%2F2uXCt%2FoHzXp526rag25GcfAPnMDbr%2FCNYx9HUjlCLLVECyH0jLSU2KXydA0a%2BdEh1Zf4Q7Dl3xToWTTVSwfEwvg7ZznZO3%2FsuovEghzE36wYARiPO15y1KUZ19OG%2BhL3Vf0hJ3qLU6xGNrla11ezUbTCa1wfv5TLDVveJD%2B0iOkM3cBcww44TFyQY6pgG%2BwuWxBwBaYepJFojvWHAGCnVHVNAvTr%2FdxDxd3NGi6mYjKJPxoqSf0pkSSEHqlacJ%2FCTO1sY29heVnwzelGFAXLRFWUDxmZpOej2BxqL4qN1jmMuNuByP0LrUTdpmv0BD4DUASAJzTIusYqiRJzcjK0gar5MHo8aKH0nUHIOlS1lvYDKVjrlZuLHio8oZ1rCaRTmElZBVfLjfRNfjn7ZA0r8bLhYh&X-Amz-Signature=77e6d41acb6c876a4bf20521b66a2837e1239e274ea8dbd186d46b4059b6191a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

