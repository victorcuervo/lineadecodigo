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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAN2YLR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPY3gPGlKxxLDXjPSM0HaDD0HbWeCqv5KI1qAdFxwEBAiBsmCzjubKfei9eXlq37e37c5JkllgGOd8QzY6ygG4p2ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM7t8ZUjoeB%2F84Prz1KtwDmJHE4y0faX9Eo9HTEDOfWx7AFkuzVcBdt4L1q4atUcMFvK8fs2khp5DyHef%2BS%2BVZTux4%2BJMgO6yUyNet7yzo6rPU4fxg%2FAaN7yvj0NBfA18JDs9mt5ZZWjHY0p1OnyQRN49h2l7ukHGsijLXDRE8u%2BC%2BesKfpDpx26E3iedQjevbey1TgPqIZrhSZ1kwbqWN5pdSUa6tfT7ImRVGpi3pGvf8%2BIxdR%2Fu6Rp8T5Qw8X6IqWD4%2B9N3Xrk2hutoqsaX%2FK%2FdtbNsJLZyWNk1zMZKIhs%2BUTrFiB7PWnQ63xR%2Bu6u6H2VyZ7%2FBRHi3Pj%2FgXppGAr5%2BpHG8x89lCuOQmCxCiU8ra7i1MCVrMex2d%2FRaqQp1Mu3wx5aEeI%2BIFXLFMVDau8Ii%2BAFUWT9TQAo00KZAHBcJDkn7Cljmjdxn2G8VkbFFy5DQiOTs2fhAaytCKDJsQhPwOYsCBZsxr9pKxlTuI96CpGYweGkXBzyF76koSYw6f55ytBoGDiMRKYwk%2FAbwbz1NmQOjJXlAM8N01524sGhXlS%2BVde6jdxsYtr2yPK32CD14ZeGmzPisXwruOPOv5GrFbu2Ftbg5K0Pmp4QQkrR1sxReDKpBwRd7de%2BbXZcbe3PSUdf3RvmIrn18w39vGyQY6pgHpuq5kyX7MZp6CtBFfp%2BeixxhyPXaFdazviXt%2Byxl8%2Bs3hYx6UH2IvqROCBkpTMMdrJNXZqOb4Wrlsm5Ht8tsjVokNKJruor8OuBf0SL%2BW73aAXelnuv8WdHB1ssCpzORbN85A224q1Uju%2Fvjf%2BUYIv5%2F4uIGEj%2B5q7ft3XhxRVEYCu5yg25ZFUIdS8Vtna9H8%2BFdDbVAg6tRT2qYVblqUmXbU1eJY&X-Amz-Signature=1d38492dbc420aa29cd2908a2cd24c429e87681d71ea28fec448e5d20c6e3c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

