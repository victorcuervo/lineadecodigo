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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIDQZ6PP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5rNNA6Z5%2FdfIU%2BMDewgqsmM5Uqlsi40G4vAwEUHV9dAiAhrUSW%2BGwR%2FkkaXb4OLwcuRXER43PMykWZdt3EmEfRKSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMU%2BQPIN3Fiox8a35pKtwD0BGj4VCwpF4hCq%2FQBEc1AQMzdcaAUqOXwquGVMKpHCzLM%2FPeUBYVK66KctWYXxAh8AAkUYp%2BHCRjFRE661EuB4IGhCu9ClQUC2gdZozR6tUlbFytX61I0JzyKY2ahhQFF7dIfNhJ6fQm2aJXdx7kAoQqBs8Wi1PCbIwNW1Yir4Gdi0aRncCM1Q12Up2xG6sx7uWvZ4wksMADTJ0NsG0wkLDXMKINYLQOp7vekEA%2Fe%2FgDDNgow6QW6bSYgK2vqLo9V8yxSyMpgvpH80wcqCP%2BjXTpP%2BL628aCwYgLQ7Loij9HIWkNy%2B0uib3x1aToJWfI9%2BIOMx6OYo9HxstGyo4JvUWhRkTYhwtlctLAX6obaBN7eAXjNlF6W92jBaVqvGKIvs66zqHtj%2BaEA0AwiL%2BAo3hFWiIkaGcjrNollpbOye%2FLBLiVyZ1qCsvRvtOSsnqGn%2Fe6n9FpnACyhxqY9Cq%2BXR3TmnD03P2xb1%2F1jXjMAf6s14PObjABVSydteF%2BIzEovbW5dx2FlNtT1VadUlkidOy6GSKwD%2B4KBE6NPHKgONnxjgMEQmsB0UsHwAkMEk4kG98sOMMcfzqRtf3TkYDOqYCP0SGs8rcmV2MD4qYZxYQm7kjrcx0IRNHrDskwg8vEyQY6pgGbzl0vWdaeaWRCnee1aJu2myiLM4AYaZzueCb%2B58ERXj98QZnwn7hI6yERW16DzarL35jmOzCWFQdpI%2BspIOU72ihn1669BWjtgIC0twC4XPLXNDIEkRvpdXHgYBVrMxrY08EFojGh0257hVObDGDuPYfu6mX8HCtunELxSM%2F9RZL5blHsVKJPRg43g2vJ4Eef1qaF5CcIrLWksBnl0v8GhG%2Fk6aao&X-Amz-Signature=1ed5a2ac711af67bc16f1f3ce66f377c6fad34095480100674c1be33224000e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

