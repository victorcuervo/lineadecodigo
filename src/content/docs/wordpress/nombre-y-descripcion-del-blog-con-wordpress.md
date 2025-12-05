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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYRDXXS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH1i%2FttFDQv%2FONrysWMiVFbWnPAQw754UKPYX0sJVEjQIgTWxnKB%2F1dZ0Sak5O3BbcVrn%2FPn4hL5noTnmOKfETJfUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC0FBQKI4J2TnCcGrSrcA7UKODzdDxdVNVYbn67DEpOhRUV%2Fzkx6zmDpQXOQhDgeDtQl8fPZgftJnyf2ungwDlfoDAZq8%2F6Ss2a4AHwkNgwca0t2FE21tDqOB4h%2B6V94ks41BrAxFGT1KVbwBspN3DyNAhSg57%2BygFV8wRGod%2F19ttN%2Bqzedcsd7Ri9z4ycW6IHWqsMx%2BAbEdIrC1fpmjLPj7CrC92wJudGttfKngGsHFOhb%2B7hmoLKT6Ib9y%2BIkeNHQ2pK2Tz1BsjFW9vOkPH4G8XBwaidnCl73bEkkXqqs9ymW9vQDKtQ49aLfw6eTBg1pKUlKRQpWWH9dXPLZfm6oSISn695cUhUweRvQrjgHtT6%2BROZZAxAH5gRRTbOF8%2FaLio8qbIYn2vvg2Xd3JqyhPiKMDUufgt9p7ggoEtJP7M2RfgjF%2FMZznBbdnyxC%2BNZTF5kGx7TjPzXJmmQXiPkIuXbgHYtR%2FHa%2B9hLd1wWd%2B2ZXrI1MkbYeZPl43GY4KYMN9jBNk9tKxHYIlJCcbTWO%2BOdtDb1A7CC3dItJcGoj4wzAKJDwNlQ0CLfs23Dktw9GTJnSufMpkhABycLLlD22NmsfCkKZJxKCwxzFZZdXqOCgXLOHr4o9qp6dq%2FJl4%2FB01%2B7%2F1sJao6ICMMKMyMkGOqUBB900NTTMUGicTW6Vz33sHdFhlAiqiFHM7xoK5tt1koqNaREj2sGb978kZrRfVMXxO62Ia%2FYPSnwZu0RZ6NG5Wd2KjhMPP12kpj0S97oWrzElNCXUASn9j%2BB7x6%2FJjweAB07s0NnQNX5p94%2Fnq5BSB7B4spZD4d1zGzW3%2FwAyIm0SEGhCq2rRJHnNnUA0TiUkDRQ6%2FsLGjdmXb%2F8PSUIt5yl7WMGU&X-Amz-Signature=4abe2c87c2cf19306a526ea4e6966ddfa9415492b4e01a8a95cf38e71c66e8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

