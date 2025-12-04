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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSIXOWN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICESFhHYW2S34g5kZv%2F%2F6rEaK23WQ4tZndicY94v5tpyAiEAqNGOIXa%2BtDikrLoNosqv9EHv0XjMuxC0o%2BpBmTPyEEYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGUIAHD6f49VxLzPbCrcA9Myh67xF1dPgmOE7tpIOs365WpbNsIOhVMQoOCACrrGZDlZwgLlL2o0JRv2XNGqVXru5G86UnFiTcLFDq3jZmYSLPxmuwFQH3zDl3qwqDDdghXR4%2BYN5hhXlZ1gO0vzW%2FTVb31dFuk%2F3rpW1nUMfZ9DwKiopv9S5lbYc2Zp%2F1UbMH7fSk9LnBtLJ4P7l7tBj70SFWuWIiqmQx7jCYJeOKX0P7Tk4cc6C4f2MC1X%2BQGpoFLskaqH8BqpnVkAX94DK6425agwEFmR3%2FSsb9m0JPXHoel8q1TeMcO1y68%2FDFcXDRmaFKveCY9nKwrDHiwG6F%2FfsYkSEhcBDxFcQ7e5ad2Z2znhuH7VpSafsM71VZ9f01GMT5JeZoJoiwH5wetXMPoAD2awc58PtvJ%2BVftLBL4%2FYvK%2FjOYKUM54Mboo%2Boyh0QjzXKnKGqt78P7RzFrc6HHUlgbBuLA53vnx2r2M5m3sFJbCEOI3s%2BQp1LBO%2B84L3GGYNOn769yuiaUwjPSeVz7KQUs8cY9zlPtR%2BxdJmvbpU4jsFK40zp62CxM6dDD%2FM5wXQpGAESKpmjWgLTNshFuxWGhjswv2qiFQwDtI8vEEgT7CVrRSIkHRzLTTdNa9hCr7v3nk4uS0G%2BslMP2FxckGOqUB1BEJCVp1DNv3dVlLC%2F81%2Bs1mMLLXewONAuJonVWpeCWan3Uw168X5MDxhbxTXNfi2XwJkbbXw9MP3k29Y0csX7zyFmYfciTieU%2Ffef2GYHVGxY%2F4rpvAgnq5shEroYc0fA81bJTF6FHQa7faP3ESSRWaQBbc8on%2F7h80tbnfHLz8VHb%2B0NsImI0DZspOu0DGZPKCBwSldu4kZOW4RBJ0rR9XaH5F&X-Amz-Signature=e833a3229ff5ba8ecc1e090f05e55168fba7fce78ac6695853eeabe93d26d5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

