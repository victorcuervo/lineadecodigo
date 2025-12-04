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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUBEWS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICRf74Z%2BANAmrReEhcQjw8ovqVzLkc6rpTtnJDnQ478%2BAiEA30579vBaOwYmwMUYCPr8Ao3FfX1cdamUnfJ4vr%2BBsdUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLJUzs6hN%2B9A5c%2FqcyrcAzJ%2By4OCQrCjV2Yc2Fk9j83H%2FKKamt78%2B7Gd6yc8CWSF%2BRDk3r%2FcmH80hwvqzqIAg3Bec8kiTGJbHhKHAGtGlz5u%2FBJ2Z8ua6eAKpCeTjB0vNiIfwL2H%2FguxRZSeZTS6PyHK4y4%2FoiNmahqS9OB85aKz3CqCdF3pNa0V2GfWKnqfZ4TzvLym7sIBx2DGv8Z1M5FXlCu9yF1EKl2KHXMsKXkiYZ4t4ncfEeuYJbXlmcG5Hy1P9yK%2BGPs%2Bl2zfQ7GqAf64zmEYSX5pLlpA6VXCLvgWzNUFnHJWhs5BzXX6US9DML6H%2Fk9veFS6eRLdh95WE3FHwjq6zQUMTQK1wUwddiQaNnh9wnzCzAG5r6oLKNpANME%2F0FgjVrwBjoA7gXGxJKtS%2BA3Z6Lb2xopOO3Y6E5r2DUtvs6YQSq%2FqMYC8Nu07QsN55EUPCAXHUtk1OUzI0J%2BDTPpzUtKOU51eD3einSYdiEVb%2Bb7%2BeqkdvlHqw7ZckumOx%2F1Sp7Cw1bBl3EgYRZzDxDVCpAVRWp7XE5NxO%2BQifXco9PD3tKYfSXEELYR697p%2FU4ZbdNpSlTyrnz4UQZE4WSmhxbu2Q%2FkJKOonnMdEy1zBB71qpaqH55N19sGPgghXE8LRFrGunQ3hMJjLxMkGOqUBXI1NQlsTYVOFEoDJKJvQxoTCU3vx1wNIxx2UFaXWw8rlguICq%2FznCL89QviRl3Ij8h7xmqpJO34o6wtrtEEpwrfFZSMYio65M%2FApb2xliPUZPLkn9z8n2qQd%2F2BteBhzw4UiVeLuMTXCh96%2BmCb%2BO6l81xZJS1OiOxwa0j6leeZ5zoqluJOALdlZ2M9fKhmnM6NHUySVGEU3lwhapGePqNYrAbk6&X-Amz-Signature=94ddf2050fada63d32445e004b720e51618cbc6972bcf8a353f120a1f22ec90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

