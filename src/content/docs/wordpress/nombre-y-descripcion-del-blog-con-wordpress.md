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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4DO5NN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDTadGdGSNVhyY69C%2FkVvgfXw5aM1JX4F5vQI85QblpFAIgUBiRXJpCwYtmFygV07m6s9l6ng0Rfml8xZLHPJc6zxIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFsRIy25pcJ55E5%2BISrcAwAWWWN68scl28dCLPYYWS3vt83uqfuT277wXpmish968p9iWzUwkrTKRVsXTZvkmv4zetRJ9%2FiSp7vPZ7p%2F0s6SUXsBvsGVTAPJhx0KsWj%2FrshIcWGhklo4Kh4L7JOQH%2FdKYGqWbSZuGqSbj9WYzSJKYHIguX2gBBUn55t8LCfNRnisb7dO8Wtjp9kQ7nZz6b2VRUwBzBh%2F2ECoGwSYWH%2BJHAl2dKsuFI2VDKPvXHE8SESJnCkiQL%2FG5k%2FVfPqCsG%2FO9fTPi2kdUl92mQMEUd4UDNF5f9DEczuUXhxjrERo%2B8ZvWlVv9bUZ5HkkrVqiDd0xO%2BaVZe5RV73Z6yJ30w%2FeonSKtj5L%2Bt47Gr7ggoAOwI5J4FC%2BTbgADIo8uCA%2BbAORLZWwg6iru7KXBb0tq0sgI1GNpkQ5CcegQS0DU%2FvlCbC9cpfLIzS4b6Ht64HNiFiqlVGMYkUoDq76Ios0cZvU1BDy5jhJ73F7Pn8NF0OoCVtIOnQQIfOiWolzgnZ51bjXn1%2FiCP6ynl6Cb1mniDgk8n6zgJ1LnXtS2o%2F1fm44WfOd8kcIgklMXmCAP0lscZpn3kc1EpPxKzI1BUYAw1GwhHJBWf9vc7NaLadSPF9GQodXkS%2FotpN5r3ZmMIOExskGOqUBHBUhLkHxPZm5ireav3r3O82e%2BCydHi45Am7jVTvTU1BCUCGjw8gw%2F2JeMuunUD7jh7i6k%2B2d6dyv3539sHD8ejvXbobP%2FSTo6x4wYThCpzwMyEvJXnNWT8hD1yh%2B%2Fqr2B2%2F6FWoGIXgnSUSEnz%2FnwG4ccsg2%2Bzrn4kecBrkmysMvnjqXfd4Ir1xNNKtjvJtreBmmneXHaUKILKzUvU8HjV4aeaht&X-Amz-Signature=cf1bf4f676a42db9790c0654390ad1bddc13a6260605aed53c7103bf704f3615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

