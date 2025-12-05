---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
slug: /wordpress/nombre-y-descripcion-del-blog-con-wordpress/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVWINU4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Wfml3YOgUR1pRds3LlkPVUdhgh3Vr6mSGXTugT5oKAIgAXNwz%2BoJ0gYZ16P9GcMNcajn8p9akW3tAMWW5GENCkUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIQ%2FR22Je13rRBpkTCrcA8Nln7Gs%2FAX%2FAVtriQrJS7Rdu7c58avfKcYjJYuRwbQLS3WQzjjwtPgTvoWsHXhimRsskwPLOmQBhvtWILLNTpA0aR5MqnEKtKs62RMSZ5wtpk1wyhD0dXyiGFO47%2Fke2X4afE%2F6%2BLG%2B2xOyp3nyGfjnl%2Fu766NFPBGZ1imhZjnpIkOnZK%2BdY1rPWWU9kGM3zFH0P%2FfNJB4GcM8WeBtAvzFwLHsGD8%2BvHx02UvXxOYM1LVoVGexODzLjy8ILjx5gqU1L6193ECz%2FZXa5kg1MtTtLYv4btFu%2F1V2L4gFsG4Xfnp%2B6aQ9fKNjUULvC5Fe0k2QLsl4xjNqYxEJVVpWIrNiCA50Eo6cHv5v%2BsMGOYCf%2FRaYh9sn8WG%2F7%2B0vXxylH9yFIlrTVsu5OQL3CDr%2FDvIYKCQP8MnVXPq1BedfwFvi9MQbRuJtvU8SOhTAzEzn1pR%2BZiUExfnYzT%2BEGRyPwiPzB9RrcmFJwJ3T6ybpgk2A0VLxB0TwkTiaDpV7mDjWL4Gf0jIB58MTErY8sWLqFHh0sXwCoKZm99tDtjOxE57vUdwd8B5EwJ4jjpEqX4Vs5Tog3arA62E5tu9pB7CV1PerLsWJImf7kd%2FjCG9tkwG8Ohp2h305jeBFjYAl8MIStyckGOqUB0ZkoxHM%2FGtRQQtVz%2BkNMt6WrYIE6habuggO3WMOwZZJuq1IosAwTg6djJdIS5mWuzF6FGWeaCO23O7MFrqEg8fW7c3tnhBboxPvi9CFHRdlmdxgNALxuEKxvXqiRSiU8ReCj0Zyf0ZV5%2B5UBSU6og418ctVp3jVbuWGmOlsw3pyfjiB%2BP2suBdWtmTc8Foe5cjHFvlEWCKdNUE%2BKCZVl19Q3mU6Z&X-Amz-Signature=bdc1ed6e1906283d50b5a99096e737a1060c98bccfe91354bbff024efbeabc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

