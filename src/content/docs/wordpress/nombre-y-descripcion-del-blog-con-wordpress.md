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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J44L5TI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH0DXo2LFAZfUAWt4JXtxV3ke9%2Fh2foFftraCu5fj%2B8RAiA%2BGnS3ja4qBjFyhZHgDA%2F6qCgXQP3F4JMvo5DwHFfePir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMp6PVvIgmV8%2Bg48rPKtwDKslxuBZMy2WMrWoMJEsIg%2BF%2Foh1nJh9yKPU05ubEJxO5ndysCi8ZtT8bv5%2FM9L6AWcfw5aq7%2FnhoPKB5JLh3ZMM0%2FlovchuJ90%2BejU2eUqBafm5FR6tLBbH4L8KDVzEWEjSYptizhQSV7I1kfVCw534FWg7%2F%2FXiStX%2FJoj2yL3hg6TVB5ooPqTS8mD5P%2Bn52G85uJ7rJD6KgvOwNZQL05wS3V6YnxhF900WtKo5aiYtdmGqK4jy3JYGziZX0OA98vBnQOpZ2U3Wh5jvFMBUJO2NwXhNdcRAzoIj7xGel7RtIXijQC33AjQHqZTQ5%2F5344D9xlI%2F6nu0h95IWyVVPY2qAh82tB61WIqJDIGeyoHxDAM4fgH%2Fdknba1AG7iM%2BkI7jE%2BHPG%2FoatgtC7jBUGeoeFMiConWCfC0CJ%2BmsUW9LeKgicJegg7ZpZm1zRHK1AxUj45Akip8W5n7qkU7RwQrpQzeg42tGNdnNUH76jtCkHuLeUEPNHAZgABMyd4As%2BDw7BubNNa6RfRzX17di6rGOmnLrfP2EaGv%2BW8Cb7JMV7QfpE7dAOpz%2FaZJC0wPHR%2FOOjtgE2d6Gh7aL6OlAgSjIdpqLKmQdK2VChXRh2ZPkrejBOcqO1qcm%2Fxmwwr4PGyQY6pgHlU7B30frGqDE5X%2BpXXmtv2mfcLAPcvtOZGJTZLsQ35QDCElFkqGzN03oBa34qFkMJ9wi%2FrvJAPFTV0Dcqal5bplzduMa%2F65S6TRMBShw71LF77Yi4FhZ9WAMyLrqrqbzKW%2Br38C%2Fr9kA24%2Fqtj2c%2FJ3PSA%2FgRPO0crmIpW8BSsJcuev35DtxR8bsu5evQNackDK4hc1pgmMeiRyjOxFxVe3lI8UEk&X-Amz-Signature=77589d10a45114064da3f1061bacdd264b76b2d1a79c6a24d39296841ff32663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

