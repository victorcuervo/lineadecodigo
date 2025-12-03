---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5AVSSDL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG2ZXZJeOsLiyE8n1WNPg2WfdB5rLmDDECkOcGJ2My9gAiBnEbz%2FnODIsQhWVoCrysU7IWtdhjEy51hzwbPV74tW6yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMMV1EHi2EdYpzvvXAKtwDXecK21j%2BfY7SgQ%2FqW8btS5oZ1bsoghchltsFLyLcpiiGBrhlw%2Bsonhh3lEVqAp%2Fn1%2B9tpLarUg2BnYVvcfuKin6yJM%2BnmJZP3HeyQc5%2FPOkwrdkBoJ5aGn4%2BaWTxjNChCzA%2FdzomZeLOtoXo9VdDk4UfJUQDRa5voAMlxMLzSQgZrom2j5SL0ENqxXOkvhd3TsQ5BEOa5BdYWoi8BzDu26H8EaKU1%2BhLDgM7eeZlC4irva05M%2FC2ORs%2BHgUnAkoNAQjjf4ChVisDisAK0m3IA2nXWLkSQrx7M7vSeDGQfJuxau0qC2n0eJIlIrEEoBYM1pR6wA0JpUHm2Foq2FyeA7Q8EljySmwqyWiZaY1KTWOUM7ELK%2FybrFDKwlUPFGGzAyBrKSZ1F7QRVW%2FiDwgi3LQ5IDRJvUCeN%2BTJ66cz9dc7%2F%2F2zJh0vm0xkAvKoY33P5UZqmNxE1%2FkKPEStGgPQRjLUGX0bqwRt6vHzICNNpRL1Mif081QDoyGT6P7quoNvWBxldgI8FP42iqn4%2F3y%2BKSqV91s6V819rul5fy0hFTQC2mRE%2FgYmZojuczLo3a7LeQkYp3YBHVOPuCE13PVO3ud283AJ0KCm2fF2h1BFnHhUvY5yQpr9u%2FydG%2FEwkN3CyQY6pgGDG6Ksus8X4IzWeoe%2FNbR96v3Winh57Te6sU1rvc121ERztmxO%2BKCLTFyhQ3XDpl0ToS5fM3mP7aVirkHLykvpz4JM%2BUiumtZhtfbTa3AvLIR7PtO9v31nXJ6fRbPYr6kSqaoC%2BR031AFadli6KM5kof62iOmku33QlPV5xFGsH7tDBDeDjwxCEFrfVrkfiOoF0rCqc09vt6PgDrQ%2Fgiandd97TWUt&X-Amz-Signature=e7b9388176e096e1d8a43c43004d22ca41ea954f58ac06ff0c244ce22680f3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

