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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM7NUTX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC8mzXzKEimtOsEgX9QQ%2B%2FwXSoo0GGXG8npa2HKLxXxiwIgQjP%2BhRGB0FLEDGx0NeeFrOb9RLfD6cJaR0JnnfDuYZkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNzSytB7LX8r8gepEircAzawZnVb9%2BKUaVhCuUC0ZFGNmDilkmE%2BTtCMVxVyBJdKij74xmG5LONcSG1uaWWJi2d1Otya6sLuV3hjDS1rcmLBl0IA8df3qOsMZyPr5oKzC6F0w%2FQTyl8GEvQgseRIT89S4S1ez7%2FmdUaLQ3l6Fs0NlDrwPAhscGaSrv%2FZTvU5KZ7GXLUNtzCyLXRmn5Y%2FWzyO4sbDqbiiDM%2FbU0uM96WCjS1wbwMZ8k%2BRS6sUPb5y03kiojmInyhXqYh%2BI7%2Bz7UlKZfMkyjBB0oZ40nx1iZkUjz8McoS3oSX%2BjJOXUaTI2ck0dEQ%2BurHUOsuffXlhtL2omt7oGypuqOlRNd6Es2IFujqEp%2BMhZU53Ef9wNUTprUpHZxfIgMU1UJkVWhqiS1VPkfaD%2FoJQwAkyNgVNHIQew7bkc2Tnhn8kBYCsDHtTb%2BNmBsKKhqkekerh7Eaflbu1FLwiA4Sqe%2Bw1HdYiLRXwCg7HgfF%2FWmwgcqhPOwc7JKAXpkD%2BTquuS9dEXQCEyuONptouwTz5D8zSkP5lA7skqk3UqtWd384jSZxIAOK0Oqv3TqMQPP3nKjQtFBNQU40QO8KH%2FsOUWG7wHrS4Tagfl8DW%2BHL1Yq%2BFPTjoPxZRppd09e9OsPyMKXIDMPzzw8kGOqUBbEULbmkQAlcR7Qwwup0oWpZ5IFkYiF%2BsAy%2BkcLarEcWeslIIpa7ATL307gwbxoi7fDksV0W%2FKu%2BrRDkfCUCpnux0kfBalKJ63njEkySOVGqu3ZBKAzbVRBiiO%2FH0KqX952wTtyW%2BhhREaNvfF4g97BPHUyX1ovRsLqUFngcLTFaRjUTvFxZUZX4Suxkyawrjd1iwlpf%2Baq4b%2B9gT2c2GfLteUA5h&X-Amz-Signature=38bc997d6a98cfbbb359a6bed3bae141a2d2761c65aec993a2a2cbafb6df36dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

