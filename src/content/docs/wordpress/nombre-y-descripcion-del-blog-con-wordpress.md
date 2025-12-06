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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBYKUMA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDecv1DlOUDCBmS%2FAr28jjRur3KvuJQu04%2BxQS5GAJ9bwIgZiXlKi80R9qM%2B4qmWYx2WITu%2F%2Br96v9D%2BygGaq3Zyagq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGP9kp5GU5GV53cCPircA8c26o02GAnmW%2FH1T%2BMK%2F8r05cYjMnZAEekQopobpFKGmd1AOIvNMnFJ8sxyijbp%2B%2F%2BCd8ayKv%2FluuatIphgo61a3bYYYLkwclRi%2FbvVex2Nkpj3WLRlKwdJ7Fm5P68e0U2zaGslWXYpz3z%2FHfidIvDgNNXvv9iAPWY5NTVEn7971QrYbrZqHNCLHG2HSFaukxRAqeuiI8QX1meRK2AQJJ0%2FYykLfChn%2FutDzacLqB61B88iJA9APqZ9SDdNnBTiq5PwrU08b0GoJWuPcONMJKC%2B6FqIVOr0%2B8UsatRf%2BUqJ8p90KH6Bo2Z5CqZhscq%2Fzr0cDAKLwLUwXmVdO%2Bs1bJQO67bV46gVJXMLpG0ZXAcDZVhZin9TF8XvS8%2BE5NSR2enognKybycqg5%2B8ipUp84x8ZVLkq%2B9OpLmC909ulhaxkgLA6JUUlilMMrcPe2w9%2BnKSsFmC50Mqi1n%2FFTAIgnZAocCt8QxJj7BfSIA8bQ%2FgbQcjg1meXRS4P9ApWnLzBgfi%2BcD%2F%2BTXi%2BgioB6fNYYxVK2RxBDBUzVEr5eKpZmgwmvWrVQnXvaJDpjqGX%2F5tIHL%2BrpqGQ19yH3tmU5bZGdNPFjLJiPly%2FgFJJQr9CUAoKrvG%2BntCOkx9nEywMNS8z8kGOqUB4j3lOCyDNe1L1qd19Ikz6CcRu2Pcanyb7QM8VtwfmRXP8XdZsKfP301vky22UfYhSpldVoxmXo%2Bd6Hxg5k1ZbSFZUyFW8hVKIGIdvLqnqOxTQwvLAhxflP54UlJVG4D9GcWTy6UTT9o736WWkzrmuQrgMDrniEbR%2Fmd4GIWKqNyTjhsm4KjOYLAB7AV32hysOLOr9S9%2FTA%2B1Co2Z8pGdBudYcTq%2B&X-Amz-Signature=abac0dc2f1be3baa548910bcd358a801478157713c0a2c0fb55b794589edfad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

