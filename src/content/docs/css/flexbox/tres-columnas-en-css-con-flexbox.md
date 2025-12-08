---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2JW5XT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi8bgaqk2LVCIG3wSRWzTDT602FzhglEgmcOKLtgwaegIhAKr%2B1wcOVgoKIqy%2B4eEdKZxnBfaIUoecP21nu%2B7PNo1rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVpDRzxJdyhPhNDv4q3AMIcqsEBb2B1Imdn9nBjRRCUHNmxheD1rtyOUQ1KL6hg5GQuLXioXWrhcto%2Ff%2BCYAnhBRF3Sd7yj74InBjXE8R4DW5EjrwAWKAOjCdsynL3a5FvJ%2FPtnBosQsuMxgdc3QIUouSfPQMCzQEcIy9Z3VPtvPCD0%2FTVVgCLejlzRQAtj%2FuLFVhF5tldOpzVo4cnKhh27NVGNih%2FvtTlZfBFG4GZkWokeEQP30LoWmE%2BbIrPemJL1aaN0WO921KayaISRRWr1xlorsc7zi27RBHEN8q0OoKibOFTaWCXovgwS0EW0NH83GXlm7gAuLzWlGk2yQsTmKaLQR0tphsVbVR9wD4P5ug8eLNYPudanTU8dvXjJBpcdSuOuVDaeiB2SPoyJY5JQq3Lu1Ki%2F79hFX4srWjzEqWPZtnKdHj%2FdMp%2ByBekfKi8%2FLumfoujFCSUc4SQtxgUnyBbBXMoE9P313wasSdXtGvDyUlVniSx13ATS9jpAmnytCwEgum6nL3Q1tWg%2F0W%2Fu%2F%2B5HAY60yqby7VOSC1M1tOEooqLovOCR227fT3KHBu4tRZrIUxvLLDEuYCffkuAWSqmJ2swusfziQazWf6iS1LKtrZ2xPaAyz3sckwxA1Id4gb2S1uc4jlsWTCN7tnJBjqkAfaKafslHQ%2BHm%2FlfptXaaDei0CsN2vV%2FMevemuS4FiUSgGh1%2FuEs3FNcy2u1rMPj%2Fvlvq95vw2LeGu3pYSjPINFb4faSsiYsLRKy%2FOkszMUPZf123R1y0SBDFyswAho07wYm1%2BwZCxxwuWJsudaRcrbQUW0g2vQGCz7l%2BE%2By7Fv3j%2BQ%2FgQ2yi%2Br6g2deQl0IjqpCqQSBOTZ%2FUbFQB2csBmhZ%2BSVj&X-Amz-Signature=89d92fb120ae5a45811958bf4bd4e573f0d4c3c7c3c00bf6b57a3e4117cd91d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2JW5XT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi8bgaqk2LVCIG3wSRWzTDT602FzhglEgmcOKLtgwaegIhAKr%2B1wcOVgoKIqy%2B4eEdKZxnBfaIUoecP21nu%2B7PNo1rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVpDRzxJdyhPhNDv4q3AMIcqsEBb2B1Imdn9nBjRRCUHNmxheD1rtyOUQ1KL6hg5GQuLXioXWrhcto%2Ff%2BCYAnhBRF3Sd7yj74InBjXE8R4DW5EjrwAWKAOjCdsynL3a5FvJ%2FPtnBosQsuMxgdc3QIUouSfPQMCzQEcIy9Z3VPtvPCD0%2FTVVgCLejlzRQAtj%2FuLFVhF5tldOpzVo4cnKhh27NVGNih%2FvtTlZfBFG4GZkWokeEQP30LoWmE%2BbIrPemJL1aaN0WO921KayaISRRWr1xlorsc7zi27RBHEN8q0OoKibOFTaWCXovgwS0EW0NH83GXlm7gAuLzWlGk2yQsTmKaLQR0tphsVbVR9wD4P5ug8eLNYPudanTU8dvXjJBpcdSuOuVDaeiB2SPoyJY5JQq3Lu1Ki%2F79hFX4srWjzEqWPZtnKdHj%2FdMp%2ByBekfKi8%2FLumfoujFCSUc4SQtxgUnyBbBXMoE9P313wasSdXtGvDyUlVniSx13ATS9jpAmnytCwEgum6nL3Q1tWg%2F0W%2Fu%2F%2B5HAY60yqby7VOSC1M1tOEooqLovOCR227fT3KHBu4tRZrIUxvLLDEuYCffkuAWSqmJ2swusfziQazWf6iS1LKtrZ2xPaAyz3sckwxA1Id4gb2S1uc4jlsWTCN7tnJBjqkAfaKafslHQ%2BHm%2FlfptXaaDei0CsN2vV%2FMevemuS4FiUSgGh1%2FuEs3FNcy2u1rMPj%2Fvlvq95vw2LeGu3pYSjPINFb4faSsiYsLRKy%2FOkszMUPZf123R1y0SBDFyswAho07wYm1%2BwZCxxwuWJsudaRcrbQUW0g2vQGCz7l%2BE%2By7Fv3j%2BQ%2FgQ2yi%2Br6g2deQl0IjqpCqQSBOTZ%2FUbFQB2csBmhZ%2BSVj&X-Amz-Signature=fead70b10ab03b76251350d3dbd778099bfeb0411e1df076241353568830e1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

