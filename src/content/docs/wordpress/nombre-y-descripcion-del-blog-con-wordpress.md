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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB4MJ5X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCJhbWlVQwmS18ypuNNnma7eCyFkdl67b1Zs%2FtAu5%2BELQIgJJZPdwsGrMz5hCghSXKIFfmg3nLe%2B8kOSisglaAjmLUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBf32eJUavhe9MP%2BQircA%2FZtRsL1bzoymFRbVT2OdFlzlpUo0XvcynJPOGIKJI%2FLi%2BMivgmpzx8tXEX072Nuq%2FK%2ByzPKdHNPwQGS8ASeADS8mFMfI1ZZ4M1gGpt2UInFOOGyeNUfT8O3fTpdcVxp6yI0ouEeuIU6ipVDFXzzdF4wT98JQMxz1JD%2FocxRkhfgyT0Gu3gkdNIoUt%2Bnyq%2FT4HwmkEHHJxHULs5rXJnRoVzDFXkvWbK5TRCf%2B422iXRDeQxCXLenjFLuDeGXr%2B2AI2Kx%2FKRU774pcd1tcoD8FO%2Fd2CumAQCpXZWblBSzdEaEWYn2JfN6lKQdFlxtnIAhZLjzOhxA27GRUliEfprOr8y%2Bm%2BdY64%2FhWOj6dkrQIlkovOakwG9XNxwY7D6tLORw3yJQ%2Fcu%2FASVpCvjI29drgznpAGZKXLGL3YU7hekTHAuwWgFX%2FAu439qf2G2cvNT4AbhvXaPTlbtosw9myewceHbrBgIiGEIpUPA0%2BOW3neouVMGMwy0ijQIN9lh0VincRoLZfC3JXxC2zSWYAMyZ3oT9f0kWs8uifaLCdf%2F1ZOwzMlQANt1%2FN1AZhxd%2B7e%2FsAJGzFeSE%2F1nh6zUpanpex9LugsBt%2FLhPlC2R6iup5HJ3eyPEvu%2FKtv0uz7WDMOTTw8kGOqUBTxhIt83%2Bng8CvXfjAMMcbdzF7fcwk37EFk25Ut5lyZ9mCTRgWXxMSwFLF%2FyWc2MQcxtlIRjK8r46RrnReHEgEwrFym8NCRavPq6%2FiNS%2FLo79vbd5Ts9fQ4GLWrdt8aUGhLyisNt6evg1JsHBeYeub3xla1mlXDVgSFlNubF5WcJlW%2BEFTXXRogEFqMTHR3KfupH9QJ59XEtQQzVTUCu%2FLLia4tSV&X-Amz-Signature=4b4c820e1c01bf55a1fcbec86e31846792abcd94dc582fdfce80b530f00e1dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

