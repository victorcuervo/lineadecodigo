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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAUQTN6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4MohQ6NCx7kLTkTNCDTbEOmTSv6s%2F8d8c0IBYRTXVLAiAaHY8tjhaGGZ9p1XWS5Cn2rIrRWcAzyctZ8Ts5GEenayr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8e08Gtvtv48%2FRvtCKtwD53cC3ptKlxxvEAaTIN6eNOrJnGEZDP7gWpFXokdHNjummrhlhkPs%2B6IFS2Gq%2FBsyvPV8mQNj%2BdaN3xgT3QEbhF5%2B4DEUmOQsAPZ%2FTFWMqjISzafKosZkNpTB8W%2Bk%2BaMToXg0DT9Zblf5KWQ9g5Uj08P3u%2BwIZPryg6uaX5wMXNR%2FdCoRQgJfxvKV1J7UAnnglgStXMr%2BfWN%2FUdvu4Qvu9PypUaFz%2BQG0wvDPh44S%2Fvzgi2dQTiFGpyXd9Hu1B7preZtvQNML5LMv5tHuLJk8Q6jrT8mp7xHUKmjOOd0EAvY8AnK3Y%2FTSNwHRNAWoWXElDPeuyvDl2lWRYhMCZe6KfMO6O8tDQmGZBtDUAkpvmL3O%2BWPjSBTAs9eHAmQEZZJnxg7c49ojubChM39Qnt%2BUJ1E4dKl0FspDDrY%2F7Q%2BwpeCBSLUEo4MJFa61OPNsKr4fcZPG2USLaCiuLvSPDXqOakWGRPFyBh3QIzWKQN8vXRa7qjhlj5KYiL0c63Ugi2gAA4737HXf15%2Bg5ZL8fi7USlYuj3flxuHZzm%2BSX4Av50mkMS9onQRpaqqritjc0eGRgXM6EZRVT84mZe4PKUgqitw5C19lCcD1MOZVhAr%2BsXFUiarQHUavQJydUm0wk8LRyQY6pgGd9bdpiZ4j0AcV1vw6609RxmqRIxNOdfmP%2BSlGZ%2B6GMrCvnk%2F9zxPl3sopvlPPjqMpxeObQQpwe3ZhdGyhep%2BEWu%2B6mI8HgzorUe%2FObo422rC9IeGQHap5mxflBMqna4NrjEd2fcRp%2FTDBBt7HIOOPnqXyg2r8qjkN%2FN8mreA7A%2Fghmqprx7zTQPFGZTvxKoKKmXVaqUp6OqU0deAaVyn8UBMP%2FBQJ&X-Amz-Signature=dec71a17af8d4ef52c0b4221edac547c92a3735e42dc3b94b8b9aa4bdbb126c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

