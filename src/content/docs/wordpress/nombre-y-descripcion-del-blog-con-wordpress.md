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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7H4NXO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDatj3jET%2FfaYG%2FL%2BSy3L7waPG%2FtpVisqx1c0uN9gYDYgIhAMKCbGMt2rBqhDm68Hf8grFYwCeCXhW45439Ve%2BYHQePKv8DCGEQABoMNjM3NDIzMTgzODA1IgyXUuyDoJW30q%2F%2B8QQq3AMJUPc9yD0926Aevcctbg2cEW%2Fqw2%2BN9nSdqHLJOQ8ZJMdMKDWAYDOkg%2BlNRf%2FR3wLnv3iXPO6qyHL1LoyVnS0vCFVKjt0K%2BeuXc7K3Ak2sB%2FDLzd876teOAyZmMBXceq6l6jfi0BKy2CrYZSzh3R52SWJ1m3KtEFMUUlIDHlZhuZy%2F3aJK5M78d0VgJkkEe8%2B9otHLNyI4BFRhd%2Bz1qNhrZL34KTGXTb7ic6TVzbNmX7AKbpckrtBmTxXpJyDwXShT0P67hNYrMN3iW%2FrYRm%2FLxaLf%2BiRs8pjJF%2F7P%2FBk5jFTxHejRre9kqLbq0lWk%2FGIoN3ArJkSPUFXHmQQLumAsHwCrdrydpwU%2BhOC%2FiXrkR2%2B%2FYExsugEqb6gjm5FuIQ7mpjiJgqAcs56nrG2F8y%2BF1QHVlT7U1hlVhsv%2F1YF4TzAiSF6Y%2FakcGMZz33w7oDRyoagwLh06QES2N8jCT4nUjvw5k1goxX6UyFlUgrwIRjPZnqFM8AQsbA0B6nuW9i39HXDbvNsxq9B3uH3e8kRkdTKlep%2FVZceXsyXj3sLo6KRy0ERG1lT5kwNDz5LhVzxZ3v8ca8hw5Hh46U5eXfGhR9Im%2BKCBdQ75npHuFuBQew6LztN0%2B78T%2BC%2FtkTCv9svJBjqkAVw9HjI44FP5tdwjkROc3i%2FcHlKf1kawv9eu7U4vh06l6ciFt19fp9RBRocsrRCely9%2FepoHCzd12JngA9GZ5WievkW8jLvjPhwaYloxI%2B6Db78GCbOXcVFEjejqhWBzEV%2FCEWg8scM9I6S6hMrQcc1gysKHBbCqu1AJupSkhrHbe01%2FXGKM3Nxf8C9tFGGMRvlhuYdbLqBzXdOzUTHfozGsVe5r&X-Amz-Signature=96efaf2bf36ed1ab4cea1fea3d731c64e103906c19a3808c655910a957534a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

