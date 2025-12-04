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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NG4AQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDSIzUH%2BK4OixmP6CRl3MnJlfCdtpfi8IsCvfyhrX6tXgIgOZjuYvUc9f1DHzUxKE3fBtNgwTOfi%2BMjrJnd9zHOGpIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDC7DoV40ggQW7xLqgyrcAyiQv8%2FsueEIXfbl3us%2FYyaSAbMIIwfXWurANRT4p3COK4PhD3BbBusRMHfPtPYJF3QAX9USgZHE10Z4Oc%2FGGhP2ZAjkr8dXormPLXDEviGcnw5ZMeFhGeTQPirDI0mx4T7FfHylRO7v3D26R%2FniNOJXXxIfn%2BL%2BEJymw3%2B3JDNW7ewuMs6r8zk%2FzqQbbiVE8UdVX3MIVoRkLyGLwPJ53La785QKsYzPdvJ7%2BkXT1xcRlN57wD0%2FtW8RV%2BDVwIKU%2BTXHpT2PcU2md0HTOiCVOzWxouy%2FDcJc26xkPmnnUI5kPfYDTb7QcVsOG6TWMbHYLloUD%2F6BAti9XtH2IPQfR2HGjqwmeVS7KnwSQ0YAMp%2BZy6%2BurY%2BJ%2BWrI0p9TY4V%2F73g2HvnWfD8bA0L6kyKgTV9IoG24KZHh9WBwGP1tdSw%2Be4v2wzwyXkSDIZI%2B4LrKrAAetUMAUIo7yGJ%2FMTt3OuhEITE7UEN2vSvwxYBu7qstVXUWH%2Fva1%2BBQlodLdMgEaW%2FOiMcj0XSY9wV0Ftg8cfknz8ez2WlZ9a9sX6DqereRvV9tib7UyaA58xcnNxfRuUzYef2Dthi%2FCQuWA%2BYNuujl0as2jNopE73bmFy798P46uOo340qMx%2FsQBeHMOKtxMkGOqUB0qTdhPLkV72t%2FKKascw%2BR6yeqO7i0enYMcNR0KPSez7QZ2ipiLoxjWYRp3VcxUw06ft0XSy7Ot980fAuGar25D%2B6dAGt4qGl2G5497YU56UMW2wRroI9Isq5c9cIUZ%2BF0UF5eyXozgxwak6aOa%2BpYzysAkYxnKngQal2%2B5hLYDddpUaWhKY6AtS8akqfg7J5yRDdqdJYpHhKrvOvKYeO7AN6YrNs&X-Amz-Signature=d0d61b6757242da3977dd7cecb8b28210e9e2566c8772388ff2acda295db0a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

