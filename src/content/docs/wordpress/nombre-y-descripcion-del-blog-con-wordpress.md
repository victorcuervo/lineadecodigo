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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6E3WESY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDuGwZW5uJl00m9H0nzSIdKWPp%2BULX%2Fe3f5kqnzRLZ77AIgL6nkl5M9usbxQIKbdyRqxwiisSTm47Jwy%2BpRP1XV%2Fu0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOKy3EwpyEiXu3XqZCrcA0xvcKSNWKWUCRtKDBBLUVbGTpO2E45p%2B14CDeKmNxPabEJvPspCyZZL%2BWTVtWaggRVuUEsQys7T%2B9L1ygUjUUfW4zrv0fXkPg4Bv1mFnF7bs%2BDkga1Ha4Ol7vsxFtlGbjGAAg3gKwyudkFTooBeBb%2Fse0bTTLojeeq89E9EL%2BKiS9ja5NFbeHczlQsUoI7bkhx%2FPkKjzUE1AwUjQPBCMJ%2FpZojyYywgfbbZ4QpJClAwYxjISgtn4e2jOUDJnUOR1ruMMhKwUjl%2B6m9C3Ncy125N3eX%2Byj1UIkfKtWo%2FXUZY0xyUmlE1Ea%2BC%2Ft49Ho91WVwHllRpwwsks3gMhXxSpl3bU94eUzUdhL%2BIWTHku7KDPL8hjbsPFo4v7G%2FcvXxBvkMCEtozpRelNkXmhj4jFziCdIiFTz%2Ff03JoFc29%2FxP9qVckMipDcEpB8KthrPIW55WwWHkxbj1o%2BrBBYEqUVMVQL6MeYn8FPQoUe8qtcBfFWySgn6z1Q0DlcoZuZ5Pb7qTgFvucsBuXHTZQj2Y18y5WTP8nZPYXPO4TPbOxWSqAPJ7jJFr493YNZ61C0zBo2%2FnBydb0Yy3%2FmIMZrzB8COxzna24p2zn4gDjnnMQqBZbbdr51sIUqy0ZSe8uMM%2B%2BxskGOqUBhMaTjhhjHJYe1ZvAyMeBEH4E6TjFiJXilutpA9P1ZmwbD%2Fa9m0r4eQDqDLyAG%2BuyhvzhArJZ%2BowuDwZqWcN2E%2BEZJDi9uRlU0oqFIEOLIwRtod203u9QaJN73G7RI8vuuRmUHZZJTubfwtO4l3zn1viaky3N1RZ6bjHF%2BAz0TgWbzEO3unRZVOdXTsoMiCx8VRilbgcEdcTnczoE25bFWtgu0I%2FS&X-Amz-Signature=3f3d8f17759fb3172119e423bbad5dbd2e307f21f69081506c408eb3b2c92939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

