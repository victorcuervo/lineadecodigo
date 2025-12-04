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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46VKOXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEyR9XVjMmQkwwTs9EZJ1aaMi3%2F6c%2BZSkqTO55tQA8suAiEA4qju%2F91tzJgORnHtbPiLuIesPyPTKI8sCSrg%2FbIFOXcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFLmQY8JwS8xwdDZQCrcA9VN%2FZzS5jrZGTI8xpHQ5TlWXmYbELXcnwROtNOum%2B1iXOplVLe9bfIrBEUy4%2BM4wu4PqAEkMECIBTEIDAK%2BE6Se%2BTDlJAQ0qG9xZ%2BP046akteY1tCsZMK%2FCsFqzkwAwMQcT0WcwqwKKK1hnjzef%2BqDEqI%2BcUlGnERMg0CWaA%2BhWzD5cU8vkScVwOdpoOFd3puOurNpdvNvUyALZChpfGyBI6SNA%2Fjiv6g%2FP0zB4leq7KBm55hZyxgu%2FS7U5wOe9t6wXTJQAdaMM%2FrWP%2FI%2FF04OxF3b5rgxXfUoRXIH0W1jXIg6nhtcOJoS3z62LiqhGN4VktGNFX8G35GQOTQUp%2FWHZraCIq0AxA2%2BMNSQfR5PUXtnf2MKajYdE6nIHaCF%2B%2BhVIpgfZkhzSk8gklPwmuL%2FQcSaUIrlu5tapcztOLwcY%2FXky8hYF8oGrnIHC%2FZcjfFBC1UgdjA%2BGcLQS7TaW8eqN9r8aovawfF4Tw%2Fr08NvjS9EwZP%2BgOBr0Q07gx4fv0nAkIuJFgFQs3CLKEJePuXH%2BiVOSTJJ7ZeiYp1IK%2BZPRiV5oR%2B0FSfjnEK%2BKal2RcQ5HbLhl9y8S%2FKxvr7LozS2aFqmpIpT9YxbcvWPxU95KRX72YXSTuFsiPgXnMPXmxckGOqUB5Ee3R%2Fqkto9mY8FFNnSY%2BjRbyA5L4G31Wxk4C0Qt8fZoxoikeqQN8Yc6U%2BZfMGu%2BsgkjpbXDY9iga8puciXg87l7jxX0a66VgAhZAPr1UOHTlkvT4vu%2FGkzmGO1FjAHEKgrwpsfivig9e%2B8kLHQoyUy1GyfD2yiZCMQUnvD9jDRHjW%2BQYLo4%2Fw0%2BnFm4imjJsHDCOKNCpuA%2BaOjj1%2BEKkzQPMO7o&X-Amz-Signature=1d2238e7e5d4fc55bbe9534635646609124a7fbc9274ec37f0fb27ff3ca4dbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

