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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERO5DUC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGnSexnwdSjpxufka%2Ftm8HGzIShN6mdWXfuYHE2jI18wIgBg7TH9YITJHLjZUEJl6wYjzFSOnwqYWLER%2FIlOLTKxMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUu4q2EL3UC%2FP%2Bl9yrcA286YDCgBPTQwomScxomNqcVjn%2FNimfgUgexXKnMh7bVz%2BUoBcnS%2Bjgwmph10aDx%2FERNydnW5Vgbz7kr4XwyEk25zWix2iarZYL61qlMrCquY8OYs9o4AWfjHWzoRC%2F3cSdfsDM3fpTnOwN7gf2X%2Bf%2Bioqj8CM2L2%2Bm0FRz%2BOmn5pKjelCXKACsOVFwYAVstb3a929y5K%2BLkiWdCrgeU6wMBCJD%2FplZRPP%2BGf2EYZF8iwd7OcsZ2aZTFePBbXO1CE7J4bJpyRklh6Ccm0G33%2BoZNXeuidlG7qVQDjRVMZK6522ry5NOz12dzgkKoTSeM%2BQPOjDa%2B%2BhTxGjTcVk9%2BghWYEpYVFYaeQkVrax0nJ2UJso%2BhKA8WELo0WcK%2F%2B%2BmTyT0pJatxzWP9XG%2Fi3DXA4W%2B0soVMrk6j0rDzrV2%2B5CaMOxeiIu3al%2FtPgFa0COdMTG%2FwOmO%2BjQ9JEtrb8zjdFWh1fdQcA8KOCkaw2muwiYM4tTymvkPOhK%2Fg6nGokP4zvFw7gBV7auGeipN%2F9udUgjMMu8BfR%2F7kbgTOcF63uMhJgseWK5IFZ%2FWuZusY6OnBR%2BVbIVfzTIaoDk9Y3OIB6dVTOUhFcSwSE8DkTpVoNY75YUyZCiEoeaNAlJpzMLzrz8kGOqUBXs6IHArxqx7%2BAQZ5UEb1li5ZiBqomlJtnKS%2FPswr7lGU8VhMdEN97kqp%2F3x0%2FFVFzBNuLJtbMj%2F8t79Eh3ihTHGfv53mm2ueha4kegTqoS2CX3zRaSu5ZBIPhf69fIafCmvbt%2By7I2zaUsvu4bfcijGZEoEd7uOt%2FbAqda60nvrFihSuwO8h%2BfK9lDYlH5SRd1L%2BZGmfXRVl1d9K7k8PxUGj9E7d&X-Amz-Signature=eac44ab52bca5fcb559d4907fbd874772089eb4a54b94311b3878f70cbb8196c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

