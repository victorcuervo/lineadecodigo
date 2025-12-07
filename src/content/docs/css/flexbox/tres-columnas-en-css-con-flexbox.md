---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBCZRYS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1tZtQgQszevO6XdQpcZi%2F5OfsBXROo0f3sgEVDi1B8AiBP1foAAYlXZU14q0Hjdn6rfBuYF9ZA2wzf4e3t2kkATSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKHiilsCIhP7MgBuKtwDT%2BpWapNwut%2Bmme%2BqXmJ0AkUh3bCpbpEiHPl2%2FjrYaXzX2HHvk8p9x4R1AuxWhF0hOn1Wzj2TNDcuAtfYmTvm3nBdrgIjJzEBwd8DcmCzuWntbWgwlxb0636sGmXyq5KV623zP67KkgbV%2FTWSc6hzXR8mjS%2Bm854UR5MUwM09HO33PFKiUFrKfY7%2BBOg5wgEReRNq3h7y5euDD31T2qz7zPfoqi6VyhYUre7ouEXHv72rV4GU0WIdKF%2B1ANittsm%2F%2BtLJSaTPn4ejPmfKxJvYaWi2ly7WQzD3qORz6AZRwSirmJUhpxPQPjxCeC1HRCtg97fHbDfG3yyl%2Fe3MVfgXft5bmb%2Fl%2FsbNIgLmdKjoH0gwLrbDC8QE3omLYrVXl0ljKm4pp2VH8gvt24TGgIDKkofBIGJ%2FJ5qFuqwk%2Fn5sG7VoQfQ1drcoyMCFcd7f5BdsYwsDyyYJRsC%2FUpKw7P76dio6TLrpGiD5Q6SPSOHhvF%2FKvo1o9GKQQx12AY1fXtHnawlrs750pSK1mdAVbkVsD7TZ%2Bezq8%2FGU0VntCNFCVT%2BWDAf1VyCu08oqKb1Xsx2ucbeG8WT9ZaT3in2r9Ypf1kLOHbt%2FJME%2BDpOzGLPtsUa0lxVm7DyJJjy0wdQw%2Bf3SyQY6pgG3vhm2CfktsxfDukL3qZ5CLTrDXG0zmG2I%2B7FFo1N5R%2FHN6poySHvUykFHJp16xB5ftyUMzi44S07WeJgVvMPyDF7FJoeNxnTwwiQZ3y0jjhCRQsO8Z3%2BuU7Ey9Rm9Ya9cIPsBUmVQBHbELHk0ju%2Bo%2Bjo5fH3EAQerRgGumsvzyrmmGZe6%2FUjMebNhQA4%2BD4wsV70OOd6MX3G5ao%2FiBGtMRfhyOyys&X-Amz-Signature=71d3deccb7bca2a88ab23e3ada8e3a93a29d197f904577e449af787c50f6204d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBCZRYS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1tZtQgQszevO6XdQpcZi%2F5OfsBXROo0f3sgEVDi1B8AiBP1foAAYlXZU14q0Hjdn6rfBuYF9ZA2wzf4e3t2kkATSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKHiilsCIhP7MgBuKtwDT%2BpWapNwut%2Bmme%2BqXmJ0AkUh3bCpbpEiHPl2%2FjrYaXzX2HHvk8p9x4R1AuxWhF0hOn1Wzj2TNDcuAtfYmTvm3nBdrgIjJzEBwd8DcmCzuWntbWgwlxb0636sGmXyq5KV623zP67KkgbV%2FTWSc6hzXR8mjS%2Bm854UR5MUwM09HO33PFKiUFrKfY7%2BBOg5wgEReRNq3h7y5euDD31T2qz7zPfoqi6VyhYUre7ouEXHv72rV4GU0WIdKF%2B1ANittsm%2F%2BtLJSaTPn4ejPmfKxJvYaWi2ly7WQzD3qORz6AZRwSirmJUhpxPQPjxCeC1HRCtg97fHbDfG3yyl%2Fe3MVfgXft5bmb%2Fl%2FsbNIgLmdKjoH0gwLrbDC8QE3omLYrVXl0ljKm4pp2VH8gvt24TGgIDKkofBIGJ%2FJ5qFuqwk%2Fn5sG7VoQfQ1drcoyMCFcd7f5BdsYwsDyyYJRsC%2FUpKw7P76dio6TLrpGiD5Q6SPSOHhvF%2FKvo1o9GKQQx12AY1fXtHnawlrs750pSK1mdAVbkVsD7TZ%2Bezq8%2FGU0VntCNFCVT%2BWDAf1VyCu08oqKb1Xsx2ucbeG8WT9ZaT3in2r9Ypf1kLOHbt%2FJME%2BDpOzGLPtsUa0lxVm7DyJJjy0wdQw%2Bf3SyQY6pgG3vhm2CfktsxfDukL3qZ5CLTrDXG0zmG2I%2B7FFo1N5R%2FHN6poySHvUykFHJp16xB5ftyUMzi44S07WeJgVvMPyDF7FJoeNxnTwwiQZ3y0jjhCRQsO8Z3%2BuU7Ey9Rm9Ya9cIPsBUmVQBHbELHk0ju%2Bo%2Bjo5fH3EAQerRgGumsvzyrmmGZe6%2FUjMebNhQA4%2BD4wsV70OOd6MX3G5ao%2FiBGtMRfhyOyys&X-Amz-Signature=376115c068ecc7aeeed9cf5fe5d78e0f800b321c6ef7b52ce309b8170a99fc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

