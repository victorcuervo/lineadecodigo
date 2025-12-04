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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTQPA2PW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFXzddmnaVeiswwKx%2Fraoek0bfEYNR1ZYaOX6ftnxzEdAiEA5K4C7TkxyvDQ4Pb%2BAYimg9uF7%2FllrrOz%2FCJiw%2FOf52gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMrGHWG9wh%2B9r2qEzCrcA8gevqMNYHdKeblHe07ogcpKFYnQlvCn5v6ke2jwAQtY3xuY17%2BAF6%2Bq7M%2FFDdhB7J0g2%2Bnt4GzRO%2BXt6KXXeItP0ymGM1UqCpVt6M2GUQnQPUC84sVrfmuHUQihe%2FwUAI%2FwxnHAMQ2p%2FmzYkGdU84Y5uAQb2JEAj1MAfzvL2zO8Nlt3v4f23LlRKX81uTylwRvy0jAS0p%2B65hXGKWBKbq1CDA8NELmUaORWYdGEssHrppELcsFqtJbN2Y2npHZLSONJgZd7HxDgR7hoST%2Fac6om4N%2FJqkJtZujg7gm3BMRV%2BLe9fNof6pDz6u%2BEhnzQUU%2Fv7VccuJmkLhqqdsh7SUyuvyDyd%2F1KPDEFWMEB6%2Br7qmUD74njtf69BPS2IQU3j21wBJIrDE8VGKmFDY%2FIjLlRcnCNMvwrXIYnmwaeUtHih1ZCSMTqbZFK4Ld55T%2Bjm6RYtNYK5hb7L6aM87olaBZNTNOrRSBSbObZ2zV2uVylqYIQxi2GzdYyQIn78y4wXgsuIrSFkINw8hEgv4kf6J%2FDdGfYqw%2Fb2uLpMhtKiaYPAKxgP87iqSGh7Dx21WHXeEwvzd91bvJyal5cKHH6gMXzGaaRxiR2IdlO4OYmWjoenDB9qK%2Fbb35FxL8tMNuQxMkGOqUB%2FN%2FCa%2Feyw%2F7%2B1UA2%2FbL78Fc4oV7qnDfLZjZtERRLP3bNzVae4BhdyP4VPaokUeCBg%2FqfmkaG1fvUKXsvIk%2BR%2FgPCJDKuYbqIbgxEJAzcnYYlJXVFq6VE9Pp3AHe86zIJvkyr2etdL7M%2FovSW7Os2NCOp90ZVhylx6w%2FdiM1cg%2FxSHL0VFn4PDszNrgN2OVB6qfgesVV4Fc9waYxuQPoMkp8uFnW9&X-Amz-Signature=1ba72dd8da8bfc62ac25ae7f902c2cdaf034c87afbd3a671e82616a63bac3b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

