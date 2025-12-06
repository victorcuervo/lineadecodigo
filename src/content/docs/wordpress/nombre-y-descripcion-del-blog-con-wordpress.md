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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLKXJEA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzMThA0Mz3m8u1c%2B%2Bp%2B7ku52FME7MDjP4gD7yN6tRjvgIhANa2VAMuIghQqG3RQWG8Y8e9hy1%2BZ82s7Z203SHD%2FNQgKv8DCGwQABoMNjM3NDIzMTgzODA1IgwCfWbZA2frGc%2FCac4q3AMAf4fuKFTS%2FFV55jZPeygC9nVSi0ms3DZkyJFCMKaSQ8NYsWpUKQyezVFrh5u7dNNjaUXtENnxxCBuaABeOTPs4KjO9TEKhI8QGpWA%2B8Mc%2BqrnJxvKhROOEBeuLHOtdMFSKEDsf3BfbLTc3TxsN3yWf3xIp33Zqgssg7j4U3l2U8qwsn26xHCzyIR9ln%2F%2Fg2sSAfrm0C4WA%2BwzSiPk%2FtCXM7IE16dPgWVUEH18D8uJeIzPDv29C%2FxmOQudDQY5e5sAZDaRV%2F9rVyUw1ya9JbTHU%2FkkaIJJttr8SQj0tS%2BFoQfpmIgxA5E4u6%2BXVAPqNMNrk9fllHNGW2skDXs17CgNcLllfyvkAxxddVLTaQtA0AohMf55yk%2FFWbafKY7hzyntvUUGXF86ljjC5RAlfAOhEpsNqtxoFN7CUBW8%2FE7NDnK5hhkzGi%2FX7u5QL6ljJiGZo7vYdp5hq4tN9q71P9r9D%2BZOnb0h6y3vT3euz3es1tvkbzQjXsb%2FCi9iUVY68EvNoMmycYEQcB%2FNVxANP0GnH3b%2Bgx4Ej2gRq8B4bGrj4FJSHSDsKbf8rpHjYMx7iWYDCwg1LWnVYhyhlhWodAk5dXwBiPLKBAK8FYSQ%2Fre%2BzdxLV%2BmC0WaqQ9KXCzDew87JBjqkAentz1OD2ZTNOGksPKCdc0HOY59SujIZ%2FzK%2FZbsaRQvz67ClqS4RpP4c%2B82Ahp%2BsCj6xQzRkvucmWmmPPQ4SWzmlhIQrSe%2FBUjlIgfrDMHMNzo%2BSzRWDwHsmfWlNiCUF6%2BVl1x7UtnQl51NX2BhzDrLH%2Fp7YqoTqsCW%2BeISug9WvP7L5cVGFRKUXyC26GUOznA1mSj8pFivDkz4GKi%2BT51EpvDRY&X-Amz-Signature=22714af66e3937b860001f66559e88d64f316e4151e08ba9f77cb3b5c21882c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

