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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3FL2QI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCaOYQUgtC8ZGitNTg%2BHSCu8GjRt31J1IonkD%2BGK2L7fwIgJ%2BvGuZ96%2FGCagTg%2BIvbjj2yRlr00OtGZn%2B7zE%2BgvDZgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDXrHhtlFNYINMQq%2ByrcA5NZbVzYpDiR6NSGRJjagc74uEBvmPPfDVvnJcI%2Fk%2FLNlFcTxgpB9Tnh48TctvgL8rFPJK9oQXEESA6TT61faevlNDsj3J%2FpC%2FNDGWmDxqKalb3Ct%2BwPKeIrUA0rL%2BxJaa8pKQKmC4veepPeQHd09oD7PxKVOdaV1gbDWnZB%2F7eg25iyt4TORXmKN483FbQKp2w%2FkyFKtrlPwb1UVhkF9nibshgTLRQ9DfYfQacKQKMnERXVcvC3A2gV1L3Y46Q4gpzjs%2B6G74rk5UzlMt762zKWrwrlUy1HDhjwR4mQSbt1aecIPrdKVJORzrLxu5g9OP8N5jNueelCpM0XTbAYY8emaAfsIqlhaAHBL1eIF4XhAN%2FLDpiCYEaro1XIuc9PAkM%2Fgpg%2FShEOZGyl5jqDlruEz%2F8QVzRp2LP1RqMVxYsO%2BOMwEWN2sGAJh%2BBiFGOo4c8G%2FIRZNX4bLbsP5GRQu2brJeJLudE5OdC8%2BtPai%2B29jYkur2wh8J9DjZuU%2BcsdIDOT7F3V7MR4%2BF5aOAt2mU13MnPLHkmXz6gduefS3IHnbnsrF%2BDdGQJCh9c%2FqsiFZ%2BeisprONKKgGK8iVoG3LQheCzPt9%2B1ZwOB7W0NcB80E%2Byt47UUoZltbQBgKMIzcwskGOqUB%2FrABVWq8p1SWVWQ0DCTdeLGRUUns8HeoBMS99v3pVz6EHSCfReFraxHZ7UEJcZozpbtP4zcK0%2Bd9CClBIhE4zVYN6Bi27UkgzUzJv9A3Umrn%2FT6HRC13mqnBvTEjN0R3CMaTAn18Ipln48TSF0unQKadWetQNKp%2BiIRTkoqv5rvnPf0jeFWBr0RNWYT4zWVFyNPD%2BBjW8bpe3QSVSSiwKwaDD%2BQe&X-Amz-Signature=9a77ff928382677cf11102b907a435df178f71e329db51dcd23e60e0359f1514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

