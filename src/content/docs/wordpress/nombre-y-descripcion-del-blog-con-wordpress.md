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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRUAPX3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDORB6kdn5sQ9qspBOUPzGDuydBzQZgPd2F3vv2BAvQBAiEAoSmlik1SqVF8Vn6BfDHCpmFiS6y%2Btta1m3QgfnQMVPkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKZnbFeUw74mXPNbmSrcA2sGtKEDD5dw6%2BeITRm7qo2cbAxHoOwrzSkjbBx1lF19XEHHUpQ%2FkItv%2Fu9b9%2Fcbvj17lukE1lXOi7Vb%2BIN2Cz6QzEM7z54yJCg6OYL%2BSSQ1luw%2FlgGTYAQ46qjpiS7Qjt1ZOPUbZC5Zg6P8LQATvB4eV4VNULHwcvEEirKTWmyNMEIOvVYtAg6yz4TnOtJVjIfUvLAQoa7Q4oe0AbvXifml2q7nMHqnJCe%2B48dTkLlL4cDJUULRHDwH12rdd2rEAkXrBiFn5v6WJ2BcczCJcWD9zk4esBE5lqxFccvdmJT6TYF3o5jN%2F%2BQszpUI5gMmJrWSKfEA6XKl6VPXuDg36KQ%2Fm4mvsHwCswW0l1exurt5%2Fx7H3rKWj9TY1IwDMCDEeMLd%2BsUU3rvIdNG7EXLeEhsUH5i2Uw5d4IOqZiSJ5rUJhgavADp7yvQr1B%2Bm8eEIkZbFN%2FwF3S8%2Bpp8tkyc%2B4MPFZd3AGulGT0NUgT%2Fhi03sS9%2F53IqaK5HamC6v3Zg68xM8EBRkc3t1Z%2FgAwnNRNEx%2FLg%2B1wGyyrAjut2l8fj3p2QDyAC4fnnHx5qjZzK21%2FtXv%2B1flihQRyUWZ9NCCNNTdluVSeJ3o8oNWxaj%2Fn2KzSx2yhq7O7k4m99vWMP%2B%2BxskGOqUBPSAvVMoOSlHPFxaGkU1l6b9QESLuDQIc9h60Zk2yzIgEPnby8tv2ip4258gCQUEee0UVgva1SjydxjZ8KQqBgNPpt6KfZyRBO4%2F3znsqDKffZbJtUd1ytolNgIePBcaXFrQaZhFGHpX29nOhKtJ%2BsfTGCrWLcEyNfITYnTlRjchEXK48xwNSy0x8eF6JxC5Pn%2FXg5Puj1YbpbZJDEEBNtSZWx7KV&X-Amz-Signature=a3912e72939141087b7ca8ec4ea6348e8f144df87bf2338c71e5e2739f8bea35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

