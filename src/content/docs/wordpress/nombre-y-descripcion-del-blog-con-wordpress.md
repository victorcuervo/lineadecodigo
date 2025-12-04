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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DYWO23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFcgURpPZdxnCKqn9QO4mLVeK%2F0rvdvkW6yKWE6q6G4AAiA3eLdxbdO9rR4cZTwWR3b7lLfzkk269lZjb9dP9Rz9hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMwx8KI1q9PwasFYlFKtwDzCrK3jNGcRD61l2TuWAB7mF9M9MkEqJ5OwPdFOaXYzWCa4ymC6bdv77quKDsqSBQ%2F6DPjkLWbMib3PbodT9txujPUo9uOiuOBwXqsNR18YDOssy1FwkVpLf5T4aitoWsPb%2B7seSHogiaXcc2exk%2BiWGfWKRIAFkR%2FhPJV6pZY53G9zdztgr02gmHmKGmYZwzcao2rL7LGkngDkYRO8GsnwZISVUy4J2aOD55tlv9Is%2B6I09%2FbJWs4LC%2F4krFO%2BKi1ii6a%2BI53uho4nlRv5A6Ar641A8qOET6Wmw57%2BcWbusuByuD7MwlXz2I%2BbL9Ouke9ZqdXtNuVOIcXn0cGEA5V7s6m4pEEKrO09Qr4kYSdQ%2FGFQ4p%2BVsFjiZjyWnfOt%2F1HuQlKuDwLbARnpJfXQ5dbh8SDNIHIf5r6nPu5pq09ughKnrw%2Biasp9H8G3uXRnNBe%2FPQx7Ox2WYQJbHEzhPEIJg%2BnhS7BusFxq%2Fub1qg9kD0EVqzQPSMtuGSdfTt2%2FUqx7mnjZQmWsPH9rW4xpVwjsJPAvquhY9gRiMFlS%2BuYWeBkaIYqMdRGBUV%2BBuj7G1yXmwMM%2FXO5JxBvIYJcyRgh9cjo68f9racUSK5MuxsYKVKR91TKMmwnfEfBMgwt9TDyQY6pgG2R3JtgO3MXG%2FaD2Wc2xlVY2%2B6yJisrt1y2hhZRqY4ToduE4B2PzG8f83qdNmaVK75u8IGIupWV82Ha%2BT4kEpMroHrVtpcBZJ2UKiOP4c2x947bgwBAS9R5xj%2Fl4jk68kJrvH6WdrVxRSIf0v9nyJFanAJM74YJf0EQ9JLf36QZuAnhEhsaIusD%2Frqsz%2BEcjL0y%2BDQcQew4Evi16%2FEfchcK7q%2B%2FZ5f&X-Amz-Signature=01410b843f24ed6e66b7d5d842ff471349b2e11964d45f8790b4bd03bb9269ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

