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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2X3IL5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqb0eg44MmFZLnJ1yDzF0A8DUHd7E%2BFGPqFgecrDxYjAiAHDGTRaEKkPRo%2FOeCp%2BnhmoM6x3S2X2VfE%2FQUymqPKBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMif9g%2FZRXyogFc0%2BwKtwDmZhwPoBfpIyYtz5p17lMpTBcr%2BG1royEZX%2FIy585mHWArvUNA9TGySks5hRFbriECLCFgdw7%2BGwX%2BJ4yH077%2BRU1svAFnt8LETDjO9GgTnbkr5hW3D0CX1X%2FzL%2BjV3dGe8aMfij5by0xONPHEcY6Se4ulwAtM8Q0AnOnW325hRGbU5dgK%2Fr4vGCkESYyrz%2FGZbqevEpXNvIq6CfSID5BsjCf3VDfqG%2BAfa7ZRt9nmvYtnGRqP7IMm25oq7ZnlJhnM5ufYVXbGo6MDhfC6%2FKlZI%2BqPQhVgPBK067%2BxOzrxvPyXVEWFXb58rOW4BaEnF4jqtMV814%2B3WekfnMXV3S4dX1xD1YA1o37NGhilopdtO6eR9SlDjOLIZQ%2FJRW0TqrwOTx8wz8bZOP1AW5rdIfXvo4UghfKiFKZ4p7jA6MrirV9rPWz342xMPllw%2FmVzFqDPSDdpb6519s%2BmVl5xoh%2BCfnd0xvgHMlp2C7H5vNIM%2B5eh%2FRJEAFeA3U2Yc1vBf5TrObb8zIr9u2cA14bCSvE0ofJ0boIvVa7FmP6WLxDvx7AwvwdrXrJ5LkewlV3I1URKu5OUMG48z8aVd2Dpc4o35%2B5VQdDrslWNE99VCCcoOyc3dqwvZPVJzNiP%2B0w74vIyQY6pgFRloQUM4D%2F5Xx%2FGC7Fg04rJdp6eNepsHFvYLiG73dTqSpaltdtu4bBk1%2Bh%2BVaS%2BKSnRqJO2e5is6C%2FIvE%2BnyJt5K9tFgiEdOHyj8hbk4GZsm%2BuT50tFcAJMsz7Sbh0iYt8XAT5mpUgn8v7R9o6QNXbs3rTZcLMOAP%2FgCNNN5sWXfWL00wyxP8THkHs5ndsX9ObZVc7xHmyjEz93BPNquST98gl1jRE&X-Amz-Signature=306e64bedf6bd456f43bd07ee1be4de8f2ce69827a3a464c57b46fd020547f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

