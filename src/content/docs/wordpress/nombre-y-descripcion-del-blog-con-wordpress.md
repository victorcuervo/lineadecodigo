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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKC6727%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYj01m4rxIHNVnxjvgQ6evni9mDVcXtJZFnkkDn7s6uAiAJ%2FNYZbBBEHBJCTd%2F44YgQYC0OHYLahbLAuKjuWIJ31ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMTRtxUAZVbwVAHXjoKtwDWF2s93CtidJn7SF%2FqSyOxc37%2F0lIPfmsnK613XN9u1AStLe%2B3evGtj5dum9D45M3W%2BQp3XNObt%2FSqrqpeQdBm7Djm%2F3QUMmgJJ1FhZo9ntcEH1Gz0XvfeIOIHiLSrkD6p%2FtBGiw0x6Bez0uJoEd2ODk8iAZTmkMVUIar7%2FI1Y1oGbOBPU3j9TNEhvtlU63UPTvVO5g%2BPwDRxHsxRCK6dhC6RcSrLfLdKsQ06JHQ4T6gRCP74Bzn%2FKQQkG0GYQdtJBF2pMKmt4LwrUlan5TjiNRrCFsvyK8VHxTrQMhbLx8lUfT%2B1rMdNA9DyoJfiNsHH8jyjdFUNGq6hKAHevuTtoqfHPSAlf5SEA7xAXopFatY0zW3SSLx2fStSgWjKkh2%2FZP%2FKdbhcbYs3cB7JfU9n6ENVoSx9HR%2BQZaX25F2i0R9iyQEn%2FfLlmBHwsApMO1oZcaokjDxIDo6tNTHVc%2F8s%2Bi6%2FIuzCLq%2FlMK7W1ytHYHIKP52qKhaWn8BbvZ4im%2BxyZw7wGTDuHNhbc3Y%2Bov5yUUXlyfQgtW685kwL0jIpX0rkIJrJGEogXcePnrm11kh8aV6iYHwcfpmufZ0eTfxL8nR7%2FOo3so%2FfGp6nbPOgLeurWpe2%2Fx5t%2FgSGVZUwr4vNyQY6pgGH4ZIBCojhTAhZ1nZasEiJYU0yvj9tobH4HmOdFsBl86NKL5AfcGVqoEo0WLLzVPd2XFgBiM3%2Frx6EtbsL%2F%2Fd9VeBsJJ61HcA0f%2FWq9nfprW43VqdqAYz3Lpxg1LGYxG8%2FcT7aRxVgrEqVUycKrIXcpIc0gVzS3gEOIvtXPegb0B9%2BP4%2FbG0w%2FAh82H9p2x27AZvypDdOpdsjNC5USNlrKbh1kwMjq&X-Amz-Signature=93e7d98f29df0502fcd9c8b55d661968bb2af1a43f4cd85e87bf9f8c401f3159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

