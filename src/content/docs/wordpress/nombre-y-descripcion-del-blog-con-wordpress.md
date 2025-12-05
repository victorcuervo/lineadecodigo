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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQRYQWR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7jjGWthy3qToWBsTAGz5ozOUeQUeangqxWoCPt%2BlGmAiEA0aT3korhAVJnOvH0QK0mk1%2B71k%2BQJqGNBkA1M1aTarIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG%2Fg0Bs8tPn%2FbNiHHCrcA2wV2U%2Fj%2FttzDiwPphD6Z4DwDxRpALV%2BreeSUWIHfaqLTAbPF5e6IB%2F366HXi8DaCE7a%2FUf4dQJ3iBC0oxb3BLn9wzShRoE%2BwQd6%2FLV41ET3A36DQX2xnk6jkL%2Fjz6mZfVH2l3XcAFHR%2FrpSf%2Fifd1aSHiqtnJVT7iO15qQfJrqmdPwur0BoCiNjQWnrvYvhOAsqKxSVxG16QZunGur7WyZqciugvFt4yTkuT0U%2F7Jnh%2FDH9Ck87dobezxKcL5sSWCzSwtS9j7yiymm6UZqZ0G2Cva6M%2B6dUkpAiMGjwv9XsdgsiUXvPFbbAnmRQ3ElTL7WcUzGl5UbzdWCECtisei25fQN0Ij9j%2BSAT4pVNWacmD8WlEJR5HSo3WbRCcMoycB7J0DirlO%2BuBiX%2BO9vr%2BWgTEV8E6WHCryaE5yJYTDZtMWOHw2%2FwR0T1PHQlgBsd2LuSUG%2FJntHzBDM3jP%2FaKG3WdgYuXBv3xOQOaepAW4tuAMLuyxmx1Bq5LSdnRJ1K7lOr4xSZxv%2FkN0b7fFzOuU3J1mYFGgx7AmbcKFDelBWubS6Cxz5446KjvVQkTybr878mJVgB%2BmsRlwavh7CsyCzs6%2FKFLsiJ2hJ2%2FnSa8WMXizdGSqvV6O7%2BqjvHMN6MyMkGOqUBdXNOF11ysPvyx7X5iGJIuLRh%2FdymFGGYrHRdfGTamGftryCPF8y58Q7erqYuXbKRRMCRXlgDGwCGe%2B1ocudNuwFEuuImmtqBVzMvGmbFBe%2B752koX3h%2FhAHi%2BqQBK6iTU65pFkHDDtY%2F6mifj866mIq%2FIBdYbQ2udmV2SPPcEmm3FYmYVoxYbnGUZYIv6dnJyKS%2BtImLa2POaM8v5eCoe%2FkpX97d&X-Amz-Signature=17fd3aa45f5d948a7d2bfa3f5440c4638b64bd1bc58f62152cb2c7d26c5cfe15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

