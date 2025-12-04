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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHA2OHB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHN0e7aM727IKHiZvmvro7O%2FI4b30iYzR99NRCQ6lRkKAiBI1jIH16kqbTv%2FwkE6k74%2BSMT7qlDEgQG8ZA7HRVk0oyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMX3PAbe6VS2XpTggQKtwD2nfNoY5AEJ4aEdYWryCDu%2FKDl9s0GvnDs5ZKQ%2BRiJZdzNstxDsDUOOtXwtALRMl0E1G7zPkH3HapnBouP%2B%2FNi6tzSh6H5d3zGi%2FYpc4Tq8xj2ru6rPiuVtg07cNMrGxoqJZjRGWwB8SKPTIgQ0itbsNPIha4DXvnABJ5dC%2ByO2GidmioIIADb2cizBSj695yIX4wQMvXaokU9O2jFZIeTKxdqoMkEVIFyyhDXO3uXY1MQ5elkHHedRGQZjeJEaiA6q%2F8fC%2BIJ2OuEerl6pvJqtyF0j7CTb85k%2FfWb0vpf0GsMAOSu4hWQ%2BDWFu4nDj4bx2zCMjdbgu4M3EC9UyfXJt21Z37E6YTGgg2H4TMEI8u9IHyXeyJfQrJa3B0svGM579lQqQsdG9VL8FkiqTteOF%2FEK2SK5TFw%2Bpm2%2F6YyMDt%2BRB7dj4N3wHRtmucgzrF%2FXbQ4T0fBOn76y2Q80VkmTkwNwiVaZWmAPKb89OBFPEc4CWukUtTqBgccj4dUqnOztCI3sXMQKTxaGjUj4Y2573hTaTpeRx3UOSpIKHFKjUcsquD7cL15uIDfQZLL0RWdBUW0OEEf9P9%2B7xCZ1umlP05%2BF8R0KzAMRF1V%2BN0KIfNiencbVRoeOuNVVY4wwcrEyQY6pgGyMW5vH8XyvAfOZ3UpGfxTU2oyLEsbI6mt2V85tS7l4Zn9Pwitig9lj1ePnmPT1Y1BHjF0oQN7OB%2FW%2BucycbESbS3WLsGmoFh%2Bztj26sRVyzk795c%2Bq9Iu5mh%2BKtdauiVEzmPx5MUJQToi%2BZID9NpXgASEyD1JzRAIWlrXpykk%2BzPp1ZQjfcAJs59HAQH8OUAa52QyTr7vCh1eOS4qe%2BrmOOxkEq3z&X-Amz-Signature=92b948f215e405996ceff4b902aee4630d9ff7083a567606010307c1e4825ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

