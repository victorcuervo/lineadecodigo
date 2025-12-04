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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQBBVHM4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEYQB3pdtgs5XL2fwUYnQI5szxyFwQM4U7HRBn8bhK06AiEAhkr2ROKMQpk88oJDulntZGKfTVMYJ3H14j7gRvJPjM0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOhPP4YZG9T%2BSiZlUyrcA3bXOu5KWW0WIW38V%2BzoERwdUm%2B%2BN6hVzAiICey2ryVS2FEw5w8snjDbF0Fur90SjUQbxsXOrdgN7sGzljEwIA%2Fm6E9E4NjFoX9nUq%2BHuf3YG3MVVfHRawhmQzFJnc8%2Bsl43ypzMF2%2BWAThBRb2c31aibmVqcfWOAzPr%2BKimATq7cULRtyXYDT%2FZeTHi%2F3owctbTIdeYK%2F2aQs6SGdbFIVVwedHir3mUeEM%2BDSXBIcWRyYaMhLqfg1ElMepj2%2FbHBDVFkYiqQeH4QR%2B%2FAHSYnkJ9i%2F2AmPW1aOpc13a85FhUtMMc2hIasYHZ4P2fFflMps%2FvYkX34eu1MSVC%2B79X0RUG4oVqf%2FqpqV5cwOUoy8ofrbRGmKYTES6I5VfusZ0qe6KwPKad%2BDxIueld%2Buph7uPPr71DcjX%2BLwsGB32%2B9A2AbQOFYcTvB7pMsUYdK1OPuyqz54%2FqgLURVIyPue4oXNljJPem%2BwWvUJPGUBfwQWdlbL686uvvBf%2Byq9JvBVpokIm%2BBCjRNYZaHHKlnpziBL1fVvGzNmyuOWelRhgy7RGf1o1faHNFOY1JM5RFguEGgoZDI%2Fl2SaPsDDpkzftijNTzGt%2FsFeVmmZYT5Jmqc9STEc%2BZWDfCN87at%2BGoMPaQxMkGOqUBGaCihV2vFDQqhehlE8HWJ91y2lx5ks5l5nT0lsCByHOfMW7JR3Xr3aDuqNnTpH6Nf5hIL5AUPIUQVmpOwqvIOptTuPlxrJhp6aN3IdZx4iMO2zcihh%2BPLqbiVj2GkfELGgoWJVE5%2BQq1UE0FZq03GcX0b%2FxdyjUVAKif2CxIO6uaRotDzVTae%2Fsw4%2BqcJp3aB58dNpRT3zQjqn124c4O6g0UM0ia&X-Amz-Signature=56a8382fae916da9e12ec7ccd0d44acb3dd24c1a211ce99f4ed21bb54893fcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

