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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOONDWXU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC6B8tVM5O7uzmBJAt40An9UGcuLvTwH6viW1LUusAqOgIgOu2rOM1YzUSMq%2BdWHgNcOFqYwk8HtzvcGDTZQ1xGZBYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLUv%2BJORy7tHulNlPCrcA32ji48Z5MQXlayDuJnGAidv6ZzJmpMafr%2BPu5XGl3QVBLqWLLjZRu%2FT%2F1%2FeWh3Qpd52gfGzsAHYnubj2nBc85RnVcyBAG2dw06mLUNFwKVoCi2mMGR4tnyNK9YVwU15WP3N67QTkaXI4fBFF0CuT15DVrAckUyoUW6lHbFhcz1kkyYC4PjIUn85q3xMzMDqune2%2B5CGB18m3A1nAWiLQoS5%2FA%2BBaMyN3QpL2YZls6bzO8jdE591eOEHDQ8ghprjaGB9sfNCUFlol5U1hOqXe2JYwdSwEYt5THGKw2M5UzVgRqbjCMZlqchvWQ8762UaLYFsUX2Ol%2BEQTgNayX9kcHUq8QFDqq7xK3JoIXaHYZD8r1MwhWoiXgWl4xnUzCvHTw9BMbEju5v3umwnOcyY%2BiIZpGe13jWnUdqJNOsGMavE5E9o4M1pAus%2BtzxU6Jd9BNMZwfnmkpnS6SO%2B2EKnv5k%2BCJJs39Kvy4FT4lj6D%2BUELRhC0NEAClId4PJYbzixM2B%2BYGgHkloKVAVtyZZDvaPY2gwvWDscfS6Wj9bqsuA79ihJiiFfUkLpfn02I1ekBFQoqZHZHr6w8iHdTvBAQTT7OPLH%2Fou5N06z6vMIRxoNEpdtzzrb8JMDVdhHMPODxskGOqUB4HYiBuKib84GlQyjQsYCouQIGjqOUUwYUxaOxvBNIzEZ0VI9lUSy80S4iRG7pjx1mps9Sz4oOGJXkvbmRQOdKI%2F%2FV1q7Hl0frmHw50%2B0GHImp1Lc7Fg4UpAOngQdagy8Xk63hGBuKeYZcvWpfImi8b0Ua1zpfj3Zxe%2FBGtkbL7QvAAaZn%2FMczPJmvUrtrQgF8wX1WbBD8jW6mH56EpJTcO7V4VDW&X-Amz-Signature=3054efc82e1625989e88e3adcf3e05f0d81bf3d37c65b30c834460e698d1faf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

