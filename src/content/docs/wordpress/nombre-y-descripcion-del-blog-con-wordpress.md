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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUUAQD6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDBbnwYySwEdGZqv4XVmO0nm3HyxjDWjn2Io6D1CzokHAiAuoI%2Fjuc5vANnth69KhebtCdALb19q5pFnBxpWDRLfgSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMks5cI3fucBrI%2Fz2wKtwDPr1tHk%2BlZkggzCfkcJ%2F62KSoYMYxtNXZdNv%2FX%2FkS8Br1E31M9%2Bka3smnxFf0AGfm6FpuL4EDct43MHvZTRP7nc%2FYX4fx4tCcdm51A3nQX0PyRPbDelhGJq4A3t4I9p2oSEzdRkKb3s7oiF6hp86efuJ1oBTdswAmuGO116BXtf5UWIxqdRwkadfijzj8SITSY7pbTg5SvlOEB%2FlKVvc7To47xjDn99VPmePUtMcKmdEFDSurOSmCNNgN%2FTGmTIsW8vhoj98vN9%2FUqq%2F6ClfhKwT9CHLKNFtnw%2BYsTxOoImBk7uaGGeKgK8Me0E09M59kp%2BX0tBffdGfIn2dsbyq0gWwu0%2FD6zhAa0m2xamQlgjn0jdnrM6xwVX21%2BgCHx%2FiKqoq6s8JKY8a%2FGN9v4qH6YvJow7gXKcC0HnmmegfUxBRtRk9E1XsHuIoz%2BncykZv1uY5rL8pu9ccPHt95IMWey76ImY2jTm9G71VmP9E9Ugho5hrNOxkUeD3VzYUP2BJGE%2FRfqMSkVX1dBygnwvwahFVpaMOuQQ6VkYR6imib%2FdoorJMeRL%2BF89HWDH91z0GyVWqHvLN2kjTxgAmc%2FCjJzf0OYMoRaQ0f0c1QQ4CPhb5QXGfaIZh3GeCTQokws5DEyQY6pgGXS7lAwLpHa5Cf7aqjNdQFHca3UEVRWqzC%2BNPrAPTKryhp9tzZW5FaEG2aFQ84bj7MrPAKKHHMbmpk%2FKKO8rI4bhdjhCEhqcWeZ9aDUJEoXQpj%2FSbkOyCKFeleBJvYuv7bmcMlw35clMnov09jzqFpCWhYvshr4MQIK1zYJUWcHV25PVt500eOOOqfLKaaePgXxR2HXdjU5mB5EiMNMqL5adb3O5zY&X-Amz-Signature=979a5a891fd0f5e765b0aae55ec99f1f6eb480140ec5be4656dc88a36c4467d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

