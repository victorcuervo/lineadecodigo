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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUZYQ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDxarChV%2FiVYR8nxtErwgmiMBxxEoJOcRGkm%2F6Bv4CRPAIhALRx89tntMYmN1QUUTut1mqipY2sGa3iFoA2Li55lBi3Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwVDklOnRr3P4ybFHEq3APL%2BA7rH282jYq%2BuwN6Zk1UX9CZix%2FcDzFoQMuzLkozDwLV3GZSdEBeeJrhqv%2BVpjkK0F%2B5fxgpA379ROtSTUSPAWSUCYoOlbzocQl1fI8kQY2ajFkRO3DTPutsTkQ9pGRUx1m1FLLxgMumbvlN4s%2F5fi8tnGCPl2OLaX46IfjrDrJFsVB0vpYzPZeU0NEJhc6TM2v0cSWvTXYrpzy74vps2RSUqlIR8YEEJbSZC%2FlN0nZ%2BuzBcK91u6XadQwteC58v51cRvwk3NeZ%2B9O92Hljf3gQUmYK58h33rwPXJajDxDgf7wNhqT7HqIBp7nlDvte7UxyEGRJFB%2FwfIOVA2mBLOqNoWLM3ZEeUGOIzL4pFyIg4iYtwmUZVSNcCYsNgxHffhOCV5H4GOpx2%2FP0iw8e1C%2BP9%2BQL2p92T0sMg6wNO5BONT9P93oYnnBxbrczrBTgFU2rNcFqFPP1ONVHgw%2BJuwnFfLVpv33Mv%2FxsSchvatcDS6owI5JeSABfDpBpg3hmY%2BMeHkck1AUM8GUh%2FZTo783kWDYIaddDXwojrM1ZYlU1yaakMKUskLT%2F9kSr0liWYPKCtCrj53JwIVXF6atGDMQs%2F2rj1Z89wdEhf0VOGlp2VIPajFoeRJE0qQDCelcPJBjqkAQdQKf1Zqg%2BXiq9wl6zxj84Q8wX6NBBI98u8pXEXSAv9dO9iwlpTtAD66Oo90ew3h1n78SYLdAGQym4jXjbWSOW9PiW2o0ecIp0l3BLLmKEg8JFbJsHMMjxWg6QP5mXZJa1zbHzbKNOMcNnnk%2BPvGHp6qowmKPn0MNA0fx9kDqInuC2epep83eNooaktcR6kTHEl3DUrOaRECwE60IQKUyIS0y4%2B&X-Amz-Signature=20677979dad5f57bb3dea5d5c08ae26d82f9f897258f7c28683eb0b9ef79b8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

