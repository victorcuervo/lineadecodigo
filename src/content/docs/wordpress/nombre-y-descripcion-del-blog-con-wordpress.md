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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZLOWLB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqjucPTL7jQJroq9%2Fu5Gkl0E3SZgRZSZK0Rc2kGokZUwIhANE1Q8DqqPw%2FvDIluCfy%2BeApmZq0nTmpQkBSzDmtIXl5Kv8DCDYQABoMNjM3NDIzMTgzODA1Igw0iTmg4jh4IIWAtWoq3ANkLRqODndnIP8IC0lXRinrBUtKIqGpRbBqGQNMzLgvKe3OaCeURyHarX1sy4OCI4ZgygrEgDmKxBpku6vHKG6aht7G9H%2F7v97tS%2BvHFpib9cGp2XuqHRFQcrNzsvKTj0osEUBFIPOiv5wFRq4JP2yJhUjARhvbO0%2BopRE7og3KfgLimcQWkEQG1ffZKyiABgIzg3BYOn81eMXP7MhTe3RXc%2B4DT0TF%2BlJlEpmmKMbjq%2BF2fFB5MyoYZuRXLZMCMZbLyHcT6apGIB6xvvHY02%2FBW7ZaO4m9cGnbZ2uGQrZmU6zaelZrm4O8l04rd68FCU37Dit5%2Fjm8VC%2F0yPsYDuIncPD6jVUPemiQf6pTUx%2Bivk16PjJiqdguE9TKn%2Ft%2FTHKTbTif3DNe8sO%2BxQEzxsDEt6ynmfotE4hTRjZyZdmC%2FKphbh2Fm2JvlW1wUGFwkwO%2FOIYzIGIVEwsmLSCl8f9w5Oxm9Dew5SA2mMIgOhcWa6WPkn284ThZS1n4TJhqhnvDgxrJPgDUYTMMIksgfoak%2BkIJ3nu9hWyB7EWVOM%2FB%2FPaeCSZs0kTqi2PXHDN%2BL0NjZzec1uJq0Iabb2IrZ03jeFdsnBktoxc%2FdeI5sXlVk7%2BUrX%2BGB47wZ3HEQDCFvsLJBjqkAU%2Btbf9ph0OoB6BQYi%2BSbayvE5aXMfPczQ22zhbCY3Gg98Nw57YrktAozGQcL%2Ba4HKv6G51%2BjInKjA0PnIIviQ3ZEa72DiD4TASZM5YvfBuyJ8JSIoEr%2Bd%2FndxEuH%2BxVyDaZUXB8q93IDa4vvdPqJA7xAYV7D424XD4oF2txd5KLosBuUnK%2BdAkWJ1bBQx8b7%2FYUhyJGkINPjyVU2wrT5WsMrqmb&X-Amz-Signature=c11a546dedeed1662b63b083ad9e2e806488e8f87e65e015d7807045d35861bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

