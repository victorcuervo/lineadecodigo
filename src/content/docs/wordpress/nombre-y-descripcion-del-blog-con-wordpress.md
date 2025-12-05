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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557SCLM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbS4JLYu7CvKj7wMwibMJoAPXNUUViLinKUlGIhIVKmAiA%2BvliEDtNoeymP5dPM3KI6NKDaUvk0q%2FcT7jJydpAEDCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCFZz8DzgoeKIhwy8KtwDHI%2F3juLrg1KLw0%2FOI3NQ2qTEPJEp0chDZDCrQpQMPByFydRj4GN3E2obY%2BJTsBlaenztA9XUr3fFf9ffiZcIn9OvL%2B7mZPhMsJyixz8EDK676hojm4msprTAcz4SVcTH87aEcW6NWlqRzg7ZFjzD69S24GX%2Fx2nDfbLJcLn1tlCtnst60EkdncMWi%2FuhB9qkjmAGn%2FQ0zCL8e2Wq%2F8Hy4zzPevfhQ2Fjy0nLdl%2F80JuUyAHfnPvAvm8izXcR%2BeYVHZb1UvtlFeb%2B0kZ%2FCt8JiOZaCcfFSVn5TbAWP074VKF72SzSDcWBgG8%2BRSG4wRWAtrf6i%2FkZK%2Fa0r2MyJz6JzZTbPNQSgRwH4EpxkkDmPYUi3DCV0nKEMvQk81N1vwUfld0xynbQr%2BdEKSO9untxFNAiJvC%2Bzo5cII3hWMnb90l6NK96lswEdpQUBnmiU4uN2XRsOzvaA9CDY64wqJmbypeyRoy4tjrJVGXlJ%2FN0JX6ybde%2BTJmGdIg0rdw%2BLwtgcU%2Frc0vhTu%2FlqK3zZmuvrMLkPVWsL3VsIOFTTEkM9ZCnZKHDggrIOO3%2FEDdGHaS3iiBy%2BrrWzM7aR%2FdAG0b9%2FnVpdDpXePWUOW88OMizSZPcDm067IfQRZ%2BTKkYwv6%2FJyQY6pgEVCTDqiHBqgk3EJlVlLGlrS05I1vri19z5LIAhimgz13pZrrWvXemt7XHgDbhp8AGfLSlOFakBmVkH%2FW47e8yjzinUnuKMoV9%2F%2F06gSN%2B5J41cxLDWj6BNeKuEnRvf0AaWtqeyLhk%2BXof9SA5bw72MgySc0rmhsbtHQ2SUAOSi1q2gDBYaXOYd0lgnIA5xeaXZUVjoahs8k%2F8nSvrIB9tLMyFbtv3l&X-Amz-Signature=f461fc8373837b7bf059a4fff41b6129d2dcab83bd9d2411ec9e6ceceafae32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

