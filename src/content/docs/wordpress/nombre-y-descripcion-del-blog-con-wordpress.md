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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFG2NX2U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeVPaxODePuFNDAi5NrLSaGWEwGWwyqsTKXkkKg677vgIhANBmNvpV4gy%2B38J5oi%2FRBAYB0N4e9Um%2BN6ditBXWMMLfKv8DCE8QABoMNjM3NDIzMTgzODA1IgxLW6xjrdpYSGDhVtQq3AMISpfgCbSC9YnpEoenS8UT3QrP1GZOc85%2FnlV2IsJRJrvXkjwANmB7zMb9eDiln3tCBh%2FxtgCh9ibsY%2B9ak8CSFLM%2F6gxuJaFB%2F7mp5kD2nkfUTaatL6sC84EvD4G9JUnndISWyFL%2F607AdlK6nNopCXXhdxFJEzDijViJReWhlp6QgmrAyGE9z%2FX29Mx1v234edK73OGdDEGa9QCpHw5z7cI5fdFpvUWMSdLktyjHNCI6oFki4XxxiKbSE6rDDikCNe9%2B1r1qwwPsMfDILs40db%2FDKBM39DSBRrPos%2FFaH39%2BeDMS7Eoce4alu8dibe9TbG%2BgFkC%2B8KSckcSnbsXZW6qA%2FDQm5lW1S8u3n92FRAHlyWFWc27ykvl%2BcFj9YOyrowhff5nV2llZWkSUCTL9izVDvlS%2Bcu3I8GU7XArYiUATs256f6TSdY0gbMoV%2BGBzp75%2Bc%2FGgyV%2FOFis%2F4ykK5a0EkBK9Rhg1iEa51ePZACb7wZVe80obY%2B9GB%2FoQHX6Be0W6pZQ82eTTFmxlWjppK%2F2QbnhQHksa20lZWmqL%2BZrqoJ3QYxas2BMbBjqOUfJUsSxNIO8ThdRR6%2FZl4hfD6%2B%2FyJ%2B%2FFhZOBdH3vkzaYH66nFOJENtwm9qGZQzDvjMjJBjqkAT1z%2B3U98Mj9mq8Gakjxp%2FDoZj6BmG7kvQORbKKg4jHHN85Td1eMZ1OKfa%2B%2Fa4%2FwgQbzh6Dt4XH%2F2Fc638SCMCRfLMxmFWTGIQjR5POE39CR%2FsKPoL%2BNhP4mfKZOcQeBk71ZeVuRF1h%2BiRon0PKpV8chwJuqBsM2MVGiNWUPF4LSMUlwcdXJOWXdD7mQdA5xEjgUi%2FbPwqLQYmUzvRE5NYFy0D5S&X-Amz-Signature=41991ec28a36335f21e7fa5e33502445bb6346572b915c10a83bcf58faa3b683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

