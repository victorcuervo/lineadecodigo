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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXKD2B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw%2BYcLw%2FEJkFTNSLZp8T5tpWjjtzic0rKhJ61WfFvEpAiEAlLmm70VEl2KlWLhXRraf16q7rmYh536%2Fz3fujCZlKwkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEWWo7XKvoqTelOl6CrcAxUpfYN%2F44zv9vwzUvrx%2FcrEnQWfczIVylJ77Lyms6izDWWFgp%2BwcBYEVT%2Fj9krd2rCdroJAMOlbFEzIe537ibPOyIv0vRnHRkuduZ3R%2Bxv8z0KvSDC62FpuKP%2FAb3VeINBXLYaHscv27ocmX8CMMB5lO%2FZ0ZzBmys3kNECg3%2B5iC%2BR%2BIW4CicCLjlFHF75SrNyhMb8g%2FD6gdDNtfMjOXvyUgPDMCwnjKX%2BzuIn%2BtmW64UNO7iI9AlBTMnx%2BVz%2BgIBhLLeAg%2BQa0RPtpobzeKMhZg2PhKlRZ9T%2FyqUe%2Bnw2uBaZdn3C0CBt88vOAk8qnm2SdntdhORUeLuFKPPrv65D8tW6a3%2FLD30IEwr%2FicGt00xLLx7pCyrfazWcyW4YEK8a8gl2wtpWTCDkThz3vL%2FKUWeyAvYci0j3o%2B1KrY4ui4ZHBC9vNFTC8zDqSf7RKBr9Q2hceAibaFOLoLwC4R776nKz6O3X7GemPvpP3Fg7XOoTf3tl0pdh4TPzNa2ptWnLIBNdnfRqp7Aq6csyD%2F9pIgLPkR8Na%2Bs9Syvds33z58tjKFM9bFTJWx6qQJvIA1vGjz6TEl%2FW0rYlvSTzR7NbE4AAXHGEUG4%2FnTxJBaCwItI%2BIBNNu51FHoF33MNTT0skGOqUBMA9KlHB%2FefOGe96KTPBNu4XEZGix45GiMD83iYNmJBwZIdpnRrJGn7B7zW9e%2B1vovodbsOO7kXPEkTOJuUMlBoZqOQg4BArqmNRursgbUHHSt8r8fbdN%2FNZjvQl%2BAqGU2Oiwf0j8cDSTRNIsmQ9pwu8CBW2U5oQd8TxE9%2Fsp3GOP2qyr1NS%2FFUJNmZMuAan%2BwGeM2yHm2XW%2FUvtBI1LTZ6Icmmsu&X-Amz-Signature=5d4880304f6bfb42ccc6975eae3960794ce4bf2382821eb5fc655864e5ab1f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

