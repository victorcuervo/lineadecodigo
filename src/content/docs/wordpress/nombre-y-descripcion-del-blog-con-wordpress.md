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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ5A2RLF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdHPVUhCfYljOIAQtlXWPKbyqXUXnZAelTkv2tVNbmNgIhAINYlZwX5bO5zFZr1Noci7L2%2B%2BO%2F7dIllxpXgkFA%2FvrFKv8DCGwQABoMNjM3NDIzMTgzODA1IgyBk8OGdw6YjooVIwoq3APRJRE%2BE9dwt6mIGf0v0atS3%2F45Fz8A%2BKNiSmg3iw0Mz0gNxEZ37%2F1xphSQomZ7Rr6ocm%2FJyd1%2FoFCmrcilxuDolekYZtS3k8%2FAsMSnQdti3HpCGTrWp7qvpO8g2iAT4XbQVZ%2BLFnxqUVVhOYkRT8EnhgvPX0VuYi3XyRoO5yl7UseprpuS1OQyUNNpdQXxHyhAPAob8yu0IXctxhBT3SpTmi%2FtS68wR3hbB2nBjEtW4e7JkXf%2BuZcNhyyKPH6ZN%2FyBLtU9IBFsOLkJ9uCL0mBFtnVgPwokhQQ0aQTBI%2BKSLE945v5K9dC%2FUp8DUkE44T1wQzchriQYzJ9dug4dXF94qHfXXmSAimKayqBayvc1U14DV8WFX6T%2BbjU%2F0D%2F8QxQ6iWqVyW4u%2FiYj0N5Y%2FnH5g5fuV7CE0WFOxODRgTwoH7Pdsh1wm%2Bc%2FVflG0p0I9VcgH1TG0IC1VMeELF97LpEXQlbkr%2BFtdgfSjmJwQtLu6xIHlMPttTBXfitQFa%2BXoWyXtKksbOMzEX4D%2B1WfXonwDKM5HXzXRCA8QP4s3IgxH8QszmUaFS%2F9NwKsp8aU%2BKyTncVkMgFtQ%2FpE2FCsRz%2F1kw3EO%2FRgleaf66pD%2ByKJiRIwhsPgKSe12reXfTCUw87JBjqkAcpK7F5JtIvcmAPIB60pUQyOvpSLlPBZjBH3wBhSFI4lB5Y8o3wWJppbZDzCHu2D2yH%2F%2FA7ZmFcRgKDWlxyf7lDmqaIUXIMD%2BN2A4gvYi7Q%2F%2FfUMRI5TulavULsWteiM5ALWIuOli9hGgdknUOq8YJz9Fi%2FWZspfPFv59INvvQqto8lIGWjRwI%2FK9J4yu6B3swotw%2BTa85XTalCzNxuMw2YC%2Fjh1&X-Amz-Signature=c9cbab89e81fdeb79e81e6779bcda3bdccdae0b74cd32c6978f4f125945e3bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

