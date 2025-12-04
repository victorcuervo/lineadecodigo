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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O3ACN6F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBa2pYyvj6hjeAkYlgS3sqLnRajZfq15AGijQie2vnt0AiAHfXxRL2GfLi%2Fpec6WLeyDnAPxHiVI%2BeAm6wS2WMvXtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM9b%2FOF0yk1sPj4R6OKtwDsmnS%2FEqLYcai%2B%2FQo6qH4SZNzp4xIq%2FuV1zNROtkstVymlA4XQGsd4y7TPMW6dUO2%2BfXWbfCGtGhdJsSG4NUPKCESfEajw5FGcQvA6Ebh%2BVow0Sfng06dTVoGfMYOYdTcIpn%2F937PvkxGQFWM4rBHLcasIgOfDwUnvzb66ERdeNc9am0W9FC9IK27PHQvYoOPP7oZTqHH3t%2BfWsOtTWwkLqraMWQ4MIzRyjjASqmEB2%2BRp4NNlsghaMBgaCVA0CQAP1T2zl%2BB44wgfXY1awBblYDLwUa70R96jIZEYocrM3VqBvcHicz3u50mgBpjAJjCUyVePvv2u8KGJ8BVw8%2B8Er8LPW8lpNUB%2B%2Bd8NYw9jwE1U3%2FUrcdIVZsQvTCL6y0vwzHMuJDa6juOshJDESGYy%2Fw5FWHpORvDqsGYtE5lBorS%2FMZVtea8NZibmd3AV9ZzDCGj3pTFM5ovvpa5w6483POJeQa4cDf55SP5V2y0hGeuRQDDofcM%2FwM8FWCP8fK5SW3o61uFKfKJih6ujF8KDF7I2egiyuAC6KkXWDpnTGBvIDjwJhZ6a33hsJoPREEmIGZCgcGagUz0mcePv1wLAFDUDCNlel%2Br6aOTuuUGEXVAHqX77Iz3m%2B9HcJkwyufEyQY6pgFuP4puNEJtYgw7ribVqYiC4Y5XNXTyYIy9o%2BzHvePco0anc%2FJM8gyQAMLhEqZSUGJVT5eoF2Gdqme9fXBRoJnOf%2Bejk3%2BhvAwf0Q1nbOnJDhfZf6qwu3uKMJO5rcbDcpu9BdhTOJwjldJXPe4IXx4MRWf231FVetZ3NhPhi%2B0y7Ygv0vR5D3sRd6EtPRlj7jpombtkdLlSuBRau0D7F9JxCMBtC9FG&X-Amz-Signature=c3881335c9349706f7a420f9aa397f873c9275fc83b1fadf750d953798d888b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

