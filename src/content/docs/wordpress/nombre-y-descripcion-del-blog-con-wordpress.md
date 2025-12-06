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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZSDW52%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRy1nMP1RFQu23GRJhPmgByWXcWfnbp5D1Hfyl46sAZAiEAlpbnpdJ9Q7P1elg%2F3zViPIQppQkRrCKaZ%2Fre15DiG7wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCZ8MPaisNbGjuZ1KCrcA8%2FgOQQZuFM%2BSAZPI1hQiQO8xrGpEaLEiB9zFpS6b8v1Jjyr6h%2FRxcrwCUIvYSzlfbjiNUUu2khUqy%2B6cZ%2F6nLNxWTfchWKRn9Zf2vIxo4xoyK634L0%2F%2FBOxFrNWPi8H45m8HwlIjJy2gEXkQwWU91Ay%2FusX4KetPeaI1I0PQlelIoreo60f94jvSriVWcjDAdS30yg%2F4K7dJkui6Kjt5a5%2FVTvJjG2r8h0b%2FCrKJs8v7khXl1txkiM1tvQwopEjrDBykIy%2BgK0cz7IXN%2Fc06XnGhfD8%2B8Md1xIwkt18vSnP%2BCRBzg7r3nLHyyFuTI1vRdVK24kB70d%2FLgmAcAgKZgGR8%2B5Rbhm7uZVGyZZhH%2FZIa0CKdMMUjkqCScDWMz%2B%2B4z%2FN%2F3ZfGLPYcx050xWSXbTDevzbK2fGyC3Dvgbc%2FpTsXl8WlVp8K%2Bq96Ig%2B296FsL6fJnkJc%2FHAWp64%2BAu25UWve%2BVgNjg6BxC9iCSvw1sEJSB0fJUODBFovUiTzzPxcxziP0EtbJdnmfYvnaxt4PsIbZOGyX%2FxCVJ%2BZ4HZUq%2BAAYo2QoNuyv%2BnBi8FA4ZEPD47%2F7mZh788Kc5SwRSJDG%2BZdDB6tJ2qZ8eN%2BtIQDye6Av9sCwTQ6EgfJJKIMKe8z8kGOqUB%2FAMEYWbX42ab6MMPpn%2FhqCRrkuq6LmTXl60fFp9BbVf9R54mHfzb67P1lczmCi3mADId%2FJfZMqmR1BAr9qtL5g1piu5Of2cbyuVBWL0PJI86t5hhp5IhnPslThw2GWwhH6Dx%2FZ4mQaOycWyAVWramE488xY20xhEI4c0AzWkLsBi1SFsiHlwZjOfy%2FPy5WzbcTXqLsvWD2VEcg%2F7yoHkWvJNCsGf&X-Amz-Signature=62666fee7d8018b1d89267e18e92216e710958eb1f1658737e6a959855fdfc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

