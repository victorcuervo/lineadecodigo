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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOODT7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFP5tj%2F7sfS8A6gcJurb%2BHEWBtiL1%2FbOdzJVS9xqQ4yjAiBmynvXGGZiZbd3aqRW8aV%2FMetQ1jpjFsYFZQ5xIciU1ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbOu6UBn4XuA0%2F8NOKtwDKEYPHHhwSIUllC60eAtfxRGJfhWxx6tqWcqWGH1U1wyEe3q%2FRvruDbVwmknyBbTA0cgb%2FVOX9kvzNo3ABFkJTLyDiJ%2F5Ea0y0WF%2B0Lr8fhJIucLLZArPPA2zCVovFDFlgZEuT1869spIyY5g8BWVNAjPwE5LR4ryGu81iTklJh0FUg6lcXDF%2FwO2kIzM%2BkFpPqd7i5quKZvxQL0PcsxbB87Ike9brgDmVrQCDV%2Fk5v%2F1%2FeiB%2FPUODZBNOWYvrXhvZe5N02DUvNySVfOtvWzKuZeAbPD8pM4yjuP%2FBwPYyY4M2a3qTxkQgkLM1w%2BKKdI%2FY4%2FmGk%2FnYEalH%2BhJKgAo%2BLCFQ8P0FPPOI8yNV7tRK46KhMLngFhbRbJCzVxVpFo7RCNnV%2FsRPFY%2Fc0ibiAq12EZJA7OGNw%2FWRdhdbKHCyR4MwA8RRZnZF0aD0FINEh1E8kuOL7ANNkInQ%2BoG%2FbjHr0TA%2FgrImMiUTVtfRL7pcq3c7HzIZ0Wj8yKtYli7IxvjwjuE%2BnVQai0s%2Fn%2Flul89eufk121weuNXrsT59%2F2LAlS3POmFu3w%2BCJkOPewNpKAELr07Gom6CMzKjx5TqWLJFY%2FrYqr1avbnnnRfcLDZ9SMP4%2F0GFbF0VIZL%2BDkwu%2FPDyQY6pgEjq0RqiCUUgRjE6MV9P9kVWgcJlJV%2Fv1AVTDjDElvDBRxe7xHX%2BoWfoFkgPbWskW5yleKvhrvzXM1aAPCllWwQd5lhZfC7ZQ4e0UqcCLqi%2BG%2BZGD1pbA5s%2F5VCn6hI4RJ3Op2Ws1vmOm9Izb76o4AJfZSY7sqreEjrartrb7w6F2wApKPY%2BoFH%2BHaoP%2BzWA44NYj5i4MX8r93AUOUvApuQ0SeQk46D&X-Amz-Signature=3257c1b3081ae48825266d5eabb438ae61098f467523c0e522fa251586060aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

