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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LUUINR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNE68NeRedEmjLdOEhW1HqXOaZSNwp9jLD%2BVZDYuK7SwIhAI7lD5DCAa9jRlFib8ZBkYi01aMcpw0EMqckUFpvhufiKv8DCEkQABoMNjM3NDIzMTgzODA1IgyB6mmVGeJgjv12uH8q3AOuk5VoSEIgHkCaOnAYlgAM04GJGJLPHMgoeaTwF%2Bhtq1bR3STsn9ex1v%2FaM%2F6Z6yW%2BqFt4bS%2BTj%2FvMAFfkTgdIX6MQayLfBMlqR51yeKTzTkJoORiIal%2FFILZMLd4iPCbfw%2FGGSG2otZN7b73YEI5lLSGNx1g5f5fulZ7gExGCbDqzOuKgM2mugBibcfRFFNXJDOe9z5QvfuaMnUGFCOMCoip82qhYKgYFQNTztVEZaUDvpamUvgGcdJhbcQysseRY2QCatNVZ4VqYfEtmt5OOyxjYkRTd3D5o9HSyK8fXWrAhhMD7h6w1%2FDmu9C6V5N3oqgLrv4QkU5YUjZEf4lCHQ9Rpcd%2FVZxqqbmYNbvNqCftAu6IA7uuGOp1fa6KTc0SkGAfvV4Bi7aX4k8jrZvS6awMMIOHb4lfn%2BSHEn96zT5bISZr8NTLU%2FwUBYE%2BpVOoUhAl2koFH07MIeafq8isigGmZFtP2msX48R6GImM22LpLvJjPh2LTpYBVIvL7eUW1CKnGRGJeI%2BKXdbzj1QHxs0zIguPP3qoaJ%2FbZsgimmyHgkL41eAMjBQrW5ERcsy0cJl93Y%2BYHRt9lbRAsGVraV1QUgas1IOT070cuJeO%2FQt5kgOtM5Fj5gVj%2BGTCD3cbJBjqkAfeZDMRubwetc7adjTW8PFJWb5P%2Ba4gcmuLqgPf8k%2FY5dnngdjgl9LdNZxeEHFeICkoDHTBm5rM1v2EjuL73w6J%2FRgJ2VOJeeChW5bzqVlOvBuzFF4qLX%2FuJ5EDqq9eQHReOyP4zKNo4Z6Y30ggYQ8k25Zmmo7%2BsiHmFSWqt%2FPuT4QxIVM0hGJigog11DxgEBNS7K8Mu5Obat%2B5QDK6%2BNPm09PKG&X-Amz-Signature=a1b06c0d30b74da41fc14288742b25843e01ebd0cf8f8a5ad5bf1561e0a1156f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

