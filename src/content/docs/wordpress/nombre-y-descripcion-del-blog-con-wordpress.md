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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI27CAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj65fWY4Mm59stQD38MEdCVj0I%2B3Ks5gNCAeZ2PhBEwIgLogXxJIEUUuvCfS5RsjpmiB%2B%2FkL87f7g6aM7%2FKaRTLYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWQk4Zx4cCuUYyWsCrcAxV9%2FuDtAFHuI1soQ%2FC%2BB5yTr0ncyeesOut2J7Ewmvxc1NCRqmve6tIT3HyyJ8cbuDV4Ck8CTmAP6ehampjmOJIwhVYwuEEYnBAijemX9kE8hp%2B11g68qIerVwnPSHM6nvVK1nh6YGVwdCGmM6ey19W43659FNy1yP12M0mXpgm9gQn4A4Y5OUaTAf1NeWqqWOQBOVRX8LJN0%2FFENZmALbFNftkCRlYJpZPYPAs%2BMGulpyLu5BBvcBhuly%2F9R2lwS7B7Dv3xafZhJqwz8G5c2zTrOghusS7BjK5izN4oRA8vYkOXNZPxsLKpCDE4wyegs2AQoxQT%2BQ%2Bb0HnIVewFbsR%2FGnUhVDdKnWvhpKOXGadngksf9wD9VuaYWr92OzZH5ColxMOeTJ6WK42zhU0sqS5qEN3dC2qBH%2BZEDsnhOXH0SD1fUbAlWS8eD4mEY00%2Fg3ZBYy4WEDflQLUeAm8%2BL1NwO%2Fv07h2%2F4oD22%2BI%2BiVKdMYPjAWYZMXsrDPGekCrlSx2B9Fj7QTSafSJpub5YBNheerySS8owifrDPUN1cEls%2BhW%2F1Ug08dvK4PcLVR9s1DlQogsKKHLhxFp%2BFaM%2FlrHpAssDTjo3CdDV5gQqGG4erUz9BKK2y1E4YeUKMKWm0MkGOqUBXZHj6jfo7aB7GFbdFKvjwdB%2FC6pVCAu4mvluim91%2BAlCea81lqrffRBYFeAsKQQI5kh3rfI1xs5tfIgS2xYiLq6GkJsLEPz%2FRRxYsPRoz%2BfjL1l%2BO3nd1gJ5%2FWRaIikXHPNQ3HsdocDqL8p%2FzAWOjhSnLHsM33CwKr4mCyttmDUdJpEJ8qvGN6OHtpirIYnNHNozsgiKzjoTMksaZmjsVadcR8XE&X-Amz-Signature=b16dbf72346fe20c1e4ae07604d8356c58cde09b9ecdfb20c56b25fa16c88f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

