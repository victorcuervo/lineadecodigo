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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3ZQYTZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvV3fa1aLUM5b5dpUBqBBGUwfiS7v%2B9wXEv2P4n1wr1AiEA%2BtyEHJrn5nzzuTJ6ofECn1Vqni%2F%2B1dA6UZp9rLw7bqwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHSNDE%2Banfodxf9u7SrcA39%2FnKST6%2Bc%2FSO3sZPW9%2BhP7%2Fu8PqqQi6x7AOGIgVEJroyYlTHT4dA%2Fq0keKhTbogsNQQoYU5XN2m1gMsX%2B82%2FMmtYQmWIUrQrGyWSg4egGZDdJbfRcYnDZ6FW3doGCtyZQPuBD7vg7znFlvC4kaRkIAqFZgX4ZgTN3Pe8hbvGkjCd96v1BzNdYrDs2IPM1SfpkwG8Xozb1v2WiQuV3hR1e6xfkUXMRkyfNc82P3vt1FASPaSTLnKFbopQth8NkKiycXJAEVRGQuxevcyNBCqNFAR6eC%2FOQnARSN9Q6gx5QV3INzjzbxuibgxXseVWeiCNQRvVa3U4zRgp%2B2%2BqqJMC954oUnleGgiq8%2FdHxnfqdkZma8TRbnHwzvZiRUBF4pouNiZruluEm0kVqrDcNrIIvqxvTQ4C%2Fx5oWn2KSqHj7STo5I6PD6VCHH7Q%2BefqoMHkJS%2FhK9AAhgw8oSTttjcFva%2FNrEU6okXwfw%2Flu%2BYayDGCzAJAa78WMYlyLzKn6Tt%2B2aBleU04P%2FycFV9H9wj%2FIEhjvSiVXuKh0%2BKKpEpnYDei8LFaeljjWDqjjutc5s9p0qk4rEiahiZ8DseHtoj7M%2Fv2x4dM4frdu0tcFPaOguHH3%2B69lONtGlOEtOMLTtzMkGOqUBUL8IFYbS5vTKh2uMOyQ6a234MMoS1m4wt96UEyZZeJL8HLzMewL%2BsbbviEm%2Fi%2BdKPWu2GtgHqVyiyr4Pugt%2FNJlXwsV8Xk2N4yMGiE5PGNVA0YXkTPs0kTgO9B%2FTOPb6UUKaI4wSB5y6F7Bz0mPAW0tjTdV36c0W7MF3XwljkFzCoaXaSJ7o5wNN75yJUjDRXN75oykSxIKn24u%2BGqUHxo4F2M1N&X-Amz-Signature=31218be54228756450fe3f9f9721cb4dafebe78f219cf6e1800fab02b323c4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

