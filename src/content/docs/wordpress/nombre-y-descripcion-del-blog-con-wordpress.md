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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JN5XSP5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBt2MUCUHYn6clxspp%2BXJYbe%2BxsmXAteHfpf5GVv0%2BMZAiEAkozDajkweyv15Uh7dqxmiiXwlOArJXMg5B0y062vorsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDM5iEo0K6rB2VMxJvircA9cmof6cJ0A5xN7ElG8vwrNAw1NI28mHS4%2BJsD0txV0KiHg25Re3FrRKNzcEvQJEEazjyKp7WjrYqA2ABLNiNKsKbluvvAHh%2BMDc2mvky8qiGtFqo3j0wYJcc7HESIC49iKuJK1Mh88LNVCZMdvtTNLtu%2BGW4kXMYTgkMSwDokUjIT9c%2Fu28IxxrSqyfingii5UHzkG%2BbUPPIdeiBXEXVDjYoCd%2FVbT9ZfB4CRzSMk3%2FAanQWYzDLJaIov7J3MtxksggFet3FjDSGN8hFH7I9JDl6VOdTdoXdd2J69SoyB3hJqE%2BRg%2FYwcwyuxtLBdf2WOZsFhmGW67E7ZRGZimXkz1cBL7qzOghRu61Q35R6EFRqMetZVrDDkjEAJShzah%2F9RauRAxaeIkkIPXWud1UhmJ1PiWSzgYY%2BHT770q5DsmWHrz%2B1sIyvWZXMjFX%2FH9mSQAbclSs4TS8jqqGoGzxD%2F9C5wgPOUGiYtRcjpYesS5lsEElFEHrNJn7Jm%2BEr5PpSUWWhRRs6RaZ%2F4wt5STAW8%2Bms5%2BCn7KC%2BvdteK5y0vCxAuTUvkCyO0OvhnU4nIOp2QE7CBR2Jx7eduXl3jaQqxNj4XV8jLT5AtOBAaXjNnFGF%2Fv2piN%2BryoRaAN0MNSDxskGOqUB9pAyDjh78Hhhvfgl8hlWRs4YRoHd752uId1Us4uwaNgwyEL2%2FQzT03leN%2FpEt4Dk9AKWqoJbrPn%2F1t9ZYqlVoOMTwzNaVEWlG3UjdDBJOHcvUrqQd8Z5MPNWvTYCZOfH9wZKvpRY7u0nFH76R9aQKP8aYmDhw0Cc0E%2FKqbNSx%2FPtc9cH1anOcdxNKjKcTm%2BA8ojWRYOGbmUECzlp0R%2FdHTiBTpFe&X-Amz-Signature=56dbd110253f83174fe7fc9defa26830fcfbb9b3a44176c95d68d231406d1bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

