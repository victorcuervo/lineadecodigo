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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6GIVB7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4UUar28OkoaT8ptVw7fPYv%2Bay8gMLjC%2BbXn6uMsHcVAiBN7nmvFz7ExAFK53DPDFapSCxh5ZVrQjX7ni2acu6l1ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMV4v9i4TC8gq36WkcKtwDyMJ5mjgP1POc8mqKkX83MBmmjYuyAgU8gOabiFEIEk9%2F%2FqrtTX1KgakdgzGkh2HRFgQTYDmY%2FmVj8fmRlKQkyDCUAasQ8PCGjREeD49UmEZ%2B8%2BCFw7%2BwkqvgsN0LSkqljZJTvIaIwqK4n%2BabccJiaLtOa7QuXhRszAE9UOljIlBi6XQLlsZwe8ceYmoc2WGgRMHU6OqfdlyhOZftHPzModIMOqs1L2znIR%2BzRtXKdsjAgogqmmU5tBw29BRTgbM00G%2BhuDv%2F596LAkuuLoTEabtQNbVEpGm3YW%2FdQru75%2By2yLEcvold1F8ZIZ8Y6TFQL4JnfNe%2FPk8JkpknCghc0mcy3Dsuby6ER3YMNnZ9lVyTOC6boIIkSLzGwZbUgjaeku6HAkgDBOS7VK6Y3oawHjS3GeulxW8LDQPdP8X%2FXPvfgAfnKidPK1hI1XefAbSeN5iwyb0Sc8R0JA3KBkMDKmnGHMWfsU6K4y764DR3rgUek5qM3l20g7FOvTDVILhhEr0jiYUw4VJljAEMlE9G5lPpIl9uBFrICgeTFfKNHPPeRloqNoRw%2B4kvikqxl4TZaL53sbdrV48Bxm%2Fc5TmgMD%2FKzlK%2FuAzNIo28zp00OjL%2BFxzWcmM1Y%2Blqr28wwqbQyQY6pgFgkrRvQptFF4%2F%2FeAnxHr3%2BBOd4f6Bq1EXQTb0TUW6wX8T%2FkwThsxiG2IXnUUoqinTyE6Ynp9uCU%2B%2B5ahCS8RxVeBFFLKPbZP8f1a82ChCKHxNSYUg%2FDzXYj56AR%2FP82ndPejPUntYoMq%2FW5Snw%2BFxVf4CBGoAf%2BSaBt2xFbiaGYQIK9i3PDMBOMnLIX9OPN69XqgT9%2FrBGsodwBeyWpge11j7WbWei&X-Amz-Signature=ad2b6a42a1f5d5252c9c71973b6638bf3a88ecbb66ede8e0d4da66d7bccbb294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

