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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBM7QQU3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv2ppi38LLI8Qy0wX7uNcMj%2F4OXlZ%2B%2BcMYHd1x6636ygIhALY%2FiQrTS8CFEZZOK1xtVqF8AqkL2IFIJRS172QDh30OKv8DCE8QABoMNjM3NDIzMTgzODA1IgzNjU0uqVpR2h%2FA94oq3AOYvgX%2F1Irl1km1y%2FSEh1dw9szhSst9AMihpmWo4%2B1KZ9ET2JPC4DPIj3B5RBHDkQ7Sp1ppKDPhViNUnN9Hr5YAlCQpzjlqQSxCnyBTX59rYsa5vsS6dKG55c3bgsqSyO6SvTP1uoJjt5VTgSDZ5pAFObBK0TQhTKWT9pFuHySPyxZ8viKDwBXcVkIAonvV4osQO9vx%2BwQoIAs4CuVxjUPEDUJxVt29W1JqIBehUaBiLWigb5IM%2FUoBImgNzXw6fiNVozo%2BL5AqXvzPed7YUCsw68tKMWQdwsqu%2B9%2BfuOTMk99UGQ4g%2BCE5AGH%2BucnBEe49iQS2zMImgklpqPxPY3aW7R1n63zS2GE1jcCf4HtwcfW6GMqGlIl6FRVnmNTEuBKEtN%2BA%2FPOHFdiwY9eELRBtKl1S7Y56CRcRWiKMD5G%2BwRWNWYO%2Bvr36xvncyaIfq%2BB3meWgBJgPK3G5zCDx2ZrZyqoPL64EDYrI3wmDEF9MowvTlIGhJ%2FVyRlptsX8DacjH9UojmAHED8VQMEmykSoPvYkF3nnZ3ekVVUN2v0JqiMxfzBJcfWxn7Xi1YRIudeKQTqK0%2Bd%2BYDuurfbXzOMgghxBY%2BwqBU7F%2BSxekF4fvIa4HQesWOsKlhqdh9zD3i8jJBjqkAe2mjJWCl3s8IHox8F8PgmNQI%2Fbe4HDHp6NQetQ7TkPNS4xjs%2BSzLePCbOTG5XJ2Y4E2jtQrXrrQKYgCR5ZhbL9I0PkZCgtuB5CssM%2BqM2gZxciZaGX%2Be29LQTezCs6udrpOd5J%2BdadrOAsbH%2Fbi7t8JrbpFIBDjyxXGn5cAbBA%2FhtieOhdKo14Rz78WfcIPZGJwdR6AOwKovyZM0kJcROwT%2FjIS&X-Amz-Signature=567e94bdf0f1130f35bf45fd830815d479d0fe5c8ebd539aaeb67356ca71371e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

