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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J22HHEN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBSezatWWfmuZMv5HWNY4uhPU6jgEH9j5bJyVDPHElp1AiEAhkScYxE02T2pCx4BGZajk0pK%2BnsWOnBL3QqOs1OQsIoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAk6D%2BVXO27hRhYQoyrcA%2BFhrfqFuANxq0%2FI6oAjWgua7cP9Gaq2DspjffTlCYKJXtYo7Ec3mNaZunD39NDxEA83%2B1hCjD1KYIURWclqTC3kG4%2FSxgag7PMg%2FaQA7JC2PT2uy1Sa82cK%2FOXhTCyNNc8jpXUeX%2FCVTXFaL4R%2BElR1npV1fcBlYjLBi2dBFdIxvSMBeFdS3Z5sqSeTF%2BMdI1iGBkzYVxzagHBP19fdY7TemvB91AQaSzpgdUnOP8g1ejW2BLlMpEBXdfGGLK6aSadKx%2FVu7rUohZKrd7FpzdU%2Flm1mJs03%2FVuJ55T7rQ9tIax28aOPwEbFrReSKAH51l%2FBeb3WV6HazBKq%2FfOyaj45a4TpwTon8G%2B3NOPuLjd%2BDiX9niVKR4ipE2V5xHuLsn1HeOX1711zvmkRFccOUyTQH%2BDwoQQLftbMQnbipCTEV%2B0nIVA93DhT5COjEuctavTmv4xoWFpCulpmvG24q%2Fy%2F%2FM4xLTPqR0yvKoRsJDqIMqRArzbqx0zojWLIDd5n%2BlgCnrXbCUDpA0xAhoc3uCHBBq%2FevtFT6HOcs4Jwr9sNkYui6wsHTHqVcYJXT%2FXKN%2B2XJKyJy92bJKbCPSufOQ%2B9HUmeaeK1O0Ft2PvIRb38VpFAcMhDZMX0VGVqMJ6RxMkGOqUBTS0QPqtjA%2FGPcw8NMOwVeFcW2xzT3fZgq31cbYsSqfxwujy2BLn0UoQmTroa5xP6n%2FCZUk84oXcUgcZtADQpeZGQFGlh2o8bu0Yrw10JeVmlsrX9jd6ajDBLeFRaFAe5x1Ps4wBqMz23FHyZxHI8jDDrIZOkOtOAMcDHfHbJ0DkeKdb5QdYN%2B%2FqLISCV2%2Fb6j%2BwdXepCYoAlfKEftOXtweAE9zUr&X-Amz-Signature=5ff5a25e502869bf633009f77abd24fd65e05670d44c5e8a2cdd49df46f1e330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

