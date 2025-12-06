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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZBPNPH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpkc3pGKRWBCpjiMLP1sZM1D0cMWRICvV8rUOMwa6smAIgJYEfGLGqQyCqXun9eP03PTLiYYfX%2FBMhyU33R52QWpcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIAQhawamSqVA%2BZDzSrcA86kv72f4Rj5%2B6KwfKVnwGY600xKONDL%2FmsrtGizzDn61qwDRIcnzsVDe4pOC%2F3BSKlx34s1vtRFE0o1U5%2FsGxAoeTb1TpZ1JAT%2BXUhU4Xry6L6x50h7KYdXSDt4KbP%2B5Y%2BqEves606NtRIlbC4ysKOwTF7lR0Qf0qdtU%2F0wSBDJ4mA86YrrQGtf8u%2BJ9xSvtFd9U9KZIT5pALKa46%2BZTc7pjbbnOGuMhb2LW%2FHF9EpeWgwEeAEY76RcRE75c%2BkZsQZ5gdYNVyZQ%2BL7Mm5jbtlwLAMHoIckA6tDsQQ4bqwANPrxWnQYvH1vkE%2F0%2BkCgXqRzF4VILIjSTwU3fA0XvatrIpnj6DVuztx6oieLDn5gOtkJQEsaORKwFORg2JDSj1j0D3%2FCAOHHKPMgc%2FGl%2BMwlaul%2F4rJyBcBYjDS0aTPUu7%2FyFfKPO9IVMzG0GYa0qVUxRsrUdBNXoGlTNYnMfa8fDZk4aE%2Fd3db89oYXBhvbtpJq3HTlppwwof2I7x9LTdQTudAcfG5psCyHeiN%2FuwngEDOGIEzkUsZvNjDgsm7B5%2FsRxdtsP10eIY3nef%2F4JmIt%2BZn68F6T6iGAl0RQnoPCMcGbJ%2FJXjcG4h%2B8G1MhTF4XkoAGG7FHfsMleBMMi8z8kGOqUBh3qeSJQUU0Cw9jyo0ayia2mG1Qc%2FTpKWDKqP8kxVSrSD6StTyIuL7m%2FRvCwY8zhaICk2QlIkvC9hZld8mpqv3bauZydhNnfK8lCForKZDGM0wlWrQCSR1Zb7g1WtaG2TIpfIXkTRhh%2FzVRiLnCTzMTfWLMFne3S65WkeQuyGiHZEIZKeuZqCt3oLvxzsP40RnCPvwSlWgxIXqsZuvKiSa0%2BIhagX&X-Amz-Signature=bfa5ea80901b22aac4aa7c6f0f8373107d7afed3329c30d7aaf7e2fa62286039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

