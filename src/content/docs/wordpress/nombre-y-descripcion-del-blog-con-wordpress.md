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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653C3Z6O3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFmltNs42MohCvo9QC%2BiLt%2B9z1Obrum6xM6qnrC3MrLrAiEAuls%2BoClE0ixjhUwicLIsp%2FzPgGNzeaj5i0hUtnCpePsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA4YfCzqYi52bh0zJyrcA%2FFdH604eM2dhpWjOGaONdM9ZqD1qaJ5XimQ%2Bum5vyItCw67hC%2FJO%2F6Pxcf072A3QIK%2FmnQki4b5pyeLF4wsqNCLiLIWSqV5%2BMfzNlJk6NSNLvrm1t5JCJY%2Bq%2BTNBOUiZy13jvV5xmp1tGuZDvLgjY8riwn4pvwNIqrTlZ7a%2BCc8C20ZvzAwUc2tXrhXyQkFjuLfzWq%2F%2Bb8LRWfRl9Mt5TEA5mFLYeFmijlkrShVibCDtYXn%2BhbvhZsZYLMvl2HtZg2pthbwOuX8l5AnJce5V742p5%2F%2FMh8YRyi34KD%2FaqgewjPVmdtF5bGRMCCUjmwojyrXOOViIoR74y2Ad67r30AkwAdAdVfHH2OIIy0Fgyj79oBRgq4AP1%2B2d0gF6O1C0IwUZ%2FqLiUA%2B95dJfMkZ0d5y%2FXj4zdwq8v4PhfpsTw9BNK7RX3z%2B%2BzXtBgyz%2F5lJ0mI2sXHVJ7%2B%2FNlU8fulmoYwYFD0Mk3QGYTZsoxCgy7OFGspdd5MolxjAnhgdRSdokY5N9MV09cLGz9WcYICG99SIFIu4r1AuqmCMOEEMuLXzDcgzeE%2FGx5xFWSAAMHRAMYUGLwHMNPyu3kwGofYq0Abp7Ik8xe0R8gx5Jk%2BZUaBFZ9tOTId8TZqcGzMrMNrzw8kGOqUB2GcKFB%2BlTiUsoAk9S4E0VzsB82EsCvOiVjnJk5d39MgrYe7Ef0shMx4TCEMdQegfNfFjnTp%2FAp%2FoSliEHi5Ui%2Bt5LSe3BmqyBVVpEp2ZzYYVs%2BH8I9E1GFQ0AU5vCrFiSOcpNNWrY1xTkRMdzz0XDHRaOpLchR5G1L3b1KmlytX6LYKfhHfNK4VAATfjSrOU9yaEA9BRE6Ha%2FI2dfYuyJTpnvhjB&X-Amz-Signature=693492873b7c65a9e379c184cbfe78e883caa0ae78e18abbafc12020b9dd5fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

