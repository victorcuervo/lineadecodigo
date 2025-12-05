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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTN7I3AO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6PTi4EJOxwLn9FVlnzPEQJQG6%2Bx4Gmjik6y%2FFEmW5UAiBvhfDlioNmewwnJtOvb4EZD8SHUvpDEs%2Bkb3d%2BSBz6Kir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMzEddR49OtcVdmAB%2BKtwDwRxFaV%2FYmUsuowMipgfkbp8EVZFTXCLkKhObpqOJrY%2BMEEl1OdZTIItpElUI01Wm3fUDccHb4FKv5PRYxOECEmDKWtQbenPrB%2F2z8nDk%2BPIxPCcnn1k0tFbnNS%2BKLXRPxZPE2nyIjonjTX0qDLc%2Fs7D9MduzXZ%2FIIHxxn6CuWroIKR59eI2bE1Vk1YrxqBxOVwoNxh9TZL1jwHACaCoN9XBT1MIrqDc0qYh%2F1aSHcAXyJJkveklrgtH1AcJEoXCbcieYz%2BzFpIHdpcnqSPSpKJL9FArLUIZslocWv6IEqG6PboCh1p%2F7Jf044ok%2FDQusX4Cpl1BgPgnQqDoR0J00fZ9KtTSDfh95HBE%2F265s1lCLcWdAz6XYcbiaXiQ%2F1Dl1Z79WdQYDWMymyZeszt1pwH3jUYg1m%2BTtoE1jRgzN5kLCr%2FSQJZzRrJ5L3o6LyoqZ1ludhFQiH%2FFbCVkUY65oVbo5gBTiM5DDS231o%2BFN7vrQ3t6ApQp7Pw%2BNF7IApDm%2F%2BP0tE%2F83hv%2BB%2BSIp%2BwUmCMcq2QgWs2%2FccrFdc4D3B33dtf94i1i05c76%2BA%2B6WXoIFRt14F82YxbdWZwZRPrcqF2CVVz22Oh%2B5jotC8oIf2TbmyiJ4xPF7NMeIWowysbNyQY6pgGz38h45vK6%2BO7j6IHINDMcl02LGtEgKWmPpwCmZnRnN%2F63CqD4W9CH3S9UNLhggkqH0pmrO%2BnkFK%2B0yK0XwhUER27ZnyPEn%2BFPh252MVs9FAvOSkUx5E%2F4qbj1noI5FlLzW9pEb5BUJV2DSi0W%2FV6mf0PzWEbr5VvXdI5eTBE3b5smXDnDnuN4Mna%2BsRh%2FjVwrIuwNsAPEGgB2iF1dmUrH8Hvss2ZA&X-Amz-Signature=6de338fc0e2ea343190850a2698ed82f5493c8fb52919eb296ad0d466c68eb8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

