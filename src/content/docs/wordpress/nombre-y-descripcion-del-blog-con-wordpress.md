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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSGY2TYM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDvtntkHhth%2Bn9SbjS60NbNsCxV%2B3mqCs787Q%2FqmeOW0AiAwekrNqzOiRBFWBX%2FfUVIXjEJ0%2BNySM74STg%2Ffr%2FSaDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMaNKc5qnslEHyYmEGKtwDG8XBHnGX8x7LJjAhVN2wi2z9S2x7VTh%2BwbRY9hzXCwHtKrPGvwMV2%2B5fG%2FP26TrUQr8Kl8eiz74YkMF1jXjEJFnSQK5suQwncrjCSvfMy3649Bq0nlrxPtYFD7J0d1yOGPi6bu0ZLkZVSDb0xAmclN9fVrt%2Ffepo2Okf4Cy1f6HBJnzjl4aayac8BZSpiTON7tGp6U3cNupjTNE9sutRTqz0aKWjcWtSb1VMcKJ3BsjOjYSTezjDaasHhcXvC0vP7BgbVzSfZt6C6xk0e7X%2BQsoX1HC5i3xXYSpkaOQ2fq8Vxcz6sUFlvQktzUrJEKtFQnXo2iA8UgXpHoF%2Ff5IRlpIV7wUncAIjnyYcxcM4jHvf1ymyA81yS%2Fbcl627v1TlWp%2F8GRq4aVuWni0mP%2BByql49K6M7pQCWHpI0QgoQqAOk0%2BeYMIOXT8L%2FiNO4KzbLaXXbNeTbsKklnt%2BOCxi618uKMNGgigSvmj4x7IFoeQv6kn%2Bd5bpm5XAE3X89aC8i6ByRITrCxBmzcAsku69Sfoag0DdIEkfvIejm4FIpPA8kt4%2BSzsTiuxGM%2FkniRqqDpkDC1X%2BxlU0GzEC8oqlZWtdEHjs%2FyKELzxJoBlvo52H40GWKod9APLX80hMwhb7CyQY6pgHBKxZfyQGNeEdn4b1BC6KldQp%2FC7UEXFwP9jZvipA3LmhKrqKMDKonby9SIN8b%2BUu1uLWJDymDh2JrQJzKjBQzrU1N3du%2F09HxrA8di9WLyUMmo896yb4mfBcn%2BUP2%2B2D0m%2Bfw8pV6JNM4lpq8xVOX3EQon%2F4CAqtrGnbVJP3xaSDzUb3PaWyEhQkro6RlEA0pl3NjMa%2BqcturlR%2Bqrd3kFYmygeYP&X-Amz-Signature=f9f321bad6bae600462fd8b26d15ffb2bd5c05e4294bcb044763438192beaf05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

