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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PRD5PDP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdxH0FGXatALJUB58mCvJqTcZJ5wtfdsaPYvQrD%2FuNzAiEAvjmZlDSPsf2kOziWFSPziKu9hwfaJ%2B%2FuwyG3bWUl4csq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDB6xly%2FTT52j8CGSmyrcA4C3MrPLNRYt4tRDVX5FPwtISJVd38%2B1k4v9CKc2Ifm4JEd9BNQ9LWkoOVWDsJ9sPFIEHJULJ9OK7EVilbB08pG1Nt2apmxHkAXNdg4F6WuZQjLhx3d3Y1iJEX%2FW9rIssyvVLoD%2FQQoZSnVjAOIpcboSKY80LVSAZCKQqDl9RqNdnS9eZXlDctkRV5gOq5L3G%2FtysVOkRLPL5%2B5RoCKHtzgFd%2F5j5NBjn6612B%2BURLqjT%2FmrF%2Ffah02X7cxvbtzeUMNcgolxXX%2F6MN7TE%2FXL0AAQlhASgYx%2BXwoawVkZ1yOpFAZrJqbupnFS1Uu1cnIPbJuaU6LTQNS3uk40Mx0Sa3UDA3YBrapY%2F9Py814Gx7lhDIMhQmJoSE0Y%2FY6mL3sqLz570I9umNDpjFhZu%2FZ4UiK%2F%2BjblA7SX8oNhRFyUWNaRxSE8uhsxE4C5%2BReFvXFhyO3hL2BPAGgQCjmcx8iZucsabxl07jxEFAU3kvDQKEti5UXmewyL%2BESto%2Bh8afJns88s9WIAQGuP9s0qr3IU0ZjG1VBPOKouDqS0ekjB5WcuweoliwiuGcCRLB4SPe6oUIXlcD47HVt3VPYR%2BxXX46Sab10AHQaNaom7Qx%2BEMQluPbEqlWt8RtHXJPheMMbrz8kGOqUB%2BbH3hkx%2BdQUATVFDWHKVaTyb1jTm4iYuGfa96Ip3%2Bi7X5G%2Fj659MLN7EsINHmkXtct8Qm9V3FTYK5UiMaG116J3DkoHtHZtMFIFh6zFb5rAdlwvlewTtDgbfCvg08q%2BgTLLmG89f3UYTAnjX%2FGN%2Bo5YhLWpx%2BGOpX6YSshJxvifeZjda8k06SWlXA13c%2FnWSK0EY9vVgmDSumJO88W08kOSTdEmG&X-Amz-Signature=1ebae800fca93ca95b79b283062e5b93e2a233556ed00a3392ffc3179b8727d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

