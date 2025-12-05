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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVU5OHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8cNPiAY4%2BoOypSFPVi7e0Gp9E8GtYSSZXpYbSZfImuAiEArqf6nbvfxvY3RHYgB39MOyMfpPV%2B%2BMId4Kv9Ii3n66kq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNDq3bYpXKqOmpezGircA8tDh5Tw8ERX2eUTYlEBAydmH0%2FRJ0acqoY1%2Bz78WnyoU2KYE5NeXuPpQVB0rS%2Be3CO68WVO%2BVcjhuj9GZZ6CImXj4S7XaWGbI3IQ2%2BWFwGDGiuJxOP9MHgzDVf%2B9DoMK%2BB2%2FgcTGyz7GMnzGDAPMe1YEzDO2mSfK2sS7R6IFvHuXv%2FRc3G1foFW3bonQh3197m8DR7iRFxoXJTe%2BvfG7%2FeB%2FzGsi3qk8ohvDlHf2RMHAYUZ%2BBEMShwaNN85aHtoW4rvaNhx9AfovxnZ1S4RCx454%2FtTPxk5sU69SZ8VUVvOi4qqzQaL44EYhIpbSyq5BB4qwznRkzdeoO1elh60l2SKXwqfUs%2BES3NPhiXnRJx8iOQZQ%2BWBr0wM7GCKU7WwnVffHZYBOpzrjYmCRdB4x0mcgwDGFAud%2FuHTU2kXKl%2BQd0ps1vwxReUK8DL9NBRkBq1KqbcQ0PoxumPH40KJYy2JZh2FCHJnE4xg%2BvKalQ0s3sXx%2By%2ByabCL9ZMJfv2g1Bky46H4Ho5Ueo8BMv6tvNZj%2FvUBhfOaG8J%2Ff2Ltqt8gSyH4WnR3FlmEhfKGjeSxvuzlMzIE2m1GD%2FqvW9xKsGLSlUkBRS0keCjCMNdsCXUQGkayYfqTHLULdFyUMJ7iy8kGOqUBv6ApI%2FMf34Sm9VsS4W1IjS%2BGiZP4mhhC7KjHokeyzKf%2FnDQz0CcwqOyDHz2bRHJjswS0IqendM4CnPzsEZ1WV7sAfTkumVhgMAPl5Ln8icz4UsXpb5aWKJiaq2008NvvL0HTi%2FpV34Vv2X5P7df7uDHkG4Oo5ersy75p8iyIGqWO3YjsZ1aG2KDi4iaC1qwFMcIYHaekYUMFMlYFI1lljX5jR7vW&X-Amz-Signature=0a763409b141ad86a2f96c5ad54c8f422cffe48d6b4da697a19c5cfa306c073b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

