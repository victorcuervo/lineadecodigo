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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWC7UL4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFkGMvB18VuwZsJh%2Bw3WqX5IGF73KTU2NB2kvNkEQr%2B6AiBxn2aDnhD6QxhnS733bYaRy8kzChUFYFX%2FZlFZ8Phg5Cr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMCtEc5LuLDdehuEZcKtwDLUW67%2Ffj1QNNg4S909clmDGIkv%2BDSlrPqW8UhVx6Vls4Ss0cGUWEJ8tGVltStLyXR06FCbxbjdCTsOLJFsecwTpD6NKJsV2pVxZao6JPh0YAvW%2BJD9ej6h8C7IQjlt04Gs2qDvYDtinh%2BusX8Gj7f7PPMs8Z2y7h1KT0H42rb1MWQpGEU2yXAS3%2FJI3puJPGNWfncHZ%2B0ELdbRjSMzliuq%2BfHb7yq%2BsBKvXEJ1zuwKuLkonXBwULJc7ipZk69O0cPwj0j1uL%2F4FCvoM7W01MZ4mKV2hJ96HwgwuGIqB5LOaN1bYwEkOU8EJRWl1dHTPxQItHpXQCMpBncDERQo0pqGwOMQJIAsZuGJRv92E%2F0CBm0ikWASWEUF0NF2KGLgFI%2BqoJ%2F3rMhZUSTat0EP8879wu0b6Oi%2FZxihPmaBIu8V6hfbAzFxU81%2FPffUgyI8bXx8yqla25sH6bGRcVs%2FT50MwfaZEiIAFHLqjrNTCZUeE23k90D2Fl%2BZeFJ6J1qW9DoKCeMZYGU6b7k2AGa6zCgWI7HvKI3zsjVMzILLOlTUuCjijJqtw3pldaTMGyz4h6Hf%2BMHCXyHws%2BJdNxUhZB%2B%2FlQ2pRchdYKtqtFAdvPOenuG%2FFCe7rDSDd2ggswhcvEyQY6pgFNRJctI9AE%2FS6D7jQGdyZGjeMHcpCt%2BZNvT%2Bd2XEcSNkbpgNT66hFvzrVnPYGj82mtTSn%2F54WienxWmAIo4U%2FquVBvY3yy%2FVdVNfyN0jo6AqkeawazEDbyCTr7OMaR8CzwUIX5%2B6LvW5g8sZgi5XJBsTr2xLg5BskoN%2FmxdQQDSreeZ2gnbEm%2BsHFVuRIfza8vVpWqzjtYH3nkBOmTe7TVd6sTYQwn&X-Amz-Signature=82be1412217b81d430e6d4005bdcd192303fd80325085b430b868d516dae88ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

