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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRPGV5T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC3dstSMKNdrTFwmwyF4qN3ok%2Bio1nLfieQ5buIgXEyLQIgLwtRoiBz07R7bgQyJfZ9IHsFwAc2viTohFqnVLCx2EIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDECFxmxYVIBncZpBzSrcA%2BsC1hk3VD5qZeymQ7FuSKgbu7JqOqh3zSq5v8zEkHepuVATHY3pU5LLRJG0ueVhRTUGoB0XX9UDo6xY038CFNWV2OmrzIX8N%2FWRUnRv2Mvkk0LhSYRk61m7DldEFZUAT3Cf3ThfeCK%2FWt%2BYY8nuLhdGbtY7oSgVnkjPw%2BJbHiGH83iH9NPVMno8Zw%2B%2Fo3fyMimi3hHZtokAsrZiykLsp9eRvLpnf7OJ39P%2F6n9HoTjhvfvTaQNnb2Aj7RbHy7v6KiQIdtW1mqxd4bSTSd6Lx9k9eD15LNvnYquERrPMVWIFw%2BZQO0IKezf9FOsVekRiKP80f5dmnfz8YpcwUxkE%2F8I%2FRx71TIkMit%2Fj1Q1cEvJvRtGfQ6jYh1f8Lmx6as16Kn0eTZETRnmJt%2F0HsPVKjBbWD3itTbsXgYMtBJST38N5FimqXAb9uMBqkHW6UqvSWcXlBvdDPSVo5of976NAktc1Bb83OMn%2Br%2BvK7gM8%2B54gDzoUE4vi4LGirDCigL%2FNd5ge3qR3HMvWj7mYATyiu7EyfUsRRu5b1C2JqasG31zOMjpJhlje4fYunZ522qTFYT327pCHg5s%2FUgoj3jaAUb4oFFZHqkjQsO0LXbSvxb2ruFI6ElNfEf6e63BPMLqhxskGOqUBD%2BYVnt697oeJScixdWppORvbViu7A0qFQcJyMz0Dqiiov0VzSoneCKmWjcMYu7SO9JrYdooSABwLzZoVz2Gz6%2FJsWYH2m0P2Ejj5YyuugTBP%2B9WMKXPqsPGqzGr5XtQhDk8rXXP6x6SK7cQmP1aDMXqNkFFisugg7w8dSXMPna1cMCGo%2FRYhXm4yb8wEbTHqmecTK9uA5%2FvnXDkB33f0zowDG6I3&X-Amz-Signature=eb2b69351adfd6cc5c5287de20512773851bc469323b1186b6e006abb96807e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

