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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMPIAVR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt6o1vs9u7oF3Qh1CkVZYO%2F1aFKv927KJh7VbDGC4dGAiAj6aVXAJ6n95Axh1qqURFVkAr7hBe%2Fvzx105IRqAIVuyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMNiUYVDUuPmngrGDmKtwDVlvmOPDmJZPHLLDTuSmipiBbN0taxzuCBdWuDtsRYYboUeSlwPkT4n1w6%2BCO7hTTC5HyCG9bNgaKWmgR9N2T%2Bm7Kk5zDC7hG%2FzfrVMP1UieKgxO5ylh4ZDY0U5Hw39UkGKSXTcRuWBylWh1WfkBto09HF7WHhTDUpLLCyf00Pg9DGlsp9TNo4Hn250NMwIEvHfClpyoRvTwxtYIvH8Xd0WMyg%2BnIGza0R3BFpFNMVnozrwSejhc2hgQHUvZr9JTjCMsWZ3lxmsVqFfLyhiLg3Y3%2FOVg1NU5bvuFU2Nn2FqXQ1w%2FaH6cGncnYEC20rsWaRBkwNKMVOodooFPaIY5g5BOf9zwt%2B7u6Q8B7AfBQvMoiqoFYN8ruLCTSCbWb%2Be3KTYWXDu%2ByRUdarK%2BGDOCBy83KW9SQfRPT9Ti28MPZlEWZCNYxe9bZJsl3Ts%2BhTpe2gOdHevh0Pok8%2Ftr3n%2FdRq4WSu4QyNRqKlJVNYkJgrZajMqnny7JM634fj5l016TL0XOQbb8fzLM%2BWo9F3nyUnteCVpduYucb63Q7DtLxUrVF9KYd3l2n9K%2BQwLkvl8HuA389iFPIzEAZ%2BaeSs1RtZQ88LC6TeJ7sDqjLR1P3f9JsuJYSxXebwx8qBskwndPSyQY6pgEpGRNhodoYqbJD2%2BDqobRbaWvXcbj4HhoJ9NFVddrPM%2BgO%2B%2FXyTP3E%2ByWquKB6Qieyeq%2FuHft%2B8%2BKKL8SvfM7B2T8OKPi3T6Ti0GWHbXuz%2BVt9EAd7SEJrrJ4n48lU2y74L%2FZ9Vl%2BLrgVK5ErdZJG%2BycN8qgwIjIGq4RYSI6x62Vt9fnAwKB%2FmtEkEDEeMtILiYYcYGoWpfgLlx9AenA%2Fvai5mrNew&X-Amz-Signature=eac7e08c67994cedb40bb88e01e74c392bc8b8137a10f30c81373088c1efb492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

