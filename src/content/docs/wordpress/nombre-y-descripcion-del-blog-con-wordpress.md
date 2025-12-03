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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5UYC73%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD%2FgwonxKRnWi%2BAsrmrwajCODIZL8ve5YDLttkecFz8XQIhAMEz4TN%2B%2BS8kwyU4z30lvifI4Lc%2BNx7QoZANBNlsHwLXKv8DCDYQABoMNjM3NDIzMTgzODA1IgxMX8NtQxlieoCDb1Iq3ANWWJcBFBhlOdDl1qmobXo7kxBDxn7J%2BfJyiAqtje%2B9QZhv%2BieEdUCLEewHC31OPorge8QyQWQBW2M6BtO7pU65TE8izCLX8bzsvltzvyrESmpu%2BlSxq4RvgiNbrc85h77cEAH4VXIHHv1VfDUHntnKjDid%2BOOL56RP2rBDARVwtrmB2UwA8wz1%2BEj4KWgOSqCIwPkdA3IibsODX6ZP6cEmMv7hC6YUxevTHy9fC2JyG%2FykBUU6jLBhf5dGQ0%2BAJY3zqiVPfs%2BXNWIiAj3uYoIdMkdVUSyOJcRSEOqrhy6PSFLdztKr5lNougV4KWuNzCpYNQZwTKcSp0ErkzFlISgajQIfcnVlh8Qu0oOvbfDM%2BVnRjeckBSbhlanSDZdhYmxxRFuGC54fyjMBdG4uY2Rr4P%2BL0QHeswtlzeMotXFtVKunC4RRFKP7cBv%2B8IGDqauRRSO%2FcDIXaZDAxo5Sqp404eMVFQJ9rmQ3ldvkSFwOTbSL7ECNSbIccZE20Gz8qeTuc2ghtGCs%2B5mWn%2BJBDEwnf5RZkRXG88OcY%2FH9rcBElmjPQ9bzai6WxvehOIgXLK196q0ZywB0gRVpZHOZVHJ1FEO4eti78l1Ue0OJQ4h2IIKn4VavSdbN6zaMtjDPvcLJBjqkAWI5loozAXDUzmgVG2ORMyLc%2BAAMryUwcSXHZNLe42xnOJI5qOPbcIjYwogFlgNIAUsN2kvSZQpGtR9tXHVb3nfDeNP4ib55tqxRsjbwXVWMzXvit%2BzKpX1oavNp5N78LqYIMLk%2BHBNzFNZYRKB%2FCCptQWxTgrGPHvXSklHLnHVaX0QzF59w98yma0W0HI7hl2MpbI%2BqJ2hkQbVI%2BA3C%2B8bOLJgX&X-Amz-Signature=dbd9f2d33e0d355432066a010e49458dd2dfb647bca1c6e95fedee55d7de2741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

