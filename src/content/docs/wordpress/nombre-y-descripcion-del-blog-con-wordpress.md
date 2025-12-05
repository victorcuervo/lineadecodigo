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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXSWKQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7yrSPDq9dDicrVA8BcDQjxFqgoLMfaQN86%2Byk1oCIAIga8JODXXZIpuJpyVApfz9B%2BfEkvgNTshNTOc4iIT4qQ4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIuj6oHebXZQ0ZNjhSrcA6u9B99iREQcrhcQ1C49wc7DLue35UkF1rjsaRzgtdbjU%2F5AOoy%2BOI4QWuvJ8MPJHpW0nXiRRq9l3F4hyXOLpbMMq%2Bk6ZM3i421EmjkIqXRrW5oyOOhCBGExfBXp4qcZfBRUfvodJiAncPKfWg%2BzzE26BGZk3K6jmGQa%2FAn2ktUGcHU1jQ9aUdnyF9v%2B8Q4xyxS6aTFX112%2FPrl6I6BNDezTz6Lv6yY%2B45tHSrmZI%2FzQ9eyMLBAvQiAaMWAWTk9tEGMaTTMiOXALguRvQuX0uQGdCEsYoBZMj%2FeVQ6eOhKFuZByoRk2FratOpc7MqBjlyf5yW4g4YxDdCOwD1zfFJbpOtC6Q%2FxtMwGKBkZZuJokxPT9E0QX7h3szvLMUvyWN7vOZeKbBVLZlzYVFlj25W5IR2l3q%2Bj3cYT8V0s3WPKGhnSGcjipu2ulJ%2Fuw9hs8EVh656F3T7cvaiY9tN0H0lmphP2L8vkoz6nYkFEJVZJgY%2BU0l5q58o%2BcKgogc25ngP%2BR2DOTzl7WxWKW6iC18%2BS4%2FkJJDM2SZiqVCSTNxtJ%2FgCB82aWfqEW5WjWsLemyQXiq4GeXOg1gvB0dWVsKpzrpJ%2B1kCIhcKVxnfbBT3oS%2BAzUsZD7p6qwL%2BpuNzMIqazMkGOqUB%2B2Rp1%2Bn6KhOq8jSNAHbItJusNffcEctqXWg24Y9qR6DLNJirZ30JRBEFQGpotnMHqbw9JXtttt%2Bwiexykb5LzXW7f21wTYi0CGxSvtRvsfvKtsUn1doOurlA%2Fsx2pyTrGQ0uvOHsh43OymGyMFdtZO%2FHg5dMZKH50O4OsOBg9yHQo%2FHv1GjNIOx1aXYXAj8a2NeYbOt4Q7xsRihhfdawaB3hRW%2B2&X-Amz-Signature=d95249af41378b0be9c967370599e87dd095f30d27295c68a50d3c9a2f1ae602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

