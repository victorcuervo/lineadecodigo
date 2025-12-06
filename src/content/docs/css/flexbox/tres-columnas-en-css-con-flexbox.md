---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEAOI27%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkW0RKs9IOpa6OiebwTtcXDpvSSZ1o73PspAMHhiDzBwIgaa2CddVBnmUGUPany0gOQFeda4eNpzQ1Zsq%2BOvqZ8c4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMauSpbBSpfeGoMaJyrcA5dlERFyfSeuBQTlHTdh07wCHr%2BWml5pb5WiG4ILivAwRfLX8h0Fx5JB2sWSIWzRU6bqkB8TNNC8Wx5EbliU8c7GTYPBBwsX%2BapG93ovopLAe7lrOF%2F%2Bjp7uO6rpbNY6qQz7Tf6Wax%2BJzAjDX09yyQPKlKy0xjf5FqEdPJLp%2BR7p7F3zMtK%2F9MuaMrL%2FhyXGk80OMQ044WvvxDnOE%2BoIltg%2BHNoEf89w72NYK0VG1roukp0i6se53dMHgRWdkn7q9bWOukm2uFfH2Exb%2B2rx2nyPl5PkQ2Ue5QxdAZKq09TK%2FrDuEpa2GC5s5fNzi%2FITL6XbDCZNgdYjdPTybZlRPretYExNst3wVRqtiRR9Y%2Bg6iYK%2FmPhYVmiGc8T3kgE3z5IUuiWVnbUO4S11Ac2KVvuClaLPaVEqVJGZl1p84f58FCy0OYAYng5YH1yCoHaJPm3%2BNH7wFfKfIexfFNE%2FUlTWdjm6V%2BW1DcY2ulbb4hLXXf4fgSPqjGLTq9eYXEtQkfHb3OVnjkC4L%2FQmRvph1xa3hExE9969t5vwyzFHdjRqrbC%2FAczQhsiDEyYLw%2BWVOIFsSayOFbkhRtVmdBSa76KJWMgJTMawpIRbsDceQM6PUxhJIgVhMZD%2FWnCTMPnA0ckGOqUBs1ygg9mkAH0E6XLbRwmnHkXAZMA5AYGlQQlTlRq8Y0PV0%2BFMyoXeadmZOpfCZJs2rhAIzFrWZPgbxvacidXiDANha%2FVUxt13yzHNng0rYXr6NWWt0XFWI6%2Bxl6wojSGia20CeeKFa9A9K2E15rC7OZIDQeTcgVsUmIA6Lx%2BvXUS3x1jf2CMNkeZvhZb6jpuy68tIrn%2BpT6IXacCS9Om9M68xCZTU&X-Amz-Signature=cd3c0cd766a1413653446c7e817896ecdf8cae15df47ab0fd01547a57c654b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEAOI27%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkW0RKs9IOpa6OiebwTtcXDpvSSZ1o73PspAMHhiDzBwIgaa2CddVBnmUGUPany0gOQFeda4eNpzQ1Zsq%2BOvqZ8c4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMauSpbBSpfeGoMaJyrcA5dlERFyfSeuBQTlHTdh07wCHr%2BWml5pb5WiG4ILivAwRfLX8h0Fx5JB2sWSIWzRU6bqkB8TNNC8Wx5EbliU8c7GTYPBBwsX%2BapG93ovopLAe7lrOF%2F%2Bjp7uO6rpbNY6qQz7Tf6Wax%2BJzAjDX09yyQPKlKy0xjf5FqEdPJLp%2BR7p7F3zMtK%2F9MuaMrL%2FhyXGk80OMQ044WvvxDnOE%2BoIltg%2BHNoEf89w72NYK0VG1roukp0i6se53dMHgRWdkn7q9bWOukm2uFfH2Exb%2B2rx2nyPl5PkQ2Ue5QxdAZKq09TK%2FrDuEpa2GC5s5fNzi%2FITL6XbDCZNgdYjdPTybZlRPretYExNst3wVRqtiRR9Y%2Bg6iYK%2FmPhYVmiGc8T3kgE3z5IUuiWVnbUO4S11Ac2KVvuClaLPaVEqVJGZl1p84f58FCy0OYAYng5YH1yCoHaJPm3%2BNH7wFfKfIexfFNE%2FUlTWdjm6V%2BW1DcY2ulbb4hLXXf4fgSPqjGLTq9eYXEtQkfHb3OVnjkC4L%2FQmRvph1xa3hExE9969t5vwyzFHdjRqrbC%2FAczQhsiDEyYLw%2BWVOIFsSayOFbkhRtVmdBSa76KJWMgJTMawpIRbsDceQM6PUxhJIgVhMZD%2FWnCTMPnA0ckGOqUBs1ygg9mkAH0E6XLbRwmnHkXAZMA5AYGlQQlTlRq8Y0PV0%2BFMyoXeadmZOpfCZJs2rhAIzFrWZPgbxvacidXiDANha%2FVUxt13yzHNng0rYXr6NWWt0XFWI6%2Bxl6wojSGia20CeeKFa9A9K2E15rC7OZIDQeTcgVsUmIA6Lx%2BvXUS3x1jf2CMNkeZvhZb6jpuy68tIrn%2BpT6IXacCS9Om9M68xCZTU&X-Amz-Signature=87ea6521d8b76c1ef1b80588fd28305414878f827c443d161bbf49b115ab1ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

