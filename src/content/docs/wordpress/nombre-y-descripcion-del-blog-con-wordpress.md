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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSDIYOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw0IT%2BBf3nh3KhmCnQ1nMLb%2FAFsO2t8RICXZAIOyRewAiBLrgTjrFfIO9BEyqJVY2AIzMP9EF%2F7x7C87ccT3fz7sir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM3aZfWlLol55lqH2cKtwD7dMfNxdOH65vR8LJuAJP7aJ3fLWo0xQnqB09LbkTNeHfFlxR0NaBMPmm01vwG0Qp2KryPt0zkpYFzaF0h5J1ojZ9GlK3nLIkDIfUXbWl30DysIpX9XZOT%2FpQ1XIo%2B%2B1RjXNRZQjQOOlvABDI69osrl810NW9oirTQFtgZs5wbHfhIJQvAJ1%2BEqIx12KWo%2Fa2jkHXdERGIe0J5UqjolHOQgCeF5k08QyVrxwx%2BOM0BOJY2qmCN6ObgpZCRB2D3zrTTSYEnOvdwRVavCxHsdx9EWdtMPJF7uC6fTMHMKziLqtcIWibAcIMy5IKCylfmXzVD7S%2FzKpcAKeImgI%2B5fESGY2p43Em8RB7c3KhKDpI6e1J5%2BbdG8%2BiyK8ga2YIJ0Pb0%2Fd4uiordkgi%2BDnkt9ps9iVP24mPNzw%2Fo%2FGWpfuQRc2eOTZQkGz4YBUdbfpDy5xQR4txdCp1c5jEOrxebRbpZ98q3yOjMaXmNhIGkoQH7I2Cl4Pdygs3uEpKWh1NdyxCRFIP%2BHV6i%2BNM3nukycqXwP8JWsOhAajsyhEMdzDOVEu29atXVgVak4eAFIAJVCNjSuUFrllhbT0HVdjWHofvZC0OJGZqq3fD2gFfvGfbRJl%2FJmqxQNVTmTx8AMww7ozIyQY6pgFi2HzaJOSwp1%2BnINcAJZR12t2ocz9Qw6Ufh9fl9YN7Hrz1RRn0Jr57hiSjOqrPzfwdUxll0c6X1mRWkk6DNlK%2FMBJWYUR42jNEL1MAjAaYJqE%2BQIh9AgrsFtIa9pbUFGxH4JXtuzjmcDYlxE7xTR2Oj3bC3Vnt8st7Ov27NXT0DEBIB77v8KwKkPRMGs1aSGdjtmlogW4Xmc8ANSgv0hyOuQ3p0XtK&X-Amz-Signature=53b1c4a8f2b61b6ae5070b826f13ec0c8d686edef95811798f8d03aa6de3c636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

