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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIVZ4CY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExD%2B5vQkZgXVGt4ux5YZlPrhJ8h99w8EdqFceqd5%2BniAiEA%2FYxh1AQ3ikukriZCzTCfIWT9IMeS9TN72WxXEL4TiBMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPEWxBvIt3CY7uO61yrcA1Gdqktob%2FCidPT6mfAzFt7GQr5aPJCTOVnnSZ6fQ628ax%2BPL5ufnj4Hxh7rUIntRNdD9h5Ov7BOmAOpUAW4sgvwZyieD7R%2BNLBZCsMVl0N6n0K5JTTi4AszdKJoWd%2FUfqpWOPGUZzbtt%2FYCvG6YSULsI3SLEEcj7jTYI48FL0Q2G6IwDFfZqkLGgJF5eAkYpI3LlO3gqQk3Zk7AxvhcMvtOVDuSCAByx8FMwkjuSSKElQmYaXa4Sk1%2FLXIYDA4DP8OUb0YCUACx3yL4HFgk8ZAaZrtbY0h%2Fp1OtF8iffLhRBTsQ4iNHRE6j5w0U5UP61K%2FBkwb2xGfjoD8iVEg9gRFTORpqRx3gzSfeWWD9zmwuzFtk0bUalkdMLUrfcrb5I67JNLKmjwqYo%2BFRfpnukvsQCVLjcRPxxhF4D5vS%2FTfk3iJQBDpNpVWtOsXFOqYHznsNXx8jrhKrU%2BMZw32n6AaxtXVLKBm20Onmbga6RxTx4cHSxKWaZOL%2F0xpObWHhNmfgSbVTheFY%2BLKHVOxG4Mkf4akpRdaJuS7flUg8EP%2FnYQr%2FCm%2Bmh4UdqSWY1v6U7AgtNgMC6vKHxUfNt5za8E8gOuP7KGKK8Lg8DM6HP6KLBqC%2Bp0Fs4bKGtvR7MIDrz8kGOqUBC3a0HepXupnSmwtqH1SNr60VD9ckRiPpPKO%2B6oq%2B21QPb1l%2BE8XsVCZdbMStCXLbNjJRTBiPbXk51zfwyNPwQ23kJbXEetztWv5GnXRTeZT2cU52yZ1ah9YZ6t79DrIOr5Qwqa4zqdlALqRcWW%2BSZMTZMYioFxA27hOx1mIpp8o65X8jRFiexP2BODB%2FEyfFOm%2FBHh%2FnA1fhLVwav1dN%2FDybT8ch&X-Amz-Signature=849bab1bf609d5ac1cf676ec3b9a7e17ed404255b2d3ef0fcde77aa4c1c57a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

