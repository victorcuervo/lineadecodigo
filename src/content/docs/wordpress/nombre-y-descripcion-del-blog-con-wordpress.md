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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JF3GEA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDrtoL3aYgOnPVueec0lKOZT6kveMmWhCpU21CNvrn7hQIhAJWe531jZ0RZhEyQMErR9Jm%2FOLh9VV1NhJkMkuKqng6PKv8DCDwQABoMNjM3NDIzMTgzODA1Igzjo5uqOCLvRQsoc1Eq3AOd2x6Kq3ChGcjPXcSIqL2dfQIbvQm1pdub8KCs1%2BVZu6VqgsQpjGpyR5ORGcRzBxrPQZGzXWzuxGBb2yg%2Bp8dwZb07JkKovSL12zUvE5wLNAlqDzrJwcHHqR9WIl0rcn%2FiIhmGJuNWR90RHKIik0lgg2%2B4p3amn1HKYcaCcGVpbCWfuigR6%2BXhF3cgGO5yFGEVjvTTLnpZzglmi0rw7xz%2BBdAnZ2p7X6sStxm8uCoePTG%2F%2F7JYLDkmQolMbHvlVuEDiDkaLNJe44W2h%2FrC6Db3jxpo2FSvU6uWRn7hr2zt1R7BmazvByqtH2kpEogsZ%2FsrHzG7DHXYeLaWIYxZw5ha3KewTMpQjkQ121xsGmCyqbOPODmwohdp6zw4PrGX%2FnecGnd0yT7Y%2BLlSbH6ou3P9gsFXfPC6Q%2FjD9ffZdmDCYN1YjvPiU36XLXhamsIDPfAatFMIYdO%2BBkgqJ8%2BCDEN0bf7ED%2BG9XM9GSP5aJZMP64sYQpWNJV70pY5BuHURe7rq3HRN9pzvbUrfQgUAWjG9d%2BppHQxDEVoXWmtjuhQRyptzurpOfz4filN1QilsmrLrg4G6I3xV62h394UgKvTjXQv6X7UpEjdEAxtg69Ls%2BA%2BcmuD61MJhRymP6jC48sPJBjqkAbOD4DgTTnOXwnjtJsVnh2elXJV1fiyx%2BYO9spm6HaO%2FHIQY%2FPOELAWGeT5RDYp1mPMYxuuvkZQsA0H0n5phZERc%2FDhzVKbv9ZlpY9aQN1EVsmTZA%2B55mMJYrv9dYhcqf%2Bej6WiQK60MwCBI%2BW9mlWOU%2FN5BzbGJ3U1Q1mdwuyb5qDQzy5vI%2Bo2qkpFlK9cV41tV5LzOCvcelGoxSJvYMYGNb5yl&X-Amz-Signature=e5795f3de2f11c537cac596b379a603c47a0d4ab85a823eb4d042bbe488717d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

