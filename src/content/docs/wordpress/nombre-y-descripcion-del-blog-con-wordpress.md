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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUQZXFP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICV1OGD9xm7rFlXKxeGsek7k0%2Bg9NiBKA4XW0Yp7oGrcAiBN9UdnSVYluhH5bj7oONsEyKgoM1E5zFD2SCuTzu3aQCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMqdJxHaAvcUHFTiC9KtwDj16cIz3vvBfmG6u%2FPY9Ue0h2MQ5ebLlp7Dt4QvcdSIbcjsAdOcncxrnP2gLjbLB2HrBrrPBuNGdTClBxJO%2FmSzL%2B%2FG5L7yaS3WF51s58njtgwWkh%2F%2BmjpA8J9p1eqHhwobjnMQXdDtuETayj6qVIiSZxN4OV7pK9GysbzYWLt5D27zXdj9RM3po3HBA%2B3FpLRjaoVz9wtWInS6wbGzIvO4%2Fk6dq2BtjXuITUaXbmS%2B7Lx%2Beq9xetgr9BuDsz3nWzhzEZPoDBTqDmJ3BvqJqcqtNnd6crF1ioI30J5Hcmodx5FRos3DG2kIYHjxVIF47EU3G8wDmOIakKKYpA0crqs7DDdS6zORw7Ftdc%2B6R6CnM8R7Z3%2B0%2FW6UqVix1HfJmU9IHmcqpXqHIxSt3QKUuawduFjjuIv5VYP2SWj2nnGSuNpcaVMDLLMKhkQwlQZhBgNfgcTPVCneo%2FyUw4mqzM2dcoJ2VmxBpAOd8dK%2FLaGGnWYGuWIVBSSRi5axi7TfHwPX2%2B2S80LXbA5QIm4Kb7zaUS%2Bqo%2B0J1wDsfe7NglM57DNvSX8xSadAbdm7mqc50E86DFOGj5fnq1bPdn36TsSnUMaPd6hYxFZD9pA4Tn2%2FhGUKkVBAHCAbD%2FvF4wua7EyQY6pgFbv%2BdZK%2Bq9BiYtjM4ri13rCPSad1naF94BZZa%2B%2BOU%2B%2BDneqgJdttX5I1Q21%2B38EOIxe4IR%2Fj292ZtOYmWA6WEeUbt79Aniu4V%2Bj1JPdnI3idhRuvjfaFh3TtHhti6nMi2cQTDrw3ZHB02QX2fYxp8De%2F9H5UxGlABx5EYTPu9cCwAcoHJfv7pwW7q5detrn00te3QE1k%2Fly0%2F0qDIB1dCGb22KEd57&X-Amz-Signature=a912399074fc67524d709f58d7698f84132d0cd53a1a078d2691a87a94d55b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

