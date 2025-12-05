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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EU2L7V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrZ0TMwTbiMboZ3St6d8eRtIegIPek0R6qrixAzlRR%2BAiEApsCKvnyh9QL6QJj90VFV%2BqF%2BdkN6c9ndJOY8hCti%2FzUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDECrj0TqBMzi2t%2BZ3CrcAyiq6SncKcd9WT7GqjVpYYwlLHHdlS1nDdsT0mbrPFWZrUsAWoTzD1%2BmDyccgqlGhjohB88tribGWc08U91ghtVYa5716VrJ5NUHW05RoM%2B6zQSoEGHGs1MOLNL2cr0K6AtK7Cx2WcQcOpMc1TE2qiQzKOoIG8LTaYO7PIxCvumnsBWacjFncYc0GnNsmfxyZEncP%2F%2FWoQnJrgZB6BoXMDrCAlbtoKmtWmzczUUGN1ydns9%2BX%2F2LfeJT2%2ByD5u4pl%2FgV3847LRM4vJfVjd%2FxFx9v2a2XquRU3PK0vuBe048So%2FXyh4v2fDHfuCMy9BODumTADCPLJqAAwSOZoaSm0Yowj3D5DWJiXf76YAOBQ95LDmxpqLKyisNulgB5wAPESLG4JeiwD2gfrHxJmnCwT8ox7fq9Y5wBJL0xv7dPURyaJfqscgwjUPyVZPSMmNxFUZIKWq7Us5QmrxSklk5SSL8awY%2Bgf%2BQUr9T%2FW%2FLXzOm43%2FoUSRIYLiCxo3fdH3I1EEQMGg9kVCifKrIs8sROCtS1%2ByaRb5B%2F5%2FzBV9TdaNNLGZTIkvlDPkO55MCFKev7u%2BLST73oGGstCm1qv%2F4Yv3RcIjN1TIMn6Z7RuEa0jnfyIK0pEuFCTErQIovDMMqyyckGOqUB82G693cLgOsdaWDOh%2FSIVQXjobc20A1xDKWvB2j%2BqH%2FrqSSrhyr6kK8NThQjbAAN%2F%2FGX1waKg9jOWOenprNQtgwPIcYM4aDBlnQKIgLPgC%2B7tcUXyR8DOovb8dF4CUX6SDcLhR%2FXJB6kJEOi9R3OG5Wtf0KjxtEjKxm%2BliC3lXxdQwJvnMfqezS6rd5XqsUun8ZH1Yu8hUQzG31SKkhIvm%2B1lNkF&X-Amz-Signature=d8ee72bc7fc6665746cd61e9f2cfd048df638da7ba3623c6a75fbcdb6b8eab96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

