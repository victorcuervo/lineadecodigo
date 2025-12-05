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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKST7KNE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0OGoRwavZSLzXpt%2F%2BGffwVDESEgVF5T5mzrV9q9z7AIgK5ZKaoJH1QBNps4TR580z5QepluFbZhxXvAXnyKuMmwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOXl%2Bh4Y1%2B7S7%2FNZQyrcA1fJwlDb6SvCrde7AOb7OTdO5lvSfpcBE9G0OVrjuFBclIAERVgTb25Tb%2B8aJlw4%2BxNQAdWeDEeJ3v5Hn7eHBuO%2Ba6JrCNYJR6jPCieQ%2B0KtHdVo%2B4%2BY1nBAAx%2BxZ9bGHK3T5sd3DeF%2FhqLyRCJ7b1A%2FrqNwUplcgW2KTcz%2BfdmFVlUuwCr6Y3kOE5BL5WYT6JQqyfndQswIz8S8b2IhX%2BrD%2Fw5%2BsevJ9fQvRBef4%2BgMzONV14bqEm7gcmKGcHK1okeHjTWmbR3CLBBOqcaqrcbCYfYXSn9hox93VFi5SkFx23aSe9n0I7Wo%2B2nOk5YK19y0MQAnhukAqq88ytaMXW1qmRVw9DzrTVAj9sjNjITXhwndbbIwk2Ghnoh9mhNQaQ%2BFFLHSfF8r1T74m4LacC%2Bp81haRloxFzWj7CUmbgEjgn7GE3pNp65aZVzo%2FQ9ThNRsC1f0IZcsMthNjrjOz%2FnBQ%2FivpYHsyTucBEWc6LpmkK7017yanSyLZOXSvGGW871DGsgh4h%2F5ZvwEUqDabwYfiAiEVFD6XykxzJlIE1oT2pJd3XaUNrYC3mE1EQnoMYTaXsa4gvCeBGAHCoY6I%2Bfb80DFTwQm9sSMRLJvVreE8kZtRK2SjhPNJhQ0MO%2F8y8kGOqUBYOzD1CfjbE5yfbgxQVK2Ws0sN1V01Tqd3K6rxVa11ZvL7u3Y7ui56LhJKxcJAQipNW1rZXpVbvRyiorjcnkhLKrNgiut9ZKXGilfUTuPOxdLJVxmMjqJULgkQaj928HcoiNDBj6sgKohBFRTkkuWDi%2B%2BDq1nqSkDLYFf6jHFYK%2Fqu1%2BC7w7%2Fz7XrKMg1HHA50An41QFylr%2FGKrHzer62utW63dDg&X-Amz-Signature=a59e78920a872e7d53df08e234e8f6b0484595372b3b3bc34c276f74e44d1c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

