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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBGKKDG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFXOPld8N%2FHfFc2z4vcuLv4kO0W3lsmE%2Fy2t1fr0OS4AIhAKPXbgPSYHSd9ZtdPOJv5rYaWDHVefasw%2Bpl3xUYdM33Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwLcHbFw%2FKl4WXCX%2B4q3ANgW3PkuYnjrjittK56AKl1UXZcxvh3YFRDLVNqMjHH1PoR2bLrs0IKnZtxxrX7sJa%2BWU8WWcgHwzMa8jryfsFytU2xLWg%2FoiayH7CGcfzRvyHZobZeIJTneG%2F%2FqKmCfvFWOzbgb%2B4t8KzH2tWxJ1N2KTFRS1hsyvuivjmN4Xuxeheo%2BpUkb%2B6V7GBPF1g6MNLy6nXNFef%2FE3cG8MSedjfL4SvtANSManbQnRjoKWbM8Lf3BFw4NvU5V0YOOYVHrmGrcSCEl9VjgboKbAVjZ9OhIwynxvBBPqH7EN7SaDUHtaZMZdKKZ5uerggsDwkmB2Ls4ra%2Ffrwj8u1XXjxmZAbwo%2BBv7CYqErRaDr5oXYQzZ%2Bk41D77k7n%2FYTBhgIZiR47O9%2FXQjyJ0LeBGpXdah8V3H%2FKedAp7%2Fn0rbk8XFyZWdvryWiCrNcYTgW2kElSwb%2FgdaU9KTPAOhFW3B1RrFyJZIfwVl0AO6vSFcdrcOvXe6PmnrgRqMp1HGoSeT0tAVRXCMO%2FDfqdaD%2FNDXHaK9HYr4z7dsp6S7psAZ0g5HOC6BgNIo0mukQS24fB3rroKcn8OTM8vq3CFWQD2ZEL6zXGV36%2B3JctyLa8Qa0uAAb72dJWkGInOSFjd9rOj8TCAns%2FJBjqkAbKLABBxy%2B%2BszTcWI8dpP9FulF0xUUm0RchkiTGLgIYxMt4Daup16hk%2BrLWnVygFacZM0RZQujleggovjmqrZpExcsP5sM2BWN%2BHOLjMGo6XkZPBtA7R7U%2Fb4zlORKkjPyd%2F0PUhrnCB%2B81Ez4EFLs87i680YsPy9SVeVeEeeiWibtaIYeyG37eDtlBK%2BJd7s%2FaMzjYAmL25ucZOSoF4NNrIIdO6&X-Amz-Signature=7566d53532eb63074f77e3b6019c0e20d2020889e32676b74006be2fef3063b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

