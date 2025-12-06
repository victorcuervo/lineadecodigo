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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDZ2O7O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxwNNvi5%2FCtL7nFsPPGNVMh1f5NTxgPF1ScEjPQWzNgIgO4MPPqsgpYRbLkrxaBIQ3ZGp9CR1fPj8L6fYTcZxBBQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCas8Zd25Z6h0IufXyrcAxj%2BS%2FxWd9R6L4bI0tZYCicfb8f%2BIQVVbh8KJ7SaoZ0Qg3Zn%2FOGdXeF5T6EGR9fb%2FwcHk%2FtTooaIwqYmBrrg5YypM%2FD0kNbkVCtjYSqRW6V4vdsc5ND8ugy1krkVi%2FU16R71I3qZ2W2qmti6m3hmj2T2moDVI8gMYtGNtI97SiLDw71snEzQOz%2FWeusGgPxn1OMMXBVymiva%2F0q5tiDB0opFDK70TwFdZhQb5390sRhX1rXing5eiXTlNpI9DDFgaodtrVi7Ax67fteBuXAhrHyi60Y80ewbGVAtG2lT05DfzmD8%2FANbVC7k1pddgihMkvof3mNex%2BWH3rTzdyUVWDiVMK%2BXc6%2FZ%2BpgQyZA%2BGJ8Zyn6IUgFI147yib7OicHtY39sCPWJo2KfMSxOoZoGd8jWbXGBvCG50CD7ZZy7Cgwq0sKcwNwYGz5kUXPqK4c70qV0Eqhus8%2Fo8B%2BVMsUaxGN0LQktn%2Bmcx6VGcyM7IG3l0vuYYNxpcJfEXiSHryJpsCSkHJmOMTDNBn5v%2FNGzcQvi0cbeLLOoAjEJSmw9VS0LEA46dlmtFkGziamV2OcmVmtkQNnT5x%2FmaZMhM5mwrHcIkoIOubUko%2FHP9oa1Ps%2F7POtkW22jca4p%2BG9gMLLJ0ckGOqUBuca5Li2zkfaK6rYAPHMbLu9nr%2BtwE%2Bf%2FkGEvnR9C4jJ8hh0d4kuha7TV%2B1Fjv%2F8Y3xcaCN8z1eQ7L%2BIr8VkeqL3ZEk31YN9e6Wx4k0TWiDdsF%2FiqK%2FgqV7VWA2QH3Ujw%2FvryMFm47YVXlN1Zd1ehgK7DvoABSS6iHYxfdk5BjT5Js7mcu8pop%2Blnpc5qODD%2FBsEw%2FYk8fB68A8Exmr%2BtEAQdTzlt&X-Amz-Signature=7d51cecdff608eb22c850aebd323bd426ad4fe325c9c207f824a9481d1d6f473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

