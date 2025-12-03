---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUVJTIF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICNxrRTMzmIgsHqHWQ%2FNfEhANIKJTcfZoCxC%2F2bcttUCAiAG9f%2BVDIjBD5N2gQCHm8zGqeKIZxBHer5yCZbpWDSNSCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnNxAYWCur%2BttZw7oKtwDr7isKO9yD5NzVzcxZZjkJcKglAxmhifGCgmaIyVVdiWUOIW8u%2F38tb3sZExwTDdoz49nGwvcPIQZI6YVVMkGbzIGmUX1a0t7dWvI%2FGA1fB00RDV40GQ3cK9sos8uT6Mj4rYU3svThrVxGMiUYQwIKOyqTqhM%2BA%2FWBQcZbSxSCOZkEkALd7967R%2F%2FaWbzmEINfte%2Bw3LXyBJ7KqlrT5M41XSr%2FH4jK4OWnn2d1Zw%2FS523a4ly3hB1iLvnRwTABULp9t8KORiKsAFup127ArH3wWClhi7qPg1YBKoT340aMf%2BoTTwtoAdvbRnSzhlMwa8YNolvDKMp8KUCMSfFa1KHZgsvjzGie6LQMZz7VmHtsCBdb48wFGBlpdQzQrKQi%2BdAJ%2BIrGtl2lvKo5V6YnkFIk9D0Xsh8ktSv9od1BuoBcG2pv%2B%2FWu8eBYMxa%2BnqcpSwa9Du%2BB9MS2eV3ZcqmrQQWiNRjM9S%2FdwdKaLw6DcN5UkpBE3eS%2BvuYlYNOx0frUd11ZcyzvPO31FWEboDqEHaW3hrrbaSfqgiC3rrQ1VgZQ70P%2BdIWxaLsqJBnq6bNPePMz2HfrxmD16SGia8K2gubsD9fZjTuc1ndDAjNOkfiz3ddYHNCL9YSsMWMgvcw7ZS%2ByQY6pgGBY4%2BzKt7jDEm3ZbuQII%2BMDRzGci35SYtzGKexaUGXziwtyEmfU%2F%2BHnC9O%2FnT6rKAsccWb441G3wDzNaPpy65o78WqxIgA3b%2FJr1Rh4HXvQmT3iQcDLuT%2FrSrl7CpBKgNMCtAaUVX%2BPYcK1PtZKQCATk%2F9WlBeQarCF7al%2FnYY78s97X0RqPV0%2Bg94XIVo2PidhGHPWnRFqDMyO8vHwqUKabZn7Fts&X-Amz-Signature=1339a6e5d28e2a297d3ec0fb6b6ac3decab79d6af439c1b2a5671ab0de47697b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUVJTIF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICNxrRTMzmIgsHqHWQ%2FNfEhANIKJTcfZoCxC%2F2bcttUCAiAG9f%2BVDIjBD5N2gQCHm8zGqeKIZxBHer5yCZbpWDSNSCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnNxAYWCur%2BttZw7oKtwDr7isKO9yD5NzVzcxZZjkJcKglAxmhifGCgmaIyVVdiWUOIW8u%2F38tb3sZExwTDdoz49nGwvcPIQZI6YVVMkGbzIGmUX1a0t7dWvI%2FGA1fB00RDV40GQ3cK9sos8uT6Mj4rYU3svThrVxGMiUYQwIKOyqTqhM%2BA%2FWBQcZbSxSCOZkEkALd7967R%2F%2FaWbzmEINfte%2Bw3LXyBJ7KqlrT5M41XSr%2FH4jK4OWnn2d1Zw%2FS523a4ly3hB1iLvnRwTABULp9t8KORiKsAFup127ArH3wWClhi7qPg1YBKoT340aMf%2BoTTwtoAdvbRnSzhlMwa8YNolvDKMp8KUCMSfFa1KHZgsvjzGie6LQMZz7VmHtsCBdb48wFGBlpdQzQrKQi%2BdAJ%2BIrGtl2lvKo5V6YnkFIk9D0Xsh8ktSv9od1BuoBcG2pv%2B%2FWu8eBYMxa%2BnqcpSwa9Du%2BB9MS2eV3ZcqmrQQWiNRjM9S%2FdwdKaLw6DcN5UkpBE3eS%2BvuYlYNOx0frUd11ZcyzvPO31FWEboDqEHaW3hrrbaSfqgiC3rrQ1VgZQ70P%2BdIWxaLsqJBnq6bNPePMz2HfrxmD16SGia8K2gubsD9fZjTuc1ndDAjNOkfiz3ddYHNCL9YSsMWMgvcw7ZS%2ByQY6pgGBY4%2BzKt7jDEm3ZbuQII%2BMDRzGci35SYtzGKexaUGXziwtyEmfU%2F%2BHnC9O%2FnT6rKAsccWb441G3wDzNaPpy65o78WqxIgA3b%2FJr1Rh4HXvQmT3iQcDLuT%2FrSrl7CpBKgNMCtAaUVX%2BPYcK1PtZKQCATk%2F9WlBeQarCF7al%2FnYY78s97X0RqPV0%2Bg94XIVo2PidhGHPWnRFqDMyO8vHwqUKabZn7Fts&X-Amz-Signature=6d2d3312b0a53405ae274bd9be5f34b658466c8c2b5f95014076ece95c482158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

