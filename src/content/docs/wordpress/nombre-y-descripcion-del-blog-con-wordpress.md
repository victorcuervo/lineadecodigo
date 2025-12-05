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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYAFDJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSftDMqycO%2FzffVWk42tzrUdEQj0ABS9yvhLAmkQyECgIgXOvVe18PMWoRUxJBCkm%2Fo4N4PXtFBZg%2FoJ3hZE03hNkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKUlUJe0I143LJFzyyrcA%2BvQmu55ToiB%2FWanoqeACGccyyVN0DDAaNTKekiahO4PV%2F8xjM4x7EUh%2B1fFlS579lNk%2BSCiAQnwgZaYCDDbNOTc0nmdiPcMxJUY8j4p3KOZ5WoHkDfa76kk1fk1vYfjgkD2JL4dVqYDydr8ijKRmfDlgr6nmZFrGdLETawOY91XJaBGO2G%2B6hLlMbl%2BPPrS%2BCHMxNKbTxxyz%2Bvp4fLN6pC%2Bh0lThXEty6ZrgfV4%2FjQ7B9WC7k6Zrz4spar5FanCY0jm0IKbPiKDmchG%2F9B%2B3WNj8v2OwU6dYhai8fMy58acwQs%2BmmV2P3bWmslye6pkSuTtNpYAmBggF34O3HJjRPCGFKMG%2FCJ%2FJ4u0VD2aQoWDLYjAfUbc2nIy0CwvNW0LGVd87G%2F%2FB78%2BloOA0uTx8%2BGKKUAxJl%2BO9m%2FThMPoNSjvDSMzyMFdcpjvnFvb%2FgTQyCK69KNLWOMKxUZ%2B0OizeRJI%2BuwGEFrMc22qYFI7R%2BpMI%2BJ8m35WRsakdMpXIduor9B6TT%2F1DDGJJur%2F4m3ry2kluytuue8ivSmlvBIyuCNzOiN6cIg3XIHyv7DfK%2BbqMqLbGCLDcyCHHnBiYPhvTpV%2BZGYQ4b%2B%2FE3%2BYN2lTxlqAWfDDM0NfWA3ziiMNMOOmyckGOqUB7hoqzozJ8V5O15dyDYSIR2ng28%2FXniRFdmoXO65GmaT3lBO4VGUyTtBlgn7gcIMO81ga6W12IJnbr%2Fp%2B3uwOYhnyWqnOQFnpWzuiGN0AxpUZvT9At4k%2BWkG8%2Febt94UGTUS9dWekUAtWgNwNYxLCeyJpyAs86Tv2DpAgZ2f%2FB6KoM96xKFmJvvoAotRBfFZxqEEl8v37njhpkjINIDjqfEIwJOkG&X-Amz-Signature=9e6cc8f0fe96a9ab447ca9219590b8bef47a2bdf200486cada32552f8bb2ed55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

