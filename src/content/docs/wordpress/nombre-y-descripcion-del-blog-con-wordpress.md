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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTDG2FSM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE4mB2b%2BK%2BayAK4OfT7eKz6R%2BqX797ap4JuL7OC2bAQqAiBtiM%2BVmCdNxjb%2FNMSMChdCCGmYczlTAkumczQzoe6pGyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMzaUD1bAc5VmaozecKtwDXk2wC2BfhN9QboNWkGLeGfmyxnESn%2B0hZSFOd5AdAdE5pvVm2tbfN2KyxJRWVA55QPIkMRpsly9bQk0mNG0HkYOOk8REvmrzbb%2BO3Fsq26V7wk%2FNk4as32iW3BZKO8bIuj3V%2BsFIntDQ%2Bl%2FqLzn1UbSjOAg%2F%2FP%2BUOg1r%2FHFKIOhaDVV%2BQ9vUXSr%2ByoE%2BBo6%2FJQtH5ylAraL%2FfyrkT%2Fk9s6UNVFZOe05XET%2FSPrFbFktAxJ0k6I%2FYiPDQGFfCCNRk1JuAMo9xJRh31ywt227pcXkB6IsIwa9QuTHBhZ9%2FLlCVRib%2ByaMIiYrNu60rB88tU%2FHpl9VgXSug%2BSIN6at8DbqoyYhBaapFeNAGrDgtKpwr4gJi1XHONinxYYesQimuGfcWdMoLQlpUHqyZx0KAeAxHs4i2REJgNCGdMr4ZA8BM1pftfDM0tyqQDdfDyJlOtX26xZyLQGwBoC%2BlXDhzlp0zyVYIk8gL0vOTQf3YLkrl23Uhvp7WYyEDUZu1X05%2FpAI0A9OTeID0MxbxWC4Ns7OtieLCC4lYBj7s2f5lK6T97EIUE5KwDhQZeRPZdvwzt2b0npcdOZSi49RWBV0V8n0I5DATZ2L3VtpvkOxulsz5508PKKXN0T%2BRRGIwqK7EyQY6pgHuX2S0sO2aDyWLetshlcvzb5wqVAglJklan0LzF8TOpdjugIaPa443zLdRVFbRShp6eFbSH6Qv238uT7g3cUeWcjeNLdw8legmzLDP9ATTcDLJG%2BVQOp2zZAxIb1HnCxuxWJ%2FxZKzhKuSn5pMsPCCiG9hWQMO8nTeB%2FFoe%2F8nli4Q0GIfdoq%2FDbq8frEMdvDP5KBM3gqKcpDE1covTXv6KUOtYgGbQ&X-Amz-Signature=cc2855f24ed269103d9152495b4904291d29ec47f04846a47ed2ab8ddfa4ebd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

