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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKW2PP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDT7s7AUpuV7J4mEI1Vow9PfyY3ZfeVB8DBDFf%2B1kLP0AIhALXHuO6EsLCiKOHbiRAx5wBTD64drH0W6q2BHCkrirycKv8DCDwQABoMNjM3NDIzMTgzODA1Igy4WWYOEoQQzB25FWQq3AN30Uej7KYtUDtD6L4HpTpk2JpDHPlQCwM4yLblL%2FPLlJwwr9li0C37xAAdTCT3lEziLPm3ttHdghYbiUn6jnC9k1td4uM0Y3kV4v7NxPm%2BW4Z4qegpxLAv9LkZ52OEd2HjnMjnKgPWIGHMpdZRGKg%2B%2BtDeQQ16OsaXPqjyO6YMrpmzNISW%2BYoyZ0MtKS6MRFO0cutCxvk3kPJumkORtgRa01C998DkMPcWEeUsvovmWeYFVvBtf4DSJ5sPe3o5fDBt%2B2jd2xpyHhInzfkAnUuTKzF17h35SQXMJrr%2BwEaaPExsKcdi%2FbUDHs4F0JWYUKVBPh8QgfNIoi9WoGVJCMwnCfpc%2FJ%2B30oQdhWxC434ViLQpl9OPUHE%2BlMOldEdO7agz1195fsded%2Bcqfe8IS%2FHH6ijYyfHqkiHfCfsfaKw8mibKH2xEbvaHh8Yy3BDwUmA%2F0c3Ov9xjhFm2XAANYolhf8QEj9ncyTYekjPiQoRkh6FqCRqLwrtyIJ8eUA1PkBNG9Q1wqPDX9A%2Bkrm%2BiWra8yAQB0S3q%2Bb6N%2F0LtVzSlDahH68WVrqLE0KbHgZpC8bt%2Bo4r7MS6xynTs11CMAa48A%2FgFUhFiwpCuDlgn2ju82LDaVH4SgEL13VKY3jCL9cPJBjqkAZr37e4lFZmPC2Nf8NdlTfLZq2o%2BWy6AveMyu2Y088Bf5N2giiNBTLFcw32O61PQW579nFyyraviOhrDYY8iSZi2ZYJrdb9Wded5ummSucfdKx%2BdhHSXxYQrvcLF345OIx%2FmnfvpcLQyMT1DWZw5sw7EEtnostW3q%2Bl86ViK3MQz05ua8ToU9xAtuec7I51BR2rnVmaE%2F%2Bv%2BrSZNY9e1Y6dgh2eI&X-Amz-Signature=4711fa2d521800dbfecededac6a1a0a087d4fa7d36b15cbaa1b752eca083cad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

