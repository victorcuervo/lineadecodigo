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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIYDDSA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDL9pwpTKeCG9reqDBYCevC8QAwPa1hvIgfDiuy522V8wIhAODMPCJKwUEcHAJc5PATZOYSm%2BnYn955XJwPfiQtgbqHKv8DCDYQABoMNjM3NDIzMTgzODA1IgwUiOBQPSn%2BDAx5vNsq3ANZ0havMlWXFRlwu6KzFBah2yY9FAgdU0uwWz76A9I%2FwX4v4KWCme1Y%2FAbd3qgz57FjizScpaCzXNcj4P5tjlP3zDB26cLpf0bgl%2BhGejItNFMyfRCDxpTy3OH2bMd43IqVnCq7wsd7QetvrlZEdNo4q3CiKrQLEFxjb3rmGWHlb3zw7tym9duGWpf9V9xLGt6dCV28OxpbclrtyOOeHwM2%2Fks%2FHKgOU%2F0pVxzhUAak9MQZ928ZjLsjK8j3%2BgsAQ%2B4ihr04n7TJZ9Aoi8pkLsbCAnHCFVAuxruixTUdnArNYv8m6FmGRKuo0EfH%2BCEy3uOn5mZHoxfqBmc86yi%2FB6lFCHbGoZzUoD8bTp0u%2Bc5mlXpL8TdO%2BagR%2FX29VYN7kd%2BgHmxiyQsrRUHgW%2Bjeg25v%2BBhYqNOYmsO6kHO1SQEOJfhpxvKAlOuZUGoHKjT8JDSPLOBxnvSwrbGJq0cz1QnWRCGFLrhp7TBfv6veG82zaktwVh1VmQ99hqwR96jgnTkY%2BBqB7AS%2FjHNvQnNc4QHwTWAwkvjRYAwIKK6vsBoMp%2BIopPpCp6u9fs72uHFQ7FOmRSXa8Z6JxE61QTwPCMYcWYvJHJbqOoKvA%2F5FJ%2F5tk30Q2OG9VldAyBNlTDCtvcLJBjqkAUE0ZMW5l6tANQECkW4rKkDrl8FPiOEfjPe4m48Jhkh%2F09MlRrbApAOQAdN1JjwSf3kz0HkGvVz68ozSvNbR3NtuDU39BEyWHGWdQ3%2Fp0FfypApnijZz6wUn%2BCGGmD%2BhCH1juGztiyvFtZTXMCcfp3uBf%2BM2B0zdCkpPy4s3lD%2FWpKtxME5YbHCv%2B2yzRmHHAvyAGUR%2BQo4vmeZjGv%2F0ULnSJvUm&X-Amz-Signature=f9a325a20b8931c229cb8b6063b9817c00f9e5d116ce33ab3be1ff37b4d40039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

