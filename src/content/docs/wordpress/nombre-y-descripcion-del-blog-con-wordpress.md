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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTZORRK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICF9vFqcPOfByuyuwKHhPg2sN7WWLKrT2lwSdasf%2BK0AAiEA3xz9a9UXmFY7EN0JcieBJSDmih9mMOvhID5WtqAKzSoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJeuc4R%2BSJHM3bHYHCrcAwTLm4cjlHlq00VzA6CMRZtqAOV%2BduQXqvI8nRCPaQQRFOIOFRyMjqeBvWgJo2ak74wby6TtVBtOlKdWg2qFnQr53aE3YJyd%2BoMw8zZMPp2jB6hUsrb5Am2oA6rUT1Gb97cFQwEfNnS5yjwgJnvUnlw3cd3n%2FHNFHxOQMUwtatGLJimnllUpY1snKaKejWSOws41bprs2GDmzxO8hJDQNLpe4SmT4lcNQLwRR6gyC4cfOgRDCVnjeQ23Ov5l1SkxcX5OI9PTKLp6EDmn4Ccvf%2FPLtz7ptBxPejEUmuuAmn7aG7CKR%2FTFvhEcHPr3TqWM8%2BxxS%2FQ5OPgwaN6OghDuG2Q45vaKxK4eL8seH87w2jkjLIqpNbhQKWm2XYX2q8UrvfvCjeiq%2BMm22lzsGWljnBssiX6om5ncERa4VTlPuy1RqbaankzIoNudS1JJ%2BsjU0FVSlfYUqT6Vl%2FJ7kebJhDHlgpZ3nCA3XkQmhti2NZK1B4oBzo9aRKFJBWrbD%2BCLjLZhmNdlVoOht%2BKUQ7bXxFl9HHgBlTpa82y6jDEhPJU0ESvpR98hqwbS1iFXxliPbb1UYIRo9PylI5J9ht0kQXa%2B91lgFit%2Fa4wm0C%2FSIsWmGVwpeSrUZ18KUPsvMNe9wskGOqUB%2BFnC4Q6m%2BFOYxW4rJuUWclvGw9bYZudhl1wTwLswszgq%2BytwEA5%2Fva6heuWrtQvlrf4iD5BqbEGgakPoWUymDVhXx%2F9JOx1K1FG%2B4vz40WA2G48O6FRVpbluBd0CZTvZdsPm9X6904oKkh%2BhaMXy6Q2N1QDJdjlJKCGoRthFAb7ZNDqUs1FQ%2Bd0Q%2FzADJellRwlTiVtkZstHhqc20aO2hMEhe3XR&X-Amz-Signature=efaf30a9e95d9cb35223954fc9409e887ad353216fb7be2342ae801d4cd710d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

