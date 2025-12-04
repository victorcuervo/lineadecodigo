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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQGN7B75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCWvWDAdUDx%2B0mlny07rY01TJmLfOQ%2Fs5sYrIR7LonaNgIhAJk%2Fraui4molYC4dYTYIvHr%2FMTdM%2B9lSwUz9AhZgVoowKv8DCDoQABoMNjM3NDIzMTgzODA1IgxzlKnstS%2B%2FEAp8R2Aq3ANV1Wl%2Bl6nhqddlIvnQzgwa7bS9KynEj47NCacv0vOq6DZP%2FOJjlHUVh12WcaRwoUcvbGJP%2B1gmE4%2FGTPlMxI3x%2BhWZKTeA41spG1EtiAGSQew2vKeVMZI8VJsAHyQBrA4nanXOP%2FnUkiJnfHSns1onqc%2Fpnf93x9orId1%2B29jxFzUWglwaJLP5GQ%2F%2Fr89jDUr3V8E9JdnYqR2rjCHVjcGwP%2BFtt%2Ftqdk6RsEczZbZBEo7a9nmdNPF%2FmVsJm732iLHe9PYzCB%2FIJywwaPs9fAkZLM6c8JIU%2B62uKkQvkCxd0H1w0BM5zhNulxkeO5KdQqiPx%2B%2BFLEXETuf51JWMhzSWtjqJbbyKD7uK1DkL%2FHd%2BEiXYYVLXPFqWJvZPMUR4WbvAnn8SGDf5TarHLbyXhiqTRa%2Bkze0QX2lEtUuB9iLwCfqLYiorCIAyFmak6RAVpdo3YAvI7r3kQDnZJMcLxIcpeuqtC%2FRoj8FN%2BX0Y8JOAM6n8c2Uy1RzYLaRgzV5xbwVO5%2B7cPjSgqrRXk1B6AwCE6Y88u3ec5Ay9fVOthratT6VvdMm9h80LFOJtynxo8AL1iXkaA65eSNEZGPQKcZ%2BrW3nB8F%2FwIs089DynO0FGdxjBmaybLRwJmcuGIDCLtsPJBjqkAZbgQTd4%2FucQ6mJF0dqxYNlX8kOC7Xrt31jrtxE7JIyDm5V5zwTcKJtqY46SLoe2CKmvJ9ZilgFpPItEsNyYV7f9vdQMrQlpyuXtzid%2BuHG%2BXDx%2FfEUk3kOBTcaMKWkF46jVyFYeNROR9CYBf6Qeex1UvxuqtCQRN2CnRpx9EuNsIwlzwSQCXOPy3Jy%2FWjn4i8ehTPeO2LnW5BT2gmjKJik1LMgo&X-Amz-Signature=1e58b3312f7081da6ecbeb15e8e54b075a8d7d76222b9465ea2f856f449a85c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

