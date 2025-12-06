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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUJPJ27%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQ4RX8xRk%2F60EjIlGAVasOwNAAOAXfoH%2F%2FRxadKBs%2BgIgLrYLLxDPvBM%2BqmH6MmtX5Nqlvq%2B%2Bf0fN8f0irjSIik8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMG7TqEnl5Bk2i%2BaEyrcA0CxVehNA3PioLHi%2BHN4%2FrPr%2Fg%2BZLSykaAjHPjhG%2Fv9ANAX4QM44RMhuVM2Wr9GThxh963PE5HGZ%2Ft2kncGzpkStNXT1E8djoLuhYLYRP67vFFeoeJRwkhJyfk8%2FZUR2dGbAWXvj1%2Fna%2FV2fKKopcEjz%2BzndXHQI1KIUbAN8NOP3ofQdxPnVHyHO8mOjbsKARrEwncvyuP1yeePoznAARqr9yLOitE5AVG9UjDXl3%2FqKms9KyD2VZvDWX1azjKpWIIgF%2F4KERRQGI30tLWOgQPWggUqRS2EJwJQ0watmC2ZkYoNigEKYVApUUnLCNUzy%2BCAibId1lF9w39vAPl6CJTp1BOtkQN0gF0vtD%2BwZLnJHimbQDdH1q%2FQXuP24OO4zToTn8ncUdwhCu%2BTPYyQYXgvLdUBPGeJJGBgmgiUWm8AmzBxrxPj%2BMD1VehZRh8fAzF%2BsZjiwIlnr2PYBEZ77LvldJmCae2RLzJXy3KTt9WJ8ZYY1IpH%2FibK3xsU%2FOfantQUdwFXpvg%2FxOZ0H3qz1CthMEaC8EmDA1m%2Bac6cUPLrQmY7W8AmyEPgk%2FydrU2AMKbICCcHGx%2B0BaV3MXkVgw2mXtgQwGPk3Rfk0Aw2ui75MJLhCv7ykIYPCSJwyMPe8z8kGOqUBelORxOhAzkCO6I%2FGt0YqWiWDJrQ1kX8bdGhV6aP8IVFSBLVYan51mp9hvX0uy334jrtOjhsm2xlqiPdJSQAYpni6k7K3X3j938mHO4Nf9BTN3HvaEby4kuYSiXEoLehHzfrCThn%2FfQLmT7Uo0J%2BhQRAveUt4LQ5Gp73KlY1SaVFkbB7Sq%2FSAMt8Vwfag8gdpu%2Fm5tLUXq7%2BDEidPvL%2BVIb3iTxeS&X-Amz-Signature=b78ba7a83a1f46edbcf36e5d53c276108e26c8509acbe3e3b6a55ed7fada77ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

