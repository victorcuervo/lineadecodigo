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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOM6N4C2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt30CzYblpnKGSwt8J%2BBIoHu35WUFX4bZYeCL4%2B81PiwIgTfICl0oIyH7j1LZ4XjV2OkCvoExy4ASVMENdWKx87zcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNAxXwmzI9%2FrvMvg5yrcA%2FIXWw7M8cvE7cWmzeXgTrUgZTUixmpmJM8T%2FRCIfiDJYiS6v5wdJjvpO5jeJ%2ByRJE%2F8NQGK04YcnVuqnYeJQKaNUzWhB0JWBVZsEkOLsXkQdDgIx27VBqIXCTdpS7Fpjs1emvFDsneywc5NgMzE5T%2F2c1bKRwI%2Bn2O%2Bl3Q0fGIYfNrAtzKUvLF0gbKzhsBQpYJAHmvVrXlc%2BQiDPJU0X4cXVETsxDXaQg1TbGkqzKn3%2FXncG7nyw7kj5xjLbkPFWOWGPFgsT3WYZZbC6AaLyxi8uvG%2BnoOp8hDedWe643Rno6%2FOxgoLHTqSNMN5tWJoYY1i4hm%2BSZ1gIha%2FAyAJlrOebfuXDE5kcOAzCyoS%2FCOXXfrVNz8tCZDSiW%2F87QK9by%2FHgKC0Vq9%2FcCH%2FVuZms%2FZ%2BISDjbbbsOsiRrjkKPY%2FKX%2BMh%2Bgp6%2FEXrW2Ug2UqHnS%2BVAAY8Ge1lnG4%2FQzemvSXwB7L0g3Ug%2BLB0L94F8hbZlWbJdVmDBleV67JD7DSuh%2FlT596GvLfbz%2B15kkNraquXdzdx52Kg5b0gYGqnk2qPMYtIdw0Kk%2Fa163cDDRBf0V5b4ljjsIlKaU4S5tJtel7xmaZgvx75FvLLfQOwGvuE2OHzeX8NQfgBOjDEMLvty8kGOqUBWAV0R%2FwWCp2c2L2CN4sTPQczJ%2FsUms5brjVmGsktNVqqJ730Q7hhfYsS2mOjt28xI2PMKKPMkjPJnGDBoOO4q%2BzKEYGMc0TVgcTKhpc5jqmssuDleLYMxqDgbXg3OAJMfMqritR4u%2FzJ%2BaZ%2FiJLnf1hZHl9uVIC9F2jZ7M4mQyEjdKvA6PEIhlUccPKyOrBaLEC9e06vS5lURiW2im7u5YUp8%2BUy&X-Amz-Signature=5e2a591c6d552dbd42cc178f1a1d297ff406979babb3e3d2213c291bd2ba1532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

