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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWCNRAV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgbez%2B35nxsqoO6w5mWmQvZWBAK2k8nArZbz5mMePn4AiAquqAnHaQxb2XrR3QE7Mh%2BeaNi29H91Lg%2B1HtNik%2BAWyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2qfcM6UFfnuxYArmKtwD8lXNTmtabXL3Mfew1ISGp%2Fml5b98YsjHFJtd26q31SJ1ux60dKjCapxW8Vp82dBS5yyl2Kadx9cznVCYqpwOpUdxBBl0I%2Fuc4jByV3O8kfbZ40o9t4%2FK0oYhHg1ocwjJyBrLp6fZpGBAd2qwEHty1Am4IhNUVmHdnlipWbeEWMxVAdzApSV%2FP3VtneovDK%2FOVsdTDppY7M%2Bmu3q9tfl570Wj48%2F1fsPcU3pyJAodbk1Mma3LO7of7z5zHyuYMiLds9tihvJMleIoOvnyyZRNunZpj3fDflErl5mLtMh0uA%2FEgBWTI8O9UKeRPSo%2B6JhyjKF5lCpjUad4d%2B8jQJTWpNKO9tHMay5nLdHTqqpB%2F0%2B0sbtEamaUMyDiqN%2BjrDNmd8QbLc0NUF0WyXWZipPlz%2Fy5m%2BL0wOuLgl6R%2F5ewtOUcmk9z8GFT1LsxDOSwGPgbrcRlNruVM%2BcHd%2FAamWRxuM%2FfxRCwo2%2FA5Uq%2BPRu3UgZNOG6vQK%2FKGIlF93jaO5U5x7VBWrPfakaNUciNIoE5a5zmxX0fVVKAIJiBM0oNBFV3AlWe%2BGY7ptWbubGziqI7w8fUXXJRLEcw9EJEFRGvkTarhRVnBHcakZrxbWLp44rjKPkiV1D5QGd3tIQw5cXNyQY6pgFo9YX6n441DfPNV4Zm1Ag%2FbUqRxAIJdTANhyk%2BT%2Bj7MC8T3uHHQEDsf7y%2FOJLpISFH67sWS8V%2FTUne7%2FNcp%2BOtu%2FLx2vpatlBPRVnAiep%2BR3%2F5WI%2BkuuWBvwn2e0PxBSss8mLQqaQBJEOqAeLV38M6f00J986wMUSjou60QbCcY9OSnAuDavugg2Fx5NZZi8a2ZPg9%2B5DcJ0SLmwcbdEQOvQHYim9J&X-Amz-Signature=21c36bc2ce8a21ec4f87f1740be72f82739f0b5a73cb6ed1a1b5599463a8d132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

