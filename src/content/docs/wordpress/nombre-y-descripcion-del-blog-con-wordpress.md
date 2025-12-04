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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZLE6Y5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC8p6bpsh0%2BVpaykucP9B8ZhcosHbRETmC4CojEQnjYcQIhALzfRSHGtZzAJNU8OsM9LHid%2F0ebsRGdcALLaK4M%2FZaqKv8DCDsQABoMNjM3NDIzMTgzODA1IgxMNYgYWzIG9mbZaWsq3APPT%2BRZy3OP2qGfnhQFyenBcmGlsldhUhI3M3qGilrylHv%2BXIxtSCqD4vFISZFqanW4nxPKhFfaq3G7ti9mIvtXfXTTDjo4yG5CKeZcAIG8PmcsBCAdbnHps6CTbtetO2UQ2yr4rYR6CCHIVmDe8KywjU6sWZT6VdWFb79PZ2dmfggkQ8OIaZMIfOeHd3XyJ%2BBUZqZ%2FehBPglp%2BXoU0tTjro%2BgTafvdN%2Buic3sYt%2FtKpshisixLzVnqJUXfTaYjxfvrFYJ2CPyZiuFPW%2BJGNjrtObzlnjYi8eWD3uDs8haKNrJC4XByh2UfBzhStWeUpm3Q%2F%2FCslPPc%2B8%2F8aI3R82SbgJSjMzTXpxh1rvH1dhh59g9FV%2FC%2Bxs9mcLw01UOFzgmMwKFmr5njpvDj3f15bJtxLwnFTTld1GpRKDiGEhHUlNgwRyde0an81BGmwFa1JW%2Fmmf5v1LZ21%2FSbC6Q%2BJDvT7WZv0fW%2F6OTmZK2rspBBZDkat8XG2wHQsuNwaJq%2FCLShyZwoKex4IV3xDCAPflMyXPW6RL%2FduCZznKp4y0uT8fv%2BuB1Xhh8mkij2TaeEVQgC9FxXpBcez2HLUotgF%2FJPHmf53%2Fzmfcm4gUst0JDd0TzrsjAOG%2BdIX2lh2zCH1cPJBjqkAXvXm5s04Ftxvj%2BRmOqLwQYjsw5Fac%2Fz1hM73yQJxqlUzvIBmjGe%2Fyx9nHEKXBd72S0Jta7u07XtU9rV6ugCK2HHdWaLcshp1u0sovJTRti47OiYRYJnZ%2BoHIa52ypY3BORmkOh9ONLj9Y%2BMq2Y0jgy2z7xo9SV2G5x9SP2gq7pj4IcjLxNg6I9O0mLCAQM2174nXTH2%2B9n%2B%2B63oyUHRjUi2J19q&X-Amz-Signature=65d4e768cf4b48ccaa2ecedcffc6385b1d0a7c9d46be5a02ca09fa176c5cc011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

