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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHMNO5K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2FNxI9CQgYlDGZMBpHax6qgT3oSYg2hOqgBkwgrS5TRAIgSqeuMsczqAIMtia2by%2BEe%2FcKN9kPT%2FnF44S0psB6FX8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCKKkdn5lAaZe89NXircA2YVBLgmGn7tjxSSGcxLO6%2B88dkY6dw4cNV%2FpI0o63rSDqbV%2FFOmXprxeLKbpe4iCXWKJ3Ilh5iJdXlTm9nKyjqo9GOBZTJz1CJ5UDSfl0NjE7PpvtF%2FzBmJMq8%2BZ9HOFYpUNtqE10Yts7OpY4TcBNRt2z8l29%2BctqejT%2FAG5OrxbwoooPtSpSbQxwkhNZXYQwNEuBx3GePO%2FsEB8GN8LtB2tEd7CIPWMsIj8pXKcQ%2FhPoZAimeofEtcPJ4yopAm2XsiZx%2BlUu2KePem78SFxdFsgvsk6x2zpKcVe18Yj%2BBKwcXNAlUYi1ILv04tvRcP283GLN2mflh4L2PzzN5p%2FH%2FySxRzvf8xDjNrzD3sslLI%2FZOYJh54h7GQbQBrkYMOm1dllojouRPrjZ%2Fy0y6hJ2yd3O1w2cU0MBkNX%2F7TdLRHcm%2F2xbDkmLkkRJ8vld5yHnJ7D8h9AWU6a%2BAlUtQc%2Fsmp26e7rZSH7aaZIjg2MyMLwh8%2FxZSMzPpRjmkWSj0RQBFJ6LNktw5ScPZLaX8vtCy7tin3Fppo7KpuWVP9tHE7S4onCKfMtn%2Fkr4v0wapjghR1S91bRtlvDBgiR7mlaoUF040qcY6KnxqIsuvwtDP5uSIBoAsROHsrNGc4MIL1w8kGOqUBJJ6haIjYkIcduXbE3Vt0IWKHzlz6iuphTFfW8B4V9RmHEp2BsrYcDTQmVc9R3ToK%2FT%2ByQQb5GP3o7XB61WtcRDnYb71xSKFsQSvU382LrraTgge1pzZsXdIqqoqC2n%2Bv3Rc9dEUc%2FV4as4L10bmy0KxODeTG8MX%2B3zlbkbErTTKnafv%2Bw1knTWMLdX7dOBBhRoLyNSP7%2B8f7D%2F3dEhFG9PduEWS%2F&X-Amz-Signature=2f3cfaf953051234baed2b08373599d38cd66abcf41cf769813e5c5ac70dec10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

