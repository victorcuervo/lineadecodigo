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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOAGW4T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqQY9fF%2BG8ZTAeQ6iUZo5HMJhYlnx3Wi80%2B5f4k9c6QIhALxVFxW75wuiAEpqLesac5hiRtmssmj2xj61xeRpD8zkKv8DCFsQABoMNjM3NDIzMTgzODA1Igz59YZWO1Blb5Q6Vlkq3AOkIzOWGUakUTltm653pLGKBJBFxAtCpqcUVC1Z2MdiCwLwLCKF5HO%2BIchgvpVKO5eeYlCaDzkHsYCuOBqmN4jl2oCa%2F%2B57M29ei2VQhJYysTP43s2VnKkWI6zQ%2FwjQ37Qen38ylQqkpBvUP7nUWp6%2BIpQpiKK1CX0FdsKIZSPJuDQInCTOc4DqLDC9QNecnVH%2B9vIFQdn1ZI3QGZ6eAsUQC6VgwEuKfFgeGQpW%2Bj55Wh0UapNc28%2Bgf7W526E%2FFSRk5i9UUWMXGASMB7DmtP9BO%2BQiBcDtaKqJIpHjc%2B5zzsnuSAzt5OJ25pAlbz13kBRsQu7FNfb3ZnrXjVbxvWDehhrk0AovbJ3Xdhbr8hqdZEhyVayv%2BmmtTimSiyxE7jfB%2FRsp3yAP125RoCZQOiW21ajv1Ssn4WmW0OYwx4sPQyvBb2klEryvZVTBP%2FTc80ElSRv2kahGWrD50GAMEFpWUaJ2B3LARgCBKd%2FSaIKQCuosbK5ZJ%2FLxzRkKRdr3kLj%2FpHOAUvBB3mV0XAmKN8px4L8gGcRiDO6x3d0Y3i3IsI5rqasHArXObLSHZ7sca%2FGahiXvWz9a%2FBAUyrRtgy3zEKlE5oG%2BckyxFoQNBnbk615mFUgMZINO%2B%2B6%2FUDDjzcrJBjqkATqk6qGAR7YvaTqRYzd43JOmakIvfeK8DXn%2BOvrjM2DQYP8zch646odwBeVMuJfi7X%2BU6yEtyIyyMuqqMBtNgc2Cuwy5lhVZEVQUUyqGfAWWwsD1tPqQk0VYivaEuHOYw%2B5Wv5gCCjezflYJIssoc%2BAd3hP%2By9tg%2Ff1w1j2juMHLgoZYmkjgi3TA6CEKlrmWIQM%2F9u6Rnq0%2Fx9BvveX6D2VV%2BeRp&X-Amz-Signature=b0453688aa0801ebc69785abd147a17defb879170031293a6fd849d29bb0079b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

