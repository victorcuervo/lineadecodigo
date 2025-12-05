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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFNZDEK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtjPYl%2BVKeX66odZjeh6WQO1vmZQrJniZda06rq4eQpQIgXuovlT0heIKxhAIzGoLqL%2BRDJ5xVjogXfDxcHUyei0Qq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCRwPGBabvnbdaA%2FmyrcA92iQKWaVb7gfhu3x3H64SPNOJCFcTBsQRRGOerIX5w2OJbm6B87xt%2Bk8VxlrzW9vcSY63QQpXH025JU%2BMK%2BqrZ00p%2BHuytdNf6BAy52ukh82wHUeuNJZunE9LdxAnqq7%2FC7HrFZaGIFyKEtg%2BEftxRB5j0Gflvsdc%2BC1wp5LTKoObNQ0ZTZIhhKCYtpmhCOR0ipmIW274gXnu343M%2F03Ue3Luy04Qgj1iusT5nkQev%2BoLOT3ez%2B4LN6dLKS0Tx0MtecFoYIAIpKuS8qUFoiGse0Su%2FyXcFvl%2BZdm143E2WjIdh2YVQQcomK%2BNarJhw8nYPK4MtVZdP4qWvGA%2BTaB02o5B6fnCtZ9bG63Yjv4ipxZXi%2F5LDgF6KpZaKgyPKmKuSB6KP%2B%2FKc%2B3i8Y8UX9PJ8g%2BJ4sys4eQw04GJZ1t5aeJ%2Fji3E1IMs9FKP4OE5QoJuL9W4gioKxf74m1xsqG7MhGqOdHKpRC2mE7cQj%2Fs7RQGsvMHvAni42Os0EiCw5XTFPUtgkTMt1RO9%2BQtHr8%2B46YHZYhLdNcJlcLAncNOCK7d1fWu0OfL3ztnjlOBjq%2BYOQzDJ0ePlW76DekkpJrnalrTMgZDk67wdrFELx1zQn05J5ZFKsxft7nuziDMMqyyckGOqUB0YrhIbpb83l%2Ft0uQw6k9zLp8X13rv%2F9k3vg98%2BAIa3Tpaa2lnFCcxt4TvmNA%2Ft7I2my1yI%2B69ZfDshqHDvziTdvk7Shgt%2BHJBhEnQKJN4TPEW8H6Rv652kzPaA1Es%2BfUgnAlY6B4H2jXP5T%2Fw7Rhdf40Z2GP%2FVmZNV7xieERCaPzZxlaBMTr3Jo%2FObm5GCPfGN7XSgLzolv6Jh4nRx88ZZq8QmVF&X-Amz-Signature=a431ae06e1129cfa095b2438edef4cd3da1baf73d7d609881a27a738f1b0cebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

