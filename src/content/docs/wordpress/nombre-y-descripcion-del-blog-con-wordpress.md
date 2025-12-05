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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIQKTXC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQfhIrADJohUc3mEYBmlJP7kEbAv9gFdt3k6jEZ19dBAiEA5SRK5%2FxSLid3HHht9%2Fb39dlFf9tr5F2k4J%2BLB1WVY30q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB%2FWI2vxAJvYfgMLhCrcA0KnuCYc7d4AsZ7yeoiqhiamkmsS6uEg9AZTAlwO7GfSl2h39jedDsy62T80IzUtNFyb7Zx%2FjyCx0HpvnTcoyzUdyj%2Bdhl0krD7fELpQwPopV5XOmv1uGndL2ifKyxKAue4e%2FwvB96ebFqQuK%2FJj1tcx2%2Bu9ui85uKifC1chGpBk36OXYSQIgyrrrj5cgp6v%2FK2o3mIicFpDXgzEMxLOVCLdtv%2FQcGtkfIL6eck9NvlZ%2F%2B7ivKHFf5%2BS17BD%2BuXwIb%2BOwYaZ9TfP8sbovmwR8%2BlSVkpq5z8cqGUVzbiAhIOXkNsFFxh8ddHI7G09AcUVzSyn0c7IgePgu8dFP5fCg45kCPL7othQgweLPpD6c2Bt9L2huM33M9F0iVQR9l%2Bmihe1IDvC%2FTHrL9o2Ffd%2FMPh9g7gPzC4zskOOlBxz1CnegbEHZTB97x4TRV7BLzb3cjjscD7iYCEXJ%2FI51Ck4knOa6qBd65nk1BejdLi1JF1tlklJuLzwDsnBlaXqve6GCgBTwVRaB9zxPXz1TE5ekdPef6mVAh21xZq5%2BT62%2Bqb9kuPsT1pHk5nnRAmEZK08v%2BRrSGFJwy61cWkfR3gBCHnW%2BrkrpjdMcAsFipUxNWjc0RHatPOl5x%2F8mprHMIvGzckGOqUB%2BQJEvRQH4eNgiBLkbIETDOexziFitBJWSnP9kXA5BfedMwmVypYa6lG1zaOJdsJo%2FbwniGtfi3EhDsEBaM5%2B8sxdSBJ%2FhIvfQhE1Hx9E66Ds%2BZOoJ2vKhsig71Tk9bNh8ZrLlMzE7%2BTELAPbZkoBtGPW8%2BXX3avMX%2FnKELwSbVey%2FGoc9%2B507KDXA8kM6kIUNYCbq5aMkzk9dW9O56B0Zp2nQqWY&X-Amz-Signature=7dfed65be60cda474daeb2c431eeb5d2ab2831b9c55d00270d490b64d01f07f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

