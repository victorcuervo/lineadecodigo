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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBD7EU4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIA%2Bn2XY7IhQvyyaMKeMpQP5K93nLZaf68qHO4qLcc%2F5sAiAA%2Fb18vaMqmJOoFILcq3aWKh2MV2z3y8aQutT2liABOSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM9Z%2FzE0hO17K4lNQnKtwDYeZ7oovjIPp9eGPzVzAGv0UAPPyS0uemoATs0iSQq54Ji7Tpgh%2BEemXdVctj4fHpFXjuJGKx7EMXhzRTN3RRMgYxZ9PX1K8wRe7n5i0ILCj5i9QtI%2F%2BPUx1P%2BItBbqvYrjXavkR9zkW6H%2F7VH38VGxyRvzG%2FT5L7K6EMaUH6wdcORTL%2FYDxLuzAH5feY68rcQhYZpBUaX3CD6Lce8ZOfeg0zJVx%2Fe5b1CUfm9XbMybKHLhK5FaWEVexqVyq4dPL%2B8ALL0yPggcB%2Fprdx4B0bvOcyfDkYTwhok1pOj%2FaZJQnSVwxg7gXvxx%2Bfvnjq1GjiND2atuMxH%2BG6lCWUZMZgV1MZgYygzm8Nbl%2FV0J61WGoYUM1Ys8BOVy396lJFVQ%2BuvKi%2FaQGe%2BVTtTNP6RARoA%2BIH7Tv0vQfkFApzH2kxPYu9jNzVyQxS4jMKA6tX7uNdaFe6qUkz8Ql%2FWiw9PQAKGYg2APosXZfBn8owOdnWToUP2WMhqFaojDAQFVI64gPoWXIVE9%2FXgRnVwqLm%2FKHByBXl%2BN6fYUBZWm4hAMo5nO1dimCPdYWbUlX5ROQLb8R5%2FsqVCgzvq%2BIh5zAXiybBmuysO%2BU%2FoutubZxQnThlKyNE4iW%2FN4rKjWZ3loUwtYbFyQY6pgGJQ4M1t%2B%2FD5SaQyK2P0IaJq0PiUwd%2FIiSyi2p6JLmpN8EzDkSQQXNL4CDYJKzVXBeFqmhHb78j66ZiZsklK8vtizhLxpZveTa5ZBTI9457JgmxX7WbYZ5lJX1agglbjtroIpkw92vHdr08zHyZwD%2BBCcPWOQGdRSs7Vyuhzoojm7Fm4vCu61lc1WyXr0E7e0wNglc9r76P24Pr%2BNIkmvME1rgK5CdE&X-Amz-Signature=76eeeb03b1e8b8a2603bd2bc546d68780a2f81cc32fd71dea7c2844324880c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

