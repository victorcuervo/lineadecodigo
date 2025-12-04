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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSP7KN6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCy29eamleUBCJTrISDHcL1YP5DJJPAoQ%2FdOv9g3OdLDwIhAOZmA2f00OmuPfzDdcDy0%2B4fv1DTDxiYt%2FgCVTIK2GJwKv8DCEEQABoMNjM3NDIzMTgzODA1IgweJPUDm0Ti4OeTjToq3AOigdnR2bB9Gomv8299kC02NqD4TZ9N%2BjDvgV1hGL%2FSJHwolmGJ55tMxsHTCyX2LXZTpQ%2BYaemVuYdr6lJAJgYtX%2F3EVceQq7Qf0DKMw1k0OtWuAY0OJQufkN3srR1oPOtBN%2FynvhtIjk1WQlnOCjhuU%2Fpm6%2B2P5t3CIBRCwa6npPfJr%2FEY6X9xLrNPlGCInypNul40fjDPm2EMihWMWQ2kAsGBLoYJ0f3N2SaTmvWTqpw92t%2FW6zzmIeXiaZ8Kw7JMl8qFzeKWhTRE%2FB2LClCIorCfPXGRJciiFrelIcYehX1xfxi62rQD7%2F1l5vPGuoL5QbCjii6A2i0HCevknemiAGB36xxV1F7pDQQFCOw%2B6jOnSHTqb7umnXiCl4DHhOsyPVTlHhyl%2FH%2BPPaWqf78a7UDBLMX5wEU%2BHGLtF28dLVz15vCyhqzwdJ4HC4sQB4UgcfZXTUnSiwLxAQG3y9gPoO4EJq%2F4afG%2BP06aH00JceoNrzkRNfh2hKoIJhGos9V%2Bbe1pydEfYG4axHtIVDTJimm490rskYZPeGYT%2FFNVzXTzwOdDSN0EBnRVC8MpRzurM1q6dYbrR4MoX%2Bh71N3y1MI1aYjmm2uwMITPCZtpuM3WO7MXXISHE3orLzD%2BhcXJBjqkAZKZbdMhdMqxZx5JnwZWSDLedA0OPyk6XOd9HngTHwa8ngGxAvTA9pa%2BGimN2cNE0VFiCS2gDaCjLZBBesbq6xXz75JxpBXcrHcLVXNII49d2ANrGymFro7D29QjQnVlCqOqXX%2FaYgr3Rmygbl4hcy7QjusY1UcI2Ofs0yl%2FhuxAedzCQqKHn54igYsc2Mpu8u%2F4ZTT1MKGO6ZLwV92gGFmRHOuG&X-Amz-Signature=509bdacb2c1fe6d63159bfbd6d051abc7832f999b6cfed4c3563ac31f5bb4100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

