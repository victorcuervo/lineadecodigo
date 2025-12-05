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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJURLM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoZcAMlU0HkkWJjVrnsnrcjRqHdA5vDsR%2FDAjW2JliLAIge0pNxGSkSMsLg517Sp3Eq0tUZDKnaCknb7%2BR2JDoF2Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKHz0aUM2EedWaKOXCrcA6BiLD%2BcYe%2FjaX9j1GSR%2Bm7%2FFBoYSbJn28HEzIcBbOUmYcAOxLCWMr%2BJwzKIBGwZRLOeau9VCl6pzOC9vSYjX8N3lYaogxMPW3rLOFqMrStgi2cHLsnkS2VOUxgK1tFajkHhVo4OHfSLl%2FDyDfgf6HrWRVUABI4dPuvFLf79IF9RX%2FHyXBb3VRPRzuK0IS%2Fkrv0mC0U%2BLQfLVGbtGzGTWwUj%2BY%2BGpnHxOLt0C4QbG7wudRAzJwesd%2FjUbp8mu7T2mTAVvSY5WuHc65zvEYfL3HxiU8xe5LujZS8vGaSOSlirR9FUBip%2BiyM2Rc4jb18s%2FPcAm2tUQd6MtF%2FuSgF%2FK4SC1rwj%2BpBTwk8ts4La%2B%2Fd9I3XFnW6v2FICpkTd1gblmsutD63V3dDBMe8mZuuiEM2S1dWX7IPg7tAlrOfw6tNYo%2BcVD1oYnrHTyN8FjBwW96LHqK3D1BvCEVs%2FDB%2Bol83%2FLCx03OQU9uYX%2BMijuBh0Y6qM%2BGl9InbxGrzoSHQSVbtvI%2Bq2SEcpTBDpdAFRhd6nr4Y5yERQ3layToTmjLRojJVMbPHoST343nctBkg%2BdKzqNt9hbndsQvLag%2Bhe%2BiBEc6lENaIEFys0n1SKsHUpzQia36w7tR0yQ1ISMJjIyskGOqUB9sBFvAjlKMUwd8SmV82VznPq0xFGomRI3MtBB9NKe9ZX4xazQlv3CQTXKsrnsk4QTNzSduj1jNqXWy3avyHE%2BsQ6TSCrIOdsmq6Kj1XY6%2BYl3AplCT5kmNVzUO34y0xi%2Bkn9qOSRiEtcGdOhdJs%2BZc61oSxikrOkb0Nv8ZBGAqMq6CPPNQ5LGh0PRRqTG3236r3icDizK%2FZ6MHHVDgC7qPWtt%2FG6&X-Amz-Signature=31ea3d5401d99bf1d004dd0c65e6e0c713b03f3111c7acf91bb167874ff401a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

