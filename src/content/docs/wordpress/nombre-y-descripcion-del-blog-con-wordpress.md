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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMMQVRB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBMQQvda%2B4dNIV5es5IRdblakmD8DkAI6m8L1A5CiE0AiEAjCyzVHrNXikIEA0%2B6d7Oh8m7fdpW%2FHRTi9U1jmCe2EQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIPVQcCRHBpVt8vi2SrcA96hGztkH2158VHkdEgvQ051k6P7fJ5RwqDjwTT1cqGWcG6rpFKi2QQ0igzR%2B%2F48gqm7JoAWnGRA3YiV81KBM4MGhEBJfPLnAVwU4c%2FHzFy44KQ%2F8flaVNXTWoRPNr2%2BiFFoG1nKcbRtQWHGVU%2Fg6X3VjwQQaDsFUTZsV19q9%2FGItsuFSZcvsn5cHxZzVA8Td%2BWIcHjRqcAijRgwKidEbrRTwCpb9%2BhAlWT1x8uBQH7jDmf3AmseEqeJI2BsgNmMjUxvAET%2ByZlSuGV21IIeiBGZrWfVmqUhenZK0z6enyIzLcatOltXqm%2Fwz5smyqJqVieMiwXYXtDAUXgSnEOZSBjp75DHorXoTffoFjty0YuoU%2Bx1Fp6xxRBvVqtWs9ahyC%2Fj1g4Dii6%2BIpqoB%2FDNHvP2nRLommCBQMpyeihbSnrFd91WZ0oepE5hrTy0j56%2Fb6ferGoeMoJk5Ke6jGTBvG93%2FRku9YQVFzlYv%2FvyFNLGcEwjmJBNlf0ncCrJVGA8lt%2FvzLJhV1Jzv6Ee96LFl3ynEW0PGf7umaRj22i6xPE5JRb0HlVT3XPCI6zTFsD57IyDSU57IzgtIVEXLfekSRYGE7EGW5lSNCvVJQSSuMOhjru4m1eFDUJfo0dzMOSm0MkGOqUBTnoV%2Bfjx62aX3V48XpyerOJ%2FEIJ1im%2FhAVc%2BwmLe923HXx3KTsd8wkg76c2MK%2Fv2P0zcdghJNlRt2UM4Kq%2FNRW%2F1qmryTiGhhUYGbZY0R3o9Si6VDCzK453v07n9b0Xxe0QO6K%2FZumq14KqKi95uWJnM4GM32WoRQR0mV4QQ5ba3px%2FaFxo0J8Ic1AHVRVYF%2BL4mqozhHLjJdbEDglsqq%2BYJc3IZ&X-Amz-Signature=35e83f6b9367f97aa3a144a4587cfe59751976dbbd4fe60d2a729ea2535975ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

