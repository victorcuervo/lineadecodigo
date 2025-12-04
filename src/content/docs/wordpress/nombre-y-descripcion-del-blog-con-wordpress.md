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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGA3Q5T3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDcjavXYle5DvLYKIwglk9KMSX1HWEMx5Ix%2FUjbeP6F%2FAIgSnXk%2FOs%2Bw4%2BBzpqWJ5nVQeNdrhlOiGbR9Xn%2FqcfqA9Mq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDN2qCktzATS1xWBkgSrcA%2FHcZC9fjVsyLKyjvgXesZG%2FEnGO3ID6pNvy7hLBr9EGTHd22WR1i6vBJV290q7a1kZmkywSQYKADWNZTa88q9uGw8k%2BtoZRLqGOkhkNp4Kwg6RUGPX6U3fAojKp0JEnEV9YRbuu9bZbyZ%2BPa%2B88NvMIEJs20TJD4wZh2%2FcHX01cN4Fo4yQW1pluIfIXRo8onUHaJMTus5EDz3bRVuY4lMUx51bj37oKQZgtm8EFcsfsV6KsjmAWcZSCJb1mbwAH2%2FweTpqnewJ8zRd9iDK24ndyClEjE%2FPwIuv6%2BJ5IGF5Ub1oCfgIxRH9rEdDmdyBIP5012MFsQZbrAVNIHkaivC9XAdGGKit%2B%2BlcEQuHeHp1jChXIcjO7lIvcJb%2FSDY2rK3r6gOPYsRax21cpb%2FWQq5laqAtW%2BAWycjvhBBOAErn4dNhd18FPob5HZ3ky4%2FaD%2BeQm9NlA0YSm3aNQBLM%2B4gTuNOT2A9i%2FkF9sri%2FS8t63xVBhI1RmfZS2WN162t%2B00zhwHIspDxZSxWNRrtA8xuXZkS2fz2v010WE7ozsrUwK6oUJsSooem4PTbJ4osvkmgaXePBABspOCrnqlZnUdMeGi%2BJge3b4uio%2FUzpT912eECLU3DI30BwplZQ9ML7mxckGOqUBavZj5FRNmEh8DJ0wRUIUVu6f7aEaXW6dFhDzh%2FiOIjcJM1%2BVaIIwDOrPTBDONytKcSLpnlzivoW%2B0Qa1qd9kopPSzjQRrzcrrzgQ9%2FWJTfF5HxUTHcBJUHVqo66VtpVUhS2z65fwOTFaqUfR6PQn6gsUsF%2B7WxuKwjsuQVsPMgZNBXTL2ISnh27pKc2iMnxvFVDiszKfzqwBREhr5pCYq523EvnT&X-Amz-Signature=9404a3971af8796c7cf5ed931d8ad9f50d97cf30f372df2b774498ce406b4e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

