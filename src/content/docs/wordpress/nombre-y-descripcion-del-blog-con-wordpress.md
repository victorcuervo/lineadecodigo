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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6JG77N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCGvEg8rXwOR%2FTysscUkypnhN%2BxwCHfuWMIEkh5NBct0QIhAOf9vIz4F%2BuuRvqkP1iaM9WZf50W8zyUsI%2BRZ4D6CaADKv8DCDkQABoMNjM3NDIzMTgzODA1Igxwm9SUVtsM3qmGrF4q3APNed21pZCg6IFk3nMtZ7fqQq4G8%2FvYWwU%2F%2Bikv5rErD1TCg31GwCjUD9PpvBmhE%2BuFkm0wOP1FWyLDUQOniilvgBoii8PJiztf4Oc4NC3JBpZkMAQGItGgDdxgXMmDm2p%2BbZ4btTweW8ueR1OuO4Tx4CKB1eg1Ka6JGtRLqf0DcHnCP7%2BOOa6fGhvzTfCEJQqagA9BKk9iQxsxCoI5XCv3Lua5v%2F2Qe8Zs4FqkPCkVGlWOJ0%2FoY6DrgMGtyErAGRjpGFSPJveHxzBjRQgj6GBeqAByr%2Fn2t%2B0rcC17YJX7q8bIrfrc%2FPHXLIx1vQIzqPDDc%2BFTpS%2FHa4dAkd2qsaejpl9o8dVvfbViwi7%2BBUV8iQi2KTiEWFp6dZ%2FIpyv4GZJIdAaS0FweBhxqXeOxBTURidcxNcWljZGDcAuGpsEb%2FgMUVVVQoBxsJUK5%2BA%2B6jx%2Bu%2Bd8Sqxk40m%2FLn0tnN7dYsz3%2Bai0X%2BFumVDg3vm3SS8Np2stYuOp4gLZUyDgls0kgoS1EClYUfF86BVW6xW8ILHwvm%2BCP3sa5zC1XVbjzV%2FZ0Tu%2BlKao7QOUv6iEEI6Yy2RIx53iX0iQCQMaTB12Dm1PKGRLYiJCFT4vE2N3I7%2B8TvSX9HjZpfUmYHjColcPJBjqkAStgT2n%2Bi998rhLnufrNaPsdMB0z75WBYSfIbdkHZiT3qdkyDYMUTh%2FD8sok6QlSva5F70dYO1mgGyhuoWEc%2BfECaIGEyxfjrSrGmbM2tX5%2BFhnlw10M6gcey6%2FP5VRbISZoy2nZ%2BsHizYoIIm8R%2FwdThkpg%2F%2FtJwJrK1vVyWUAbdWxs5iIyueBfWLIVnjLFwsZQLpAp0qW%2BBFvuc4f2TQiudGT7&X-Amz-Signature=9a332dc942a48490ece80a2394d26bea0c70b2872b4a34314b085a0e93d14ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

