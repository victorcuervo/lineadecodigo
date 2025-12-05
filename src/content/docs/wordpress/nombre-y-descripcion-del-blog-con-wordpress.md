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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNS5AHFP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBObQ3OWYlSf7Uc6N1J0BHIzzu7sc2ZA9UvD4HRuXzR4AiEAieg4Udgo%2BNVBjxEsrG4oi2nUZchBNMh%2F5RNB8QN998kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDLM2oE0cCyhZF6svyrcA3Rvh039tF5cQ5rvjMAjWbIHv9GtyhUk5kvfCsuJfwglZieJQ7Hy6fxc%2Bech1WCGwEviaKBmXyvdD4FzXhDWu7vM%2FJ415Hkor4rav3%2F7w5z2wbF7olZZwQ0kCzXMU4PRRlW%2FkFeWNpUAiPC2GU%2Bcrkp6uJYx8dgsMbZ2pjT25iyjpvbpzjRBAOU5pjWOU52V6l%2BJCV207IOVRl46dnNQkNhHIMMAKzuOxG%2BtBYb0LQqEj9dtAJCH25%2FDXvGR4XF5oE3hhll4vg6IhtuvwEJIFhOiNwQVmTvNWAxGvfoK%2FDd0CKqghbgxUWNfogKKG%2BDPOIlQpdeEdIs9S2NLK5tacQBEBBfiZYT7jL9jduNNCd2Fr9V8lkBgCR1kYWu9sPSAWHwwu4WSyNCE0Xcx%2BjXpvR04yTXhLyp1YGbsUk%2FDNFPsYHY8Apv2Vgp98Dxtv5RVU2ptwLBULGKNPfJh3E2bMTfKD8cXdgzOKb8kyCsp9Cc6DHeiGqY1fMFhIo8h%2BqECUc6PyFsgj6%2FWFKeyOAeGSeSxeDr3A9yE3jMf4%2FOL7DstD4aBa9jGLWLQNttTk7fgPl4HfWBw7S9%2F64ZkcZssgNAdQhHo8nbjYAPrrTPMHUzAS99awJaK2g2IA7jQMOP0y8kGOqUBZmOqE7ag6fCcmZl9Ix7jnXd09m4hD9hquRTNWS%2BtfI7TWJ%2FxADwD0J8ziCwH0fPxm3zSvTGosJO3OfGDeSvBT5EXp1saQKYJNeMIfZj1zUs6Z9qhpyGnGkKS648gu0NvXsA0opspLjejAQXuhsc7L%2FdKiqBarkh%2FaHeCcWvUbfSKZqt0Vu7D3eXTM4uQ6x4DGTcRkLtyJIX0Rup6qWSk7sdnveI8&X-Amz-Signature=1cbf2b1bd0de81efab18bb27db2362cf49fe83670849201b0b86f18ee748c8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

