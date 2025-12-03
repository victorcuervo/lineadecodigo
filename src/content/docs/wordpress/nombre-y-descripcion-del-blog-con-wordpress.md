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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNX6L7RI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDRT6%2Bymz9SqM7bhvCb7trH7Nyyp7XUtizVt3NOWG9%2B%2BAIhALj7wBqZadb4UG1LbWNJC4GF0hfyHFXgJ6wYTjhe10qpKv8DCDgQABoMNjM3NDIzMTgzODA1Igwdr57SoH9p8eByejoq3AMKejgW5ErRJr1bzugMUev1Lta83lzYram2%2FF1LuMJgWVUJ3h9VrPKKogP4nOuW0ieA9dVV%2FbZm3YaZev3qncUvhwAV2WubnfnVq39RtITyyEgHAyYIuEoMwZ4de8YIU40yv692WscF%2B0u2Bp0uD7MKrmj%2BQ5uR70c05vAG3UNgIKYKKR0miprNSzPqxZGHxEHokZ4TjAQM9is%2BVyyb9n0QzaoyJ8F6eyukOfxx9G%2BB%2FnanBzmhf%2BesamvTaDa2xavcm%2B6sOgxoZjXszD30DZZ0KmsQs81hj2uay0pD%2FZETfl5D5GHOWrFtn8XsR5wMDtEBBUPdmF0jYnDFaZfLyjFjW5fmXdb6608zGQEyGhA6GhAEgMJ5NTWHCVGd%2F9%2BHNB48h%2BbtW8Su45VX88d7HMvhq%2FkpeMwI3NsViKjM5K9AFJO2q9Qvuo4AoPu7%2BQ8tIwIRx5aZRe2WFr%2FVpa4D3SR%2BFhGAIxgBLmOu4Z6gU8nTkWeuFsU8YtkaRNXqC5w9yC%2BI66GTbg96L%2BMt9ptYgXbnZBdgXpE49WGE2Fj%2FGVwgvE4AwG3xbaUeV8R7Iox5Am5s4ljemQcGtjge0EfsLNXsreLYwjtdYmoFdxUaJUbVbT%2F5jMV1WyHn6Ym3yDD%2F98LJBjqkAc0Vc%2FiiV7Gc1rvJiO1eHY3XF1vuHGHWYvRbAUi8QzdLvQUkvTYB2AxmwyZmnCAxKDH2%2Bsw6w9aRx9bY4cMkdlpwcZhvCX8ljlmPw9LUMTgbR%2FcgnHM1lIHXYaxk9WdDrgi604I0YJ%2BkzIURWnYhz3iK%2BxBh%2BeeZ2OkHopvKWYRQfmFTGtJS0Bk%2FQCiAZfdIUGoXobKT4gtU9wnogA6fSbTD44Sy&X-Amz-Signature=53a1c0fa45133bba4cf0f0d477c62a74aaf4c984ba48d8260e8e52933726cdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

