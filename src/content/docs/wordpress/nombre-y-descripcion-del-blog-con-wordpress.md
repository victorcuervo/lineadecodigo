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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOBJXVO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFIWI0FEyRq%2FomBHTUcHNxV2lL3Aw5ZCCdh20jeNMZ83AiAt8I1h5xgC6mBNUhO2ii5XGy7A%2FUTLxXVj1wYn8k%2B5pCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7KaSlMD5JjsC0ex8KtwDf7VoagRO6mpSPkev%2FEZgZNTGGMsEjN%2FUjBHkcSQssawAPerSu6AZO0Dtsv3EfJWtdgYckWuDeVk0ZxruvhqraEm8XQFk81F%2BmVNwm12SQYQAENDakCdqiiWkwpTD%2FwExpfObNlzRaN6geZaxT6J0iMflIrD%2FatXVYNE5Un5wbUHVpaZoeMluJd7Z%2Bg9gk44zF0jJ38iUAgjMwpFlLZlqkbPQe0m%2Bv53bZ%2FNnNr1%2F22BM%2BcoTOoMfHjighGd%2BD174zu9rbl4y2JrJRv%2FbbtUueUJnlpeIygE%2BzcrMbfhNCBAqazVav3%2FlWJQfd4bwND4ci0yiSmu7LkBAvDO%2BaUP6vr5222zk9nh04fykxDuPCzDIGgkz%2BL%2BNBjbA8NMBvLxHum4U6yjCz7xT%2BFy1uLp%2BURCNmrbwGxz6KEEKbN%2B5fIQjXZoA1mwRT5SQ01CmQD4XXapYqaaSXBsfHrJv4DolRNdBY2QOKKHW5AYRmsRKx9MwB2YC34rNuY2Ow5AY9ZAVTL3KSlINeDPYOhmnz9wuWINQvvnqzKZT0zfnUHEiHvgLIF9M6L%2BTXtGRKGuDqBap32wx9tnI6rQhaSEJ1QH3F%2BqrB2LZnKT9bRjXUbJ%2Bdm9ddkK0diqq3SrCeuEw34PGyQY6pgH0CLhgx4yPr%2BWp%2FvgVY0DsqMcXN2En7fV0zvHuqgIlFPHDLZc6VBJ%2Bp6PmGPhQ1aD0iHOifA8FfCll2sPk9TgfOwhf5MzYr5jahRLAxfUyKP%2Fm8PJH3a7xE4GGWIAN0eQynZLrPEaieV4BJZCCvxSCuQ0Ro4jbjwsWy8jZKMfR8hhKy6CKgzS1E6YxdPIV4y%2F6mWwu0MspF32D8BMjsxSsPgmyYPtz&X-Amz-Signature=afaf67ce6e0306e79dfe0fab6df4b52a053c953039aa20eb548d1a732f85aae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

