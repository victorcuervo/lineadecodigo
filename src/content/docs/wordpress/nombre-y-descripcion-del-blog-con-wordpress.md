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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKCTJPV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatf1q3cthNUTMSXQ3x%2BJpenZYcTi6kBeaFE%2Fjd%2BgtfQIgZDweDZ7uqubr1TkkQuoSaMSDGtV%2FM53FFs%2BywAYaTkIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEg3QwJTpN5rBzg%2BuyrcA0dAvjl6uEfsp2ea%2B8goNZY2v68I3UK2dBHipar9TKAAztgHbc63Fw%2FhJ2jbUitGHTiNc%2Bi8eCzsuWGbFpb2GSvBGb02DvFlllxvB6%2Fa%2B0W%2B8C0%2FeViUR%2BZlUBjYffWlb%2FDtT2WTg8ulLgsPcD1KrDLsDla80Ki1OB7lhGos%2FzRG392A2hmGIiNv1HcY4XBp%2FfGcA0c3aaqfReh4SaPzvdOS0eDqqKAcR90gfnNwvJjh2qn35gAmIgJjtor2v5Wr%2BzHojr%2F8eHwF7jw0VK2x9gbRoPEoO%2Fgw0WsLP0n7LoHAZ6zt6KrQh7e8k3jSr6NRiswU3G%2FZfSs%2FXqVpNe1ay24wxwQpuyx9hOqzDlIzuEX2EEj8T3pS1BGlmI1OKomvOrAM1gpAWREDCjcilmCNPVB1WhbOwBXKsA6rS0Ztu%2FFk1WW3lEDCuJvjcXZqkzbZKQ4aXvMWTUPQTY4y%2BL4xZvLxCWXPjXW%2FxY%2B7UOGmJCiri9iDt9GE08W60mjaX5Y2%2BqWQJp6qIKyw7XaWcg4DbpSFo9nUhRYrAuFilY5EIrHH%2FwafNt8d%2B0qYOdfFyy%2FNRkAcSb9aN9IAoiwrDWPoq9eFaNVS5kuLYlhSENWOdfWlUaUEKK4KwIOKgbdhMNPG0ckGOqUBtdXxFaH0ulCzvvSX4PG3QmQnw6PuIqgt1C4VQM%2BgydZnJPsEDZPwwGAB08o%2F3tRNigcTlGM7hPeBYye3DcFePNJkH2GRz%2Br2lReYtReEQQ0J01iPyrw2NrT8Z8jCaUEDUW9WiJ4sO8RieAtswAQFufhPaz1S7IEWSHHcgN5ID5kepc1PqsKtmYFXoZTsqhFD1vIsSXvK5uLtdXOAR%2FObouJfW%2Bmw&X-Amz-Signature=a4d8a32ff94d79e2ed21743fcf3d3112031589ad5d61eb04a29b978fba29cc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

