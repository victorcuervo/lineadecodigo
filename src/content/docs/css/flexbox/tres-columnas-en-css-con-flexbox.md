---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4TCUBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3yMXfcVDBzW4cU4MTN8LKrhNFkkYT1bVu6R2JaGDVwIgOq7ZRQ9M3f7Tit%2FdRAwbFg5VRqESO%2BfmbvtRDvazNW8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKx4w9rQtNZ8BTBaASrcAwGaQgWWnSSbhxr4GJq5TOeTKn%2B%2Fk8rBxsIKTTAPqoQqFIcUY7hzSJtFozDCWIEwRnv2G%2FBWgwkaTiwd6ROT8j0sqa5CdTlAIw8zvMfShw%2Fa7ZAogBtg%2B2ps1tDBPD%2FAZIuiJpkaPt6nA%2B4tSrENC%2BKmg7CIbErLtL5GTqDtKudVBtuLZksZ0eZ8kfToFgEdiHFm4Le52XymInURiWKa7Ri4BQ2kLv5aQ5peJhjw94Yv5uA2KGA%2FtCJSM9Q1CiAJJnEkS2Cq1wBsG40k3NCqIj0hcAVf8%2BAa0EgXjbgMve3Uhl4cv5FFBiRfobt%2BmRSMx4PYWXOXWlc%2BSgvNIgkqDjhnNk4aDTfg%2Bflyvdw3GshVjYUPZT9xcsojHbfW9e6tDZyz7iAVzk26zb4o0WBvQdZjqBPmE%2BJi9QEFfs%2FBrSoaZFBIKdQ6bC4DZnuLYxHYyiPJRmvqCVdTBB68jgtkCVnXB35zTp40z9mkPVqyV5OTjUud6HMuO8mNMUY4SR07lpzr2biRAxwe%2B7zK5c%2Fhyanoqu0S8GOtdk0hBJYz67d0w6EiKY4TapPEy2IIhTAyIGdqe%2BT9fnxyqVBj1hDCPgkMLQFbQIJB9rn6Oc68mgiFPCHqZelyup6Z24spMPCJ0MkGOqUBGqjR4kz5RpD3A%2FbWJeMfBvwyw9BN32yPiW3MqUmPqdjvRyM6Z4yPdHVde%2F1CnTL7A8S5JxBBGEthWH9Z0cKscekcGB8%2FllxAwmgwPrEs2QqTMkkHAl8OofoVfBLBlUOATMoAW9OypAQ5ni1%2BsLIY09WqTgICM5zApenPjsA7Yi7u5oTB8qLuaGgSh6OlC2rK6P%2FgcUao55YY1nmGwd4LBp2OFtvb&X-Amz-Signature=62a25fcaf51d164bd55c4823a7dda64573f3ac03c9a4caa59996f1ce4a5746ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4TCUBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3yMXfcVDBzW4cU4MTN8LKrhNFkkYT1bVu6R2JaGDVwIgOq7ZRQ9M3f7Tit%2FdRAwbFg5VRqESO%2BfmbvtRDvazNW8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKx4w9rQtNZ8BTBaASrcAwGaQgWWnSSbhxr4GJq5TOeTKn%2B%2Fk8rBxsIKTTAPqoQqFIcUY7hzSJtFozDCWIEwRnv2G%2FBWgwkaTiwd6ROT8j0sqa5CdTlAIw8zvMfShw%2Fa7ZAogBtg%2B2ps1tDBPD%2FAZIuiJpkaPt6nA%2B4tSrENC%2BKmg7CIbErLtL5GTqDtKudVBtuLZksZ0eZ8kfToFgEdiHFm4Le52XymInURiWKa7Ri4BQ2kLv5aQ5peJhjw94Yv5uA2KGA%2FtCJSM9Q1CiAJJnEkS2Cq1wBsG40k3NCqIj0hcAVf8%2BAa0EgXjbgMve3Uhl4cv5FFBiRfobt%2BmRSMx4PYWXOXWlc%2BSgvNIgkqDjhnNk4aDTfg%2Bflyvdw3GshVjYUPZT9xcsojHbfW9e6tDZyz7iAVzk26zb4o0WBvQdZjqBPmE%2BJi9QEFfs%2FBrSoaZFBIKdQ6bC4DZnuLYxHYyiPJRmvqCVdTBB68jgtkCVnXB35zTp40z9mkPVqyV5OTjUud6HMuO8mNMUY4SR07lpzr2biRAxwe%2B7zK5c%2Fhyanoqu0S8GOtdk0hBJYz67d0w6EiKY4TapPEy2IIhTAyIGdqe%2BT9fnxyqVBj1hDCPgkMLQFbQIJB9rn6Oc68mgiFPCHqZelyup6Z24spMPCJ0MkGOqUBGqjR4kz5RpD3A%2FbWJeMfBvwyw9BN32yPiW3MqUmPqdjvRyM6Z4yPdHVde%2F1CnTL7A8S5JxBBGEthWH9Z0cKscekcGB8%2FllxAwmgwPrEs2QqTMkkHAl8OofoVfBLBlUOATMoAW9OypAQ5ni1%2BsLIY09WqTgICM5zApenPjsA7Yi7u5oTB8qLuaGgSh6OlC2rK6P%2FgcUao55YY1nmGwd4LBp2OFtvb&X-Amz-Signature=0a636d40f07586d1c5e81a53c73404a78f276b9f08b48c879370a11f76b3db87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

