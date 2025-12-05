---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663332B6IQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5SVavSSXJaJF4tFh2v4u1OMZ4WsFDWoeilz11oGn6AIgAgPkkFrUx5oSFKW4kImMhRAzzQVhZwbgWegpV2HdDtAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFROUXPVo%2F%2F0qpHrQCrcA%2BNBODleogOtFT2ITh6AVKKm0YkU4WWtfPpi%2BQh%2FiViIJNdVs8XGs5u5nuz5%2FLNXAXXE7JpTI9SOz4%2BdtgnR38BkNfVqPxTLSxRCZp2W8g%2FY5cRRWnJIx7NkbedkJUT1t9E1t39G3dlqbbLef2HfloO1azOSt%2FpJl%2Bx3RcgFDNtm%2F9HMy7sjFgN2kJxzrdF%2BWBnrUZOkoJQGbcH2YocmiAl3GP6OdKgStS9pupppkwYZTTSrWa%2FLRRcCITntnbPTmk0oCsUuFkqAABGc6rjbbHPA8eYlJsrUv6P4FfUDYrIxsR61GPQwWLDO2zHrimaop%2Fq2WIl8Wg3ajhS8lIqGyOzjpvpo0Z5unjTaAvonDDKbfv1JIG1sT7R3yap2K4DCVXQGwWlXtnWZ0Wg7fxt4CA7Nd8znxJPzsCueEnywy6UTP79qHmZTi%2BlOPyZ%2F9N0uETp2EX7sYtcfMBD1j35fzerz1qgzrKyjN4rM7xbybfD9wYWCkG6KBUF9kHz7xWTu1%2FoEAxDvKkt2YgdUgdAJSTWjDIqxqm%2BzM%2FV6iRJqcL8BDqq5zrRVO3jCDW5AoIuBn1Ktb33%2FpFzw2DaASnOetagooZqQ3MjAbGZLXRRO%2B%2BaGNwJQQuTdnZv28cL%2BMOrDyskGOqUBZ1vscQiQaoh0FrQ1%2BKQsHj2YNWvn6Elku0EnsMX3mMKT479kctqLU3j0LJHyYUgpygZt4mUEeTL%2FelzMGIbnYY9iOZejatMmRaK2K7lu8rsJBUoZ%2FD73I6xJLmGFlBKXXEgh6%2F8YOCKyTFhzjLggmrV218bwF%2F08vI%2FuCGgVCLFhlNGJ7MUL%2B6irRMKXh2eouV3CNyIRDCBMwiuj0VcwJxnJvICD&X-Amz-Signature=b701beb849ce2582d96a645f665dee7997503799ee9de2f6e7b62c68c5197f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663332B6IQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5SVavSSXJaJF4tFh2v4u1OMZ4WsFDWoeilz11oGn6AIgAgPkkFrUx5oSFKW4kImMhRAzzQVhZwbgWegpV2HdDtAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFROUXPVo%2F%2F0qpHrQCrcA%2BNBODleogOtFT2ITh6AVKKm0YkU4WWtfPpi%2BQh%2FiViIJNdVs8XGs5u5nuz5%2FLNXAXXE7JpTI9SOz4%2BdtgnR38BkNfVqPxTLSxRCZp2W8g%2FY5cRRWnJIx7NkbedkJUT1t9E1t39G3dlqbbLef2HfloO1azOSt%2FpJl%2Bx3RcgFDNtm%2F9HMy7sjFgN2kJxzrdF%2BWBnrUZOkoJQGbcH2YocmiAl3GP6OdKgStS9pupppkwYZTTSrWa%2FLRRcCITntnbPTmk0oCsUuFkqAABGc6rjbbHPA8eYlJsrUv6P4FfUDYrIxsR61GPQwWLDO2zHrimaop%2Fq2WIl8Wg3ajhS8lIqGyOzjpvpo0Z5unjTaAvonDDKbfv1JIG1sT7R3yap2K4DCVXQGwWlXtnWZ0Wg7fxt4CA7Nd8znxJPzsCueEnywy6UTP79qHmZTi%2BlOPyZ%2F9N0uETp2EX7sYtcfMBD1j35fzerz1qgzrKyjN4rM7xbybfD9wYWCkG6KBUF9kHz7xWTu1%2FoEAxDvKkt2YgdUgdAJSTWjDIqxqm%2BzM%2FV6iRJqcL8BDqq5zrRVO3jCDW5AoIuBn1Ktb33%2FpFzw2DaASnOetagooZqQ3MjAbGZLXRRO%2B%2BaGNwJQQuTdnZv28cL%2BMOrDyskGOqUBZ1vscQiQaoh0FrQ1%2BKQsHj2YNWvn6Elku0EnsMX3mMKT479kctqLU3j0LJHyYUgpygZt4mUEeTL%2FelzMGIbnYY9iOZejatMmRaK2K7lu8rsJBUoZ%2FD73I6xJLmGFlBKXXEgh6%2F8YOCKyTFhzjLggmrV218bwF%2F08vI%2FuCGgVCLFhlNGJ7MUL%2B6irRMKXh2eouV3CNyIRDCBMwiuj0VcwJxnJvICD&X-Amz-Signature=52e22c0a7e150716418004e31710e3150983595b27db2327727890be0b2bcb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

