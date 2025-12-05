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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXQWBDO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCibpC9Y71wqObxxH2mD3WfqCOX5RnElz3aWIZm43UrfAIhAPVmrgA%2FIYIhgADtDW7H2lc9YFhYrkeUWBJqUiTqN7%2FuKv8DCGAQABoMNjM3NDIzMTgzODA1IgzG6xxmS61HQ0OXi3oq3AOKO8MsKXTzSTivx%2Fu6solOb3iO%2BnxJWCBlcig4buGeYE0rFuHQ%2BQTLG2TtPN9XNGvc0wkODJqgQc6CM4%2FY7mDt9ofan7qON06FpH%2FrbXv0DX5V6o0hGCD7AdBYX4LyKDvI0zCTugci8wIUtFxyNrBnmNTvMZtjdV4HoXaVh3Jfc95O06WSyP%2B3h1GTsXUBuZ%2FX5by9Ghd5zSus1HadawXmXFS%2BkR741RWBhsdtjlzz3ubKjA4t4pPuZ5WT6I%2FR%2BMXtd0UxCgVnt90PGkISxoOu6kdDTncNbuCjLSwa1sWYo4fKdgjq4A2SlgSi3R%2FOQ065ExsCF8xnlyta6XIHaYwezJ11OWgyKgdBYlfa0KnuYfYCh3ghQHSK4WLg0EDxgzs4tF7VFcBxK6qZzhbcv4nSsGOX00Kjngvd6nRLBxbyreoSVlI29p%2F7cC9mbgD2MAr8tNILHWE9uEk89qVYGeNzmcZk5fZTmh12VV%2FaOFPa7bErsoktVDEwLbii%2Bh3lmgWhqSjPCvLoNCHqMCTH6pU%2FEIyjYdJekQJfBSkW%2B43r2gYuS0My4TA9RGsg1bK5ccAsvx0SWe%2FiGbPSLJn%2Fg1UcIWfA%2FpIUa2SbahRm7lFhwvQu%2Fn05YkF1Mz5XRDCd58vJBjqkAWiHNeUnn3mP19jT9tM6j2q9QXruXhaZdh0tKzN%2BrieGqnCOvFw0UcA%2BQRGg7Nqv4g9c2wtgVYkDiYuSqCDO5VAFxFBjJOeqxkCbIuguve4xtD%2F%2Bq%2BVwaT3Xtak9MoaIXZ3H%2BYcFPbrcBlCNAwx%2BmwAVW1sWDLzgrYi4OPEhJ4idPYM%2FE%2FXFb9kUItj9CYPxoiiHBSG5PLZDHsOklNWg1KpXHSo4&X-Amz-Signature=fef35f1712fde2bfdbebeb19ed45f07429aab5f287b84d6fe3547093e7bc1f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

