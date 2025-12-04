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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOT4HKHL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDeMegYapZp8s%2FT7EtiLNXfQ7fR0w28NI5ETWuSUsIkvwIgATz7hMfQWwEN%2BTpoI7o6H42PQPbSR94fgea0CuYJNCAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDi6O6X%2BVnpxIjJMbyrcA0C6Bo0T0lMG4gHwV9%2FWopInJT7OLvjdLReY1saghMiQ%2FXypnpIiXjh7ae2bEJonqPmg24FS9ucsTMmQM%2FEr7rbZWeQWol7hM6ZSWfNXfeHZk9f69EqAXbwUX3A9a5xtC6ntB20tyKJaT8WeDxhS75b35Kpa5eaIfD%2F7BdrYjMDhNqQ1kUroXClyZnus%2F5dReIEvF709ywSVoM47UDrXw7axohnEDONU9%2FCYnvRdIWPo8tTMNiVI7bS5QnYHFW%2B6odEtdWxSUSeLUondgkZokferFfUGU4rM45FPnYG1We1Ri%2F7lwUzSq42AXXXJugRTOHSt5x7gAisjz5%2BnuT4v0Rxv9%2Bn6nA%2BwH8Y3r4yZOBXw2EumPmXiQNuI7UKLLNBd4WiV9nrQ1A8wuahOiYQc5e1%2BZX4v%2Fs5KdRcBJPd%2B0QGiDi9rw23neWlb2bwtLvSr1XD1exd%2BMXwWEVCVC6BPQHm17p1Cx1LhZpFA5cc4efq8Lu6y3fgPmLlZ2EOGNE06Es7CaKHUpDtmqa7zClZrcOIgqURqgzFbUMd3CItgQMDwsdj9Yy11LZ5Pg6yNM03R1%2BW%2BMuCFMEKTz%2Fd9hB%2F9biEn44D%2FISwMg7lcJYBwHI%2FSgU8mi4O0zRhWEQAlMMaQxMkGOqUB1CpypUK9s8F1mAOXJ%2BBARk4BciM7BTbGJOvsWRRu9lf1j%2Bem35ZbCMuru2lKgdEa7ympyEP3YwX50mgy%2BB0c7ynEJUqOIHpsK0P4dgT%2BKFYwt1a4Fm8jBQtHRcj7cgtMSwquENMAI6vaVv8Kz9%2FBYyiWNtEMuiwndhOcRmNsCry3sMM9wPgYKnBTMBpos3vxKDvxCDBKgX8X4CbUSS2v64aGzfIJ&X-Amz-Signature=03b079c5874ef3cbd59cfc3c1926b78ba9ec5a13ec45df1135fb052e197796e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

