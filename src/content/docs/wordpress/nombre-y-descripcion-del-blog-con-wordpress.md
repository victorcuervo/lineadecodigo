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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSKR6YL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNRPF41XV25Gve%2Bh2WwTVPV9hG4ZONaNri8aKocBJ%2FagIgOrhMIfeQVUhTUwEeZZhuqXYj5i1YG6YB7dt%2Bwa9WW44q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOCqPZfUIn7GNeUPqSrcA%2FfLP7X2RNFpw7YlKq5uXDM149JKwhyEBuFEGQlLg1%2BBipfiW1D0cYEVGswsid7DS5lthRasUXLf0tMx9IDFXlCVEhfSKFhNgzjYmejk%2FmZOrVQyrAd8xEP9j9RLgwvMA73EWp9yLZsA8bKa2TtFqSjZbQgp9y9nSUs7q%2FP1m6PqGgieWVB1nghc6Z2Gg%2FRDeeWSkI%2FVoyTBA8eCv8j%2FHpQJ43mX4lvlsv6ENB%2B4vvN5Snr6kZ1ICSa3oTPKdNyDl3Aw5yJDSnaekizh66hwNRFvWcfaIwCOUY0IFVRrNaSTJGb3yyUMAuh9oMWtdy4xPKLD%2F7BQZtLM4zMEI9Y9emJ7uC%2BmKHP8hjPj9flWH%2B4bdg%2Fnf9FiHXnU%2Fsdk1mk%2FmKWnsqxWYpnADmNfFPBcIuKa%2BGSB3ca7tM23zH6qQxLghdIFjRtpvdw3MS01Op%2BzhxydnJS46iBJZ6VLuOPPYk%2BBSvwwV8QwT9a%2Feoq5lbDCMsVDuIxY1%2FpLVzxmm7iRsANWxXoTh4%2B6n9%2BWEUUjYQ6K3hVUiGGOvnHl%2BIycaes0Iv7cdWiTSUKyj%2FLwB5lC4SRTo6%2FTBlpJ9cJy83uDL%2BYcNa2XLMd1sh%2BfsWi75oJTeYMab9bBFvXwXVYtMPKMyMkGOqUBT3tRqWjEc6wSNumZNt761H23So6JPODMVlWnDr5%2F%2B4ggy%2B3ymsn96G8ZMRD9ksCXIHB%2BUBGZTLQB4uHcgc0g8iH%2F3GuSaGOSgQF3vnAXHVT%2BjtfKwST9lfQec1nYq%2FyvEUG0CaqmivyugHf7uCflntl3vMK5UjIzOihrXZb6PrGazbUjGZXVv6STZaAdTDIVNMlJgUtHTjvPqzo9EGlJZuDF%2FfOu&X-Amz-Signature=f549dfec5fab62ef6c5b8920d2326ffdb372eeea8e239bb56ba3a2e2aa74d210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

