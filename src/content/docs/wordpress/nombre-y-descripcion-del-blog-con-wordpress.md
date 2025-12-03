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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWLWQ6IA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFOXbfXtgj5qVGe2KWo14sxGOkTI3EHIGH6IpTTeNxPKAiAsDd6Yc0UCKOKM9c0FsjeoAagqezd%2BoQQQsOGPYMxbJir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMcWISWSJGpntFlW7cKtwDz8YtcWCmcoUT38svYfaAF%2F9OkQR8CQjUWPwALwQTzSiSfd2hCd%2B8KhgQJ%2BVKOLCfEWKgMGMswvQU4OrKZxHfAQRRjfnysMIYPn%2F%2FkTv2BGKgQMgaYk9Mpp1oOT7UIAxJfK0hExBP2InZ9NMaF5p06fAy4uX8SXXikwVmKM5e0IOsEjomEQjlQZqBD3oiqQ70IJTmrrugNXkfLZ5wnoJKnvnun4Z6X8amSzfH0sTnUw4npI7%2FPV4UjVJTd%2FL8QwjufwAzIOU4bvjBuRuexWPo3mNU3KVxRTxQhoYNO9iUjPaMWGE6YhCrTe3gVlWhb%2FzF59r7lEOZfqvMqGjj8y50flMXpmink9Fyxu5YDmjf62hgYFLN9v%2BLIKc9VwPhJX1%2Brz9xM2pCq6ZBnzK2KJvPqKTNDe73OCRydzLU%2BT9k0T%2Bf0%2FPh2f%2FX6AfGmAeiWbNfq6X3YpenFKyi5C9JyD5xAkWXv88%2FZstrNCGB%2B8b%2B2tdWGyVEQJE6HlGm54Ttd0IbPk2kf6O3bH8ZHaGR6iOw0JSi2g3C%2B3C3lrpBfIR5uAuSk03i8MiZaUAb3crn3rkL1kkvjbZv7gg4HvueI3KLyzygnmlrMm5HG0esE%2F%2FJon1avNW0Yn7ZjOOtxykwp73CyQY6pgFuZ1Lx%2FxACTnE%2FfX8sL4N%2FdoU8NKWDjeZBvgZhKsRFC8fS3uT7%2BCMbLzXYTFEJa7891dkjOj2nzXmLkx8tt9WUoT3lzsPG7%2Frj3ODHr27Ec1Fa0rqJv7Js1zEVuR%2FWNOOD5R4bpplTUnE9S%2Fo6uMUlw0DLVI3S6tMvgvIPvtFaNs0vo9QUqp3%2Fb9rRonzZYr9YowsrPYPnCX0BO%2F%2F8Opq3d28snVjr&X-Amz-Signature=72166e005c9ff7b7241dec1dd1f4d9d40326d40577aea9d19cfb61a13bc504f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

