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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCDKKLK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhfurEyL0Jhg65NaXH31jMmPHiiUFgSLMnc1OlvuxBdAiEA1H6L2eJVMHMZuycnOiLOR29AA3AgVPcZPjmjJjKd5%2Bkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCcbV8yB2MboaMOm1SrcA37Qb2BiPWLO0ZEhMwGMsTsGsxudZyp%2FRezABiRSa2qsJEWxrVwBTwChhA%2BqTTuO2kSZkikRo7X4CLgGL%2F6K8V1mFwbopv%2Fm1%2Bo0bdgvfMeP%2BUs7Wp2XoaMI%2Fpv6ixHH5EOQVc6YZGWCFc8v6GcEuloCfk%2FwnPNvCpYWFV1bAkzAOmTzg4AoDLiGMlsEsKz8XOx%2BZAbsz%2F%2B7qQQjZWmxpT9rfbw4kdGN0oQSp9nbazanJAxASqMoIKzjrF%2FuxjUci%2BuZ1HW%2F%2BlhlTk6IcvgYWDzk89F8fO%2F%2BC5%2F4CcQr8QcYKkyvdC2HEUAv0f4Yb%2Bi5rrSL2kGCRaclhONhTEe42oUKFtww0v2SCXB3Hp4AAPL%2FRwQDF4KSL8CHgCPC51Jq%2F4mKNn5WXn99AnpA1%2FOXcU3aPgWOstzfk4nMmrKNX5TH%2BPuGnmi%2BQ8NBOE1HL%2Flg%2FArTmS%2F0DaaxhI%2FZDFybf7GepGkcvvElWirFGnNtl2J2sCaM4RAkJPQNDJP6MFzdFCyAEB2OAYj%2B0z5IWUoOE8tyElunW23B7Ox3AKb7kxwgEQZawtikv84kGmtmVEqTkq%2B44m2GHThGdt%2B%2BG%2BR8iaVmY8Xcq2ItFtexY0UDAOXxDSok9PgHqn9RPQrPMID9y8kGOqUBhr7HxzK7RT8dgdq8t95OHf0eDdbKs4acGKnfqYlfFx7MKxh%2Bgkx83UZ6OXBvU60xsPQ%2BN47U9I6YiVa7Co7iGECoCWX9zP%2B4KfntR%2B%2BgTiwrvsKRya%2Bsfpad83e2g5%2FoPLfnooQkwcT76WKjue0LLsw8u%2FUB0WwaoAHU4PjD6f7a8rmT6O3HUFJScUwhajxJqs%2FPnikHFYvsPgMOfGAeDLe8k6BV&X-Amz-Signature=5fd84875d39c62af7309490091e74756922db90b8ed61b8f817a90835e94bf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

