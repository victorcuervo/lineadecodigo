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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOOIEEY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDTxa2yZqBFFzHYyhxgr070%2BWjV39gSVaUsBPA9QCZ1OAiEAqVlGm2%2FR5nt4Wb5rXU%2F1R0%2F%2FeK8Bsqr2H7Ghqs%2BkpI4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEoiswlPO%2BO5hReTBCrcA2x3cU4HIyFcQlQeOC57dxbjVry9ovaic%2FIorYMEoIhxXCDBMi0B6tZHAc3641Rjx8WploszMdXEReWKogDyj4U3WzLbzx5GEXdLEKawEmhNkRuhShTxDyBUQ2pZXGRzJL9IpfCmWNZiKIOoM%2F4GXTQa1j6dfmNP5QmUIfv4ZGRq5JufEjJm%2BofnVTsASYDyNKuZgZU1wIcBN%2BPN8agVywV0BzRZqT%2FfeEo%2BZiMPz3X25B%2FJoBiKxNzyQR%2BONEmtJkhiNUE%2BEjn8C2Jt0%2FNPN2gpXHyU5PRW9xE6zqPKk8fqaFwgYGTTySWVj1Sn%2FonjQV2%2BPwQ38f0sVSqU1JfWcfIHf7G5fsWtyoklLr4L%2BpxcEDrKS069BWfuKpxfQnnr6kaoC%2B5S1DQh9P%2BPp1gOFyWttXnQOM5b5RwgKRHeK1U04udToRf1G%2FHcCMRjxPfbFG8Wn38tqQemdT%2Fz4B%2FSVYdoWhe8TNoyMuMFVrscJeDKptmS0yEnKcqWTZPZEykpiOEZbvwYs3YOm6e6dvuy0VefUzSsdxve7Zi0qqbWQgKFBSHuMjczmG2zhMZdV2Y7%2FLF6uCO7M6RygqFL%2BIpF4eoDo5VTySockgrI1qeBCTfry%2Fd6Lpc7k4aQNuwbMJW0w8kGOqUBY3SzGBb0V55QEmsa1W4nypE9sn2dPcaDw7UWGdMVjJ6rY6%2BrL5gl%2FaKSjBEPFZQp%2B6Ao5h1%2B%2BzOmSmg%2Fo8VgxHyan6q%2FeRzG2Qa45l9Kkq6%2B1kgEF1SUgPQeu7QLizdzQ8rqMQ34wjJXwGIDddHObvfvcfOcUEKnItdYRpRvogsdLmNY4ov8sy0E9n%2FNpbjNwqkMdAC%2BBV4MP%2BAosAVvTA8OlJpu&X-Amz-Signature=74e63dd1effe3b2dd4d205ed8e6452d9dff1ce8194dfe462f65f83c7ac96b26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

