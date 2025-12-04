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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHME4JO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDcjfNZOoNMDzkZVs378lmry9%2FaJ%2Biv%2Bilr4UTOK1sJKAIhANhsnF3vEKrulSOaJN2jpKgk%2FJpFUlb1NESM1zSU1QisKv8DCDwQABoMNjM3NDIzMTgzODA1Igz4RiofxZ%2BCPLdd%2FDUq3AOmTZ7zIotpsO6fmyiMt8sqIlJO8zYd9FzJrlJMZMuwJ%2BCpUu8D21N1UoTThXUNzEYYEnsarljjN%2BCjCf1JlN5%2BXgteyG0H8aV6HxFba7TNdL0mGc7iDvfQDRcHz%2FJyMkWhNP%2FKqYuhOwX7HKHnPDmugkIULu1r5t5Ga1sh2KxnE8b49rTnD0ODttCPZtF1hUAXN2RqziXgIAI0iKh92V3O8XD8ABsfc0N0OXzrCiWskXMKOK1sMKURCK9IucwTbrEYPbwSxiOECTjSb9EralXmp%2FYTMrvC7ms3CIvd5LZUGevLnDZKWBcscTir5TztJju0zG1OM%2BXGAR64cQTCj1Uc%2FfEy8ER5jlaV7TOZl55hGEOfVNdcCGXLRbz4TsxEd5tHpWT7yYc1dmAz%2Fj74ZTc%2FsQcJI7rDn5Dkj3KFz%2B6EJ3G177ipdj4wujCPBx0QWqPEk524jSknvf6wHUdXKO%2FAHbtQXr7VPHvuFmNGBXYW%2FCeP0nYz2VkwL7uurdezi%2FOvHFXVn2ybUAh5146n2Q1KAeGs9gHY%2BtkbXpiUq9SIRrmaltO4bs24hOldqnz4qHGTmtCdGuJCfs1NXh552G8X1hhUPxCVcPGZhlrLhwQ7XjM1yL4gTyZldtgK7TDv8sPJBjqkASgLOa8T%2BIrTJDhw%2Bg0EmFzd9ECYuR93BvG3fazpzNuIvoQjBxVlfncf%2FTd9uFNCdMnF%2BR9Zcg5TkJfWKOY%2BK7Z63hj8InkySkmYzvn8k76T%2BdOW5SJo%2B5nNhhRbaim6mn%2B5n0Z3JBD9N35jo6LR%2FtX4vdROXu2Sd0dUlfaLYSnBfBghAUW7BYdjUmswNDfEAfQwmtOHd9vVc9QGTDXlfqV50wNZ&X-Amz-Signature=2b2501348373d46be7c73af4977c60af1030a44fae1b2baf0f33c7b4e9abc837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

