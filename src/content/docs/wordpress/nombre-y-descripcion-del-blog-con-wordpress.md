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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRR2GOK6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCEbDlnD%2BrkpJfoyEwBzuTmkePqNbRwblHb3QYFnJfWkwIhAL0COYb7frLN8NW1sBfhqRstQNpQxEFhK8%2F6oMoQyk6mKv8DCDsQABoMNjM3NDIzMTgzODA1IgzqkBSZIfJi9VVF6CAq3ANH9nNxV6TO9Vgz1M62zBJqmZDJiL36x4G9MCLW222ofEYChNWUe23KQ9HLlj20bOKpoC6UCH%2BAU5gEiq7VtWHWU3gUcF2KXE4GZ6y%2FFfkSRodwavICsD2v4KlUL49Ab1%2FMa4%2BDSOJnDXK96DqulAPsfgUqRF3G5ryEuH%2Fm5ulb8hVOFCA2Efo9oarG6a4hDWsmGRicxSp1%2Bu6j5A0y%2FGxT%2FB%2FeF2K6OaoFHvbKqnno7L5llTAf2c4Z%2BFTfDcpp516XUADQc0L9IE5sWeAZC1%2FxMJ8aKbPmWK6oi2xX0rnkkFIYGOvWyaSBS01LZQG%2BOH0jPiXvc0meniENqUMxoxEjOQdB0DCpzyuiUWDToMjYi4DFFfrAlml1cj8gPWjzFyjSMgNmzyA%2BxjQXEuljtGix4ZlieOBxXaZzN%2FWX6iibWQxzd8wG%2FAGXMdw21bva6jvZLH%2F2v5eIHd6enPle0rxY9TlEVUdEDDJHlIH3Gvbh2jXAREhBCzGENcOdbBzYhrXh%2BjgNuevXoK5F9z%2BFDUSEcJIBYtYd1%2BzcNT0ZX%2F1c98XLc006lq9Y8ZGfpXu82Epa1raxcaM%2BHfwiipDIOoetUPwyfDI%2B5jCioc%2FIIyGH%2FwqcqrbiMyCVDqZ%2FJjDg08PJBjqkAZ3C54gOSsu6cWSVaPGNBKYK5zoRT6dJjHlcn2tvo2raVEhv0Q0XLWpsHCB9iP2Zzt9VPuGfdFcB3qBRyPV7h57JS11l2lIfosGc7%2FkU%2FSyO6o49ok9%2Fw8CKmOywR9aNl8mzEzyHwDUW9wfGZgzxGvM%2FQsxJM%2BEj4yPierP71ICx%2Bn3LD9kOxTDkOaKjyRSD0WIfFAt2RJf5xuLas6P43aoxdocl&X-Amz-Signature=cbedc9b5f10571dc7c78aadcaa9ced1e9289db9624b32330cf6c55b6793667ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

