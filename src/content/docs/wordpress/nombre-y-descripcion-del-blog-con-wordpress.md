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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5STXML%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3ysUt%2Bef%2BcE4hT60NBr%2FWv%2FHdTQJaG%2Fn%2BQsV18xLGAAiEA1FN2GbeV%2BxVfPASTNcMEO5y9MgnDrTj7yKY6VVboev4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPZxIYhv3Lx2%2B4DkuSrcAzGF%2F6ieomjumbrIxgX9vdXdYhc%2BfaVDk1DYpwr6Ph8nKyNIQxHaq7HR9UqkwTBDZkuinqNzuLQRJ0P2XJzzftF04Cjq7KkG7Xy85WiUrvPTG2yvBPfvqpQgXFRQKIhmasINSCzo30s5fFaFOi6je4GgJQV00mMwCALSGbspl62j1M96gjOz2tM8IQTLY%2BUa%2FSBp0bAxjHldsm7fn0rJDrKHY3UkmgnHADk8DfPibQ5toRX6oLOSSDB3e0Tsm8YS63qgcJb8XJ089G%2BY5gHmT8yNc%2BwQR%2F7PW0wXYLbdZSGbmrJxFxMIVF2AGzTQfBixOcmS6FWaCIL%2FVH7FNfOnN3c1%2BWlqbOH6TWz4Ph%2B%2BjvLaL6tIagI1npc3B%2FHdnwxMLE4gyurpMAI5e6fYJgZYI3PGs7WM3LCjK2Gn7ouqqdPAq7EPIeQt78K8l%2BZPT5paTib3U41M3B0nynIRLk6GwhFfxgBkBpU%2FguVZ4dkJF9wh6%2F2xo6IZFpTrrbXlSXymyMzh77BYnR4IFLM8ER3sHghNrxQjkvO7Tr0aWhv5YmfDOFkW4lQBIemySGTQClyawKIRezMdaXXYVpqEmXcV7hg4DAvmmAW6ib%2FNqsZF%2FRjX9V9FSIvnJZnmmWWYML%2Fhy8kGOqUB%2FJLodFtneWxtRdeS8qA7lN%2FgV%2BBi87%2F%2BbrRHHEAJLjFL2IPi1B0xA3S2vL%2FRBpf%2FEonBhhJTm%2F%2BZhjjJzgCQFDFJa%2BACyKIem2MvMhbRmk%2BmbIWnxBKA7ZPsIqDyDIBVv8lUa%2BSBK4%2BJvXmkkYxgum3xj%2FcE4DVwtNL%2FxtOiM05oa0RrVPyA%2F4%2Bk%2BOV3NXpWX96UL78VWfpADdbHZo5MPQ0gYxIC&X-Amz-Signature=a7f2476ecacd6a567bb2ba3dc9c78a8e140623db0f2bf8bd15fdf345c2421c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

