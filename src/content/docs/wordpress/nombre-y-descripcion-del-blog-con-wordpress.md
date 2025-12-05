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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433CELJ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUkYIWakWVsohvqPZCzeU1QfSmBat0X13b6Gy2EkTUfAiBEE%2FrLCUrbW2aUH9Y%2FYcFIWX5RoP0ZuP5Y96kiSi22cir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM2wUjgTC7L7LFRnyeKtwDcYAYVzUqlK12Ya4ddroI9yNL7ZzUBe5IqJLgEAIeyHz0bX3YV6sDpbIEcAA2Ez3sRhaY9rzxTR%2BU822CgAVll3BhoO9x9hsdn0Zjs21ODrZrCP53%2BojJ3unEHjXQ7cAVBsI3UMeVS6G5uF7bAL2eoePvThF1F55zAU1S%2Foj7tmnFmLauBRq6OZXowLB79guUyehv07v5ui62VjTO7BrLNAEf4vTvJxmDoY0OdkgjO%2FHD3iRH0faNl3TmWdaLj9u90Gs2PeamkHQnbmcqwBMuC%2BusvTCI8IyqrFuflxeV8BHPxgQBwlCO8Y1%2Bo72FwL%2BAP6p7gzJXmjRTXthC6Hi8pWlQ3l5fbTY42fEvAtoF2SVUq31nlq8suhZLaHt9yN5PaTh4R7WcWC0mH%2FfL%2BDa2IdwrCO%2Fv7LcZAws7H7IFySNk5hVA4pO4SFZKKjvRlft8Bult7RxOPZamfSIkzrolnRG414Qq%2F86cD7vgtDbGFueboN%2FPHF8SBQgPayrUeP1ciI4acg1iGi1ZuGGmouKKhCLjXb4Nu7G8BQJ%2BgEOnsNE4yDZ9Eu%2FF%2B%2FhfKCP7qCwhhHO3mSgwFULxT7d1VfHiJJWwb%2FgytSSbDcY2pS31vlWP0%2F6PbE37TRd0Ih4wzozIyQY6pgHx8fRgx8oKKFQeiRdageivSi9tUQr7OZ%2B3QDSq5UgxLFJezONmOzh2NYnfBGX8gUSsEdYpaQWVKwh5AbVOWMIdq8QNEcGY2gz7pTbeI8cncx5ApxO%2BLZ2LicOXpQ1kdm9RKPYgRNOLgfbmxcQyVUoFStD3fLiIV%2FFqMjTGvj2g%2BBgq%2FT5Ll8mD2vjjTfQCNjBps3GVhZBkXYOM%2FBFp%2FUm1ZkJkzrVD&X-Amz-Signature=1fb0b3b4d57ca1943e521c9bb17c4f57c1c7b6e7f2658e57399c64e76cf55994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

