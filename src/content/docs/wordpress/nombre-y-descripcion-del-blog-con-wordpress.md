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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF3SESM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2BzA%2BkweTu9xHbyzaI7G6CiM%2FOKZqm2v5j7XrN%2BpfvQIgeAKmkCXpr9oC%2BomdEG7jAQ1kD4fH63wCxhczVnr7i%2FQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLkKGHZMMlZngWEctCrcA9rZzOdUTnAb6R%2F8vPABA9hERzwJKManKfP5o5vl9EnX2RvX%2FdiahLE%2BueNfGqCTTdKNGJznQ9BpbDlbZgKVUmoqvvrcGuuB2ss7ZlPgvQf9kxxDU9WVTCUnv9G0kA%2BQieKGR85A%2FLVjfrYOfwerxgv5fGf%2FmfS61IHQbvN2ZP%2BEWkv9mFWw1TdMDgiS0ilg8X%2Fqpmwy5Rm2sD7lSBrl8KGFYlplrZ7%2FyA19N%2F1oXTJjRn0zO78erjODWp2ukPuj2XNIaYEjsbZxqNrqULGUVEYHkXXxKPVbLChdrO5Yhe2VaigoQTVjn2QrQa%2BuRlhxrQXRDdT5KMm5YEu4%2BbII9qMwZ5AiG0h1QJN6cbvQHw3fjRrRP2k3n3Xf7zexUI9ReKn3pTnPLQwrR5sexZrnuSU9jB4wVjB1VeibNsMjh4z%2FdJqsTGd%2BLYl6D8TSHGJ1FiPk8aN5qmmt1kKUphqC%2B22Ljp%2FWlpTSNpAKrlf2qaG%2FPOuK6zjfJG8RUXHwF3q69el6QVzy%2FiHywzBmQQ%2B6jV5y%2FbWDYXGvP0XsBy6vNljpyzPGfa3mU1CrPKY8GueIZW%2Fdmqn9gkk4ILChArWZSABy%2FKDiW4QRyrroYQ62sTZeZv819sTXo%2B4WltFDMJ3DzskGOqUBiJ2l6RkE9%2FBGN30Q9VzeOXvaLRt0L%2FQ14l%2Br1WyCCkOlvaL3TF6GA2McAl%2FeIiyVFeBYeZK2vvV%2BI%2BEaTG2%2F27GYYjKYcZak6MokfAPsAkh6LYdMXHUbrWtROYWh0X6xBkRq%2FLh5M7DOCBMifsp9mSLfYJbdvnzTPR98xnDHQJPwuSqbKv3dFHQpSTL2HvwS9m70CwxGw8JW%2BVQbVg2c56WQorKf&X-Amz-Signature=3b1daa64e42971686a5f0629c422eb6fc4df5b64e9a64b1e93f017057fac34db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

