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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKZYAO7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD9Jb8UejPmWmJHfiwoaMADJr638F7didSggVTX%2BYPzDQIhAKnE%2BwdsXs6dft1%2B4FwwQortEZrsPQ393VqSy2KLtdPfKv8DCDcQABoMNjM3NDIzMTgzODA1IgzMJy5zaWlv2l9ETAUq3AOR2%2BBG7CINIvrvwBhNwydIn1E%2BdSPLYsZD9H1g7GNrtW%2F5b2%2FUCSuxQK7TFg7I8X7rKdUfand10YPhrn67UBRvccAabr8rLCc9C0Sug2f%2FdpbhT5Capq%2FEkpOpywDrxPhbc51Hzx%2Bja1xAvzOfjkdwyZBllUb8VWvK6rv2ji8GcKA%2Bz7ef0Z7xj5m2EvtMLLH8U6aJR5A1nohJDcf37r%2FgR5EkbI0TvFLJJmw%2Fgyiv5yuqGqKCv2jEZDf%2FOWgxzdERce8cGrr3I%2FsyeNC47qr7tXUPugcaiC6qhrSH5Jn3uSj4njHhYeK5YQReGGR%2BZjdwn4Q95rMYW2lTQDnGv5SEgsec3vwzaH0pRlYreSoKk5rK0l8e%2BWvYMimr5bGBQFWkqQVVV8KHlvqyuchew%2FILDqsjeCV5FdaZXg%2F%2BepdwHarh9hG8AHfCZfIPzynQxlD37P%2BXZuFZveRJu4DQzmYPqvsy0cCLgr6zsziIBozn9Y8JurGfOQHBiuuHcXj6KsMjZ5bJi9iqL0ASgvV2W1lvhrOsqrkngRqiSJd8ROTQ6mToMPeRI%2BIjNJSoVyWZ9dHoQLc817Y6a9AMbIkckrBFA4VlrfxZW0vwmNyPWB7%2FOMEoiqe4f64XNZHsvjCF3cLJBjqkAWAt9tGAVv6WItYwum4%2BsyTDmm4Dt38MupOvLomb8TMVg3fauIFyBdBy%2Flvk01VNMI7uCLxwQT6g%2FTygIkh7C51S%2FGJgOI2ytewTqPxl6FXtpehYB1kuF59Ibe1uIAlIpm%2B6%2FCykEgRFmZ7AcBbDjRr%2FwRO1M6kK15eWCmgoSMEyd89I2AbKDHmhR51bKTQ3xUKB5%2BGOSq9s%2FHkISmjfW7XN4nO3&X-Amz-Signature=cb737d04dd604c5a1c53295fb8104029acce5f3d1b7d2358f0c192ce633546f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

