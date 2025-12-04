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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YM42SCC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH9oSSCx3QEpxhWSnHmL%2BwC2wl7TyWTGLqhQ5NDtO8bDAiABp%2F49emxT%2BOgq1yqSoR4w5hVASrBTX7o6jmYqxhlGhSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM3nPIWfbsveV4YDE3KtwDKruFnxEN5kncc50v9IsW%2BhcKIwVOe0IAETSlSzLJmqP%2FVt1iAraCqxhU7Lfewugas1BjQyRkGtkME0vepMZU1hmQiuNnW03lkkjbPFkWE7PAcmj52gc22JFJ1rlK7rTFJbaJ8lnozTOAyH0mA0s1hSW5Cgwf3tnMAgkTx6E4Gr55IHPizx0DAVo6pDw%2BLbnPqHu2vJNNlZEJKMPRQ5Ymwb7Vb1otq8AwaIO6zMPvlhBxr84xdC3F2yvgoaTlO0bZ5z7LmNY4gzadOpqkbDPPJziz2ZrqY%2FUC3V%2FWH6UrNKIdr1EajLb7isuO7Au%2B1BSykk2KBs3jbgAihdlYaBnRZbKdP2%2B1Yvj%2B2zhqOVOs0O506i6%2Fnjo5xIxLnGdU5gTnnU%2BMdWOGKDKPmofNpi%2BMi7REMtQyxw9cnZzUn46mdFkOLtUE7t%2FGUKuimfvWHtoP92QO7jYv7gpW6Pnz9whafvX8RhkFkmE1SJAS6lbv7egd5crTChNxVhp0Vap%2BVDnyRgmzQXWIAy6%2B1k0NP%2BF%2BIUS1z0FqCEtQmjsL7J9T4E7v16HADipIfZuW2JCUNOre6sXlKg9JwcVIktR0IHqZrM1ugDXNFPd7kUR0bWsQFcWkWkPVYeNZFLdfD%2BowoqLGyQY6pgFLhn2umIE2bp52yA8ChLBReL9%2FyGQDR%2B2wBbj1caSGexSzQKtPTmDew5CooJaDZTaXxV7Y6ra4VsE%2FLXKXm%2FsUI%2Fj4fghHIHxpRSWy6X%2B1vYm6QIHQ3eS4b6giyUPRpsX7nVOmC%2FL6GjHH0mqKsNaSvcEzNNZEjAdQGKWuxh5ISZzXm8gzFApuncoBYELcz34Thx4gdjkdlhiENoy2NF9713fAAVN6&X-Amz-Signature=a5aab13b74c9e053f4b86058469ba132aa80b51e8291ed8cc05e119eaa49b8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

