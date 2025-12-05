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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CUPW6J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7Vch2gfY0Z%2BjCQeqjacBeejBQwzyPUZa8iTzYQ%2FCIfAiBk4DHH8GU0r2tr0AE9bKvib7CdSwh6HeIeLC%2B5k%2Be0Hyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMW6LMbNPQjWW0gXPtKtwDuDncfZOLuKx2AZy7vxa9MZsCvjLM%2FxVxka0NOV2VLllpQ2Jq1jz%2BDFxf6opowhlQSQ0Dx0SMD0M4WTxIVVBo8ahzE7LvcXjFqU0TVEEnITEr9%2B3oqEZfZAlxcFbU2i%2Bebyhp9iPLF414ENRz3VzAh%2BCiY8V9NIzwbg4m5ZR6j4kerHTRgixGzaC%2BWUMw%2FbLqwp8JahfeuQR8FoQy0Hzu%2FVSt28HLv5Xy2cTRvfgkzZp9Asht3lApDAT7OJE%2FyNibs5yhVBSdm5PAljg0HRNskET2mqPgeNF19wQ%2BLRzZqAVAwABhVSYzEmSES%2BIPq1nDsl4AE6o04cwVXQja93GxxiYoxMwNCjJdNyUdZZoBPLJPiHVGLd7%2BXPGBiPeFVDywuK8HI1nt9LMeuUYbE8TAvJcF4lpS%2F54BDlkttB3F9jjiv5uZzxqh6OuT1xCW52492pZn%2FHM4%2B1vhy6YAhS66Zlr%2BSy7Q%2BrxCbwXnBRozXZizftTgvV0yY0JR5JSYWu8W4JPPGoD0EB6yZlD3E0PrrSzM8Y5qGlo29hrOfbGW7HrfZIqrb5tpxnVyrGzXQu6Ov%2FQp%2B1IMRmWkwVb9Jv2HlrMmFkITpySI8oXbOr4gFs%2FmhfAXEu5Mqsq%2BsFYwnebLyQY6pgH838LkL%2Fe2V%2B96y7I83DiVSMlja6zFU6ixtREcBJsd0ahMcH30CSIWc6YEYlme63WLex432KIExBqQ99y5zRkS%2F2bliPBxQ69%2FogdL4EzuqHEwl5DKt%2Bt%2FEFM6JCleiaZktoNzd4lE7oMf%2FN8l6S5Lg4Vd%2BKDotetJ8%2F9Tp6QZ4ztOzEat4u6x2dd1yvPZB3rHAiSVsDz9mfZuj9UdKJQ37KuSGYgf&X-Amz-Signature=23286b150c4639ddff1ff5bf1f402947669d573903f9a0d70dc213886f30ed72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

