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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRSZ2Z4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDyzUxWgxWWngqIlQcrMpHh0FiaFPTX8oxBMPKRkD9qyAiEAyOYXlyO06ybIj3hflYz4lNVqu9m%2Fi0Ob1eZJwDPvmVcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDB35haSu3QBI78ZYnCrcA6Xj%2Bhw5xi80cniH2NA7e17XljqEbakjaECqBPZwV7mTVBfzfyoNvHDzZzL0fIP0iLrohEVZla0vJ0qsiPQYJpPcHOa%2BLqR%2BLeETQXwg3p4lcB3KgbvwL1OJEXDY0g6KaxOrpxJVkEgBmDOBgrgxe0PRRn8cw10cODcisQoWaMePUjbcGRGn4cir6zIpgrNcw97e3yg5vi%2BsmTq50dT1kBffp0p%2BFjBkC2k8CbAOJN6V3Ag78Wq51sBSV2lFlW0zxFAr6OReW5RUTnqCk8nD1uZBV48KvoIYtWY34zesNMUwqG0VY8hRv8AhRGNno92v5KDttkiTTsa9EXEXlhjkHexzhrkmSvQdkLUxfaNO76IMR5WlE7H77L85YDP4xuo5WuIdAR4JAqECOEybl24iUgUj1TbftpBNBJbBwNPW94oZvTf5viSnzxQBvdBTay8XWPS1jbH6%2FNmWMa1m92ZrFWbxag6ZGrW1umXhqfo88S%2BKfADjRPzHtRhF85Jb9QDaxuYtrVO6IABOV7TRJLcJ8J27YTii7Bm21JpsfzR12fAeFvTfrTejMjdfgyWvCpCh9TyfRfP6kqmgmFYn%2Bi0Gcn3hIFAWoQRtpErTMFyJKnrMyu3qPQoq9Bs0Wkn2MMnKxMkGOqUBbozTPs9m5oTQJfQMmLt1NBUV9QS8GSde7EL1VtUc3TEyU0%2Fsfo7Qw48F8Y6SSYs39O9lleDHD62hUYhsQsMiBB5fcEbk7WElMW9hNMk%2FecWl1lUYom8eVIpnbuAMFjkYE1HJP7E7FYWSNK6U5We2qM%2BFbDG40pUaXyGQeg7rxK3nICrIYdE2jN7JXxdxz9x8K8%2FJ7%2Bda%2BMEo18WuKvRUuW9u2wmD&X-Amz-Signature=f0c7952e9c88406bb8587e9bbca6ce82bb1f88a34d3ec370080c2ee9b7f4a694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

