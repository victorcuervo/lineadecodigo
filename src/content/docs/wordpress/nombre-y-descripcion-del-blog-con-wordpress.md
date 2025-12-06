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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHMXPJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbciNIXlRrCoqNKp%2F4YHYfAqzQQxGIV1BXtg%2FCQegqEAiByg5MoWJaaSfS6yMBSd5tA0D%2BI0wIKYT7CQMXBHnvCEir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMwKllN2qs8xp9QkyKKtwDYuC7ge0xiN2qBQcIR4a1C%2Fd%2FKU20J6stq0gDT%2FErBtlVn3vBC3GlkCYWGv4Q5FINCMKxSIHsAqlmJrqMKuf5A7nA%2BmESIcm5jNkaPpfddSsY%2BXbXlrgAbLvbleMaa1ommt%2FDvupHZ59NpUV2wtKEc4g4p0T%2BxwkzFq3q35SZ1%2Ftap58ST8UkjbL29z8kh5QA6cyq9Q6F9EaIhTCu5CIklDJK8YRbeeHNrQagq6guc7GIOvM7%2FLmOzelR54YH9IfhPSv%2FSyjjyLyz8zM5LQiemO0s2%2BFGEFqK0l5WQN10yN3A34LPMDrPf7Sa5HH5XiNzjMPpQyG2Fsjvw2YwuIiD3AJ06ejKkoN1H3jwy0J1EIm9F907nnP0GMNlftE9Aoc%2FYcxI2K1KTU5YHnUwDB9pgXf4GZj9CuZKUU6IrLlbtNk1sE%2BRFvcF25DsG3JsQ22bAI51obsgEJuvlmxquk95D6C%2BEMUw1YAmcK4%2FZMB54W1bs%2BVFRZqZvWpF9mg89j1dcOJl9rQJeCCXmLnZGHugZZ8FfkvTjQyPvoaMHvDughoyl6xqRb%2FEXjP%2FmwoucdDYduENxZ0mttr5ZdkoFF9qrxl5MyYVvvNC0q%2BF5KsTANyRgt78wE8I2%2BbtyAgwr8nRyQY6pgE2LfXvQGk4fOqio3z8J329lU7iFXkFMQC5GyPqOGL82sM5MUxK9QJBxsSbuJvlGPcgaSHFFJW%2B50%2B6Win%2F5J3ekQrXDVEfJ1f4cE7FNiqxrPsevrHZ2gZplRteDqR775UCqAsXXmCqCPQM8LDUJ87XixkvOs%2FRiLzvo%2B43w%2FVf7Fr9jBJqeYc49XO0S1qALJfWDNcdYEcZJqf1bSLJ0wKxRrI2jer%2F&X-Amz-Signature=1e68d9bb60fd3b914cbafbdcb14f9b4fd1249cc1569951173f54d9c3761704ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

