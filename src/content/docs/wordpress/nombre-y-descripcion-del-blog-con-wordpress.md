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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKH4JBS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmM52oVV4gtSBwLPW7ZITDRBYifgiG6P7fcKI2%2B1%2FstAiEAnwJHFoIL5EJpl0YkeD5v0iesQWqNZ1ZgAhdb64cFQQwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJV%2Fi96%2FOfFKQqUEgyrcA8g%2F8cmVchrrHUzgo2fFXbiU3EsW2RTPsQmYZQ%2F0Y2B11zf0lVJOdt4xeueTR8BU0fbg6mbidF6JxcbSzxRvJgFwaogwjub9FwNk9V%2FuN6NTFba%2BQqTUh2n3GHS%2FKp%2FaCSckyYfwG1HeZbu3p88w%2FYVnWKR4zmXLWb9XyfFJdqdhIHLTvln2ExzRdvnT%2B%2F%2Bz0xxLP6MqhNTZgpe6hp7JBt1vp%2FQLSUAgPlEhkd1hZqMebDaChytlXmqLVNsxJxquWs1CN21NTBUIuIpWYcLwUBbU021wDZQVzVBIjXnWzcq4AnzQaB%2Bb0dlPeW5j0gOPssTkUKgSLN65bb4VKb%2BMTYeRH%2B4Lfxeq%2BtTPPOto8DuIr2wJ4tfYteDf%2FFKUA8tr0nQigZzUPuwdvMKri6wL4r14KO0LI%2FMf6%2FcRRp%2BWkWF6jhiqv4bgHU0GGMlGDGW112FgZl0hD2svRMXJ8%2FSDP6Vw9%2FQjB4Y0eHXkOJ6L5yDz%2Fzu3AZrSwZnKnw9pVPymth3b1gXG4r3WsUFEcim1UftpVpEfya8dW7WYNkjPn1gig1bbf0d3BbG18rpCCXtw3%2BYedu7uM1Tjv4x2CE%2FOViy2kRlmP%2FCsSKSw9I1D08yrWCgm1BinKP3PAdSiMKTrz8kGOqUBoI1n7vMDIKc9FFaMMYYpKE4na3JesQxDWOgwGmg3ED04ezGDvRV02YjYlKFivhdzhna0VuBLJo%2BHZ7S%2BtgqyzCcH%2BzHQxleHXB%2FsxsGILpziZAeO%2F0wmwAwyqBMjqrMvdj87ruJXZ6EREe605eg8KHsIZBSItkZ7KqHqISN7V51bd27M9%2Bg0fqaCB5Vc6dzWUkcweU4rXukGH49WeBeM91vjvZGN&X-Amz-Signature=0a2f2dea4159cedeb3e1ac3593cfeec6392a9d8c4264b531a75900a2fb3c86b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

