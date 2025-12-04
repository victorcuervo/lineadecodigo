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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFE3XEU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIC%2F6%2ByeG%2F%2Fqk6Zu87T91uL8d%2BJFwGfzoD1pfB2wLdt9nAiAOE6xToNrsBSmy8MaQVzlqV%2FkGU2kR52S4V8PejvH7Zir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2B7mdH8shLlwaxl9fKtwD%2FfM0yUXB%2FCGOFDT0%2BDQ7qJqggoq1ZWOx6As8ARv6pf87rYBkjmRA81DN0J3VuhY1J%2FGj76pAGeuYXRvQScS711oL%2FbiezssXzdNzoiPHppbCZGH7gcKBhPVI%2BaeL9KZaAnQnT3vqMQBUH19DVdIB6HcutHyp6NDGCh1d2%2B%2BJx%2F52qFVsNC3cMXkVyh%2BPhsRjHROwVx%2Fr74Drjl1ph5%2FbQ5t02A11woosWgp%2BNojqeBPQVbT1nbhASeYBuYMzBYQUptcgJWwvWhOtuuNgIeE85sabdRMa6KNCbAPvsmtDMxSVUw%2Bf9xBm%2FmjHu5YiD%2F2Qy5h4m111Pvlg9CppQ3nQu%2FdNdXdlm1kJLDeI%2FGEWf8q0w%2BnYXAstlGVhul5EMJCarOn2fGqif4JrS7dhp92dn0HQ4Ug6eGavdM0Z1wWFL0m%2FYJp%2FEG5nEDb0fVsFUDWPFyJFRWwWCkRkbIjeuv6SwXv0uLGSNz1Q95RJoiHt%2BfMb4UMZXA1RA6gI%2FkGxkAxHcDZG3em4uKGxZODgXjCOgjmhGswXXQDFOMHF2G9EFLzEUSZgZRUaFB3enLl3E5T4FVoucjKmEwu8t%2FSNYmNJH%2Bl1LbDM8URuNr7RF4SkMMTAN5Vwv8fG8dUtmMgwwufEyQY6pgG0PuQlDLrn%2F52hwpY7OKqJJNMa%2FTeaY2U8Sxl7a%2BjFFWpAYgNA47T%2Feeg%2BNdef6nE9Pq38ygWZAWrDcMUL6Z%2B%2FhewdHW8frbmWQAhXaD2jqaKdP7qd2IpHgLbGpaMHG8czxXjIVA%2F5oBfbzbWeQBfvmaEUFPloL8%2FBm0TQGmIqEZphrpeAXw975P93P6%2FPMCshcEz3smPrmOjmnG2R%2Bc98eQrrxVDn&X-Amz-Signature=4c59df4c8fbad91c13472ae17c59c4d9697f4b7e4c757a70c55aacddf9083b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

