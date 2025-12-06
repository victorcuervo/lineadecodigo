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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGIHF2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDseZmCcnAKre1ig7qLZUXF7KrnaPAXPWsZJkQs%2FZAy0wIgcomqJpgycxXmfPUcTM0T7sOAGHLhrMPGsMBAVkyOV%2B8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGzKyqmgD6MC2n1IzyrcAw9lMb%2BhkJlsbqlGH0On3Ow3urbwz6p6S0dKCHQt5UuRL183G8no0euFvG8L1LwSrcj%2F13%2BKDB1R9G7xVgrPATatsqSp%2FqPOlPZYrEAHEgaizUEqQgFRuwOkIcXXXZWLPsKHX4gMv0bu0yUO%2BLtaqsz%2BbRIIjuziWZqS9p7nB1GXHYALBl2%2BPn77qqAXAMxxOODVFE82J4uxY%2BLygOSydO8dMV3e90HxpG3gYWhIUuJ64Dp7SvKiTGrt7H6ALBwlNBlOeZgE3g%2FGU%2FCLe%2Bz%2BEjDpg%2B1rwnAehPgGuuj%2FyxX%2FJg%2Fjd4dgKp%2FckNZnKmNJwzDsVBxH7Ou0JgEZKWgMuO4c0dHrlGL8xCe7JkvSoEEzDUojNXY85utQX8Vlj8DhQteHEMpdG1q8gcMMG3r0zDCwuKVHae%2BcUaZAoXHCBj7LyPFEQeFwS26JkAzzVr%2FNi0Qz6HyAB0Nezgb9Y57%2BDzztqPXiJOu52WoV3j1vayIw9DsDu62lsX8a%2BgFLSeKwSB3GS3N75nWn3uJoTo%2F8%2B48CLl%2BaPwt0FkwzrRyiWT8DFcKTvv5%2BO9SVJShQkLm2LPCJcltOALSwILLG%2FHPfV4L%2FjOGnya6nul6PwVYSdrfif19NkAbtR0VSrX4qMKu8z8kGOqUBObt0V9LhAzMO0FZLuZYApEvyUON4YaS%2Fcv%2Fu58BQ2gSPRilXYd%2B%2BzTueyGWZgKhr6bs5zVg%2BkIDCPH%2FdHZ3tWz8KFrIPARBt2kf32ogzx3tTxmNnvrzBy7OGM4EBHoKBMBY%2Fjbe8CuFWpfuO3CnpX9rsBEeFMttxbj14Riq%2Bw3KcvT1O%2B3sY%2FCrdW0kaPaZE9h7jgSlakXL62YvRJtBPQbcnmECB&X-Amz-Signature=a12106fdb8c9d1cc38e066bd40a2747bfd072a1827fa8d1984df788636e8577a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

