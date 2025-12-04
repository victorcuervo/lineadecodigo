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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QQKNTX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDnw6iJ0ol1ETP0d%2FRlK8ZMvk4W6jhNcdWdVlUg1gF9HgIhAPd%2FQipli5JAWUpWWwFRe5PIXV8KVPaSmfZJebpAn8aoKv8DCEMQABoMNjM3NDIzMTgzODA1Igw9eTijhKkZzOUNv1Yq3AOdDlniv2xrNbZV3vJ6aLihzCtL5tMPqFuJ1r5yunby4gz%2BOlZTFI%2BMA4vzHqqvpLvYCj2DCEuQt7ClDtEq9YhKBgDlfa3CyqUmf4%2BNXn42p0BjQ45%2FPlvThzxtBD82AuyTYl6sqCsXoX%2BrFQDqJ9H3OUXGe61VD%2F4jbiVXLcNo%2F%2B6JXDq%2FkUYQVGGn7lrmRPxKKMpA66pbBVr8ejjpe5%2Foxyip04JD9AYD6ye1ORqLR223GVRv36E%2FygtktTgd3kzZe6IMmmv%2Bg%2B%2FdFlqzSsnGo50yYdb1eLtGbznps%2BStsFannenKg70ehhlZ6RV0%2FaKC5KEvuTlX3Xdk6DE7CO7YHAKda8eBHB9QHUMZmRReF05XBgsd7N5H%2BkAnXm6TqDLupeYdJfmKQQX16Y5J8Zv%2BM23RvdayAEzogGMUlgu9prKHx23p%2FW4QAQRJbmpurdEtLlRhPc0U7kE7F3b1fcraCfol%2Ffd8XapU6rK32pdjQg%2BSN1TvXidn3YJuuLSIcLcFI3AlCCqR%2F8T%2F7KA%2FoXrCCbcx1NRXEIu2ntvfc8c59O5zTAnNxqWWDvj4WCLgjAtl0kgQcshHiZMiwdPggjdyIlXjeISEM5kIBSX6aLRtamX71m2Oy2R2olGRrjC1q8XJBjqkATi5VAr2eqMgh2RU4GMXTxWgRumsj1LdraWVXRied8YPXVvehBh8IwMGL17Z85DJ8rx2CZ0Zspc01mfAsLVLNDT%2FYFAmi7iW0lZjsjqUmd4uRL5af4emoGaMltdna23ENIaj0nZpFxAi%2Fl0wJr02AAlnO%2FYiZLzlAw5KDfurcdOBszLuTw3mmPtxLPcR5FFNtlxZrNhGDmEpkYZZT%2BtnqFJp7iHB&X-Amz-Signature=c3ed21aedceb12e2b23c8e3aeaddfa6aea39af37212eba000b5d2f6f3b54278b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

