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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4UN2WX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUkDL6ZItFJGsJ8q41y%2Fe9FubxCvzpeAogTxNKH2pG0AIhAMWFnhafrefrnAl0ab6eD9DKqK%2FoRfhigWR82T%2FHMoWBKv8DCHoQABoMNjM3NDIzMTgzODA1Igz1yMP%2FKFkWkxqOHHsq3ANb5obVvzNoIOue9LGBj579SbOMa3p3lybfm49%2BpE%2BJQ9hje17YP%2B17Y7jjkjmSgSmlMneTfuC2XcTYk7ubIL0iNGdBG0gHiwaS0x3P1OJsSo10C4pBPv2KzDHL%2FBKu1lLXK2bRovBcP2FwnC2L7JERszcw1R%2Fu%2Bej%2BcqYntZEfxmPbmeVL718l7BVYjkX6ERnT9K1M9IFZteGPHKvDT%2FgXP1TObP%2FA6HlqzHoWHoa%2B3G8cuycfcx%2FECqIlwEqgu%2Fhu23XIqy8J3faM8JI3SGhIspy3Jb%2B1%2BsLoMXkp5nuCjbM%2BOYJpL830ThFWdNNHKaMHca8DlOI54oDQ1L1fKAUmCVE3gvCBkDZSqjYLLHZGdk0iWKT6XKosCcpDb%2BYIQRxaYghi%2F37CsTy7q0vYDGDLOfDN8W1ijryEyf2dZbXwutrytvqAk1XLmwkf3UuyWrwJVfhra9sTPSyEXE6zf4GjbuNmm7IuUoM%2FOhJH%2FlvoAzTmzupRveRTUSaTWuwMZnc7XdeVPqPNeYL0eDErTr3MicSopSHMzuBdiCWCJV3G2eDg5WIaV1T5qPaZ9owjVvnPe%2FsPmQzH4d4JnuXsjc4uF5v7oSTdshnLSN9TQXxdIYCE23fPcbXRRXE6PDDTxtHJBjqkAe8Xxb1E1owMJox5nHqY5N2MGuiuKRFQvCVNNetq6pn2w%2ByaBO9Tcfd0s%2Bwnza2UnJuS7KzdGPnW9JDv31G5%2BOjEK30kM9qox76ncLuv0M1IwylM2Lt5pqjdjWYGPtKTZdL2v3Ei%2FA17H7%2BkVg3dtOuO%2FB5%2BSUHncYqKp9HkFFX0zFVfQ1ky2V7mXTFXcxOyy%2BWTg%2Bns%2F4ouNkBcXru1MFB1Ye%2FD&X-Amz-Signature=d4c6bc24c87c19767fc7e6ff1cc63d66d0b093bdbf1310b22ec8c3c955f0b9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

