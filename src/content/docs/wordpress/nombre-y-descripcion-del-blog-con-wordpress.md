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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOCMBLX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC%2B4%2B7uCzcZIcTBrxujDuxyRi3ZUf2tbiBF3QymjseG7wIge930FQgYXkhMDu6JYkcwCZFGXIGyGrZhaNbBwi537vEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBzJ3tTb8%2Fhn0T2MPCrcA7z%2FGxkWqwD%2FvEnFMeE1jDYw8SZJa%2F%2FBJp1NdPxL8hCjvWFRrI25DNYSRsqGwABDB8TLJS8frO%2BYcf4OM%2FQ856aY%2FXzzTRp74TQfXa%2BmYzm2MtyEaUmWvmEVAP7WG%2FfmblySNIp7MDaJczeoP9pjju71msbm9K%2BY4WfeKLwC3iIx08rcZ5MsJ16mDsGmh8m7GhfW8coK3PhUyS9HMScJXvdPIu3FEahSuxXOc%2ByST1yU2PO2l5ODqtD%2FZ7gV4ervuulhwYOoRUl0cXIXg0%2BBJTCUI4eWlaDrod0NGlkMV1RS7uyPvaQre3M8huhn8Pbslp2LDvgOam%2B0HeVVVhxCe7eh72pTgn%2Ft1QGgjqR1iujsDVaG2fNUtqGaC3Qdwd%2BSQnsp1NV7Hnh%2B4AMaNUuFu9jDe4%2B7sjw5LNi1qJVlGifozd7Jrrgep9B540B%2Bo4QoululpcbzjK8aIkvAHSDoMs18OKn0D9uj0D%2FZoUj3%2F1Uqr6pHpkjwRSs7ew4bX%2FN1kk6Mj4RsoGx%2BK0C7QkqCCOHfoo0qz9IlN3rFgiehJHopJjFZVaxxKK3JK07m52tDWO1M1XvnXP1sXzCOe%2BkMQLBhrNFMaP9f7OyERamZIoAFbJgdzUD8a5WxLf%2FEMMyrxckGOqUB8IFXM2rB4IUjTX7cMcJwXrQ%2BOmUXvVHnjNGCepCztKU%2B5eLlsIPoHY4VIxrVB9Dk%2FYAdxR5aiuVjpRSVmFBrhmQLF28VKl1J8yb2LZ3oJVM%2FiPUbRU0F7M9XHmgdEOIIOrFtkxVjGEhU0R4xrCkm6SnmQ2Fvt63ZsrqTeHkC6aDtX9d%2BgnJL3XM5kUJZiCcviJ01bF9QgLZ6%2FTft4%2FJHCYUNqEhJ&X-Amz-Signature=9bd68dbf22af2289ede314d98ee2906aa62ed9a8c62dffd95585243d8c8eae11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

