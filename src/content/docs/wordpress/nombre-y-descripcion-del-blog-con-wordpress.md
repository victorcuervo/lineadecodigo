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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6GWNVQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD4VdbpXa5Jyx4gF6PVkGbjK9oQSPzJdpFF7buzPOOX0QIhAMbxa%2FX50nIT1yXm%2FZsnNvoIttukibYqw1r1UoFXyUGoKv8DCEAQABoMNjM3NDIzMTgzODA1IgzTM%2FxFjTFWum7WxL0q3AM35gL8dxz0cGekY7d5QSH0E6C7o%2B%2Fluln%2BvZq1BA7u5GcusUCD%2BMUAmu9SXNnm%2F%2B%2BFPbGa53JemB9P7upURli7%2FrUpYh5Sb%2FUsPC7g%2Bs98VvCMfI77H4a6ncNCm0NApJ5dHvOY9lntI6CPE2JzvdVAOGML%2BTGA73vh6famJRVDorMxNxEw6wFVtxRhcM0y1C8uPd62oYHh6YGniJJrbFJLapGciQtYlAWT4yWe9GmrhPtyypphvyr5B7rFwfo9AP0jsDO3Dgh8A7sU0wJr49amfDz7Sw9DfTFTXh31loUVtycPklKKecCtUPEJ6t1r0tj5l%2B%2FKcs0%2Fsg7uzYN7i%2B8tAi5sDJeRt04KLgJc6S19496wNx5FSGwll2yiVmhZO9ZTAa1AO5s3J7RZ73tvufNZhSKysB4vl2Rc0vP4DUKTbbGfAxuZKz0gOlFu6G%2B76uuevL%2BL2pHs4d0QmLA3vMQrQ3JTLMk4cPYG4R2eTzUIGhwlrs3bw07Gd9y6u%2FoFHeEpWhHTHYSjHbWPLIglkdq2dSejv5HX16kDQDlpNwxofzlXwMx11N2a%2BMWY7tnkr%2BL8qmU6o2%2BA5xeOoOoDRY3XOGrLZmPQCsglnwFzg6YGGLeMliYxI%2FGwfSGflDDU58TJBjqkAcLAcFO9zJ3%2BWhBk4IwXKZ%2FKiitjjYq%2BAL9tnBm1FCNfFl7mKruoOQ1QIGTD9tDF7pxr6waRuFBoC3%2FkPRQvFgwcovuD%2B49SUhkzPe7wdoLI9oT11dXuOE1NlfhgewlcdLl58wJT%2F5eBY%2Bd%2BPyfkudMnYymxRPpdh0baNL14BndIou2GuQbnew5FBq7K8PQRCgGwRFhzXbF69yCIn1ASqUnGZUg0&X-Amz-Signature=c58ca80b0b762807ef77ea579579d35efa789975c3a50ec8dc995941a5226d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

