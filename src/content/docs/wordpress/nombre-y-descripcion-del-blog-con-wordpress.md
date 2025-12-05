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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTBXGOX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP0O3mIJD4%2FsHDpZpf9JbCQrLr2XOLDeEkTL6pfV2p%2FAiEA04292HoJzAPSM%2BJJ8ahUf3kIjBXiQ%2F%2BKxi5ms89oahcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4KqmwIbDT1cztN1yrcA%2B06tf9%2Fdqv5E4UHzHGY1sDjkTDL1pQbFO50XqMf6yHX%2BXmDJVGmoV001HOWH1VI97DFs5oNlTQAk6LfXUwSQwUv5lldUZSKGdgMDQ2VjcdwsgCkdhPM3i8aOrQYNWj40HytqTkQmxpUdvuirqXA9GbEtHmjeFZBpzenddwiv6CkdgNLCn7lV3y9z5iFFaCwY9Wj5HeDh7xzmNugIFonzSkPC%2Foc3nqMNMuQq8AxJheVO3Yadv1aY894EFiCDyKHwa7TZpxuPh01aVHzrh2U4S0PK2hQQbGj4YLGegPT%2FMhwaHuy%2BLxm4QNH%2FtS1u4DsGoXy%2FXi7sRfh%2Fca9M05h5CiXOZEsvz%2FEiL6stqaAi4BQ6UGX1tQZKFDMF4oouYZiGPkocoGQx%2FuDFZfqCWqIVjwn6zYTiNR%2FfmF0fYF%2FiUVWIDVHgKUfUW%2BdjvLcNG3085vIhHg%2F1DCneDucTDg%2Fb9IHjUZn%2F%2BkeP5OIp2Ukwx8Dz6zCImimo68Q3MavqVruQ%2BFSd6ieHwvg7%2F2r%2FPZzdKqasOUk2dO7XFKRcJecxVGz9y7uYrfWZIG1vg%2BvWDY2B%2Fvlj2R9ajXs1rFOELx82AGAYml%2FLyKlUhxFPzic4xpXz2SRNG4IumpkbAY1MMKMyMkGOqUBpJloGyk2st5niO%2FOSCQzHmFNMxaanpGhPWk50UQS2E7Xa4ogUHYojY3s%2FIrijxzGqhQS%2FROpMNc0mq6%2Fhha9zKO4070Rqs2Jtc0%2Bjr7NeyWpPUbYIwPwWqMlE89DLjm4sS1MZpsXmGqmPSADW%2BP0cBS%2BUkG3IcA5wZVDs1jVUbfTEzXiB8rXsnLZ11xLT99%2F4axpvifI%2FZmSBUYMY4CF%2F0m9vPc9&X-Amz-Signature=5cd7d0211ef649064fbc7a0ce32439df1b2b94ce731b79930044094b560747ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

