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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLTRSYH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJFMEMCHxj%2F9HncQ8%2FpXD9iuxemfXZLWblpdD8XJzmy%2FRImxXYCIDhc0jHpG8n%2FoNxpGdpPEC7kFTfQj2jIP0UgXTSvHN7JKv8DCDkQABoMNjM3NDIzMTgzODA1IgzRQ1FzKZRoPovRlVwq3APx3KqhSMGRY6MFeQba66%2FzLyO5KGMERd8EOMH2HnJ73npkJ9WZ7QKWZN7MZD4eGYJu6T%2FSvNSRCUOV6edZ6ap3UyYZWCrxkrWjRrYQyIG0N1fBeOHPmK7I7YkNM%2F7OcCsz1p2eT3P5H396smIIYu%2FvZP%2BbqDewOs%2FQkAXUpjqTD7Im4%2BKY4YFSGYnwKD30HYrcLfeqA3ozn%2BoWwpqZkYMeMRm9xz6bpPw2hA%2By8gLZ%2BQ4MqVMyH89ds8E1M%2FPU4qHpfFHIV6xRrLxS96eJ7lfDfRGKhTAruyumU02eCLbPLJEjDzHPQbkQk5wV%2BkdSlgOL54DtU5Ja6S9mR5JnL2Ed%2FHHm1Gj32%2FKu6WxB49FyXOg%2FmyxH6PIeiN7jCp16MKWIcGFCCmfxNup9DO%2Bs%2B6DOL1ViGAZ2%2FcCMuTcWhhmN3Cam7VSDW9QqG3I%2FozCj%2FAK2y%2Btgsv8KtDD3Sxd6Pch9C6YN%2BqKsNfCumit7tV4UAfjCy45FTtTv%2F9xn7cOR33N5tMIu8feFJlDg1Uqd7%2BSx3SuVTUjpNmVCSdoLInN9uz1vcyL4JgJgE1stE134r7hDLFN14Jj6oWtzv0hO7unq%2B9thPZXaEVFfjg7ht%2F5pWXuHj4s%2BXAYHLRHHjzDTlcPJBjqnAa6uEKMMVkRmQWJ%2FBilKfNdbWbj7hKyPpxWcq%2FDQvgSE8c3%2FKBy9jsW4vMYRcJhd%2FMesKqt%2FcxLilxAUyz68V07vaRE2Sxc%2B62kBAk1DjZrGReU%2Ftb%2BJXXZL5um22PqU9tfT3qJG9LpxwZObIa%2BMoaVUtEhl%2F%2FUGqE28MXSggCe2BtJ%2BQupS%2BXT1qfCU0oWJfm8T7YtAmKf%2BNhZnw1scGkuiPK%2FnV2mT&X-Amz-Signature=8996076fc90ae1df2777d54d2309e61fa8693b5031bfddae8ee1b0b7b8e313a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

