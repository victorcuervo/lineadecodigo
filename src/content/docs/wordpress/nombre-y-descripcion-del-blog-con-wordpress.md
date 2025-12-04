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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5VMX5ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD2yQ7iOeDhsZX638ZbmuBoGawaXpU%2BAXFcY8WufDy1UQIgY%2BgDaFpVoKkVbJYD1sM917cPJY4sKwctZnZ86Rngqjcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIlI5nKmY%2Fq6ds6GXCrcA99X%2F6T8VIiInrhgBZQjr5GgXHIeS2jHIwtg9zVAmQMwYYJh0ySM1G2wJ%2FjLt8RMqgrl2u9xd%2FRhEkfgxDQVvu3YcNtpOeYjQy1pkUJFbO28hyNvsVQ3waQY9R2KvGymLiw2iOP9uS3UF%2FgR5FGgWDxDbE44ZdTs4nLO7SVB085xi2yAcAvb3P77g8tagrCNRVTTOrhR2OaiPeqgMxM5G6tvb0Ce0Rvo62gYI2sEHxCPtuVbECcEt8OsKUXc1K3plkALUok%2B18F26U9nDC1hxHpAVG4kjESxo9SZK2vYAC2u1tkiKE6IN%2FD0I7PIr0%2BgDKGEI6y7IlTrK8LJGRQPUHpXhmtOYCmOOWwQlEzOQrtVRQV6bIUtyIg7nCH7GYoYgZlBpR7xiWn0pv6kTC4nRT3wZs90rNmeW%2Bcz%2Faa6K0sIr0iZjAkiL%2FM%2FtjHd9F1u5m5dOF8JzXFGeMoCjBaKSpOdtT6C2ncGhQcZUx4j4tf1%2FB47T8qVDdp%2FtzRknYU39x6AgDd1Ls3pI7kxVSTdYWQA5KVNDbGldKTBfpWFCfqGob3vRgvzeaQ1yEpakyBtqYPkNRxn81C85DiKEg4Fx70XOQwoWdcyjNgK%2BcJ1S3UcOhdUccQu6P9mP5XzMJW0w8kGOqUBShNQxMexyQWe0sySeSo3yhjqB72F9Zd61X7s%2FbwSuYIxbwIsC6Ipkn9OC71eodXdmE4iRPQK42YQqRt9%2FARTQFjI%2BWQqUjjcV31ZR%2F7moCwT6TXZsWrudMt6RQlxH0gUQdGn%2FcTqbhO8byb9bqo8ISsLRgrqYD%2ByVdMwaPaNKoIzvojxGeONOYBn142QHX24NLRocYbYOdS0tOMDgylOk6ZkMe%2BV&X-Amz-Signature=5fe0428e5f8a2c59a3cc7ccd424e7c13902d8993737f71a16cdc38d000889b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

