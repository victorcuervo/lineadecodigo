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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FK4OOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCgOMvi4mLwenz7qR30wW2Y5HOV%2BmIGQlgGQSw97c53AiEAwn9mXi%2Bvc%2FZyqZ%2F7fdrLjEU2AHIDZGR8Cl%2FvdcpzFCcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFmri5vvg8EeCaOQUSrcA9gnEnnWLSp84vqu%2F5Mvg%2F0IU4YTrIn3NMoJ2JPwKqa5e%2Bl5kyTeIWUDfcQPFQzj%2B%2B12teQb76qQtPbuzX0RC%2Fcy%2Bxj8jXdxKscJGHUX3HWh2tx1KWq6bMTUtdUGSQ7%2FoYDcsy0K5YG%2BpDNGVyfhFV4J8YGQRieiDcaZgZFggHFEoewncuOf6T1%2B44cZ4NEUf522SSa2vniS2%2Bgq7EKaDuvSWrdcyFdbUFl0A6BFBCjFadqqazhDr8n6eXXyakb9g1XQEVhQBeiPt3nwQLiIuv5T%2B%2FmiYvEYtxpLOrPn8MMnb9S7T%2FAl6vBNbrxMldmRPhMek8eloWq3pVP3F%2Featiwg0Hfp5na4k79CP%2FlSLauE%2FtOs1JnTiLqoUawch8n8YIN3NjDJfLbK%2FGm4ZDuvJMuKQhKKw2rjmVIGvHxFPbnLZh4NpPOuIKacXDkRwgI8%2BPI%2BfkSbYcGzBfWKdgPs5w5woP6CXIplovkwYC6w3XLBXKm3RcKep6%2FLfm7idxwAfq3B6oZKJtO4uBJQOXlDiKYmVm8Da1lYl0C9ODHQmsn3%2FumcsBx%2BP0D9K6eCUa7SE8R0snDLTaw%2FQPK9huCh9iPNH5SV8TdZkz3eav%2FEiA8pFYLLW8I5Cad%2B99RQMICMyMkGOqUBg0%2BBPmyCe8cS1ecj1H33iwk3mnieJC2CcjoWXhI%2FDvB%2FoukmwrTDUAz%2FnwLjuH8oXOIo1e4GwqUBo92y%2F4dNEYo0cgUMsoU84ehnDWpsb17uBon7BcWIgES%2BOk7IAQIM8fbBEysJ39iOF8pC4jLLnHgQGGUSAcC7%2BWsYlp0vDi20yITlVsjXU9mUUX2ixeyDLQ67J7bVzczdMwHZE2jXkQXMBmyd&X-Amz-Signature=49661e19083c40a2eff39488a3962ff5bc266aed031e217a0ec4297ed9bb512c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

