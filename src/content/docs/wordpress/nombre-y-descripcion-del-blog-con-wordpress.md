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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXMDVOD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDiMpMWjUkYHQc5lYYQ%2Bn88Dfe6Lv%2BdgADoJxgIj1mumAiEAxBwbq9i%2BL%2FSrdSdV89XBPmcLRs9McqOShYdq8MY0uR8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOyMJvRiR4m4K57hvyrcA9IVOWnnE21aUcxRLl5nL4o19cZGz2AvKJ0Snywf9k5%2FdyBXW43lPQ%2BmFUmrmZtVJ%2FUDqPVznF0LaX%2BhBtat1EH9n4vFlT7vhD9zZV0yftDRZunalIuvMcGM0zD703VTMYOBga6KSG9QdxosplwJ0nxPGMHutQj9PkxZHxPB7ARJqEvP8Eg1eOvjcSgAKlWBt3gWH%2BegPCUEU1s7ekmbnHZVZtu04WAh7wcajYgyR4GWZ9DOcNhlB5hV6m6G4FDcyiu%2FKG34qrG9iDLEgVbpntGPiWFq%2FFTkyUH%2Ba4rUsQsAxPHWXuFmS%2B1CzpNSjTqMWECAFzMBNqnLz8RuuKgdhVdu25el7Oe52M062gWBK3wJcar3a3PQ1gYhYZ5K0%2BBRde3CkQZ7eNrqv6vYjJlBv1%2BNS4lALGPZDlrdUvU%2FBsGU5oQ64RgdBk7aw1Nc%2BF8nZjLirBC03Ljqv%2Fpw5pxm5JkQxdiIc7NCD4kbr7VMi%2F%2BVV5KAB%2FlE1CUnK9ai9exMph7kgXgcY0McZbi8%2FDy9tsMbJNHT34FelREAav6RiyJ%2BQQBkoRR3K4GPuyjL1B5REWYGMN59zTfgiYpu2S%2F5jOROZyPcQg69zljb%2BcSbtokmqToav8gsk0Zd4fTFMOCHxckGOqUB337DnlL0xkg%2B%2B%2BRQMm4MS%2BVRYwJM%2BGDUPpOQylHPIGVMNcSDfXJbvDus4M9PlRMsdeneRID4RBvFrsKiKQJJoEe0YRpkK%2FTJOoVPbATCezBl%2B6l%2FIwBLUZt8vjo6Mc0qY%2FbMKXNYulplnIyCXOMpRkA8PLKFkCVz5LSEYdAHL1gTIRVDzv0YDCIJnPtglInMQc%2BF44DtCVAOoDlFbCbpwavEsSEd&X-Amz-Signature=50630f4d7101036b6f50ed431913020bd3d45ecc15ef377d1995c8a2a6d357e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

