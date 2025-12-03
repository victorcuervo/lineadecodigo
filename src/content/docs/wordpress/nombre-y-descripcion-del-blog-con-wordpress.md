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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNGGLWF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCW0PYknC232tkWzpKIPjwmy%2BTkisJWDp4nFiWwnQO8kAIhAONegUNQ0gC1aaa82z%2FW7LghXNInDTcLIcseGNepGQgzKv8DCDYQABoMNjM3NDIzMTgzODA1IgxZD%2F8FYNRkKqZJ7m4q3APkpv5GNzPBfxlRf1y1XTgfzIJd1m4Z6BfjZortZjT7wLquoaLnke7RwxVPTBYdVB%2FOwlizWes79Io6NDH1LKFwAbaoUvIYjqlTctyNf5t3G1KxceT3%2B%2Fa%2F8bsaOcaUWZfNllJH9Gxqw3FCB71FntW3Hx9H%2F8bAKrnPgH6B2VIY4IMX6f%2F6GrvfNtjW6hIO%2FBhTfj7dB%2FWKpjKiBlLP7hsWkHjyQ1dW9nUUhAnFeHYEES2uVcMx3qemMOMN5zFQ8V3Cc8DBvk0mfm12%2FfRvJ878wgUY2HNRoaFtJ7oInVFcIR0kmWAjTN18sefdSJmeh2mRm0in7zrDB9NirhcdM%2FUDk1cqxa72y7AVkWPPYzW748Db7zGzPrf5bLGqci%2F1K8IuHyVuqeYiAOMvVfZdUDeRj7K2aVbVnLpc6GIGf1j4Ckgj4pBTTmvv2YSqyXHdzib7XV613E%2F1aEQcelcdRc%2FFKWmR21KHb%2BTPJgSLKYUIMbJGQp6R5AlrtyvFNSFkJ3rdETpyN2TuEH2vJ1n6eTm9XLlpEpfqGj18R%2BdoUaFyLjIqze2caVD4MLHy6%2FNxsY0z5mlOGDdx7mlpFzCIGbif7aKdAD1DP84pHbncxbmfBem4B%2FIHryMV4OvuZDCevsLJBjqkAeLG6fe%2B9ffxLaOCsPUEeveNDoDQBYpDTOF3k43Qn7qeLU173%2F0WyINCnkm2WjSuUvU7it5e4WhtACAWqEN9ryIAITPVzKGmbJojLOKcXZg3q4Ng0AtT%2FPOJ8CFDdcNDUwSRCWfkKr43IH7%2FfvzsFt3UxhXwvN%2FYaIP2XN2%2BEaqxgKSN7TGycG%2ByHGHWYssdpCnAy5PTe9%2FsbNSO4kWrQDpTGgZ6&X-Amz-Signature=2a93a8ee1a90885f4b64a814ccb07d18af472f6db2fe6ca349db09a79343c40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

