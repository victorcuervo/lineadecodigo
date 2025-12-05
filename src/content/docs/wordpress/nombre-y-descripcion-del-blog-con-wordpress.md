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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3P5B6T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl46jrPAgCpZ6dXi2F%2BDSHtO5YYGUu7zFuhE%2FjwBvzHAIgIz5V543Gj7WIg3jv4PknQ1zb8ldLb%2Bri%2FA9BJ8l7A%2FIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE8Qi9qLe7N2WKy4MSrcA%2FjuL2w7lQrlYMCTPKpzqSGLQrcSsLIy%2B7mwA9ip3YjN2XDlmTs6peY05Wb4PgyXzvOgDMiJB9SAUz5lz7%2FWWrd7IsTub99oXwGd%2B%2BwHxT9onrrlK6G1tOZjZ7%2BsJ6X2HdxTry9XfM4s2PpK8s%2BUoi33DT8wn6iYmdofbAdX9AEg1M%2F%2FNhaEcD50TZm1bsu%2BY56d81MMJ%2F2sJZnZ0EDvq%2FV6icJOMPZzpVOy9i358leiasL9dVs7z9BpiMmc26ehgVjooTkWTqkID35ZW90c8u7I0js2FCXJtPHMbGefflBjM%2B97SY9wlzAPzYqrRbQ8igKslVTBwDQdJ%2FfuHRUyYcQvMBoMEkO%2BufqZbQNKcZStpFh7gbmwVbkiGPBWG0FEG6BUNTWutoUwbTLImP6utY3HvYwH6q3HbH74Tzerv2HDWaofXCyTQRBVFO4okuJm2tcCdMP92ve5nM3%2F2SGtezwz546Wd2Dki0DG%2BBWszMYdpupF40H4q3pLn8bVQk7Oq97B2bwTyUqAJ%2BVXm%2B3aL8KGdjLOD9lCoFTRRdRhIXWRFrFOEGuWtnUsbPPRHWGdHszMEJmr8zwGaxsJQULOkCrfXlM2Mxx9D6RDHKCPmbgxOfNn%2FNPAUUC%2Fp4DcMNOwyckGOqUBr4GKnl%2FxGXkCbV0KXfphQS5MX0vRPmXbKGA13wIO3TYJmLnmsH%2FXshOZ4oS2bgZPEgcUmShQOOjNlRkV1kwzGiHPd1Xi2zyBcFMBTN08opR2fToFWJgx276Vm1XIDm%2BYB7o3bpKtkV%2Bn8NAWFd%2FXo9bWIjARQDLh0l8VnOUT%2F1l4CFBo1GigCiz%2BR7WpYFcJPfQwRQf6K9WQrXi7mQDLBwC2sElK&X-Amz-Signature=2c4f8dee75a6d66eaad21a3c592f1842d08c1d26e63c847ad660636f3a5b8182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

