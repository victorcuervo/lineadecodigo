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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOMV4J3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCAio85QS9YU1olhG3SKrkKfzDNTdMRGL1OuNWIwQDiAiB8E1Td0%2Fh0CazSHIz7%2B6kioCWELBJCdEXJmrGu391Bsir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMJpo5sF2uBrZCbZsVKtwDMIdk8sdSiGfttDgmibtdlQTl1ysS8q%2FZmrabO9Q6A%2Bf7XG%2FNTU5fmHvSM7SgePqfaJaVRadTYOt8VHYIwa02KZZeDS2Vcl5NslvJRdeAi7JcJ75mDzl6TZlpj1EaniUjUIcj9CujkVhPFWC1dWecfA5uqmhbkXLu7eDR6JSKFyidCJOd%2BU0BBh7d5ImPyyMsAc%2FYZZcuoNjKBbB%2B%2Fpow7JGynP0%2FzluHiuyDv61FOcYTUXa2KLFyYjPn8Vn%2BmEX0xLOd5U%2FBI3f%2B1%2FZbs4AiuMGP%2B4EuReB9GxTgHZG%2FTTbz0MeoLj%2BaFXbJdn9a3EFE%2BKmcJge6qQPCqdt%2BIwhTtsbkw3%2BSHJaqMMGBkLfS6iEHkjIGVIEpvSYRsQ%2F%2FXzvVhnprlRA6UuEHRKUw2lzNqT6iz6AJr8FY%2Bgy%2B7ttX%2B4Hp1GDgFv1x7Vc5UfXbAKKBKJPqbFcXaNFZW%2BFjGK%2BasL4Ns8eFmRQqZ6FEW%2BFSR3NTTO3OSUT2rrfVbN5IlZXItFrlIbmRgRzG6F1Eri9iNrElmJfCGRiussQa7InisaNP2X7pIAHfcwtngR4ronYEj8ozZXMfIRBgbwdmz3AJakfNZdB8srZdDJixkyQTXFb7cY1G2G9W5XhZ8JEw8ujNyQY6pgHKCPLn8B894MAyHgw9NEys0KCi3hz6dlIo3PaIuEx0HyKYKMvarbP3zGbb1IVcr84UZpZlXiTmgELUWLG8dh0ngiBvCbt0ugZXRGe5CW23Ohaxd%2BnDhhQv5iGhgS9J9Y%2BzmBd7DEXi9yfK%2Bza44lBJxiwitJejMXFvJOobdSW0CmyJTR8xs4xWanKlK1GS1V6922lZ8tG1oE%2FAOeZ4zivSXqPkvToO&X-Amz-Signature=97a28d793ebeea874109a376e469a7d328160c560e1d23ce5ef8abcad68c526b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

