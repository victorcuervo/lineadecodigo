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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTF4TYE3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC0t4GI2SYVTr3ywDFjysvsBIYANLq7uxDxjpyydLEFPAIgSMU9K5YePOMtNBmdELnpZcI3ZlcFg5uumGmMb6GSbTEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKWCsb5Cah8aWrzV5SrcA4vdNZXXm%2FoPW1GnZNakPSs5Y6pjbvd8it%2BeOS%2BF%2BrK8tWyz%2BOCqDg3QuzXNu2BZqlNIlmtLGTQmurxot7zT9efS2liWkpBRa7cif%2BUqMgjWTpgaxNsbjR%2BpCX64S39XyamUfMpW4B8RF3xf7B11PZs5%2FwYP3ENExSLDnfrw9461A4ElpmsZDRH2kP2zrxYVzU6ZZka3wkFZWdYo1mMziNm23wmXIv1zJR8vbtg6o8FE8NeZl50R795EFmjtp%2F7c%2B%2BzUZGkl5DgxMoEz01cDj4btt4rmARxMheRQYeigoJngKOLSIr436wJUX6LJpnJ6zjyN1VAF3KLOvqptcjnipAr2DFdKlIfnJPw2%2Bs5NwWkm%2B1%2Fe5eNeFMgmFs%2BgWvx88pWJIrPQ7T9LtKB2NYtqg2pa0Nv%2FwsUektqQeIs6tDXZxqVRWS%2FyR%2FSD14wi5AzqDbsMQYUPmi2DmlJb2FkPai7utjVA%2FPK7uTCYFZGH2%2FOTW7Jtb15gsNopd29xaRqaMKnZj%2FSRR5Tsl0mpYrXGqIXoCLlMc%2BCqN5i7hoRmZ5HHomJ%2FSUM3AIVG5dlXegfVo%2F5f0JBBW5DXm%2BjixI1T637bmOudZZoPW19SaIQaUgQlaHgDi8dpou6kV4cIMI%2B0w8kGOqUBEyJgt79LLo%2B51JVbqixk7dTy%2BLUfZE%2BBLNnxahSKxKWtoZXSxXE2CCWX1cwDEjNFgT3se0NV4hB04A8hzZ6rbZtfmWPWm8xa1acVdxyqyleKvVSnKyXchoGi7P9W7kC9k2V62L4K4q0tVj2yQGse%2FpiR9iFLl1uVJg6ndA%2BKJkMk5m9RHwHT9fpmM6kIhmxd27f8jx6IVkd%2FcdU7zIvwx30oN3Of&X-Amz-Signature=29bb0f3e9db97a2fa80505482a63d605708e1e014ad9fd17a83133a7545fe91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

