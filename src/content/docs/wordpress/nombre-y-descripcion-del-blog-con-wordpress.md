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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677REWG3K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIC93DUsmt%2FxntCq6eEK10GNci2Cq2q6FOdBoI5hoGi%2BEAiBY6Tl7a93JygYk00vyPUYWBkApPrGLYLOYGwTYxMigqir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMRVs%2B%2FfwpT92jYRzRKtwDmVpze9uZNjRrJ8QK0bh7%2FMjkN3MXXBXkF3Cuvhf5kjBFFcx2anUgwoo8ymqotADH%2FR%2FFXeHfBBek8O7XD5zqH9DmaQ4iWrrEzl%2FnovixRm5uUnFa%2BS5tk8Kg3aJfjMhpwoqxFXzrK9wOMmmDAUD%2BxbV1y7LdGL%2FjWvHqyvpt8t0Zbnjy7TpMAsYiNEIKl%2FVCsWs53Hy9P5d89YfqyQIGU88E6D8QQuBYwbkessnDycCp6waFoawfn8w2K5Fnzk41cXdAcIGwTlMSL%2BVx3yf9Wu4RkyaNs3TwIiH2MUlpJS%2FSlUO57tqw%2FofmN3g8MdTyzHDOW6SylTDoKjUn6FjRlDjOyEP4OOfpBm4ysMOSy7Xk1OWCmcZfVnV%2BbhybMuYZ3ZikQJ4Elafrj6FXQfS0%2BBElOxYilDXxeFaMvkiSw%2B3AecLKQXYLNa7jThDYRDmC095Blh5cM6bVTPxpnVxu9F6z44xvLY%2FVR7Mvz%2FXLtlw3U5Nrg7KiV0sez3QwPfaE6RkJ9OAGOpqdDQ1jAT59R0ymY3Ra9svrOfGipAXmRwYk8Jq%2BfQCuOpkGs%2FWSffBKFwwPAU6jZIXgXmVpjU1oVADqFAnWHQln2VuxFCFkXEuO%2BhwnIc7Tk3EBy4owzvfCyQY6pgHDuVO%2Bp0Q0005TLATENkXVgMYtD0BnuXRXIqVKsfF8r9rqlIzh%2FK0Y0ufT0KFefjsmiRQal6q9FmM2bSJYVf%2F9y%2BIDDZbcg0836V0xbKJP%2BMushGNkqjTnuvZO%2Bdp80BICWnUgDvQKDxlcLGp5p9B1Xw5rp5F0YTX8pzfYap3EZmBjc8RlRpicch9HPG0P5TUwIA9c05AXMnWZSnhLIEme%2BiROaCwY&X-Amz-Signature=deaec6298e56088f688b94dda02ba3d6db3b5a4b273fbc3080dfa1704c3d1ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

