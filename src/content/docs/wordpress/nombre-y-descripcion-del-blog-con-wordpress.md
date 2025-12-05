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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4P32TE3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRe3rBzxB9EvKqd%2FLlM6Rpg77nRk6ijZ7oILlbFMpyqAiEAseW0ew3BrXKtNso%2BdrmD6WTpCpVwRLPmTGfWJ1ir9zsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMve53bfcvQ45ui2cSrcA6%2FF5n%2FB%2BAt8yc6pQi%2BUs%2BMVD57bd0n4hF98MBh92wbsyOnOIHIqSZWO4nG7iCwzFs%2BWdR0Vva3HjllsM4lpbQQc0Ykjcc8I9f3ygJgsbZFelimnGI9rrJtazkmGE5%2Bl5t0CNqFxEyX36BMeIuw1I8a5CJxeWdTglssuMVVZF3l2XyEm092C7ex5w%2Bq3FQ2K3KH%2BF1hOeNjBagp2GqxIvGyI0%2Bf8puUl4eqrzcwcmXhYQ67qc6%2BlT9rWK0wyfwMGFzrgneQTCwhDn4VmRC3noadHmWgOrf7WCctj4JHpr7SKl9v%2FuGmU8rIWnAKI%2BwpZnAEFxYMsGlHOV%2BAAY6R94rSZAWBp%2Bccjrp8JggmDmCq2Z1QqHrkwTJrCUYlIyvvIcOr6QX43YFLI33BFDER2SNXF0XogvHoqShaIq08NL%2Bf5ePzwJZwXrbN2lQF59t2LB6vZuZvgoeasSMTllFkJr2n4sh9Yz0SpW4sFur3QH9IDQ51WANTw%2B3PsQevd3jTIBtnyfmqyzMQrHh%2BTV2LwqWPqOJRfr2Ufuq4TwnWkIoqGesCciGlri7igiAO3ClVATB%2BSk3S%2BLt%2FT8kpegkA4ocG2SBJM6L670SG3yBF%2Fmj8pWI2CgFXe0LmOZZkfMJfGzckGOqUBguoX02I1W6TteVF8YZs6X%2Fzb%2B%2F1%2FmfmIS6K8APBtbtx8%2F5HkIocB42WEfPIYPCF2LLO6U334kOO350LLjZtzKxZPJ8z%2FxjoW6IFIWwxmPE31MOPb%2BICUZwHgISZku6wXzdSoN8Agi0K0aUoK%2FTxd0U25ZFxRH71M2hL5e%2BNGgWUgWMNy6%2FJ2sQNTueZTcFSPuPM5ic5AuhxqxvF%2FX4%2B7jpqfJPfO&X-Amz-Signature=5be2fbc25bd7c91348cff5bbbea24b477e84414d6e592ac1a54b37ce72c817f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

