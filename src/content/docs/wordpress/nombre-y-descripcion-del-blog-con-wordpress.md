---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCWTGP6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEQlwEgCBwDrop95moMnxDiDfUfdVpaX4340curx9H0iAiEA8%2Fxs9yL5OWxmuGMLXgPkOJYdoolMyVzgyVbp1n2vk1kq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOyd58170Ps%2Bx571mSrcA%2BcDajFEnRwHH2FnGSeFF8paLP%2Btjoco%2FEZ5bxgpu6n5EcF%2FRmt4MlfdZUPwXzS1lv66e2GtKKspifXh8X%2F39Z46%2BSXWxpggsRjt6F%2BT3EAbdtMoWJMcKjN%2BmFl%2BIfCKkv0y7Dq9KUBbxermmVQz6yDYQAcY37%2F%2BscLtNcFV3U4oBs376RpQYDhWy7IkRVNMUMC7xdvbLETq7HgIFLmuklxjzXRF46ZEYEi0hHeg2DHcOFXjLWGhfgMdHYFZihFNWcVuNMs5DSul981FvS5a9X1t9FCeWIoAPN3Jrg9apWLN3m5AC%2F9OTeJShFMB53RJmx6ouWbFfFfhqFf%2F8SvNCzaGOdjLKxGKFGvTAtpypgdEfceGR1gUmUIU56fc%2Fu%2FaVuWPnX1CjzinNNoST9Ys20EOjE2VqlG2B4Q8IAQQbx%2FzpCv3rAcPrYaG6tiJaEbgn%2B9a4VnRUparXZPkl%2FEt3y%2FMCknEnCMr4Ka%2FRgzpMCTAPR4VGq2q06ZbWwlwGK%2FfrwWjpNWO4hg4pcybIhLJHmepo0cG5Slf3zqbWwWC8EDDA7TwZN7HoCuj2ua%2F4duH1aYXBFBIwA13gTtNcZeDw43d3nLsuaogjTkRL%2BbsAUlus4i8K%2F4LvoUTQZpnMJu%2BwskGOqUBxkAIVs%2BSXs0a1Zaa18Ykeyo%2B8JaNTiAvqykEqmFNZdH1v9%2FyMwCVM7j4hqD64PRyIOyIpEYllV3%2F7k1TkIIFtNxNzmB5XuUvLTMd4MaNFa0JXHeJ3GBl%2BG8kl6c85WL%2F1ex%2Fu02zbRs8pdycyX791ZbNUZczWnnO8WjOa%2Fmd5nyvttCCD93cBGn%2BT21CfRjQFXO90OuiGATluETFMVaXzOv3n3lS&X-Amz-Signature=b00a19e61640da0130e13c4702131eb555b9d6f295fec2b19f0584b050c42352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

