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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDC3IXT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2BqBzn0Y41JiFJS4y8ZP3%2FHCtrUPCOP9Uzn5rCpWRNgIgF0p0EC%2B35DkOymJTFiOU8aEGNbEgL2VjCJLzx1%2BfmpYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDi%2F%2Fs33ZhHLGU79wircA%2FHhds382geXETl6fMWG1QTsQSFdKZrxhebSQSyQ7YzDrhkytt6Ytc4vMx5x6UyqODr%2B%2BooQyHQVgySB%2BnRVMN6laPg6%2FpNLvaQy2yDLZONZ7mhs7gDWo%2BGCqBvfF%2BSXcCCgu1Q7OaAPbN%2FwMRX8M1W6WrEXqZo9CWVnlQSxIDB1sFFA4kD%2F4K4RHvRobARNLMZFBT1pf0VVEu51%2Bin%2FDc6jzzhdjuqBJFnKRt52s66QOC3g7URw7xeuELUlrE1OoOJSXMNcnK8CXst2ebR%2FHmrGekSVZ%2FE2wCuvnRyX%2BWKQWGHnSnuqaztu15Z7oCm5MNfOiMYOPDCR3hT%2BLNwhUYPn%2FiJbSqMgg7vd0OwAnmyLSyR0wpOGfxynPw%2F6vg%2BH0aO4SNUt4EhWBPTDJkf00E16C%2F9fgI48vHE5gVQqcodOMQW6Ie5M8VONLEQ4kqB15wt4g2HRqB9WcA%2BoqAYfDteU26qe0V06S1CF5VyOgLCy7rj3D07NPIX2l0iD5cqWAT%2FdOitA%2F8AzFZgqDP96U%2FT%2FYPirpB6KKpvT8U2w4T%2BseTo2qmiJ66HbveExztNGge49%2FnNmXXX8MsBXqR2Gz8bJrgZLkd1ULNz0GuPKf4hjplTEgfZ7XFfmrEbLMPam0MkGOqUB4iS%2B6lUIOlg0ymb0RFjoIjpj%2FAoDXNBlg6kw3vHwUZGb0bk82Sod3SOpZpgv8ClJFtPeHr%2BVcfJCip3RGn5f1pOzJHSyovzYk43Vp5AxJEwM4qS8KspKAmHPdffqypDFoYum%2FiKmPIZyBBB9sya7y5JYjfWzFCp5zhphD0idrfuDvM16R%2FGCR0oKcD9%2FbmQyIT4JLv%2FaMM2o0b1LoJSz%2F2OIsfb9&X-Amz-Signature=323b26fd230d30410b6a9e85e873b91266771b4885886e28231b934850a33cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

