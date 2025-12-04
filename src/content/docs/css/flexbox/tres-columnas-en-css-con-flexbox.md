---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUSWTP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGI2recRuexarXD%2FAk4KvIRwq1ksZS0traoFaJQ7Ku2IAiAKyLrX1UPky%2F%2B5Rs5nGKC665dg4gbpZQ9GJCCFm5i91Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMPwhLNwQp7W2FfkEMKtwDwtdACVvHLEr1OQ7JreyN4SdWRuycpyrDJ%2FJNvarrPVOXq5of7geATm7Ee0IcgBz8MJZIUxFPf38%2FFvTywwsQa6KxMD8B7YF7w3gvq6zzLKZHXwnPXJWXspS5nqJo0WkTn4oieZOP0eaYB2dak1455izzS7Z7EWlMrPbRdscvGRptcz1nFeP7DEaowGltAEyo55bZEmspIdIXZj%2Fh1WTKSNIZ6%2FwrKEewuGWNrKUN4hf%2FuNrAWe8iWnRl%2F0MwJtnttciiQBhdrHSrxBSAgaxOGUFTrUt9wT5wb06P6oxlacsnOAuJKkv4ya1u0be7EurPcavxnlAJD3W%2B9F1aIEWmZMgR8GQeEB7B0t7MvTaDlHgVo5Spon7onHnHKpkBvVGC%2F4oR9Voo0biR%2Bb6FcuysIHe8Za5spiTi0wzOqrSzabVPzuNvaTqu66EkP%2BVfLCtva%2BIdGrijANu5XTu2FYJJPfwy3Qfme4FX%2F%2B%2FWeAtBXSCKjP0eCJitzfqOkeV%2FUTRgo%2FZ%2B5uTXbflxsH0vFQijbS%2BJQCle1KdD4uIIIa7IThm3Bq%2BUM5xIrlu7QF9LpN6uTy%2FwG3ZbpTeifZI5qvSb7z2HrLzFEKgXgrITjrUVvE%2B3Lj%2BVNa2B1r7CTosw9b7GyQY6pgFtuxV1Y0TlKMCMSXMfsZ8fcvUfJ1IoWu%2BbqYmZLUeOPbaAzyqg4UYT0807TkPydMCV%2B62GlLc%2B%2FVRM3wnl7FQuw0LUwotfCNwnpG3yD18uFGS75qajdg5CIOp9dOf%2FMCtVSOxFRbB2zPEqvAPrQ71WkQDKzMHPrN6qBP0HWBQB8ybjMf3CW2qSKB008Wh6CPiP6wrlEJHGAih5FEygza%2FxhuJWVZy8&X-Amz-Signature=b0fa76e29dfdea9cdb1fa4fa78597c7bcbdee6ef917dd28fcaba5c83157d3c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUSWTP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGI2recRuexarXD%2FAk4KvIRwq1ksZS0traoFaJQ7Ku2IAiAKyLrX1UPky%2F%2B5Rs5nGKC665dg4gbpZQ9GJCCFm5i91Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMPwhLNwQp7W2FfkEMKtwDwtdACVvHLEr1OQ7JreyN4SdWRuycpyrDJ%2FJNvarrPVOXq5of7geATm7Ee0IcgBz8MJZIUxFPf38%2FFvTywwsQa6KxMD8B7YF7w3gvq6zzLKZHXwnPXJWXspS5nqJo0WkTn4oieZOP0eaYB2dak1455izzS7Z7EWlMrPbRdscvGRptcz1nFeP7DEaowGltAEyo55bZEmspIdIXZj%2Fh1WTKSNIZ6%2FwrKEewuGWNrKUN4hf%2FuNrAWe8iWnRl%2F0MwJtnttciiQBhdrHSrxBSAgaxOGUFTrUt9wT5wb06P6oxlacsnOAuJKkv4ya1u0be7EurPcavxnlAJD3W%2B9F1aIEWmZMgR8GQeEB7B0t7MvTaDlHgVo5Spon7onHnHKpkBvVGC%2F4oR9Voo0biR%2Bb6FcuysIHe8Za5spiTi0wzOqrSzabVPzuNvaTqu66EkP%2BVfLCtva%2BIdGrijANu5XTu2FYJJPfwy3Qfme4FX%2F%2B%2FWeAtBXSCKjP0eCJitzfqOkeV%2FUTRgo%2FZ%2B5uTXbflxsH0vFQijbS%2BJQCle1KdD4uIIIa7IThm3Bq%2BUM5xIrlu7QF9LpN6uTy%2FwG3ZbpTeifZI5qvSb7z2HrLzFEKgXgrITjrUVvE%2B3Lj%2BVNa2B1r7CTosw9b7GyQY6pgFtuxV1Y0TlKMCMSXMfsZ8fcvUfJ1IoWu%2BbqYmZLUeOPbaAzyqg4UYT0807TkPydMCV%2B62GlLc%2B%2FVRM3wnl7FQuw0LUwotfCNwnpG3yD18uFGS75qajdg5CIOp9dOf%2FMCtVSOxFRbB2zPEqvAPrQ71WkQDKzMHPrN6qBP0HWBQB8ybjMf3CW2qSKB008Wh6CPiP6wrlEJHGAih5FEygza%2FxhuJWVZy8&X-Amz-Signature=a19958f0d762479c453b86445c146379b7531601b9536623a6704387747938a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

