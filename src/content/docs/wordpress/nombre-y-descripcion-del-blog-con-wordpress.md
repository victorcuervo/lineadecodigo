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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOSTEKT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICXJaKe1zdwzzpva9OHqPlQTXcBektsJ1dK8gNqBy5eZAiEAyMCP4gzCTh%2FaeAn0g8Sh1eI%2Bcx7XgNlsxaz7iNRUdQMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEZ0SVSo9ceFZPgkBCrcA2a7q0D347fYQFTvcqbSN%2FOhw5Q9nPZ114FVHe7HOjhsnf1TAASzHX9ZTXPKr2HM3rAKGe13G5Q6SKA7r2ublsrGqoWtj8B1MRN9hCVLQHCvZk6xaR5bRIcijvRk19bPXQ3KXNdHyCVLKkYHX3FuFlqIkObwDo%2B%2FtCrscAuvAdUssNadC5MGPBOn070Sx%2BteuyzpqpYC5pSua12GXXgM08sTC6rIK6dY607IQBq1cWR4RwRZVvoWpU3fbcxF3Y21yOGE7Dz8rzp0vxs3CUl9bkvOJpsbzFn0oifbvgH4LRyUohRkzuUH22yRE66cAjpua2M2s6OGOFerxjvB9yQSkMzbBk6O1QpdMCDFKRyfrtPp8vk08y4vuuFo9fSnitPIyM0A9dZ6nwT4CUIV53uxr4QixC49Gd5NiyZg9%2F3KIV1G%2F3hXFQ8X8B%2BsZui363A%2FKI5zzJHaRORWvxZ5X6D6Oh3lGUNPTY6sPBl%2BiVKSH7f0NdT%2Fj6AXxl%2BNbnyHr7ZJwWsYv57dK6baGJWXKgRWenv2ygjJSX0iqgXVulBH9PZnuZ%2FBskSAQSUQClZkDFKN2ttbecH17t3leysXqQeIyVNwlE6qkxQCl6hqrx1SDl56Vl3zieFJglznvDLwMPfUw8kGOqUBvS38eg8z8IdJeNle%2BnxkjmIMtgt6oINrklC%2FXM9CO36upDwMu89yIWZF7uV6uXSzpE1LKQRFvtzynQ9tBpV3HMIAoPmveIFOFiMhrosYfnWCKfsxMk3XC1XuH%2Bi3HTKsA90LvDj%2Fqjwtqa9J9U8gcMPw89QAq33MbkSyztOovbRgFhv0arwM8%2F%2FaXapCyhH%2BJasYk49YC4JwxYTBKMS%2B48DFrkyI&X-Amz-Signature=2979fd11d48b3a277ce2ce01d8c4a1a7964f0bed5e76aded8b47a21ee20434d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

