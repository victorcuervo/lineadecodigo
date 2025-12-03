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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYVRH5D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDaR9ASrquDXbnvIUS0ZnPKniTh%2BF3oUBDn1HLawJuJuwIhALlRIgca%2FmpXHXKXPubHEf53G5iWEFQJx3yCbJQKVV8sKv8DCDYQABoMNjM3NDIzMTgzODA1IgyEzWi9TYo4VEFGnd4q3AMDQpkWZh7jo%2BPWocBCvP%2F%2FkdQfGI05PCUTuWlTiir0MFw6YyRKJXvN3w7H1FSiZnNJchQAIrZSPUyQY57loPX%2Bh1izdpcTl3BI9xqLJGWWk4uapaScqrK99KV2cJcAc2a%2FJSa3YepQ3mvp7tnhDa9YNO0BkaU6LMIpSsKj7WSc5NqA9JJDaX%2FSnQ%2BCIRHbu3WVSZE0vJ9ByndgVz5ljKOArABaZ5t%2B0H%2FAHMB3OzCu3doPwchOjDv4KdP8v%2FJYzRcpX2v4Mv3TsRk1mShxd4%2FG62yB5QBIeebM7ag7Ig%2F68XlcitLtVGiakQOGCwihH3HsJK6CP9nm%2BFLFXedtCdMJoLjPECxfUV0FORo56c4gRDtoTJ30K9FaZZM6njDp8pz9TXkXaw6j5JpZOeo5K3LW5%2Bh%2BEGD68c2ykDv8sO%2BQm8LYwBDUtGP30Pqx7HwElDRbmdfoER%2FWXB6Gg22H6%2BypOCyepjjAlz739FMNoUk0K6naZl%2BNeSS3tcBzLFxstPTDqUuqj%2BYkLCfwrpVgraJswca6sBfQT2pbFJGaOrdaVaCmDopGGzPPCGeitIO5Juek9DWMMFwDS0BJDS1ZNZJUDIayCbxGrAZ1d%2BvwaibK2xT2OfIlRUQ5%2BM1F8jD0vcLJBjqkARt%2B4%2Bw65dl1QZGegzUN55f6QWf6Gtoqwj5xPZDow7mesilq4B8FgeXbU5Z82aNbNBD7RV8WvqJIdzhSqbi0hhVbffBjYyXuq%2Bl38WJN3k8sPplvS8veuEqv6HEVjj%2B0iHWx1o5pBQ0GcArVfzzZy4fmenKUSgO8ct41dUusyqRqe9jdEt03Qu%2FuGwUIrOHm0yQtpHsccsZrNw70osHhh54BUYz7&X-Amz-Signature=62f4fa77979c421393438ac3bab3d1bcd2b6b51cfb2965ab7ae2195bb4ea3dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

