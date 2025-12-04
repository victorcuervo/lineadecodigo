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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645L6TVUY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTmWXavsGAQqnijj77V6iGX5mvYtKpLyiXi%2BKWoIyMgIgPu63tq0i%2BOmPEuTL66ElZYCVgcB55OHTZH2%2FoikLSKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJianc6%2BZKxLeStOcSrcA%2F11iLBnnyzUVNaLOj%2F068TUlkhEUVxr9eOHGLRAYLJgs8gcrhYo3iHlJPAL%2BKmedZOoQ9Hle%2FZf7o1M21cmF8JWu8smMH%2BByLJxb%2BogjkE7SJKlxsBzJKdtR6u9YK5m6fVZy0nbgvF3JSFFckQDYBHiHelSbfXmvh%2BNVQJprXrUIX7YGVzwHNe4XNPU9P3cEEAO2aGjKfOxawhHE8g6oc2EyhrmL%2FUhYm0%2FJY1DeJpo2UI2M38ciHCM7VEd%2FNtSzRfK6pPa%2FGfxCB2yqJ5ecv9%2FMBE1ZHQF%2FI0pU2HkimhyNG0hjzKU2gMbnIMl60a%2FO3R8FeORZSdDDUUHPrHDj5GT3ZOzD3ZK%2BAzOfSn8LjW8VAp1d1pYIVSyiraEds4%2FuZSiRPXprHVYi2ewKCJG%2BGtSkrxVM0AnZuA7s7%2BOW24xEEY1EQ%2BYjd4s1SzV2gd6eqHcaLZ2ugHqBm9%2BAPviWLMPmGWIERoJvmqaQUPCQkqUqfpspYFPDdSLmLs8fM7VVLa%2Fx14uFIToyUhWuKgCw%2BzOgkM%2BZnOM9k%2Bqywhn6oNxwg2G%2F%2Bwdh9lCsKRK5OCTa9ca2S7JnXpv6DZHBiHC67LJqJX6YDNFVxkB0w2TONfcBxzA%2BF2BP7uY%2FDqDMNbcxskGOqUB4hy3pJD%2Fn5xeTEwtzlxhQ%2FbT2cpZrkyLx%2FdsoQ%2F6%2BdyWnRhFZ7USRfheRPdIrWjrHE9wrR%2BixQodmCYa7J79lX50LhGpRu1HC%2B7isDclMUP7GswE1DOXYj4LImxHffLxBE6Tu18MixXd%2B9rGFwbq6cXl4%2F0SUCxZTToTakXSk29cbduFklh%2FpMSMHTdO%2BZazBgsSg710EbgI5hFrntumTMg5TE2W&X-Amz-Signature=e40ef66c1c17934dc7e555fad730f7948a3278b6daee35a5e27b11ae884500d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

