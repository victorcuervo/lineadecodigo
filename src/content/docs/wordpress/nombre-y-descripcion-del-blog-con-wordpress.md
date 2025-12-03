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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQE3O43%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCpu8lQUE%2BNgoltu0ezQ8s4dvQhDV8x1PIjxbS9Ubm3mgIgHYQQJuUnMyEJjwS51PeWgKH4XGZyNnmcZZTLLTsK6g4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFMk1zf6EyS5QzycjircA%2F5bxcesCcTK8Wpm2XnvLTJUI08NYQvotES3KFrlMDW0L2GfSq6f05oUsIIue7D8guOIzHNQi8gDprW31OSTdNpMr40Pvj%2FMit0yv6H0IBc%2F3vbujQcnjgt6gKRq5PFh8reO7KA7GIpQ%2B9G1I9pg0QbCzDp%2BwjG2iuILg2lhJ%2FNCFskgqaDd4eIDeoArWSa8LfiGT3QB%2FQidQv6LhBhsYjhHppyzLO%2FlHNHGPk%2FLJf4jWHDGX8FXKHcHRogN24QMyRzmJU97M99zKGYFv1dcyJwalf3X1AYzyAIBEUGoI1kwaff9oRzYUkDaQ%2FT6QnfD9WHARu7z1cSCx0sWYJgl3WYOAAJdKUox2LCHC%2BAAfKdY3lIVunw2qX4VSEcPa7SI9vb63upSdRU7FjUq%2B9d4XYR%2Bh%2F%2Bf195t1Yg2dARDAzK3uwErj7U8uWnzJcxFtYF2ZSPJ%2BST0AvmYNqtr8MzQeixi3QeKggNheJPvQ6S1bzGLL%2Fm7vBIcYEimMomCf%2FRGtC30snBSL3e%2Fb0DUJdOrs6ApftQImEgnGrenfejJdfreOpUaTehvHgyXp4e%2BkRSc7OVs8Wve0CEQGgFCXf9qOwvBXBLEFZblpfoARlSTQIflKK1TZAPJaT3pvNF%2FMMS%2BwskGOqUB9EyRzE8b1XJnpObq1untZHk3ZRSEn1jdddtiPG%2F1QvG44xQpDsbgerQ4j0IKK%2Bbc9yHyYqYo2S3j30aYzg2u0I%2BRYQXO%2B64efQR%2BKJpiqWWSVP0nyaWXioEpg1IN%2FhCWrZo2ctDc%2FVVkVd7nedQSuecQluY%2BCaf%2BqT4I4WYDwnpwhjmlbzEtqExcNHcKEuZwKZ%2BOHrmM1UFL3Kl5G965FuIrTKo%2B&X-Amz-Signature=44b2f7b818392204e065133506a8becefbeb012db6668182f41701bda0263a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

