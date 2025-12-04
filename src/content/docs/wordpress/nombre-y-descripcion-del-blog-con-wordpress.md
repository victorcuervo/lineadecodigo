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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNT4NAU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSQ3hM%2F0stWLGr5jMLeBwtb1iKZ7vA9r2ib%2BPLHVESIAiBtPPLmOtZHJo5BAX33qtOUS5kshzkhaGwLNrALLbKPSCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMzweBcdPKBvq30rd8KtwDDQXgOlYUm8ePVc1W8iz2WFcuORwV3URlxnm0lAafNKAF2tKpJG8VmAZvesmqkdilaSAzsFmiBNoiKhzFSLlErtBzw9r9rBp9AAJs90383%2FttlQcFLjYO7pm0hlnDtFIE%2FJ7AyOUk5sGKGEiL5Nbu5SNP6dxY9XC1xDYH90DOLphSLuJS6IBNQa8oA9xTKu%2Fv77P3QFpGol6O9lrEML0m7zw4S8hn6K3VWqxo7pMqmhFfrdbw0t0xdVL30jeZlPihPZrbtzfPkyE2N6MOMxLhWn3P95kcY1t4Dn%2F66RijZXmRbddvDVGdHzc0eP4iuTwsDFNfjLeX8BKangufKri9Wk2Ms5f49POhFDRiLZeq3ExJ9VyVX2VS0D67dD%2B1cRSM8uXg3zXskg0qHu7VVq2GRcYlVA8M2NP%2BfMHFt%2F5Avp2B6SDgns%2FbqscNfJdUR1vIpc%2BVjLeRGbNkeknSPXI64MkPWNGqJXbpwck%2FUMAXqIW8CzC7Ct3SZuC0ZlEE4gmn%2FSGDXDV%2F0opUjC3BOOap55fjQe5D8UwcA8RuLUJmtQtBLIVZSsEgCLbOu0M3UoPp9HIYXaFe5dDw%2Bv2OCJlE%2BLx5Hyn%2B2Mhix6gMr9vSZmQQw%2BnOPJqmhO2kbBEwrtzGyQY6pgHriOMJmwO5ObIJMYxFpxZgoizlHNVhpdm9TJNIkCMeamgIS5xL%2FnJi4wxLcKI7NmKLgchbJzU5gslxJ%2FI02PhNnTE1WwpBXgFHyFppOXnU%2FFadYURslWsemQPnzdf2zEVi2cxXGA%2FDRh5iW5gcIP1Q9SkcuFCL%2B6bORk6HU4heCgYLBlXKl8GP1jz%2B2IjliMOBicC%2FnA61JJL8ch8GKmbusEvx8GOa&X-Amz-Signature=3f4613161a1d6cc9d9fd17f7b9a19179db9c76cc49903cbce4a57abb694f0059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

