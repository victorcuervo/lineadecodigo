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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZ2DSRI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAvwUGgMHDpqWujOcbR6Wc%2FHRAEyktzZ%2FEVfZAosPsvOAiAMgXlXIS8h4DSemhJHFHb94IeCF5wa9tkMX104YXFNNCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMKP1D3TAVyywBd%2F7xKtwDhRcIZ4CNqxKdMUYxJXY5K3b3jZDMYIRL0Lz3rJvobL%2FxvEm%2BAz78Vh5rwbSNlSijvZTmGSQRm12bGA%2FqiPI5aF7FF%2FvvgYzwqgMgTOmqj97y6Q7YHXIjU8UoRwq%2F40WrCYweZlWBaNIRPGiwgFo6cs7QwfZtvOPgk0AuY2rIpBZX8xO6sHkZYZM4%2FZOCAnrlEJ5lkIyU29dFU%2BJywXRFDAs5y7sL1VmzKoEN%2FKdVDKzVfhfkv1SO8CekBCb1cNcemxB0SRNZPztOGdOfGCwrIzCUCNie2j73p0aShUHXscxKaStGa9QeNU%2F7zFdAjYKqYAlogn3su1Mib%2BWcmHvKKS5B5B%2F31Ev473amTpUQt%2BAHCnQufwVy51cg6n1j2NC9fiZ0IUjprmyvpNr6T5b8AptDzVQIyKhTK3THLhKTBbxUUYpyG4S5cFCitBzeQiv3OjWg14duGSFS0di9%2BeLMKL97YGy6JHQm4GVr5lDrMQGpDIE%2F%2F2TElTU1O7ftAO%2FwZihRWG%2BI2PeYyz8cEFAziVveh8W%2FjO5vt4MSc2V4D5uQCSp5BvNL%2BXXpr2Y%2BbilzWoA8OgLVJpK%2BBsTzdQ3zv%2BrBhAFHNL0Z%2BciKkpmTyIHn99ZMvFhyrR%2BuNokw4tTDyQY6pgHzSYCC90m6EaqcrdMQh%2BQXoM9ZdjNY97enmt%2Ff6Jc8v9Ihk1CtmnWyEkQmkqgILAONF%2FSQ2cm2y%2BlTpoLn7txTRkzlxEZkiMjgS8By7ygck2jWvhFzXJtQSrVbkOVYhK0eainUIbtpuylIhYuAzJU2rrupNSK%2BHhCgH4ugemwFOGTnpPKLYLcq4IFLVgKpaaCkSE%2Fk7YTcdUFxqQEL32phHTy5bdQk&X-Amz-Signature=1f81c49a23e45f524444e01c068674ffe8ab14392ee0f4a4757fded36467eb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

