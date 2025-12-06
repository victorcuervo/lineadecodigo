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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTPQFUT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRF6l%2F0JH7CnWqCqJ9RSXH%2FlW40T1LcBpkem5WsjkqyAiBE9fy2Zeo4YSdcxP1fzGOpAL3bngiHv%2BzVBcA6vS392Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMFpMc%2FeA2VyOnUopLKtwD3u49T6CmB0vqI2j4QaAZU0qyYj8xhKPDcTAT%2Fs3Zzk%2Bm1FzphdI%2F8ksCIXR3XSa8C5tRRL%2BbD2wXHwGzz2pifnO%2FJ%2Frfq01s0ywkcy%2FB3TwlQB2Y6BEpE5OWxxMuUEFVrO21O85o20RjZG05IVq2v04mTEJdgyS41NX3NOiKeUR4af1qOCm0o%2F67PvafI%2FzQ5ixfNsckt3UyOB6CZOh8iYEsq%2BtRlWVVDDPicmo0T3%2FKQP%2BfsUDKNnL%2FH0peVFjfms1WEEh5EFbm0ofxRWqsMhW%2FgFdj8tWuUonSplinQ2EHd0CjRzkpFepoR1Jowl6brVSujj0eTaL8t9kdFV2frc7O%2Bi8ErHpbylGdj8Th2Fmwjvvbj2T%2Bg4X%2FpVvBrXQV09NCoyCncosfDoj7VCb6czMXJEtKFb2i115rNa39Hh%2BTPlkXr5ZmYDQQHg0fl8TX%2FaY2C9SNUB7Jau1p1umV6DT4v%2FyFBJtQHzT%2BK5hMRHg2235xHdZYpjWnRyxCqMfLnyDZQ7tOkOQ0W3S3g6mYfTamoYQdRr5VD4%2B2MhNzN8wV4bIyJ%2B8wzmDLYHXJRRAU%2BbUHqgxogOEGgjgcRu%2BWgAVyexuUTwqKePZUolYojRb2jK8M72zEM8xHfOIw1cvRyQY6pgGTX52kGJkidj1cFpovYWWY0sAqpIvD70pAieK3qNNHeSqRLkOH9%2BhvdrzkO9DUaYt7JJIeKe7Mmv7nRIyPI%2FdhkJlcUdxoOrvYbExJi8w0Vn7NZwoHEPgefMxF1%2BWxvV009jWxc7ksQwcVksea7Vm8Le59%2FEW5LAl8S35lUif1Pwh0EDfIGVR7llfuuDrEf6p8mZ4zMMNu03d2k73zPjt0zceOPMZ%2F&X-Amz-Signature=aa639f6f0d319f77d8d7ef15ec82e7f358646e1f0120ec411720249bdf6fff32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

