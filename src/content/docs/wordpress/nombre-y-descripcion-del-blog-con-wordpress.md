---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
slug: /wordpress/nombre-y-descripcion-del-blog-con-wordpress/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62DZAPO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvCcVoVI5zDYNwfJpf7MxZ9bpb6IJUqjlTSazYOf2%2FDAiEAhCAlGdCyM1XEQMmJbte7J%2FYjSYML6Q6YdYMRMYLv9lsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEnSrWrp9IK0DesdxSrcA5j1nrbgs9V103A%2F5uh%2FDcMso0%2FjHbcw3zXj98698TMg7fZPjJVaFxuE%2FISWo%2FwT5yxGHTI8JDSqfsIsQ9SAa69%2B8erzuhQK%2FkPjBfr9D%2FfXmHfFBeMzmTQwpp8GvBuq71Y7JKi6rn80VuB7j8XOJ84Hm9W76ova%2Fu1iuEzGb%2F5hjUj94t1uap51o5nMmcKaBzADmwHgf31QsO2j2MHY9T%2ByUAtznk7vdz11ZX6eYnf%2F0ADmW4KZdP5ikjlXez4QbIuHorh4X9SrNmKHlZzf%2FpZniLHCYDgNb9ZrdjpJCLxkTvTo7d%2BOMTc53ksrIkFxSPTFMyp%2BjUWDlKX42jnv1AUnIgw0XG08%2BFLxkVvksh7MP3%2FtbNVjF6Tjf5BA8fHNtX24QK15%2BK67kxKbHS9K3e0yHlwigu62an16LBYHsUI7Ew9%2Bm6fezgIb%2BtpClcrDiXpqULUlu6Xrrz9Gf%2BVxBB2QtpI33fG%2Fq6XYPJxAs5Zzv90FzFNL3PPYI4rNWKw95ESZrLrcna1KHxV8qxGHdqi4jK%2Ft%2BZ8nk0lFblaiY9nQqj%2BOv9g7nkejeAbmZp3aiusHm%2BN1fcUKIpPxPGmMOeGmbZnTs1%2BQEEmuQBL8Sg3Y8ybYdJL9etbt2ZybMIDpzckGOqUBAXA8qI%2F8CYnx3UE5AT9AxMqW%2BdI1IFNlzau89e8TmD6m8VddtLEnL3yiMG1vRuZ5y3Nmy4XNRIS0YrPEKeXCWPluZIAmc%2BfTUBA2qn1oxWIS0F%2BiZyljbj2MgxlodmZhN9CSlH8I8xmx7HXMb%2BaKdhgOaGAFNr0qqBpMbd5vJfRgma7CwtiVzbjJPnkos1qK0ozKEdgvVbF0n%2F96g8G3PXxFTm74&X-Amz-Signature=a575d41464ea086f7cbd2d90e41b152967d8f0eb54945f4efd666aee83099763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

