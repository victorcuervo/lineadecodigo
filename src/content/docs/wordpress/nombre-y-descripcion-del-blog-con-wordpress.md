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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VICCH6UA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeSKA7HkODxwuXShttshjm%2F5uMOOR%2BRqOURJhnm4t6NAiEAmUMav0dDMCjgNZlCiJUfVLpmSCl2xRA70kJHye4zAaUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEVjtYSYhKkpHXOg4SrcAxHb%2B2MeP%2BjTKz0hZ10MqwsHgDAZAQ6nGMOLA9zxZA1Yaypicsy7SsDAVAc3UW1f6TzFmyp67pv0r6J%2BVTPgOV23Yz8DZbKDpxZRi74CakKV2Kf2Ck8Z0mjJypMHxJnz8UO7E9NFnOcdewTYQtbPmfFMLNExMpoYMIL5bOdqetZcW4FRpSr%2FEisJbIon6OSirhe5c1m8aNGf5lIjx4CxHRYuxnSxLgvcoNpK2a%2B2grSmzDE8KPWzE0M622zyWuIkYdWLHL0%2BQm1HOJuEi6jgkgi81Ez%2Fh7SJ%2BRw3WdFqg3y2A%2Fq6dJzzhl8yKt6zlQt%2FldX4qKAiEP7xfphBPkYWgYAy7OeqqwZ8ySxMSUTGE0YeAtlywVrLt%2BLN7LlKMlrqs0il%2Fs7BmqP6Zy3k4rrtx26I8TuZVGhKZQuOekItU9iSjgBdxDoEKZpSDH8ufJhE3moMsc7W4qSyUAfYETscP%2FTuKw5KgMMWeCBr3vVbwp0ZTBoRmIKBlIV6m7E7q3e37bGD2%2FYTY9dyicGxAXsQQk%2BXKIvOCde1QJU57A6OyxVjSnXgJ3L9pYIoiGmVJJapPiVltNTFn%2Fxm5%2Fq%2BagbZ%2BxdOU4rVR9T01fSKKzdTRG5GAd14x1%2FmrgbtDeEhMKzcxskGOqUBQIF8pdULXGNtuMe9pSBN4V5rHICSaNLvMI5l5SuT1bbteGeIdRN0FxlK1u53xv%2FIxelj6Pybn2rs0njfbhMG0CJdStrVjvD3yYVN94UCqDHAGQAXvXnQ7jFBu4y7zK7J9JvmdNfu6NQHsx0QTOJS9VKjwu5bZQh5vCwSTs%2Fs1wQy5%2BakINVROfgHzlVCS8iCHXXeW0QuzppLsrMoTgccGI1N7nF5&X-Amz-Signature=7540fd45cbe1b1fde232857418c196944a73f2947baa21e4f8eba9035b4b6011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

