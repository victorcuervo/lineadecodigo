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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GFHGIFS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESYR8L1z10%2F34aXe%2FUHz1kTMS%2FnF%2F1G7BSGJeDsNhI%2BAiEAz2OEDo5sddCBP3WrmuI5cM1jvU6XxJhcxOGhfCLMUTAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0pzQg2qMXIW99BHCrcA6TuodYJfE8SHTY9cGiArZil3UcU%2BjQGWHoTFDivs9LWKZx8LrP7OAfc%2B7B0Owe%2F%2FP4kV%2B%2BIcXISsNmbqNw5TJ93vnq7lGPSVHAQ%2Brl3%2FEvzDgwwCT9PBFFDmt2o6W1AfNZFHA9FexNSPqqpJJGM%2Bj84WuL5suo9JF%2BJ5%2FSkbJfh96AXsSa6helV%2Fl7I%2FNiPaH6gwoxyCx9gepXVdZx1G8wVcbI0Y8upYyYCwTYjx35AGLez%2Fe1MwtnYo22SuxU507nlPwVyGBabt36dDH6%2BmBnzEgo63URRJN5f%2BuO62dLNzHnGTdemQG%2Bwe2ypJhCBVCwUCff3uuM9UG4I8FTdBhW30voeECF4ZbwzoQ%2FhfxRIny6HtlQv4p20vwHhqr2%2FA0zJtOFNhQ%2B4CsnlQRP7Nf%2BJ%2Fuiz6yVSPrjm4vR5iOGVB%2FCt7sinRYKrzmzcITeOxD0wF4o8hKnBdDXV6EiQeo4OdDUSaoFF1y0JRlVondJ%2BRuyhzK5uMh6sXQdLkZDmTmAehykAPrLuk8c2EOS740QkHtWJ4%2FDnT8Wj%2BYZyIA5msRJOJnio7ZX62C8XAFiD3XwMpjGXzFIaP7jOCYA1HrKfbaWXMOgXpM7INXQWW5aPk9K1nJDWdQ7sevt5MLLrz8kGOqUBzfiAjz7tytIU0vVuLkxvfTiZwVVIBgWjwk3H0UMT8V0D1sDP%2Bky%2FqnLf6mLYOC8pkhLTEdJjQW5lYoIcAr22hcu5%2FlPgprHh%2BMMB3a7sFKunp3zQ%2FyI8%2Bmn%2BufIWnyJL2z7gbyX6if89s3i0V6kMOWwTFl%2ByFqXhi8nx862JS5VnWAI7TNgdsE23CgNE3V8KkFDdKV7qZPY9psalIPKWax08uLaV&X-Amz-Signature=a56919209c7f6d62d94041676b6e5d5e168d5e3a402de35b0eb7204f5f143444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

