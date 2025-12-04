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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLIWCVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAvzV%2BvX5%2BofdSq%2BNvoe4SYaokvm3YZoZfG9MhAPs1mRAiEA%2BQvfJOculSdJLWT0JY7Eodo4Y9RONYteslnR%2BVK9Vlkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFPg4G89X%2FR9V7qwpCrcA5LO3X7sDmIurBU3DwzNd9Pl5y9Yd4N2LowaJmv0VTN7A%2FEXDQPU2Q1jrcgAm7riEqbyRVtJ1jDCjg1AialwC%2FrUKTq0XH0ORGGDHA1RGwe0WzJ73V9qdVao9CPgIv1Hp4kL8KOD0FWksaFXL1s2LmRE8%2Bg3PAtdghJFFyVI1P3VJ0ox%2FMyzti3UpdJPMvbIw1dwodobIIqw4A3xb1krGbHmL47A%2FEla1x59agIwnEMeutc4IB5CHtF8JB6alWfsOIQX3kfW%2BLMARV4mPpQuBtUiXr8FI2BR%2BcndoRHITcXKR9MBdSzCCQmuelhLewFYwBGW4uYBt7fNyCTcm0Vi2uioeTj7l3Q4B2KoiNlaVhYXgq15j7EzJRSan29VJDHr6IX0PFOqY0IsG0ADad3QpBU6oYKOlZNr5Pt9orajhSqBlJtpDA3TSigbFxp6s0YAC%2Bt9i6SvD%2FwfCR7BmvlWqM3ZrmB6tcrVZsHRkBWEpEDJ%2FgPHUXsEBZpfL%2FiZ%2B7YJ0Tc4htohr1BhDTfhyW7yqhfBe35hbyVoByZvx0hNuLcnoRuvHKYRKgPh04OBS9IIPGzm5i4GPU6oYR78msFDuxCoBXKmjkHDOEUJpj%2Byiwaa%2Fddm3x%2BfSngITHCMMIr1w8kGOqUB2PtgKgwDNOHTmgtlZsNveBKY0%2BNELVFxHgM1UckpdZhOFEu5LOtpT%2BQWsYV5UbxX5mEIK0ycQtvFYsNou%2BuxsQPbkiE1UWq1qGV%2BzE3eVyvcjuXaaPoKZwFvt%2BedChftb%2F38Eli4fzGurCTJymIvUbTf%2FK0sT58dO%2Fuy7BL07uS82ME0BIYRjYgX1DZH20O0Ie1rTkkK7qP4%2BIBAXpDGY4qa4OXW&X-Amz-Signature=2dbead33aa64608acda44131e80b0cd116656002d8d676b4db2a7be250418cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

