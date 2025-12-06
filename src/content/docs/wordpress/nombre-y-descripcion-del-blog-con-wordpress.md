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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XEI6IH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBFzXWzRJuASiuLgl39vrvcHXZiFuPI2Ob2lBw5npIJAiEA3jOs9CpeYuId8Wvz7Ludxk7tkmJtv8l0anQ93yM3%2FvQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEp1i%2BY4RUP0ONSfFCrcA66hezkGSazfX21hs9wKGDXBt%2Fd%2BxiVrVh1Ki6ItAKB88V5ks7lv7TctzGkvIxCTi%2FbMweNB8INaQZ5UuGGNiqw0S%2BR1WiIkPaU%2FQ4ZLUOSzokkBzYSxWYEcAIGlW0jX9t0Z0TgXIE0GxMDE0Tx94stG7NUJABeBliGkdd4s0Ak%2Faf9RK3rdgSO1f%2BhKBn7Kq41M5oajYAIyo%2Bx4T1oSqi0ITd%2B7A6hhR%2BlbqezHQvG0K0a9uK42hLJDANe1o%2FM8uLbrzNKrwurP6jTYjxaXCu6Uqm5jjuH7kFml9HgHxIRL1pp%2FlwYzxNMxm1wg%2BpGZWRW0nz2K7QetkYGinhF9N0MoQy07T5nBbgjAR0nC2XEN%2BOunNX3On0d5Kqgl%2BmYOUL3tMkgsNNe2T9VvpvFhK7qY3v8M5XmfXFDMMEdY3R4Nien7b2McMGR6fJUL2Wz9BEJ1e2ebGl6juw24bS0M2WkvIVNQSKiWX8d%2BtpmbvrtwqMvz2tZTRmBGLzUe6Y3wu1erznAC0fJtBzfla2OI0CfxmMfIKY7WjPMs%2FK8hKEc89csXSaGx5IEyf4Kq2tmdQYg5nJ4BjyJNv%2Fwb0HwbdvTlvFtDct6YlRd0MTodZnzS3AYiRO2sDpowOkC3MOuez8kGOqUBqL9NGkklPPGDl1p1aIOjQsLxTAOxzAF2SiHy48dY0Y8GEFPgxIvkMm96fd%2FDAEi5J%2BC3dXo%2BPFeD5zyUc96FOTsElI7VNQ%2Fs%2BzLXCNgpqcnYCE1WDGMyl4pydFn7MUBiBIBa3xWNP5jMmiyD5HoiPYcdtL3D9ArVek6IW2E%2FWTk%2FtzAJmORuzLO%2B46JoaDdX2c1xoJolzlMxnhQ%2Bmo8j9x5FxXn%2B&X-Amz-Signature=1304266663e0117a74f06040074a8a50241010f951484b941197b170ab77722b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

