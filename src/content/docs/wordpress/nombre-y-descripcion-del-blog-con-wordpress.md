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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBQ3FCJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHrdViaDOYIzy30pP0DHRk3ONDSILfc4Tfkz1itCftN7AiEAgvPSTS9%2BrgLrpP38HCRnso4hymZmhAKk82P0UM%2BHsxYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCpM4MKGG4j0y%2BFnkCrcA7yd%2Frlq0bv9S6UhBdsxuLUaH40s%2FXDK7r%2FR%2BDjf20jt%2Bq7UjtAWPgK9zHp34o6Jhb1%2BrvWvcFr4hSGCsSjug4ro2k0OWD43D0iGJZJKTpET9AVSGUu81zbNPd4qFx6IxEb4HzQC8%2FieQ029vM64gX2sC6jxDvuV1Z67ijkwPjvTU6tBkfInl6TFM9Phe6aTsnN58mYiKcIcGwMAL6%2BTX3e9asLYLFZ%2FtXf4C8928ovdXSLR6J59NRtGkphNEP38SqELQTZyyLjTBUlNVW6zyUoDoLG%2B1FsH8Zvij5qYVgg0j3%2BirrYU4SjLyBZVOhRVfV8FVdgqnHm4vQOocTkRvEWUge0C0h%2FW95Akt5j6SI3RpW8MvZqR35jUhT%2BBEqUIZ6XVG2MPAHCsp9gvJ7dtKlkgq0fwTv6V1B0qIi4SRzp87seRzPPulKiaMkksr0e3vBxp2fn2LlIP9gwQ8qeQgKaGIEdZyKX1Pj7TJlzeswB8XyRvbcto6vx36YI8sEi3UP8l3%2B6x3hBhsDtwuK%2Fv0zGk9vVU4HsTQBROfH5yhctMYD4s23%2B3gA7NVFKD9n5BijHnxeznCHpV2wdD4aushpdMKDHlNEWNsnGmgodcxSaSWBJcRK1drVt6O4bOMPbnxMkGOqUBYuoRfezAalmTdqgKAX58EMNwWdS8xsvMmJzjE92lpUh8s2zYoyWgKn%2FspbwI%2Bsyvn%2Fq4AXitm9zrGHEOY9KlmVZp4DbHTD9gxZMwt%2BcbNKl60blOCcG3QW9BYEz4T3RkHEP5%2Fb7WWn6mFrc9f%2BxgkVVkE8R4iRu%2BMViOPXOYK2qlBhaqNW%2BX1%2B6yRgUDFZw8Y6f44qWgrJvwShFA3%2BVLOxiE6tKF&X-Amz-Signature=f10accca085d1ceefb3b4699bf77505ddb844fb7f458c1ad8bb7d14311f33d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

