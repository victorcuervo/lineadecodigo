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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUVEWSK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD99z9Nl77fhSwy7d3clBEjGwb5%2BpZn8pzz1nZjQ%2B3o1AIhAI3yiMr%2Fw7ok%2FYZdjYgHhkYnaO8WKq0wahAfoGnCjG2UKv8DCE8QABoMNjM3NDIzMTgzODA1IgzzH%2BRCsmApC8GUI40q3AN89aeaP2g6W6gLaVvxMZ8uUvJm3iSrroYzG3ia1fK8%2Bl8zhlArMn7kyFmQ5p0xKdwQj%2BVets2M2H5lx4vgiBA8yXmsLDuEHBzQjYlQrBnTA6izHkhHi8Rnv0hX62GrjwbBA2YLSLOaEin73ZXssNF8P54E7r%2FMgyesmI7M50MBSSfZLulhTqEtjdJ%2BTCML%2BNOQw8BVgnt84L9fTA9%2BYa8fDDP4Y%2FJ7l9ahrN1jPYUGySrnIVEPrOFo0P0V%2BhgfsCRhcN6sgrlOIw4sbVTZ3bAPjNi076NUsLm8G%2Fo%2F0ZFdy4UvcL3KIIapRm6rqQp3PcT5Y5mPa8Oh%2FJggQ6uINK5CJcLbhrPeHMKnt1lCSLNkKRhYAnZK%2FVAHw9ap%2B2dB53NtBY%2ByPeIoJpLpK3t8%2BNbg599Jc4vgrIxh0UcITVuFxPl3ssXpPkbrV8bDlxAmr%2BgzywJAHhofiq3VwLbQDEqGmfo8bWdo4Al%2Fyn56E3Ft6PPP%2F%2FEA0bM96QyEMQjWY79LiQDJ57%2B2rnHYk%2FGFamP%2FUMSl3Peb8cfPc6Z8W7dyYECRES4vsne9QUtFj6D5y9qyXrKYXcbszojv1lfwg0SAYOyYQ86d%2FDztaPuPiLYyKF8XVxMjpkTX5E6r4DCyjMjJBjqkAV2p4f%2FvACerYUbIikWGTOR6XFAOTLuEjvjHuLEh0hBGjfBb9whm8KXUFX4opfNnsFo%2Br6nl0ylIJk4JpQJlCxSuKwYcx9FktRTCW2AyN2xcHKPH594Qn9IVpGhrq%2B1krmTUdrW7nj3iMs66Xaqb4ZzPyEdX%2BCylH3x3RGAt4U3QznkoaO3YmRnYeA0Feeosv8qqYtXePRN%2FkMNDKFs4TkMDdo%2Bw&X-Amz-Signature=334110b51479f57176c3307cbf220e62532e9bff604720f6d064d212357ab81a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

