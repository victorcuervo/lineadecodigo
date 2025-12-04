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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3LC6UU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICC14rndfwEFSjrOPQ0RpKc%2FlgBGbkWaG8sSeUGNi4sQAiAaTwe78klSzkc1xhZo9kZDjjTM3H6dt4ZrcT0%2F1JyZOir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMTRMlkbTj6Swb9renKtwD3I%2FTs9wkxQiSj0sCVjLyFan0toNsV6PmApdY8nOY7ks9TOWpTAA3Ujmuwgr0oHjBEhwoo020hR%2B0J%2FviRtRJAWQcBcQxJEKhxgD4fLJt98deC37%2FWy05d8w8C2CLZMx6AiL7k7FKFgeB3fRXJTHFNffj37E52czMnCzFokKWTcGHopPzrcd4%2Bjyy2AySgFnKG5EYuF8YgXMqmahuCoIKjIe2dzo52cylEAkGSPzpdkVh8ZjTS4b9rMtv04AQOtp2YEMMF9HikyL%2F7Xjm0DZeon1QohQ5Hm0ar1SOVUo4NEL2LKiH7bnRUQs%2FNROoeO4xZ4Mpdb%2BKWyCHXVk3WXxWVRaMcfEMGNMhG30Dv8lta6PpWr%2BRydX%2BKV7fvvKmWV2%2Fal6tcycg8CkoFGdox1ZQahogDMH6COJ3X8p%2BoF4jQ5lquNncsGCqRYCyRPlb9cRmJ5GWmtYoD%2FlCUn%2BfhV9FCf0lzQqYhWlUoh712PWEmuaAYMT6SB6aAapv7l4QYuo4y%2BkYWWZYtlcGXrUHLGKm4LBokUwQQRSiJ9paU8aNCfyUglCuf%2FRJBnKsBMxXFkjO%2FcIuuUhVA0Fta7NwE5sb9zX2gM6opCStkvc84u4HHSV5tl2VPq5HBKk1Ojgw64PGyQY6pgH3BlmYKFG1LryXlGiHDoFQHXdKMTZ%2B42sNDXmtEt13ouLH0EIuiSPF0%2FOvuoE7wZsty%2Fc70jTJ%2FP6h3%2B%2B10lvCpkTf%2BP20e8nYgIiUOhX3UfmKIwoQHT%2BoXUSFtpqAkSJjnD9rgoUJ6og3hgKQ%2FOZ%2FjRoXjLjWhC3mSaMpuubKOztv74UBMo0DPxY2bkFuOUxksTwfYS9flZzF7py9UdL0d0G9Yoh9&X-Amz-Signature=3685b86d1505d66c7e3939e6ca86061f30f3d65d1eba6d606a1b8065e5d54728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

