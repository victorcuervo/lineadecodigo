---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVTGMPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6ydMLxIHGhkhNMtSXY4kWk0atQ7hmLydZPWrMZm%2Fg%2FAiBai0JjxmdvDPAKjk86i9pVMQ407lD%2FGMZDi8VhB5%2B2RCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPbC5tq5bqZrmrDAoKtwDoFKLeV2p9mh4ERpwHo8CbELKHpYUvmrJfxLpiKmNTxqfiQF1X5d4HYnlva4vKBz8kdfOC9KVnnOH6htsl%2B6oevVXT8udXImoO9wq0bLavnTU5AxHNiGgWsC1Td7QaJvEuxQITRJ5hDahlqJrrZNh11e%2Fmd7sJciqNMwzO40x61Y9gV0nY2wU%2BuEtbrp%2B6A8n4Wt1BeHnBrjoW2dRDEy4DfJgcw5RtleVir58WQ9jn0SU7BYjDcyCfs5x6Ovvrr0fjlr0JdPQxGKH4C9kKFHdvj4vBKNEjX16zruozIkq9c8x7hgmo5cbaqIKMuYliX9AuIqRAP2aqcEqhR6kKZ1os0C%2B50qCcTWAW6IN1EIbFcaqG0YRQkE2dX1MhNj5vbagOBoXeUTKncIyEkOwqUH4%2Fx6%2FPY74siaiixvmzhJh8ieLAW3R49nA6Y6qMRfy%2Ffv6JYiKyXOBSn%2FNH3JtOzfm%2B1i35rbhRG2xZ3WiW6qOZM%2BQXcxUgSF52l2H0aECmRbw8Qpd859evZhbVnbU7PVNjL2FMHZCPCV%2F51kY%2BMCAxtYekm%2FT3VOk%2Fs4a%2BQZN0Vjj4g7NbH1Mc8axsn1%2FJPw6V%2BgwokB1cD7tTvIlAjRQEGTeZe6xYI2Nk%2BPFE5sw%2BtHYyQY6pgHbGau3Iw5VmCQH3LITEck7URcxpj7ktaNej2uJ6CxpD%2BOOSRkruexJ%2BPp%2FGH1orDiPUYQjvJPHCubTMSJolPQgtwTsL3KBKmHc0EaI0cfXQiGhIQ03MES%2FZwB8dLzZuK3aDrvo5p4SAI8WBmzmeyz3lAgaAcK7NUV1DOlAXw8%2B1VvulficB1gtAmcA6vEY2%2BrWlNU6v0RUwJwbArzJv493zCz%2FGWUX&X-Amz-Signature=41de54b971f0c3d79d7184c940ead03ad27741185ccb1339b332d9f91f07ec7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVTGMPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6ydMLxIHGhkhNMtSXY4kWk0atQ7hmLydZPWrMZm%2Fg%2FAiBai0JjxmdvDPAKjk86i9pVMQ407lD%2FGMZDi8VhB5%2B2RCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPbC5tq5bqZrmrDAoKtwDoFKLeV2p9mh4ERpwHo8CbELKHpYUvmrJfxLpiKmNTxqfiQF1X5d4HYnlva4vKBz8kdfOC9KVnnOH6htsl%2B6oevVXT8udXImoO9wq0bLavnTU5AxHNiGgWsC1Td7QaJvEuxQITRJ5hDahlqJrrZNh11e%2Fmd7sJciqNMwzO40x61Y9gV0nY2wU%2BuEtbrp%2B6A8n4Wt1BeHnBrjoW2dRDEy4DfJgcw5RtleVir58WQ9jn0SU7BYjDcyCfs5x6Ovvrr0fjlr0JdPQxGKH4C9kKFHdvj4vBKNEjX16zruozIkq9c8x7hgmo5cbaqIKMuYliX9AuIqRAP2aqcEqhR6kKZ1os0C%2B50qCcTWAW6IN1EIbFcaqG0YRQkE2dX1MhNj5vbagOBoXeUTKncIyEkOwqUH4%2Fx6%2FPY74siaiixvmzhJh8ieLAW3R49nA6Y6qMRfy%2Ffv6JYiKyXOBSn%2FNH3JtOzfm%2B1i35rbhRG2xZ3WiW6qOZM%2BQXcxUgSF52l2H0aECmRbw8Qpd859evZhbVnbU7PVNjL2FMHZCPCV%2F51kY%2BMCAxtYekm%2FT3VOk%2Fs4a%2BQZN0Vjj4g7NbH1Mc8axsn1%2FJPw6V%2BgwokB1cD7tTvIlAjRQEGTeZe6xYI2Nk%2BPFE5sw%2BtHYyQY6pgHbGau3Iw5VmCQH3LITEck7URcxpj7ktaNej2uJ6CxpD%2BOOSRkruexJ%2BPp%2FGH1orDiPUYQjvJPHCubTMSJolPQgtwTsL3KBKmHc0EaI0cfXQiGhIQ03MES%2FZwB8dLzZuK3aDrvo5p4SAI8WBmzmeyz3lAgaAcK7NUV1DOlAXw8%2B1VvulficB1gtAmcA6vEY2%2BrWlNU6v0RUwJwbArzJv493zCz%2FGWUX&X-Amz-Signature=51c5918f24d9d806c9bd7ff915a2bfcf058f8b10dd217d9c492d33df6b83f08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

