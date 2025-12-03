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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBORAJ56%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCQojf3UmoDlkl8SS%2Bted%2BV3ix4z76%2FUBYAHG156AwF0AIhAMAPKT7uuO%2F5oJB7%2Fe40rEgyNBi1awmi3CWu8WXdYropKv8DCDYQABoMNjM3NDIzMTgzODA1Igz0UUlXeoIM5wbMip8q3AMUJaqk9HzpYCBFlDKliNLjbD3nYnd%2BOhc3ViNGfRr4jv54yXhk0DJ5w%2BxeVkm97JWZacpd3dICa%2BqHlwgiWnxFm6EjFNmf6Sn1qes%2F9e%2FZ4iI5dPvzHuG%2Fsqh9dQ%2FjsA8X5UhFAqDfWixADSzhfAF1fHnhPPkhdwMlmVCY2AqSyHKMRstUpEntbGf1O9%2BsdDAIXVklpdHts2%2FXochtRgQ6anomsLOt%2FN736WfOtqiMNJO%2FqvkvBCx0lDXyVcDsMaMmgHYiSdHL02xjVyrGNa0KNNpUZAqVqGzDn9AsMTVReWZrT9nQMJ7oQxufFY9JkPQ%2B%2BoyJ5W6M5hY7VPaqlfLuA25%2FEIzFTz3TzcDXlTcIKgF7nYupnC6amps8T01qv3rlVm6RtJDJ6n%2B3xBic25AmAF3kgVCQUzxNcpPh3W%2F1YXyiukhSKYRbyItxryYjxQLpvOldRGto%2BO3v%2FNifT7NGjRQB3Nlm1gRaZukKozX%2Bfot5RO9FK4sgxBMWRAul494vwK6s479HxItDmWlXzehNZ7uclgaynj5tF5o6Zl8eIydmPAsv%2FALGThOooIAznuCAya0mYo%2BB1oaNNKLdDXb6dkDXHtfCnjh7Vmzg6fSL2VyIKyF7cF4xsf2qfTD4vcLJBjqkAYGL1J%2B6c%2F%2FKy9N5%2BRtc4n9MorAeSJy%2FAV3lsbU7%2FDilEQaSrkMtMmcpUeUQADGZbcGTEQu4ITPHvk1alFUCN1FeQReK0F3vKm9QZ7lZR9451Gick%2BwPI7IypVpceNwkEaXW%2FtnJu6XVl5rGpvYGDF26jRTJgPvP34T2I0YigGJ5TCsDAigzyihbickkivas511RGTarRFmfF7sYvr7sdIpJ%2B%2BCg&X-Amz-Signature=d558753c793c3e3e62680e142a0910f58eef7617de105eefe9128a9cf7e45010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

