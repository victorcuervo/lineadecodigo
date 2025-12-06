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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBSK5XP6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICX9M9MhosK0QeXsWsrt6fX0ND%2BAzhK4BbwQwPYo2A6yAiEA6Fux3bzKz5NgNt3RFyXcpGOh2PFhiZABg6hMPJ4RpBAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDG%2FWWGvSZj3ys9xy2SrcA%2F8bWDhILKavOF6iyJ%2BtzuNl0NTv8KCaAC3DGq9xfDHr4l%2F5TDXiriCOw%2BJqEHGz50ZWOUZYNAV%2Bn8RrpcrIKmgbVLjMNjvH6xnqoIqeehfagd8DnENlD7KX0vcUJVlsz1%2F3fzIpIeM5n7qikthvCtBAC0xYDGDlwLIlEmY%2FN0dJ7eX8b06RQIkxn9JXuLvLYpGkHJ5iaoJzS6lxxa6bNZCP8I92%2FkgEIl29S70qtaVt3uV%2BZda5IrCAHTZIv40l2x8BMFLYy9wmTpDLPAXWlXHZsNIAn0Uah5Z%2BiEB1fSz%2BWY5ZeTZFZDL6nhOSHMREj%2FTjeeluN2V6aF29acC%2FYeprlKZHp4Ung5%2FxCcMs0XUw%2ByqfZyB%2BIr0ai2bPjcnUkuiJCAA2kuzTMC%2BrzPp2Hjtw%2F1vxPrzCCSN6wrNJbuPtc8%2Bbct8smpNl3X5V1pCwy25VaTTL9%2FMM6Pd2rNp0YnYG3w6Uuypw2xdLZPwzC0igHL35Ihb3U9clUbzXGNw4AB6tgyD5PUWXbKC5UKIyl9e%2Bi3cH0Eb8az8%2BKgIKhRC6KOzk%2FVSq6X6oVuqRtO3ZwuHa21j7W3vdAdv%2B2NprnwtAPZeYKnzgV1T6LqAkwafXaOC%2FtOqQbH7Yg1vBMNPU0skGOqUBNYH4LTYBAKms0V5oSFTZDuzWzW6trwzJ5YVyyZ5vmjrfLhtci6jB43EbD9nEesMyF9pHT4L2AK3Hehujz5LTv4PmIqGM7W3ZobWY%2Fb66fwNCNoulhHXkP%2FPVILUhVam%2BlUhJpUDVJ%2FG%2FX0mIayqoFakC9irZrHCUIUuSizShBcf7Jb977bNcibZ1h8i%2BfeHmo3CzlJfypWjfXJTnUabV3szASz%2BU&X-Amz-Signature=47875632a9cfbd76963c30fdab16a343fa21ee5e52f9575b644c64b5e6dbe540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

