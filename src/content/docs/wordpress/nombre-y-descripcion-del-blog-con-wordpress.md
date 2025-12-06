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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QED64G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7QHu7PkoujRXNChXw9QJCXwSATAeiDYJif7H%2B6UR%2FJwIgHMrmQqDEie%2BFOwqwulshNHHgPFP0o%2Bsr6pgiInF2jp4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIC36MsdcSHrRTffBircA7OylnGkcsvfojVx98000wZFiW%2BCO%2FGxQ9Z0DjGDenQ3hRgPNCjfNfHH%2FVjs59mpjMljTdK1G%2Baf5VPJrMz6SJo%2Bot34ljP9iQkl3pj%2BFD%2BPy66EL3kP%2BoWJnFbFI6bJkASpWNymBbo4vIpmJbzLE5WB%2F1E%2BMBI6u5pVJqK7Fgo8Yx8JeaFqnOiUYQNDODB1Cxm0u%2F9l%2BNXDkV3E4DJM1Q9T7Uiu4mQxMn2ffXg7q4EHH5VqxD3z0XjJtO0RPToBePwfHJDz1LRt4PdWDLHQebeUek7uaiu%2BDJh3g0nuP9w4i0qn3F5NoT%2FfdBL95G6x0lrs0EebRW0uytxT7L3K%2BKTLWa%2F2z0ELaDjojuKgHUyazQUSqCsbL9hZZdlcw9ZM6CrCCznSYOiQC5%2Fa9ilDgFSkIrqdOM3WXJRijxkYyF9oOvwTKPLc6%2BzQ0Z7KgTprrTyT6VpcFccOPPGPc94YOGQn7P078RplmzutIjPNqByuZZ1ZCTUIs8lRlctnqXqXS4vw8YQNNuD2aw1V0E9PJbGmoOen2h2ciMEAr7xTPn91RzQN6j2ptNiNfMsGl%2FWztjPOYFX8IE%2BRatILWlCkpbHJpIZpt4poJNwTvnGeP5%2FuoNF4ezYtr6X6p%2Fl6MMjK0ckGOqUB5Ez9VuuHloWr%2BotuYEwUC9xXmm7tJYumW07aIR2PEF64pxdVuNVqqUyL3UEh3XdlPdJ%2BGfsI5HX93ywbvda1yahQjviqE%2BluYt08CNFunShfoIeT9YCMQROg05ZZ1mmCicrsOWjfmoGb%2FLbRxihU0odUxvkthLQky6DS4SIX4%2Fc%2FoV%2BVN7EmU4ktSeBpZtxcye0L36AYT4Z7oOK2UahFjIcMn8a%2B&X-Amz-Signature=61b6cd6c642bc84e4f129bc3c1b80afe38e0ecbbfbc28cc003ec439f64246a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

