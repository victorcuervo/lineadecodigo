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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UMXDT5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLE63rCFERmLJIHpxuz%2FvVgv8kTTHJBKjNvFKWtjOtnwIgLBjhhrCfRWWizQi%2B%2FWbh%2BhRpe5TvhhHUu9V2qvliCPcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG2XZiGQxtt4Al2fpircAym7uooQKfqGR%2FzU9v6qA%2BWGlm%2BrcqjxZPWw9hJQIGNl34pyWK2lCfyDJdSdoKyPGqAiQ6QJvh%2FxwYDHsFU25m8AvmubmjQG66zj04luahBHzRJWt3c8K8v3dHy7RryMYXl1tuOrqBm6UNBArKGOp%2BwXHyIzR2EBQgM6OxsnmWTrpZttVmAviBatO1b90LQr6t%2BDJ6NRnxKAf%2FjfgUbTxoi2AN8CEsKhXhg%2FswyBUgO8FFlIaeRwwUGQ1x4XFhdGGiHwGJ%2BtfBg34jPxRtQhPSG3sC9AocYaPn51lqxrG0%2BhwlqXkja%2FI2wT6ftF1RuK1Do3A1MY7BsKI5fTl5llEuEUaCco%2FoseOQ3OOaDjBjhBFrZXpntkC4j5ZvJ6GoUrfFyBs%2F87apffJsEStYTShDjFL7FezIMxtq1%2F2Xo8V2zbckreE3T9OGoMg0rlp6pOXXmUVLvZmDzJsh8p6j4X1tnrMUQcrr77rCizhBUEDExQRJnwAncJ6%2BdkWN3LiYNF7ypTxgkPkR2MHZ%2BwTfZ7p9mJcH0OgfMBs48gnMLmlYVa9q4Lq5cduyrTPlrxS8AS1uTRTuvfxbL6EL4s%2B7IGB%2FhIRrCJ6tsEIj7INl7Fb3q7vsBucbnfD%2BxyqYU2MMKMyMkGOqUB0Cjl7CCCmyzGXiVMep5X9%2FJEkmINMJPkvmwUaAbUR7qzRH0QYgaoS5dtf%2Bc1VeUBjuvzFbnDUo4pStZKRsAa9YDzf9uCoond%2Fnzx8E8JYVELH4d3ckD9A2OmlTDFdTTFgzKmaUd%2BMb0aIZVnlBuEWtl0fhIGRwe4MVi1WuzQz0Hw9NEK1wsZeVSq%2Fv3JmwuiEMdhH19ba95%2B64yYED8Zch5G86Fd&X-Amz-Signature=94aaf6be8e4f205e645305f47a8e09c71fb48b541861d126e454cb38a1cc5602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

