---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU23XOW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCXNPPSkZndW%2FEExl0g9ZtiOkIn2IJGoiWaffLF2kiFvQIgIy7RptjFXW3fb%2FDNIAX8DqU%2BgYATsmhB4jiWiBKBcWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDG9oCLJDAHiMmSsfRSrcA%2F5PszJqDL69fnihYp%2Bb%2BI4f4ubW7gnhkP%2FgI3JgvX1EZO%2Fa1x06ZNzXnV0RjKH1krjeYZzchaa15UjYfhFwrKe01ThnbOWM71t4kSm6n8mD8V2l2yB4K%2FI3Uf8WIa4LM6KoKsn7MgmRZKb57gM5l%2Fn%2FFn39HANfqFUOn9aG%2BjZm%2F8bAK11aFgMud959n6qMILG6PTTYoYBYzcBke56ykTqqG7PYmuxbaa%2B%2FpDBmslNzIG%2BH053fbhIDw25QGskspu95pOlCVBClgyY%2FIxUxp3%2BQIaZK%2BwZ5rUvB%2BAhSzrd%2BZt0KYZY57j%2BI5jbICXGQqMQr9zPNVfBuIrv42QIYKGlJhUZFmJRAimIpdQdxgwG4bsKGT29bdM2%2FUipBgVKi10fZXPsn23a0QiIWiE0dciKqIh1JB77wDAKyq1Zqk4PXpc%2BC64312cDq%2BR5lEE5ojXDWl6QNxevaQXPQuUAbA%2FZa7nLuOwQR2xDiO7zvpQXXI95biDO7yE9onWSwKFkD1ic4h3VHeWHmagpp8tsqiknus%2F149mYKF6srrWTPKJ342xwGSZrFKvqA0KvpqECRg4KsdNcvIdL1CCC0QnTjL93Gj%2ByP935tjRy%2F1hleyMJ0Mk%2BvI2iQs5no5rDbMOncwskGOqUBnN8sxeWtfSO1r1JU2xV9adILrNqNILun%2FhwbaXOEVwBD5JuVbOWV74mYtkr%2By61fb2KLIFmZzRiIOMaGxse7WoXlJli2X%2FnO8IPe9T%2FlmL8P6A2TPH7XP8CTsVuq72jEg5ouNcXFpO%2FoFVAn8Gwqc24%2BMLlyadAQucioGZ7YHsQj%2FkON0eSZePd4s3Xl36YraGcSkEIekNwfWeO0vAShcIgNhVS5&X-Amz-Signature=325e88a9b1b8b12d643f92bb099d675f94349a2c5de336330ed4509cc05fb1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

