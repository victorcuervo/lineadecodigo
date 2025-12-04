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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6646DN2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCA0n6isGJ0oOBJuYcANjUAs6RFNBBuAwYmGbFcGTke4gIhAPPTCbzj0UPsjvJ9fOHDn4UKbuWdrXCTOIBbFQJSWJhzKv8DCEAQABoMNjM3NDIzMTgzODA1Igwv1LPX1vRO03JBK%2FQq3ANDOTvs2YeykfI3afjvQl3PEzxGdbT56wceQrZNCYZMLYDTu6UzSo3pYcvFVWEJvVXdZtIS56lKz9SZQOxCSwIoA6Hn%2BrR70%2FGuut9dSWejObv7mcmkgaGO0egF8%2F7Yf5dtBhtElm%2Bg6vrDKcGw27eXgW353BSImsjAcQPZwup8IxP8uLFB7Nyp25NoJPGDBgBA4gntsCxPyA%2FAIY0zW4kmqkT9uXY2PPN3olPMjuBmh3ssQhR0ZUJL9903SoGOqnrQ9K%2BgNTZya1dHPYtPk6PTLW4%2Bue2PvbBss%2BZPZqlRiExCYwlvPBQv8rVKFYcsZb%2FCVOg%2FMVj2svtXrTn107vsSHA%2FPHMkt%2BJsX%2BtICYsNo0Fi0D4cbTny8stzYXUf0b%2Fj7j2XR1y63zDqOYMG9karG9AGpT%2FmirLwzX0C7EJXNrteOjU6vXlX79rW89TNBiEigExa0mYv7ddwX0qJVb%2F1aQR6llPcXWeHUAEy7dbyITLTCq7f%2F1iiysBIfurAgx4OsnhIjgMuMyfIhMxDJXpD8TJ6O09YLH019cIAtXOkPnxPpQJKvQs3pw4Lqyv3flm2rwbBTThUS%2FaqtMJVe4SaXYLwDMT%2FyHS8JhjjOLxUpb%2FJVQZAHM3bXeDKcTCJ6cTJBjqkAXQkgt1wna7%2FfkoaZwva%2B0jblrfqH%2BUoV2pZW1vPcmaTU4bo33z8D9EanMruFzuu4PMXxu4U6BjcL5IYzNKzzQ69Gf9B1uw8XzJRJ2fsxke62IuQIVf5vp1fDOqGTTrJdEqBfLXsKnJq%2BclbBelWKmS8SQ9OCrV7F2BRc%2FTEWGAAnHlJDSOPgbGTxKiBZcc3QJcqmvhNrkYGvnAyjyL5V8E8at%2F5&X-Amz-Signature=3eb6df33120fa159ecb3747823eeb5700d4d6d1d08ac9f143093e7c49b081d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

