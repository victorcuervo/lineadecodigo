---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SL4VOS5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLLzru3JQkY4tzhdNpY%2B%2BnTUPx89xz59B%2F2IL66UjKXAiEAq6qBDrtobMgNwOyWROm7jNPyk%2BNdjeEFP%2FBbdVF87oQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBz1gEEoatT9CXL5CrcA22THifHohkD7p76DMey0PZ8xZooPoRhgiTAvhIFls2CkzjaLdn1vqIPUx9CvfncmZOtDKNc2HgvmTs9uW8pkA8TU8hH8m0H%2FiiUNmIGYq54DYZDgGmOy2X0oEThC4kkgGYB2d7k86HtCiMxzGMULEYFamoBoB7UfssDfVb6NZAgmxhBWjOe21%2BeCOlxQms8ULbwskSADGS9Y0xb04PocK1qcdCZEVSmaLu5HLyIyZ9%2FDQm6HAYWmtmRsc4Ix1flfP6kknkey9I3lsCHJzKZDgQs1ZBZtOdsoZJ1qBy7O2WSzfE7NQwwZLeJPUtTaGRcFbxBQwFspq2iyheyBeKGvZw0SbAgNSumtsTKtNxEjPghrgZgQkTAz6TEniEDJyPxnHB9uPZ0JlHK0NjPhRc%2FEtlJULXRbhf4UPUFqtPzhFEN6Vhmhg1iSl47zm2fdLIqs4FcDtwbqP7tap0Tf13MXwrqeAK7465MabneDu0fr3ZBpnQyo9DoXEsbINTQ%2FVamDbCWS%2BpC4AnCPDmnTk9lzDzlGWUfiCDPdvxtV6ys1ES8TXiv8fniglsN9wXYaW2FqxSiRn%2BC3E1tIv%2BeFoPDU5f%2FPIFUIRTUB8dn25YM0c5bg8cNll4MTwKoq%2BuvMNON3skGOqUBPM%2FlDl%2FUJ22CGoXjVw1VmX3uPQi0bspGI3uwpL4SXZhx35wutGvEU8KymLFYg2KAVviaz%2F5FfoTlbhu%2FrvaJILG6rBsegmyrIidbng%2BDh8YGPX1vL7uG11uYILS7qn4mtAM2b1s3UqCqJEIfzXoIHZn0Lgmq4OIx%2BDuaW3Bfj5AyUJeOWgW1XC5OQHz1Oe%2FeakFNenKruU63eX%2FAuKqh5z4Wl4qH&X-Amz-Signature=b71ed741c8f4309508782e291884729e7a7c2d6c692374b8ba162ebcc16830ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SL4VOS5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLLzru3JQkY4tzhdNpY%2B%2BnTUPx89xz59B%2F2IL66UjKXAiEAq6qBDrtobMgNwOyWROm7jNPyk%2BNdjeEFP%2FBbdVF87oQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBz1gEEoatT9CXL5CrcA22THifHohkD7p76DMey0PZ8xZooPoRhgiTAvhIFls2CkzjaLdn1vqIPUx9CvfncmZOtDKNc2HgvmTs9uW8pkA8TU8hH8m0H%2FiiUNmIGYq54DYZDgGmOy2X0oEThC4kkgGYB2d7k86HtCiMxzGMULEYFamoBoB7UfssDfVb6NZAgmxhBWjOe21%2BeCOlxQms8ULbwskSADGS9Y0xb04PocK1qcdCZEVSmaLu5HLyIyZ9%2FDQm6HAYWmtmRsc4Ix1flfP6kknkey9I3lsCHJzKZDgQs1ZBZtOdsoZJ1qBy7O2WSzfE7NQwwZLeJPUtTaGRcFbxBQwFspq2iyheyBeKGvZw0SbAgNSumtsTKtNxEjPghrgZgQkTAz6TEniEDJyPxnHB9uPZ0JlHK0NjPhRc%2FEtlJULXRbhf4UPUFqtPzhFEN6Vhmhg1iSl47zm2fdLIqs4FcDtwbqP7tap0Tf13MXwrqeAK7465MabneDu0fr3ZBpnQyo9DoXEsbINTQ%2FVamDbCWS%2BpC4AnCPDmnTk9lzDzlGWUfiCDPdvxtV6ys1ES8TXiv8fniglsN9wXYaW2FqxSiRn%2BC3E1tIv%2BeFoPDU5f%2FPIFUIRTUB8dn25YM0c5bg8cNll4MTwKoq%2BuvMNON3skGOqUBPM%2FlDl%2FUJ22CGoXjVw1VmX3uPQi0bspGI3uwpL4SXZhx35wutGvEU8KymLFYg2KAVviaz%2F5FfoTlbhu%2FrvaJILG6rBsegmyrIidbng%2BDh8YGPX1vL7uG11uYILS7qn4mtAM2b1s3UqCqJEIfzXoIHZn0Lgmq4OIx%2BDuaW3Bfj5AyUJeOWgW1XC5OQHz1Oe%2FeakFNenKruU63eX%2FAuKqh5z4Wl4qH&X-Amz-Signature=1067de817cc74e351f3901469240faeb5202d764e64c54dbfe7283131f10d2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

