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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K25MNT2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUemzN0cIWw3XVl2VEWZVaNp8NbxypNv5L8kMSAN03GAiEAgRqmxtNLkAXIMGcPmAHOTuCnWe8qenR6KAhU89qahEQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDK7whJm5%2FWjyQxzy1ircAzjuRMsS%2B7l7Z7zpQcx01US%2FkDrdJ3iOUkkmWn6bhGyVItuKpxRGK8Zhy7ujq1qzoN%2Bm2f0VEE4ziTniO1py4DOZy2NxSfzwUL4ZmgQNtEiLa8VCMQmW6IM7GiETZVA%2BniZlwowsy1y7he7WD%2BQ1dA%2BMWn%2FGySFwk9qyHrPwQYLo5LbN1x95pGxzJUhX5rSDrMU0JWHUDdfMIc0rAQns%2F01Lr3AvI3XpQph7MMYcd8Nwy1A57CWumJ3sT9j1Ftn5CHEip3X9IfIbyHfbqgIFhBQRTT5%2BlghahXeLo3QwLP3hMJLMYGEHX461eGCEeoa127SFb663lpjBnjMTSbmEjTgrXTYVxIHqkEVqyICE7Dv%2FWhPsxA0gZ8eeUyMJ3FoYwDW3h6OQoAeluQ6UdIMYSHt6SloitbJQbi67oKBH0FTTZ%2BSyPl%2BjcNXu8HsfXhCU3Pbb9QSygmf4u3xCu4WUo0Uh7wdi%2BtaOjXiy18O5JzW3PzcJhmGima%2Ftfmyg2GKWIiscZDd9nMj7psm%2BlDDM7T1teOIl67hJnvXnHDE%2Bfe3R%2BelzC%2B5Q%2BwNINMqQg3t8ALuBy0xQpxY6A%2Fx%2FgMQQEtA%2F5fgLCCqXQzH5bGYc95fetSEULOhiBWBgHfLiMLHuzMkGOqUBkj9kIzJG421FoH%2FV3%2Fia3pLcUEUQIvkL6ipCL%2FmINF%2FqLH3aKpUpgKRmbM5Dzrt1dbFTQxTt%2BDaJhzys4HFWhlb%2BNfwGgwPZqrDFsnZUlx%2BCYjhIaM%2FDqHpJ3kxJTfl10ughABxLWfZ13uTEIEXb5Zo1O1M%2FjYlx9d2vuYUZB%2BflxlDdrf9oucH78oBtUoMUINdnpWpHchYW0BCT0n9HKcZkp48I&X-Amz-Signature=5380d78c97ef698137c28bfc966a9d67210133acc545883deaf2584860256cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

