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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YE4JHUP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGcKcA0cg8E9ahLfPXMszlJvKlDXyYDZdBTt%2B9RbebCAiBGXi%2FssPPz8wyk93QyFAJY5jBtopKeu4pUMwB6in9toir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMMln4YopgSOwGQGhqKtwDeLAEqOlzQJ6oU%2F%2FS%2Bw41ntRXJiS1dLum9iJzZyV%2FDrL05kJBvnjYq8rJYdLbpTlw8iN%2FsO6jWupttjDo%2BwOdY2c1FWei9daN2wuJZA5HP%2BRCwjrrcHSXX0ewJ12c7NqNQVxDg4XJ0dXzSWPLZ32N4JwR%2FTONmmAu6kUVq0dm2l5PxM8ljYVAVRK5G70%2FUsFTHVWWrrouec2iDLrdzp4f%2BBmc9JNCCh2Fyd%2BFovN0vrZpoPly%2BRkI44nUJdbQfwjI2X%2Fgz4CM15pG%2BuNuZFcHg89iLGYq1Eo2MGitoUd5odAFiMOBiyegxOJYk%2FUDQ5pQ255zZ4%2FcxwgoEi0w8o0r5fk%2BxjDXTpcjQLqlwPAI3pAeVe6nMe3D0lEBFm6sg02aTXVmY5tKUBsdf7CZ2ANPf6%2FnK8F1KuTo9TeeT0KN%2BFUbETzqQvd076iJB3PeJYaky%2Brf8Jv2Miskuxfhl3f6KPa92D%2B7jSiojLDOiP5pHrZx8zcR6y9Am2TwdZcuA6wdTe1C%2BE8rwjMMUtncMkqdk0dZUD5vbEDi7fK4kBavD8cq0Cyhl4ItuiRrir3ZY4o2KS3XuAjjW8ARLAs5hQqRS6VxJf4xANSEA8k3vbQI8XMd75pET9bm2DJ%2BdJMw%2BKbQyQY6pgE9aOpq7hpkfpw2kG35SOkTycGmodxJYlXlRCvVM1K4Y%2BkcfRoqStNVFxQfDTyNyS66nzt7o17lL1a67Dd2OCB5aV5BAFRo7bcPD%2BnziTUtktOAS7yDriyh1fskaZFId%2F6unDHfYomyX1RIyQ7XrT9IuRJmk4u8skVweF%2FqgdG3jFF9OGY7c%2FU%2FwUxYx%2Fa3vILIDcJoG%2FAWj1iHs7tPNtJvUexzAVY%2B&X-Amz-Signature=c2e0d6750be3f33ea8273708fac194f8af40ba489cbd59e799214fe3447108a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

