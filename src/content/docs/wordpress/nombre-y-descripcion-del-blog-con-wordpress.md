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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BPAC3G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5LbITWgBlNbRRFHFK%2FDJGQGgvrtr7Kqpm4%2FF9WXYFkQIgTxFzfYZ%2BigVMQHclQsgVY24YxvaEkYQ4s9OqO%2Fs5oOYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPMBEQqd2KQ8eigOmSrcA5rzXHLuRCQwNPyX9jL1rd4nIYCtlKwi3Oefftr3JiuaOS0jVbJDShk1KWQPAQzX12Hfaq1I2ujIZpzaf3282djD7wHVyED24cqWtmq3h4a8WQpV%2FBGqpY0w6epbTfaAe88AZKoMwF%2F6%2FY3ocjGgjS%2BvigOYK5o0c0ZkYVgLKZtgrICmIG76uPZ1Q171EEYnXO56SHOllRtpetX9W2GAmvR%2Bl1Z19je9aNC5ercRFbNkOoDijTZdrZ9mClJxTZSL6p58QavSHh6CUOPC75GLDKEqZUSeBcs8qtN8lksAxqf7sV6D0r1r4kH7J4v7Vc3Oale3eW%2FKNla9rxLPToxUj%2F%2B7MtKPZBglGEIRunTllPXSj%2FI8jjXTm9nhmOf2ci6SW%2Bk5fqOUu9UVzoY7gMd2Cu%2F4tOlF3CYiEfmZZRuotR27mTiH3bfy%2FqP8rb5%2FDrZ1EHqYmeLC%2BaOrQVnTb7xmayOnLI6AYNB2QJMVCsvVxb%2B1ve5L6woK%2FDoevDy8W5Fqcb%2FNXri4vMHGCbz%2F9eU2RG9glUQA7YFcZkVr1B1cwf9WLtEDExO09awqYyfJrQd0sMzEN2Fqs146XUZiqcdtTMj7loHo4VPBJQyftoZd1ieoGaO9ty%2FHfnanwGXPMNbhy8kGOqUBIVIVwGvM4ldGYNNSOILfVganWtmi7ZO9bksMnl7IV%2Bl14hMzBZ5z4jaLnNqUA5b2XH3nTtAtp6Jm9Ko8Ydhdamp9K3IxtJbr6jdUKYf5UBNaE5Cvag4qu%2FCQn%2BnwMOwdhxYOmIfoJVJtddJu5PLo7L3uuyh8ndMRX9PdV%2Bb1jis%2BSfPL%2BES49WtzpD9DeiZn4AvRwXEDwxs%2FRH7ZKswhVfrb94Zp&X-Amz-Signature=18d3fcf67ced1a7932ebf0d4e54db307352a483a1c78c075456ad49812c95ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

