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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYDW767%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIENwGMAhS%2Bz0unUAjZYHiCwUDJnSxx4GQ7PdrTYzyrV3AiBhe1cA6kKphLYyzbUttOPCxWdR0RlxbxVjLhMmLWddlSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0KDoeEuemPDV6RrUKtwDblqzpKq%2FmGTYXUaOyC%2FGrq5%2F10qu8%2FVOn3tdm5wg%2F5JUGARIiTAHIrEq2qAtffIbyYaYhsfh%2FYqJ%2FZhzd2NCFLm3tWlazRfNPObmhlal2QoCg%2BKrDR3pQp7syFAbL%2Fn3ZIfN1%2FR4AsxB5k2TuSLpytJ5sb3%2FcZQ9454I8bQf8LulH5KL%2B26gtGNTE%2BQ0d%2Bgjmp4dlVN9%2BZQY84MqZ8jvOpeRN%2BShGZVlaPI2qdqLSStBmQud3Q5md1KtOqcfPLUoOIFlpSDHWNpksBhZY%2FhGCh9AH0H9VoGzeC1lS5Fz9OnI4C3%2FeKGZ%2FliM%2FG2iccmv4COu0kJmptPqlveeOoYwuKmUzOiWpeM3Xkvu%2FA7FrFqXKQQNjYcGDxPXLJ%2Fc0pee38l8X%2FdFRtKSGdeuIP%2BQ%2BdbLb4DGAFdhjZEz1iJDMGWWnwehP0GMoY%2Bf51Mj0yTiKMQL5iY7bW3phTDKcZllvuHcOUHBJcvhs9qhM6s%2F5bvcYqozZcBtPIyo402Doribp%2BDyn%2BNXqEmqkLMIOplgHssZNs%2B0ygtEWnIxh0PNl%2B%2FeaE%2BJPEzAsiMnioy67wwKCuf54HCRADcb5vg16ZpXcbWPXlkdalFi2%2BuFDQMpzDgWabUBB3HFOoopGZMwrMnFyQY6pgGbQXM1sm498VrwKJGHTeGTJb4Vu3BgVRtZQy5cPu6LuptDVEJzdPQuDxyWbAG3eBnNXFVvNAXW6dwSfYcCectPJSi%2F%2FTB2WPmN3fEj5DcQfwQp0NijTQEmcEJHyhk5iTyC5asm2d4WibLeOf48x19soZT0LReXZ0bWNMfYv0Hu6Y0lzeX7KWV%2FRuF8t1OpY9N4mMWmZVbnCVspVVBfWbKi5qVyAdDh&X-Amz-Signature=98bbab890b45f36f895efa1003ff82866f16bb15f730c6c3ed47b3dc2db054a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

