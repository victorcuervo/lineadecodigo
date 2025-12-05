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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZMX6GF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDIIET8L8mcI6oISHA2GO5gqUI8O7P40%2FwOLd1GEI6CgIgFMcwo%2FF%2FF25CWXMgKCUtZ69D2%2F7w82oBfz5zjCD0b7Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGKKoiJiKCmWD3RzcyrcAyckUOR8NlkCkDk6TugSWdSJ8XCywTS4d91B7%2BhNahTfpsQMBzZfuo2Uks3cB5%2FhJsLgJpB6Ql9unEh9cJa7jvWvEwD%2Fl4XbUyV%2Fh1ExBspYHjmooDmgvPa%2Fyrg4m0ulucBft1GrwdbT9VTv%2FnfkKCccwlSczMz9geKaMeZpcRlzZKYi5Q43LndYBapB%2BxeoluIMiPzIV3bnlN1AJ2k8s75NwN%2BNnbd%2Fc7gTefbnTNIJ%2B888uUH%2Fp6p6SjFN7Zf%2FMeoTUqjmUtMFOQKW4REhsfgdtmZ2Q%2BCj27LQRzYCdv8clZl5dCc7%2Fy3xIcZZNtxxxccPtFxwFY%2FX1P1A5yduqM6xk7xB8s2BLA8e780pst5YuLuGQTC4Xz8VwbJBIuNk9Sd%2F6tDOE8t%2BwDagyHmt6QIktV0rLphDDv8qUupTIdKnhALFliU3%2FbdA%2FnEhgECj7k%2BzzqEgQR%2FVTXTu5%2FTR9uP%2FYagU0C0FOhvM8A6Qx%2Bc9VmeyYhGokdMLd7v8VSeEAtD84XY9vZf2BMQNg4QZYnMsb%2BElVTrsvupFPpYERuzjTrxoNp6gQrtj76vi4%2BnJ3b1US6TRFlA4HRZ2Tkgl7sFp0e%2FELSK5fcWQo9fZqs3wHzPbl5HFHRdFOPDFMMzty8kGOqUByBdN1CMcslQ4RLe1q9tkAm6ajxB8%2BxFt%2F9bvrExswdbsGhm7rqxrGwH%2F2sEjfQwqWroOjc9OKhjRWwq0J14o8IPwbugb7WqdZ%2BUZXyOqUpIsvEK74r%2FtWqMmyJibESFB8xB6PyvQEQ%2FBL0D5c4GQ80KxIpXKyH6Yxvy9esi0k%2BtNq8sh3kWAN0AmHx36WblDAneUuAYltaCON9Em9%2Fyf4hd0ed7n&X-Amz-Signature=9490c1cac9937c6fdfd69247acb4b3e2db6f7769a42908a5baecb53bac8bf46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

