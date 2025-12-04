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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVLJA3F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIG87kwkm6o1Yhc7pXCySpe9LoehLz2RQRktN5TgVIFC0AiABHxRT7NRmKNYMsJE%2FJBJbiOcdLIH4VkisvZsDCkAfuyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMDv7UiPGucBnUMfj2KtwDdzwNLrpVGdWJGPqbmSHX133%2FKkEOkYoR9pYXeAyw4FZOjgXfjWsZ7XM17x9t2LrKaGU2T7d%2FgxPaVzeFThHf%2BB57TzhxurIlwLdBfOfF%2FIFT2N7a5pzAC5%2BmzLi9Q%2BaMZphRh6%2B9amBHfQmKJ3Lu93ybpZW1pxfWBUCuIU%2F6YPfY%2Fs4Tz7sQRvf17SPAXMxlBnCMPiLiW1YN7G7aOCFFCVNeUu1SNPA5wnzlZbSKqndjppuOnawaV%2Fxz0jhyprndaeMPOSgRI26Db9LJgvHsbANAq7gRmCwxpP7Lulg817g5D4OGgtVp8uBOgi4BC9wSYOp%2BSAWX7V5zb5187xk7x2%2FCEOwzzEdKj2WSf37PQ9SIOxRfPMpgNPgYJHe2NN7bfh6rEjur5b%2FhBZnCuN1QBTXlKA8mZmXRKJgu5Ir7iC9V6Rim8xa87nnMQJnRRZE5ptoNuxUP6ttmz1YiUqn1IsZy%2FubCx9lHtD4BiPa7t5fHkicocnrVnBpfsL8HpO%2BPA3Gca%2BYGsrU80auRoM%2FAdtlgxgkM4jacFZvD09tF48wUnAqc0CtSjSrDQYBEfbasdGC3ZF%2FhiZ7sCXjwwhk2lbSM77Vlx%2BGzu5tOmAR0FwueH0WKCRx6nw8213gw1KDGyQY6pgGx8eAP0542kvbSF2ho%2FuiqQpiWbMSRzy6c8SKzPCQK9kgMLttTVxGHh6X9Dq6ufyiXIwKDhA64lsMerV32OkwjlPAtInO6xY0uo0NEar%2BAs9vyFuCbsoBKRVQe7qZ%2FKCx0%2FLuG0jxfYFVIqJ6t5Tc2lcWrhHi2jFa%2FIcV%2FQ2ju%2BDNnQwgcgK7XB1TUtWfz6L2gMEI1tmurskKtHVPTHFzGYOkiJFZ9&X-Amz-Signature=5f941361e921882018daed18e7f357d7cb049ec907e1065d7c93ad048f004b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

