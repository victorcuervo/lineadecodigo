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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOUKK5P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC7%2BjeBuyMccKcrEomCFvzNU6XTp6QFlrNN6fOtG55TBwIgILZYJ1zs9O8xtnWzvSIgkMRpBQF%2FlfdpgG28op46kvAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDArllBdvMdSq8dkoPircA2Z5cldHYgD1%2FRsC5ShYNKB0eVUOkyysQKYSbi9G%2FZBb2pBFyiM7aBH6FdbacZpWiYkyJHBpeW8IXCyW6mr6kfkUSW825RTL9%2FtlBIIkyuGQKfR%2Bs%2FOgXhAwkGlQw7haLCzF4MbLRrNi0s7G6Nej6bjcrg%2B8aZPtKGxkHEhDC%2BALAUeWJ7AFHglJYeawRJS6mbKt5p2oDcs3HPAkkb29B9I3pFxAPamPfm6m7r9J%2BpsYsoWK28LRR%2BEAspiwraUrSTCwDIGm2ShNBxWjOIbSVap0xBTyirao9f2o3BnF4zy0aNUN96KND%2FwH8Yje4pa82ocHsmAqaWMZW26UzpL8x%2Bs%2B5uK1065tWW3k6mYcOwKoAX%2FtB8jAGX7yo5Mh5HVvOSh7FHwelkoXvSxX7%2Fy%2BbTJT8Dvj75Rm9QKEcwgA%2BZ1uTSx1RN21HWKmnTQXi7KpvxT50HpdcpOAO2q31jPoO2HUOQiJLlppx7JquMZk2lgSsaeCedM5gTFcvjkkhXcf2lZNU4LbIlKnOEP2%2BSpVd9%2BMNeRExgH3OWtxtmFIcUNoVsqj5jJkS5HHmquQ168iIeOJJbgg%2BAgTh17yih8oNMa%2BvDYA7TnvMOfOXUkPQO6Xj6j8rY6mNF%2Bd%2BL%2FZMIi0w8kGOqUBtGpFeflyl6k0IB2U293tjgRKcZa3JacbZHFBdoHBKgJMArz9laNy42G%2B0AWDfaTW54O7DE3Yl8mS4S%2FuWbNVjmcKe7UV4%2Bi6eqta6aFPWEeSrZSzo6W0LiTEAMg0l1Eux9r1N1xWVvoMlRtYGa4vhArdAfrBHthHyoOJn6rACr51S%2FpjqEwMOMGHMW%2BLsg%2FCF%2FNiyTnLGPU6OrO90keLTha6Wdrj&X-Amz-Signature=a182766ac6aa298abe466eda6b83e7b8f11a54ee78dd0444f6d378f670c16a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

