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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4V7UY4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBUdHS0P30MUVKxec2whUUaxxYwdM1vMxfzO8EbcftquAiEA6%2Fe1EY0OVtIpz9b%2BY89exPXPYBkzuNG2IoIErVpupPYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCzJkbAGrTreCQr5uircA2pY4KjANRWxGO9UcHtc4S9sXU%2BEOQM4ggFpBZ2m3oiQH93Wdnrav%2BQ16evYfmsooI6rr2gLZJxwPE4tbvGKvCFpT46LnJq4fLv%2FAOZ5j0PBXmGURhxKHbANIVSILJCsdGnAxraEThpRNO7eeA9DrXP42NFZh%2Ft%2B6GrWkuoBM3jYtRujfbIH6B2%2BJT%2FhK7Jhn0Qx5XtQGmUwPf58QvwzQRYJ3pHdKIpp7ZAGGGfe6AwV03Q%2BbgmQ1KuL46Oaqiy%2FOFB1ES4jW6zaQnS5wdW%2FXedFycVMEZ5KFYlVHly4UVrlQl2oCehTUFzhRGr%2F%2FfP%2BwwCZaJLdpghKUcfbpqYnju7%2BZRKtiCiGMUlarQBrV3FylP1MNZ333qhZPiWheiMAdIlbNb%2Bmy9sYjCF9iURo39PSQbYGsn4jxSHhGthXPMVjYSJhYLE%2Fs9trkKO38bFN771p158%2BVoBzqkbmIJqjnXhZbjMyY02513646zfwxtM0LQtD4T1dsGnkAamULhrA1k%2BhWN0tWDR3QiksxttFx%2BSOr2B3ogZrqLKODUFY%2BYnVWIy7SuTDyUoHbpOxcn3BMSbmV8l2upV6pczPUVFI3H5hAECvVLR%2FRVUF1gRDg0etXoIlOrTcitSx6pZDMJ6hxskGOqUBXkZhTpAPrUwXgl2fs0BTOUlk8qCY%2BTJbJFLv4mTJ2Og7W8alZUWxqCNLeNrmKX7MQB%2FsKBJYZvB2khKXImLALktCxnVBWvFXDDJ80ZKtywthPmcgJHN3KwpdtIUAj1biwpFfg%2FubFxsI96F2ODSWYMThA9iZqMu63YIkv0lf7h7H%2FVF%2FhUrR5J8b%2Bjv0C0L6S%2F8UePbekxYykwGR1npQiPeXYqK9&X-Amz-Signature=70b781500b140eec08e81e22e9e3b9cf99789b0feb498198685cdc3a333500f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

