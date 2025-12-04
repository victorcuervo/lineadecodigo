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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H33PD7M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC2XKDXOnp6jJwiLhLmtsh72HKCq66KmVBCCF35kIQMngIgY644%2BXgsAR5bzVtChZtF%2BBY6%2BrT7%2FBHE7AvsVicgurEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDORoxeGZhnnxOE2Q3yrcA1Vr3hZlWGE1lgi8HPnNFUr67yTXsKniej3PMq%2FGwKoVA08jRK8bgSnEBJoM4AWKZfIugf9S4Tp%2Fbm4STTE09bigtQgWhQzIxaYeziExSkGz%2Bw%2B9340Xar8q0isiXFudV%2BbvdpHY%2Bfq2blLbYsD7wHoQ6nM7Q8fEP5x56BwWpcxfwYDnVYT1uHZdQ1A4VC4ztvnAOVWqT%2FGZKfQRCuGCsPXbw0Z1X%2BqSO92Elp3Nl%2BX4s%2B0JCH2TB2kxkbruBgs0zevaDwmCQbQXWrNDxwRP%2FQtCPnHytjz683mH6IK2V0s%2Fa%2B5PRV9Q32uNcmlGOotMvK8ydux2kblrud%2FovxAKYaINOHWrOsb0x4lY2GL8YVfLCWwKv1MMDAX9fFkBl3feWO%2BCoxTJj55iDyUE5Q%2B7%2Bm1cfgmzvhv40%2BHuN02y7TKxP1o0uN0Zx7yegWLTrI2PgaNfQPPHbk5%2FpOp2vymLIVRijqaPEeSJj8mOl%2BKSHOKvD%2FEWlUm%2FP5Iw9%2Fv1t5Y8oCpGKH%2FknNzTMu%2BaDPTXRhDh54ULjCbnWk5zHXyHhhciiD%2FZ4KdpLMg6qyzbM6%2FRxyKPsmplk5xx6Y6q8vDiJ%2Frw%2F0OYVFv9FvBPDJ4myBxbXZZ4jSemw02cAZF4MLrKxckGOqUB3vvc8gwTVGYysEtipMQ2eRkN3HsSStCk9D66Jzn%2FX41s0GvkHb2JgfXkQ137b00YILx2DwCOkz5fzmB1qYMaMc9IricFfWCoywY7bpenNa0WO7AqSzGGsoWc29rB2kVxcjA%2Fnh63sHhLac98wIe9TmXW3S%2FwO9e1fjA4xrV4AtprVbvaYnUpJDnDzQ3l07bY9IGmQpvCVCX8Ha1gomuiDu72CVmT&X-Amz-Signature=2360da6610a7de5991d4096048302d3b30c8b3cb1cf810df83cb4b613c6a6694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

