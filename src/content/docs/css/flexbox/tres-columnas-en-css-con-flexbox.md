---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJMA43P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmKFbiONbg3pjUkkkCrK3FTyRf3DRpTfvU8VgtJtG0hAIhAOhZAxLvOn0AS5zCy3sn965jWbdsSPVZiQ7jM2FGKn9ZKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwm5mF%2BZILLfbBo6Wcq3AMhWY0VvoSCo8lXmmvHbFtP0GJL0yvVpvHSGOJ0TAL9I%2Ffmm1x5tQeFdJJX00ILIK5xbwL8j%2B2FL6fOmxZUvbSna%2BtH6maPSsv3%2Fst2z4BDLvRsxzCkuk%2Fp%2FrRQznonki%2Bz5RkpQVxifSk2F4fv88CBU%2Bv%2Bm5%2Bh%2Fpyzq1MTvZpiU5KvNC2H4SbeAxGvkxF%2F4Ij%2B5HbDRtA1Rfa9Rpf4k9ECrsnw7OgHHRjoguUjM3R0PBOP1d6%2BgPPU2nVN0VawrkJJlKJshEUJGKpdCcnQsFnQp39guLGaQS6tfkgiueWhmo%2F7qZzfZYgeYdL8dPm09gGqr5Jo99UE4HYFOef3DOcE37wrg0jUHxdFgePhIbCHLyDXlSBM71klS4JwO09JdOeg7oqK7HYegxYlbwyLYZA06jTs6lxKCRvA35foHAgtXZaNAeb95wKVaaZLe0Ma1ojY61umOkGyhnw2hqnH2imnFSdOWlB3YZ2BT3KEEBbZhNkqO%2FUToYRHnPnd1kX%2BNl4QvEva3ON%2BAnPa9Th8ouhIBujhQuQaciMMRwDOhM47FBGuu20ccoMjYeWwjgB0Y4ZX%2Bbvf5Q1Q5zz%2BzcfxWaSeRHJP1RU43kEs5KJFPs9Tr3R7uMwo7h2yk1whqjD8x9fJBjqkAQk9M6aqyeit92lfrOaZcb5JaKuE4PvnHONgAPAKUJTmn9wJoc5vqsTU9AUIB85ntCdrDXNheq9RafB1ILar9Fh7aBPxhcuYFgpgmzUWXOEQhuL9fhqFZmABwDoKNk3A39WR4hABZCMk15CnONqdkPYfSrA%2BNzkoEdvOhEGDe38LGVIbn8Fzu1%2FYqIbXtW8g5omJB0GXDtCyNMHb964s1Znw29gb&X-Amz-Signature=6aba256c4e60058e0a734a3edab665115d3db7ef0a82fd93cc09ff4f045a9b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JJMA43P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmKFbiONbg3pjUkkkCrK3FTyRf3DRpTfvU8VgtJtG0hAIhAOhZAxLvOn0AS5zCy3sn965jWbdsSPVZiQ7jM2FGKn9ZKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwm5mF%2BZILLfbBo6Wcq3AMhWY0VvoSCo8lXmmvHbFtP0GJL0yvVpvHSGOJ0TAL9I%2Ffmm1x5tQeFdJJX00ILIK5xbwL8j%2B2FL6fOmxZUvbSna%2BtH6maPSsv3%2Fst2z4BDLvRsxzCkuk%2Fp%2FrRQznonki%2Bz5RkpQVxifSk2F4fv88CBU%2Bv%2Bm5%2Bh%2Fpyzq1MTvZpiU5KvNC2H4SbeAxGvkxF%2F4Ij%2B5HbDRtA1Rfa9Rpf4k9ECrsnw7OgHHRjoguUjM3R0PBOP1d6%2BgPPU2nVN0VawrkJJlKJshEUJGKpdCcnQsFnQp39guLGaQS6tfkgiueWhmo%2F7qZzfZYgeYdL8dPm09gGqr5Jo99UE4HYFOef3DOcE37wrg0jUHxdFgePhIbCHLyDXlSBM71klS4JwO09JdOeg7oqK7HYegxYlbwyLYZA06jTs6lxKCRvA35foHAgtXZaNAeb95wKVaaZLe0Ma1ojY61umOkGyhnw2hqnH2imnFSdOWlB3YZ2BT3KEEBbZhNkqO%2FUToYRHnPnd1kX%2BNl4QvEva3ON%2BAnPa9Th8ouhIBujhQuQaciMMRwDOhM47FBGuu20ccoMjYeWwjgB0Y4ZX%2Bbvf5Q1Q5zz%2BzcfxWaSeRHJP1RU43kEs5KJFPs9Tr3R7uMwo7h2yk1whqjD8x9fJBjqkAQk9M6aqyeit92lfrOaZcb5JaKuE4PvnHONgAPAKUJTmn9wJoc5vqsTU9AUIB85ntCdrDXNheq9RafB1ILar9Fh7aBPxhcuYFgpgmzUWXOEQhuL9fhqFZmABwDoKNk3A39WR4hABZCMk15CnONqdkPYfSrA%2BNzkoEdvOhEGDe38LGVIbn8Fzu1%2FYqIbXtW8g5omJB0GXDtCyNMHb964s1Znw29gb&X-Amz-Signature=d305c2af6530853be14cb5fe7b86c6b9b7af0f811210c04c44c6eebb3822ee09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

