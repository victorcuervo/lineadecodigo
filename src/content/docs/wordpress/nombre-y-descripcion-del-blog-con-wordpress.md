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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPKHDCX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FuYMatbaAfTInd0WFIAKDlVbptxzao2gxUdh%2F%2F%2FqDwIhAJAk7jBhrs36q1nl1y4bP1%2Fna9qLYSg1GUqGaK7DD665Kv8DCEEQABoMNjM3NDIzMTgzODA1Igx7BVsWwcanvJzstaQq3AOWFkmAY5CFqCNnVzoxuLmxD1HxkGUcfdPuNl9TN4P3cfttpvnD28ZgndbWaoZpZuRxUF0YYNalafeykNvxOXMPXUPkJmX0WEXL7RHMc5FmHaGtF%2FiPQHHzcWlX69CFkXgqTd0hzEfrNWv9kmbDNyo%2Bq4HWV9aZqc3GTcw0Y%2Fi7qvrneqeC38Ah8uj9uwotS8d%2BOdDTDMe45ki7x%2B0xbFsgFxAH9zVNFqu91zcVXKVr6vF4sz%2F%2FseDNh4ertO0EpwX81bAL7g9xHpHU7mvqTtpBNdVcxuxinIoShEhLqJaVV8g4GbQrjhM%2B33F3faoLpYV3NhqC%2BI4%2FlyZYf4gimK22f2c513VxqRtPlj%2BLPWoI8giA9nvgP3iaI6Cmxgr4d9ZK%2FE5R%2FdIBI2H1j7MM3kLbkJGdiKaJK2SBC9Al9QTpLnwZQ%2F8SrsjPS%2FQmsQ75dV2LxUy17O4oaqMbKyZC8mKboVppozGFEXD8lVNsGe5dh47vBrETrJ7DlQsdWRo%2BvIIVdT7yAUtSQTTa9t%2F2HjIYfExUkEH42Cl5GPyxdMiOu5aKUlxiES77rSejELrSO0T7iay2O6SWJDutmus%2BuxBRr6B%2Fly7CIx9rksdoLKFO8EnuHoZSO6JLlW%2B4RzDwhcXJBjqkAXLuKzM%2Bu8EYU1QjYhSF5WB3X8kZZa%2BncuNmx9PVendqJ4jqHA2awj9TPS9uvuu8baM3n%2Fc9hAII2hw11QNCSjXHBI5dPj1yXGQugLrw1NapZ7ms4lNew48CVKk%2FXoMDr5GfgwE%2B4aIjAQA%2BD%2B7UEKijg2ExSoYAf60eNohiH%2FzikPSA%2Fu8uc00rpJNHtZVViyFA3ZZpZkFsRfoyFUnIDILm10No&X-Amz-Signature=c2e69c756ea494adb7f66e85c49441e76ad97bb0e3e1907aa06937a689103927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

