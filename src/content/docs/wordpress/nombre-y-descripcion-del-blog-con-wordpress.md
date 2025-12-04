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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4GO7TM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC9mCaLuiuDVEVFfFJQK7na4U5VbJj%2FThLjhoYQLzgYGwIhAKNkgPfjcXDz1QRO68hYcOcndSsJt%2FEnaMRFojhIEAunKv8DCEEQABoMNjM3NDIzMTgzODA1IgxfkN6OTrxnHAv5SJUq3ANCCzS6LWixXgpXIW72NN06uxanSFoCS0uH84%2FiE%2Fw0MpoB6c6hK2AwzXkYZQz0qMW5P95NvkRZhNBqseb9AGTz2fKOIcQbYz4DQsu2SgevqhxY1adDq7RB1tIi98F8v%2BuZ%2F0s%2F%2F5Ekz4iTiueOHpnPVcAAJoZiqrjtfyr%2FyLQcP3RWrdXA4izFgVnn2%2By9RE%2F%2Fv6QdZcmROD6dq7qQ8JUtB5EKPcILFHKmRT4NycQ5tFIPWQ54NJE5zLGc7lC5jBYZAeunukqKgw8nwkytJHcrm5%2Bc8ULqntYbV2Wf8I874XjggNGrlPElqyMQKARUecIjwbWsRNmdd38SrK45p31pf4tFB7xB%2FxC3ZEvpirlM%2F4PgtAhKY2NFPhzGz7VHiUwDcq9FlUco1LvvHmrBqbMgyLUzJwQjDydD1xg62AwI7aGKEEnsnECFJ%2Bt54pnJyXiOTP%2FQqK9vCAQ2%2FY0pUSjN%2Fc8w9UVBqTK63eueiRfiPAk5IG4oZVW%2FdIuiHCFQN%2Frs218%2FXAROQ6iK5TGCq7KaHI7JSX8RrYwEhoNPUC12zyNBakxuttf4sP2iTWukEB5RzpkCOt%2FAsJbocApSNiEpAo9fUGVmt%2Fi4IYs5IzDu4Le%2BXomkHgHWwUr8NzCDhcXJBjqkAWO6xTHuOWu2o1ndn4SNMKXH8FbF4TKitSbtrQdxac0jndExphwG9lFBPnBUy9grLh%2BbW67lhmBSF8Zc2rv9H%2FtSpn0PyIkRhxdjT6g4wManx8nmQwptEVN2W1uDBxjREha05BzMA%2BZEIqFARkzvoEtiUpWnhDD14DCNRfpnRd%2BXuRIDcDch%2FRzbFjD803BTNuBKPr44UL6aWdrpgx4kSaPZ35MB&X-Amz-Signature=c61d1d5c88eb5e83ae6421373db4f67718e00281b9179250ab6e9f85b22568ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

