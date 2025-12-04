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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORP62ZI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHTwFsElC6ZpRveRUKGPv%2Bi4pl2qQe%2BLzGXH%2BuiR26SGAiEA2EofQf0rqVYYu%2FVJg1vDZwZJMH2R22%2BRBA3nX2lmRL8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPITzZ%2Fo88Ex951vDyrcA4p73v%2B1KZ8IXNn0cdz8oS1%2FmEG38DEk9EeaSLcXSdrLKdn88aMNzByDRo6IL4vATT4Wrx1sm8eHZhV5bAEVW%2BBYZWSkHq0jxcwy%2Byola%2B%2FByN7Qh5axyleC8Gs2vW7rpjV7JGGLk9E2fMI%2FgCjmz1gQ4XPbloCgkfeupxLGtEBsrLb2cY5XU9cHrUw9aw%2ByTnUokSKmj6XniGrQtFYrT3Ei%2B8141l1h7eP9tXvjdHfC%2B4J4c5RctdF10YOYNDt4OH%2FZo065uvmq3ZehVgbQVTcJJPDB1gJ24v8Dwkued0v%2BYsQVVpwkFHxwGlE6Ax%2FLIi3cdXbu3xA8Pa7ak%2Fuuas2iEqka119VHTMm7zyg0wfzKlRIvzViapZFplYQq3rlAYqwMxYchELURkaQO3MPKiZffasXr6qV33w7qehCA%2FNomWzgTWU%2Bh8KWAgZlJ%2FQsXwKAQMlqEDUTOfH0wsAS%2BH062Bdky%2FwM1xIOih0xjM3e6K8Ym0x1mfUZVe59vGNGXuLQEcY6xrb3isbCTk%2BKQ54Gx3Vi8SMxa2o7CeiAOpaUbgbNAXTZf0%2BBFswRiTugrlu327b8TtWIVHGVWRXcllgs5upW2W5QG6yJDjuD1kkXzvOPipLsZJjlL5VOMPnUw8kGOqUBpEpqaYPL2f1DWKlz3R9ZcB9TmqlqNd3%2B049%2BP49Lw%2FGoTOCE4Wxcq83G1KpVY1%2Fr0Gqk5q5%2Fw2GZoY3STLYHWG8QW6bjmQDpND8VyUd%2FA2MBRbtjIyvuq8F9o6keZxxOUKh4nFpLlme0Fi5oUTXZGk9Sw6AbvzfBUdHiFrYI3X43NTImdkIerkmkND%2BEHdrEvpgDaYJ7W6LUX79Eze1HsuGaEtKF&X-Amz-Signature=67f35083befd30c25c0100f64ee8ff1b29982a87c75d5102e23f0a7646a8eb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

