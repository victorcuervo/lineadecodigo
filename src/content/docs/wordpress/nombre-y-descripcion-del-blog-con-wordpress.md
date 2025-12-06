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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFCL5AY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsRlYaFfeXcYWgXFIeWuvqV3QppqFUEGj6L6HVmdyT%2BAiEAlHsMXYcjAOgRw5qk6kvnWl4CT9JzQieLGbEin1Dnu4cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBvK2lVyImn32GAznSrcA0Wo6NxoKrxWHPAtmkYmE5f9staliv6jdG2nPzEoxmKFxp%2BAC%2B%2Bl%2F1P1lpJ%2BCmpaQPGkTUg5vkYNIKBaRoGlF%2FN1xUSCLSHUPsSAm%2BzIuR7muKncnepq%2BYYEwJ%2FMqPVzCr8gxexMFoHBWJYZDW8rDNXHRkWsCLEO3f2%2F4v0TJRRLSCiGn3ha7vaXpFp6r%2BR5ScuUtpl6idy8alQfxvqBSe4baEE96WhAXcL3AC6EQKogq5v3ZcmcDVnO9gGThU93uQjL8%2BIOXVlGDDJTDWzkAZIXk3f9hmU5S7uflpBbQPIfRxIGA3tOgENY7vdwj4gRu%2FDDDmz3eiQjiw5TKFo02lXcO0YUNC5m3yfVzZOggSzYcFrmf%2FlYvbcdrKpT0Q5LuAZDqY%2Fst6m9BxwWB0Ov%2BzOAM%2FxNk%2FXIoRKi%2F37lRd8PTpEgEBSwBXn%2F2iMJrFlsyvCWwXSs%2F%2FOn0zFjOzQIu77P8HFJogxsKRyyRCHzOszvFsL0GVax5zHz4bmB8evuMTe4aB68ItZ4LtNayOFJPkcbaJj6qyo7DH8CCiH2YHl5bthOtg7QGu9VVhYQ7SBKi8yt%2FA7gYr8P%2FxlUvHpAxqajX6Gyb8F8OY%2BFk%2FCfkCoyzR%2B%2BY59BecOA7uEvMLum0MkGOqUBs3k%2FMqQHxi2ImF59I%2FXpta9%2FSjQHq003smAY6bPIovQ%2BAHonO7IDeA0GlEiPHGgsYCaJTcHkxUG4cbRHRnFaxCo5pcwOCwQqdNgbkB%2BNfJGc7FSdyQEDqdUxP1sgb%2FGC%2FpPg%2BJIL30PNt3Q8z7TQclAA%2Fa1PD70h96CDIp%2BM007l9zVnsM6liuNvYCUk0wI64VUL1QnY4mixH7jI0GqbPoU7HNYy&X-Amz-Signature=95a7fc5aa37d4805b328ca4f8e6de77739af8fff09f26c6a7b4f80c4f36fe141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

