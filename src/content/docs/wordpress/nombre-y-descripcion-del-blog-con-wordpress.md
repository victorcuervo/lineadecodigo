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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47HUF25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKOON4UWapVAbR0WjYfXC%2BsrpCEbwEBeCPSY%2FTxiVGAgIhAJaZsEwK1g0ds61wyYJuhNDRER8iUkM6h2PhGwisomw%2FKv8DCHMQABoMNjM3NDIzMTgzODA1Igx9grRAM5smae17XfMq3AMr%2B7VnpFCPnzXaH%2Bi15TrvLWXFlSQG4%2BH1n2MCxpg6smbPDV2r1eZonohlyH0uYt9q1870LIE6FqQF5OhhlcgbNxCH67d%2FNjShBl4sK6DK%2BX5m7Zoba%2B4EadnwPUgQIjOPH3jWLWxqr4deKrAsSTUginxleoBolGnHvUHf53msYeYs8wtWC5P9mQ5KK3cW%2FIbLY0Vcx%2Fio4xQ%2Blbde5tznHCDCn%2FQ8UCoT5SoADnyy8I3%2FahL9GPJlnq8f9ysmu2TTMha0jUCSHBr4Kp0QYGjKMCz00t%2BYL4vJKfe7fnON%2F3qSBbbhDNuf7T%2F27KRqrSsylW718qFnHtIMqhPPA%2BWun4gjK45bTzZKtLwVv%2B8QYiforYXaJcw%2BfpbOyoYxxi4NvUJvHrXn%2FaA%2BlXLN%2BE8X%2BXZDqANoTZjkvNJxeFUhyiVknCG23qhUTLhaGJ0V9%2FQ7cEWDNF1%2BaUn2rlUaM65YAEij8fn5cy9UVsWJYrhCGuAaokWklG6eUo1gOULi1OeLaJTsxeqUA589cyp1ZFGx%2Fs2Rv%2BuVblmvhbxcA0XAhNR%2BlLDIE5lhpvY%2FAl4%2FQrxXFiRC2OWqfpqRdpIL4qyWPKt%2B3bvJCWxTgQD1p6JmitedPdwd4AuoicwqsjCMidDJBjqkASfXYIKvk5LLuxrABEY7gtt4ru%2B0%2FtpdCjGtgNYn6AyLBrc1Pfyd16LcnPQPKW8l%2FfBtl%2FWIVsnz5ttpSsU6CN0gI8wQOFP%2BO2LQjaGvTIEgkEtp3q9v1KBrgE6SX6nc87B%2B%2BjtrxTr9XjbNOWtun3CiY4s8T%2Ffw4JjysQnX7Vs%2BEDbxSBkB4XVU8GQCbBkwtzPUJitbyiEMykJxQ6iS6j7D%2FDJM&X-Amz-Signature=d6eae6adfa04d6f121625eb220346f597d1fef9a3b45b88e58cba420f16a25e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

