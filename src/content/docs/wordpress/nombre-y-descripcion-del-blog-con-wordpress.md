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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAYWG4C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCGLsnas3etxsiSPuwbAYVSWVrL%2F1wBXIG4lNcHbSZAjQIhAPIU3ZO2CjAHa%2BZYB0QKOQxbfMUaVIVi5XuqFGsHEPtKKv8DCEMQABoMNjM3NDIzMTgzODA1Igy6opxXC0NlidvZk0Eq3AN%2F3vo%2BBi%2F2MVqGybGX06sFE09i9Z62U6XiHNu3tnR41SCxyKytEC0E13Z%2FniWl9u2t7%2BW5rxeRlv9in1zkK%2BbOZeSTJOO5lC%2BcNDazAmfezOcoXC3fK1vey6h2%2FCXNfwBkQMKzpSyrYjLq2jWlxwVr67UfUHxL3esTS5Myk9HrYM5rMFcEKFFgRP7r8i9go2qxlDXYKR3pvsfjedgZ40M%2B9ia1kzqWWhtjYV3qNpmJ1cZloaYQx9BkLVg5HRYTd1WfH0nBaU6P6FC6AkRGl%2Bm1CsiX5crd1DYdCu9k7dKw4ieqbS3nmsuwYvRoN5muW8aLRipduxCyL3JMfpOhsFE208mZPpNmnLTDSyX%2Fu2zdQYqqNQuIlxEG03p1bbR3EteoBc9suV2aDRuWj0naDWwvV%2Fpvlf2Gs2whSp1ztqqWJBchgVTZzJSASRr5%2FFc3c8yjmDoM4HcKls%2F7130t%2BBibg%2FDpQeyYM7plbN2%2B8%2FVzKmPjlQaItl%2BRl8GaPbyOBveqbzXwkSy%2B2FaJhe%2FGf58zBA1%2F3JuYCCWps9vhqqCUtjP8C29QQ%2BEl1gLjJystGWT0qwz6XYPyt75kjDUgf71cuETCSmqJzAhYdzzioG4P3hGrMRrADd8VaQiI%2BjCmq8XJBjqkAQ23Q9u9ENL%2BBrOlI3Fn2IVmTIwZ%2FqcCR9EfV0Y9QmxQhI15B0pWCX9UgSWIlE5e1pQCrh4rYkCM9Nwq41lhJwi2vVq8XlLolPK58IqPzDDcxjVNcFXef2VeSaF80CRB2Tde%2F0p%2B3idC69ihqjNyboufLI%2FwVCthn8rvQIG%2Bn3MK99wCgcqkzZSlZqKOBGu32PtJ7Cm5PReYyl56SPX13018bVqA&X-Amz-Signature=d5a63f99df499667b02be9898671db57c82e81841e6bc46856de9016d549aa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

