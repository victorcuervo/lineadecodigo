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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGQBRXC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIA6NNkQ9qjz%2BNc0DV0G9ceCDAZLSOfHO%2FlL8BO9gXhIJAiEAn1TyFsVzjz1wAOd37FLRBeNaP7xkP0C7CMLhTSyl31Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCDe352WhBHr4CrzfSrcA2F8qckeeI35zpol%2BPhPxE9tvMCE2h0LLbepy1Cl9TuewS2pCS32W%2Fede2DX0MyQxh3Fp1mhcV5wW3uLhyoTZqxurmFk47GfGUypMpFKCaWbDulIYzXzfEZrCXPVUJiNpEPKInKHfThRiUN2kJ6KwciA8drMZxCenDk57py3eKra6y%2BQRcK%2FwqZNBJadcUE6qzruES3qD09%2B4L%2BjKJTgdz6T7mQ6J36iDzz9B2A49TS2J%2F690PJKnSLn5KED40W42KNtGgPcUSZ%2FXJ89%2FAvq6QnMZSlkC2PKZMuvFqjvy1SW9Dx5IQzBS%2BPawcK1Ya5E8TRuhRgir54BGr3RdjEPxOX%2BZ5JN%2Ft45nK104W4U2m%2FV0VAkBjVkWYICAAEOxaaW0NSfB3qJ%2FVmGoy%2B7cBGdie%2BHaJ7dsxhOuTUEOJllkVjJKV6uV9jU5cQ8caHFOhAXzbGJzWaooMFve1R9SmFG%2FS5%2BMvXLocSf2GoNBbQg6%2BxlzzlqKr8rO18y99qJ%2BQeedxfhDXTB2D8IWdq0VJdBluJUJcGYqaDVBtLYsmArQFyK0GsVXIh4W4hOiivU8TYoxbCBFe3n%2BZJ%2FTL32QSXiyeK%2BkoWepl9dCNBvwW4gXC3f8OHqVZknS%2FwUe3HWMP3zw8kGOqUBGWORS2h6vuAZBkQcTArlcw%2FGESqdqponIKYU9rFHlfteOjYTan2uF29ExitZ8LONVJKUmQ%2BkqNVoUZTJ%2B1A5KXpC1LpDGnXOlOxsPTYbgYWL5m7qZKdNi3fm8BPceU6LvLR5zMAhp5c2m1kfV6HvOdlYEMJWcj%2BsFaQJAnrnoJYBTGD8Z7sa15TeBsV3r1hIJTtowvse6O3Q7zRlzEoBABVmQBne&X-Amz-Signature=5ba2e3d17243ea9b60952baaf3f4ad9ea14627a68a7628ea9e2c7340aa4719c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

