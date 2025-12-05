---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W523GBV5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0XL0awgZEorCupCKrfyc%2BTKVA1a5EDGLYleBh69XfFQIgKvJC%2Fhy4JmjZ%2FSfpLGIw3oEFHJ6J%2B%2FfJjguOsyRgfKIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDXf4nW54jIjLXRxeyrcAx6meQI1G0huRuvy7DSMmCvichaqjoCOJ%2BDpRt8WeIorgmXq8yNyf9%2Bmv%2FFJgxGX6UcmgMbivxWcJpWz7J4WyjhZcayA%2Fk6%2BvT5uWCdxQroZlZhbW6ou8PmNtefUoMo%2F9VJ0crTlyshD7iEVB%2BuqYNQRllizCb0kY0ZH4jVxg3%2BNJr72N0NGdRtWtGr09kou1k5I7gJUPjMvs2dTfU7WiTfKRaAvhbb8A5SaOIh32SBQ8qzuQEDZ1AbUIDYrt4%2BCzYCbHvSvAeKmfjYFYP2rIIB%2F9RXX9T%2BdLMcwFj4MwTHvt4d0m9mhv89d9F7cECKbRpYj0OVN08yyOBxc7wgIbPTprSUDCmWqLuOO2%2FdsGhYa5%2FAuMe3NkLgophAOuBe6VslcyiY3VqDcJLAgdoJP%2FOVPc0wCWKtCEFAy8MY2DbgIZTOatGZE7Uix3gJ5oF%2BxgM%2FOutYA9gW%2BbU2Gr2AD9mrwAUo2OXBWhGqb%2FQjiIUVv%2FOtnhfWbABri3BBA8Ap1R98eSlSXTT6vA%2F%2BStimGyEcLbnXLCCp5qRsnZAz%2BzM3xQryCiq7ER8jk43LVTf8LEF7CZPkCW8djHzqYWXuuAg5t3MLBFOgOmGJkGhw%2BkO8H%2B912YAHFG8wdKq%2FSMNCryckGOqUB7ST805gjBNe3wrFmzKY5hJTdGIwqyi4velyeX22KgKuPt3ags3Xe76Ku8Qr5wM44fql%2FjyppzwleGkAPP2on3aD%2B5gN%2FW7I0200MGR3YvXu7jAMPwcApfPmGgDz4xWfiEBUUEfX9cV8%2BkEfxRWYT64OpgaDkIZmPQSRwyfJoUs9nhcikOcs8xwUX11c%2FnfdkX50z5C1yFdFoHgXaTCGwDtY66ZLL&X-Amz-Signature=7192b3491cfd2f537f0cb8bdc81bed5decf305b9f1511c19395a3eae40ceaf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W523GBV5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0XL0awgZEorCupCKrfyc%2BTKVA1a5EDGLYleBh69XfFQIgKvJC%2Fhy4JmjZ%2FSfpLGIw3oEFHJ6J%2B%2FfJjguOsyRgfKIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDXf4nW54jIjLXRxeyrcAx6meQI1G0huRuvy7DSMmCvichaqjoCOJ%2BDpRt8WeIorgmXq8yNyf9%2Bmv%2FFJgxGX6UcmgMbivxWcJpWz7J4WyjhZcayA%2Fk6%2BvT5uWCdxQroZlZhbW6ou8PmNtefUoMo%2F9VJ0crTlyshD7iEVB%2BuqYNQRllizCb0kY0ZH4jVxg3%2BNJr72N0NGdRtWtGr09kou1k5I7gJUPjMvs2dTfU7WiTfKRaAvhbb8A5SaOIh32SBQ8qzuQEDZ1AbUIDYrt4%2BCzYCbHvSvAeKmfjYFYP2rIIB%2F9RXX9T%2BdLMcwFj4MwTHvt4d0m9mhv89d9F7cECKbRpYj0OVN08yyOBxc7wgIbPTprSUDCmWqLuOO2%2FdsGhYa5%2FAuMe3NkLgophAOuBe6VslcyiY3VqDcJLAgdoJP%2FOVPc0wCWKtCEFAy8MY2DbgIZTOatGZE7Uix3gJ5oF%2BxgM%2FOutYA9gW%2BbU2Gr2AD9mrwAUo2OXBWhGqb%2FQjiIUVv%2FOtnhfWbABri3BBA8Ap1R98eSlSXTT6vA%2F%2BStimGyEcLbnXLCCp5qRsnZAz%2BzM3xQryCiq7ER8jk43LVTf8LEF7CZPkCW8djHzqYWXuuAg5t3MLBFOgOmGJkGhw%2BkO8H%2B912YAHFG8wdKq%2FSMNCryckGOqUB7ST805gjBNe3wrFmzKY5hJTdGIwqyi4velyeX22KgKuPt3ags3Xe76Ku8Qr5wM44fql%2FjyppzwleGkAPP2on3aD%2B5gN%2FW7I0200MGR3YvXu7jAMPwcApfPmGgDz4xWfiEBUUEfX9cV8%2BkEfxRWYT64OpgaDkIZmPQSRwyfJoUs9nhcikOcs8xwUX11c%2FnfdkX50z5C1yFdFoHgXaTCGwDtY66ZLL&X-Amz-Signature=1de657b4399c41b25e7600d332269cb1b02efc9870e455f378ecf2fa3aec9de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

