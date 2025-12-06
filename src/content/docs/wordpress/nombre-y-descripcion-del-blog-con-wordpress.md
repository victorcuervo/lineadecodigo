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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2T2G6T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfVySKMrxD0dIATaNHImzBtTfT%2B6WAOI%2Fj%2B1npjTD%2BAiBJ4kaNDzIbTO74VDiPlWnIp7Obvaljm88bEDcx4IfTIir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM5bGbyfY1Chs0WuEJKtwDLsxi%2Bdyvifb9aKve92%2FSBDHNtFwc5Xb8vkOsHZ52C7SmMRcgKkdL3VkF33k0%2FOZTbD8%2B0E83yF%2FQL%2F9QRqirzTygd8n52He0pBkY0ZAMTT4fHCRBUZNQo1%2FwjOJU%2B0xvQWiseV54RVw8GOz4KwWEfVxflMhLXEacwUj6bmOvNokULADvaRXf30fLsNsqapEbANY4oMziW9DocB8PeJmZ5PV7e8VZS6jRqkZP2MCwHRisnRWnORbFfAczA2wRq3RC23IW6X8bA4a%2FwSq2twOb%2F5tqJfxMmgfWMKs%2BE9ed2ddExw0ZROQdURvQ6Q7ycJUQiwdo3hQnDWNN0eW7NHytCJl0CI9dWl%2BS6RN%2FQuBZTrtv1%2BybTsrv9zMbZc%2BFehb9wkYEK4hMpy0ZkeOCwKZCoGLmKhiRtT%2FzEqDvUf%2BXJD9eHeySBu%2BXkGrzKdSIhCTdwopN%2Flepzp2KJcgWPXtueThtvop7%2B52vsPE3CmHtmNns2a4wCa%2F1iwl36NlxtsxcwgiBWGiHyyi5PvMW6Dr123IksCHeF94enRIeR2wIwx2VjeW3VAfPEpL5n6qYXeNTixVkg87y8TAbotEO9%2FPsHHExIEI5mjNDnnHSnoPQMrsIfMoE8wUlsx14u1gw1f3OyQY6pgE6ZyR%2FdjQ4lJ%2BkZk1IAom2DTExyZ1ItMbSIxwvWAL8pzNVmy%2BIZunbBm1msaO2YHwq4tUs3wFx5z%2FncoUVrswdGfkOnAMdUMep%2FUibV4Q7r0Mz6rMulIi6rTh%2Bj3o1cvs1TjhvGWs%2BN%2FvpoT8T%2FstmEPnDIAGELQIjN7IULKAcC6l2L9ZB3gEJMkJ9sYmgpo%2FGM5cAa80c5K5a5b2%2B0NA%2B7MBIqXHy&X-Amz-Signature=f04d04e948718134c6447c3a09bee0681d0a2d3904c6467dff279886ad89d42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

