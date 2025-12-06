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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NG6TNWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEefFMidqwYCC3Z%2BknlwIKipWCERHygAyf3xE4YW7bR9AiBot0CDwWbkta%2Fe9%2F%2FfqzB9nn%2FlkKVdqxfNuL9O8E8KUSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMw8V5SHpEh5RVV%2BeiKtwD0yMSdnht%2FrNCdbEqdqiBgAE%2FImT9Of%2FksbpVmrcLQM4zteR9JzhxKqyyTPKG8A%2FT08ERmE3S%2BaYbkGrcA%2BwVUEbfkDvPFqQunKZu3LsDrqIMKR7micuRuPdfzIj04zDZTxhwQEIGsKqK4zBs%2FV6ZwnXNDJCFCyKg3TwfeTmXKAb6EwKXNSjmsLSonLFi%2B4r25SC%2Bd6FWplEZM48FAy73rfUnLN9ZzvRmluWXs1hyvvb%2FQb69%2FT0x64OLoKpdbBWboXf2y14jMdvegpLeTdXUm3dBBxbAaI%2BwzMbboy8i3AOLVrvn93j24rWrwj9ollhrxGzEkL9gZDx4bkr2tNHgVwpa6dWDHwZ3WzG7vBV6sx8XCWSY%2FWIdKt4oB7djHsTbhawXr%2BeJY0BZFgPRIZ53A5fuP1cRXqGfwl%2Bg6TTsBszGg8vy%2BWyUmXTPy%2F4R53273JBbYCa5Msf9EA8CkPpjd6pT13vv3tcyIl7R4lMb9cB8JQk%2BwCu51gK8BzZ01gkPH%2BiZjCWnYvRNmuUW3VlEUOPhBuzTfV4iUzqXWlMTi93GA2NLefWXFracvlClIB8PmWpoeCrPis8cE6WftqFGDFIVA%2BDWpDqK1d%2BTiAtaSlAdhQ5WlvZWU7B5OyEwwKfOyQY6pgH8hlI%2BZLOMM1aMJvY3%2F5Vg3SP4uS9y2tpkGhPc5xDK6bj002Erw7LHlvFCQl4a5JPEl2p2tfAHBZZVZ3SqbQXT9rYPeAOKizgT92mEpLMDCiG3%2Fq%2BB%2FcNc3CKPMqOwITt9xfaAx2v%2F0Iemez4jyVivCZkOF7tUxxPoXaVUEnx%2FjS%2F8XmwxSX4I6fUuEp5sNN5SrrR54DIP516XVznxa2ZkOErtb5t4&X-Amz-Signature=c2a2bb91cc89c3aedcec820120a1bf95eeb2c42ca9b180d71bf81bf22a4b45cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

