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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGZGHO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0ALndpubyXPPl8rg3JHIgZbjk2tx%2Fdwj7Q4IFN5d1vgIgWg%2F3FK4P1HxirzdnkGcq0rK9%2FTt%2BDKxGDXLZvKaKzeUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLXC9wLsIX060V8dFyrcA8i7Z0nlO6U09J7Euk2UJfIeMtomP1Ns5JyCrismE3tUjo6fcpXC5F4rQAFXyFwYd7aGLoDEb63ON6E6jO9HEknI8ace3U8ru4rZRW3czHADzJHoUWviFrm%2BUwaa9qIfOisZFULhrhBiMruFIY9TPearpNc%2B9e7Es6%2FYNGsSHeiSutOi2NDNd%2BtmeH99RjO0eCZ%2BrJqD2j5o77O58RPQZceSpdwtyHupcGKs4rMA4ZgEwJdbnnEKOr1fshZh4XR%2Fa9cCs3%2FU%2BmbaCZ%2BOi1L7LzFtPGCRmfgGxnYeNCZCsZRT51TIjv00qW68bXTWUv%2FNHyD%2FU6zbpCqHMd%2F3IV2CfVXngVfrfS4T0enAUcH1C1%2F3pblp9JfzwUHoQUmj%2Bw20dzHvbdrvHW7P7gHurk9msTw%2FN%2BrHAZDA5GwWBAFhug%2FpCPiS0PQLgO2waRDLd7d4SwHN6rJa7tMkaYTyVSDY3GtL6MGk4CYf%2BKNDoSyHGUBQvYCfLPv3eb4bac8HpEMCPG8lS3zgszMsAmkfum7%2F7%2BBQ8DBlukWq9x%2FYijeS5cP5gqDCe6fwsg4F%2B%2B%2BTOO2aom8DSNzhVVsii%2B4KfTgS9%2BasZmaquBnUXBcCdTM3%2BekJVHn4Jqc7bX4AY8d1MPnUw8kGOqUBBWFIfAN6crh7zqg4LGtIkUGYnpTZrAs8N3ImfEE0qKZ2ZAy0kvrWk7v4YYZFw7pY0z8Vgultz5557ZVxWSZZ32ojxsJtcP6ZU22sdEQ2GiWEy9oaXZaIfP%2BIDW1h6BCs2VRTWTLo3zzY2978uOQIg%2Bh2%2Bk2pUF%2FObLm7oszzWicZ0SyDNc%2BEaGrAxKHi5JHpkPtw8ulUxDflkQFjfDRJPY22lLSi&X-Amz-Signature=7a147434abd4ceb6be54e167e79b59b801d1c5e1cec22ff39e168773880664e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

