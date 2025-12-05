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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSFXRPD6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zaSx1tOF8d%2BxuwXUQdw%2BKL6IKNZzlbrz8nBqx1kQKAIgZtXMFULB1A251qo8xmef6Z6o3QxTukRT2npttLdHXVgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDChITtVPz2wuu8cf%2BircAxkcoaIumoZS16V%2B9SVEp%2BoQllXXxArb%2BHCqtX1rIgOV0Ww%2BIGWlH9fgh0tSKgRR%2Bm2kBQRDZV1Hx0m9F5fDkrvxxtVjILkTdNi9lbo%2B8iZBXiLDDWSwSxw826DnCBirSd11iYaho%2BLT2i0zEML5RUJzkEmnVcFvWKrFL5XAUf5LpsSIHWizSCS%2FTqDvq8GT7p4nsDQrROBFEmaQliqjLfZeMxwlrTvEO4wwCbfGnFnPMsOoNJBR5eFgyuDxXKMAsLDxiEGC7EPgpjl8%2Bn0HauHY3KR8ZKLiwxcowOKmlkGCo1Xt%2BGCXqwJnwbcV5r65b6esz6bxvr%2B9P41v2FmXA%2BEHX%2F83SnNEo12CIJJjgO3aNZdImIZOvZF%2FfeW1WsCtUG%2FpAEvjXqwpWqEF%2BYn8oG04Cb34ylxlnPUzTJVHqbs3rCozc41h7tqSJXTyqEtiRst%2Bw8AmdidAnyGztkSFxH6l7vgixVsy7q3IWoyN9ZP7c9fefEK7sQLunfsD0hHNFHrFfsK0a7qQLp0RxKERmvOzzBwnzcndN4uT2fYCse8dUvUQNq32C0bauCDBw6t0vbb%2Bn%2Fwt%2F4%2F%2F%2FAO0Sqw8L18Yag0A%2Bts%2F3nqnPPwiPUnaSW%2F33yNdr6G0XrtqMNaMyMkGOqUB8JnahL4nGrr6Ugz5rQIgc%2BITyE5GuS5VmS81S3q2Urp1sK2OL2Tbg5Xw8FXb%2Fbv%2FJp7Q%2FYWI82HsDgOwtDqGwHmlamTD0H6VvwXd7IUX4YO4Ovxu5I8Yq4za%2FGZJ%2BM9cM62JedgEAgbOPnvS9Y4jfynqibwjcm%2BeNYwIIrEHlmXOx2HKTUEAAXnNTucILe9w9n6b%2F6KVZqXqzp%2BnJQm6oWnKlDVY&X-Amz-Signature=f9987b58d0c3990f76b7940b9e25482b0479d95917b3ec88820754340c395919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

