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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TB3FUL2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCwDuiQC6h%2BdCkKohjht6031O4c9NG%2F20vW9EleoMrSdAIgaZM2ZkM7foPmaCeMWByFSck5z98smqAi475p8HT1o70q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHryanaGp0DVe%2BfNGircA2peTs4aTHGybJby0luQQ7l0H128pEHkuFBDMG%2F%2Fa0Xe3RSSJ%2B5PB40yOOUOvVp6%2BwnlQATLheDmphFdUXypaRQCU9LjJv3wreE2LY3euAAShS0GANY%2Bkmtyw9bHQK%2Bhdub9rnPx7ugrYqMm4Cnhka3Zq0Xs4yKN3kYRtGAbB52AOCoL8iQBy0Apa8FkzyXTM3osPpKr1HXE6XpTTin%2F4C3a0an25sdPRkTJfT8R8z9gcJm6Bq3DeV2%2B0eTZKjpcn37RTmT3RAoWRKtM%2B29No%2Bg7P6HnSdLtkekuX0gh6gWHn9H4W31yKLiYuM%2BZubsq0yFkyh%2FiYD3fXyU7lN5IfTGR8ddxwUgGPjXIGlwdEfmNpRFU74TxC%2BmGjINE%2F128hrdD0kXkXQq%2BI547H8QcJ8PLoUvNdLixcIjwk1PCUVk4zO%2FLor2jNcVyjOoE2Fi1clbbwwB2kzQWC%2Btq5UNgGq3nV%2FNkWD8ZxLEeFszCqjyrKJogmOJpKE5nstyZdHf6b0kLutQk94MmOp%2Bo31YzOjQQMtNJnpCHMmt8e4ZP%2FtLoJXcbVHHaVgpl%2Fj46%2F5PZHpekyyyp6dIU0S6Ka1Jn4LDpQRcShVtwYuBjTSNsmCMf5UtKX3dwV4VUtmc4MO3IxckGOqUB0QIDnanI%2Bh88Qlvmm4r%2BE1NY%2BHBcvmfTMTbybqhQtkDks0%2BCgCPp9jYoPKO95INPAIeCeRqhwDLh4Ybc7N4NA5r2wo794vvy6ibuAPtyeFS7eUZB9L0FKkIjzrbLEMK%2BG%2FwIi5WD%2Bl6hOT1LC6X3NUPTbgxrFJxvAZwSFwQx0i488%2B5YSb2hNioW3w%2FLDjIWKIPnpfq1Ec3ddLJD0KfT26lDv2i%2B&X-Amz-Signature=51d528fb406c32d8e21035bdb7e3117655abefb841d754108dd69c83d55d0f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

