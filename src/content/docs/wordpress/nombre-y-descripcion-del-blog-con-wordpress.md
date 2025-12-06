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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZASRI6S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUa6oC0Z9AI4aYo7WdKYg%2BDO7aI%2Br8mHVR17YX0f3H%2BAiEAr0f3gwXg2bIAo2KFuTVbCkuPioEAd4FMK8t3z6rsxx4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFEangnFsWvyZXLJiyrcA3P4anx2jhGFUb657OZ2Wijg2knoLxdGWSWy79agRu1SAgmt4BO0aezK2A2FvgmdlgmQDImAKVbyJJHWA6u8s6IKnR%2BWSMUQI1DrONHgsnTzzPiBQkDwrWEMBaflsfJWzVYQM5mF1dbuELBdrARAm2sSpNfv%2BbigIVkarXhxUk6gC7WlwbeBVl6TerFDSRFL2%2B4cN%2BTEuOEdqaJcgDRzHXaWzp%2Bs1m93O9X7cCCG%2FU0%2Bqf7HBmt1IQBZq4NVhnS8hZZY9nSl74rWkYg6%2FfJoegiPPRU6uCQSJ6hE%2FJf%2BaydtOMdjeM4ypy%2FDL%2BCrcWpjxTdt3%2BN2tjUIZf8W0c9mTqfCs2Vn%2BYTB%2BcQejRuoszwm0hKEwCDnX0mKNIO1ZjHkJpfmG0uie1Wyr%2FiT1xkZg%2F8KiqP%2Bo9%2Bz80RjXiCG%2BKkSEi4%2FaJkbPL8x7ucTz1niNn6WszLele6f0Vmr0F0NSUU6zgzVjuMdpc0NuAHHHBkjhpswV7rRCBbCB2Q6SJ8mBgjktKK1jmG8eZx0bWGoL5vGiY4B5elaSItUyJoC4KjFf0h22dVy7m%2F7ODVBw7asb2xM1ycMkkUJcPRUHuhC%2BxCBx%2BxtDZLVZq6Bv6MCIjEMlYwaV85hYxRIC0udMOKez8kGOqUBpJ38%2Fi5NtsOs%2FUj3hxqS%2B%2FJPU5b3%2B3azL%2F59nMvR7VdMGWLYTLd%2BluwWk%2Fbmmk%2FmmoJITwgzIAKG4egA%2Bm4FVZY7gYAWVjxBH3srLtZu0E5GpAbFixOrqpL348%2F%2FgTNCdGNSN8l51i3jsCNi9leM18LUiPG284dbJR9Dsyo1HkTxLOCi2aFNBq4DVQ3ijSZntauaBQbVsk0r1G4b1yXucSoGMtao&X-Amz-Signature=91576800f065f99852bd6d6d3b5adf13a57247918b15bc5d707023454765358a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

