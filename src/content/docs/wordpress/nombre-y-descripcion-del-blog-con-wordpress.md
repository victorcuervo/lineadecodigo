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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6Z6AD2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAAOKjC04qWwLckdBsysyIOrsiqzt0X9BbfzDslUV0cQIgD8g%2Bvv2w0rMD7Gl%2BPrpKWnWtXCMONXY21tCljN1TkDUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG%2FCpZM9Saqi4uHulyrcA52b0af%2B0R0Ni8oeh%2F7yHmWEova6NHbeBDW3gA8%2FN7iGgr45FtTqsOfBMMzIt5Zu4bDxcVmyAZB%2FkiPtTp3yHDkkVAvHBv%2BwI3o8v2H3TVC71PxggjQPJBzvpzaD8A55p%2BE%2B1fSEMZ2jkXCXkaBEclyEIWA16%2FsHMR1K%2FN%2FqwO0%2FB4rTXBEhn01xRDDrESQcy0%2FsaL6xYd76WCKdOVUe1Hal6HAiYoDO88YCQV7G%2BFMuRZVdejX9WpkVvm4bI%2B%2BYx0XPjX8H5xqCVew3p2lvYhb2S%2FQfDfacTWncwilr%2BOafaCvXC%2BUXqN3hpuyWPGdc%2Bfs1ESnpvHeG7mFOVRkfziElwsS3QaLktocbaJF0dQIN%2BmA1%2F8FSMJjIAu9S9pTbr%2FKil%2FXjn5S6SNhyWDFFTy7rfyBNpHFAcNp8cA0zghVPXoNanx5bd3yh%2FbLdNUF3UpmzOcK1YyhxjVu%2FFWAXhYzZtHiC7z1lT0HpSiA%2B4iNz%2F5JKRrdw47prvK4OBWzwuSEYcUeZ9nfD5SDgt0l6Jq53YKXLPkWhV2eHDZm3rPtina%2Fk%2Fy%2BbXpQBO5ypgVDG0Cs19%2BptS839PRvaf3ud3MNZ7%2FHaPgsBnJTKBTfzy2kHBj5jz2CWzJmA9%2BGoMNaMyMkGOqUBjS%2FFBwRXOQKV8Bv2SkGP7su7rMh2tGK74UVf9ahejlkVJn6slxRt8hrKkTHX2A7qURlSyCw3iXAk%2F%2FgV2I8jApxsMmg%2Bki3STCjSjTFOffNTmjt9HT6Eo9dXexcC2JJmbQcSSVwxiZPfXY4T4TbnDR%2BXCxlLHN6Re0fwoxO9mqMRBOeDOCXEgLYkmx85TixHtu4KwN1Vb32fTQrIynLBfVUx9qFM&X-Amz-Signature=b44ba42be58454477dc1368d6b8cc0646fd945243822a82ff1e02f6a9c763851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

