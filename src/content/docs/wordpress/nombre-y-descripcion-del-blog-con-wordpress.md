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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UNGMVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCdQ1n8eFGCjVweeldwriFS1Cw9sP%2BxKX1%2BbGFhLGR0JAIhAOdLMsheEn781mPDvI9NpUhXvVS4OXRZSQFH8SGhPHscKv8DCDkQABoMNjM3NDIzMTgzODA1IgwNwnUcuO%2Bn%2F3Nm8rMq3AMEBRm6q%2FmtsBSH%2FO5j92Jke3OEhGUCvxmL3o9TN8VmD3aMopCxK2grhDVnnFKjKTvyAxvZ5jUOnGzSHLayYvKMqjwaGylmL3c6ojD759C2KHdCM9LgnGW6G%2BKgwOhd%2BOP0F83F5if3tgCjqTxPalV%2B%2FjPyaxh3h%2F6Sd%2BP%2FbcPHoOhoU1sWXa4EWsv%2BkGVzJTN4rZ5N1%2FZGKICKZgQNzssYf8jsVORoILa849LZPWW6I705gseEx76kwNKOgZQv2yv%2Bm00E3k8zfD24Zdcp3VAoHxGhs2LjmMShgkuiYVyPoFPou4T6ABzhc1gKQ5us%2BSmiFbUHZlPpfeiNje0jaggIdTEb%2FynpIofHbrkH30Sr5gPV12d3C96r%2FWn%2FAsCWVu5mO0wtji1BjKwovMJo9BKwpnSiPGrCkuLuMttZn35hum2%2BeUgHL%2Bfd77D2awsUEzdJzxw1xDKIReSdBKu%2FEo5kUCkAN9xKneGcOjFKqw%2FQHl9%2Fwfl7Q%2BzrYvJZSjGWjkeidwwSnSbPU20P3MjM33kwCo5VqVi9Cg%2BHRxyb9GvfGdpUlqbFpX7gX1HboJyxBBgEBUzpQxQMq6In38kMQio%2FM4rYofxnEpPFlTfPz32zd9YukkfCtCllhCtGbjDXlMPJBjqkAV%2F18g4jI9qWllHLN%2FE%2FaR5qMKb0jCi4fn9JktYPxHiel0Q7ino2tUdop75oIAG%2FAa7ff8l13NcPXsjZ8dwIVOc0kyoGmNCb66OF7vTX%2Fnkk0z3pzrTqJkPaifr8JU55PdMiQjHchIO%2BKijvnH7ljx89jrL8QXFcsjMEcd452nOeZfBGFELC6uy83e4vOTcAEXhg1v71wH1lI69VRGQol%2FW2ftrO&X-Amz-Signature=193cf9d9606a712cefc73d0f728d8cf421e8e95acd0fcfce2c248f7dabd36c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

