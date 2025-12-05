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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH57DSOS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BRh1RGoxM7s1B59b3fLve1Er%2FQ8N%2FVPsgeo%2BtQVyKLAIgflLrivn9PE8TfbTRLPdu8Lzb%2FiW3suaMWuMWc7HdqF0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIMpu6p0%2B3Ode64tJCrcA1F8qX6xsDfTWvWDr5STWWcIpF5pvt8nR4bLAPLvQo2sCtOJiyL67cw63giJs0Mj39i8H8eCeDXK5egLFekjfADR3lMR%2BayVMPJGs7vIu7oTmah6ZWjelmCgDO1VA1WWmWHmlqNKuADijYNRvH4%2BaOQu2ZCa%2Fm%2Bh6egR3D5xeYuGkl0VUBjLbBfdra4GXSf0EbuCj6tiEIJpNSAfYWLLQomSjta3z2S6lhF42WpAs5dbudRcZ7WnMqcN1GqYtT8LKnbuOADSCcTUQ%2BEOU%2BbJ60OLR12xxH42CtEmHnMiAtNLKnXaGEJILxvalscWsoylaAGPi6qmnqOLKdQJzgVMTx%2FdsmfFQPEXC%2B5wALw%2Bl%2BhTL4j75gdPEtn6qb45PwP007yT2WadwxVqJgzEu%2F0QvuzVpGGxkoBFX%2Fxuuktw%2FMPCAfBg%2FMK2mjUATvEWB%2BHL0loppuewKUlhj7e%2FFLA8J4gs3v%2B2CxLYSTHk%2BVqHsoP%2FQbHSKBvZfPjA5NmIp2xkvWshJ2l75rPNx6O5Wy4FpV1TOUE8OBJkuFuPNQAaeZVavYHL40MzEQQGLfzHZ9%2BbhFdDjJfapRrKmFaY9vhC%2BnRxNh1w%2B%2BhPwYbZS9SNRRkrBJGcN%2B5IBf5WD8LJMO%2BMyMkGOqUB0SLW8S1Ps9CWIH9iRs6nWvJiyLTBV7PN90kzhQZ3B3Fn5w0%2BXAawbRf5CNkFBTIEdsk9Y%2BNlhaRiJKlWEIzuc6s4GlYos%2BywXg85RnkDsAdocufgQIPeqQCeoTKG%2FWDEbtc5PLDTRwDPC%2BidkhS1lT4rvm7a%2BEp4gJX%2B1PW75LyMpsAcwMne%2BGrUQcf7iFMxmq68fMtEOYajHYMY0OHVjIVva66b&X-Amz-Signature=4d3150f23cfa675e1d4e345651bd98bdb4d09ad3b907f4b8596b3b5309a0229e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

