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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J4XOF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6saxz4qC6Gny8LzCR13K8n3Kz%2BPY0Y7B9L09TA6XZ1AIgZHCdUzAUlS55V2G2KDoAbUKa2hz%2FSIVwc4cI01nMCNwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEijgTq9LIu7uWPvLyrcA1k0PIqHze7EM2ouVUx5mBOZzibNCTZ%2Fk%2F1Z%2BI%2F8fJfB4AQeCCQx0xVb0aBtIB1ttN3BJ6FFiqfvr5XmIs6ZcFDAhv4v8um4sjp10wzUgWdUUgKCgiLRZlP0neIScZA%2Famg%2FKUAgTEtcWBrq4K3q6gZ4nW%2Fzx1jy3388jDLKE4znpliHfOTWqL1JozgvKJeQRibgBwxM4Oxu7PjkPo4WQw9VlVorGPfTORJLbQ1LYDh%2FUYmDEU4ph7v0QV4OpXG9qqma1RvCs11ZW09pSXSjK%2BoKSy2D36c2R%2FNYvC6ePfqtLxRFrc8gmEOBPAH%2FdtN%2BxDuc9qmn1BO0NyjuqRMuCXGxMVBaK%2Bj47jphfZZ5nAJE8CAs8ptjZAWzPok1J2sZXgosH7Tk6lRLfX7gQa8CH%2FBhsxU5bfQcUcyd0iOxx%2FhuqDe5u%2BVB%2B3w0Qi%2BC21JbyWuYEZtSTSOmrK%2F4DjxqanEJuCJCOh0cS6jXNGRwHSUg7jQwWjpzzyDuXpDMrp6IZkC7iwmhCrjV3F7e4AKPYQp7DpWVV3sMH2ww7dIvodPz5fRuF8NOy8fl%2BteYv6HQOhKHoYO6%2FmFJN1RshHYbeLAj6cs%2FvimvhHIsQBS2awaWns3mZjrJLq9aj2fbMNCm0MkGOqUBXvDlrx0cZmcta9mL35oZPFWg6Gb0Qstu2zxOhIMwhtP52MpC%2FmmWe5d%2FIH8heJmHnItl%2FG7rhYR5%2FbOp4z%2Fthm%2BnJuRdCG9xHCkpsn9jcmDIj39dfPbCbSgfFFMiNBRUwAQoH8yLDRzQYv8XKQo%2Brz7tkLJ4C6jR4TDsPcHNYnwJk7HXs6NSGu2fAa%2BDlh478c4AljSSWA%2Bt4UEOtxBXkLaut0TI&X-Amz-Signature=766422f82f33fc8728904938a94b5431e08ec5a66ffdf0c80398e00cd51cca78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

