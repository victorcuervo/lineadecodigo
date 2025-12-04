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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAWB4SY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDadWxLygksK4oYO4hy%2F5nF8AAyX26GL92%2FgIWzVL9L6wIhAOGtsisif0%2BCb1Y7dljM01ydSl3%2Fm8KK8MR93CTkDHvBKv8DCEcQABoMNjM3NDIzMTgzODA1IgxTNz4ejPWMDR5Iqqoq3APqDDk6AsomH9MlsCi0dU%2Bjw88xkYTWCMeU9JJkTRHO24xL2%2Bvcfjd7rObFIGyZVo7FpnpvSWUo1fOzmjlKX%2F%2BWNwbTuKvCHSIj9%2F%2FkJ%2Fu220XAsi0eBTM1l4ZFzIYrStS2fEBz67QAz5UXsuJqLbOHdKEtLhiiHssh4XHEKmx4kTVlt%2Fy0PC%2FAHJOWhI%2FFMBaZOyV7D0D5XnlE415jd1c6Dq7FJfqvqHH5xKSayUHHXNWTn%2BQVmAIpWGnpkipq2GZsspNp%2BFQ23%2F3zVC3SVrQBtHWiWihjkAcXFVrshxGbwUR7EgDcAtiAACitEOt0MgF42SCU54aijZkaMa%2BF%2Fj3MCDENlQCrmX6LcmrvVC1BxfuGttEgcsrh6%2FISGXVxZE81mqyjoOe3jlQVZI1fK6L3eAG%2Fu4YGRGnJaBKttDs53GBTVcmB3e1LXZqZYE0GwOUVy6fbSIxfMsqT3Ff51yYTqiAs6mGZszrjlHIQaA84pZ3xTLRBDoLMTCM3L%2FYEoyHBdAPC5JxJtpCj3T%2F6%2BpmNlW9RtiXAT4KBe5V0yjuOTGc4omO9%2B0WH%2FbpmuXjHaEnfu4Yw03CZZkmKx6zF8F0OlRQ9dE5%2FuUufAa23oOIiYW6YRYfu4i52LXdqSzDPoMbJBjqkAQ2iWMqko5bYRufxS6Wm5RWK%2BL7P5rOhNSarL7LbtpyiyBWg2PyCSddozJbdPRTz%2F1lcQsVNABxcdPCpVoiwucIhvKHO1F5Iy%2BphpHun1vqzhmEAzFnR2dKIlfae%2Fvxsrq7Y%2FVG5oVF9tT1GwR0w%2FfQLhEpc4whKYqhwsvrvyUqcr1iVDrSJ5vBW1n6eVl03vUDn2%2FTquLv6N4nbGqvKtV8aFL57&X-Amz-Signature=7c9e881600cc45bcbef57e1b5e51bf9f29fa267044d92491cc12591c941d2030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

