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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUGOEKTM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJFMEMCHyzhPXhPIVRuBJN6etBOI5sL8tzr%2Fj46YTIHfl4CRe0CIEbXWYmHPS4cNaCcnlxP0iFRVmLlp%2FpTQu72R2ypOCldKv8DCEYQABoMNjM3NDIzMTgzODA1Igyt2Bu2VZwGvDYPUEkq3APzKMiKvwesPzUpZAo6bwlYnxKZq80lfeJWhDOeBS7IfVGmgzSd5u7oK8TxJYy8plb6MRKhCaD%2Bia%2B%2BLVVWCIxldla6%2F%2Fr2HoXPhuUqIhaAT0XKfZz95zUwOJFOSeiuKrc4s3DCn%2B4MIHDhR0E87rUfhB9f5l8TzZnM%2BDK6n6JABmv%2BfWgDD6sw401Cx%2FvavCf6tPzhNQQSjtJV8ncdXLXmyxYrX%2B%2FSqj%2F%2FYtRVC9J6YvqlvjFvd7avCdVQv4byHhFZw84TG2fCdnJVi4O%2F6vXAdQ20OKzgaxYrmV7203cIWj6h2xNKSqrpY%2FYCI1030Ou03bc%2B3%2BZUZSm19Su%2BqTyS%2Fls40m%2B4dyNPCF5cTPGDXO6BNE50OXiX7FHij1EWrSXb%2BCcPj5vTB1K%2BzjaqE1TFKnfUWdX8%2BlD5x4sXIGIWCJWECj7wBLrKRNVt8Mi4dtR1GtM6QIookUPXyjgl98IGFyoayz0Bum0%2BdGxWUXUsGxZk9fxPCFzgA4KUvjTOsIw7IqbVDb7L99oXsvBlQHae%2BNz9veKDBL%2BJs12VhwvKqPl8dgq25kzkfh9%2BR2yRGXl7pT3HhYeKQ5V3NXe342Z9bww5dzL4ZCHdgj3EpW9YaE9KOMo6XW8JA85H5jDqg8bJBjqnAf1RwE3%2F%2BYXrqJEJz0Z%2BO%2BSbaKT92HiPr1OngBu%2BgsW7psqJV0lkEw24CzcF09bdr%2BiPQTedXIIZH4wPQA0TxWlZPwz2KE3LdDNieqJtNVuoGNx%2B5tsLa4PrfGuoFwMY1k%2FwnbEOzzoAMmNWZKctxI2gkp7jasSBesLLS5aH%2FLKDOSGWefQCdESLWFND5U2%2FwiS%2BwZpLinFUsYvzwhn06G6PKs3V7TsB&X-Amz-Signature=99fb216f27d5fab581c2148ee38dd134f24bc00c8ac13b036fab6ce535eb2df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

