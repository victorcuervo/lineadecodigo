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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQ2Q2N5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu02K7EcIUy5Mf4utQNpZvD8j4NB7JR%2FW3IgtftuvV3gIgJWqAlp9LyHO9MSmIqwStWvmJMuyKP4BjhVoHiPX9Nk8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGkznGepNHPVHXcOpCrcAwdkfYuJ4r0VGhZfiwaiXvgAhPDxH4pxFR1HIPazJJN%2FwGjgEDg8x2geF1NvNcomBBumvAK5ifRZzBaMBK34D16uy%2BZr0OkhzWLSLIvfrCeoQDeZXNYhL%2F9azv%2FnKKfENLdDAIDs8%2FHhceD%2Fel1YLy8AHWLOnixgcxMf4PRGU9VnGoXggGLPzVU62YfrDqtz3mwSIKbZMr2bcU1dVJ%2FPwtshc%2FEADyLyGgIE%2FeKCJUFu8j953ytx8LXkvTiX4UDyvUttwcQpcqDpfnLi5WYN09XR7hUaqiGivk%2FRaJzLEpnJNwXujGL61GSYjLIn3OuKfTQrItV51CRUxdhgpkvj9btFC%2BzKOUSXxMfNzwUMgIuJnG4dJP9%2Fn4QKz7AqXvTOQMpNW%2Fd6kYSOB78R4CWqnyveYyxDqNLkgCqSeLG8al5dYg2luhAtmT3Xk6lZpxl0fvccuSGrmW2YDvulp5T0kg5qceTfYDZBIyYXsEjYtEanEW4RIUnxMtDD8ApXZA0BiA%2BjS5WaoZLZdSk%2FPbHPENq0IBMssTF3qoZsMhXoicJ2RQ6%2F2qEMFaslKsCDUfwncLLais%2BzZA9hGPX78SN%2Fn0lVbQy2AR8fRqEjywEjsf61VWnMxrYhXBJJ%2FdudMJ7iy8kGOqUB7OqmgQwyxD7oKOG%2FyJfB9TgW3DUoNx%2FpL2lUqzEtCbljT3aWoPtyMONstkBEgc7so1A5D9A6l3LyHIEIjboP%2Fl3Fu8a4YQM23tir5oMpucuHeVA%2FV7zyof6fGkMNv2PrN8ZmB1hme%2BK%2BFVi4X6Q45vOPOXAUVuW4LhC%2B%2By3RfX50UbF6GKObvHQ4OxBwFq2wbKdMk%2FU8utjjbb3%2BpUVYi%2FzamhSy&X-Amz-Signature=1c1ac603cb0ca6c01aee29f35f42297dd1bbf3841ee8e9bb6a651a336cf8060b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

