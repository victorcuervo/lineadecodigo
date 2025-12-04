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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCFWHGP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCpgXybH76oDm92%2FDYnTK1y0Xj6HwzZUrV%2FPQ6dkp4xbAIhAIA5oZuR4CKvpzpY2%2BmkAcSBNp%2F2yW1h%2FYL4q8oCSBhsKv8DCD0QABoMNjM3NDIzMTgzODA1IgyaZaX763huqazdjcEq3ANIZbkgh7twrHOU8GbFtWs9%2F2SRT7%2BIm6EUgWxiewjOqUUpoRQGcUXyYblXtSemECrJ7fzifarV7V6nMWj2u%2FhQpcbj%2BRF1PfbMk3xge0HccnPhg5LZ%2Frv3Oo72aHtU1myTAMLHTF4COPXdhPV6jbWekI1yz3ZE7w2fMVTC4Vgc0sseP3x4HB6qh0Wgug5dRPKXDXMvtp7l2Df%2BExpSN5h4LIAV%2B61O9FbNCOev5jpP3aINqphwc2RwZtDfj9rkCZYwVcJaXUKGYWAzgYTBQSn82cRBY47uCLodQPUzmpOJ1mt0f6pKksiCBRkXjOK0QK7l7EU70guLCQo1JBQKnBnWBNHq2dapZZp7b%2FkdbSNk2KpSq9CgR3bQ0JJf1PXEiR7HnBLU%2F5SG6ohBaEiAgpLs8URLaBYmmgwOeR6mhEndqsC6LQcZ3mK0BQG%2BkpN%2BBeE143wCAl9WKDxLdZJuhuEmzQk0tdJvRO4JR547EbaBJzpXvdZrnWar7bX8bKYYIIuVcN4xVqwe2KgCu4QLLCdABbZ%2FN4g7GCidbAdxkNNr8v3ALAbUuQf3JcANfu6wax2pMhFVSKnszZeJM0FO9TLxsNVrJlonNlHSTQ90%2BgI%2FmMDXK3XiUp7Ur1TjxzC6kMTJBjqkAR4TpsfaE0LY3u9SQGJR6%2BcV6ME9mGUIGIW83QUJttz%2BYzaURruyHVEUMGAPIrb7xO8HNj99TSFZKEC8dL4ZLEKzftvIj1zBYi%2BA2MH4EHO8aamR27QdvY2QUk6DbNdlFf09Pqsv54wh6H%2FfwQh6q4%2FbMRbG0s82gpsxaDDGtNJcHg7Bj4%2BXnVT21I7W5KfZpw13deUKa839Cog6b%2FDrJve6Elvt&X-Amz-Signature=5859c60b261c8ba6f526f761ae6f880f8772fbeea718a5413b967647574eb9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

