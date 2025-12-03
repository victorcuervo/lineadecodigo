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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQWZKNM5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCbINdyLS05wVHdsw1nVakycv1Cse%2Bkt7nM75TXz8U05wIgI4kBX9aGnIXdqGG3E8NN37qqbOT%2BNIsKY2AWbroc%2BNAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDG80tGGMoqYL8uPkKircAwoveD5cjabU2FVX2ylKzXeVE0EPifd2Qd%2FSiOW0TEU3Y%2BlTu7I043pQaKe8Qw4M9yrgZQWoRUlX9a6CadE7k8zetU0Z7yGOuWGeE1o5ALi8vNdUYTvLod7nmDZuDV8pNzf6QCxXaHM%2B02z8N2VUvveVjmiyqmneEZTWlbSpIMM0HAljyZe2yH5vzUMGofmvsk%2FDORvvSrUUkb%2FhF154dDNks9%2B8Idm%2FOrn6o5lOOVuRziSXNH%2B8JEnmXEJA3unQWUcB3a9xfwvKKhLpQs598eZ%2BuWxfgwq7Z8UNs7l2RY4Ho5fqQDJ58vKO3lql14dDX%2Fe9wXhHc%2BecHthrAQ7Hfdr3Pq%2FrXUGvx7BAnCdhBmbT8eduCiIoBS9qWT7bcWMlxlloqcTC4rHZz8tBJ3uV0z8UFo82nSmS4C58lJ0UfZXfZseREly%2FM5xiF6FaCd%2B7yeRu%2FP4Phd6GECOkgfYH2DgyErG85CAcFdfTeaAfAhA422Zrm%2FKr6x8jAaZ%2B1nkLpmsky8dR49X5Nb3aey1iMsdZz9gQik6DUDYBK83Tk9fl1ZQmqgRafLc5DmGBzG7mWUSRxJr5gnct3FD%2B72Q%2FL3aHhitzQfyJcbbbManMSwwRFrnVOl6Fk1QeaBt6MMKVw8kGOqUBrgrcf0ab7jNKVE36ADqHSQrm2QywTgGD6OlCgMpvmpSGcJfh%2FaE00Oehm12fQHipvMqAJyQybFBHvRVriv0MBwgJ%2FlM6sKC1hmt3OpAzzgGDfkkiBArJDJS2SE08vflsHrij9eUfY3uRTvSPZawPDmV8CDzlN%2FItfF5KGvqC8JUb5wumg1Zb6tMJvYTa66JlItaPD%2FZeg35HJvyA%2B22vXKjvORLS&X-Amz-Signature=7db58f565e2ea7f821d24147013010f4d440de01432d7576915a49076fe113f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

