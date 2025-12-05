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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQOF6JQN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEotU7RTfs0k%2Bsv95U%2BgXDF9715mMkj%2FtToSxE%2FozjQIgdxIQ%2BUSiopWf2hX0%2Fe93nlt3i8S1krQ%2BoIEfKh%2FcO0wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFPNtg4q0v8C%2BatYBircA7gHiAh%2F5wMJAhzy2Ck6%2B6jkCbmkP%2FbkcG%2Bl6DB3MdE4Uugv50iju5gSwlNwDRoXknn7ZUPAcrmAHKHRuCvFMLFc4L5dRS0m6g8PpWEuC%2FTFnySvoxkz%2FCpFfmdvMO9wrLzC%2FNBdHpRRFZSpNwZg1rTjb3yy4bUWk5O9e%2FYvME5QjJdpJX7RHz2qXBnl0TleMDOj7kb97kiNgfk2GJTCSYBEj%2BrKEaEeGqThqYoWs0lnlMpkgzPHd%2Fm3gUx9o2lEWZDOBoCjp2ulXOrGBVia5divFeI8nTTEuFUcexCUx4C3YnIr5JW%2FryYxglzXfV5y6OOydWtWFa0%2BqEg4Jnsa6JN5dzqTCf5jeDRFS%2BXTkMxy2n0O7eHX2CR7YErEENcpEDU7thNY1cIpkCWbAZvZ07Tzc78Ih2jIud0zn0uIH8gvnR%2B0S9JTEpQQVzIbjFdad%2BR0ZuoRjbpRUUuV7NegeGYCe630u%2BvzLngLM%2FIPdnlwGEtjRsAi8OBzlOnbVTZRTgOGDRd713sy%2FThcNY%2FT%2BegGFhXvhutD0O1M9COz688zWr%2BX8tf41atUKeH2lAt8Ta4F%2F%2FZ0cOx69xGvYERK%2F87LKE1RQrKf4zFP0B%2BeLMhP%2BXqplHqH%2BfUZwVnTMPHuy8kGOqUB2jhHR6Rkuh%2F0N01Q52Qcya%2B3GzEzyFgQ0GOgUg3z%2BkdLr7E9lJiWaCypaVfG5cGng%2FuYWzuJuclD4P32c%2Foh9%2BJT%2FgjzYsSd407j5wg79TZ6VkkZiohmEwQLaz4hfG7IBQpuTGuB9bi6x3vTrb4ummo5XCtwe1KmvdxwxymCyL8d%2BBf1JlSzw%2F3pyOgz7AUECW6XCFMqWhO0lc9%2BRkILa3BCALxU&X-Amz-Signature=3e433b68711e38530d62ee5d5403dbf33553e4472a261a3ffba3edddf6b4b46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

