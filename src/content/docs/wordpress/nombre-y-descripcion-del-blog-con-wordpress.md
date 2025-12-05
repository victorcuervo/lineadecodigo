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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6P52Y2W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID65XRdmr4wXawAgtxGYE2qR4XAvcGPhS12WnQ%2B5LTsWAiA6z5NiNegmDdflP8%2FKwsvuNqfH3IdzFkkb64%2BluBrnOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPgBK6niAVXvZc2YTKtwD9i2OQgjV4Bb2bWsR%2B%2Br3%2B7EBnhOO%2F0xoAii0D3jpXAw4uQtTlo8m4IlLV%2FfVPXxqpaO2AN85JiBWs3z2xTWP0qQ8xVv0gH5NicUqWgoiL%2Fe1%2BZXM5rw3ziEqGpAZvw9D3a1fyijZhdfgtLKpJCTCRi5NgBo4EfGX4uNg1oBckK0F355%2B1EvWP24%2Boa0deXogh2NTuE6tudKQ1ZX0FDvCBK%2Fjr5UuD1WvCQeAp%2FRiUsGuvQuF4CGwIBWu7zkj0ulXSMBepeCQgBukoF4N3k%2BWpYLhMYNPNiZLoP6xxak6UBSTntffk5JU4aJnjtOJ%2ByracNSResHkP5T7z%2FaxBEzHQhxlHYLfOTx0d8BSADLtlbtiEa3U%2F86uAYO1oyUTfse1GDAj2OH%2FOXWTr8pY55z1Oka6yJCOnmltp%2BOhRj4D44j6g4PvL4FU873JccfQf5Nxcey3LmGs6%2FVkkbbcAkB5S6H28PecLM2eR1AbiSjtNTm9xZqkVBsE4TaVRiMZ7BtJS8D%2FZaBkpr%2Fvi%2BfuEXsJYWJV0ITNC01rayvsodbOiArDF%2F0lE1x4dBtuq93z0zupV2wYBWI%2BKJx4ufOGPeuYqzWnq4yUnPXYbE9hlNAfHB4wfYxWvkHMoWZ2cvswj%2B%2FLyQY6pgEu9V3JM2%2FNQzarK6n6NXhWMWmDR14v%2BR64p57B%2BmAkyfd14Yrc%2FSOTOY%2F5skAzExT8r%2B2StXXlUeIzg8sqRKPK2%2BGamwcURB%2B66rMH%2BmkLCuGeTzWhk2VmJIkJc2yhXDYX4tmi30Ny8opu6c0SthMsfWnJ2OFZjsnpjLhtRPn5psInZ41mgAkMbVcXMfq4V9SQjNjqEK4tQQCDxuI23QDRiEH8xF54&X-Amz-Signature=d79f8a6791bd9f7fa95d009c4e69ea163cb9502874edef932e3986484cf93e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

