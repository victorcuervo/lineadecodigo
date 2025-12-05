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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJZIMKF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCroPe6EWH6amgtZXQ0e3RQy1g7KWCuOBr6Gt7ZQ1L0EwIhAP%2FAz1ofmNGC%2Fo%2BmTl70WaJAKSCwCt9LyqXbnuulr3QnKv8DCE8QABoMNjM3NDIzMTgzODA1Igx8HujBGwfTaP5X3lwq3AMC6Ze4ogxyxQxCDuthpva5Dq6L0cew%2F4zsarPrJEzzhJEUj3S9pYLZIEtsP%2B73ULpvMtGqAq6lRCCfuZZUS8Ziza8dvaZvSfU%2FH%2F9eaOyXkGDLaW3GkUXRIovpizhnXfup63iXzMJCy%2B4RfNM6fp2bawB67cz7B8UlmWlpt67qULOmKm8N35WF17Q7LHSzqWY09Nb0u2MHhqjEDn054Pyw1uJstwi0o6EzCCis4O%2F5yMETq3ZdW3IsVvW40mejMgMjHBOoqUwG5j%2F6rnErSUxc1%2Bn5dRAFpKy0xhu5jMJYS7vxnpKvOR%2F4zZKQQuQM%2Ft%2FOTfHg2cfHlIAgeLV%2BH%2BmjekhBdYNyN4%2BqJH3eAIAKdWbaVgRmNgmn6krqO%2F56pMfnq2PojzOWt7B7I1woA8%2FpGHjNoBLcLJHGCQaODRAUx7rPddvAbpKgL9s7u8h6JM%2F7QdXnpIAoIWBICyylYuQ0X7fzzJ1Z%2FQOimYFIshHxsTyu3P6wxGvjnjsuhFdJ%2BE%2FtVL9hjpiTgU8eA6fHv%2F1YHPLJPShDFKAvsExbhmV9MK%2F3mnLu9Bqu7cqcZ9I579%2Btu9Nzpk6as8WV3IgjjdEYoBa4NMxb6kahVDKYONPXv%2Bh9SFOQ4d7s9dpN3jDKjMjJBjqkAUmg1IeC0SrUg8v2iNylzANU%2B9R3bWkZo58wwL5Rk3PtDhp0I47LfRxmtTySAOgo%2B%2FrfL01PaxpjF2wu2hT4BkBGKFOlCtXWLuqDL0Rrow1kXH3vaadGp9vxZS6wAXaA%2F2x%2FgGU%2F40PdlyHs9qYT%2FnaWv0xwZOnlBfEPNaJQHpWNN4O7j2QcGpTRCd%2BaOS4iie%2FLo1O%2BFoK9AFQ9wdohrY%2FEtg4G&X-Amz-Signature=20b9e7a09b8a553d678585b0d2169e6bdbbae8e0fcdfadab7c6b23e7bbc49d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

