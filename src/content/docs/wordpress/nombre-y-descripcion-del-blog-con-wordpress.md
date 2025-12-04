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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43ON3PT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDyaq4sps%2B48ptxN8Q%2FBd%2Bg8jss1wHFhqblKNnPK99PcgIgdL%2BEkyle2pHkLHRMe%2Fxu9DqZ%2ByNqOhjuTNhHnS2fgGAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOWcAhP1JpSzcj2B1CrcA9Jcdf5VAh07J9QtqdE9Mpb7YR18DxCj3hPZeFbXoy9xiOmkKteR%2BTgBglNtdnbCnOoc5xhx%2Bb3pdmHsqwCB6ru8zJmvyUqxloblj6P4vSvz3XmJzbCjtI3JtSxuiILZYrnT7WfN8GSYDej02%2FJXFR3udcxt7ofAH8yzdyfJeN7U3lqK5LZGOIgd44n0HzTGXcYe4xrJju1EoMEqpZx0HkrG%2BjlG9n5TpxZiYzaV4WR4An6nqXgZbYMc7ag%2F63k%2FCBUWsiVycJ7AKP6DqZmokzptkRCAesdjULEfu%2BCNiTigCMpOPc%2FC38AB9sAQLGiwM2NXh4k5zIkHxh1Z1zDxScbUaIl0jVvTCGBsF9HHn0lRcGGACHYiWqLt1F4niqu%2FyUdf2u1dps2kS1KU0%2F49aZCudZPM2%2FmDV3fTY0%2B8a9doIj9hNcHCw1vVpFm%2BzkaNZFTkiTSk1NHaVDBClagbqI9G21eiK6Ui8j2MjwGQntfCmG2ORUOVR3DQMICgEZTLbPciwCoC2bUgfFmYTMTKsLtow%2Blmjb9ZNp1n5rPD36wc8UU9B5CfzjtktJe1NDmDzqj4Cx59sHA39G3UjcKS7oSK8hdJz%2FVkvFL9jq3j2toFpPFVwB%2BRHPVSCNVmMObyw8kGOqUBr%2FI9vrpuH8AALzqZ%2Bmy8OyjSOCKBrzH7xxAGL0SVBhiL1ERnIQDFYTZG64VJOxnNXtLyl5yE8VF8qByrIV9RA389Nd%2BndeA5dzebd8ESBtYwtg5KCm%2FCHzzimo96WcgG2IRclSODmilkzBFV7wApE%2Btsv07UKucfYgXtkwGc6XawNQI1a%2BwZnTsAjo7O%2BtNTgocaFlh%2F%2F%2FNUHr%2Fp7vGPQwl4iSMV&X-Amz-Signature=890621fafd580f5794dbfee929058bac7b977ce024d51b224ba5b969bd9b0652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

