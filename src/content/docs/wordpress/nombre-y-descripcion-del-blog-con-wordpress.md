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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UUE6X3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHkUJCcfkGj68iWzpwiJXChpus2fYZfyMc0S9L%2BRzAKlAiATZtfvw97WNp0pzTxlkKuqJ7MAzcaV5fP0mAIRZb6c6yr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpvHst4d%2B0YUhUARBKtwDHLt1LRZqHPPVFy7D%2FxdYPDx4Jr7WWkHOg5n%2FHQj38KvSvKTmIdUMICFTft2F6JxE%2BkeGHisgpiQJu%2FJ6GEd3qSp7kyYX%2BLW5ItA9r6em%2BTGoEyJxpKMQ1AplehEuSG1l%2FSzSmfMgqNXpWwe%2BuUGlgSM5ir410pgQxLDXm8T189Tj8xWdAFpgIxTIpa9qFJJjLU8A7JfJ3gOcPHt5kn2wVTM8ZOZZ4owNQs%2B%2FGyyB%2BTHKGrJoc4wbexIOPcoM%2FNpnRwIrVIGa%2Bk4NFomJYpo5LyDGDIBO0Ab6rAZVyYdgVsnxiGOBlupXqxsGnlHAas7NpkbSLnPXm3KfpjNky6J8o1MkuPoARYM1sACv3114Zwp0JR0OxD3zRXhMHXnAszdEBCdnUlEJCOjLZznyVAxs5YEBqJykN6Qi2448e%2Fe9wvsYx3%2B%2Fx7ZIDgHH3Ab1PIQykthShkFLltnACe2mTjjNMVz0B1qntB0MH6qLnrXXQgg51sGFSX%2FK5qfDTy%2BZjLQaFlPIxaXDAHFezOK%2BUL491LXa%2F%2FqA6dpmi%2FVLS0UO%2BgIa%2FC8Kqxas%2BUV9PXya1DBsJvjsP67zg8bJzeF1vBTM26ajH%2FzZmesh73ZmHTKIdUPLOvUt%2BGpaEhf7P%2Bow5ujEyQY6pgFfMgWs9H02gntvrXnJYqjqDsK0XFlE9%2F%2FBN9UMgmCR0s%2Fcx2u6kc9%2FBfXffgiLcEoMTc7DLNe5lCv6INadX5xRop39uxihwNWA48diBUi1CjE%2BR3AqC3NdYmbiYM8q9ftGueSIuueo2pZ%2B%2FUl5LWWPVv2f40kq4EpwpB2FoD%2FDzbFCK45iTIYieUpB9H7EUY%2FE5xOFEcBia6w4JDzuL3YwI%2BQt0XLS&X-Amz-Signature=383ae87cc58ea2f75451f75c33abec07654d9f1bc09cc940fdaf46e386b81298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

