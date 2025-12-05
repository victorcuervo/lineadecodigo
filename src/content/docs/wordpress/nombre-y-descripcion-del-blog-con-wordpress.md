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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVZIGEDT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARH5UBVbHwWLzlVD91mTKxMXdrxvljP15dHF4v4NgwMAiEAx5MAblVRxYAlD8xFeikRrgXhdAdf9K7fRshkrHZn7Joq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHjTK3AlNnWJt00cBircA7QdjhB8HofGVU4GQlYwTFaWD%2BR9PNNe%2B2C%2FftwIu8tu%2BX6k5175PYtbS8hAuzKebMexvJ5NiZ3HMQMwYfqKGUXyODd9gWT%2B17sX%2B1xBUTsi5b76gRlAug1bXp2gLZaD%2FGQW6lD8KJjjcBs10kYwz6ZXvClMl7JrnC8FlS2ZYipwJVsEIodyzern5GDTiw7942%2FhYyst9Ma2M8WKt5Q3Bh59WGKT8LXW2tAH1Fv7B1G4yLHDW6kxp5hkirJ%2FcJ%2FqrE4PK2%2F%2FX%2FAypgyOp%2FhyMmSJpCMxsgCo3330uZK5rJB2R%2BTfjvvcDVFu7EH8bYYgvZ4UuGh%2Bv5f%2FP0SdITa7Lai5Ibl8ANed8g1uM3OdqYBrxZ48VWuDnd28yu%2BaCui9R7ouOgzCXa3VGnApGCLY7hl7FKt3d%2BGKA5ou9tnbz7MT8XAKIrVoGUtzWwPF8wIIHtztgQNf%2FeCbVvUTNOM3lHX%2FNd24uNp4ASrDA%2Br%2F7gFSX4jjD4se22t%2B0pC2DnQgG0EnxSC3bNdxxjaVAGJ4BlpLUjcOxmr8gXHB9Es0ZCYUb%2FYnBFQSW%2BKb0PeebZMDhb4LbHTwmb1rDKZYax4xYeidPCUzUrXsL%2Bu5RmhFPj3HfSAZlnC8Yf4V2layMKqMyMkGOqUB%2F%2BZOuEIa0gTHRmBwNRkukroDQmskLOh11MY3G65m42GfogvNOh8v2Qei1adM6a6BLgMHBCjcV6H2JDIjCjJkjkG6LBlPTAmKPyFzgSd6ioAmUuXqGgOxN5SG2MHFYpnVatfW1cM%2B070yjwRFwAnnSsvJDtz1ZQzqVP%2FSLPP9nF9hkP%2FRPoIFKzrey5P13G86vvrTwgEeezOdlUZD%2Bdq%2BhP63nBcY&X-Amz-Signature=bbb6f23ea24f1220131bc4a22ca66bad7fb1e25e5a3762cb0cb2359b86347bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

