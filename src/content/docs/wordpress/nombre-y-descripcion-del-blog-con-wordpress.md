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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTYSLQY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGyKEkuiQcqlELH92GrChsyMfkP1oqjrZ88LeGJ9igZ4AiEAzCqXlVRzDeZAPy1haL3ks7obCeiJw2un%2BYFgsA6jGagq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPGFtLujFS1RRpVm9SrcA9R12PYu19Ls0ujHsMkArEdGTxaAWrl6wNg6tRsQz7RoxiJc0YcjcxOg9Diz6QXuiB59%2FBE0EuXxAv2V6fLCIAhs%2FY8UGvixlnTUupy7SMiualxNDkgO6c%2B%2Bfr1Zb9v09jj4FZip7ITtxL81b6aPXD7VIQ2DKEGI6s1NHPCaT8PszSRNWyFtr8%2BYDNvKEcwlfBS0R84u4jo4ffDCVLyAbUlG%2BPDpQSbKR%2FKgkzFpxR%2B%2FGjJ3sMN%2FMcLDSl1wlnbhC7HtZE5HFFMTskelSZIYavB7PFdO%2F%2BG68U1PXuqfl2XUcEVeCOasPz2ITRwjODMyc%2FWDfXAOEqMtIP8p1WsMZ%2B6fsdVqs%2FFRIusp1OEsJKQUycvn9ZpdOOIQ9JCJheGhnK2kEZHBDJsMpRkeG6MvAzn0b62XkiRB3JaAJBlRU92jc0JLfSvPCDsF2AsGByH%2FAZhKFKcgnhEttuegeGKYGVxsdKJkv95lNmiVQ7ImrQAyqvl3JQEjlG2YD1T76uZOOFe%2F5ZOQnl4BSGVQQ8VPCsCjLu7PPC3aRZrVHSU8HE8rp5p5UOLJ%2FFKpj9MgXh%2BoC6Eu%2Bo0WWO8i3uOiscQFJxPtNeH%2B8dmqAdAbRt06XpZh%2B7ZPbFrYrfFJekJIMMvoxMkGOqUBQfyGOGEixk4%2Bw0KZFUPAbOEjh2C6QfUM9rRSSwG0UB494%2By6vIiQpyPr5gCml0bSeGU3ronVS4E3de5%2FossxK%2B8s%2FvSJ16Z81xdOg%2BA2BKFgKkCqxa1ClXRQ12KzRMAUazG3XIkpMyx%2BKj89UNjiJW0gB723v%2FRmFdmQGfVR71ASXIL2jW%2FkjTHAXPqdoPn6diN8MxnSiUkABo2zJcG61bWu3ixb&X-Amz-Signature=cc013fb33cf9213770749065bda0ac8c9c2ea7b78e3fe7fe2032468335ecff36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

