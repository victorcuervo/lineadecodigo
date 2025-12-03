---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQBEEJG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBv92UvaXeSr%2FEjFvbwXom2rdQCk9lmVcU1GmimwU%2B3bAiEAiONAfUbjkUMyswCTfP4aca%2FcZSiRpxa%2F73GskHDu%2BxEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPDGtwJZXAy1LvTvhircA0LCArLXY8hB2qvZcI9WxmjSjHatS7pGYXwU%2FGj6uzqV7N%2FTgvVU3PmucVojUUK3dXYp5uJIDE2b9Kw%2BZPcqtjYZT5UdxdUSqzqUXXxmVidoLYnqniLd1loePyVy8j3TBAcX4o%2BgrZh9XgmEy8LR8411fQUKhBTlSr1SPembQhtpQRONFLRyQLHlutGq6FOItw1maMqYmD62J6%2FWuSDeMrMnqYEKAq%2FR3RWy%2FsV%2BIw1DHxq7ezo4ApB%2BILVIsOw%2FO8pRHAt0S3VQUiLzmvmtMZnSmdrhDizOpBUc1JZYUXCh14lv4p5tPockFoI3gE6HO%2FwTH2MUicM05rfNnZD4tcwVYWxfrU%2FF5lavgymflXZ3RCd2qjAVFyauFj%2Fjdsx5%2FzHGam9gO6c3I%2FPZUDLKm1Y62t0504Hb4XOyg%2BVi9z%2B1TzCqqOA03%2F7g9FmmFU1f4sYW%2Btog%2FUD0WeoeqOIuM1dTDpyNmYRlij9%2FuSZn1%2FNAlrJzw8EHFazGygrMkckK3ntY1sZO2v3LkwS4IRQmzTsmRutio9uGQbslPI8w12oVQC45E3FGsKGDB9%2Byczvw4ZC0n3X%2FjGhFfELgV2fgkwrywebyzsT8GdLpNHmuWmwDc%2FIvaX%2FES8kj%2FkncMPn4wskGOqUBhk%2FGS5pfx9N%2Bl32AagR01seMrvLdneHMrpraeGUfyTUAPPLnMTYt%2BBIIKKtQUE6B3GUritkg23%2BBCUVFs93q%2Fj6GfZhZ84XqFmE03wYYKjeYVXSTyNEZkUSf5D4fZ7c488R12W%2BZwFBMYF3JoFVnz8pMVeeY17dgDBRXED%2BRnxNLZMnE8AD%2F%2F9akwkZubiwjFs7f%2FGApe5W7qtkowbyjvDwJ1myp&X-Amz-Signature=8a8a7b1f76c8fd4161dbdde9195b6dc4a44750612f06ce517e434d36ccee4290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQBEEJG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBv92UvaXeSr%2FEjFvbwXom2rdQCk9lmVcU1GmimwU%2B3bAiEAiONAfUbjkUMyswCTfP4aca%2FcZSiRpxa%2F73GskHDu%2BxEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPDGtwJZXAy1LvTvhircA0LCArLXY8hB2qvZcI9WxmjSjHatS7pGYXwU%2FGj6uzqV7N%2FTgvVU3PmucVojUUK3dXYp5uJIDE2b9Kw%2BZPcqtjYZT5UdxdUSqzqUXXxmVidoLYnqniLd1loePyVy8j3TBAcX4o%2BgrZh9XgmEy8LR8411fQUKhBTlSr1SPembQhtpQRONFLRyQLHlutGq6FOItw1maMqYmD62J6%2FWuSDeMrMnqYEKAq%2FR3RWy%2FsV%2BIw1DHxq7ezo4ApB%2BILVIsOw%2FO8pRHAt0S3VQUiLzmvmtMZnSmdrhDizOpBUc1JZYUXCh14lv4p5tPockFoI3gE6HO%2FwTH2MUicM05rfNnZD4tcwVYWxfrU%2FF5lavgymflXZ3RCd2qjAVFyauFj%2Fjdsx5%2FzHGam9gO6c3I%2FPZUDLKm1Y62t0504Hb4XOyg%2BVi9z%2B1TzCqqOA03%2F7g9FmmFU1f4sYW%2Btog%2FUD0WeoeqOIuM1dTDpyNmYRlij9%2FuSZn1%2FNAlrJzw8EHFazGygrMkckK3ntY1sZO2v3LkwS4IRQmzTsmRutio9uGQbslPI8w12oVQC45E3FGsKGDB9%2Byczvw4ZC0n3X%2FjGhFfELgV2fgkwrywebyzsT8GdLpNHmuWmwDc%2FIvaX%2FES8kj%2FkncMPn4wskGOqUBhk%2FGS5pfx9N%2Bl32AagR01seMrvLdneHMrpraeGUfyTUAPPLnMTYt%2BBIIKKtQUE6B3GUritkg23%2BBCUVFs93q%2Fj6GfZhZ84XqFmE03wYYKjeYVXSTyNEZkUSf5D4fZ7c488R12W%2BZwFBMYF3JoFVnz8pMVeeY17dgDBRXED%2BRnxNLZMnE8AD%2F%2F9akwkZubiwjFs7f%2FGApe5W7qtkowbyjvDwJ1myp&X-Amz-Signature=f00a123d76856efdcd870ba6463e827298c07364fd8b8ba233de58849ec671eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

