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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U35IU5H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYnXgqWnCAXiIvUshJFXWZ49yhH97V8qcM%2FNxq2gnX9AiEAzL%2F1zTHVtQnIwJVeBVLyaq%2BNZlk%2BrcXZ%2B%2FVCXarIb6oq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGPIi%2BsIBtGjf%2B0ZSCrcA3kPkXRxbbATce5bqp4eM7GzJaeEzbpp62%2FgcPncY1J5EOUzLQn5NRz%2Bvt6BV1%2Bk3mB54cZBneoydhD7LlsUJ86iBq%2BK%2Fka3skxepDOZ%2F9C2AU2n1GuOAWhYCmtFEImoxNaANCe0xeBR83LrGUuLiQCmt59V5M7Db%2FXdXEB%2B2%2FQ7Eyb08TGwegfo3CiC9gBUKi5ILmnNs4ybvDelO5JtpVaxPvlszxKjG757PCNDb4BGcb%2BMqbBf9pLM%2FdzQ7%2BiyeK7oJE%2F8nkN4J0wNc0XT3tlC7wINyZzIk9ho%2FJZPVNRWnXe2OcatpXdkVoXGPzioqRqqX3b12y6Zk30aLN9RQxDwPK2S%2BPw2gNKJ03M5rIHVJW6Lsf5UUnqA3s9NDXYcjNORXY3X4RE3hIyIqJ%2BT1xLZTbVV6Y3Qoz9bGNLt3PH0layU4Ny82WfiGas9gvEnlsAV0snlwVXL2Q3%2FD3ImG4K9q4YpynVG%2BPKzRjGsuBbcw17aiEBgWIsbrmYmghhZcJ6iKCYNSyIydsQs9KWhD23cYoDULvGOd%2Fmk2xsWLs9dYLMcCwUSIDrDndJUb5uT2IlBVBcjdUNCPRKkDY5RLVcaFx0XHhI%2FhlGVv7pn2uV6C7Mjhm5lj6%2FitsGYMKXRyskGOqUB5Ac3JZyM3uPvJOYbGcqRW5a0cgGUc6Db6WXk7xJ0KXHgXHN%2BJwNSB0YpHg5wC4BmeEiMGwcV1%2BBZK4lfUWk%2F9Ya09ArTDUu5VML1vGmpN1pRcOFTKBrbvMWjypMfIduVoIisg1soAqECJgBg3mxFRc92u4xQ%2FvMzxHjciRBqShw9%2Fz3ocoMbh2TdvW52q0%2FrMEYLYdMIKQvwybLqff53qk8HMDYg&X-Amz-Signature=f34fe92de8e84d35e7e2079230bff1396bdf35fc3877aa8df841b5b7fbf2c173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

