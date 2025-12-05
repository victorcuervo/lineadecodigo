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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MYYTGWC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdQSJv%2BoUf6YjgiQS6yLgejgEuuZy9%2F%2BEpFRdf8dsEwIgOy80IZt16J4JEt%2BTkb%2BlkZixNRcXx8L15%2Br66cSV71Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOhg7uS%2BEvRxqYcYvyrcA%2BElRu2f%2B%2FSh2%2Bdmhyspr3X9IXOkx9UhgyI5EFUB7XN0xTVIHKXtHfIeAG1%2BWxGWzSKH100owqdUXi%2FCFgO1NaVbVx%2B6Pt4WOqNBL%2FLr4VBtj1%2Bat2aerK0s%2B376ZgOkp4I%2F%2BI4YZIX833A6TaYeT7rKA%2Bj1iPLLJWCC6YxeEWOkBKaNgy9s2YybzYxCGUvA4NJHOtFuJLr7VEn6y%2BftXqwQS%2FIfc0nPv9D4l9Lxq7HrHDB7Y1mlk3SvTpEPtUOX8tKxq5hL7QN0XUfUrXpA3Ncwo9QgVRAdwuHFt2Kl23l%2FVk4pMRl7qajZMzZExcnVlv9dqSfXUQq4fKIh3nDh2bpM%2F8ysdLECS0HyaWHCB0j14I6%2F6be30j1YGVb7Of71w72jaqbhp3vPWATTtNf13ri4CjK2f5gaHiWvvTdK0DXBb%2BpPueoXG7zmo1LhQlbQCIrMbxyPElEbJtQVps%2B4kDv8IVVuYKcurgWO8Pc07Gl5lsKsD4SRUQD06HyjqRV4UQwDtNke4YERJvoBnZGTBonl%2FlHgMmbO926igaALIXzgvY6bgbcOcJra762iD1xY8ExICXeqOfh%2BDSGu0Nh%2F%2FVKAQnESOWE30hSOlzMECsKjo1sSh1SBok1i4cSqMO%2FKy8kGOqUBP3Z%2FZUrG%2F3Ju%2FKTXqlpjdMif2HLKn2x0je6OgTdjT%2BRXorXSf1Gvbdac5hWYXY9CP84kh9X8FBwqBnNKUQAwtb%2FBRQi1WH2Rjc9PFedBIvNRSDLVRJpUQz9ep5DPvp8%2BdRX4eFXXDoXeYBCE8Gupe4LyRjghJ9uNcFbgKvTIehraJDId6%2FY20X1pj17wZLssNXRzjvp0%2Fwbr4wWTmYOjKPKcaa0q&X-Amz-Signature=4fce6d67f5124577818ae7911c6c3f04d823eb4a8cafadd1d8cd497a144b3933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

