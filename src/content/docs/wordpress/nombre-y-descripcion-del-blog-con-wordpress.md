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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOWY3HG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCQLPkzpQTpDtow2FwOylswnv%2FIDEfRM7qTDASCQm6xaAIgWmhd6PPftBhlulSBGl9z6uPtxv5v56DMrQAI4j57pI0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAiUjLCu%2F7kUx74%2BxyrcA6r4K6P9ZDbO6F6GqJoYQiBAQqu9Cx0vGEi8gsvioqc76G52MBtAl2G4F%2Beld1epiB6iVdi5YhfLPVqJZtCv4Dwo1OQ6a4aY6tXD6NgZee57NSzE7ccfxXX%2Bwpzwp%2BVhsJd3caGP6V%2FemZIiOEm4Gx4wSY%2B8PG%2F38ojGTHZQhei3%2B%2Bj3H84hOMZamomdhh3WRp4Ym5LPM0KWEpANYqAH0cspr1aGSGCFcpP9t7Cq628uBb9Kqtod8WuBA7IvqQgxtXyE5%2F2At3AHWPOQYtoIMXS0D1NPAMtNr8sfA%2BYLCcwv7tVsEusOCXKeu4tv7irsPgdRWGqTrSUsIXh4pNSddxBhbEjyGqwK9%2BFDbstqgPDl7ENi0G01JI2cusjOe0X4zxApgYqWSTxNY0%2BqOUZTIqiwI9QfEP4elmR2Gx5zaH0zdWFpkDor8L8DhFk2KjWoN6lnfukmEFyFoNrrsNlMyfn%2FWARXxBWPdV3%2Bh2UaaZdA0s5KYW0Anooph2eTdyH2mMsvQIZS5%2BWA1HJEeqHcRAdXD9gTrRMYl8dd4SiPrlwj9wQuRrC1jxHJIWc96wrsl2LD6ZTi7CXtbZXquQt5kzLTzDNllx%2BqCoyVNpSbZR4QIRlMIn1RFaKRBwylMMKExskGOqUB7pw0U%2FvcXaD%2B8ndyzodE330zK8Z%2FpkQABFsuwejmTNp81F1OPen3Al8qbbO9ZAGWdjYxuMnaIAvKpbdXeRgDsV7NOhKbT7esWhPZwut978qgbHwsm3NM0FzGRxkJNRoCGGKyEDOeK83no8t%2B57Epix9wwytrx5JByWzL5yK9i3amU%2B8%2Bt5PIgxk9BEnmD7ysKh9rKTWYntOrVnj4Xjo1o%2BEemvCd&X-Amz-Signature=998ac900d7f5318841184bc99428d09c66352fc4eb1a87662d2c1c8979c2197e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

