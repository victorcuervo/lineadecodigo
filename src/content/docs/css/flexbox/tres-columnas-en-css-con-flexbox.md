---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYEAGUR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyg0sY77ifh6ZiEKVH03TRNvZXYensY8v1fx8mnqz85AiEArRpTC7Zozr9zVq2zMrcOKCtmXzf7kWg0OD33txlqLmEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNUvS%2FXEqF9iqrO2SCrcA2JQV1p0Rnasg91HEBGdNJiPNRTQjwN9KQDulywJ%2BkDCtKLmA1oxHbGp1UCq7xYtW%2FlBxvwqixupzwbADiultUjeqW0rylddBCHsoUsX3XWmMKC8YdQp68y3VgIGmdLvFWzDgpMDE3OaAsT5TNvnPtvXDzkrm6wiuhFsd0jXy7TCEJG1m6s0al%2FsBnVtcU2kUjerPzUOg7g%2BxDZrMiTXlCB0ge0%2F0H8bu6a2ibszyNFWsKsYSbjz6TWsRc0BxcmMOfE3fwfs7DgN2Ax2XXyr4lLoB%2BziMatf%2BWAlofCdsnWiDKDXlie4vE3WfzNdVfhNg4SimUntlVmwwrFHMnW3rz0%2B5ktTftNm%2BM8dgKOTRwlXVjWHK4PY2n9v93CjbYnYlv5dQJWFXVCOCO8efw3dQgHZvGhiF48h%2BzGyj1WvS5faWTXjwl0bHVbpb3%2Bv8dMZnvCo%2FsPGui6pksrVhYr6G613k1Zzg6dqmHx4NBLnCRKhhjTL%2FUs5mGccYgaNaUTozoT2K6MY1kn6hdHnmLDkuEykl00I77rN1zFu4HveOZwFdG9bV2b9TBmLbPQGxQ61ruNSFAZIPu9xiu6TxvIpndb41QajtCrGF2n7QHWOnLpSu9%2FAGj2RVXaB8bb4MLyMyMkGOqUBDlws%2F5bxu05oAANNaXweYw%2FohWfdrU6sLWPModfP3MPvMpobmAlxXNJ2J%2BZHDSvB3DL87EbAbLIdzLj8Qnq8H%2FPxpGlCon0b%2FK7ohu%2FUTK2UTExRSwcAvLIKWcZ%2F96B5pUYBwkBvD6guDSjEgYLxCBhs2LvgjmtqVzmt1ZM8vGkwrm7m1PLv%2BZPOgzukwBOqN9DkCqkQW5YGNvNrVSl%2BiIOcNt5w&X-Amz-Signature=37ca78b54f45d25cd9b0c47a78590e04b212c3dfb6650776d72786d156ef52d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLYEAGUR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyg0sY77ifh6ZiEKVH03TRNvZXYensY8v1fx8mnqz85AiEArRpTC7Zozr9zVq2zMrcOKCtmXzf7kWg0OD33txlqLmEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNUvS%2FXEqF9iqrO2SCrcA2JQV1p0Rnasg91HEBGdNJiPNRTQjwN9KQDulywJ%2BkDCtKLmA1oxHbGp1UCq7xYtW%2FlBxvwqixupzwbADiultUjeqW0rylddBCHsoUsX3XWmMKC8YdQp68y3VgIGmdLvFWzDgpMDE3OaAsT5TNvnPtvXDzkrm6wiuhFsd0jXy7TCEJG1m6s0al%2FsBnVtcU2kUjerPzUOg7g%2BxDZrMiTXlCB0ge0%2F0H8bu6a2ibszyNFWsKsYSbjz6TWsRc0BxcmMOfE3fwfs7DgN2Ax2XXyr4lLoB%2BziMatf%2BWAlofCdsnWiDKDXlie4vE3WfzNdVfhNg4SimUntlVmwwrFHMnW3rz0%2B5ktTftNm%2BM8dgKOTRwlXVjWHK4PY2n9v93CjbYnYlv5dQJWFXVCOCO8efw3dQgHZvGhiF48h%2BzGyj1WvS5faWTXjwl0bHVbpb3%2Bv8dMZnvCo%2FsPGui6pksrVhYr6G613k1Zzg6dqmHx4NBLnCRKhhjTL%2FUs5mGccYgaNaUTozoT2K6MY1kn6hdHnmLDkuEykl00I77rN1zFu4HveOZwFdG9bV2b9TBmLbPQGxQ61ruNSFAZIPu9xiu6TxvIpndb41QajtCrGF2n7QHWOnLpSu9%2FAGj2RVXaB8bb4MLyMyMkGOqUBDlws%2F5bxu05oAANNaXweYw%2FohWfdrU6sLWPModfP3MPvMpobmAlxXNJ2J%2BZHDSvB3DL87EbAbLIdzLj8Qnq8H%2FPxpGlCon0b%2FK7ohu%2FUTK2UTExRSwcAvLIKWcZ%2F96B5pUYBwkBvD6guDSjEgYLxCBhs2LvgjmtqVzmt1ZM8vGkwrm7m1PLv%2BZPOgzukwBOqN9DkCqkQW5YGNvNrVSl%2BiIOcNt5w&X-Amz-Signature=f2bd5eb0bda9f30783b2419fb74529ed21d01abbc0ef0d7ec86f20771d0453f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

