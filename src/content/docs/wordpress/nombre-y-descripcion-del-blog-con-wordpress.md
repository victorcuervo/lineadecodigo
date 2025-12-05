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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCUXSRM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9WE9S%2FadTJdEpiq0nlA7ZJlAAXjkx7bJ3lglVcMMz8AiEA27ER7ufMvGzYDqXlKNezp%2FH7Al2uOggBDb1SYDD00h4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEQmiEDu0dWWRqapwyrcA%2Bi4rneTZbHy17byvq73bU29cZhEGvIv%2FgRK204CujKK7HCl%2B0FdI3KCNtBuAMJCp788se04fklsRS9qIcnlglqRaTVrAPM3MydNk%2B%2FbIHRoMccxXyXyq%2BMCCU5FA8TNLL%2F05VaAhZ%2BlFvbebEt3uN6CMM8RXY84IgYt0C1GJtuaQ88o03MwBsKHFcptDSDzf5y4VL4rXwLyM8vKu86OjcbJS5fO0U5y%2FvxLq7zAHYpfFv1g9sb69ERzGgcEp5jCED%2FSoB8WSoiqgucK2mYwyMMrskB2V%2BiIEOFOOke92roSyvCTtwUsB3Y0kkiTKfD%2FUInb%2FbnpyTc0cl0ipMcJ5yPN%2BLFDvgwo8Z%2BQMyHqvqgXR%2Bc7sUyXFtKEbyiqHM3e24DtDDmi9f3xYi8HCyS56YzkaXMHrRDcMpGXeYVE%2BIcvCGaDWlXTz%2Bot0tBdslLdWp1EhWbQefdPz2QtBvn%2FhxJo%2Bits28DiiUjaORDHn8X%2BHdn1R9Z%2Fz%2BE2cZr9SwiquJ7iXE8fCgzWyzbWN6r3kCIHIniYjUSfY4x50OyK9Ie%2B8uGmrsA3bDUXkHahOXNhsQ%2F7zWJ46JYwXlfrMavihQTZp0pJ0oOsQ1uvfhSP0FxLlHjScKDOYKNrEcyEMObFzckGOqUBYnCUuJiYk6x9baTKWx7n1PT5T9b9m0putIJHQb%2BVopy9U9rT57vJbNv%2Fwyd%2BZjaSbPZkNNIc42HEs3cCcq88rtZRz8GuyP5pT0ipa5xRlMQbsmNjpf0X4ChTLFpYyfVrZoxwTzXYE7jtx8UtK6eS4uCuxfDy4cp2QMzmKG%2Fl23hVGktBHdsv16Wtwe9gbtYiqguMGIFORQD0KcUgKgHrmPzITrBS&X-Amz-Signature=9cb5c4e9365e2580253d626d0f03958e8e30aa575dc7d3a1e767d5b5ddb7fb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

