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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUMOR4M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAZi%2FD9BAHKoCU0jNmcs6dt5QBv9B8rvbP9fRG3eXIbgIhAJcjL7mt6jnGXZwj8NROzjl5RoJkh9%2Bo00K96ZgWtP1dKv8DCDoQABoMNjM3NDIzMTgzODA1Igx7hRf1oOd96pyNZTkq3AO%2B%2BoZNNilHI7MdaB8%2Fn5m79PqTUF8mhJfmjIrX3omS3kwvyeeIgNiJIj3sN%2BCw78hvW%2BETLgkQpeHbIO09DNCCFC7SQs7QEzg6ila1qqqsNgFxjBuGHjNUM5DnpEG2JBEdX82uXScojslsrCeUfdHyV8ztN487%2FJaev7Vh2UdkBuOWKbmC0ckdS6r2zdJN1%2F0DAvgKOR68uO2pYOnycY5TulGtjEqO7DEHUL1W%2Fr0%2B8UngNap3WZH1A3IkEGYayZAeFq%2BWx5SPEgnQfClXtxWmpfetdsAF%2BuMK5tgMEPw4EII1D3JEP9d1RXL7ZHZ6I%2BzZbakTdZLsIEEbnVblY5tJ5jpsd7v5Nt%2FgH4cZ%2BRIqpHp8iBf%2FMJDfIoMSlBIbEWTtw%2BwWi2eZ9SMx5H2ghINrUvjJtzl0EqU%2FU40O46jXya%2Bf0rX3e2xXQLrZIbKq5m1bykvhHSBDL39X%2FZHFqj5a7qEcqFiLk4R%2Btzb7Irym4wDhhZX2G%2BdTT%2FsHB7LKVjl6tMvYRUfvBF5dfCq0mvWXoivjPbxInXKIf4cU0NyuBaIvTbyV94w060HBygmlcK29mv4zUXS7VKLWOMa%2FziKDmY1mwfI88HM%2BbBoqJ%2BDKacCJjauKUc%2FxvIPK9zCwtcPJBjqkAX%2BYhNeFap9Er%2BGRzBf4bS8CmFKZTSMkihQcrr0TBc%2FAt%2FhZp%2FQ9bsSgpDLFGKr8FRX6wOHWMH3G49zE1JfbwSdTNklvYSgQJCMXxaGpblNPWyyyTZ9vkD%2B9lB4dIV8rFlJk7%2BP0TMHrSdPcZNHtYOMJU99OhsapiaHZ8PA9UGGvtDAyYiKawA9cpbN25WWFxKhkwp9JLnrtF7gGJx8eLtFqxoYq&X-Amz-Signature=ee70e98abe976a0540c5a0923e5ece6cad16209e97ef4eebbaf6dbff092c2f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

