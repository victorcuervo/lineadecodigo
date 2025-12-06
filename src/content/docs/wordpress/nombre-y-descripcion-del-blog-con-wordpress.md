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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBB26SM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXl3hQv4SsRy3fFmw%2BKqn2Ixcx4tcG44ZzXFpiG%2BrtMAiEAixoZSghWcTLQyBbdeWXCRJYJFjIR52otaxTw8qD6Yt0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHuJUyA%2Bi9HArY9zCCrcA4DvKP4Bj8%2FbzxL9vDrPFROngOLpFeYf8agRvFxfvo4gPS424LJxyZ1wEXAai%2F4Z7aiGui73B4XGLIEfgp7vn4yc5JxxAwKV9txISpmS8SGXgJ%2BpM8eAmZBKOvlPyxzec4E8c9PkKosUlnXev%2FuzrlsvnIH9p6eFlL4eMf9aK9Cfr0iU1UEEX6zr59k9oEPuncnwx4I1LR6GI4pvTfKNGC7hoCpjNpW2SKv5KY97gaYaE%2FXPL1WxIP3Q5WsgEcqODlUho3dj3mZ89pvylbR%2FKKam5YdyXXVANmGmxpNf4ZJzsVMdAhXDO%2FVWVA3HndT9AGbyTgVM78iPUU3MbYKfKDAVx3IfoSa4KeXnS0dt9bYoEAXuR0psm7r2Q2%2B%2ByN0OMFroWQAEXa2jcH6ixN5zBykmJ05a5UoXyubG0k%2B8rMmKi%2Br5koZ8RrD%2BHb%2F9XCo8W1a5%2B%2BYzOaNNYsNbv71bQ1WkVPRqIq3k41FCP7Bxw9dJJSGniyE5nEYNj0se9Hi5bN5NW0yw7A7%2FYNSnRJaLosx1n3uy7Zv1fbKs8ZIuMsdxYyD0pc02PX4artG8rqbVe2CS0L%2BqOGqmPwu3QzWBQfMbFZF1%2FbuDA3k%2Fr1w5Bi6BC5NRN%2FBkcBkrLRapMIvT0skGOqUBLmtspI34HiRTaPQaviKmSF%2BxEG3U%2BFv21JOur7C1%2FCgWjY2k43GtnlKlpkK3CmrrbatPI4kEh5HWBMHdN8SZPSmW%2Fu4FTaNhHeomzG8Rb4fm11La%2FNFM4bWlc3OKqkXVV1ufJdjAiN1ve6pmpzCy66Y%2FbWwbaOBQ6qGRfJ%2FK4b16ROcEkWNtrDZTpdjC8TfV5XE%2BAafdIxrmY5NKkdjAOXlGnwj7&X-Amz-Signature=0dc40b647101cb6e7026df0b4b9b2f586ddcb7c1e6d7f938b08563a83ddadf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

