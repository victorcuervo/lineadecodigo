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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4AXWMS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCRYsz1YgBYkfQFdhzoK9ahrQb%2FstUyk%2BwK25XVlZCVjQIhAOaehW2CUhmjIBgpQFKsvcDHUr7YpUstB737BcpxAph%2BKv8DCD8QABoMNjM3NDIzMTgzODA1IgyFWvjNCO3Os%2B%2BV%2Fuwq3AM3Omg5XOh7ccoeqPvoLk7J3fCBt900r1IimKfsGjA7AAExgT0%2B%2FD%2BxqyxMXl5gueQ%2BZLA4FIypASqOycX12NOqqklZo30vrr22598jznaQOlj%2FYOh3yXYlgIrhOB8TiSf%2FyS%2F2RrpNUF9QKRKnMk%2BGSnFIbp0Vads7QEO7g7RxLH6biK1kjJZUcU6b95qzzRUoVc9oT2j%2F%2Bgp9uCyWJix7OCKUDy9fyzBgWXEAA5RD%2F9kqEjm4wohCnlzkvG8iYyYGZopEOUHqPbHGVXd9HGAf1mHQDkT0SpYAa%2FUGZTdWckmzdblQKvIfzu2fl%2FqZhoRNelXiHEk%2B0hskvQV7KRdDcOmyIoLLh6jlpiLMJJ88fIBZOY1m5GIFj31HdYEyR1fTVdKZf6a9pKMjSOH9iRbUXpB%2Fdtl8CTkoOTss9OVEJKiI28d7mqKAueS%2FI1zs7Im6jEwxC%2BacNz8S67056c6ZXmQW6x0mVR1l%2Bi7QRMzpt2I188NQwahv9Atj2OMpcxsazOqIlX9TlxD68yCveSyjfN4i0PtxSE0O9xf6gAa1mKeTXmv%2FtOSjdqiQQ%2F1CDy7u9OXGhUcqN6U9YUbgKKL5dt2ioyj53H7l02hDUqX%2BfE361a7Oq9TQXZqGGzC4y8TJBjqkAaRI96ko0DgtSOyoY84kCSuGtb6j49kKbztqBvwr5t2g2Wkx1131%2FCPcmlSOOpBG6E7io7M6faQ1kdugFRtMDqbXqEZCd%2Fo82q41VRgwn9NEgbthak17ADg%2BcV%2FZsdmF6mpEQaFbQdWn0t%2B8zLGIcR3Ee41c1OrF0tm7fZXVprypDJv2Nu0%2BxL4WnnCnFb0FXTD494tzUNU%2BD4WS8Ds4oaU4DSmw&X-Amz-Signature=04e53cf3d2ea7a51ca4457c696cd11c7e19f6e3b119446dfaeb443ef983bc38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

