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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDDOE3B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGByhnVd%2FS5c%2Fje74F0DKYB2suDLCbPsOdu%2BkF1Eo%2B3hAiBXh16%2BFalcEqa3GGF3%2FGpfKijx%2FXj5DyY8lSVIKccONyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMmJ92sLNpLpSOfhXBKtwDLSW0P8waW%2F3vuhhqMPB1%2Fvc8W9Fuo4YWbChc8We3HPVYA6ZCyXMqVLOmd0qoXT3lx6mpzJu528P3pVEBm7bp59owWFtG%2BP0G7jjJxbPIfmeSAJTOeAYEEkS0yJUM5521s6WgA8VEem21ojs0CjjGdRnF1SI2We0SCPZSjvJzsqDaY6IVgslkKFh1CVnL3KWSw3kx6Ew1q4ZL1W3sKY8SXYHdOUQidIv5B8EM9DUqguSvGrLveQWTE%2FvkQKS4Z4dEKQ3%2Ftec1hKR4yDoWMO%2BEwqidus5zMjiz8YzXd%2FyDBTeOi1qiao3MKMhna5egtFJ3sFoHmabIar1aEJmT7Y%2BGCAmtoFmNGLhGKIovphkHpO3GyCm7yjgr%2FbyIAQCIOBJlJSZ0LceRJgic38ykllkF%2FrQmkVmNGwDwNTfZOsLED7kAaVVU3f%2BRFDggt8oKN5I%2BX2yPmiUnPwRqmKMTkIEfDzaxl0xB60MojpsM5vg85JOUBilC7S9EgvyuXJQJYHeHDf0AUGkTV1KwLWF%2FQ5RuPEIYtgJEIquetEqPPxx9s7IRH9c3tOqGQu8BYQI3Oz969HIW0sCRnRDhwPesUXiJlRs1DcIXQgYIqt4f09hXah3lHNSQEYv%2BzxXcapMws8jRyQY6pgF3z0N0cfgXaOSxsO3FS%2Fe2TRoc5AFcAZkkTfGuqmr4KuOzc5jWKspwvVKIU%2F8z6ykBFcX006DK%2FgCd8PAD458jmigYSAA7%2BB83%2BpvLAD0u3EnAJF76%2B60K%2FC%2FtebHY9anB1humOiVhYdWyyZT1FmVjtHXOI1atLtDqRC27NUnG%2FcQIQWTpF9go%2F%2Bepym%2BNTSh4qbfeacKP2PJsL7VEW3SJV4iwdGYz&X-Amz-Signature=b6945e2db2bf68b62fcc2e97a4a4a220bf8103516fe0e6d83a4ea5daaa2b340e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

