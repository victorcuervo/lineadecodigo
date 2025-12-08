---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VX5RJI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVSxFX9PP6lEF38zM%2B2J0CQySTQemfuVqnQBKd61qw9AiEA2TK%2F7j2u6NRCecnf%2BBnueW4MsULvmaPdw%2BHoubDuLacqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOL3BH5%2BsIhN3BnnyrcAz9RFOgqCKLpJ%2FFIAi3zIHwq61JehRdn2CWW4G8denY0inh44ajtbYp%2FJ9IUOTtt4YEmi7e2WES1r1gZ%2FTRbgGjzf4qFHqMMT2Hqcs0sttUVyoTxKaBIN1xwsPsfiVdpIUDw9wE%2BO9uv33UL%2FDpz3Jt%2Fp0Pmtt6MDuYsEiSXlm%2BxdYA%2BCQtkZoRp615GzbaDNoxCmsPfnB0E407mOB1%2FCn0xiDSuHk3y3Eanp88m3ET%2F9W1adrV5H5Tdf1Bpkq6prAk29uViPBHzBJN2Mum78Eco9hzRX0dppyhx6cnMMUke8jvODw38qpJwD%2BRuh5mplhRYeEL4CKXV4F5F11wolQgO%2B1s7up8mk8OP0pyNlSOsIViF1rGFCmBJ%2FYNkas798oe9bfDJXTAS5nWOorJX5gghv4q42t4dnElORBpD1PA%2F%2BduVCxtZHnGVCsFNk6Op9Bt%2BVS%2FpSkqaiyXt%2FLDzq2SMGGK0CJjCOtoQyp1Oc%2BGoywJf8cOcaqdw6LH1MHxf9t0%2BK%2F28KtBDMBRhLFuFfVV7EP%2BPGJSVp5WeHd3NzjoVWtHVNr2ld5OzyHDOrCLvS7avrn8w%2FISgWz5ZUJ1xySd3A9dFAHUxpHyI5V2HCnwUy7G3pDs7qRN%2B%2FQrjMPvs2ckGOqUBBrrbQ8tHXIMTJvSA3qfQBMlLvsXLTqs4gbypYQUmqnFGrLEgndWgJr7hRwfUwvtqcczce3CjKk4Dozk2uUoTNG%2FAbNVbzVylA%2BLdRHJGOlO64TCVFZ%2F4Vh8UmbQoTojnB%2Boibii4clLsab6wv8XOE8Wlm8z5V%2Bcmmfr%2BeHWBhPsq%2Fwcs9Tp%2BgMO5bCdf64hH5vBOp7A8h%2BH1TFoZrW31wbVBxE%2BU&X-Amz-Signature=c7a1589f34f809a3c9c2ae271cc1b57d89ae57d804eee7c70a28ef58c0ca7680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VX5RJI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVSxFX9PP6lEF38zM%2B2J0CQySTQemfuVqnQBKd61qw9AiEA2TK%2F7j2u6NRCecnf%2BBnueW4MsULvmaPdw%2BHoubDuLacqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOL3BH5%2BsIhN3BnnyrcAz9RFOgqCKLpJ%2FFIAi3zIHwq61JehRdn2CWW4G8denY0inh44ajtbYp%2FJ9IUOTtt4YEmi7e2WES1r1gZ%2FTRbgGjzf4qFHqMMT2Hqcs0sttUVyoTxKaBIN1xwsPsfiVdpIUDw9wE%2BO9uv33UL%2FDpz3Jt%2Fp0Pmtt6MDuYsEiSXlm%2BxdYA%2BCQtkZoRp615GzbaDNoxCmsPfnB0E407mOB1%2FCn0xiDSuHk3y3Eanp88m3ET%2F9W1adrV5H5Tdf1Bpkq6prAk29uViPBHzBJN2Mum78Eco9hzRX0dppyhx6cnMMUke8jvODw38qpJwD%2BRuh5mplhRYeEL4CKXV4F5F11wolQgO%2B1s7up8mk8OP0pyNlSOsIViF1rGFCmBJ%2FYNkas798oe9bfDJXTAS5nWOorJX5gghv4q42t4dnElORBpD1PA%2F%2BduVCxtZHnGVCsFNk6Op9Bt%2BVS%2FpSkqaiyXt%2FLDzq2SMGGK0CJjCOtoQyp1Oc%2BGoywJf8cOcaqdw6LH1MHxf9t0%2BK%2F28KtBDMBRhLFuFfVV7EP%2BPGJSVp5WeHd3NzjoVWtHVNr2ld5OzyHDOrCLvS7avrn8w%2FISgWz5ZUJ1xySd3A9dFAHUxpHyI5V2HCnwUy7G3pDs7qRN%2B%2FQrjMPvs2ckGOqUBBrrbQ8tHXIMTJvSA3qfQBMlLvsXLTqs4gbypYQUmqnFGrLEgndWgJr7hRwfUwvtqcczce3CjKk4Dozk2uUoTNG%2FAbNVbzVylA%2BLdRHJGOlO64TCVFZ%2F4Vh8UmbQoTojnB%2Boibii4clLsab6wv8XOE8Wlm8z5V%2Bcmmfr%2BeHWBhPsq%2Fwcs9Tp%2BgMO5bCdf64hH5vBOp7A8h%2BH1TFoZrW31wbVBxE%2BU&X-Amz-Signature=d9e2a22a88eb907684046517a9c4c578fc25927819f1c5e20ef29e3a9fc147eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

