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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLM6YYK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiKnq8Eqwm9tVXDK2chHz%2F9XsCr0DzFFYUohRzjQz1AIgP5G4dUx9ddx1TKPjIjQ5GHJf9Ysx8FAy8idEJRWAAYIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM9ywhAvvFHMkPNbOCrcA%2BsQA5WqwZiIy8vJ25GJ%2BVvxUfdkJg0U2b1rvQnHkRt63FQZQlgPTIkHKoM0W%2BJO6eX45TpxWZ8OJqAadjexuBMrJvwUwtFMxzA9g1yvT9rK3fQbH1I4QPrMesseVR2haDIIE8arVOC8lZwrPXtElYqq9uyDmk5%2FD0j5ECEnVj53xCOdGbP%2FbBcJ8LuVcEwO%2FXVf3aPlCgzx4esaPRdACHBmDP55Oo96V0qy%2BE8n9m%2FcHBpsX42TtkdRb4rh50XN74%2FCr32huo%2FdcpaeIyV6SyjIIDE0H64ex9v6EcjJTmCCu%2BzrGLr6BetvPutw8aBukdzvSQzd4poEpgkc%2F9TSf6jtTCKKbX2FuGx%2BPOEbbu9Rb%2BT4OyS%2B%2FzMlXHLPZBP35X6OBvv5ZMMQYtgVkLJQdPAma5Ae4xoR6L6fGIork%2Bgkq2lZcHW1YLI7fcSMqoYnvY5PPTU1nGXfDoENNdp2Bven%2B74I2e9YcDhSBsl%2BryxlXx4AE6RWQLiZS%2BnSe2PFlUyyWWi6tXS0ttlqGCJ%2BfNHq6sKzxP64rf%2B%2F9FiU1mpK0PJBSvaD1JusWTdlhQoUyMdyAXsFjBAVpih7eYhSzqeh3%2Bz3axm8w4DLnAFq%2FTJ3rcyR027v%2F7rZmehlMKLT0skGOqUB7l%2B7GnLT7xSEkoXZOWeK9FgYlD0mTZerhzU9HDqT%2B5ldRA20E3TBDrPC7mXakwm%2F59qVleOTBQtU8vZ6RoDv75cfRxIEWb%2FrjAs2dKpTWMP6YhO4ydpNGfYktXvqJHWsWFgrlmK%2BEJhuTit6HNC%2Bs2hglOsbpm7vYUPDEjmzGfFOr%2Bb2ahfs%2BOj8%2BEn3cUYNx6wWzi8k%2BkfPL1dZ%2BEtueApGH8%2BY&X-Amz-Signature=b0d38e50038895e8236ac867094d149e6d9719fd8b1abef9f7b026a52c5e1284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

