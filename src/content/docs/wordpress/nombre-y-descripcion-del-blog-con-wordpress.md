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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KWHQTW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD9i6FatxLke4%2BGpZjEB1FWDicHOug2Y1fz0Two7B%2BPnAIgDocYhlctItfJ6Om6z4BTLVsPp7J6vRbm4wXe9craSKgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJ0cKcmuQ9TPq1UiXyrcAyPs40De7WhaIfLKoiTgB6cthCVW%2FYiq0NOZsPwXL8eZLhNzzT0cZsD0k%2Bq5CJ1LA7z9N%2F%2BLa5LYvAOiatHkbUPqEre3%2FvR%2B06dfaj9oapGvEJch3PdPhXdnQYRvJpycsdfvWTaTn5AKxEdiJZvUURN7%2B0LDULn4DS0gfjlFuLNJDOT4Qf4jPnnjJqzjM1J0a7X3FuYXZv8fLeeHwLCvDgdPlTgXA8CAW7D22hmVyr6ME%2BSUhIF8hUMEzy1YG%2FJ%2FnYANWVJdTpoEkq4oImKbyjflSU%2B08gr4UQW%2BA2UHdK8T9pD%2BbxiT2AfpNoq%2B2%2FsFzdC8TZ8J1W2XBXCF2C8T6n1vWRdqv%2BVVdulO%2B3c03SlarLRoAqNPwYBjPPEVJmS9UhNIBVBYxlYP1b3puGnco9Not6zUsgqemxiDxeQlca4TRthbupGNTsH4V8Nl7tioZJORKy%2F%2FbYTdJAwUckYY31greT7m5dgK8aCu6YO4CgBAs42JTOGmVNGaYwZmc5drt%2Bmj%2FkE2xDX5fO%2B71%2BG1YAk8vE%2BMTTCQ3tR5fMIDsYS9fkpFQhQz4FPabe%2BAkLPQvAUD94AgAh4v8naU5uG%2BNKkHI%2BPbI7tikwhMuRWYrdKVTzAyzpiRVEJ4rjoFMIa0w8kGOqUBbVe06FvqIHI%2FJr0rUbKNesVF1gJN4VhzY4I9xi3g2oOrGYjdl6Bs8nh4s8PYLuRUI3k6836WQRsFFqMKfU1OrStaVUqOvTIGWc1gT9NSsqArvzGlBls8xaoD9M%2BzdjtB6Wn6VTCGSwfw1oG0zxQOxt2toDAFjinnxw1lHU6HbPoFEaYbil8v1W1LAJ6T2n9qY%2BVi59BXn17jhCgsrgn8K3Ee0YlD&X-Amz-Signature=74a90ff6f5914fdbe7c4015f326fb6250ddd4d0894253e04238af78dfa6990f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

