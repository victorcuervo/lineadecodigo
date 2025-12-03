---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRDGLFO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCah6GpZ7IWmsOthp2YsGbiSYoNgeUl%2BKr3Fp08Wi3NRQIgCBF3%2BhL8B%2Bh2zVoF%2F806ti%2FD7MUGZelrtnDPuD4SVEwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMY%2BQnuP2hl5jIKwECrcA0GY921WJzsDuXiKGZuXL8eCZWNUd0%2BqPrKJuKmXCl6YpGKbMz3NpeTDur0pwZ9ffmFxwlB8ueI7ZiNdn1KcRtkhEUQAVqTRHLHqDWWyG4Gf2wwEoinSav1Am081FXL2q7kbhIQeDhxwlANbtVdhvKAdmAX18tJWUkJhVfY1Gk0mKeVtsGLuJ6IjlKEE983wW2I62LvQY%2ByQLck6aDSgbaQlIUkH%2BbA4pJLFbdrnsOAPcqXydl8uWGMBqaFUWFJdomFS4GelsuBgkrZ%2FzCmxOM5nmuhw1j3Le8Zh6kwx0HbavgPZjU%2F3Xc6EuQRlI%2BIcoiHqlTCDZ45fUqXf8B40WpUZUkG%2FS6HsfA%2B4sBpWxN1rYOd6bCAUoNWDV28bnWxEDPgEf7gyOMKq0riHrlwwAY9PK8OFoSgs5y06vrYh3VaWrn%2BqM9EfdVplHe5cLbD%2FfSrNbIzcwQ2rDyQ0bNiPVAszogMDLVRdYidjrPNcVLJKEcGpKGOL5T%2Bix9lGPNkJFonGTmKkYTXTf32qzI4kLdrayzn1MNF4Q6163GllqNpII%2BawGiaK1SdJiH2a61tSJMEKIpu4kt7w3XRkaHXPr2Qyv%2FkpMnvTg9kG%2BXwjn8pSG%2BNkWE%2FMyHRh3Rd6MKiWvskGOqUBekiQHwxVdBIJaa3J%2BQ8toO5R1C4ms9Z5%2BsL8hiYNH8HCcB4TxTM36fkkpRhd00cad7GclaNHr1yKZRyGf6lN1OeY57UxchMCF7MEwCtdia7RFmiOSlMISe%2FtBp7TqHCcXY5DsysxFFVcILyyC6J%2FbWd2beRSUc%2F1agcwM8PFG6OQCOSZE9J4UctotiDi0RDvu4PmkENdsm39cKtOV2X50bSWoDrr&X-Amz-Signature=cc7c3cda0a0fa6ef115d6a57f47e9eec2e2b23519c4821352b1a6d8b5acf90f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRDGLFO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCah6GpZ7IWmsOthp2YsGbiSYoNgeUl%2BKr3Fp08Wi3NRQIgCBF3%2BhL8B%2Bh2zVoF%2F806ti%2FD7MUGZelrtnDPuD4SVEwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMY%2BQnuP2hl5jIKwECrcA0GY921WJzsDuXiKGZuXL8eCZWNUd0%2BqPrKJuKmXCl6YpGKbMz3NpeTDur0pwZ9ffmFxwlB8ueI7ZiNdn1KcRtkhEUQAVqTRHLHqDWWyG4Gf2wwEoinSav1Am081FXL2q7kbhIQeDhxwlANbtVdhvKAdmAX18tJWUkJhVfY1Gk0mKeVtsGLuJ6IjlKEE983wW2I62LvQY%2ByQLck6aDSgbaQlIUkH%2BbA4pJLFbdrnsOAPcqXydl8uWGMBqaFUWFJdomFS4GelsuBgkrZ%2FzCmxOM5nmuhw1j3Le8Zh6kwx0HbavgPZjU%2F3Xc6EuQRlI%2BIcoiHqlTCDZ45fUqXf8B40WpUZUkG%2FS6HsfA%2B4sBpWxN1rYOd6bCAUoNWDV28bnWxEDPgEf7gyOMKq0riHrlwwAY9PK8OFoSgs5y06vrYh3VaWrn%2BqM9EfdVplHe5cLbD%2FfSrNbIzcwQ2rDyQ0bNiPVAszogMDLVRdYidjrPNcVLJKEcGpKGOL5T%2Bix9lGPNkJFonGTmKkYTXTf32qzI4kLdrayzn1MNF4Q6163GllqNpII%2BawGiaK1SdJiH2a61tSJMEKIpu4kt7w3XRkaHXPr2Qyv%2FkpMnvTg9kG%2BXwjn8pSG%2BNkWE%2FMyHRh3Rd6MKiWvskGOqUBekiQHwxVdBIJaa3J%2BQ8toO5R1C4ms9Z5%2BsL8hiYNH8HCcB4TxTM36fkkpRhd00cad7GclaNHr1yKZRyGf6lN1OeY57UxchMCF7MEwCtdia7RFmiOSlMISe%2FtBp7TqHCcXY5DsysxFFVcILyyC6J%2FbWd2beRSUc%2F1agcwM8PFG6OQCOSZE9J4UctotiDi0RDvu4PmkENdsm39cKtOV2X50bSWoDrr&X-Amz-Signature=8f74b00cf4216c7670fa94df9b8b4cc66cae8fabd2613956007379a31af118cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

