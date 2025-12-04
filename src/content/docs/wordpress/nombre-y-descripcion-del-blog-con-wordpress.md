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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMDKDMD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAPGoYVe7Q0T4gQdju3HnbtvfD6hF7nPMV1KJELIKoSGAiB2HXYullmaPwD7t5woNSRbJ2Lt6GS%2FzNcN8d28TJPuWSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMyXCL%2Byq8Ia8tX%2FpMKtwDL5ZcQRV1HU3WhTIgc74JN4cJ%2BCI%2F%2BnDO2%2F4EF8R1I5FJBrL4vkYkBrL67hIs3xUcGNGl%2Bg0XIxk6rhfIsHs%2BTMWMrBbAiINuXtGPaW2tGEnm%2F9N%2FflPk2IweUyWdKTqA%2B%2BxmSKXY4V%2BfmIp798hjrxDDsdUzuAv8iU3D2FEhbtdxev0UHSxNstJ6cBCfE0U1hJvL7SJMWZb5uF8E2z1eqosZM16k6xSFiUjHlb5RML513Wif%2B%2FuADNtmxk42HOzdSdQiRZlfkJdvmEoSVmkzfKxcWRTqsuL61SmvXtRJs7u6%2F3HA285OarWKRu5wuwoam6wJKxC6z9eEk%2BkxPlcfu7asR%2FV6I0ozqIdhjlLamc7st0lwjmJN9JRRjRSsq7AbelTYdbeIQpckRwU8ZCmLSxHGICuIvtMN2d%2F%2Bc38AzNLGarqE9WImljA4Lzp5gFYg2ZwgC0Wp1Lu1r%2FwAI2kvw7EE6kPTrOgW3mgzAPik3Q%2FTiwBc1evpVXkbgtspiGoCcX8B0CcBGBDGJbj57k%2Fij7V%2FAh9m9Ta8spI5dAj1kslcvBEbzizMKMgMaH6%2BcT9HGWp2pwD8Kbnna4%2Fqn%2FSe%2FtUPAMR5KR3IJGiWsBCJ%2F1QsqxWRFpXo1ASXzucwwIPGyQY6pgEa75mBDGNAcvkVF36EmAgjKc51XHTMOsRzZKTWLjXG531RHIxrfQoLbtI315KXvPuZ2XPOlObCO5F4xhNa6ZnRCq75CAigGUZ9tHF6v%2Bp0tOuDu0bsIGdBUy5vVVwFtVPBEqcnp8uLgPxmWG0ZL%2Be%2FKxXbT5QPCwUBGCKtA4pvH4k6n0CMBiQiuO4WCRaWazpbWj7tSLayMH5topn7r4URI4iBsBFC&X-Amz-Signature=d7e763a27c26e0694c4867930f46e1c6797e17b62e215dc01d4f031684b1f7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

