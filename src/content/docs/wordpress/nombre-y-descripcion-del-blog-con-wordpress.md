---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSTT2DD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJFMEMCIDuNYSkUJ9vbT0nJ3c%2FzTerses3BEvniylV8IsgH4Mj0Ah8tf3IV9fVrPQqOi3YD36b3tjvXxmGd5cPSCFPIdaJ6Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz0%2B%2BWFMCOKsjJsyQIq3AMYiz2OMD6RGFdzWNbp57V5RmUclJIGjVRPUUO3WH46%2FGOHwoxLSfPC1WaLrRmNr%2FOoisOozQCLF2vT6Wj9tiI6XYJPpROM8bhmQ1L6qiK6VUBklCENZVay4cXZn58bu06yKH7fLfsvDH0fQuQTj58B8LduUHDqTadpuAIqofuQpzoHaQvbgEaI6eHcWEslGGzCy%2FkhSa7EO18D6nXo3R5%2F8hvEz0AvUhj20cM5%2BfZmZ3%2Fw4f8paX1yv2R%2BfO4cejRjkQr5oCJk6Y31RLxRfuwN%2FeoeRVSeuzTp5JYiLyrdMQC6v164GBLYhBXnGSTWK3wdzYc3f%2FQd%2Fds0Hwh1l5lN6PlQ6RxRkGbrhD52%2FoshQI3OkeFf3PxKD6atzkPnH9tuLZ3gNXSiv%2BvdqJHZqh4WAK4fwVOel8vM%2Fsh7Jaeydixv5NAgqzESxvf9CWersFQWiQf2v8t6ZCW%2B2ZMLEoPnrmqC9ikDJMkduIY1OE5SpdTS46Iuk7LOkEJZ1L0lFqsLamApxXR9jKvxjnJJLF4Ff1NK2K9SN%2FVDEEj%2B75F6dSdtxJwLHSbKp2RVjeI3sm8Vz4F4J%2BzBxZEs1rPOH0pgw90Qk32nEwpEd2NCULwdXyVBHcih5LfBP%2B11djCnvcLJBjqnAWnjazJSh15Zj%2BbT39rDyOWqx%2BMWOrfpzunEezbt%2FLwFKNTfPeCHCsek%2FSSKyuhem%2BxF4BIB0mZVDIvbQWYtPs6vcFZJP0iNT5b7%2BVispmvuqATFU4AEk99%2FhpsGf1wf91S%2Bn6T3jUUcHkq%2FJ1YxOFsQVXOdowHSt5dpgw79rTx4GYEv8XxE0vK%2BaWJIQGd%2FoF0qi%2FCvvBExjQi3%2Bdn6GghCHUo1yNNS&X-Amz-Signature=d22cc315ba5add0b8f28554c32fbf63dbe4c36317e610569ad1d7e4a87b65014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

