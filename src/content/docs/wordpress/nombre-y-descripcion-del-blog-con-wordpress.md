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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJLCNOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu3jDiRwp2k%2FRv60AT8c26od1YA3%2FDxokbT6%2BFzQd1xAiA1TKnk5sOf0Id3napQgyK3I%2FlmD816NLcKO87Z%2FZ0qcyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMEpqHsltBwzU%2BQnGEKtwD%2FVROmIr%2B9gBb04vhfyrvFvT9dHDitdNQzZFoWeiC84kyNmo5hxo%2BWo4BHeoA%2FSAjxpSUCDVQCndNv%2Bm4jzWfqlE2wJ2iDpCqps4xI%2FKxjxrxfYNXXex5dJs7q9FihBGMDKWTBn88Fl15cpYH9m%2F2BGKi136Vt6PY83X7QF%2FJrC0czkxEDdLfinZd1WC5fLLnIHBtjlvwExHpLcLqo1eNSVJxVCvYYexhl97QV0DALLl%2BBgCWetLmNj3QnGkT4W6Wez1tiucyZScISZu7%2Fmhr89Ax2C48C8JZdKGh9BNjeMUa2QcNXUoz%2FsZMZrEKpvycoPmQJNl0gdLTG7ondj26PDwShib4hDC4%2BBp5r9UacKXfKmX2nlLXqkKgVBvAduBetIOIw5eqOUJ%2FyRvqI8nQfFYUG0of%2BYsT1qUdIs4L59c40JpfA79WdWLuyFAk4iy37MHwx8xzbeDytgGk8qiu4t1QcyU5UlbUvRC9CxrmsSpSQIxckxAFnr%2BR4WciRX%2BozjhrSiisSv%2F5%2BNWVm1bwP2fE0OjDesGj8ri4KAmVYd%2B7Mva5TmDJ%2FF6OowxtFFg4MYRG%2FhxquOcqkSMb5xOk9Epr3TNQzP2Hxs33BFXA6oQKZrKnC2vcPVZO6KQw1LLJyQY6pgHa9MDkkDrwWDH1XxsEMu6Fs3ONEK0sEaMCygG%2FWZ74d9Sp%2B6e%2BfOoUrpbTRNaQV%2BYyFllxTP%2By%2BoZvxG5dBJa4zbsZeiVMJ%2FIJq6H%2BXwXtpG2DfR0SrIXOk3MeSOFMfwJGLniLjMwzSL9QFILgy%2F9TgmV0c8%2FQ6s6Ca%2Fl0uUJtYdxNweO4bxQ97E9lvbtPrJM%2F8cp%2BnKD7v%2Bd916qo7fJRlCvC%2FJiD&X-Amz-Signature=d5994a272bede8db7cc29398445e041ce217dee76e611938c1be8d55d28415e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

