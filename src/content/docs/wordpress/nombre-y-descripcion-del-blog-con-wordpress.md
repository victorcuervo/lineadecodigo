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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4LREJO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDtgcRyy6%2BS%2BQhPLvk8xRzFEyBNsZ7uRuTFefyX6o7fNAiEAratbLnGCZvpRPP%2BH2yNpTRaQreQnol4%2FwJvti8hZHu4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDtJMFvS%2BHFzsYAbQyrcA6%2FwZ0ejTWDZGxG5PvmoxiW%2F6ubp8j7hU9wxpWwlIfAT2E5fSBWpdGFto7PEl1RQqTOTfDK9GMtBIyJpXUlJW0ZQxrvSZqLYGZ76hgUw%2FOVy%2FYz7zYksLq6IqHXiakX6NliiKA9qQ%2FwBFNECKwcb2H2l5HKP4CMOQ8JhrMrgcTyhbaQ00V%2FeQpnyLITsE%2FRbClVh%2BTlZM93yU6CHnhLuNHxF19av82XMiUm0PqFDF7L4wGskePqOFqXZci3nRX9MkumwWTnx5sJdve4Rk4tys82Vccne1KDstflmFEj3fv603p3rz7sS9mu%2BqwovptKf%2F%2Bx7VZ%2B%2B624kkXsHa3LMQoJrn6nVGNIjDf0E7FGWzhjFVxvZ%2FwrnDNqD4Hz%2BipPjGWsx%2FT%2FFc%2FGEVITUgw3MsDNxm9rLe1rOfN%2FdNNyPtmeIFnlaLngp88Ji7pkdF0YIJGSjnr7LyUPwNrlzHYFdvYEdFvVhY0XISSofmWtMTKUS63r6HhexDnif5mOTfns6jMG3JD1pNPdpD4DJDVoNa6NqUPVZXFuncxF8lzzLmHHdN2aamgtKljmQSv5a8DR9EjNymW3YF2z6P%2BMVbSTX47LgyPx2SWXHPrvGSG80I0b0aTkzhltW2%2FeX2lMzMI%2BrxckGOqUBhhrVCJ0x8oZLrz%2FHU4ojZ9K6XYRpxjNIfVYty15GuHghzS8Vz8os0n5QwF3BwMO%2BjSgDJnpZqividz7p3w38CmDG8KXaV1vl%2BoHbGlMnzVXGEPqTwdKsBawvX23dm%2FyYRz3rpCxwjHIfEfdOzEvdKoqBJmr0gKo1UuyAM2yeGIr0P4uDubsXOE1grxJxlxwecplGF%2Bc%2FgDVplkKq5Hw0xH53j3KG&X-Amz-Signature=7a1b3b82de1fdbd481e0446456083409ef4233fa6a1784137e477cb1d708caef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

