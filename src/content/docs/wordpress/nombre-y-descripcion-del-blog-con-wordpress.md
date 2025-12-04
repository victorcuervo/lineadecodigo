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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OTKM3Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICPbLQ8JKp4kcvEM%2Fr3GwmnX%2F8MrkTNskQehdySSVlnvAiEA%2FafW4EdA4RVZBPuPPa95lCZgjvcgPoN4rq6%2BBGfqgjUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJRU8heQb%2F3rSicPKircA9Y7piONAvSeDbEYF47akXLZLltwHp7CoGaXpJxkkHtCDikQUZ%2BOzccx6OHLnkiPY3ML15ZrXgwz4CiorWjo0sOJY%2BaTMeGHzHXuyGngW%2BYIdHSQ5R01NiLv5SVjoxzmyprBfkl5w%2BzEDBM5dVdHa8WgDdG92Z3x9ldIdeufdYRGVE9oXSJsEMclKk0Cq4CCVJ1pIeNd%2FkZ4zr0CjLjAjJYtCOPr0UcPqoATw7Z3oCEGH6HIrAUQC8I%2FZDFbdzeNr8vLPdclPDyEwgfZc2T2MiLbQASrQmKC3xxsVCe0Fco4uv5C9jqknNdSF5aKwJ0T9R3hX5aZ2WtH4Ys7xCIv%2B7bkNeqpwIKqtWNQPSxpzIk6mmuUH5S%2BA8dR%2BUWsXruPbDacdxjUP10%2BDAG%2B95TOgxyNRJEZ0ihweuvIplVpvB0S6qedQKdsBJHLAD82lUE5el6i5lZEJROPZI0KvctLgWQudZSkDJvMWWH%2FhA4v6Du27fapEeLatX9oLmkqyTpahHOEGcwxxXnA5u3%2FuVHlG%2Fj4tDnjSgxPFp6MQ0MKq5UvrPPCXIC9IRak92QoPcCHdt%2BR%2Fs6InS%2B1zlu5vUTZE75rlJZhc9V5nJgXr9bdwoDc%2FGWQc%2FRA8uvrbr%2BfMIjKxckGOqUB5ivHWtvvuLxj%2BC6DPmShPl1%2FgAjozE3zU7q7n3KmAhCC0LgMbuOxChluwjkGlHFKGnkyuTlCvPBkW2Br0BdjdPEtHJYP4odk2TMSCZR9jcp27RWliItaIedlwh6XUUSTYmQv2d9vma2Wl9EjwXN%2BGspFQZYU%2Bl9X5gvadAoHzWejdgVxhNCHDVRDqge3LaYxxmVQf6K51y3HjXRkA1ImCvE0NorQ&X-Amz-Signature=f56fc599e188e99450806af0d0e7e260634c05537ffed251674c387993890b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

