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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOGCEOA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEXhvDQqnbcn04QMOswOhZ%2BoQ59OUL7QpmNMoOesdrRuAiBWwObm%2BGgw6AU3Vu3diqYv2zy%2FYyLcBfHTZaazFOfzJir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMoQ6HHgUsoPRltvmsKtwDzYi9vfPfmByvS8f2naEjacP1vSE5wmOvQhEEB3pfkXlSrKI4sURd4UfHkVp8aKoOdJQ2VF1MgUtKQHUJz%2BDxNuerUZ3cDbjXNNol8p8FkcOq0TKKPQYbQ3RRwT4FAbmW%2Bx1gSUzMKt%2B62BPvYHi%2FUNH8%2BymRtx6H%2BvEwOMpsP4QXQfrrEiohBsvc92GyO7yr0w6zDumsGvS1Ns8x9ooPxX9rgOxhqZNfQtdqDQCYlO4PPt317mssnpTtVA%2BrN29ifzaCf2z4Jp%2B1uZykMPnqVHJGFPm4M20INPwKU8lf3rbhGS6fsLNCp2MjdOr17sAEx0jN1kWB%2FEiIPAzujTZkXT67kgffP4EXuxZqLE%2FFUeBGy7lgqdjKbxhGPBZwtGq5pEhk%2FrNGjpg%2Bqt2cOt%2FqA5LI0ldXwVeK3%2BsOLxj9iZ1Okcruwh6VpMQb6CS3ltc5yANqnHiJu7xmT5SoWSLhHQhrHfKBpSXv27e1tchCY9KIidUXD%2BIAHrHWTt%2B7dqJWVEHZZ7LnSIkcrk1Kq9BAekEreBGWRqR01%2FedQsyO11KQ%2FAnXbGc5Bs%2BvVxfUciMPZYkGH7c%2Fq7aW46Z4j2wQ7ofc0K60r%2FqcpbSYzc4J%2B5e4zvcJfluvonhhiKQwo8vEyQY6pgHk5WEaOvpp%2FQzEGZ8rCCw5AQyJKevmsi7eJZ9d5PzS8WBlqH5ltpibrXt2kJJMGPzDkQv9QwOMWgOlSIo8Wl9meNbO90TnsUqSzUhL2IFkrULlVqXoo1EUJIQ3EQ34iHfwzig3KTo49fddppGYThneyW82JF70wUz2f%2FCYN6jR5ExA4HkoZ8UrfbQwe%2BK5dhwniVa2djVOvtPSzcpJSaG5W81%2FQ8s3&X-Amz-Signature=1b2d1c80c65e7de489219279c5e2f0307108dcae0bc584fc2f39897c76fc6ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

