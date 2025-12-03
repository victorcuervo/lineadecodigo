---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTONNWHH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICUsRRVKD8acu82OQlqGLq0Gc5fkiofgo95FR52fVBRQAiEAo%2B4fziKQwBmlhL4NrF1xo7p%2B6hR3EeEIqG4suGPVGM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEb1eN1mCywFKJSfrCrcAyXKJ08bqjW7pS%2BMdRhlTvZdIh%2FvxSRMLGcMifMqhpQVNkDg%2BmRYZyCmCYeu98u2ERtYa2%2FfOz7yndGEZv3MzSP6VfQ49HYUG45VXBl8zQz%2FYb3Ff5NzhN9vDwC97clMvf4tQ1g%2BQBqq3uxMBYMcRLvWU49X2k5IJsawYWOsCvx1Ci7Sch4Ca66gLWWcXqmYzlxqLkZTxRXM6fBuuOvBrNkB0zfMJAG8hmTKeAAw1qcRJQ6r2%2FnGVnQ%2FFW3Ka0MXj%2BpQrsa%2F%2BaSyIzOrSOgZwHMC0l7sOAdF5%2BJ1PZh1D8hxue%2FVeloL0KoBE1EHjRJE2os0AW%2BJ8V1nQRHIZRg03l61FYei2H38u0Am0RrSFi4GxrbKMzFi3XoJeTDlW8pbez8HBZss7u75%2Fxsa8F2Vt7oChrwuCbazrZbSFJ8XysuYddtevdiahRYv5mhjqmmyedxRm0T%2BQaXq51xrvVDuYICzmcdxPcR3QSHhIYHf8HvifGWK7nUzuLYd7OrJBSGE7nTFg%2BK7aK1HTvlz9p7vxnMAABXTLpvcH11U71lAA2S5eU86NvY2J8TNoxEN9lyr5rPVkx4InaLdSV5IFE98IpOWtaru8a7kimL9TpSU1On9T7DfCTwdBf9e0pS4MIOSwskGOqUBuXlGN5AUvL2OILJ8p5eGHIqupXdOi%2Fh%2B6C%2Bpvy3h7262%2Bnil%2Bl5BsODLR4AVwSl33sZAOkhXErRXFWynlqH%2FXNY064jskkmsPM2WjONjj9ufcsaw%2FK2woN6hjN0RUtf7y%2FEUwVYHc%2FYt32pMP9iK9ibs3qEYlW9xZFmRz2Up2RlrT%2FyLI%2F3z1V6BxSNwCn%2Fw3PRM0jYsQoI%2BdMEKh3hzzILbmkgd&X-Amz-Signature=03648cb546001a8320e55791b4d4bedcece587227f58b3ff91ff95d566a4e5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

