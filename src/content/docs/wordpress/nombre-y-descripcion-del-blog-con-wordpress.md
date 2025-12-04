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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2EGJNA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAQ0CGYpqVG74RXh2WrhJAMHTfMMslSF%2BpgYRd98z2U1AiEAtcrt6pQfwmXvCeqneThHZh77ALhLymCb6lrauYfACIQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM%2BhIevdZhKrO%2F8OkyrcA9JWNbWE7DgDIFwRNIIfYtxyjXtvHIgdFmJODtuCD3S3Y41rfkTF6OPcg%2F%2FwE2W%2B4PZmPggV0SV6YKwsqMkSpPRWVti%2F31IR7MfhCOOE8m%2FCJqZMArdJXw7GOSYzMLBYQFxOt%2FdR%2FVXKkPGVr64ZWYckXolcQ8jLrX3494XgzaIUzZ3maZ5WqzbDDmhqNa71tKo2cp5xS1%2FeD5TZSC4vY8%2B%2BGI6%2BVcBt7TIYeeqwKeM69hMsUf0%2FSaH51hG2BG%2B33Hu%2BwJynvIhZa56%2BNAA55Oxt2bewjX%2FvQ23c2XgjLtCHlRV3UxybrXEK%2BBfnGBNUN5%2BFXmeJjOxx%2BgWUajyy5lA3aE2%2Br1DDdDyXybHM4I%2Bm7aIqdaJjbdi4slSLPuJ%2BkEDR8J%2B%2BqeAK9yHV%2BXp%2F9AqYIjQ3shBrler9vrt227AA9Sg033brR1B%2FKrkuLqaJfqMn8i5k3ljQc1i0D7lM4hg7dcqlBrkWYqmFLQ1inMvQYAb%2Bd7FmjH2vn3GaRku1h0WFfLmkpOZ0Xmia9SGWgIudQcHyZK2jwrT8ngBOtUdD0GbKHphyeTwqrIQh9Iw8kE1%2BkvSQwrKHDeRp57OI28uZl6oAdfNndOWmvUX%2FcNuJ8t1y2TYu0wViZhAjML2RxMkGOqUBFraPOHNbE3WYaFymUPs4pUhJ8K%2B0J1s5PkBocsnPpqmHY5FXW%2F7OUBQkdKL1eHfatmxdu5PbUaL7QWTbmyaTLSeQTNYswkCWmENIy1fw819WqAKuT90gFbzhBSlnX3mz%2BvGiOYcc00OrMDfipoMoMpuUFbXlgGB854tIbIwoX25rDHPq6kusbaPzASf6%2BGqgacPXEjajak2v5SOTqf2%2FDB9bwc7V&X-Amz-Signature=bf01079b61ffc2ba1bb07399e094b47a86a84a7a9936f6e65b2571aab134b9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

