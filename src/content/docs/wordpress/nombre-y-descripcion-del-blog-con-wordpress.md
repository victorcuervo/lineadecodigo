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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDHXCBP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDxvfH5%2Bu4Ios2aiXbzPUBUeJHxeCrbEiNvVwhN1xTgFAiEAlEzGlOFy4ZwgRaXK3M%2Fv%2BNDWTzB58IdoeWqwko2AXasq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDyVK6dio%2BBfgPtKgCrcA4BCp7IBeHjJMLnf6Sdrf8Jwm1UIo5B1aImjgU%2BQ%2FW5G2OPyJDKVT6c%2FBdcu5JZCpEcU6vBOaZpaIlwaNWlXE9BkjulkElutliuutjRLhPe9fdXgfzTDCf1dz6Ut6eL9gxaowSWJv1%2BR%2FqE9LdmDzoBG4vPAixOrp0USGqVzMl%2FzAZUnV2En3lcNBrxwi3wyg2V6RbSJtxFsDM2BkVTI3WFqdHkcZ9nHw%2B3nUTGEZq2jcQxR%2FzzWUwQ7IAWt9JhV7trNy5eLOQy3LraucId2ajN%2BKfpmAy0AxmD%2FTe%2Fll46eVFH%2Fd4F3IjdO97OlAllreMfnVUJBIqmq6xKIudsR019HPQBmKgQx9Zwo2FYnThR%2BejF%2Fqxd8oXsmC6FM4aERqwvHRxPGyzpf6W0THhCJw81ouol%2B5HxHOfEwXbUmHRrxe3kKANWu4TUR1fSF84HnA5Sz3vBBcv13qTNEDIH0mYVRBOhohCFiPwV0TWn1x9AAeehdVz1AraUG2jg3EarsewzQ4Jux4ZrMnM0DEWdjtmTHTPt%2FTc1RY%2FFxVGL7CTvHZtGxhMrwpXh16kILUP%2Fp4Swlka6Zra%2BTNNDRXNhRnE4dNqh4D%2F0vzQZxpP9Rz8pIH3om5m3Y2CCBKSWVMLm%2BxskGOqUBK1aQRVx7aTLgn9p%2BmZV88K2ohmCUwVe81O%2F8joY9PwjrW04XPfrA5XldPo8A%2BVLPoZaZwvWWI8MIEL6v6Go3DarbB1RmDYUEM0wM%2BVxDHs2EU2zDVyECL7UiZu5t3S4q8nwXCZtHKlPrCjNbXoxL9KlSRkv7JvCm77qGY7bXuXmc9CP%2FZPZP9CApGdJ4%2Bj1A3h62Ns9AUZ4GT8a7BlPZyRUxPPes&X-Amz-Signature=994db45c05be2cbbf0fe9cd5de1f687cf0e75fab507e26acb4c5146fc124f111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

