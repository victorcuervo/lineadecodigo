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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WMLF7L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFmXzHw5w9jRTMzz8Ku8aDikSyPHFm3SlBh6LVZUvEESAiEAmGivQ9TZUnXT0zV08vcrR79EF39N%2BOfKcVp8WnLoMSUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHO3TF0BRtw4gr5FyCrcAyvCvFZ5sFGwhI4PLmZPS5owgPp60ZPa4SliKsZ79V5aD9WLYRv87W96sQ5DDi%2FikVzq2k387%2FzmKBXRu5SX7g%2FXC1%2FtUna2Uk1SdbMJMJO0I6ipt3NV6LIgE%2BH%2FqHjg33%2BjayXvBpXwphCsRLXuIK5ztLglnXph%2Fyi8%2FaX9CHrfdPv%2Fm7IEJsv%2BfbjY03j%2B2w2YvGZ0NVX2EoX6vniCbSKfIBVgfa5AOfCM0IWigfj0%2FlhgNPKUIuO7oAJtrOMEVCsEQqZU6rWOb5or2HfE0aFwiPrAWKgRYec0Jc7XN6m%2Bmb2AvF3zOM4NuwBHP%2B8zF5WKuyLgMfc4omte1cwrWnBoFhunEROtNX0dhmkC3cx5PkbUydNjfPtFxG1XoBzsTt258SZcuGYgyrFNHi7nv8bRW396Afm3sYS5YRxsgo6yQoBLJwKLD%2FdWXWaot3Onx2XVI8RhWZKZq8Ypo%2FY3cAmAXn5QU%2B7YCKvUhUO1Bj3mzuKz4JT7WdF9FCVXZCoOUP8alrOTkYCVYkZgC5JKGNnDJNEtPdziNPwbUx7gHTi0kNAyYBZH2JxqUaa%2FS6DCiREUrKqgg%2FNVdIL1eLFq6ahQFnAly%2FAxe4n4aGQkJa2bG9SHvniSvxUEMc0CMK3cwskGOqUBH%2BLA4DzdT2rN0EkRNx8wsokeeeAMyhOVM%2F%2FM0iu1qWrYgZ5I6HZcGemHr0XH3EOpIDIlhBbt67f6uUmGtXA15D7LzNXkCRxjP4Ckdop2PIYJVfNnIPjiEW4fN%2FxCUACtzdus2S4HDPR1AlByEGNlXyS3LZKosIihouPEZ%2Bb3lsAlK4Yc62LYimxykFahojUiF%2FNl7qiJqk3OuNJACk%2BS6hXpZTaO&X-Amz-Signature=d9a671b4d4a840062e2c27c3a0ea270710e0fe81dc54429b7cb0afa97b85c61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

