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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5TFVUS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAno8Xxt5bguJCUxtnQ80I49Fi4uHA5cgcW9sDp4UizHAiBCeEABGZPfKB4pFLAkq6LZc1fxCOYZkRW0iP2UHtOn8Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM5gw20hFYFZgjM5B8KtwDq5K%2FzDWLnzEimt93MoT9a%2BEMEJayKu%2BmAl%2FsjJL0pHLhLdHbg6FG9ra3eU7fGwthCJ8Vd2SrYugQETR0ufpR2TGxXGsfVWRQqIrgcOeEwMo%2B5GzLTWz86%2BNg3tcmSOzv57ObT01eLVXCkD51nI2JvLpLShSWwSnkg8XLiRBgA3Yq%2B12NXuO7V9%2BW%2B4GQz5gUqHhwpc5OKPBjP0k5xpRYAEbn%2BkIvODNURC2v%2Bw6rplroSjSxUNdtZ9RvPJYkq3vDBxX5pMwvLz%2BlAALfh3m%2BDd%2F8bHfizIdaATs6Kfnt%2BKpW6P9jUFPAU2H1xAeYIZW8EF7Z2b7wcnj3E5Sx7limwpa4vgFXvYc8UO2ZyiQqkYvWPzFLjtaEgLKVJabBDVo9TOuHQih9Siu5mkrN2OXq2mxjoaml%2FOLpmLK1gc2SmN1T3%2BmLgQkD%2BR01uk6y3%2FqHJ%2FXq1BgXUENxy0s4Clw2FDuvFynCR52fs%2Fh2Ai5RpLzb6A2ftuBYfb%2F8a0f%2F16YwaS%2FQQqofsOIjwtDugbbAaY4btucQPBQMa1q1l%2B%2B3pCsXJ8Sl%2FsIvWrKf08eleoKoIvRy6f%2BJcUIKF0wmcN3x046K%2BS1p134psDm7C9ev6P5nltRih%2FzQlRk%2Bc2owmMjKyQY6pgGvAUhXYpDehmcpHH5aOy5McalLqxSpt41hQG2VF29LHAjzuwNZ6FQfLz0Sx6a7viYj%2F1xbrKdOk%2B8ZEQuV1DOHmVxr9H7EtHT%2BfXwXiWihDm0qLzxnC7KewwQSzP40i1obGpE9%2Fxkt2JMyoSN7amYhfcSP0M3Rh1775MxFPoMXVdKoEKvr6Pe%2Bo2u6ZqXhvYJ9K7uDYwoFqw8hlqodhSujAOL8MGVK&X-Amz-Signature=2266aad4f15e2006b1375da8f727645af11efa77a9ab9bdb2643657a64bd8f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

