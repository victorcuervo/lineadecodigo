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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YY4OL57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNuZFDYeFqm%2F%2B%2Bf60GyzOLYE0lXYE1%2Bgn0H7CtCpYp2AiEAtbT3n0GtpzrBIOKq%2F3X4MS8wyzfV%2FTfL5O81GA3QBzkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHmmo91nx2Ynb9qipyrcA34Ln9k0EFOZan5cDdXWmsg311ZsKfe4izpEFBtiqbeUdO48TrG3NH3kJylJNj1aCDJu7ATFdsy3JdMNSfhH3wMrT6X3rSjv3qZ46kWuCCRFjPbkvzetfCFdziwuQv5EEKxEjMCpbdkuTpo59ZCGYY1Pr9ir%2FNj0m3cXzMT2LVkMZyCsCIz9vB4e7ejLazbUHn976%2FQCi0mVwjsMEneErPJjBK7QxWYhgjKKEPHVpPUNu22ARD7vYk4Fz%2BZ%2F2k6SLHhLoVJVl6gOn7H4OuMJff0MsTHF%2BB1P9kHdnivg1YqGPsEvJuN9%2F%2BRT%2BtT%2BPm6S4teR4bUpZnnfpBC5d%2FJI3xqObruJPyMsZNpHcIpWQE%2BkxseRC2QYIm6BVgEUh8CFBU1Oa6DwckErCfb%2Bri4JaNSY2QzItciRjC55K2xZ0gKpc%2FNaMrvhatJXsgaCrg3Fc8Xz0tW6xJ%2BCfGHSK7X6%2F%2BzwTSZk2F7%2BA5Us%2FYZBRByJY13oDDVLHwBHxeX%2BUTWEf2holxaJQTydiiZ5gJm90N9UkYtT55ZTJr8gE11uyXAufM7GyRTbhqz8y5Xq8us7bH7DfnMbEflqu%2BjjbP8jd%2BQZkYDzlB7RQatKx7AEHI3JQSMCjPke5gHIcwrpMIu8z8kGOqUBVwAUYvl1GMEQ0e6XclEp%2FCNdQ2GkRwzK62cv4UVoLM%2Bo%2F8WTAW3Ds4eMS2j%2B0RNeVcEG%2FgHps36tNE9w9ytL%2Fp5ZkrldkKImHULqD90yXe%2B9r%2B3rJAHgdBOq6Cc01N25QH2EbZFB5eOWGHU2jrOS0R86o57Ule%2BnIikEahDlBWyk8W61bW2cDBwVfvrYq52Z5apknB0BhFdLM4CLTdj4h2kV4aA6&X-Amz-Signature=15c074660640a3074001b7617f1daca4f94c7c8f4bee8aef87d504a69c8c0f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

