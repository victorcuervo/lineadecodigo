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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QBN4O4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeq%2Bk%2BS2Z2X1GjH3dECu%2FT5y1AlM8m4%2BrF%2FZAQvjCcAIgTAC36c82z0dq5HrxZpyB5MTQ5FJhgjf3C8NWgFBXkrEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFOgCJLqAKM78Olg2SrcA8D4MHVHnE8x8x6vUZJnul6sNvod2FTvxlVQZDlhanVkJSA84cSPGbfUx4zr2Zv2dKAWhTmKwvvi1qHObpFzytF%2BvjL2LJTIlpL6m4yCCKbJYN3kkiXxkQZE48amVcKM%2BXkGRS2%2BJYsP%2Bui1a3YWwFxrF68yTU5cXfC4NKG0%2BRG4iScH39SvrQFtJ0z88mLm6fGUbFfneuCeP5yeIzM5bK50RV0czeyAHZWE5havsASpT9Ctfkr8ZYcE%2BkhcUaiG%2F67ZZgQtylSDYa8kBskpsbuxiIWX9Wmpu%2FxFB1W58UF%2FUv6hMBr3tN1u3QW8y4X5vtqCgYgc0M8goH8XVu1xHvx0OGkOcBS8stcd%2B9BJnLLzYqY6xQIQ2K6oyiJCskOU9tEkAfdLjUPCKelcASvy8svoiG9Xubxz9Nu1dzroPYiQuDdaYjZYTHJAgQroCvwNzxNuA2oTdf7VxMEQ2%2Fm%2BuOrNv0MO%2FifP%2FRw6ryNfaGtBh4gMJyVX7rK0YwishutpXYgVQ4uwH6z5LbQqCR%2BKaW96pAFwWb67h7EGbMjG6kvBGeh5rE2Nrc33tgT9q%2FSsVceINyVZNVySX%2B7cc%2BIerXApiVdPbtwcuK1zWADR1xv6YZichMEsZ5%2B4w3SWML2MyMkGOqUBn2leE5p5K77dmg%2FDdPOriEP5yIOFQ88V8kzIGi4nXCq3%2F%2BdpB1xXjaozhsAemzylkAd7wrO0a1fz6tuQkiNQH99iqAl2OgJT0RQBNv41BDjXtmd2%2B6%2B8ENmDEW8HB1vXR5LXQfrxC2pm8iS1RlOI%2BPYGK1tOMWZ4Aean4NkUvPWjxY6crxHNU3%2FI%2Bz2bMzPmTmUkw5LZ2mpSe52p0Ua3Kn5vtWKt&X-Amz-Signature=5ef6aa26b198e5f7d1c0f29a96f8641d3205d5a4ed6ba963b61266515af5fc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

