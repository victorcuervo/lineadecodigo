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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIQ5M2E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZW%2BhfkrOg%2FS1ErG5QGyiLzSsFsNiauWHoTAcgliKgzQIhAKxCrhTG0qiDYgs7W8Axg2u6tv90JHZaw%2BoTsS9VFBJbKv8DCGAQABoMNjM3NDIzMTgzODA1IgxQ8ja3ivvlblK%2FSzoq3AOMbrNxvyowG8sChbUtqutA5t5iC%2Fa8lCWKwhvRApRmccgDGwNmhHayV4T7U8m5NEVvGc7jvr%2BiuimYvNb8ibP8EF7M08vuLIn11iuWrE8N3Z0lKTQWBOxKy2XmuisNq%2BUS4D94f2%2B8%2BoXBnI3OZyN6A7%2BJXTrjfeIdlCV%2BfmmeCNXkTJMonMam%2FqXw9gXOuogbxO%2ByB%2BVq5hQp70fqwBQ%2FJ9%2B6BTRAGNjq7KZV9wsLV9JCgXEynga6iTQ4ms%2FaXMZ6lPJq4KXJOJc0mFWR9Z2ksalA5xBKwJrK2nBF6hJA53BjsS57wsImIH%2BR8hxwec5rkYyRIB1l7b%2BUv%2BcGEHB%2FWFJW0CpdWbs6otLl%2FsdL7IJLqbeVGqjyMnsJ5Oof7PaJAL%2BaAE1I%2FudvGdkMKnr0heM1t4yjozWYnTMQo2sprKKyscGmgVy9jSrTyMJZQVIpcwiR4f%2ByzDZVA3bmhss2Gm5Gaxr%2B35S4M%2BKChIOzitJIujY0NkYJ0HgFBCYlDE4q2vt75EZvpcpGlfxVTULIZy2YdH%2BLGvEccWw68PPiasBjO2TvT8M1e8%2B1tB7Ift2d2yQIQ7OAnOdkN%2FXOD%2FCRlwbCNQOlvegZqIBbcsxX%2FVZfDqG4bInLyVYGXDC%2F58vJBjqkAUlpU7YVbUo%2FKje%2B5Z9dUE4af83meYYWI%2F1%2FJbXtg3vNWADG64Z90JcAiP%2F1Cz%2BvIxtZmTEqTQPTmJiH2O0iXhL3jb0%2F9SeEc%2Fukq3qYCp6myxOKO990L4SrLDRUpMF2BJZSFI8vwUvQX6ih2mQsbiZx%2B5s84n%2ByIT9Wy3cNAaEkKTy1ud%2Blf70%2FHTivYwbtX04P4v16eCK7RpLI%2FOHC%2Bg5eQVqZ&X-Amz-Signature=deecbac62406481358d112cf5ea1e55e6d39fdc8219c485c3057bc02cc7abac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

