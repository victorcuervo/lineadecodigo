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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAD6RWM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBJ8fZ58ZhXB4QRuBPmoU6GueGiGQ%2FrijZ9ma7HyyYo4AiBlj4hSAaofkfbMOcs%2B0saYEhmOYdCM%2FkTSHY1WBuHXYCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMgCreR7%2B5bimV7MzJKtwDKkuPi6b6OCFCnAXds9BcUAVC9Pkt9teFUEYu2nc8nFe5zjmM1mqCy1bVC3l3orJPqlm1%2F5TrHE9TXvoE6eGJxjnDhRJ1tOJvPJwD2KtC5VqM3DmRjiU4KIVpI3i0xCb7v8q%2B3m3QunMGaczZiDF%2BCrZunuLzzLbcSPVzTfjadQyrSwMQiUBxkhfrQHRMSaMWH9Xzbc2ZHhJMlxaLr5KR3cV2tkpbjVoapJhol04vpMr9X1kY74DWed5e2i1fwv5Jgl3qUypTiMwwH4rjazljV0oX8BAg%2FQDz1UHT469UwbKNNk3n774E%2FL5xTm9ZQHwZ%2Be4DXjHCrAMPazScTHVPgav92EFV8wBTDyzba5Z21g5q5CTBPfQaWgTaBBbqbeTNmcO9zcar%2FwagvVvJIeu%2Bh1yD9YA3od01x5lR2BHoT%2FeOGuk4Q%2FYGjSkbfRj4pctSdXJdlhMB%2FjNZzjZ5hnpejpR175KQR%2Ffz29RBffwpQSecU0UFJZ2YUGURwU66ii%2Bd%2Bn4KS7kYmtD%2FhLvhD6oOfCp7XBq8SqbpEO1MT0KPSb3EaC8koH%2BvQsdS4tO69pfFwk0b0PxfxvqLjzLB2pViaKlOpyV5kfmoRCTAqmnooO6UTCqMfmvGvjzpzDswo67EyQY6pgGorZTx9gBLCBcjtUNcstzfXXL2eRLy7VBx%2BaloUKklOvapkcRKPo%2F1OcbaayJ%2B%2BtEvfAcYHlnJPcG5eSv%2Fl2NvzVJN%2B2M0X23JBKSE1Cs1OLwPWmDdIJE1J4%2Fhht4T%2FyyQDxQLxZ4O0Qg19t066%2BLtEmVMa6qO5d4zoVyKh50SJFAJR8%2FiaDKeCAxzgXpxTVj%2FMRGHHZqn8KxbqgWV7HJhSLkL8RQV&X-Amz-Signature=0fcf260d2675566aec02d083c3db0b661d3131cecc777d580e89e46189120863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

