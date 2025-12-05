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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQYP4GS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL3YoFeNO7c8m3l0I0RYtwWNQNXV0%2BV7Ph%2F9gzCSB8zAiEA4WuLz8%2Frk%2BEL85QIwZIbOz%2FZyku%2FUWneuJRWSBb7R%2B0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAVh3N0RwB36dIfa3CrcA63W0h4C60E22UEwZpvZ2%2FRMV8h0HmMRFOTUeEF5NuAMTtjTybaZRJm2gQ%2B40B5%2BtQyyoQmDf7TBZayqIzbuebxBGTh8OKiqzuOTn2B7iJrHlxNTvp2KRhirpPuxZsu%2FyXrsPi7hOcUqbDgjMZNH6w9KFqS3KqoJwgLxq2fYd8%2B08cQKaMsMluHqBDV%2BQvlHZtcI78grDE%2Bc86IXxRt%2BA02Xp5u%2BO%2BAh%2FmrIL0n2FXvIuFLujvTrfjeG88vBHGK2j%2FMxbA%2BrynVTo2V8OcMmzLbykz50yOBXWnDhe3FzHSn7dGaWZjUD8Bc9sxW5ITDXYJqZGj9oxw5Ad14RtROH62k%2FSLmrnUWTQBtfA4%2BVlMeEUZyqhBWVVbQd%2Bwhm4o8UjV2YgLmtfX730xwbglZoU0q%2BhOvABwmRmZu8HDt0qua8JfNoW1HpmbYdBg7WBAgTQg4iHqCm%2Fjeh3gyCIrYRdsqzLOs6jdQRDglegnjaINyk%2B1oxBDWma1SLD%2Bkc%2FPa62jE7kwSG2iWhHfTihskVv7bV%2BEuUHRKO72ybIxDYKglD10rNhr5NkRbqwMchVRyC4FiBjNJUgYFCiz0H0n1hkfBLhUPMVk3icW4XEDHT2%2BTYbfNTL2WmowFOmlisMKvzy8kGOqUBcFCyaL%2Bly39qKZkhbnoBZZtGaO9yiXC62kfWMC2kxU5f25vEkP9IVO%2BPVQdAsvgQamxH7S8CvlR8%2FVaInhy8yxCU1tZSIN0kIfzenSIPfXZxYfljswC%2BVHWK3pplMypwvQywHv5GbzlMhS1r2FwCtMO7VKRp%2FkrShyVof7Z5fl2UvzzbIDyKtFa5sk1%2FWAsVMHzlNp3rL3hX4DGz1DJZr2h5r3Np&X-Amz-Signature=628e6b96c378c7cd80f81461ca4bde77b5884f04d21383b3da117ffbd555745e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

