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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHHFGD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAIXJz72h%2FwJNf8H3%2FlE1nDnlzvalD6nwZdxXWyHE8bNAiEAj2xtiaFXLn1nActQZkT9729s1l4VF4LK%2BOz%2F7igRYQsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJapsJGmrVpvM3lV%2FyrcAzf72ZXVNQJBy8w%2ByWnc35cZhDfP1pH7snrNBAwz1BtSbI%2F%2BWIe%2Fy%2BLLQzt0ZBXHjKZDaF3hIQ542Q3Y87G%2FBzZY8NIjoCKdDV4N%2FKb8R%2B1oYlXFgeU0IFxUebuAw8wd1pKvLRv2BttGMIE35QJNv3y%2BzhUsmBFbTtgkEPmhKcWE6zb8Z8AQSu9SVp4ZDP1I8x%2B6h%2FFNvRlUwyunLSUNoAaW%2B3W4eNnR2N3MOZgbtQH7Ps85hSW7O6yyN%2FWz75glkRqTAAegIFIfc5rMRz1M0cQxaMSBfDWvPuKIO52Xzl1b8ffNtlWcjU90t6Bn%2FyRkNG%2F8n98jX%2BaCGyVa8Q0frJphFPQIbZM%2BsG1VDi8TF8vM6Beup%2B4g2PTA%2F0TuLZIp4DpbdXc4UKVeiLSnFpJRjHi36rVMLhXYxWOy1VMt0LyTo9lY73ewhyYCLneOlC3x6XTGlDgwSm%2BSL3E4n4aHttGGVW0Cxv%2FxFAY6pLONbj3aECQRXc1fwyB7MXXUCAed6Xu4LrMEKY5%2FdawfUBwAtd28141GgWxQQeRokynzBQqEP758fgegmHCJ%2FkmkgdfE8xhyT2RW3v%2BkmvbiOmxfDREHAmdgkiGuzSNxSnUjUFSHZPdisJ3S%2Fc3PqMcPMJyGxckGOqUBshXLzySWzGIsUQPBgTxSyk3Wyj%2BNADI3If44MNH9qF7ViX1LO0SHNkM29%2BoX%2F%2BoKoMagKnbyky0d%2FEFbvQ9Xp47wjRS5Py8ux8P92JI7DN8Hfd6M0kMNrmQKLMsJsQh5NBF2Wtj%2BRleSBL3kQaLTEf2LzOl7Ls0wUwk3ZDbeROitpK1EeIZLEgdEnL1vtzlchi4jkew104UMGA4eLaGbQaplaPLv&X-Amz-Signature=fec8b371e6f74f40b7816bc00a4f5014ad59433507cec936841e9e3dcb23d2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

