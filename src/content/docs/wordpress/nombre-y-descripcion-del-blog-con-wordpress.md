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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPI7ROF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHv71HnAYz2aEzNJWt%2B8n6v8rW9hxG60PDyo9DI8ZfrBAiBuO6FddGbBO%2Bi9xK%2FVtOmwejivdwArrAmWzIENoXLwbyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM25dc32szaTGDB9v5KtwDhPEU%2FZ%2Blv%2FcYVAX4mZEw8CS2R9fz8uIEzitB%2FV9ETLiw4%2FuzUlLR25ZXHcD5ftdv5MWpA9PDzR3%2FtkjQgoIraWY1%2F4jNgo1lXhQiIWuFnXuftMy%2FlUgSjoBKsVxlqIT8ibdI6%2FMC4e5XX2wPVDmFlCpVPldeFQ3cU79suwjL33XlMhb2wmbCJiy9CfiFgAdjTU%2FremljD8tNcp1O08Y4CLBYSwkvsE17Kc%2FpNxwRz1pYaREIiCnRnJoH4guFz%2FlhsRjNAv%2BMr6ZzuvkhNTldzgxVy07J%2BviMCHaozOKUFqK0oMAtLs97i%2Fq4JLB6UXuRsj3eD5BYW1162%2BpUNQ8CVW2tn50b5jWhx22q%2Bt1DIVqorKpprGvcjd%2BRU0339AbgTPA8v57LSMb0i9mw6R7YMfYILAKI5GhdkBHlCG%2BPXaw6WflNPALLPTUqd0WeuhsIdZjTQscgVt%2FHfynaGbN3n2uMKLCX5gnbaYNaK5UgI3MY%2FoGibEYklkd3BuWugmCyuI8fcGp07opvWMT6KnR5owrjpF1%2BSvJBBAyulkFlvxwXl%2BI0QJbWHnz9mnXlCGtzK5fdvU%2BtebUnFHtW1m9voEKQNBi2dL4c4DiAKLooB7bzjri3e8uye68WreYw1%2BbFyQY6pgEhrKYnTunUoFBbUWEwGQ95O4Yku7Jog6Zd%2FXOfivFXjoQvkth%2BZDvmx5GHEg%2Bp1CdBSlz1nsetC0V%2F8xow1AwKEzqvdJXukynpRG2VmxHdF422t1B1DDfhaFIDX3cQ45Z69LQB605m7nfyeFGgpXNWg7pXI%2FuZ0CEOvhVimNb%2FdCHFn%2BsaqHM7XVfX3qvxb7C60aF50%2FCc5ScIyCTsjDb0fl9pKGTg&X-Amz-Signature=7f8fc9283838ede69ff0195be5095752ae5a87b128ca4e6041d78e31e6eb7beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

