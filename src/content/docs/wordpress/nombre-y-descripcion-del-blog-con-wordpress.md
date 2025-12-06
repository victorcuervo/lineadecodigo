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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL5DUXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXPpfynQj88nYotNPEEqCfzjO0tT2DfedT3t%2B5%2BL2ZWwIhANsMG5lx46D8ljEqfmy0I%2FI1tg2%2BzviIzd4Y1iQIbUv8Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyx%2BVy%2F73jBjmvtXiEq3AM%2FdgMk0rUikTTURdpGUN4B3riYC%2BObaTHWD%2FYZqjTBE6xBAO0nYP9sLMDtL4VHLi51%2Fb7RYGMtSkFJY4mwX2ronUHeNPCWRe2mJ%2BdPAUkiPw9ibz%2B9OHGM8F53AJNbXoz33e%2FyZ6GyjDD1zGRwvJnyf391YpcovwXjfoyJ8jV1dCqeUPNHYl26mwFWymsZRyPt%2BaIG0ZJdK9aqBAGxA5NO0FvZeKMAeNOtQgxvCcRnjFNLwxzRFAE0C9uFJgaMPdjI3tC0SDXTpESzPLlL%2BZ3z8EW01HfwOYnzKWdAOO61drtR1iMZRQCZgHlIRJZffRym%2FT5HfGZ8d2bFrQuD5SbCJJx3rAek2myVjgA0AvILKd027F%2F2YIUSH%2BKdEtaVXhGTjxfSrMa3mTDeMI8k4l5zIJja%2BEQU%2BJgUGAATyFnJzVMX0MQ9TBxzObrl7hO5DRNSy9MTn%2Fdre3uCFS3ItcnQ3r%2F55wRifvS4T2Ke6AYnzK9WDPH8jrQ2%2BnNrkLxZLA9%2Fzf1cYcBZfiaczTIpsC6ip2U9IUM4UgMYOCNW1hB12W9G7lB3ZfwYNbCtRHyZSWEFILh%2BQGxUWBbehui1%2BJSfKXOOAXM6H6xREfrhKZPVOtqjbwWghUCD5obe4DDMw87JBjqkAaxSmZiznICqz7kyveK80mH06wMlA%2Bgdh1hcSjOST7MuW7xQhyKE%2FdCIgtk4YyilHPTmkuryKgkg%2BQ%2FlcnMYnP%2BK9wdp6YlHL802EDpMPc1tmbsiTwK%2BHuF9rLORZoDcN7uQMul9cpo8Ei59UU9OM5B3KE5k4uW1twZ1K%2FpjKC%2BCup5TW4MuUmiZYUiqE2WM7DMRLlmAqz3RBHGOoiNF4%2FQX4gxP&X-Amz-Signature=3d1dd48c1bb414d956bfec95b0ffa26a4b7142039d72dcba2e5b8ee3130b56da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

