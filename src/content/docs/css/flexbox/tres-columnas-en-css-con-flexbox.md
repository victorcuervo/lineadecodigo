---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3XXK3U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIClINNZOtynolvj1bh8cfyRYGfuuy%2F7CHQzOkJc7wdU%2BAiEA3BJKO%2F1ZduEcKmEYK%2FMAbI7ZJCL1%2FA8YFrHnRjYMNRIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIGPcBVEkysEOxTUiSrcA8SSxpIkxtJUeWEZ%2Fd12kmg69UpLVzJBHYkjgi2AOyPl8oaWMH6neFmHHVaHsAS3T5I3Raqpfr71KwTZxbtlf0vCWCp1NJ9nAszCC5JTCJj1ukAfwcjEIhCpSvChIslyoVSxUuZ0ioVSOE9kWjhFB7iyWj0ib3KyRisyGEw4VZQFUaQdKoaPgBPSS8GvLkxiuEQ3zqp5tZOE%2BcOm%2FTeqRAJ2rl00NM7Fv6ITSKtipqPtCBjd5t2F%2FskVmY%2F%2B4DFRX5Rl%2F4BfvuXTLg6C6RV3U71nQsn1RqVXs1V4M8MFnDlRNBXTAZjdQo6FyZ7zvHo8yfAnGTIUPXLGJFucEEzIxzApedPIhVMPJsqjsccmuVRCZQD62Ltp2D%2BxNYt1Woy2RNH32iVfZWZ9gtGNrjU59PpAusSKUkmkjqY3L5Tjr%2FD3lAkTTFC6kNP%2BKKPGa6xMvcPn6EeP0arDQVGUzKHSF71vFC1cUNqqFubwqS31kGYzyPESnkGiz1Q4y7Ib3JfLY7L1rKPdeb1NVOU%2BMrSrAhBXBVtciYlVe46Dkb4aePt0mReJIYdipL1rorl2%2BNJOZGQMyYJAPZOAviJmayCkA7Xf9eqFWbhhBf3nyHSLXexzj1l6SJGtCkQhI1puMJK0w8kGOqUBFtL%2Bcdin7dxfbnX2oWl8yk0CIpFhm1%2FE18%2FLnuysPIs05g5EOLp4S0I%2FHhSFeQXV9ABY0EHfc%2Fhf0N4O%2FPudhW6C%2FMc9JuRI6Hc0PDZNErLYSoeHs6jN%2FqPlAoO3%2B%2BJeDafPF%2BFoqYkhpKlKLobLKYoap7nLkXcLTnt0Bb%2FR6ceFsA21IHG4B%2Fci5dF9aZPLc%2BVzgQ6n8PAIe5e1iFom3KhwS7zz&X-Amz-Signature=1167519e75ebdb1f3e71791cae26cc5ef77a1f5e54c14d0013186ecd96d71ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3XXK3U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIClINNZOtynolvj1bh8cfyRYGfuuy%2F7CHQzOkJc7wdU%2BAiEA3BJKO%2F1ZduEcKmEYK%2FMAbI7ZJCL1%2FA8YFrHnRjYMNRIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIGPcBVEkysEOxTUiSrcA8SSxpIkxtJUeWEZ%2Fd12kmg69UpLVzJBHYkjgi2AOyPl8oaWMH6neFmHHVaHsAS3T5I3Raqpfr71KwTZxbtlf0vCWCp1NJ9nAszCC5JTCJj1ukAfwcjEIhCpSvChIslyoVSxUuZ0ioVSOE9kWjhFB7iyWj0ib3KyRisyGEw4VZQFUaQdKoaPgBPSS8GvLkxiuEQ3zqp5tZOE%2BcOm%2FTeqRAJ2rl00NM7Fv6ITSKtipqPtCBjd5t2F%2FskVmY%2F%2B4DFRX5Rl%2F4BfvuXTLg6C6RV3U71nQsn1RqVXs1V4M8MFnDlRNBXTAZjdQo6FyZ7zvHo8yfAnGTIUPXLGJFucEEzIxzApedPIhVMPJsqjsccmuVRCZQD62Ltp2D%2BxNYt1Woy2RNH32iVfZWZ9gtGNrjU59PpAusSKUkmkjqY3L5Tjr%2FD3lAkTTFC6kNP%2BKKPGa6xMvcPn6EeP0arDQVGUzKHSF71vFC1cUNqqFubwqS31kGYzyPESnkGiz1Q4y7Ib3JfLY7L1rKPdeb1NVOU%2BMrSrAhBXBVtciYlVe46Dkb4aePt0mReJIYdipL1rorl2%2BNJOZGQMyYJAPZOAviJmayCkA7Xf9eqFWbhhBf3nyHSLXexzj1l6SJGtCkQhI1puMJK0w8kGOqUBFtL%2Bcdin7dxfbnX2oWl8yk0CIpFhm1%2FE18%2FLnuysPIs05g5EOLp4S0I%2FHhSFeQXV9ABY0EHfc%2Fhf0N4O%2FPudhW6C%2FMc9JuRI6Hc0PDZNErLYSoeHs6jN%2FqPlAoO3%2B%2BJeDafPF%2BFoqYkhpKlKLobLKYoap7nLkXcLTnt0Bb%2FR6ceFsA21IHG4B%2Fci5dF9aZPLc%2BVzgQ6n8PAIe5e1iFom3KhwS7zz&X-Amz-Signature=48a6615c34fb6c05e19fd8e4db8910bc08ba2739072116d4942ea3f98a0bc3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

