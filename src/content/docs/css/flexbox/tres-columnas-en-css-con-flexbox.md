---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIFQUIC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9%2B%2BHWVSE8tW56qjG5Lec6kU%2BinvZ%2FBmaibqA%2F65F8YAiEA1ID2e2EXC0oEPSSPvPUO1pZMzx4fAvFY7mjSkQQaJ5YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2B0%2FIYUtKKspYQtyrcA74Ko3WqoVMQbQTOapfC7aZGG9zEOboEIjh2t9vJkNp2Jlgd1EinGiPSE2lWNVZ4pZMGuP3WhCxfArA5ZiOPXYz%2BczXWQTZ1NgvcCz1ddLhbMuGuaryKOmp%2BdlJZszeBUm%2BfXwmXmctlJl%2FpKhz5Iam%2BWwR0KjhWuXDH73RYmeYWlFurfU2gZaER6zrZrs294UyS3w9GPN7CTqliJYFVkCxVDJCEupveZHOt0pAgr8zChAIj5Pl7%2BhQ%2BIG%2F1FPkmxWJDlF2qpSjx2Gjy7X%2FScIWRfCFFQZROjwTbZBtFu2sdOlbR2jt6IsbfM8sb4ld4w8GNchuWY4T1%2BGW9SXg%2B3CdcU8tndSgzM2myo4SbObsXsPkieKpKY1za78takGcaoDyz4UtTgq4tf99huzS08EgDPLwjFUFSnCwIAzGPfFMGcXYnS1eKY6qxaPoxH4ldD5o0bm4YLxghSST94TrtoM7eCWIKqtCDkyB7uIJqBm9p7%2BenWRQ6o1IOAvYOZvPxJeP4E0qm13rzivVk4Ir1oNInYLO23khveY1LSrHdeMEc7gBskB4fYuNfIKWwjlh4%2FS5%2BIBOhzO82xSeBKZNFpQ%2B9ux1QNQmo7MnnZc1tt5dI4prX6BFWYphg3NfUMLOZ1ckGOqUBVlCf45QzJ5ndDI9SPwOhbfzwghHcaxO3ByqnnMo2A1tFEkczt0%2BkD04pL0Njq%2FcwB5YhUyzGpEf3Jw1xdKQsE8vbDaB6kfO5I%2FU6a1UgSHCAaXS3RtKYl3nmfIhDOMEJVRYTaFei3dnuFaInEZDla5Dn0tYiWJotRPDsa1KopB3AxRcTltY3bzEDb2VNcsU3ZF0bKfcYpDpG8W%2FgF4jZhDuYDfqP&X-Amz-Signature=3da0dcf7e9a8e6d18c1eeab9bbc90021ae1ee959b6d4b024b3fe1b617789efc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIFQUIC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9%2B%2BHWVSE8tW56qjG5Lec6kU%2BinvZ%2FBmaibqA%2F65F8YAiEA1ID2e2EXC0oEPSSPvPUO1pZMzx4fAvFY7mjSkQQaJ5YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2B0%2FIYUtKKspYQtyrcA74Ko3WqoVMQbQTOapfC7aZGG9zEOboEIjh2t9vJkNp2Jlgd1EinGiPSE2lWNVZ4pZMGuP3WhCxfArA5ZiOPXYz%2BczXWQTZ1NgvcCz1ddLhbMuGuaryKOmp%2BdlJZszeBUm%2BfXwmXmctlJl%2FpKhz5Iam%2BWwR0KjhWuXDH73RYmeYWlFurfU2gZaER6zrZrs294UyS3w9GPN7CTqliJYFVkCxVDJCEupveZHOt0pAgr8zChAIj5Pl7%2BhQ%2BIG%2F1FPkmxWJDlF2qpSjx2Gjy7X%2FScIWRfCFFQZROjwTbZBtFu2sdOlbR2jt6IsbfM8sb4ld4w8GNchuWY4T1%2BGW9SXg%2B3CdcU8tndSgzM2myo4SbObsXsPkieKpKY1za78takGcaoDyz4UtTgq4tf99huzS08EgDPLwjFUFSnCwIAzGPfFMGcXYnS1eKY6qxaPoxH4ldD5o0bm4YLxghSST94TrtoM7eCWIKqtCDkyB7uIJqBm9p7%2BenWRQ6o1IOAvYOZvPxJeP4E0qm13rzivVk4Ir1oNInYLO23khveY1LSrHdeMEc7gBskB4fYuNfIKWwjlh4%2FS5%2BIBOhzO82xSeBKZNFpQ%2B9ux1QNQmo7MnnZc1tt5dI4prX6BFWYphg3NfUMLOZ1ckGOqUBVlCf45QzJ5ndDI9SPwOhbfzwghHcaxO3ByqnnMo2A1tFEkczt0%2BkD04pL0Njq%2FcwB5YhUyzGpEf3Jw1xdKQsE8vbDaB6kfO5I%2FU6a1UgSHCAaXS3RtKYl3nmfIhDOMEJVRYTaFei3dnuFaInEZDla5Dn0tYiWJotRPDsa1KopB3AxRcTltY3bzEDb2VNcsU3ZF0bKfcYpDpG8W%2FgF4jZhDuYDfqP&X-Amz-Signature=cbb1d056c7646bde2dbf18a3fac2b02ff7310310ce2c37e92d925ef447c927d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

