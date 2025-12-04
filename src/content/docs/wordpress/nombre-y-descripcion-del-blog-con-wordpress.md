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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWH6VHNI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuyhsDHHL0u6OeACdNz1JkeQvhFzDw%2BDoYgxxxxnMDjAIhAK2%2FG1XgyaUtI7FZtQgNJ1CjquXzFPUMZByveAiN5%2BJUKv8DCEcQABoMNjM3NDIzMTgzODA1IgyXMqIHZzk2JNeB3Yoq3AN8iJjAUmGhbXbBt3PlHhHbp86DSW%2Bx2VWwGO5svPErSf6EvaiP9oLm6RNNczUQrbkrs7sQoc135MqxT6MjjAfwmg%2FrrAINYwFb4D88vJwjAk0z5RAPfMwK9DS5oPF6jh7G6Sq5WCiliwqX8qL5SvS8U6Wv%2FJGCE86qRh8%2BM%2FJw33nM9ZGRd4rd0MEI1oAI71%2BqMQrOtmmyEIsTwTThVwsJaIumysNUJ%2BEIp6MJJXTNb7xdIT4MICYHjbdNcCeZGqCkvJ6n%2Bp2ok%2BLHdW1k5FPhkfUnvwUnVGQuDIF9IYY6tWNUIxHxJV4jNsYdnlkhyS2MVZve%2Fqn2g1WhtK1Ld5TTbgFNKvj501VLzCqH9b28oFpDQpW%2FvGC0o7weSfYoEaVuOYSEPTUluEo0VJc70K4Nn%2FiO3IENmCirWRMVk4K01qj4XH3DGMdPAf9TqJe0UQnztELSaPsnoeuT202hTfJNcd%2Fx9dcBtnTHRtP6%2Bq1knQYdN4r2OEsbL9oI8kVO84ffkRSdbzHP3gRXteeSZz%2FWNrGgIS9H8u3CgjzjHs%2B9e9%2FcNz3liu8gDoWqcGHaHzw4Yk2ynLWxyZ0cm2yt8GcI0urOz8OcWfRCwLfZDTIvVosGhAhWf4RSmg6MvDDQoMbJBjqkAfHvVhLJqByDb2KYuPB6GkGZUp78ecqxcEPbyoUrhDsxYfRWKkVgC5NdKjr7CV12LTnNPL%2BTWiiRj1aO9vqM4r25elfs8QH8NWpsf3PLcFKMjTtzbvcwj8IE6PyyjMf3voAofalvDYN8ADAEx541zRzqvomAnnrNvBJLRcFbPzt8pK0lSqCjpA%2FR3%2B2uXKWv4VGXPCeFWPI2uRSjegz5bQITMijp&X-Amz-Signature=0103ee741caf0a208d9d6ecaeb9cf82aa76f49e667ba1c17dd0a191410ae1ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

