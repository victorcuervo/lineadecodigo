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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZADDDQY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVQ%2BQZrp6BDvUHXiebhA%2FuiWmU12Eop9WTC0YpEHglKwIhAOtA7PmzJHbiYvoUsqtzM1Lku2RJosKmP0yVllsZK4DFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxdHl3k4EtJEmp%2Fkj8q3AMHdLPesuvezydPkmAKZfxbz7V5GqhH5JHq2Ng5xaOdKs%2F06sPhrqtSGFH3y5Pu1lgSFwBXLsPycyJxHh5PJGiYQeSRul%2FL%2BrRV%2FXpwIEApBFr%2FFZpXSG7ifU0kdUbOmw%2BnSlmHwZxpEiRW4JX%2BgcB9w8ZjUfMW5NECvCKB99pfQess4vi%2F5QltIEcenBAMoFUWzgrJDB1DZgrzDE8GDeMhXsd2cNUiEJh%2FCeC2dENygjBqdYm%2F2bLruBN9HoTv9f%2FgZJf%2BhW9vWSABTmVLwjuevMSzzgibiTR78HO1AxWhjFmwWIxKVHOi%2F%2BagwWHyOq75wq994t8Od6N7WKkq5krlJ3TQ8uY9wo%2FKtiEuPnasd%2BDthhaXK8zn2YIaKJCvaVtvdSACxCyzlxiGJRrKB%2FTOkqQG1MVen0U9Lsqab%2BMztQtt8aB0N2Ft69ms0u%2BvebnlE3P0xWS4d5Jg4DzULVkvklhDzGwIW%2B%2BRJOzea26f6vxu4x379t0GusdnzrYISwn4KjEBu6z8iqFaehSB2ZyxjasYl3BHD%2BcdjHg5d6%2BK2cRXd6O3uKFF9KgdcTAqRv9kk11BEhSbnGqFOlGsIxExEuEDMKVTtxgL0jutolSwDr8qKynwPcOlFHs0%2FDC29MvJBjqkAWGcaXV85CLpATRvmKn2QoZ9j4xIpSEEG967U9MihwOf5%2FJQu8%2BPpzIuzZxPuTAwX3wk5RQeNnNTkH3nEznUGW%2BjefWwoG%2BTbTz3qcr9zl2nINJ1aAGuDDzhiQ%2BXtGbVX6IstpGRjEv6EgoRl3vhe1sTqjhp1H1ds%2FWLQi7%2BjvB%2BiAIzhVSKAxhTTlFTXr%2BWVQTsaayFb72yI6XVe8n0zWoy9wun&X-Amz-Signature=28ead870e795f36ba0bd94f4ee31c4f99fb083d4b6e33fcee622e6fe80ca39a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

