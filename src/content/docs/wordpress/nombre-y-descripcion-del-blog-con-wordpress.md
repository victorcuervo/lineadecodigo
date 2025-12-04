---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQ3NQOK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCLmHE2B3GiWFzrTY9wvH7pURx1v1%2F7o5PvHCrP%2BglV9QIgcLLcMzg0b56vkMSNLhCQlJFRhhF%2B1kTD8rDUbbdSR04q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGZARqe7%2F5oRAD16zCrcAwTG1ZAzrvzEX4j9msOzscwZd2LBqd%2FFX2qqvE8XCGFvNqbNsK9jeFLULLjGrNMcaORklt3jCtN6%2BnlTe0EVJ42DTnTvUZO7BB%2BwJxhoV6A0xkiw%2BJ%2BIScHXOvqCl69fgIXhPVtK7Xw0SMrh2tmQnhLhN7XbySGc7k0s5COHHU%2BbFi6j65m6un3KjBkkkWDVI3a95rO3zqAuWhqyzXlQnfDrvPBuQT16IvIgRGSYBY3kD34RHgNOmtxIv37oCouUTocGcju%2BbQOov1UtmI1lHW03vOLc9gCUi7jYxJ2rgX6Hya8foNz4ym3KDempfXgW%2BuAQhtZ5RWC6SHg%2BXP32HJgEqwvoUw4%2FzCQgX1L0I9oaTYH%2BiQA87PRDXdpzMBb2mwlcSGC4xHJ8irC6gk5zvzFz1m6xNJK0eh7NwZqykhgIdv0Ipo1kvoBIQ46M6QEycIrWg7k80R57cPydQ3bcmBWoqPeaDBw%2BdHN9Y2LBTjTcT7OqfD8OYHPK38dGSIxMfTCNVjwK6Mr1c10UB3ndyZsAojQBR2Rz6%2BVnFPe8arNRXh4EKNP5CW6b5Arv4P9GkALY3nAGqjWTHatj4ht%2Fc0CX0zdyA%2BvERKYJNmQN2XJJcvJeVPPurg5NUPrBMJ3nxckGOqUB2FYmEmSn%2FHfijzik3AyAg7%2Fb0Xx9JNuVV6g0sx7pW8KgMVd1mhc%2F82l9AAojSs4R0Yp5YgY9p24YNCfdWQx9FmhL9Umyeq1ysx2M81NyIK2XU42%2FrY7tVg9tnAmKzauiePLSEhJVhhd%2FNDBhS9W%2FAaER7sZfuRV%2BL07lH9VcFZHaY88NUk79siT8Beap8d2608DL7VNlNY%2FJGPihgquKgqS9RldM&X-Amz-Signature=5d783d7d309b81d0023244fee13171cb10682d2cc50faebcdd771cde2b14f6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

