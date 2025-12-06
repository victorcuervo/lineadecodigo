---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFUYC52R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuO7dPGunWh8WszGSl6J2OkKUr24Tz33GSq50nU58jXAiADKBagf9LM2VaiZnNGFm2A8ANhlTp0i%2FKvgjFjbrZWVCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMnB4OIuc5vImugOeGKtwDcRhRb%2BEc9iCePDaHIejZUr%2F%2Bt3pOG%2BrKDtkW8jUkhSs1n3b8w6WpJOQWeh5d6EtOgbuS3U%2FdI0K5EMOgPN4yYDk%2BzS1uacHbIGTfcwSHxfYOIF76wYcrXuiDZ5%2FgRUjib0ykTe%2FlX11xFk%2BkBJHnuAkbZuM8sKmyDX8k5U4yDfNv6RnN0NZGIDUSVPfIT4DcCWS3qGQ50E53zrVypBQEl%2Bv634TmgOteiygUNolWC1jFvloD9aPgeaq3BBdOY%2BAuTfwF%2FyO7n3oKG1bvd3xNpwpwpcZq3gpw394WoDKJzY0b%2BpXQaqPGAMZG4%2BFrgrGXLI87ZWQ4CKnB5RTwHIqsJCRbGvm9FP88qNRvEN0wVFUQOk5JRE878KG3y2keLjQZzdWivYLUvoY9pBDsDdy3nGTBPytBoZ%2FpYdJu0e%2Bq5sciwJO3T7Q3wK7cqWk6hZ5MOL6scJ8YAiYy8us6InOmabYC74iLx1mex7r4Ssvy3tZn1el1bMNdYpBiFIcGmLA0BHYMs9IAprv7P1TwioKysg5tk5ijnPJIvaV1Gbj05ryK1%2Bj4v7BefHs1dlKfGoX9OKunumux4vj2XRgJDgiOPkOA77Vp8LYbD%2BCSyrXlzROf1ZRZM%2BGyWRF19HkwyujNyQY6pgFyqVD1Y9O9nQcVfXjvCFMGOCroMQkPtjSfIUHX%2BZatEyPpDvYlimRzokfGqKu6jaVnwQlglzKI8f83%2B852nc2m08my8%2B1cMmgUtNX7QCJ1tYa%2BEf3IeLKiZhmX7t3gmGv2EOxkvJJq%2FB1SwWpB0yymXkByIROzYNcwrTuY%2F9%2FwtV5G2K6f3Wh3ugH6Y9GyJyf2qHyUA0xFUR49491h9GTwsgjBioUR&X-Amz-Signature=09e58c53e7beb13cbfd9c26794e26eb0b70c913e4dde52012c62a1d41dcb5b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFUYC52R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuO7dPGunWh8WszGSl6J2OkKUr24Tz33GSq50nU58jXAiADKBagf9LM2VaiZnNGFm2A8ANhlTp0i%2FKvgjFjbrZWVCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMnB4OIuc5vImugOeGKtwDcRhRb%2BEc9iCePDaHIejZUr%2F%2Bt3pOG%2BrKDtkW8jUkhSs1n3b8w6WpJOQWeh5d6EtOgbuS3U%2FdI0K5EMOgPN4yYDk%2BzS1uacHbIGTfcwSHxfYOIF76wYcrXuiDZ5%2FgRUjib0ykTe%2FlX11xFk%2BkBJHnuAkbZuM8sKmyDX8k5U4yDfNv6RnN0NZGIDUSVPfIT4DcCWS3qGQ50E53zrVypBQEl%2Bv634TmgOteiygUNolWC1jFvloD9aPgeaq3BBdOY%2BAuTfwF%2FyO7n3oKG1bvd3xNpwpwpcZq3gpw394WoDKJzY0b%2BpXQaqPGAMZG4%2BFrgrGXLI87ZWQ4CKnB5RTwHIqsJCRbGvm9FP88qNRvEN0wVFUQOk5JRE878KG3y2keLjQZzdWivYLUvoY9pBDsDdy3nGTBPytBoZ%2FpYdJu0e%2Bq5sciwJO3T7Q3wK7cqWk6hZ5MOL6scJ8YAiYy8us6InOmabYC74iLx1mex7r4Ssvy3tZn1el1bMNdYpBiFIcGmLA0BHYMs9IAprv7P1TwioKysg5tk5ijnPJIvaV1Gbj05ryK1%2Bj4v7BefHs1dlKfGoX9OKunumux4vj2XRgJDgiOPkOA77Vp8LYbD%2BCSyrXlzROf1ZRZM%2BGyWRF19HkwyujNyQY6pgFyqVD1Y9O9nQcVfXjvCFMGOCroMQkPtjSfIUHX%2BZatEyPpDvYlimRzokfGqKu6jaVnwQlglzKI8f83%2B852nc2m08my8%2B1cMmgUtNX7QCJ1tYa%2BEf3IeLKiZhmX7t3gmGv2EOxkvJJq%2FB1SwWpB0yymXkByIROzYNcwrTuY%2F9%2FwtV5G2K6f3Wh3ugH6Y9GyJyf2qHyUA0xFUR49491h9GTwsgjBioUR&X-Amz-Signature=64d2b60f36bbe5de978964c170254d04ae70752df134dad196109dcb70a9613a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

