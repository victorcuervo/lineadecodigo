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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UV3ZOO4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx283nUXJR%2BCxM2XMQ5E8C0%2FlUMgQqOKwi4%2Bgo0N%2BM9AiARHv%2BTTWNcNvgOTbuG8yu6BJRmbLXlyd6i52yvPkMV0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMU9l2Jlw%2BH7BnY0WsKtwDWgjjf3S36MqoL%2FH%2FAEjrrJ%2BzOJ3e0jKyvKr3Uh%2BqVNQ0Aesih2FsXlhVY9%2Fss%2FHIzKjfdk1ht%2FgYn2sSqXtVBfD%2Bhnto11jZNZAjmtaUiW40jgW9Z%2BqzLtZQ280MdWDJD2tR9aX6RF1g2NUnEncCfv3pCnqXmNxgiiOVsmP72vbJ20ul%2FzhgjVYUScPAwC8X3tUH7NEki5MfWaBLyzlNXRf9FNY5frFlqQQI1CYJvzGHgyiJJM2NQbbyg9%2Bnws2BY20MhWSbUg1Unxt8HVY7QlxWZDo9Gk%2Fp4CHGBw3Gh0VB7wIhVkDZ9MPt9P09p9ZcIEiA7iLxAnfyodK8jMLiHUe%2Beu3zppDSya4y%2FccGsLo42M6kz2Ds7taOGoCfaX%2FJ4YbFRIJyE8fiSlApfHv3TJvpxAOAO2rlrhnzDCAl%2FEgSv%2Bic9c9F3eYjX8nO%2FRHwd2Zlnh2SyRRAv31bfWQp8VVJ0E9Kvtd41EDStEwrdzUuYkMEB9%2BXfsJlOfPs%2F1zn6LLkqNKW9XxrQ%2BM337NLsQ9eJH%2F7qEA3SOdhMdQWRAmX18MDq9vH6TKQHD2JwtcGj%2BQOOkyHN7aNfOcGYoMHHqRd%2FSb8fOijtu2Vi0e7LqfkMDSGAVgFXd%2FCKLMwr%2FbLyQY6pgFxZkX1ujueZr8Tlf7bID8x8SPgXqlkzCEaeh9shvzAwHNpPM5mpIkYqD5o9AfIoQQwivJ4%2FESei%2B2g%2FKlPvb%2Fzw3G4hjIm7YXVq3iKZNS4DnysK5L5XAsFtLAJy2AVHZ%2FAx77iHFBK4iwukGyHKLnOcb%2BNq8qy8mYScAu9byXJOKTAD9W2XkyYIilXJirvYWEe%2FRvAXdo4mWUNA2H6NBm3u58Ao94a&X-Amz-Signature=64aca19a54344b24918d29e0257e3f0517d7462e335983b2b1a35ca48e23f62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

