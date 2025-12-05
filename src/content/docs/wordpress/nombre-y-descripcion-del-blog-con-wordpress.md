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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYJX5ZU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0SGN%2FdWwBtPm8OiXUrqUtw%2Fu2Aa5LFMgTAuZaSvwFMAiAgXSzdfsYDVrJHh%2Fu5gG8Gb4lZVC4fIQGDaG9scV%2BDGCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM9wLSradFMpCWs59LKtwDUoZO0yj1ivuAaL8peYsFiQ2%2FAJgIl80P8P9YR8cNJyPWQTVAoFZfsvlpRpP67gTkxVAks6XJ3Z0F5301SHbxBv6GQiatZRCmE%2FkGcgK2ri8Q3CLl%2BbmS1mtz5obZFT%2FX8UutjmmGlNTtDQeteiK01JTm6COJMHnSJBn35sZSNZQSRQ%2F9OmgOR4qZRg0kx6%2BKCBimL%2FOFtFtvHQwYkc3l8DVqffheLB72UQQLYE1yEDAntYCNGOsHo3HMpJoeuJDvSy8Df9u5o%2BHbxbQnsJBQRYWbr1XZsJyCeUZL%2BLDdx0pgYmuGPMgvnccyrAfigVml5Hn%2BV91QXIYgpEusc8JovStoMaMMvcYT%2FJrvHZbss7Fd9zYrLs1%2FdnArZLBHGOyjBTiKpFmV2u7m1zl%2Fnmip4YUyZ8H%2BRXPs2Vlmovz6hcpRGeDchl5Pe4LYo0Jdw7TFontpk0DjLrcTCITrIHvns8zKe30hVSC7i0Ii5tkfosqiq0wICqhN0sHMT0mTlKrkUNUZ7HAFaPawHcpe9WHSMMLKDw5bcHGWYmxmz6I2sh30VkHEApWKg2Vc4An6%2FRKD4rVDFI%2BYA1gAkT1l2XmTytGDm8B3XrK4N4PE5ebCzK%2Fu%2F6vTEHCYD6rxu6gwiqzJyQY6pgGy%2FA0b1hb9TyF%2FRD%2BMELuD6FkT2bnJB8ORdnjRPqXBkahfSJcbzSsUA%2FiGHO7afsIeanFCLV3Q1sVLcn14m70BZoT7FTLiAF%2Buq5K7a7u18t28PtpP5PIEP6TLTw3jJH5%2B%2BCRU7ZAa1%2FsxMufmv7Jq0KvX32NoomvTXrnSMiaLgALmVfmPVvcNfzrUSQ2sbU8y6K5IzTVxXG3mjxdf7Bp7bB9ebS3K&X-Amz-Signature=98e420ab1b4d54245604e4cb7ee259c699846aa9d3253c4c4f4bfb5e87a2c43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

