---
title: Obtener el título en WordPress
description: "Cómo manejar la función wp_title para obtener el título en WordPress de cualquier contenido y volcarlo sobre el elemento title de la página web."
lastupdates: 2023-09-17
author: victor_cuervo
---

Una de las cosas que haremos cuando estemos construyendo un tema será obtener el título en [WordPress](https://lineadecodigo.com/categoria/wordpress/) de la entrada o página que estemos presentando.


### Descripción de la función wp_title()


Para poder obtener el título en [WordPress](https://lineadecodigo.com/categoria/wordpress/) vamos apoyarnos en la función:


```php
wp_title();
```


Antes de utilizar la función `wp_title()` deberemos de conocer las posibilidades que nos ofrece. Y es que esta función cuenta con 3 parámetros:


```php
wp_title($separador,$mostrar,$posicion);
```


Si los vemos en detalle:

- `$separador`, es el carácter o símbolo que utilizaremos para separar el título. Este podrá ir antes o después del título atendiendo al valor que tenga el parámetro `$posicion`.
- `$mostrar`, es un valor booleano en el cual indicaremos que el contenido se muestre (si utilizamos un true) o si queremos utilizar el contenido como parámetro de una función (si utilizamos false).
- `$posicion`, indica la posición en la que que queremos poner el separador del título. Los valores pueden ser LEFT o RIGHT.

### Uso de la función wp_title() para obtener el título en WordPress


De esta forma podemos obtener el título en [WordPress](https://lineadecodigo.com/categoria/wordpress/) de la siguiente forma:


```php
wp_title('|',true,RIGHT);
```


Así conseguiremos que se muestre el título del contenido seguido del símbolo '|'. Si el contenido se llama 'Mi Página' visualizaremos lo siguiente:


```text
Mi Página|
```


Y es que podemos concatenar el título del contenido con otra información, por ejemplo [con el nombre o descripción del blog](http://lineadecodigo.com/wordpress/nombre-y-descripcion-del-blog-con-wordpress/).


Así tendríamos el siguiente código:


```php
wp_title('|',true,RIGHT);
bloginfo('name');
```


Lo que nos visualizaría por pantalla será:


```text
Mi Página|Línea de Código
```


El uso de esta función para obtener el título en [WordPress](http://www.manualweb.net/wordpress/) lo encontraremos principalmente en el archivo **header.php** al generar el elemento [`title`](https://w3api.com/HTML/title-elemento/), aunque podemos utilizarlo dónde queramos:


```php
<title>wp_title('|',true,RIGHT);bloginfo('name');</title>
```


Lógicamente el título puede variar atendiendo a muchos criterios: si queremos personalizar cuando sea la página de 404, o cuando sea una entrada el contenido o cuando sea una página,... Podremos complicar la generación del título lo que queramos.


Para estos casos se puede optar, y parece lo más coherente por añadir un filtro sobre la función `wp_title()` y que funcione como nosotros queramos:


```php
add_filter( 'wp_title', 'titulo_personalizado', 10, 2 );
```


Pero esto será objeto de otro artículo. De momento, lo sencillo en este artículo, era saber cómo podemos obtener el título en [WordPress](https://lineadecodigo.com/categoria/wordpress/) e incrustarlo dentro de nuestros elementos [`title`](https://w3api.com/HTML/title-elemento/) en una página web.

