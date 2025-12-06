---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LOXJSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhxvtbtBxiWx8VBOofmW1JF9FtWVlZIFwe9QfqOVlu%2FAIhAKlgMUl7WEh%2BA%2FHPQiOkqCphkIFbbu8KClnlVVJSpvNYKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2BnFL3GvsD10z84cIq3AM8pcqMdhpK62oM9Hesv7eK458SjFQ1yfgnmuvNd32BP0ZjNoQE18FPYNtbhttoCVU9zpAVY8pjOQBTiUt%2FUJmbEyyI5a6Q7pzPlhRxn5qanHwEKttt5HbJTfYPxpWhb%2B7iUpZSl8AtZAarIBiJIqs%2BxrxHew%2BcIdWZJVYjrJqRA5dES2RyJuSiNigJkYyjiZD7s3QkO2owhGAWVi4JR5JCFVnOI5QcJALVuDYcZKTyzImZUbdYC2xKVL9XzW9bft2yH4rlSIoc1ez%2BDgoTbtxO4WUoqsNiEUoMueS1CfqPV10n1YlNQRe6wdbE7Uw4GkVT0%2BLFwfmoMedaIajiATCJ2iQj4DJnq3S8itBMS1od50jHuy%2FF%2FZjeS5L93VTTIBgIMwl3RUUHD2mCCQZ%2FHgmJ63WqA6dSoK9IvJoP7QLGaXpzOQf%2BO3TG1WMF%2Bw%2BxZWCvxZOFmMCns23LZhNjzdd2pus87xao3TpCVMIlFwxH2%2Bsysx6emHq8%2BBEeLzhD%2Fp8JFEt0OSwV28yWDTdAIzIK%2Fd%2F4dzBy5tqVdQjPLVGYpOjSgS2AMF6dANu4agfHzV%2B4i0McZeH60TAABtrROvk%2Br4KWRvKVi7OrBkbHb9rlhBUu1LpEOGUNEsRQQzDRy9HJBjqkAc%2BBPDnegwCe%2F4Ax%2BX3R3v4Hx4fDIODxq8%2FH2u%2F34pVpaidUqTEswMZPZQSocYxCrWXOQDqMLG8qO1hwh5%2BdPjAyEx63Gb8s2paRWyNlGJxMyMqUlf2JPcv%2B%2BGRqdYrTMAFYq7Wem%2FuEMz96G4CfcmGWP8OZEhkshEyXQO1KRYDEolzJPPBOcZ1HjEyDo%2FWYiWSrCvPGgA%2FLLAEheMgiyStpHfSx&X-Amz-Signature=ed0142b06b4e0635a21aac22f1376253f13399583e83a3a1acbc846c520a06b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LOXJSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhxvtbtBxiWx8VBOofmW1JF9FtWVlZIFwe9QfqOVlu%2FAIhAKlgMUl7WEh%2BA%2FHPQiOkqCphkIFbbu8KClnlVVJSpvNYKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2BnFL3GvsD10z84cIq3AM8pcqMdhpK62oM9Hesv7eK458SjFQ1yfgnmuvNd32BP0ZjNoQE18FPYNtbhttoCVU9zpAVY8pjOQBTiUt%2FUJmbEyyI5a6Q7pzPlhRxn5qanHwEKttt5HbJTfYPxpWhb%2B7iUpZSl8AtZAarIBiJIqs%2BxrxHew%2BcIdWZJVYjrJqRA5dES2RyJuSiNigJkYyjiZD7s3QkO2owhGAWVi4JR5JCFVnOI5QcJALVuDYcZKTyzImZUbdYC2xKVL9XzW9bft2yH4rlSIoc1ez%2BDgoTbtxO4WUoqsNiEUoMueS1CfqPV10n1YlNQRe6wdbE7Uw4GkVT0%2BLFwfmoMedaIajiATCJ2iQj4DJnq3S8itBMS1od50jHuy%2FF%2FZjeS5L93VTTIBgIMwl3RUUHD2mCCQZ%2FHgmJ63WqA6dSoK9IvJoP7QLGaXpzOQf%2BO3TG1WMF%2Bw%2BxZWCvxZOFmMCns23LZhNjzdd2pus87xao3TpCVMIlFwxH2%2Bsysx6emHq8%2BBEeLzhD%2Fp8JFEt0OSwV28yWDTdAIzIK%2Fd%2F4dzBy5tqVdQjPLVGYpOjSgS2AMF6dANu4agfHzV%2B4i0McZeH60TAABtrROvk%2Br4KWRvKVi7OrBkbHb9rlhBUu1LpEOGUNEsRQQzDRy9HJBjqkAc%2BBPDnegwCe%2F4Ax%2BX3R3v4Hx4fDIODxq8%2FH2u%2F34pVpaidUqTEswMZPZQSocYxCrWXOQDqMLG8qO1hwh5%2BdPjAyEx63Gb8s2paRWyNlGJxMyMqUlf2JPcv%2B%2BGRqdYrTMAFYq7Wem%2FuEMz96G4CfcmGWP8OZEhkshEyXQO1KRYDEolzJPPBOcZ1HjEyDo%2FWYiWSrCvPGgA%2FLLAEheMgiyStpHfSx&X-Amz-Signature=9f3fa370f130607265f585540bb9e002612278bfa25ea52edf78ca4be43906c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

