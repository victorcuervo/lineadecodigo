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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF5BVFF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2BrcSgtDILW6Jm7ucqLhDEIPe9h%2BvJePgMqqDTVKsmQIgKzjxXTsWOHxeGreoBFL8RWHhN2RF9XaUUhGE2S2GUvMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEewdL%2FKzFflE3XziircA9NVkZvpV%2BU96RLLc8caY%2Fb6qb75wFvr4gnCdwZviS4lb3z6%2FjtDKPLgjP2NSZES3dm%2F8ngSHYYP20rF9NzxwNEF3PExro%2FVAC3yZ%2Bjz7olDbqqN6uyCiSr%2BDmiYYF5ZJEDjiVqrehLDrhrBO%2FIV1EAPYniyWks8vrr7cTP%2FGySGBKpz0QOyrlaa5Guhk%2BEUmulXuGQnBZXUHLqh32moy2%2FBtUOg2jX2T8eaLQREbtNuP9Z06s7lw%2B1Ui80ZkRmzxJ0HkU6sw%2FxS960%2BDtrGhxDXdQLrXiFtSBzqBITNvaTGaFXd7wUTm7P2Xp5Woht8OY7kCLcNZE%2FCeoDDBaEh7RyBfza%2BN7fa9sUNtSeBRpShNF27DqCmrpzZHAFIo%2BpUqB969CGUiwv8GegkNukMBAcmsULthY421uVU6zDwWBNXJq1rgM3X2UZ2LCEqgaWPphiQWAyruH1WPx5pHmkr%2BjxK1R8NQXbjc1%2BKuOWf%2FRXdgs2nM51UpvHQyY2Fs7tyz%2BRM%2B7jtiv5KZ0F68D6hOU6LQtynHPajIISAEJCo0otlOleJgjwfPt6sdD307VVDSA3xvvTkZmyUG06plGJpFkKRnzZ94jaRtgn7b6kFAOnJsRI7YTNGF0o6YN%2BYMJPxy8kGOqUBQ%2BxeqRv043dY3QDsmEFaEAcGei0OaK%2Fu1fP02x7Nz%2FNWBPvidNcyNMw1W8AjCq5UgzvuDtg7CONes%2FB5f%2F8iVIwIJ07BxGjXNDPOw%2BSbpWcTkWhhXHlK0Ldr5GhL44E%2B%2B6%2FuPiAnq1qy80cId3jlzXx%2FYV%2BuXealMZ%2Bt2LP1bx3FH76ruMZnqilagnygV03cl1knWsWTZ3V4uD%2B2CwufIQe5DR3H&X-Amz-Signature=e8153bd3aa2c98e6b46cf58e70b3a305661779c0f4030994c4be953793c2a570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

