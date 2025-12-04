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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ANX52F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFGoWj7dQ97l%2Bz2vSf6V%2BHVkBf58zQpy9e%2F839gDgRMxAiB0NvqadKpe1WUTLIOMukHmNSHyUlVOnFwXUlwDv6tEuyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMlGBRjCXd8ePgHeq8KtwDRksy7OPzhFy85VYd4l6P5Tt8rJP65l0ZRlbL9JpKxW1rl%2FmLj0%2FMEW8XfpRQfVRfoUdU4VqEe38g3Ln%2BnYPw%2FkqX6NI2Aew2SfZV1QBNNoPka2J2aTdGdwhnl42zfBV9uqCNxKfitqV23BKYIx8%2Bgwa0gUVEkYpA3gApMF%2BjuS%2BWSoA%2BqtVaLVO1wfJDKgXXwwqCbYZQpSRcaQnApMylsW81umYlKyCra1TIcDaZrMpRQot%2BExGm%2B5X1Z51lPd2xWNqz51KiGZm%2FgSbiu%2FGDzhTgd457%2F9YIk1yUoP5NRBuGPRL0%2FJSGpO4jDTyiOv9FmlWH3LuCQ6zBhkJmqoDlPjc7EgWTY8xpLMv6%2FKt9D2%2B0rMQqRsWzCfQa4NWTAAghC32rcba2TiFENKxQY8nvqiVGa9r3eu7r44Lo%2FkyxvrjogSBGx7hOB5QVYZCWuoI78ihHBOWbVrZzm1CJB8dqL9Dez%2BX5Hlw7GFsmjR1tMX90uMjDDBtUSOHUSakBIn%2F2jbgXumK2kIw4RE46l9jTNzjAArFkxZ8%2BNiAnDELsfnEPTNffvV5zeDlEjAMCvZL%2FfQenJK9mXs9nQWrpxWrc2VFmG1MI%2FWg5o5CDmWZa3QR3pse7V8o4CjMgFV4wm4PGyQY6pgFtaF3O%2FN7RD3nviuXBvwTPFDLvQ39A3iPI%2FOj2OHchEzCP03%2BbH44%2FUNYy0TLePjtJRCng9c7trB5qupW%2FtA8WdfNddhH0LWab8P7M4B3mpuHq%2B%2B6PrBIxPygH3Xco35y0HXmF8p7%2FVoCW1oVRj4TbN%2Bj5LDG6bupbHE7WB%2B6u2Atvq7NbwxtAGOoiBBy%2FSUa7qIzt02omtFMbADXrWPWqM9lM36HZ&X-Amz-Signature=e3dbe32d973ad6135b0900a48ec64dc3b99737cc56b8110745065fc822b4243e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

