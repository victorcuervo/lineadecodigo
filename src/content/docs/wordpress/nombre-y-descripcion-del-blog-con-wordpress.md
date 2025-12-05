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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPC2GFE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtmUOcD%2BaVgXOh%2FSFVRkOxK2kBtOIyxse9DOxCT63qZAiBO3K1%2BXUan1X6Y%2F8VbfdR7ez87AfUVJLJG22Aw1A9XVSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMkbIVAmSDK5SGZoyEKtwDdM%2Bs1Zb749QPyRtGT7kJ%2FA%2FHD0%2F8RK1DN4Blj7HERzUv%2FFYlfO%2FxS2%2FbvjRM7JXbhHhy0EX0oYcGDW60SbywwMIFgPFZHuT5gp2afB%2FIsEPUAfwIHtVdxu5Eu1IGWboIKt1gV%2BOKHoGBLEnd3poRQBvJg7C3gqWgm6gBat2QxZoeLMr1x2IDInHqGWVzILcifYpikcvVxeyOYaofOCnZ%2BI8QjaM7Iq%2FQpyTUqYhUrasrqcJs7LQiDyd8eSlLl6BLm7jVdcjcvPda5vuKkFsPZuZ8jMbdepnE3UVzTsZAp27QuIZAQgSkrixfW3pZDz6F8N5OJFb8sqX%2BhOGwEnwKNw%2B%2FYFdEy3RIkWXuDeZW0xnGmDypP8cxyAjGsyNAhsz%2FfikIiAwPvc%2B%2Bxw4HtnbzURPWwNRQoQOhvXx3eSTXSo9M8Zf5s2xrfI%2FZODV7F9leNfgrZv5gMVMpI05O6FHV1tfH2vOe%2BGvOkcWnA6WV1nqGzzmw8bV5knNjeUjUo3WW5bGA27axNRKoMG3OmPjUnyI0UxdChQ1DQnY9sOgG%2B7RQ79WiKoS5S1mbTySVfmkYuJLjXxR4l7O7gIk4625mLEMCKCfQy0PU%2FVW4cr%2BXGwE5M60D0Iue6Qp%2BU8Iwl6rJyQY6pgFkm07AWIwrs9ahyyzHD%2FXFUD7WTMFU0V0ttHozrSPXrJ5bgTPl3Bczl%2FMZHbewP3aE%2Buvv9BrhtyVcZgiPp406QZsy5oAcPOqgC5CW6ZEZ9x3woBeHtc%2Bg127qHcrO2bZu%2FkP2ikYke3SCV52ISj06JDw8PYa5XXuiEECkh9XMXirwHjGBH0d1bVHhAo9OZ3QOVni6XdKbdqSVbm6MXWxESB%2F2Frdo&X-Amz-Signature=a3005999368c1d0bc2758d4f7f7ae7b678816edad84386678318cbbb7148ab0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

