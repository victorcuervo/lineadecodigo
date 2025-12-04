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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CZQ5RF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Bgr%2BT53g8ov4YKGMPvLiXOZpyNexjoFSLb953LFUQQIhAKHFgN%2BHzpZOOIW7CLRhG23%2FsHD2FWTVAAK%2ByirT1qRlKv8DCEoQABoMNjM3NDIzMTgzODA1IgwuFW3T9ERdx1Tlc7kq3AMSM7G4w1lKAcbncEp0yYrZiKj3eRQFrT8XMZGzNpcgbYEh7JnTE0xkmRI0jhjMuSaYSKhmwR%2Bs21I00Fz8QA0QhK1SiQweV7ETEAkhTYlTyGVNRbEdr2gd7iZlKBLkT93vJ%2Fru6tFiK%2BcSHjY9HDjSRryjjf8rme3FnUyJgJao4ORp2Pe8Xt6XTDQAJObFZ3YbLwDAqu%2BuZv%2BZyith9OBzfqnLmoUwhobcFd9UnU%2FZZMH%2BNCbYzacv0l%2Fg8dVrp4wc33shKtParfSsG43jN54Rr8d03rYiSDW1RFgU3QFkRUXPmYZbLTelJ7J%2FWHymcBafEZqjKCG8o3ZbYmg1%2F7GkE2sEeAHaUY8lZ5NTwPLAuBaZYEM2yyrMI8G4cZ0AvXwk4zu67w22LRnkKI0EEz%2FWYLaP2OcBco9BqNYd315RLHiJsuro0IWGZ%2F1xIhet3%2BMX6PGcu0pHmLy5h%2BXpd9w5uv%2Fe5DyQD6DWyGGBl2avTc8BNMJr3OZUkN8FSqc8cfbikJYXxxRRX7tZSQuVobGa8li%2BqSC80%2F1EtjYOun4NCGivNelRHvUyKLCKi6ZMNlnxM7vNf8duZjbZDzBRRu%2F%2BhGyfXaqmBW2RN0v0MTSNX0hKC7lPjJNyGrvYSTCh%2B8bJBjqkAU1V5CQiQjcwWkIyop5y%2B7uxcbTUOqrazVD%2BmyGGBULL5XVka%2BiRC0Kg%2BOO4aNkGImV4bHiP8Sa98%2BZt%2FDDekncbRptQntSaTd%2Fq%2FcTZR9i2i16aU%2F1Bg9pLbCC9aWYhCFJ%2Ffzwkqs5hREKz4FOyLttL0mMZ6zOROeD%2FyjlQilYliAoCQLElgen1JFtxbd%2FKAlCjpJ%2FLWVXFboiWqMGpDfzKcn5Z&X-Amz-Signature=503790bd1c183f072c1c12f805f54290e07efe4223450e1b2d8f244f6cf1317c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

