---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOQV5VQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkOJcVrJW2I%2FfMhVmzScP1RuSo%2FS8HxaqxMvBWEB2QNwIhAPstyZdBb0j7dhNm3FcbPiTOYh4eDvyvHLi7pfkbEsosKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzExl0J7LY1v0haORgq3APOR6Vjlo9QGHPXAwwPoK54UpT9PdEazTJRBSsqrf90HxaXI133r4ENzEceFKaMMbn1cRyi5KQHJC2rUOpLqjuFbCL1yS3XYJIgCR%2Bh3r%2BpJHriyPZLbd0Wv%2BMpKghPPBdT9vbWAHpiGXoNm%2Fq5YYE%2BvcE2683aBeaPtslwyydtyH12gZQPGrZ3zyGakHLpnRdtRxm1BuzT55XJrAKk31g0QoPYfZnX5OcASOTK6OP1%2B6SCR5G8nzNUSdzcmWkOIXmzp2Ich62VQ%2FrjnyjY900jES56kn2WSsxhOsduqfZThnLyEmkoH9I2C8XAKq1xRoZ%2BKcxUnRAj7jiyJd8PJ31QSeabsdf0%2BXIk5RNKEr%2FPmf69zGd%2B5UPwA1MGbxFRcd7dWOG9oASvsZ9zzgBMCH87luWdb9yxycIX4H1UzjBi0U7b99GkCMZOPlsEb0JnqTPs7WY0dKWZHGaDgSRq%2FcxqlOjgspnBUj4qcNfo%2FN%2BnMel%2BcBxD69ScsBytOt8DkbGsFdOt9d8DLnrs7PcHfv1hW%2B%2F3y%2BULyV3%2BpTPpqav0fkYyo%2Fp%2Bf%2FJYxlMvfq7SsHKqMXt3pcVg3%2FYawIkXz9v1qV%2BVFZzRRg0g3dgWsg9DK%2FEK6M5o58F76UeurzDTjd7JBjqkAR1Gd30HNz1Tw17zVGwRAxsQaxPt8EVRn%2F7srKtHEsg0cb0e4Yiy8Vpgs2tai1VF2RxY8%2FrGhFRBYG%2FLt8HQFFMjDk9MjP5Ac0NjaMxSikBtGI69vcKleuc3X%2BV%2BVPI4ptzyELCXDSfflRXq1wiGF35NHIkldCtyTvK%2Bzyr6MY88UzXj%2FJFMglnVRxRL9I3TZKScYXwM%2F00pmHlSp31Dkf3JWe2D&X-Amz-Signature=d912890df95849400ac3e98da80479ac9d87be3d93f6aede4f281a869f79b6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOQV5VQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkOJcVrJW2I%2FfMhVmzScP1RuSo%2FS8HxaqxMvBWEB2QNwIhAPstyZdBb0j7dhNm3FcbPiTOYh4eDvyvHLi7pfkbEsosKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzExl0J7LY1v0haORgq3APOR6Vjlo9QGHPXAwwPoK54UpT9PdEazTJRBSsqrf90HxaXI133r4ENzEceFKaMMbn1cRyi5KQHJC2rUOpLqjuFbCL1yS3XYJIgCR%2Bh3r%2BpJHriyPZLbd0Wv%2BMpKghPPBdT9vbWAHpiGXoNm%2Fq5YYE%2BvcE2683aBeaPtslwyydtyH12gZQPGrZ3zyGakHLpnRdtRxm1BuzT55XJrAKk31g0QoPYfZnX5OcASOTK6OP1%2B6SCR5G8nzNUSdzcmWkOIXmzp2Ich62VQ%2FrjnyjY900jES56kn2WSsxhOsduqfZThnLyEmkoH9I2C8XAKq1xRoZ%2BKcxUnRAj7jiyJd8PJ31QSeabsdf0%2BXIk5RNKEr%2FPmf69zGd%2B5UPwA1MGbxFRcd7dWOG9oASvsZ9zzgBMCH87luWdb9yxycIX4H1UzjBi0U7b99GkCMZOPlsEb0JnqTPs7WY0dKWZHGaDgSRq%2FcxqlOjgspnBUj4qcNfo%2FN%2BnMel%2BcBxD69ScsBytOt8DkbGsFdOt9d8DLnrs7PcHfv1hW%2B%2F3y%2BULyV3%2BpTPpqav0fkYyo%2Fp%2Bf%2FJYxlMvfq7SsHKqMXt3pcVg3%2FYawIkXz9v1qV%2BVFZzRRg0g3dgWsg9DK%2FEK6M5o58F76UeurzDTjd7JBjqkAR1Gd30HNz1Tw17zVGwRAxsQaxPt8EVRn%2F7srKtHEsg0cb0e4Yiy8Vpgs2tai1VF2RxY8%2FrGhFRBYG%2FLt8HQFFMjDk9MjP5Ac0NjaMxSikBtGI69vcKleuc3X%2BV%2BVPI4ptzyELCXDSfflRXq1wiGF35NHIkldCtyTvK%2Bzyr6MY88UzXj%2FJFMglnVRxRL9I3TZKScYXwM%2F00pmHlSp31Dkf3JWe2D&X-Amz-Signature=4419478e9e5916e099ab6a66c6e8dda0f727f4819537d5ed69160e5f8a42e264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

