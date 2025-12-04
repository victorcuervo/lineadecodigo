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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYEUGGGG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJFMEMCH2b0NgIC65il%2BxEziXyp5smkT4BP%2BT5DbMp5CT3ZBCwCIHOESa9Ht3SxGmqDzeFRaewWlMgnzwU3HBE%2B3L2tYZxYKv8DCD0QABoMNjM3NDIzMTgzODA1IgzVzB7y5YFVFhSeul8q3AMwYuNUBSuoWf8KbKqWyEqqLzxs%2BUWtUbtmdc%2B5QKWyg4toOE9u6HkiI92BkjwC9Fk4EmAqUXwlO0iE4m68KkRxRyA7dB1fXqesfLrQKI9RFHqh7RxcScSDlzVqNeuZrPkhEMVg8Q%2B%2FKRi%2BffOT%2B%2FWBjL5JaIwWW3%2FIhD9Z2YJkeRvTLvp5q82IdtcVEcKnC%2FZxvPGF7RYW0ChQjilOk4fN8OLZxQ2hKj%2F0dTrzXHVwAl%2B6YPXEFp8KK2mpMY%2FMRcA2%2BpLG16EVuYisJhbyN7%2B5pT38HDbcJb3envrK2hlM5EPnuMz2ekzGycNdncw2BS5BNGUoVIziKw3X5Eci3XwhLoS%2BSzWQOS2VNvfAiK2rZ9XFGuArYI9%2Bn32NVwxNSulVLXu6qinlpGnijK7QLK8wYR2%2BCdCyujPyirdn1G2Th9Z3hzmLa0HY4xEeKZt91kTuC2kJN5VujDHSraocJ6L6DDyZ%2BtWw86sMdFJJJfKy3I9EhF8B7Jm5J%2BY3VVSMrXNzlMGdL94pewx7Mv9RIBzOCiyEySItNH1HNBeZFQuZ1Y%2BqT8ycPcZnkauWgmcnrfe0Fzj%2BJhCKdggi9h2qaC24duCPpxLP31Rj%2BAd9%2Ffovj4S3IhLmoEF9bnFdlTDwkMTJBjqnARRQ5sl5TWT6V9D3OKQxqJTIqkLLrP8tc3k8SJvj0s3HPUahvgJBNQX6b%2F2jHEF0tkuZA6ppHctKGbhgrTY4XThOLD%2BeZ44w0YnogcqtV3V68S0B30vKuN4RYmq2QDzXPa8L2tIBRmA14h%2B2qDtAbnZYphCZ9VP8UxEJNljLzx7466q1otFgp%2FEqojiPcQAuJ1e3vRSl7ZsItWrCznFkTsHAN2iw4YH8&X-Amz-Signature=438d5a2b2b186d0a03660149fbb2a6c12abc121a6657dba82368de5035a04e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

