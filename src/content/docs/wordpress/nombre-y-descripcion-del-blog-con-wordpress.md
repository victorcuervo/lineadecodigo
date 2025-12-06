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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVDZY5E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJlNCsU%2FbnGDTigZZ9rOI81ZSEu752lQ9uG4S37Nu%2BQAiEA1u%2FsC%2BOveZBUiakwPL0u7iHRZIcn0KknQrE%2BBqv40Qwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPsuRK77pG4bhSP%2FxyrcAxAl75wUwTWO270Z2hfmcSw6%2BbpKfZBxRTyygrLuUdqcUB3KGfAfJMu5euPat8Fih9qMJyCacejxSDdhSEUnag0nJs2sc1Vcv4DQZ%2B4yxLSPEMk4oxiG%2BGgGwXiJ1AjyyLGD50MxgpVxe24WQwzhw4uK0nwYT0PS4Um8Rdg6EgqlsEr1g9TWVIjm2AbqlPeza5BVSdsm1c3iu963gAOZrBWAGqNQaffHS32x5MknVQTeeJHK3xQ9kCouJZHrv6r6V%2F0oInd8%2FyRQHxCarog9zjqxfcdWLeQQ6gh7F0dp%2Fz3mugusLMPmUQ%2BbMqv12LlVO6y%2FwDKXKvQBH1%2B2G26oea4aX8FM5jdtByjO4uYkAIO%2BdNYd2i4OZmbiBAW%2Fmh4%2FN0zIu1mvQgjfpaUIKGQeDNK3JhZQ1WsANwBymgWckHqSn1N6zvwl8DKC27miqkzHnu3YqATErAq2bBhzYi%2FVEw4z%2FmXg3k8DX%2FI1NO1NzekgKL4fFzTAr7YGhYE3P6Zly9u44XbiX5zssKEDgKmysYbDqk5dzHEocYBnFagCcf8Ldsazlsy5YcA1kezUV86FNbjsUfnNMkLpD%2FuGlozvU9FzwD2ohkOl5m03CLyOKlv7uPdFblvqQSyHx1woMIrK0ckGOqUBx%2B3s2aQq0THl%2F6yq%2B%2BMsLXgpbO4oJuILcQ%2FqGIkFwOPCaZfd1B5VViAdVqI1n4W%2BFLNnhmEpLarARIhaUcSzw2wv%2BV7OE2GgS7Fm2icVuLhDtXMDk5fIKd512N3%2FtkXAgjLfXp6%2BKwqX1qN3%2FfjabIC%2BiKaBfjGbxJgkNQI6LSAXu8cGGD3xBog%2Bd7tYw%2BuU%2FlAB4GYukqf%2BmO%2BSRwnGkKMDw2Yx&X-Amz-Signature=6d07e264b4ec9f28f448a26906653c149b5efcff0cbf39f58f0b04f40732acf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

