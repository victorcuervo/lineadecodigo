---
title: Cambiar atributos de imágenes en WordPress
description: "Uso de los hooks que nos ofrece WordPress, como the_content o get_image_tag_class, para poder cambiar atributos de imágenes en WordPress."
lastUpdated: 2025-02-16
slug: /wordpress/cambiar-atributos-de-imagenes-en-wordpress/
author: victor_cuervo
---

Volvemos a escribir algún artículo sobre la [plataforma WordPress](https://lineadecodigo.com/categoria/wordpress/), el [sistema de gestión de contenidos (CMS)](https://arquitectoit.com/cms/que-es-un-cms/) más utilizado en Internet. En este caso vamos a ver cómo podemos cambiar atributos de imágenes en [WordPress](https://lineadecodigo.com/categoria/wordpress/). En concreto, vamos a ver cómo podemos modificar su atributo class, para poder añadir una clase específica a todas las imágenes que haya en los contenidos de los posts de nuestro [CMS](https://arquitectoit.com/cms/que-es-un-cms/).


### ¿Qué queremos a la hora de cambiar atributos de imágenes en WordPress?


Si avanzamos un poco más vamos a ver el problema al que nos enfrentamos. El hecho en cuestión es que queremos que todas las imágenes de nuestro blog se vean de forma responsive o adaptativas.


> El [diseño responsive o diseño adaptativo](https://arquitectoit.com/front/layout-adaptable-en-disenos-sensibles/) es una técnica de diseño web que busca que las páginas se visualicen correctamente en diferentes dispositivos y tamaños de pantalla. Esto significa que los elementos de la página, incluidas las imágenes, se ajustan automáticamente para proporcionar una experiencia óptima al usuario, ya sea que esté utilizando un móvil, una tablet o un ordenador de escritorio.


Para esto nos hemos apoyado en el [framework Bootstrap](https://manualweb.net/bootstrap/) que nos ofrece la clase `img-fluig`, la cual, aplicada a un elemento [`img`](https://www.w3api.com/HTML/title/) de [HTML](https://www.manualweb.net/html/) dentro de su atributo [`class`](https://www.w3api.com/HTML/class/) convierte automáticamente la imagen en responsive.


Aunque pensemos que esto lo podemos hacer directamente en el editor visual de [WordPress](https://lineadecodigo.com/categoria/wordpress/) tenemos que saber que la estructura que nos ofrece [WordPress](https://lineadecodigo.com/categoria/wordpress/) cuando vuelca las imágenes es mediante el nuevo elemento de [HTML5](https://www.manualweb.net/html5/) llamado [`figure`](https://www.w3api.com/HTML/figure/). Por lo que los valores del atributo [`class`](https://www.w3api.com/HTML/class/) se aplican al elemento [`figure`](https://www.w3api.com/HTML/figure/) en vez de al elemento [`img`](https://www.w3api.com/HTML/title/).


Por lo tanto vamos a recurrir al uso del tema de [WordPress](https://lineadecodigo.com/categoria/wordpress/) y a sus hooks para poder modificar de forma general el comportamiento.


### Alternativa get_image_tag_class


A la hora de empezar a codificar y conseguir cambiar atributos de imágenes en [WordPress](https://lineadecodigo.com/categoria/wordpress/), una de las alternativas sería utilizar el hook `get_image_tag_class`. Si echamos un vistazo a la sintaxis de `get_image_tag_class` vemos lo siguiente:


```php
apply_filters( ‘get_image_tag_class’, string $class, int $id, string $align, string|int[] $size )
```


Por lo que podemos modificar el valor del atributo [`class`](https://www.w3api.com/HTML/class/) dándole un nuevo valor. De esta manera, el [código en PHP](https://lineadecodigo.com/categoria/php/) nos quedaría de la siguiente forma:


```php
function example_add_img_class( $class ) {	
	return $class . ' img-fluid';	
}

add_filter( 'get_image_tag_class', 'example_add_img_class' );
```


Lo que hacemos es añadir a las clases existentes, la clase `img-fluid`.


Si bien, el problema que tenemos con este hook es que no funciona con las imágenes que tengamos ya insertadas en los diferentes post del blog. Por lo que tenemos que buscar una alternativa diferente si queremos cambiar atributos de imágenes en [WordPress](https://lineadecodigo.com/categoria/wordpress/).


### Utilizando el hook the_content


Es por ello que vamos a recurrir al hook `the_content` para poder cambiar atributos de imágenes en [WordPress](https://lineadecodigo.com/categoria/wordpress/). En este caso, revisando la sintaxis, vemos que podemos reemplazar el contenido de una página, pero TODO el contenido.


```php
apply_filters( ‘the_content’, string $content )
```


Por lo que nos tocará trabajar sobre dicho contenido y buscar aquellos sitios dónde haya imágenes para poder modificar su atributo [`class`](https://www.w3api.com/HTML/class/). Quedándonos el siguiente código:


```php
function add_img_fluid_class($content) {
	// Modificar el contenido
	return $content;
}

add_filter('the_content', 'add_img_fluid_class');
```


### Utilizando expresiones regulares sobre el contenido


Ahora nos vamos a apoyar en expresiones regulares mediante la función [`preg_replace()`](https://www.w3api.com/PHP/preg_replace/). La función [`preg_replace()`](https://www.w3api.com/PHP/preg_replace/) tiene la siguiente sintáxis:


```php
preg_replace(
    string|array $pattern,
    string|array $replacement,
    string|array $subject,
    int $limit = -1,
    int &$count = null
): string|array|null
```


Dónde podemos ver que el primer parámetro es el patrón de búsqueda, la segunda es el contenido por el que vamos a sustituir el patrón y el tercero el contenido sobre el que aplicamos el patrón de búsqueda.


Por lo que vamos a utilizar 3 patrones:

- **/<img(.*?)class="(.*?)"/** el cual nos permite buscar elementos [`img`](https://www.w3api.com/HTML/title/) dónde el atributo [`class`](https://www.w3api.com/HTML/class/) vaya entre comillas dobles.
- **/<img(.*?)class=\'(.*?)\'/** el cual nos permite buscar elementos [`img`](https://www.w3api.com/HTML/title/) dónde el atributo [`class`](https://www.w3api.com/HTML/class/) vaya entre comillas simples.
- **/<img((?!class=)[^>])+>/** para aquellas imágenes que no tienen un atributo [`class`](https://www.w3api.com/HTML/class/) y por lo tanto hay que crearlo.

Así que aplicamos estos tres patrones de la siguiente forma:


```php
	
function add_img_fluid_class($content) {
	$content = preg_replace('/<img(.*?)class="(.*?)"/', '<img$1class="$2 img-fluid"', $content);
	$content = preg_replace('/<img(.*?)class=\'(.*?)\'/', '<img$1class=\'$2 img-fluid\'', $content);
	$content = preg_replace('/<img((?!class=)[^>])+>/', '<img class="img-fluid"$1>', $content);
	return $content;
}

add_filter('the_content', 'add_img_fluid_class');
```


Vemos que hemos añadido la clase `img-fluid` al conjunto de clases que tengan las imágenes.


Ya tendremos nuestro hook que nos permite cambiar atributos de imágenes en [WordPress](https://lineadecodigo.com/categoria/wordpress/), para, en concreto, modificar el valor del atributo [`class`](https://www.w3api.com/HTML/class/).


Esto lo podríamos hacer para cualquier otro atributo. ¿Se te ocurre alguna otra aplicación? Déjanoslo en comentarios.

