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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVRJ2IM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG90ZASpDsEtBe%2FL%2Fu%2Fc6%2FvzsJ33OphvObwYISF9VVJ0AiBhoMKDA1lYgGSvG3dGN0gbpL%2Fiz3CxOVr%2FAu9xCfTupSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMGLkrW4X%2BweMqGKagKtwDqFAiDPYHfx6ff4vsh%2FJq4je91YA5zvdPxp79rQDai%2BTQBVNS8utSk6jdzuOkNPo7A9Ce2jABmmLl5ph36672A4oYdRoBfL%2B%2F7Qh80jRJoHC9Xp7%2B4zYT301LEq%2F831wGyftyFT%2BdGqru378URU5%2BECoyegJW4ywqyGOMq0rdJ8Oy8rx3WZpV5T6c%2FAZ0UkBGl2JmzcMHkBvnP1M4NVV3w9VX7FlCUk3kufpIu%2F0NYZxiJ%2BXlN0%2BB92cakd34c5J7VIkHucKe%2Fg0%2FIRsGiFh%2BuPzlTA2sG2b4tTTMXJEEm3E3avrHK4esNtpPo7bQ6eEdOS5E9b2NpbtgZ09K9zKG0n%2BXC3H2GPgSGVaRsR2zF1cHnWDBa8OaGgTkz83wOXoh%2F7%2FgStR0dyJCe1urevFMZeBQ%2Bg0%2FiBXqEGG0sYS43l%2BfCgfnLJD3mMD2szNLXfc4txFlwONehyhS2SQkUi3eAtqWqIBz5aO96hT4qudCcIeE8oimEByEZI2eRjrz7WA7B7ygxTOCnEHkdS4NYmB5G10C%2BqlB%2Bc3oJK%2F6xt92mZnOZp8X%2Faflqd5vIAlCsNpKkVgMPQIXrlyO4eJ0dKBy8q4iLtScHMh65EcZQnJDiJNsdwVcJleOnaf9oD0wssbNyQY6pgG9C6GXSImAVRw1O39Be%2BrjOlaMZELZKNi2Qu01Qe%2FnE34VYQblXHrE3cHc9lT4AfJor3SzaysFSaofTbsL5vuFqT65HKCnM5Ih56sIygYG6t9J7AtyJxSEOpQCYmSHsbiJjEbp8DhMn2lYcMv3FHiktx7XXEu7Fcd2i4wg740PqE0gQ%2FxoTnHNuN6mqZjmXnSb2PmKBQC1KSToxtGKw0JVtbdaWI05&X-Amz-Signature=8d7a6a56de240f6fc2839fed4aaaba16daaffe28b9e1781cc658b4c3bc582ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

