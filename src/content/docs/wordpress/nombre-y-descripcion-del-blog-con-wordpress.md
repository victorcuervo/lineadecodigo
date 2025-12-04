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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW5QN6I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGru7U9ZnDeEFGESYta4KIUWHwXDrK0eaHLhEoPTBSHpAiEA5%2FjYfV0IYBYR8KXSQN%2BX5wBEKWJfiKWb1yGDHwpIvm0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCptU6XiKB36%2BpB34yrcA%2B3%2BgMiIKHwwoQ7JWBv5Non%2FHl7vTs6cQzcyR4cLBb8AU160B5xww7pbWjUPjQ%2BmYpCAS48qbBHTNxIPaXXyT4Wlp6JfjYlJYx28nJg5qRjWJqZKQR1kgsZLID6ktL%2FBKfHN4r2PTWVbw%2BFRBAXDi0z34yqamM8TXdnN3WRr%2B0fG0OyByuUdAPSQXk40S6kTjfVyB3pHxk4bvMvaUZ0c5ibY6LUsByoZ%2BeCcefGtqt7WXNlE82i3Px0Yb9SVE%2BwS%2B6rb8%2FHJp56PBC1zlZ9xKYUoWx6X8Pnkuhkey8GKSUv6nTW2k96TWn7BCvUe%2FPWVWdn9mW0r0SS6X4JPkNgnSD5ZjW6%2F7s62YXYtQUhHqn2eWLJtxq88I7DMqmjaOK33naIkijPOSEXV3jVPAQovVwLN59MN1%2FmRzxGDqFNAUcT0qdZyF%2Bu9vTKTgcc3VzptdM7%2FpUEPHnRSXanUmH8kpc%2FnSajkJcuoyA2VpVnit%2BXb1tc87BEO7yycVFVkK6nwYb%2BhQr4%2BBYukldX0mBPf09i5Jx%2F2Vt6q3P0%2FmDIbAvoRkwCaFMqhNEU1Q%2Bs%2B0cSz1ptDYUFf8eaDL5g2TVjF%2BBNmM4Jxsi6hRtuvGq9MJajQOIzG8pehYQUdnLK0MMjJxMkGOqUBBhJS1cJleyYRt8JLc8r0I5wJRxFenDu6TOzYtxNoloP%2BI2msq67HpwVkI92Ugh3zlShqps3Q%2Bl3xm6mXkaGbMZWdisZ9C8sNidrU9ewB0HCMiEb9GvCYOTPJiyVXcKskmtvcc774vzFwB7NWEF9btwHYJzNf89xRblfsQzl%2FM1k0WarcC3c6H6FLEgJaMrUhySpSbWYCrMQxq1ZJ3wWWJZGLyZO0&X-Amz-Signature=acb7bef8fea58b2f448803c89dd54fb1de002c581ac20b5c5c4c8eea64b509e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

