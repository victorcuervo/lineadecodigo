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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNV2XJR2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTSp%2BDE3kHPQh6Gvl1p3XbMEDTM5h%2BqRl8x%2BqMjy82rAIhAJtwrP0Ymrgx3%2BD3hqFfjPwO6tQ638p0GRC%2B%2BdgGf5x0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxKo%2FIDtO5HcAlGg44q3ANvMqmIlsc83xbILvUfTkEHSNjtgveLfxVSKkVHFXxAWK4r%2BBVjrAEyH8pYb0RiH6gpdzcQMTfscOOD6ueePlyPto8XkM%2Fa96qzfkSI0I0WsYJj8PjnUAz21wvLYQDPs4gp%2FA7Bmup9SBd2a0Ndgx%2FNn72Dv0KJrnZHJUVQo9mtrsWXkA2SchGlP3Xc%2FkPRcJEpKNO%2Fdgsuao0JzLzacwo4nDF9DljlgzLKL7gyvLs%2FKuqE8y6P6mhsvry1RLGsp1wdvphtCitNZVuxavDC1c8BR8uNON504hZufPTCF6Z5jdclNBEnL%2B4PZ%2Bu2IJqckuR6tPCoqi6oIUM4NrOukWsdVujPesq7UfKFcSl6TrFHucMQUPKob3DKuT08lmeK4p1Rsjahexn87uII59FXufYy%2BinHutM8dOmJMCI96%2FB%2B2vshaCDTe5FqvRmyHPyfsNkTUCM6eWk65El3bH2V0MAzWaABcbSszMNYKvF90G6HjNCHB8w6ZIDBF9FmtSS2Yy%2Bg%2B%2BYqBkVBcDutc9n%2FHGxHzh0JDJNgocmnY92iFvGTkkmwxZrElLc0%2FgKgnyAQfjprP%2BRn4GNdDb7LIuJ1oUfsFl7mgA6LcvbmCwfsLwZVNP0oKxSWFOfkneAN4zC%2Fr8nJBjqkAc2JlF7PJ0uuuQT%2B6pHfQtN%2FPIDUspb%2Bx%2BjTroDS08mAvT8n38QqSLs8hXQbKgYhIU23LRe3HPX9W%2F%2FEIAYdCJaFsafK8EQWNo5uABBw7upPwEq55IT0aXjtSf9vfPRNJJPchmMyrF8Ay%2BIkNuMk9GrzdeAmWJs%2F6W9syVrxTj8HQ2ZQdqkcYpCO6TfZVOLTA7auHU9Jvpf8mL%2FR8jiQmL1yjcWX&X-Amz-Signature=c0e653ce892cc8777cb476079f97cc3b37b452c3866b028fc6dea2c187eaaf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

