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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAZHUG3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC0dx%2FFxSt4rrd55tga1zrWDLwAFwzdqROkcsdjqDZN7wIgQ99a%2FYrlDpwvrEdZzvJjskcjtJovhH1sp6sSZDChgskq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPt60FbYs16M1GvJlSrcA%2FZPlfxXp4PNpB4h%2BtDMqUTyVKZwGVNfMxjG7O5jR69YPXwh81drAZ8%2F%2Bh%2B7gE4XLKIMiEnJfOma47vMk6awUUtdBAfZmUOmaZSRJoxk9LaipmY9AQhPj04zdf2UW8Gq%2B9My%2FrMMnIdlA%2B68jAxSBauzT2kqvfzhG5HgtnmDXGJXzk1%2FZd%2FGyutMfe1DPvj6WdsBAsci9HptBlGv75eFm4780%2FWWo9xhBbDZAmSFfsXMEgkZlcNjFf0OuK544HHBmc%2F2C81uZ4mqbbTlImTrAmZPBhi48EqSflAsGH6puF9OVSQcxYN7dpKC46QIPw6h3A8G752GBgDLwNQT6RgaIoiZGyi3bovFEbDtKGd%2BuvrAa6oU%2BTbZtdbmulFO7ntRV17S%2Frvz0jaZIYMcnDQYpYcCYG4aIuCJ6Crm%2FmstbAgJmo2ktCnLVbv%2Fq5HiAdp21zvOc%2BLjA%2F9ngopRSbu1N%2Fz%2Fqw7a67jufmd%2BqoqQLFaqIlhZr5q5uZpbkxQupYVKLAO52TcPrjzdaydjj7pafPxvPJocPOABGmLsI%2FkFp2EpkFdS14Fgv49xAHPzgKA9YX97EWDJLobg3uDfSCVHt4VUD0GguDTS4UfAyGaOh%2Fl%2B53xRB5ZpM8Ye294LMMK%2FxskGOqUB39h1I7JASrqh0FsYqc32WOR69cZLAwyhpA09tR5pLoPNiA91U4uyX2JcWm1tN1kMez6%2BaCwBw4DMmK%2FZkuHbGtrBZstMFiA5PgXcUyH1IgbISvGcptQ4ZqK4LaGC1Uc99O9EnISVu0J30qsuLH1zBGRS8Rf3xG%2BDUyQ2KF1trKRYd7KxRKKUMgiihsYZNmjjob8iMsoTBnkxMQQyriwEJ0ztceNX&X-Amz-Signature=8003eca5108234b3037abb7d026cbcbe861ab50d67a71a08b222fa7249bd8ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

