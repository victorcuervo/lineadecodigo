---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6RFFLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICC54IkfDqBtFV242%2B5EpN0o7vx64XXS3a%2Be%2FP8eYm%2FRAiEA%2Fj60UTqce7Yawo7P3uXKwiwGmh279fXtl6vQBzI7ihEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFONAB1o0z13P6%2BXeyrcA54eopn0Icundj%2F0%2FvWpv0aO1z78a7U2zKRojTHDTtAeXoda5AG9dL4%2FmoORqaFTVK3Ed4iUQupf91gu%2F096VjMlg2thU8GwazYB%2BXNd7eJcQ%2F3BuYN1rq5Ai9N3dmzJnsd13XjxXtY1W5yX8HRq2pStOob2eJ73SOlFg1qCc%2FwP%2F7VOoXzC9xp184kfBOyazjc22j6DTEUDNC9fwdYxxaEgbFdbZu3qWWxDifez1uCDERdCfn9Zhhv5UxftHPnvzagBBVrlEoL3k0nyDiVevsaZlTEXTEU3WLzAmu6tiZBRYwX5p0rBmkYxO8pXLPiAWASuMZqo6kxpBAl1G0JLqfjKpOx2MQSTaTJn7q9Gx4tR7TZ9R2U1bS2qMCCQl6dWbsP7eLqHq4lHN%2FRmoLAhDj%2BqOfSVLkHDENLtSR0W1%2BOnDBncDudgkkCW%2BIoozx%2BZ6Bc8MF2H5hG5NgmWko8o%2BdaoVQ9o1DaWQgih2HFoiSGnsCCm9RbP6Y9Cb2A5IE1nzBZAgHoC0wt5eOWTy%2BktOejghcRmOL9yY8480Q1GU3SR5jZz4M993OrHUPbtqwPr%2FgQk9ghs55z%2B2oPeVUYAlDuTw6twzXJp9n4XsnpKPBG5Wr%2BcCn9l0xT8M9E8MNmFxckGOqUB8ocmF1%2FsChQskFJEqgEnB7yzNHl%2FCvjs7468NB%2F1%2B4EgCWMfk%2F93x%2BOtpxyPvv1sqAvfMY2aDfAR9%2FhkE1OXVOgEeeND0RhcyWNgSq9Y0LP19hF8meS3W3x5xiSM1jnIYlbsliPwg66ZFD0Un0X%2BGUDL7eetAjP0s3dSZMgcD1tsGcAFUuvf%2Fu2MF55HMqz3HrxDGuLEqpbNIPgwLt2q0Lm6ra4v&X-Amz-Signature=d926a9c38411ce556cd545cb77c2d86465c42d3152228b879a5af6167bc0fef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6RFFLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICC54IkfDqBtFV242%2B5EpN0o7vx64XXS3a%2Be%2FP8eYm%2FRAiEA%2Fj60UTqce7Yawo7P3uXKwiwGmh279fXtl6vQBzI7ihEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFONAB1o0z13P6%2BXeyrcA54eopn0Icundj%2F0%2FvWpv0aO1z78a7U2zKRojTHDTtAeXoda5AG9dL4%2FmoORqaFTVK3Ed4iUQupf91gu%2F096VjMlg2thU8GwazYB%2BXNd7eJcQ%2F3BuYN1rq5Ai9N3dmzJnsd13XjxXtY1W5yX8HRq2pStOob2eJ73SOlFg1qCc%2FwP%2F7VOoXzC9xp184kfBOyazjc22j6DTEUDNC9fwdYxxaEgbFdbZu3qWWxDifez1uCDERdCfn9Zhhv5UxftHPnvzagBBVrlEoL3k0nyDiVevsaZlTEXTEU3WLzAmu6tiZBRYwX5p0rBmkYxO8pXLPiAWASuMZqo6kxpBAl1G0JLqfjKpOx2MQSTaTJn7q9Gx4tR7TZ9R2U1bS2qMCCQl6dWbsP7eLqHq4lHN%2FRmoLAhDj%2BqOfSVLkHDENLtSR0W1%2BOnDBncDudgkkCW%2BIoozx%2BZ6Bc8MF2H5hG5NgmWko8o%2BdaoVQ9o1DaWQgih2HFoiSGnsCCm9RbP6Y9Cb2A5IE1nzBZAgHoC0wt5eOWTy%2BktOejghcRmOL9yY8480Q1GU3SR5jZz4M993OrHUPbtqwPr%2FgQk9ghs55z%2B2oPeVUYAlDuTw6twzXJp9n4XsnpKPBG5Wr%2BcCn9l0xT8M9E8MNmFxckGOqUB8ocmF1%2FsChQskFJEqgEnB7yzNHl%2FCvjs7468NB%2F1%2B4EgCWMfk%2F93x%2BOtpxyPvv1sqAvfMY2aDfAR9%2FhkE1OXVOgEeeND0RhcyWNgSq9Y0LP19hF8meS3W3x5xiSM1jnIYlbsliPwg66ZFD0Un0X%2BGUDL7eetAjP0s3dSZMgcD1tsGcAFUuvf%2Fu2MF55HMqz3HrxDGuLEqpbNIPgwLt2q0Lm6ra4v&X-Amz-Signature=79f3620cf4c40dee76e0afb09862d0970895de34349d1c3eb1ad227b09879d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

