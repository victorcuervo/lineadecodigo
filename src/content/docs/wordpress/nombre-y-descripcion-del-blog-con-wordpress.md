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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVYKXIM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkrNOa3oCAHFDSUYHPbR2qvBX%2BcL%2BZBrLWxfNAZ8%2BA6AiAcI9pIL2cg0NiZXqBLCt0FfGv%2Fz4g69WZ35Zn09iZgpCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMYY8le8blFn8ykF1hKtwDBfiz2efuUmarinK9ktP2nVAAO5aHw%2FxOCSW1ZxqZ1t9mioseIKKojZU747klTr12BL76j4Kzn%2BvP1cnP0k9d5RdwRT0gtZ5C%2FIQBKrtSYYTjbR%2FMP7ycvNwqf%2FFeav1rr8l3yJenPVrnU0eJNI3vLVYEF5aEGQZ8xit5LWsCx5F%2FkVjYLnFxehsnfP4EtETRbfskwglg0EvtMIQLgaGO7Ixr83GuG9TRJnyZSkLLU88tXJtL7pK%2BcGVTrMeIYb3iIqK9Qszkau955KEvCdZb0eN4M0XH%2BUqyVCbHObhNQF3I93i13i9R4DMZ0DVDlnjQtERf5lXt62EZkMZuRdPosFz7m2drD74%2FtX%2BIgNH%2FioQSBJiU0Tl%2F5YMBFgBKchXDWMy8mewxnhR%2B1dJzM0LQ0C5UVMxGsDVl%2BMaGrQ2EB9KndbeD47OEKmOXWBhhZCQ6FhhRLj94JxPIFn%2Fp6L5%2FMnNCIeA6UGkoTVQwBfG1O73rieMUWceKRz5TUeENIZMzEQ%2FH5abT50VMSVCVXP9hwII%2BHBzkCVAHRijPrEt%2BPsOstPo%2FbT2uw76TgqCPnCuWFi%2FmUBk8i3PkGgSCB%2B3Pcfoz97MUo%2BmqFqAh1P2frdqZ0KoVBqHOWM2tUbgw6cbKyQY6pgEMBUSE6cT9HhjMTg1lzbD7NpIInHlRnl29I%2B8zsj760SwqiU1Ubg8vWnLpF4tpGGlEywEYZMBBxZ5ckdkAzkBU8Z75F4h9Jg7Jp4%2FnKV89ZOD47xW3f7oO813kg8dcFIEzolSno0BCxo1Vm0o43twEG6SrDYNQOUs5vrQWrZw3faPAD%2BQ4I%2F4UqPLQbXy9GEStYkwHgpTJ1V4szT3prD4Oe11ffi8p&X-Amz-Signature=0efb010c54e0ee822a65aa0ad2f60c4610608b562dc511b218936f5fef6f19f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

