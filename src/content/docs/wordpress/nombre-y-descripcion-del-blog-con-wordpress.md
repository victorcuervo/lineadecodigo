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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6P6QF2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDItP1MgOXr9mjAdHBa3JP%2B2CzEY2n20MH3G8w7Cm3OoAiAfkJirziJ2SvWiRJQHipJvINV3JghGXgJDXcHSkmCVGCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM0iDAQ5Ab%2BZRNLZTzKtwD%2Bz3wdhE5HUpdx%2BRKn64pCalDNRfFohODY9f2tRyxwYATe75zQJ8Ej5p8wZkZaf%2FdN2tN9h8Io3RfOOJnB9uKLJa%2BTa9Wu3u44cdwxt5pixFFRFajsjB96e1dhYwk18svFXPH%2BARhtZOTgNgItRuKJsNZqkHkqofp2dHxKgAeaQCpi9TW8Y3aeOLu7qvF02CRd%2FIZSiKQm6elGUKJMaCi4Q0aKLq1Vpw44yW3mnw%2FUto2rmRCxPs%2F4hsnw%2FR7tEo%2FDHUZQoYcBPSdj0JhIxDXbBi2qv465WyZPs5OjUYlBu0czT0dgB0DXW1cpx2HKcvHcrSetayYs8MUeqDmwSPrw7SzUOR74NEllEPDVLN%2FAd6nshBXPelycJ5dVnf8jO4IOP2Ib6syhR8FZBD0DI3ophX1AGMDL5dNLqTbZ%2FaKoYmQUZfcQ70zNGZcOUuXIUlfv0pXDDPJqewEdD6GU%2BVpfheEf10%2FETWJzIb9jcCcEroMS1r%2BhVTC7l0k%2FW5%2FRZelx6fHDV%2F4rDT%2FXBo5GWRdF65heaY5t9A39MXRhQvAqdbhm7hftke%2BsYv7eL6mU%2BJi2Zv89UVIA%2FlOtfDUk0yhG7HTdU2oSPLIXlyMERFOhyVQ7GXvL422SEijebkwytTDyQY6pgGAgxkcMLoGMYMk%2FQ48USxE0euyKEUz9De1IRqk%2B4hCAyOIWQFfaNazwKTs98Z5pNwTGD5clKn2aRfUadw0tDJGjq6jyjYTm%2BJR6QX3b3uOHXE7HKuMgYKMHU0yN7Y5L4kPtHyEAsEPVU%2B4NWkpwVZ3JiJfrZ2u39rDdjq7fE3synlZZuPaM8U%2BDwdkyKo3B6VW2bNabmCtIBcrG582PrHewPPSN2L6&X-Amz-Signature=d6f50d624d4b63196b962c6d9e8759dc3bd2fcd8538c8a1aa726e6423c604561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

