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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7OCLJX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBlpVhevnWN97XBbgOeix6IED%2F5UAsinUNtWAIR4QYvAiEAwDcjfs8qRauAiURo80kyTFp1nnCJB1XEmccPmKLRwlUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHx%2FffhDznRTN9jNQyrcAxMlhDWs%2BsHjhcxLLqCW3UJ1sC4dDywdGN7%2F8Qc1vh6lASmhd1ah%2FXmH6DaSKeG%2FFZn2MSUwqvvzAijqvNIT0A7%2Fn%2FVYFttg9uMlcXL%2B9P1x4sOIBbcfFxIUHj7btObKi3E6Z6ewthxaXSB1SN5YPI%2FwovFCuLpiJiBCsVmTGyilKWBrF9pDZpU9mEOvzoc9LE3inkTdDNKpww6e7AZhoSc4sZah77KYm8IfRjXdzpsiEmhI8axwP7bsNXmJaJ3xqrqkaBpJdOYm3vcjm7NTSsnaj2svfPAB87NWCfqSEwV4a1j8f6g%2Fx2vL529UrZ1GGDm9gV%2F90aK4J8SRO%2Bjr5ZA9W0rFqs%2Ff2Ku%2B7lGDz0B%2BtwiTwgSBYAz%2FSh7xj6WT2B863NZyjp4MLXBJKvXGmcQ757bIXtybxDAPzv%2BrifOm6fJ%2FLbgYCpKkhZsOxZfqw11ML7z5C9XqTFp0vDKHS2vhBgD0tVPtEffPrbqGWw0wMtC2hcF%2FKRsl8UgwUtNucHbYWvRJQkxWD8zndTysJy%2B3g%2FC3oDipnm6lh3I%2BZhYRzKkXKek9m0Dcfr3cMyBupHx7E4m%2Ffr89QYYnG7zFD6zlsQHz8t9QDXBdCaO7aRhYp9kWeHm%2BITac%2FMGRMJ%2FTyskGOqUBYgsBnmKwo9dAJw%2FfBXzWHnFpCk1droxqSH3OxiXfoJAU3oX8cvhJAGCHnNbnY6aU2zZoYegcerawnqKfhOe8sZ8oE4MsFonYHs1pFMA%2BvBm0MFToKvVYGJXdjJWprD77CV9XUpG3d8xunu9NlTsb5kr1zsxY%2Fki7q%2FPwBw%2F0Pse4zDrZ8eL7TrnRN%2BIm8n3gM1i0rJb9bfcEwxlePb80gJubrBQc&X-Amz-Signature=3714c957f6d556edcd791391fd9bacbdb3381b2c84499860aa3b59f3e598e4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

