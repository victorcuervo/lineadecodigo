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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653C63F4D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtSym9%2Fi%2FwaAobZs2UAVJ%2BcLsJxCzWawka9Dtog6tVDwIgPPTz47B5PN5eqwGKLgvZ3GTFZGfMG4PACXwRUBvu8wIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKdr8ahSzvZYAp728SrcA2uU066t9%2F36427suvuA6If3gFg3JmA6YoqpRymUHMFh8wvYrX%2BpY9Sauf8pDY5TWwW9otiiM1Ob6m7ls%2Bc%2BX8RhGOqY%2B2N2cwOuq12sEzmIrCbZIomFEVwdHfBal33QWZeI6zwu0PHrnh%2FQPv5dki%2B4sll3A9nmRaCM7lZlWJ88famGJ%2Bebl%2BKRjbvZu3e8fon7399gEKIiXalp8FHDeA6o%2BE562ew9PAVN3nPH%2F%2BiMx2DgDpr8wsfLSvrp66yVWSDLpnY%2FiLCFf3vLHdntY9cs3sIb7QeEdD9qcxKJq%2BHN08D4Cx7zBi6amildakKmN7mxKnB0C19YCEzcjLZ54lr6FdLQ%2B0A7%2B9t5B1mHI8Lf3R5gNH4A4G6vm2rWGBKLXGP9lLAs4Hsfgi91rY9Ym7IO0pmnQ%2BxkaHPe%2FlBh%2BP7kThFr0TZQDfH%2BSfbb5j702AlU34%2BQUi%2Fr9HjBXap%2FiJ88k%2Fmaij0nBFeoJE05oc13gJdEk1Rlo9jY8FlU6dyFIAn7h4bkvrbKvar1s6yaDyjR3ZqGMza4zJTQBqUkgN2n%2Fxpzgv6C%2FjBAjUdmG7v6%2FcKbgEkowKJvKFW5FzRDJvuadFg3wQkttsOuPHFCIHwRTJRfU4UPNZtQRCQfMKCMyMkGOqUBNYQEWxlVfcQPAsV5D4j2HcU9fOHNUKzlQqsS9buteyvySiFc7ZBjFlG0IbFeNgTWgGknQK7VStw5P6D0ygvoGBbaexqN4%2Fl%2BjRIIXnB2wA0lI0cd5QPAmIU1bW6wTkleYomGgW550qat4hOermWCwmERarOjHQAP6%2Bq0fIJB5ELKbXXJEu%2B%2BCweY7caSjsgfFuxj%2Fyywz1KH1vHVsBul0QUFZc%2Bm&X-Amz-Signature=ba7f9e4c617114b5e2d075cf93cf9c9dd9db11a4e605c1ffc097d2e6ec227952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

