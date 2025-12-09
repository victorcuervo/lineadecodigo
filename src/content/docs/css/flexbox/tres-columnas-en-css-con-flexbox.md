---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZSNMSNT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1WkCehaqKxe14sXQFAdWZPx%2Bi8P%2FIF4V12Pyfbv2jQQIgKixHQkzIAmuL56d%2FI9SQk1xDXYela193yXjKKdmX2B4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSlbo5eIT%2BTk9EipircA41QHlppKDsUpjrgfb1wg28R0A%2BAKTVcVGOTIoITrEuW4k0bHCEU3wpelxAUcfVYkNHr%2BOF%2FBfPoKuIrsjZyYjjK2Q6chRTTuUWblzLBpXBcfRRYDZOoKBO3%2FVGGx0u2NM1BftRaJT%2FzRWib%2BjQ3cPu%2Fogky568X7dTArYo7mRmxwgz0rjbbQq9mLRO8%2Fr8BAC6yusPnr%2Fh%2FPInB3tp2ysNVOjz77xAE6yGMIJvtcQLwV5U6fX0uacS1uaoRyvikC4qCAMRdMdfxdKYH2CcAogBxtY%2FNxdphRzydSwriXgrpomtP3EI5K6uGnBeXjU6HEP31Hzq%2BK2Vn9%2BWoqVrHBRVfUfvmTCf3veBIhmMnn6jcUYW1co%2BzvqPsTxuz89vJ8tStoUBs3R6jp%2BvjRRtIjkX%2F0yK7o0Ez7ps7dWPSLrDjxLDXVz7Qi5H%2FaHrJAr4kcqUCLYzV31BZGKFllW19CfSPc2n1Ym9427Ui%2BWw9xlK5A3KvgAFf2kAMWVrk1yRtJsfW6yr0%2FbV3V3WMqNosE9oJgglHiMDlrRz1Bfky69zWDcCdddu8hVE0ZOeSQkvxWC6kwjSziJjU72f3eNZQINlAYpM5jDkLX9GEuE9cRV1%2FG5FoJUk6XfkG4EapMN%2BO3skGOqUB4rH3fdeZOc%2FhChyADzuM5mqh8ZGPv50H%2BlMsmUFABDpu57DftU4DFXMC2GuRMNHtAGM5SqutNjud1c37qSsgxyJbdxPk34Rl152m7ZJn1%2BWu4f2AykeS7mSGxalLrpDdQanf5d2i1xTt%2Bkw3fCf9tkzZLIoOLuLuiwJ49M%2FvWes3CoyVYPRpTFxLhGnDuQBRUPmf7wqulo2dC6LGxjWBvS%2BDLjug&X-Amz-Signature=81b9c780681a93df6a1880843faf6290b32ef1954473e547a055292265ffaf8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZSNMSNT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1WkCehaqKxe14sXQFAdWZPx%2Bi8P%2FIF4V12Pyfbv2jQQIgKixHQkzIAmuL56d%2FI9SQk1xDXYela193yXjKKdmX2B4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSlbo5eIT%2BTk9EipircA41QHlppKDsUpjrgfb1wg28R0A%2BAKTVcVGOTIoITrEuW4k0bHCEU3wpelxAUcfVYkNHr%2BOF%2FBfPoKuIrsjZyYjjK2Q6chRTTuUWblzLBpXBcfRRYDZOoKBO3%2FVGGx0u2NM1BftRaJT%2FzRWib%2BjQ3cPu%2Fogky568X7dTArYo7mRmxwgz0rjbbQq9mLRO8%2Fr8BAC6yusPnr%2Fh%2FPInB3tp2ysNVOjz77xAE6yGMIJvtcQLwV5U6fX0uacS1uaoRyvikC4qCAMRdMdfxdKYH2CcAogBxtY%2FNxdphRzydSwriXgrpomtP3EI5K6uGnBeXjU6HEP31Hzq%2BK2Vn9%2BWoqVrHBRVfUfvmTCf3veBIhmMnn6jcUYW1co%2BzvqPsTxuz89vJ8tStoUBs3R6jp%2BvjRRtIjkX%2F0yK7o0Ez7ps7dWPSLrDjxLDXVz7Qi5H%2FaHrJAr4kcqUCLYzV31BZGKFllW19CfSPc2n1Ym9427Ui%2BWw9xlK5A3KvgAFf2kAMWVrk1yRtJsfW6yr0%2FbV3V3WMqNosE9oJgglHiMDlrRz1Bfky69zWDcCdddu8hVE0ZOeSQkvxWC6kwjSziJjU72f3eNZQINlAYpM5jDkLX9GEuE9cRV1%2FG5FoJUk6XfkG4EapMN%2BO3skGOqUB4rH3fdeZOc%2FhChyADzuM5mqh8ZGPv50H%2BlMsmUFABDpu57DftU4DFXMC2GuRMNHtAGM5SqutNjud1c37qSsgxyJbdxPk34Rl152m7ZJn1%2BWu4f2AykeS7mSGxalLrpDdQanf5d2i1xTt%2Bkw3fCf9tkzZLIoOLuLuiwJ49M%2FvWes3CoyVYPRpTFxLhGnDuQBRUPmf7wqulo2dC6LGxjWBvS%2BDLjug&X-Amz-Signature=83f7c624268a91ee118d0ea88b9ecede38eae41e0e482429d0b0385e56f8f0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

