---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7ZRNUW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIeTEpmPhQJcT1OBPXaRMPOwuMMpFdrm3PLUFDlIRFAIhAKeKb%2BvdHg82INGAXXhjQVmRcGPZBNUDYggFINgnsl1NKv8DCHUQABoMNjM3NDIzMTgzODA1Igyu1ZrUEIrERNM6GhIq3AODKRJBWve2%2F%2B0dKucPc5AwKquZc7hxq6JMFmoBIV1LHUTJgvDIEhlgL0UZ%2B34bgQ0zhPaJLHdkr2mM9MsodKmr3h%2BDPoB%2BBwMGjwPRc6ioQb0Tu7Vw6Gy85QAmisH9b9dhDo0KwS1oruvoHSuMaA3LZVo%2BH0%2FEncrn67KcBjA%2F7iYLOEhYBvbbyYsU5ZnUqsN3cXS1fi5EQwntlIz4zRoFKnT41%2ByIzPQZig%2BNe7fQ%2Bsf8kKvTolegA0OkKSPvCqwUaq2tV9Td3Sa58Iax%2FbS8Q8f%2FCmxVxbWKL9K1dO5uAZYJOu7oG7xkN5YBBx5J%2BMscd5q33aIJFmVucSB6u0y4pvIOn7namItgCG9v5c4Eqrq0%2BB40EiryueGNVv1GkMM0RCyqVlfgGJDNz2uH97zjmc0fd88Sv6GdFMuzAXe2cY%2B0OEt4joZTny0FAmWLOW%2Fqj8SiLRaoS1IqkekLMO16XWm4gXI5AAzTbnszxkqbbW2zDkfPWYy7RAuvEbSvg28AeM0eoFAAWPE%2BwDvylS60wjlTjaTq6SYbHeHmgHMaDC7nJC73YjVUSCH0mAVBihAS6VSukOPgIyv3E4cewRXaD7k14Z66K86VUmg2UBaE0isN2PhIWIh2s0ox2TDiptDJBjqkASIg5zfQJIZc3i5bf3SET1pb%2BFA9Wz%2F3VGPDtpTaJw31%2BdJXU24bMV4E6l6HHE0qIUKG%2FSIshkqmtM2qHtitBxOwf%2Bhb%2Fry7ljnyJ2eL6x8rhCCB3mkD8pKuwL8K%2BQG1us%2BR%2BAd%2Bmtu2BSawxyl0LVnCo8riU4V0ItqoGuEqyVWTYuTZNZ7QyazLlOghjA4KyH4cFzGjRMJCI1SzqZsJJHFAegVb&X-Amz-Signature=e85493a380251f1528833d68c84eb89ea415968f928833861c08beeb5805776c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C7ZRNUW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIeTEpmPhQJcT1OBPXaRMPOwuMMpFdrm3PLUFDlIRFAIhAKeKb%2BvdHg82INGAXXhjQVmRcGPZBNUDYggFINgnsl1NKv8DCHUQABoMNjM3NDIzMTgzODA1Igyu1ZrUEIrERNM6GhIq3AODKRJBWve2%2F%2B0dKucPc5AwKquZc7hxq6JMFmoBIV1LHUTJgvDIEhlgL0UZ%2B34bgQ0zhPaJLHdkr2mM9MsodKmr3h%2BDPoB%2BBwMGjwPRc6ioQb0Tu7Vw6Gy85QAmisH9b9dhDo0KwS1oruvoHSuMaA3LZVo%2BH0%2FEncrn67KcBjA%2F7iYLOEhYBvbbyYsU5ZnUqsN3cXS1fi5EQwntlIz4zRoFKnT41%2ByIzPQZig%2BNe7fQ%2Bsf8kKvTolegA0OkKSPvCqwUaq2tV9Td3Sa58Iax%2FbS8Q8f%2FCmxVxbWKL9K1dO5uAZYJOu7oG7xkN5YBBx5J%2BMscd5q33aIJFmVucSB6u0y4pvIOn7namItgCG9v5c4Eqrq0%2BB40EiryueGNVv1GkMM0RCyqVlfgGJDNz2uH97zjmc0fd88Sv6GdFMuzAXe2cY%2B0OEt4joZTny0FAmWLOW%2Fqj8SiLRaoS1IqkekLMO16XWm4gXI5AAzTbnszxkqbbW2zDkfPWYy7RAuvEbSvg28AeM0eoFAAWPE%2BwDvylS60wjlTjaTq6SYbHeHmgHMaDC7nJC73YjVUSCH0mAVBihAS6VSukOPgIyv3E4cewRXaD7k14Z66K86VUmg2UBaE0isN2PhIWIh2s0ox2TDiptDJBjqkASIg5zfQJIZc3i5bf3SET1pb%2BFA9Wz%2F3VGPDtpTaJw31%2BdJXU24bMV4E6l6HHE0qIUKG%2FSIshkqmtM2qHtitBxOwf%2Bhb%2Fry7ljnyJ2eL6x8rhCCB3mkD8pKuwL8K%2BQG1us%2BR%2BAd%2Bmtu2BSawxyl0LVnCo8riU4V0ItqoGuEqyVWTYuTZNZ7QyazLlOghjA4KyH4cFzGjRMJCI1SzqZsJJHFAegVb&X-Amz-Signature=b41b26528ad8930857ab2b6fb9a6fee636663a12893d07f576aa112b5572c42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

