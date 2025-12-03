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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVZNOPX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDRSi3RItfHRgcyMq14iinGi3DWY5I3axTSq86ZzH62zwIgLan%2FZFnfHjTEytkgYnNBFRbq%2FRMusuAv747cjYxUH%2F0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDELe9yLCxffaV2AJ6yrcA1AlWsw8hsi5q1c%2B%2BJqFLzV5otTTcujQssSK4vxVto657ppr03iRsvXibbAWWK9VZHVVAxoILqTmB6SBqiDD%2F8sVtcmcwSHIsnK1WN9ax2SdydfaPXkjzLkQDxN8kxVnAg8WreGG1E6xD6JfZygGzPrjpuKVbxg9OpY8Vrr%2BUVF4FSHv2jKf2rjcOH5U2UB3sAPAGbns9ifPDxWDayqxu0Q6NNlWURO5c2C%2Bs%2FW9LuLfAUZx067m05mWnmcDuXX9l%2ByMnxKJYlL20K6glSodVicBtl6mZ1at9vWEYQc44PyalYFXsZ%2Blkt7hQXJd0Um%2BiScWHTPJ7Yk5KbjqzXfcti569dq9vlLWzTLvp%2B57r0psYzMgQdqYEonY4pQyfyHbK31YVTNjDZ%2B%2BB9cYNDqG2LHsRo96jsR%2F31eRBiFuJxP%2FdFKlEhcEuyfC1H1VMtIqpCUORx8jjvl%2FefSzxIlh4%2FiwY1TOuKC9cxgAxnmbf0LgUBWveFwsXUjNa7lAen74Lwo%2FSr5KZvnwoIzN77Wan57NR%2FjK%2BCwA3WBuopqp1Hz9DB4%2BAQRAKjaEXPj4ePKfHjLjzDMKGpcpd2ZWy97t7rtM7hNMAa%2BZ6H2OyiFljVfUdsJYs25WxoMn2uzYMOi9wskGOqUBXR%2BbfZiW1Bism48tTynmui%2FTmk2%2BdFBTaSedAjWWYDnzqiMEiNuOdd8wSoOKxiql%2Bi5mbcGGlFGkg9npaj24SXj8PiLVbeHwSVoafQC%2BXLezwumwYY7DXqcsGm2QkGL7gJzt0VPq2PWhcygkW3zO%2FlWT22OpvK2gnV3reXhsm9EhEhEhN3eB8vKtABup9Q0RAayRjqMcXoHtbNnrLMBzOgE3fQu%2F&X-Amz-Signature=7ff1e7c489e91783cf5b1e9b50049a36e394653986f72dd38dff61d0fc1956b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

