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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHOI7ZS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDOQF6TjMTzBZlsTTFmhH5cpnavdhw3AV53eFtGJ6OS%2BgIgU%2Fn7L%2F5SpSe6CQOfQiB7KE%2BAlcM8TOt0D973f9YiFeYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLPsdBIeVlO9L5M3gircAyiDjn3N8SnRIeDALVFYymzWQDRVeUKiohpIG1GnlJzgFsaCJsGV%2BNi6V5xwkn4br3Z4GxQhlC2mZXFcVBybAvLlZD19XyCi6go7u99UMbpdkeJrVPQ0Kv0m6scpwPYx%2Bsce13VoSo5Inc9dChs%2FhnfqJF2KX3u92pPxQtIrDW%2BsNxo2kQPgpEtJtPuuD%2B7hKwP%2FzayYa9ly0ZTobVErbUy25QAIXsls69hTMelqZ9veVgtavcP%2FX588hAy06dhDTm4OCxrwZKDg7br8R3X%2FUhpbufLZfI5t26RVvrGZNQ7UL%2FxktzOeOofDOFapYsctnzU1z8N5MZAB1eiBqMYfIhA1Bf1cX7VwhicJTL68fi01GeLs%2BMnOb1QbuR6OtVa2ZpLazWhK3CXN1Z0Hu5cnrFb%2BuFgcXO3eayDaPoDE5FpQFevgcMiieDc0FSh3vHQNxihXKV%2FSGgZTqq9%2Fe8k8sr2forewU3yMrRiLrfdZDg1zkJZ26U3L2VBhBH%2FxA7wj2b1wc8leAqhEDPOHY3rO8t9qAnvC8Nq2vSsOuehAazRVhrJH5F3cBCAI5UGrsmaEPOHsh3sEs58nrDfRzqF%2BYTOjyNSNS%2FeKlImj2d%2FiOmoYbfM6Ly9ymAW0oP%2FWMJ61w8kGOqUBwTbhhVcY4xvzbrbSFYJSI1gaVWtbwNkYPN8%2BwmuTbw1qK868Ks2bSSi2sMgiAy4GkqYY%2BJFS1J22ZE%2BuaItEGnyWU9wZ9jWLKEuU%2BHoN3UHhG71mjBUMVNMFvlwRObgU2sWO%2BJ2VXXcIJwumOmJ0iPPLfSGWh6jjdexViNgK%2Fj%2BlS5WEuitJ95b2jfv6FvSxSW2Q7liwEV4vLzZ4qdF3i8DWYwMN&X-Amz-Signature=27f7b7a8ae25dff6f6bb68aa69dd8098166b7b65afe420c68ca815c112751d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

