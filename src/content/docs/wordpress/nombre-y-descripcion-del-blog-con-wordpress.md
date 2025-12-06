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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2GYXMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRYDpDiTmYGmuNBLmYd%2B1P6L129K6bNZtLJMjiJAhi1QIhAIBrFhhHHahJm8T7e%2FcVCdPFiZ2I46xrnzp6eih6CDoyKv8DCHUQABoMNjM3NDIzMTgzODA1IgzX6hvIVb8cnW4OhSMq3AObBIl%2BzHsF5%2BoGRdgCDHMIoe0Y08QVdy6czHt%2BGHCbwoGg21csTW%2FUxRqGG42cqkUX7MLp%2BbOE3mjrO%2FjzzNkIbGD%2FtVn6KXpyxXK%2BNMnXLaHSnYZPGr9LN%2Fm1frD2HuvEnEWJ%2BR7zpEPc8lEL3su17b9F7ctsImRpt5D6gBFM8EdILoY93EG%2BcYJO0rtF4wuKLZG1OzeQTMU5kcnWcWHD%2FaiQQYJQu7q2f7T2OZQxoq3sifjf%2Fb1BXslucSiQf2DcxTWqpGPNryhP5JOwmZRSxpC3Kfbt1ItpNWYSC75IFeVaqooTQ4rl1jBi%2Fu3a3ozKB5HpCr5hB3Mti9ur6q28NC8eLCHe9l2zEKzkBXtWCcjaVp0Owy6dgjn%2FUQSO3XFc0POPq%2BSNFHnevgymjd%2BPTjvFW3VdI1dAbmC25vrLTlF0IQoat%2F6FiHkHaVLj9kCBrk55VN8FgIhmo%2FaHqLJd8kjAU7xF39tLq74cZ4HxNmRVw19Omt6YJb3LjKjNH5%2BTsFIBA1dqn4j0gurh%2BKATcuAnL4dX3fnQOLva%2BO3jKwFYU7PGbF9wP0G3c9TMcfyfpV36PBy2O4szrOeFrnbJi%2FgELu%2FUVdYiJDvz4vXNLXOodm%2BuaRGwE6g2BjDFptDJBjqkAZxcyEev106vQDal7NSnQL%2BAfbi%2F6aHRRUTJpG7ReaNDT8K0sdmbYmhCjQaeXCEQfJbl6ttc5q0%2FxNtO3Cu2DfcTqAxhEz5JwNo%2FnnsP7L8%2FJPRSJRP%2BZzDR8vd5067ZO%2BToP6mLIR9SWeJ6GmHq9HSZDOwTDgvuQfDmqQOri94VsWIr3Ny3va9OQUD2kHXqRQi4LsRhqYto0ffCp5cKjBnaZTGH&X-Amz-Signature=1823da7c47d3a39059f0495161e235be4cf81445a9ce13ba4784785e7cbc69b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

