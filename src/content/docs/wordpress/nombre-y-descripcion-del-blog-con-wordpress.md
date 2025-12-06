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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M44TBHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHR6B9Nft6Vm5P%2BYLAsVMZQqAslJT9pZ5Jmte5X510BAiEA2pvFB2EVtwtCQrdtMIw3AREhWh9KrFBGWg4VoPC2YjUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOOsdQyta%2FJpUJM%2BLyrcA%2BChE95eX%2B%2Bcu8%2Fu4bfrpQlW%2B%2BPeRwFnhD%2F32Rc2cXVnTGK5W3XRELS3%2FgnR8v4fRdX5IpFpi3XLLvH31DHdRZrqVRcUNxDjrvnuzrsZT9wh%2FNILIA5HrdokF%2BaoTnLqm1Pb84iMnG3Qw9Rp%2BLwF0PkZPgJDsluVlE2p0kaGBIZMoaTGfjb7e%2FImbo9D%2FsbU6nNXV%2FVPxawegW%2BuZ25gDz45mcM8cCRFIlElCQwwZmltUUyRGUVgfnDke0fqxvrXWrz66vM3gvsDXNRHpeLwGIAF0tzcFHyu7Rp5JdNOlRdUyEinvItsTC66HruUS1s50%2F6RE3YGLiuxGtPvWH7ZhZ31nMp4RwdzfjN6laIGS2fP32xaG2Varm08tjBJgDRmcL5IzhVv6vQi8rhDN2zOs4CC143kWObHtEhWYvygjgkwG%2BmjLVoiR6fsEv6v4kkMgki4tRqGUjP2%2BzUubyQeVHPryhGNA8W2EOtALvWSsj2B8vgCw%2BohKV7f6I3%2B%2Bu5Gv1Z63pI0mkKYFajxsz75vddXjOdPqXNxPpursxGh0M1Hu4HjFwfRTUx9QWdiHSI%2BBA%2Fwg95tU%2BFaxEf4TyboWB8J6WeAEz%2BLd4J8f5EO5NWQKjNypUHACCT7Pz0UMKGm0MkGOqUBTevBPMxwrSGT%2FU6tMAzAzI4IIAkh%2FPNyZY2Bp80jQjp5TQpz3eP%2Bdw1uDVhqeQVt9kLSQlvAILSe%2B4QkO1RADegZpQjZpqpP3SpzqaPX4%2FywMxxHT%2BEqaijU8PSI6LoqijFBjG7dFUgvGqdzccI%2Beyg%2Fw7m3ZySul17Vlr%2B4MQLlMkjFyDutObHOg3MY47TRNF8YlzlUHucsOAYqDsvxPwWf7djQ&X-Amz-Signature=daa27cbaa0e8d9b5567a5200c0411d8238420925394232981ca4623ed1584d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

