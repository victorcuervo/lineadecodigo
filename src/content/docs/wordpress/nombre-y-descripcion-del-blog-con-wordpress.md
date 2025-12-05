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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGXPVUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BaJZ1prlN6U2JutkyPRWLpczLo2JqEQhHfaIFyjmUdAiAT3VL34JzAiDK5D6kNVcxBDzCJfv5dF7e%2BvJ9qmwclDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMjEdidTWesVGoT8iaKtwDSdgDuWCyojTpgoSbyig46rRQ6rg7IdFLc%2B8RPoIw8bmrXKlaTM%2BoME8%2FMkJL6c5LeY8dAeuWX0CGC5TBfjf1QwI4kDpc8dEVDbTgQj8U%2F%2BuD7%2B75qD3gyYvoIISWGaKUNGYR1Ke20U6r4QaXijUqZmnefsx6M%2Fj5vNpVpCsc0h0QUv2PfKLZ8RLjW6UdnuBgillopjglQsT8G7XLg2CFXyfU%2FfubFwZ4vmWKCvVwRSFnBPnH5G0DEtLfrLTEKjR01ZuN3BcP8CffpW4biJ6CueexFSgSe6Gqo8AxaS5v%2Fb9SueMAPHiOcH7LwDBlFSmWVNOXnrzOcJLKSvxiqU310mx7WxaRcn4FtalfVNcPxoQJLAjGyFsN%2BDYRgCBRLzXg%2FmjZAPgIfja0nS831EFAxt%2FnorLVFCuVHx028CO%2Fj5l%2BYK7y4nP0FZPJlbJ9yKu7VW5kxL2bSa3nE6Z2fk2tX6wSIif60OQMhwts3f5sqPFwMTA4XntF97FY6GGL%2BfnOXeLkODXyEQvUNr4AYdNjPzTfWj6t5G%2FHRBQlAJhbMkB%2BYHaZdF6IPbaOpeVuUH7tYFdWAhLONaatV1MV7%2BLwxt89GmdlrvqiiFTx2PlcvSOeHEJ11amOyUhYX48wxsnLyQY6pgF8h61VcH0KoUfBxKsQH6PzUUET4LqM57OBJVa%2FmDXUEm%2B6kmTB2OE2k9PwUq9TE4dj%2BnyghQ8lVgMy5fvWe2Kk7lbP%2BVYXHHKRA%2BdUQBxR4C79thDEKIyKXkfGPtLNV3BUdUJ7nqb0zIPtJLDK2%2BQR81Y33GrSstv%2FBZQURNEbBgLDkUpxPLmPIeIZDPHoFafULIVEj46T0iY8%2F8NnlZr%2F4SYe2ueG&X-Amz-Signature=29e89c4ccb63131c2f257df37e8f11b1f52b8b2cdab1ba74c431d3b608b3d5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

