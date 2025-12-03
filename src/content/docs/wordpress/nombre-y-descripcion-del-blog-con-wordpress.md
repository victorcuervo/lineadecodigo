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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6PGO4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDhGiFL50idKmtbsN7pq7KG%2FmlSLoiLvL1B5ELZ4L7wVAiARz9o0Qv09%2BUzofgSacfcxg1Wsd%2BXnjhG%2F6eSRpdu%2FZCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeq0hJgdKda6PC1%2FfKtwDKr%2BtPcolSPnNdfxONSKY2tkacFs5j1k7ATGKooGonzxE61Z28wNN%2F7A3VeaaLDjkI1mq8fkHy5eDQnCvx1%2BSOKQA%2B5PNdmQzx%2FDoMcCk3Vr5IxTKZOArCghHhCaWFl6SD4vWOzz1m8Yt2KxcD16fD6BJvsf1MHyTYsg4%2By1Zfl2YfIRVCtoAClVfsZIsFSjHHs4Z0vNvC4R67%2FWuZK4SoM7LKUy8tAnvWUBgV%2B3Y6vs6n0BRH6%2Fy5A4gDk6i33W4f%2BBWzfZ7X1uNG1fGARuVk%2F%2BXgPJIsS2w3xx86R4aL1Y5CAS2L3LSU8rQuHHBAsBswN%2BYhpRaYHp1rgpN0vVJFXvYTxc43vBMsZ5NrvDwDTBpaxNvlSiiDG6yW6kzf8VjTNaL25suD01oCa6XwvyN5M55L0qXKThlR7oTR4YkcISvQaM7RWz%2BnymSyOrUQYk8ux7W0Npj38PzUSCG2P9v8S8h219xYGzhanjbbAi7HZOdhDaE%2FvaZQ4QrJ0LieaiujzWLIZsqlFifcQPKGi6gJyidcN640g656gnCZcMYjmYzvW2GdTkwhbi3fK%2FK3jxtBIJEorg1S7wGPJCVDMzb8X0cFRv5kcyzCQA689fat6XVvVhf9dFxvREPum4wyvfCyQY6pgHNI1fnL0Zw5UakPgR2jggoC4rCPcBo1vrn3hdFKIHk%2FiBbyml1Bp%2FkD0lAaE6SbWWBHvyTQkxYab7r9uCEzgug323TqwDWRzpcvLRBKHXiWDskGVdh5JwMxDVXj%2FdXqe19SmqOaZKbcVxfFjgfivg3665y7Vk24%2BERcGihnthNp4%2BffwLto05T%2Ffh7oWUk4G75Ec85ZG6wVtz3%2BAUh5rtdYszROSU8&X-Amz-Signature=4be39da1f0772f6d10fafb6703fdd7fc5204a6b2b8a5420c3de14e9d5653e241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

