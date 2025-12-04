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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRR6TUIV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2BvpkvnQvhDKSEX0lzm10S9eZX3I%2FnRNz9AdKCT4UpgIgCNCVypRevVlKmxwLKEi5ISxg0bBdYkZ3LjpzpVxB3M4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMy97DrP4Go3bdPgNSrcA2uMEEg36WeYowXWFqz1Aiytb8bbPoFC416Cw3HvuD1voPp6Fih53%2BIYHyHruPesX8YwIcu3JqGCCg%2F%2FoiMP46AewcRAkAQSLmtDmUbTnMVCznHvW860iMy%2FAWShT1Twv%2FxkXg4oHfYPvEBeL4wAVQzIBLy3m5B4bQIeSKOdQEljW%2Fxg9IVz%2BDFyp67UR5uXbEiOZddLzEVzuUBaAQdz7Z3PMtaajD9WF60eT9B2JO8vT7sqoi1Xgv3iu32LE8hd9rSQVPgw%2Bx40E8k2CrNCVEYpVE0cjEjYgWxMpWvetfDYWVEM%2BMCpa8r95%2F4%2FtgVCDcfDL%2FAOJA%2BFXcZ3Ro10wROAigLhpNVDPJjhPoAAskFR9Qw1hbjB8ZWVX68To4LVnHRB3B9JJjTPEElwzcvVVh8ws22%2BA4krewDCcEyopOE8foT3k2b1gJjDq0MjSz8nbE%2BaXmMTbK5ulA597HOxHGWIhhOMcC2y9eOT9uRJGmHJH6r09qtRkwsE4E7W%2Be7jh8KpnZdxk%2FWtTQ6KLW8%2FUETthjjMtei0%2FHJINx7cT6XCnDhiPY6sz4umg%2B%2Bgso1HOrCnvjjQWAx1mcY5Rx9fK5KfSKrr28heCL9IOhmLruVpxyq2orFddzyXmTO0MITdxskGOqUBHT3KHmRHkK4osM2BYuImnckW%2FPHo1oA7zLu%2BxR3nQ2Vwje0Hci250wQZayCPaW2sHP3G0GXNegQ5T1JqT1G5iSrYn6Ui8diKPmpsWRNErbfgEJXGLjB74lmThPyNRKNjrbS7nYmdS0CR1HuMhEgxD4VQf1sVJqIDcmn%2Fs6Zk%2FU4FuM12iZVYDhwHVu%2Bkd883spUXOY8Np9gPajo21VXz4f36HU%2F%2B&X-Amz-Signature=74ca7a15158a7f4b24b858068ed2b9370c8e4ce9d9a43abc5062d3e690c361df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

