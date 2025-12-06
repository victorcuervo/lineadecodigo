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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KV4VGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC03s4%2Fv%2B7oCg6wbkp1HbFr%2FBi9aGG3NzTMmI3MbMjq5AiBVprIMRv82PH2B7nOm2OGC5mgvL4oGVbkaMf2UJ7Ov1ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLvRFOxeMz1qlf8qBKtwDv1Y8ToKFmIq0feDnS1o8W8%2Bnxecu%2Bl3s8Ipe0PhR1s%2FPw%2Bq3g91GbMr6m6G%2BTHMnuTgIh0V3xxV0IclrYK4DGuz9pKRkKG%2FnrNPI2y1kTaVPIlaxkwFpzvo6TScmrurox4tJs%2B64Olyk0dYoA%2BVlTKD2zclmbxU3K7qNVithflwaPBwCWea2gG1MBtl2s4I1eIbDs4bdgN1HV2H3mptYR38J%2F1xX5UdFdc%2FCdWkJXs%2FYR4Xu3RdDQooKWLStjtqY1Re425Qa0cIq1Zpij0%2BF6WDOGON90BPuDMOhb4n7obxnLagCpQEQryAkt3Fm%2B8zbR5wLsZ42n8MFF8j2uQYxP4ycdePMpgBpKa%2Fep46PXbdzVhh%2BwHisnsUw2lP2NJo61g%2FQzJHMYje%2FjvzOYe%2BozkQeQZtK2BsU59qaHUNNuN5YflhOjY6iEPUHjClA6V8EBbk%2FUYZTo%2FCpr9A8ZPuoeXX7zwrNHY91YWipjbAlbWVURWt%2B%2FQfzlZaey6FDMlEpapVvipvKpySYRFsIM1EoClBF4PsgdtDpjzzyjn%2FC7CDSa8TDTrrDhk5VTrMWIi6sYozDWL8y0lKuVnWlQH%2BJppnBGGDpzR2YsveqclEeGrLs%2BfBQuWwhnh%2Fkstow7sXRyQY6pgEcADeDbsSIxkWgz%2BhZAwFlClHhWzKA9b3D04ZiahYAsMhUq59SOBcrpAWRP3ZtDVqJbOUAch4G3XYWcyCTx7wA%2Fof3NTeigHQAf%2BCOT06%2Bjb3F%2BIcizYWWTO9QRutJ8G1P8KCP%2Bgm%2FOL8qpFeRYvZwxiIO2dibs%2BsfOfYf6aCz7G8Ug32MPp7vYFOMjwjykR2UAmVTk62c6tsW5jSxks9l67vC7Gfp&X-Amz-Signature=5acb1c5b5c4ee402d97405e80c92e55011c1c1c988ecb49b93712300a1bfe618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

