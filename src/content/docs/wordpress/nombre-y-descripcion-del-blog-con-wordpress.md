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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53T5OI5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCBQ9K%2B6kFt8UXbxWqtS2v6tGTXnBVakdzMbUma5gqSJgIgWqRTjRH9qf4591sRXJcmncSsTKq7Ws%2BYCVBkAN9OVGIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFLd%2FPJIqrHjX0KsQSrcA8KY1NAhsJhMMLPBTYGUry5DtvuMF3PmFqvNG2ObxQN9E1%2BoKD8Vvc3lbkH8kraRysuolVzOTfNZaS181FJ7d0XcWU47Fdy1QcI76ewlOrfFhFuTDMaJcp8d1h7avxiSMlEEz0kZbCNU2UcH29SWmjba5QIpv4X%2BZpxnmhKIsBh%2FGjD4rZRvJiqqyPqFB7i5FZFAnf8mn5dDoHYiJzoRCqOCjWeLdO%2BpfrH1bUmLaGLslK7D9lvzu4ATa0vbOns7H5aUqXHwoQ%2FwZoGSnWmosAK1T6ZVrJMr5pu450%2FihCPqw1anvXPIUbpG5vL7ouAzPWJqR8ARRKsTy%2B6gPD%2BfoIdG8BwsFei52F9NczbXBL33VPFb06tFu6NPOoThQIf5D1qc7lcPcKpxbC6V%2Fm1PhizDZR4eHSlNXtxMAnyYZ2rnaKlQxU2ZlLE7%2BmKZaRJZGjSH53jO77uUiYVi2hpNpajCZNPdK4F%2Fk%2F59JXgG%2B8CW8jfWNuaa7Rf5LrSRoKcXCXEKh2gjz4rj9lnkfmChNJpbfo5evF6LlQ8FoTwecsgnMk7mvqmGCfEKu%2FgUTwiRqguSHU3ojmnuCudeIThijKgWUPu3EdpI3YGTIsoFYoS%2FYowowjLfUHHzvLbqMMutxMkGOqUBvwyRUkPFMmlndTLjC%2FSNR30nxKJ1i4pKfVQXVgIO2eZea69ZCGjo3%2Ftid%2BNMnxispKa%2FbsW3TiAyj7PB%2FCDKpkNRVYgu06w5Qn6QEM6UeoPQiB2BdUsWUaARmlFywnnpBh95wtMJ3EsJ92W8cVgC0k8bsGWWGV5l8h5imGmmbwE9Phn59jBWjdwq%2FqVZcefa556Ra62fklXWFjgPf3iKosBqEYDY&X-Amz-Signature=42161de1a6c6ba65ef9222eb8d2361af44a39d036e321ba1307ee310fb9f5a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

