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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DQNMR4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BzyT5%2FF3XiLUFqI3EIoFcK4LutOciVpoxp%2Bp6PLLypgIgHEmEOZ32EY0GKC2YrDntBhGP1n8sSZiuQL5Gq5sFa7Yq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJXn8aJuJnCXEe0sQCrcAwUByRiBg4FgQTIVFKEHTI2CkTiYbyswqJln3pfR4jaVoz2Cn09WuVmAoCM2gdwg6cZC5Yo3C4NdQBM7GxtDlzgfKsypLSiqGvoHrh%2BgJL4aSWFLC3jsoRDTZXwtl1UazUbDUZkh%2Byb27l%2BcKWOeRyOkHRVSOKpF3CRVwGeQ6C5y9f3DwFNVpLarKa%2BgakmMhc8eehOUy8qdDZ8Kejqs8N4QNwMIMYlyuhs7JeiP6fv6S%2BYopggUS29PJGey16yp52aPhHtGcbzFXEqdtsw4%2BFTLIsFDauTNY0yH1SW9KzqGMvYi7yLRA%2F6oWHHqaIjxsUgAhyaZFuVIUHQl7TpQ2%2FbCdYqKr%2FMiXDzSJaJTX8FxNH8Bh5zqQIvrqeM3nuBWGkK3TYqpo%2FSIKa%2FAB6IFBE4iihRw%2FSAa5RoY6uJlhKHBrRLps7LgHPZa%2FF92kRq1ZbQKEgVO9YVL0j7f%2F%2FXfwrdw392U5giQnlYX0WbkLs6S5mR7U%2FGz6yMMdfGiihW15E5dCH82qz0fEShKexTRx0wGTgI0tR79Q8ay3ty%2B7PKSzPizzeOFgVQ1eKLtiIWOBR6SN4TEeCCanrgOWhrxVu1LUZB0rQqOtigNnXcm%2FzO93gbxa3Iw0GxbeZZEMLfezskGOqUBvZ3L34SwrPi2gnkWaVFSog7hu9%2B3HzHE5YoD4Jb1tdSUM%2BUmN%2B3qXEyai2jcsdCunSvJM%2Bz%2FZ9Ly0ggXL4ApKRH7zivHBwC9kwYPFs%2B%2BuPOcDt4mgBhNFVLE%2FeHRfc9FZlq0LjNqPjrkTPO9G7NkD9JD0OMb0GWQWtSdCAglVTx47kan1MT1u8Ta5JZjs%2FPEvdSpCMMkT5frV%2FQr2aC3%2FQdEtpxm&X-Amz-Signature=40d0801c9cf11441920c0f793dfb2dd280c41a9c1a007300496c1e82fdcbc35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

