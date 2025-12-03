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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67FHVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGiV8q8c%2FSdDaY%2Fx40wnP0Ehvck9CBdp2KjAKrxGnGCEAiEAt%2BRYQa8AOPjZu3DsLqUroZh%2FOgWGG6IWoP%2BXtJ%2Bk9hcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBaW184W8tg2c8NpIyrcA8qMVwEv4QKlSnV%2FFQAUjy8vH9ZHqYfWDx8MxgtTKzf2KqvD23Dk7uwAunUoDswdYk%2BSdK7vPtqHV4XpWaPg%2F2T4hRfhKFsZzas0LKzus0M4VjMMhA1JOkT4ingTXGoFdEvRU%2B6eSf%2FIqVtuWUFHosDV%2FOD7ycnWdOAUi2%2ByFU6WPCBdnsukXbqdDD0hVq1ETAvYUtXTJ973%2BzILY1oi4UwGf4Ualue24VnmrJkYBXwMcpfRvp2Up7RyxYgarFvWeKA4ix0o1sB3TZVTZ9mF68sW0ChCxmGyUQxvtAZ9npmgKygHkUiTOtquf52Chp4pJbri%2Bq3EpGUY5KPw415seur8M0GbtlkRRjw1SWNrrpBbaJgfpvfPFHAp6gxqK2%2BttSN63EOFGBsWo1QZCbU5IMSfFRMbZt07UT6qIWgSupTlKGzjdYn9YnsFR31UUQoeqRVG5bNO%2F3%2Fv01dNMe%2FeBcVWcoHaGcerFHihSOnUjIl%2FkwsrZqTmshb7DCuxtbISnN6vqXiO4DCYTUT7spCu8RcECHE6roJ1obmDXF%2FrZTcAA8JS2hh7pTvbqT2qgC98GVnxgiKdRe3j7GfOtU3FKXGPgVGhZHYfa11mQgVrQdKc0XpV9r4VSQv3cZuZMN%2BRwskGOqUB79rhwLNwRtSHwur5kjqLSmevmd%2BOZZzw4G9d2BIV4mWAzhilNp5j%2FEkZZP33udKI8cPOHU9Am0DMmzCupBsAN5ZAg5vwtcEfqG2Yj%2FHYtEewfwlMu7O0x%2BcDwylrkPcVYDsulMZRMQWyqat4V4chAmQzxX9lOAiEi2kY3a1Sskn%2BEZM9Eu1xT%2BTCCjK82nGYU5fjmbMdz%2BNwM4%2FlSoc%2BmW7kymp9&X-Amz-Signature=c7b6df0ed57b99f95db0256cc24c156eda69c695cbdb3de3f4a9ccc5e899b3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

