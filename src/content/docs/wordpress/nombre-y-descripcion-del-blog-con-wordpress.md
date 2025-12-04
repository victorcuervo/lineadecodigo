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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRERVTCH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFLh5uMolnf5s%2BQ9oN%2Bm3nrQowyF2x8SlG5LINf%2F2JyAAiEAnBVMME5Qeq56vWBOWiYZn%2Fgr%2BTVx6veEeGqrjlNFKuQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFlzio52276VK84DvCrcA7jHC5FenOkmzWelZu2Su4qkbtUCnOFdjEUVIgHkix0ICCW7ryjF5JWoIhtWElobM77ZERW1Y71r50SlTwh38J0SxImXGtNf2MmSWU4SA1fK8wP5njDs%2B6yIr1MlNJ7al1GY2TirlNFEUhsBe5DRTmKnfqt6sx3hwda6ChtKEQEWBQP4XTFAKwIwWH5ye5zq21Kl90bnwMsSU5aCbxnN933Z5q9jbY%2Behl69Bcnt6pqfsUCTDSCeuOZX1Q4syHzQsyFPf4xfJqy%2BbrqEKYZI49KFi9hojE9LEfvtw5P7a9%2By9CrZhnalwMQ8Ukh04p3mOgjANTnm9EKYRKNUWy8YQ%2FyTdziReOUseIBp2TllkPDYxylTvbpjT2HS7ot0nRYWzqm94F4O%2FKxs2sg%2FqZkwhe2hmd0IcgaeEuYRQ9jOxSYbpZGe4w7%2BXN2CzfiNZLn4aQfSDsT3GpmD3xYuyMBWn6vvQPr67htZqlbtTs4s8Qk0PC0R7yGyG9PGxsUF8NzTNOzahEyKqn%2BdlFTxpH9rAxIk2OH%2B%2FQQaJthVufHDVOkskHqpTW2Sir6RMVOCZmO3R4NkYKfyTW68QtJi58CaeVq6X26XZYHEe2uUdwNWYU%2F2sRrU%2FNQ8stKMh3fsMPmzw8kGOqUB6bikKjqecfC7VZ%2BQUjdo65ExaIrdGy0vdSdhfMNN9JAHA%2BCYK9NG9n34DvUIJtbZjw%2BGj78AP8EoBYxTL1dw1q8ms0L%2Fn%2BKq%2FgCmRbNh5RPBO1OA413zuiaDv%2BSyOhw2UhTZSbf5UlVrmKemLGLvgKkjfZ2D4Smzq1YAIVEgOYBh1civLMuoxIyvElGD5jyW5e4YD%2F6KMn1F8HcyeRxjA2yQCRIw&X-Amz-Signature=9ec6388dc64f5056a3ab53f24d9a203d82ca978ee4f67a37e740ca7e0dabdc17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

