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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYE7FDF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDQU2tkdA5bEJX1C4hgmWf8qoxS3wVONMxqxWAbp8KWsgIhANH6phkeaz5andOrk8ZWIGZuu4g1LUUCBXB1eetFgOUiKv8DCDwQABoMNjM3NDIzMTgzODA1Igy%2Bwnl%2Boccyy6GsoaAq3APoOwYdN%2FpQ%2F0RyqEQQL8voJRZLwHw3gQ7eCqDOF644iaVSalFGePZ%2BqDgW52DHGg41eH9gHxXqULVbWeX6QqqQqCJgDfmxeGJTRFIeqajMXDYBujShkrsNQSfhP6uP%2FqcC5z7EkY2SFQFqq0wFG78FQO%2BGvebQqJGCAEs1bYdcmOtStkFGrNmhqAQIIEBgEq2TONZCBuJbLiFh%2Fox0LUgA88%2FXrCikXM6FPuHXv3UnBZkQ%2BY8GbayneGMPEDvM2V6vPVdKWPcI1DRL%2BrOsHEdGOTh%2FNcQA4iIg3qiF4uJ4Oaxb7%2BPi1Q7YvxK0WRTJpchZyBSRJtYNkdtH%2BeXSlDOJ6etnMrx1QAwVX2vr6uLQwjxvLMXlsiI%2FUkyHPhN8prinK3fQaf2Ozghh36tHt9VL%2FOKdkcPayYGo6Wy9ndgXD7c0RByfq%2B6MzJN9xS8GsABn9JppDJ4E4XmXfubJDOW%2BQpggzgqNc0Ivbcq2IsSXvOTWpG1Y9NzLVMXg%2BBu5aewuKqHn5RzpgSFncWDcVOU5bpqk%2FLmR40yCs%2F4CVjJ8MCAonsst4F%2FPMfvm2p%2BTxI7ZgJgsnHVU8B7IxxOSmbkJQbicGL%2BH04UFUSh4IAM2ZFhwIKXybwwZ1Iq%2BMDCy88PJBjqkAeuxB7wwBPnUrQEhV0JXMS12Zxx5GQF6XPsvoCoyrXmDxnI2nPCoMpkI1KVytMuQsD%2FOhwKxv%2FvRzTrvzqdHx1kueXTCa99KSamQkOCvHYWwMTHaXIG1DpH%2Fhd3JJpVFg0OtUxHNo5wP9%2BnNWQO9J0Bc2v%2FxAcDfI7QDmuWdCGK3w3meQuB23aRvm5j30%2FIPQBup6apT3t9zXaqw2eC0fXwwFqMr&X-Amz-Signature=5f3c653b8164084d4f0bb80060392aad1a229f90778dce417f7de229782d6d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

