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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4GCQJ34%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsOJ8%2BnuOWCoSIx9ezo1ItxroLHRLV40Lo%2Bie4SCbjwIhANy9Uve2t%2FAAlYqQYOu3anCWDlTSotXiPrLzRihGdoOZKv8DCFUQABoMNjM3NDIzMTgzODA1Igy8JdMM8ATFGJ43eqYq3APiDU1MBVsleN1enF7OW%2F5BPXSe6kgj%2BdfqdUDO59uQkj%2BDsmTQ%2BEQFoI92JL0l0HF46ll1voi0s1a4AgUKBu61wHLuSdnfm9Gg8sxxOwdD1QP0%2BJguO8CIBUAIS1viwkn3ucxGK39FqhLnm5kis32B4Z%2B9UF4va%2B4YAJItJJZ4ovIGcGLmtVjtGN4AP%2BFAkkNO2PC1kS30MjejQPxgbC9IWf3DjvXE%2FfcYmW29sqbbfH6iQnLMFfJmYEyfLOMlklKMFDmSAQftJDoZ3tCAOlGTbWI252iTe86xEw0hgMu0%2FkPOia%2BKGn4dyfqeKY%2BtWvAi7zh48D6MV8Ga2sYiNZ%2BD1lxzDNT1jeDwH8AO8iMcx5WkKBJuKuhL78AOhsS5uSW9CVtiF%2FbV%2Fz0fMrdHOdrXHJqb6M8hFjmB5xNbwl10koiWIFl2ZZE9ezdSWpeJdpxumoTMT%2BPA%2B9GUbQab%2Bj2n35s7N%2Fp4VjuXmEAKIWYinhrjXFI5FNTEfmoONSnZJXMRdwi%2FtseOkHUqVAlB3s3LwDy8Cy4dc5yC%2Fw%2BZ7L%2FbGDYFRisPFGn0Q9y5i%2BEDXUQQjW9HxgsJPVmpQ4Bh7SLef2wNUsq8uYbl%2BV6a8bO5LvU1vxHZF%2B1KdSgopDCLrsnJBjqkAe2LXK39E1ih9vdRKFmhQirkOjc6mLr9aaJhqeEFKSw8WQ%2FTO%2Ft%2FrWQCEbweZux%2Fvdsf%2FDsfkXjGPkgJ7V2OAiPZuUkvdXbEc45BtF0%2Bb9xDviKJEG2%2BRIenIiKZAmcY6tNTcgJF%2FNrJJBOHnG6nxWT%2BDHE11I%2Fw9rmaF61cJZ1VVId9%2Fg1zONyfLcXvNDqmtx2FYVSxxdU9LMtaudMTv6rXfnv4&X-Amz-Signature=f18aa31d16c104999ebabe8afb3573da95d1cb415ab8d826484ba8c176a5f872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

