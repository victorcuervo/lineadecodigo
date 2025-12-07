---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQ5MDHL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJEcQdHfWSv9xJKhaDro%2B%2B6gspnnKL35LvKf6JpnRC7AiEAi7fDiFPXAUWAwBWGTSDCnOYIAQYr4EHYKNgELFjTK8AqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDfJOaN03s5YgwM%2FSrcA8et2iy0PJ6IjiIOUw6BlmY5wSku2ffC5Jf95NhWxn2JbuoBlkz3RUJxkoAAoX67LLEdLzzBNA7XlWb3500s%2F2xPUwNTzoRSaAnBGz1P%2Bj4dEm9WnSLy%2B%2BD6ckljkNgFeLCehuRxQfMPl1%2BUp4OSk%2FNVHdMercRuutJXYiXB7LjxJKr9GPjH1yMc%2BxcdqYT6wp4ZitxH6bcPPni%2FUy0Wu0YJOM6x%2F03gT3hQiyjjLBGfgtWCTuAXGjxNwUPpld6wt1uTVYB9vvlbejpIHNxIU%2B3BYTg65%2BUsdcwo5IgXy2wXpfDBJeAibfpKsZ20EIITvW8lMGqN6XKEgL2XpI3k4Fsn7Dw474N%2BPKaK%2BLlz2u73JgYQavP7g9BG67U6h6BB7PVDkZie2WLpsPXbxWvrxJpwgrw0a3qCHLcIdWQt6VKQzK%2FnTPEjT1Xb1iJbJrQcKO8omS54fWHVzPX7Ro%2FgF4oNMy0%2BbCmouzxlpIiDAh8Wc9acdUrdphDhqNjVevdtBfqsmBxkbSfaXBt6OOPX%2FeFazm34AVKaR1xZhcmFES5r5Sb4dLgQC0gwybbqv1JWI6yT7EIveWUAw%2Fzplx%2BW0Gq0XvdEssHxj69Bq2Afjg3pJLk5LWUzKqOtDNuxMO%2B61skGOqUB5sM3NzQ4kTBPBCJYyYEAcvBdxIxuRmaN7vA67IaZ1lDLEFhthYlmSXrNXLNaeHFE2bXwQpzi%2BIAhi%2FUiHO0ZhUp%2FChF2gTZOyHP2HX90p%2BdnzqS0z0JJArZAlEXzncNjxo%2BCSD55wv1Ijrxtx6aANJZkD4vot6CoNJYryP%2FHwXVUTBaFkUFeM9cm5VO%2FnVYf7TXZldZI1u64YzrffrmWmSwhRTEA&X-Amz-Signature=499487f054d0e3c383d6b25fe100d6d9b98a9e70a53483d5dbb20e84db3250a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQ5MDHL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJEcQdHfWSv9xJKhaDro%2B%2B6gspnnKL35LvKf6JpnRC7AiEAi7fDiFPXAUWAwBWGTSDCnOYIAQYr4EHYKNgELFjTK8AqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDfJOaN03s5YgwM%2FSrcA8et2iy0PJ6IjiIOUw6BlmY5wSku2ffC5Jf95NhWxn2JbuoBlkz3RUJxkoAAoX67LLEdLzzBNA7XlWb3500s%2F2xPUwNTzoRSaAnBGz1P%2Bj4dEm9WnSLy%2B%2BD6ckljkNgFeLCehuRxQfMPl1%2BUp4OSk%2FNVHdMercRuutJXYiXB7LjxJKr9GPjH1yMc%2BxcdqYT6wp4ZitxH6bcPPni%2FUy0Wu0YJOM6x%2F03gT3hQiyjjLBGfgtWCTuAXGjxNwUPpld6wt1uTVYB9vvlbejpIHNxIU%2B3BYTg65%2BUsdcwo5IgXy2wXpfDBJeAibfpKsZ20EIITvW8lMGqN6XKEgL2XpI3k4Fsn7Dw474N%2BPKaK%2BLlz2u73JgYQavP7g9BG67U6h6BB7PVDkZie2WLpsPXbxWvrxJpwgrw0a3qCHLcIdWQt6VKQzK%2FnTPEjT1Xb1iJbJrQcKO8omS54fWHVzPX7Ro%2FgF4oNMy0%2BbCmouzxlpIiDAh8Wc9acdUrdphDhqNjVevdtBfqsmBxkbSfaXBt6OOPX%2FeFazm34AVKaR1xZhcmFES5r5Sb4dLgQC0gwybbqv1JWI6yT7EIveWUAw%2Fzplx%2BW0Gq0XvdEssHxj69Bq2Afjg3pJLk5LWUzKqOtDNuxMO%2B61skGOqUB5sM3NzQ4kTBPBCJYyYEAcvBdxIxuRmaN7vA67IaZ1lDLEFhthYlmSXrNXLNaeHFE2bXwQpzi%2BIAhi%2FUiHO0ZhUp%2FChF2gTZOyHP2HX90p%2BdnzqS0z0JJArZAlEXzncNjxo%2BCSD55wv1Ijrxtx6aANJZkD4vot6CoNJYryP%2FHwXVUTBaFkUFeM9cm5VO%2FnVYf7TXZldZI1u64YzrffrmWmSwhRTEA&X-Amz-Signature=1c484f1f30d5be2a0246c0cf59b6b672786d8ef3e1fcc54e0b785b90c99c0b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

