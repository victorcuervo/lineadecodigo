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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNT2R3X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPRZ6OoF%2BsOpP3HdrjFmOetUcVsNmN9ryUbjYgucJENAiBdZRXDBvSHQQF5AKALJzUXckP6OZEwWU1WnJJ%2FWL4pKir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMDb3eKljessLK6rymKtwDrX8u%2BUjgt0UEHYCfmUIKUkue1txexW%2BbJ5FSwu7Z8viBuFnX2Y4FyE8YspZVGoi4bknyu%2BETT7pgGzuPzkQJiuz%2B6lU7T8YmFz1%2Bi9YI0PU5PJVSMDx%2FfdcQ4Rb2%2BHImpleqI%2BFFR6dyLjVIMZ9q%2BnjTF0p03iEniNf9qPpnNgob%2FbtQY4lt0BLPZW9XoJ5WNo6mNza2H2oaGMFUyzjl%2BJCrsn8%2F1JdaipfyoOD2nK7XIulAkwWzivHAn229cr0OIPH%2BGfiiT4QzoME7SWrlCTuCM36QBpNyoHOzPyBRyzBmJWhl%2B%2Fo0790EnZVDYgslpkEFS8kk18jysQ4%2FSuE%2F4%2BMpQIxU6DDczIAOJ%2BNyBejanUOOZ7vY%2Bqekt%2BRw5PMz%2F795Sx2QTT8D%2FQVvS6lScystWH6OqUm%2BWc9JDd6E%2FCd%2F2Mn52gj9K%2BAcynAXLEy5v%2Ffi5RnzPp%2F1jHr72vtsVwp7p8dpnYUjlEmMsbYx5O4V5rq7KYZbAl4K%2BvWMWtTpqT3qGPOn1FUaqDb5r3aTl3odW2EwqCiFNlV0Rr9wNcfu2ZXPAR%2BGaRP6ynWnlxT8G5tUtSWlHMOjYeBJilNRPOIdFycirXkQSVPqaG5FXxwslxNXfNxSrB5QygUwo6bQyQY6pgGDBbEXc3c4%2FMh8Ag%2BQ6e%2Bw26rHGWHXsGf0%2F3nOKpmhGjrmflkaomItwLTkQ4N%2Fonw%2FeBNJNIQrFcLQ25wxCfO0cuQr5KddW31%2FqY9V1ywgGIdRQiv%2BM0sZhwwUiepeHo4L24tPfdXJAuflo7Q6Fn8PXwwD2q%2BQUarHVCqkP%2FlsaozgceBgf1ID3EO%2B1zJU8QIvE5c1Yry0iPKe0xlP%2BeofK6PfCwPy&X-Amz-Signature=4601e7ae86d07ee3d58666901ca913cd120ff15d584d38b38abf4808907394e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

