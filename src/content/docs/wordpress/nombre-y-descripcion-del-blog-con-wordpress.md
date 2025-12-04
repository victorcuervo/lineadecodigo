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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHECQ7U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3vHXPIGRi4URDt1Na25%2BIO0bfGCRVSYeq%2FQBCs76dVgIgZWPTBP8hw8fppDnmkekBsmST7ycL%2BtK9M%2BPcLtF4Hlsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FDItvOAeXz6gFucCrcA4viCl1MJ86LPPhWSrffogY4KToC1Kma8oktBZenjY93IA81HWeB%2FiJ6X9Sr0NmcmNYWY%2B%2BkP3cl9L%2FAunJDSKmLWQz5z30ac1qpsxXUzQGSHlBjB4LxkgGlFJrD0m%2F0mGS3U4S1XZn9a0J1bH0jQ7PWeJD1KQsAqclQFvlRat%2Bx1NmexuUjJ05scnAHAbW0V8y4%2BPCJiTV2%2FnY%2BabGcfJyvYe5BaVjmSI%2BgD5%2FPKN86SQmzKQkTKMvg31Yj0A2uTpFAIutXwQfqhL8CPWo6IwLQXDZGTTbf1fCqtMiC2ZwQPPb4JOQP%2Fj6KCG6e8GNlzWXv%2B%2BkrsIf6p72y%2FYZhaXhmSQRL5a%2Fc63T0GcbgFkuiNg6oMKrKJZUVm%2Bmu1jE1aesgVboT2Xk3lZ6TrXrSVoaKGmD1WFnvc4%2FNgdFVz6OoQzGvx0uinCtB39rdcRF6LXR9nQyxh4HAmTIsSiarbVYsUwP%2BTJVUJGkOH0GTTgASloGn%2Bl3F%2BgjaJI9XBSdeskmV9sdxIcHvUzGCMXwyAz6%2B2qyVbKVYMkenEcbpZ0cp6mAy3izwSt%2BjEy3C6nZsK9h4%2BmZceQ4bHJo%2FPgGrU39GrpOzoVtmLjNE%2BR%2Flq%2BqImF4lj4RBztI4Go8aMN6MyMkGOqUBsj6O0vPFRjGZqBoWtqEUYGrEae6P4PYp6dlGF3ZfH1RyMzRgUgdXMODfIBAvFD0h2Pr3mKKuSK%2BEzz2CG7X313rkELWU1z5c6%2BvDp3bwgR2Ai7t8icFC3twf6HrHPY75BXa6v89kFuKbGtPUgoRkI6DhReRZZCxaAiRPsAb5Sz%2Fd%2Fr3i2bjyqUDnQuIL11Wc9jXQHtidzQzGYxcL82kX6Rpn1pjF&X-Amz-Signature=317ad8ba229f9c5364b36cc37f81ac09f9cdc22416d2a96f7353189bf1dbb100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

