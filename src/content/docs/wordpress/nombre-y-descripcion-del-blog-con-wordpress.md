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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB46AGAC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDXE8jsayq0VUhiBSBlPnieHzTtj4g20U4rL%2BdrpqcS%2FAIgXn9%2B87r7QIu6f8dsuVhRgIbC90P7V8Tq2S7JR5CMKrIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDsrLdUGep9%2F7hLKKyrcA2APtnEScYjXKwQBRHNbIy06a%2FEu%2BF6I0BHzZXw34Sjde5AfSxHmYtXXUrh%2B2%2Fv%2B3MsAj%2BMiTAc6TixcZalOe6IrMxPrpGxCkZnUbFdXGpfJ0LN%2BSrWk5iwTXSB8f%2FrrXTN5hs8twE0ANMsZ0IofAOEdyOZbUCcghgTO43ihJR5xiFLEgCmO%2BAPV8GJaVLU4PB4CfAc0ePVPmZuyWBx07ySejZ8Kx%2Bf4uBHMcJhY3ZIykQT75aC4CKB3A6fn136pf%2B8HRC9TU7YYeEWs0jQxCrQpK7LlKDQBaHMcEvTdFL86muZAC8nKMufbZ3ABgW5RzIJyNDglFRgyWRKUx8tP0%2FYyTlj5%2BoauwUBT1oVH3N8M7zilOoBHwsjMl4NCgv50oRqBMXEkv%2FfpMk5mKc%2Fkq4DT3IG0FEG%2FHq4mgUQMm8NnqvyqEHr5doiGzVeXnWgAvjX6POOspaky56iurKNCcT9DPCEHhQ7izhaINywrg4CP3VvpleTRTAQ4H%2FeH9mUfhk81WuWtSoCDdOMpZdEMltm7KSop1R4%2F%2F7gevzE7sDkVrIsz%2BMQQIn%2BwPBKZju3qTcwmOTnCMaeagegJ9iNvqh2UZ%2FdS740A%2BDM7WY9IK%2FS2Zgwh1%2BlZO1%2Foo5ilMK7zw8kGOqUB2xuqL9Kt4xxXpi4ackuJAdEyMTE8hYpoeEPKfIh5TBR%2Bn670W3SmkBn68rUZaGNMH%2Br1T2sCAlIzBMljkhfGZv%2FDAHsd1vNySHQAzMId1HSJ5W22nj3yjBOZ1Wo2yeqg%2Fs8jkSysayhISjM5DHprdqFuYEmnJP3PgFTV0m6YpqkNR2bvioXBE0fMI8vYyQDPOp937PINetDyyIt6BA5jrErqFH1W&X-Amz-Signature=84520405f61a92d6f140e8ced668d3a0a78a080fb231a0502c8063a37b52f691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

