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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF45F2D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIQDYOnuD6UwjIpncJAdyfs9E8dR8pLeeM63lbuQdm8h3OgIfOiefsgE1EhOmsJH3K7YA4HgE%2FO5JSypXvdoJ5rNb%2BSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIME3zntSBPT1gjc42eKtwDg%2Bzf5jch%2FiDnVwLDLAvf3ez8k6jrUBVsyVPuboLd04QlZEIeuMlpu%2BQoZm56Rz9f5Qr8cEdkxTkry2%2FoR9Ksl5ER4OEkg9yueVKxQAQHuMDY16t3Vcp5kpO8oprA3UnC8SKnXFimyWdABjOxtfQp4oSbzgwLsIx7Mf1l7uTt0ZzY%2BkXQXrmV5GGfbFuM5NSrNZQE0mHfiQLNAuZ3omE750DjRdIgMeY5CgTXuIp4NNGIhw2dV7GFV%2FIl40G8Ubvy8ieqVzZJ9ZxZyzxmjNOYd1ZQE8r7BKMoCSiIUUtXo7h0azbaBFVkZ28XO0CWFtdq2NcjspETKC%2Bh%2B3F%2Fl4tsT%2Fu9DOtDWoYBy6g24rA4PbO6J3X3r8i9fTVXK9jj0BefPGIJrk3JNwgYKJu49X5gFOlPxJmLxjDElp85p6wixqZv3iyB9ZXlq1NSNX2cyp5AAEo6%2FDVPsWbS%2BRSWoTUYn00gFdHO1F5FEoZJxu%2FGiXP3DBaoEE16h%2BExbFuJ%2Fj1WjQL27ttRSo%2FkzMlbFHg6Hu%2Bba1J32T5LXJb76g0R5LMe9qJMAfcKcjM3kTjmTzRTPrdf4icQO7mBMtQChxF8qYEWCGLGgopy9Om40GRugLwq0SP4fEI8TE8GPjgwoq7EyQY6pgFNmK34xtcLWuSQYa2jBb48UREdn%2BUT5QP87w0I9OPZNSmeMWptDkVO9Iwt9VmIFJQT26TFJ%2BnKtFKPINyyOKEC3cD8jWs6DDTLpVkLQ%2BC6ZNUB98xYJN0FveFe7nRaOLNdBafr1ps%2BAGNnaOuszN%2BsdNNeUXsaRjW1l0KyZC6zeHeJEwj40GI6K7nLNGOKgS8KChyRsW8pmy2E7usI5vU9p9nsjn8E&X-Amz-Signature=6efcd0e6e885f3e50dcd00ce27128350ceff43b33bd9c54d1fde3522a1b7abf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

