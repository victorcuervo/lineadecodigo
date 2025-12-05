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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDLCJIW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh%2B4Q02hxrj174n1WEShrlcnl2HpGa8KNDKT1ACYgkpAiAZfk%2FDNJ4JKDn%2B7sEHmwpaJNP0rxA%2FBY0s3ezp8Yz3pCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMX4hN38yhcV3zkDqSKtwDIaKvh%2FblC5Y5xDysVm3GUCU3AcaP3zUUQWHfFpbffGtOWaIokyZdBDYiRuopCZydisPg9A60RUuUijRg9Sdgezs%2FpPl1%2FzAOAoYS2Rn4Pgzdt1C39IGwSj5rWAlnpPAZvFte2vYk4ICmkQYTnxoVqAwvH6OVAsIMx4cg4CRLNwspcCAts6q3PxCweZr5pGlW1YeNrig67emJ8ftT%2Bey%2FS0J3gWYekTaHeo8yoT%2FUkB5JMGsFStznjc5HgcOyQR6iPg4YbNaYUKQbNiwPZPo4p2kGA2bk1ImPzVuvVYNajH2CAce8Fcq5nPFQiimS7t0%2Bh3KBGLMWIe5D32C2T%2FXjm1hFifXMjSUSIq6W5KulfxiHkwA8yX9COwEw5Bx2zpcxkKONQuD91Y%2F%2B%2BQaoWa02fegHS0l5RjQNWAPV22aU7rPobrA%2FeRrSJdAZeVQ3Z9Iq2jnjLJKxWCqaFZeO3%2FddRKkOTZr%2FhjJiZkGi%2BgftBAm6r8kZkH%2BYdWgJnGTWnXXSdyCmm2V%2Bt39BGcUSHhe7RRFfmPOOs4mOi2U9EHI%2Bt6cYT%2F3wrTBe0P86N0tPZAD8Wp8jZrZC56k5hImvf3yg%2FWexH4ne2K9W15mJx96goOHCfW5M%2F0U6lWO5Mwkwx5DNyQY6pgGzt7DsEwgG1AySrDXaWjaHRCN0MmNeSFH5LW6MlzOIt6EutHPre7w%2FkiEHACf2lfLQzih2njYMetpKAJty6PJylHCtRsWqm%2Btnu0lnNSmZiAhlj7zSkwYdvFFkYg0d0Jg8zDdsLkVGkz1tnBFwu88gIE95bf%2FqOfjbngUUI%2BAnlMv%2FzAwZ1zXE1Smt3TjfISLot%2F8Jm9X0XiKKGQXhqgEsBn9L%2BNUs&X-Amz-Signature=52ea03aae084fba52c0c3e9d592163d8aeb4f4bea8388c5c838dcbeadcb377ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

