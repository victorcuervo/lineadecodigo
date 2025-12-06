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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBIZUBTN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEIitaeGae6KF3mWkA36Xv0KrVnLxeKNanhQXaw%2FKf0wIgYnLtVhIKkqcNOUBRLbabbomTCdlKcXT7hqMhw8lBNOYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGQ0Pk496Cx7ux03PCrcA3fVqFoiWOT1gystXy0ofKeK01JI7OxCOj0XPOH5S5ggGu3CGTkKuOtf%2BbKIB%2B4QVDITQgPhWmyuCiD%2FYV%2B1i505ORx94CRZ7LL2VDgu5sR75Kx7zunCf1A%2FvL7LQI85Slyz17EGcGI8TRkJY5ffGO6rA6nwvPA7jGs4ECSU%2BXmqP6p%2FeCDd1UzCysNyjn6Y7oa%2FwwM5uaE0AuaqFh8D6RV6ygHC6za5RViwUlNnUlC3KYF6gGuVnPMDK9AEOk34mqGAatVO7fiPe0Z5qYlQZRNZsQNSLqMTZbfOTg99G52F3puoDSk3t7egSJpVKMiwUG61jX%2F6n6UYaCd7GLxeQkNYAgZpc3fOk1xZf5uaJDXG6kl%2B6UBnjpHA6YaHscuQFTO%2Ffpj8290XAcVjFAiaL1zUjVAWwH4%2FnkqOfDeqjrQ7iF%2B0aWupVgbwZfUp2vMsjkQ9qpEapv6a87H2h6jqjJJHYl8GOx1Su7LrPbi1BnNi5bTD8ZyXxg3G70HlHDp%2BuBP1lLdAV4hKWVK%2BWXhvXFBVofh65OwvtAmqMbOoh%2BvCvcT7rUEZbIwttIEPT8j9tczQNgvNCqxamOEIbnExfhXqkZUilOPgNY1WO%2Bk7eWEfQwHUp%2F9xt0cLG6a7MIrH0ckGOqUB6EG79ARh9xbMzU1GfYwGaxYl4Xyz4NH5vkcRZjMZdyqzC%2FlffEOyzleEn27TGYuAT%2BUCen%2BWuJH36hxvkGrfVcABe0P%2FXmYp1yrf6vUOyIR%2FoM%2FAH0Iu1whbA4mx3h1WAlVXBDk%2Bj8LSUeBAXwuiD0ZT7mu3umYKt48HSA9ivBopTK9Lck4370C8VIjHCutm%2FU5llV56MtQ90J6uYt%2F0GNsj6jcD&X-Amz-Signature=c30606165d2fe375c2e9ad2ec3a931b4d5d7e171d2ddbb73f8fdfb6ad4013bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

