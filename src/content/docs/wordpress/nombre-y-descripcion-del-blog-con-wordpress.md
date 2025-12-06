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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LC4NBEX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FdpXRqEDfeTU6i2%2BtDaus6GXCZnqccGPjO0BUuMPFWAiABU1SYAiroOrkn4NLZua%2FYPYx7k4DBoTeIMbbqY1dmtSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMp9y8lEHimpQVdwq6KtwD3Dw%2BaGdjl6rdgUz%2Fj6qM9MjZrWXBJZfr4FUOZKT3fRN4jWQrOykro9QkV2%2FpLt%2BVmsJJctOJ80vrrFoBnVD7MU8Q8DA6m3v0O1%2F9s4A7aiP6Hk0w58bYa53gN%2Fiz0WleyOb09dVIvD6MqOh0NiB4ckOhnZNyS7zrZ7zreeCNd%2BYl9wRV5B%2F7d7cWYSYzHxOtJ6mIy%2FdjhfgeZCZyqcSNPBXfJYWEdZW2lwEax%2FaVptQp8ictBp0dt20zSDLgxoVmK8KZIwV37kfW70Wv%2BktJQDy7zzAquVxnhxYbrYBNmo%2Bs5pmPUhl8%2FJ%2BryAOOxNPBVZ0N0FbBna8WVV5oIcDTycwb3bo30FDv7EboudPD7FXAgkGR%2BjC9lGQkvs0gf6VhJ03ujd9NmCl%2BAkCmp4gPJs3xsBIIK7let0wxGQxi0Vv1RLA2JTJjx%2FK%2FxKeOU67h6V1kG%2FlLqAzqZ%2FSyxKntutJ5GzqoS42jZRQuGTfbsU8SAA5CFwoDYFJ0RLCBUepJ8ImMNp5hVv5BQapV%2BjqQKFhYRKtf9HJLY28lmVRqrRfPe6z1SMKyvSxFUF09Bs%2F00aIlCkwDKDy2OxTG5tQDgjCAqZn5nETAswtqqSz9Bh4JpacMPAZZOVP9p%2Bsw1p7PyQY6pgHawgt0QroNTL6KBiWI0Nti4dNRfwOTLAIlvGpgNOd1VrrJJxAK3hZtd0i7vq2a8GlMSrWYcvaBUdcuxs%2F3kIlbAORENs4mgKp6E0Iiod3LpS6sp0NM%2BgRmEtoD3Xr6uxLduU5XyqR%2FtFo1kIED2lHeryKLgUgO1SHAbgV7lfq7OtYrHTbUTFpJ1zCditCSRYqQ9Wh7p9iUS8MjaZp2yYSfM52XO7y%2B&X-Amz-Signature=f1dab5f1585afd0a4b14aa9abd3524230830b16e5044593f205484c56303b3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

