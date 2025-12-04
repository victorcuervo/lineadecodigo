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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGXCXWS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCNeQcOH2nHX%2F7h8TRK8%2FP80EhsCzvemv2BKZDyW5jSNgIgHaUqhOb3duB6nHuDsBF1RTPH%2FCsc306UHy2EHb9w9mgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHtFcGRV6vTImLFMZSrcAx6sYcXEhpUb5j3QkT0aGB6PWzo9ffjigi8%2B4jHFaOhNy3jvz2Cx6fQywuLmD7w%2B%2FHBCeiH5FV6SZME867Np3lj2TcSEZYoY61CpuVM5yvb%2BDH3Km%2FJQRVVL2%2Bp0xfVZfaJfle%2F29LNhwfooqooBY0uqn6uyvkLghhHrGQgdP2g6ZMQV1cIlPCAnqtSw2SEG0D89kY%2FUzgiM%2BJCP%2BU0ZwAr%2FdZqmeduy3tV0NM88SqqfP1W0EbFgXNXV6VuKgQDC5duTxnf2sW8GGBxZ2p8%2FD%2FFPa9TLbBKqvP3%2BgZnkeIMUtU9OgE4kbLSfB9%2FoGbHxu4HaLtDJEkOkLjycvEinqZ9e57eIomKVSIilD1HSSFbmkcEuvvyDH0SKbcWVAohml%2Bec6asUqoj%2FMedcuo2AcHm5EVV7vYpZveU3wK1KFuSUIliA%2BAhfTpQu3xiJdYJbpgitcxc3n1zihUMdSE8LFyCrwUqUicv9sjmyHcTKndsDvn1JvZaJCD4LeEBHSLCnmmWJmuaypsFHfDWxIgiyZV9osEins8VgTwhjX7Bnz24MuwTGkycdpcgAvEM77LotPvF4LwQQdYRqPHF8dyoah0tX%2BNLUfv89QyW7CwZx4NJZklvvJJxsA%2F8XAY2LMO7Tw8kGOqUBn0zJAfeSDQzKAhLJuZBYrE4WkNZgTqgT7c%2FCACGxv4ZaojHUFI1nKZJlOhwC3WBPh%2FTw%2FrxjtBB0GNmUYGHxXq1h1vk1ERoY0UJPxHChChhMAHQf7SeCUyyWI%2FVzMZld8BsPxHmEmGGQvFbpViLC%2BCdLwIXR4WPMsSY3P62oN5jlKuK9rFiFJ%2FL2Fu%2B6PHCmBXizkgje%2FLB6f0nBNIq80rdGbBAO&X-Amz-Signature=0f74044f6e26ea412e0454c00c9830dd56495aadaca844406fcb4fef2ca5ec4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

