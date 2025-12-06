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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL7JDRG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT3qdBN2bJlfRnXrCNrW8aFBVPOZswMRh0d7xua%2FUR8AIgIdKslWb%2BeDkmnbBkfG6aCdHigyVoGi%2F47yzo%2FhpwA3Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIJSHXsChiE8DOCgoircA4t1OmP8cjps2vMJVC53TU96RcqvU3g8VdU%2BEMzmL2S%2BQV9SZ9VUHpqRKspYSH3E%2F3kPgry5wh5%2FB8rN%2BH3pepAtrZkx%2BCXd5sQH%2B4YX%2BGScjFheY747uam2lXY8HqCZJ%2Fgpv9WaNtMtcgiiIIegNb24qo3f9Fug3dD5kNFuGle7HaB6zJQ5JH1xpm%2Bs%2FDjH7XaXB2ohjK98Jhwv6mSPbLkWk3Z6HmmJS24%2F3RLCxxG5aB%2F1VQmDeg2kgS9UhHhak2HkV2tJ0gNp5UH%2BygvzN297mlkjt0gE7hJaoaHyvmGCjThPfLRJ7hANPrhlQv24oy%2FQ98hZZ193M2UWpwxdJcJzAu%2F0UDsUTDnTBxdo9pinU6J4H%2B3pH5lSbCZrxuVyqJ5D0xph3g6EADEW9xLdY2ocaE%2FNMZL6REXyAOjadU9J%2FebAhQS9qcdGQ7FGdQa6WGAa7saEDLLmkl54kjhh65WMyQoWd6IYl6884iAnDnK%2BWXiLnGj4WUwkLKNXgbErxzqGruUbh0fOqmX8g%2BDNFcIRjw0Xleu8gdJcbZ%2FA7QYGxl8%2BvfD%2F8rDO0eOP0JPQaigxgazpsPAObmcdhXY1iyGW%2FML%2FHHWO8bv2d3XfzEhch6W1qySuF9db5%2BKEMLbF0ckGOqUBOY6DmvyEYhPeYXlUIFrgf%2BiOgZEUlLmZeXMIDhmc26KQT9UUnemD%2Fx%2BQrpD35ZO3JUKUKLujl11pj5xN%2FEKldr2Ny%2FQx1yi6LuNNvunoGY5kXP1YwepFzYXnwCIMp66BQ4aqLaZJGiR7K%2BDt47FMVzb61uGWe5JGRya7wL9UNp%2BL8rdtHvNz5llczeikkJ4cW5gLTV4gJNfxHaaRyaH7%2F0NbZKK6&X-Amz-Signature=7e4a8f30b5e4fadfffded510ee0f1dd1204b6a744d9e445245a74cf623e6560d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

