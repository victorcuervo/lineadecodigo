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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4F4VSY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDu0tQ5nTZoPDoZPpM5%2B0oo%2FMl5fT1AgSR%2Bjyq6Vs4YzAIhAIuA9ab9OsyIzxQj2WrmZ%2Fm0J5KHnj8My6oScnQUQv0ZKv8DCD0QABoMNjM3NDIzMTgzODA1IgzPBwiFrWgceQgzseYq3AOogl73Ja8hqBW0eSt%2FvYU6SWwfKnnQudi2q0z6qDgpd7YNmZfPO9cr2BArlFD%2F2uNJuqg%2BVX2iqVNd2X5%2FeGfXPSlJRTyTF1t%2Bk89fLZMHNOLFGS9eAD79rUMh1qo1HIQCTftAC7mMTbL4xJvEMFx3sEZeAuTqRpDH9PMHxiNWVb2%2FrQ6dOMUdeQzq2OeDN%2FMzCrBBF0WO4Hwj4KUKLRVJA%2FQlpLDbo5wTI82Z9dmVaKeynQfD0S0e0M5OubMFbsJxeNGt1pQlO3v4tSJHl1%2Bq5Ivo8TL3t5x9DatVKl0BnsoyoH3eHj0%2BiFfD9KwMnC9o9VzkF3j7pUB%2F40CsSMS7%2BM%2BMzvuSeH%2FJAGtE9hJlYIStakz5VbhgEzVdbLVXiOW0k81a3sq6hOchrBrZM7cKu3Wrzq9712B8%2FQuZRDU7L%2ByGZGScd6Cm732nw2JLT5IZKSXftM9dvSs0DetE6s7aH8Bda0RUbZ3ot7bfs5HXdFceLmrD5zb46%2BSVDumCsrmM%2B%2BU6Toh8StFDWMa7kaUTPjKpXeWsOWXfDcKuhb6vKsb%2BWlztsDUoBGo7tv%2FhZatle0pZoW39zwos2xol6cMn7NqSUlFac3CL1KXkzK6Sxc%2FKn3GiqfbP42%2BVkTCXkcTJBjqkARIx0iKE47hS6bNg9ERq9yYgBE%2BPJGuLPhTrveAQheEuz0dZk38D%2FjCDLLT%2BR21d7h62ZtR1lwnzWunX3kdjMHgIHStOfini4j8lVY6YddzZfyUXBEV59Z79jZcd%2FyAMZHyE%2FF%2BfmU9e8XY%2F83g9%2F4wypndypKBCGs4RI%2FZNGtypcSn1HFJs2JHFMkblnPRJNRvNWdICjZN6r7GyE6on4A8g4CgI&X-Amz-Signature=f951b5160bba2b2e5157d7ba8416eeeb01af3651383799f8e18da2fe4a3cf134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

