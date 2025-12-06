---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX3S3DF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjWt108DQ9tOb6PGwkSIgADXTl5PWHqsyDN8UAgVlfbAiEAuEvqH6PYb3%2BtBhKxy5gt2fPwqfzpX%2FGk%2Fn%2FHc4Jq%2FOwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJFisIMPvJR3IfilUircA4HF4yYG%2BK2zzF6yjAipBPBeYPMaMafYKXZKATbpHPKzhZn%2B8DkFETJgolIOF4SgAzow%2FmZiCgH4MKMDUM1mndGpgSQKzoBW8A12dk8dTIMiwCyYcK9HA5FrMCiCeMsGeoegqAc8MFMs5%2FGDLGw%2FGYcvwou6TA7a6y%2FyiU%2BH2w%2BurRVVkps09aFA4ilrKWQq04%2FY7WbD0Fw%2B1fxRiHyxhuPANoKMwEAx7qKXLaOlno1YXMG80KALLwxA2IXQQ9r%2F10ZPYHcpvUSQnUuGOQLJAe2HitVhx%2FSyV7SlTxVy2WjkMHuWhGhWe1HwBw%2B9ZYdSaBeRNaEBx3nkIEKlL19BqFfZx2Yd5cKDk6WnpdFcD2WKNxJxL4a%2FxNKDjd5OD9qJaFh%2BfKWxDTtsHSqMbG3ForH13aaU2kuXag2%2FSzI5PmQRZovc7HWCCNfsg8hL45pMQdqAuunazLCR10XV0CF7PBBxn1YOyvE8iDAnZLh55gwFcWV3B1gBSPC%2FVVAjwVTUOrw0%2BQt92tt1Jd21%2FHddczZ2%2F%2FYkYfFmsMApefpJKmjZadgfK3VZqQSWBn6oLo3o1t3y24elxg%2BdT9tTURyPm9umNtU4ss2zcYb4BP1tWnn3IV0kN02WHcAiEDXmMMjK0ckGOqUB2BLUT5teM4%2FfFqIx6e9crZECPAfGDKpvUVHy8jvayHCi7CBydOkmLOPlpQea0NMJxT6dz136xp%2FeQVCqgosrum1WGvzzZr6J5ggPjspZCfDtR0673GNC2WOc6Y0QNFdwJH1vW%2BWJCxjA2aRjGsejlfrA1l9BLTsKyFp3m1CUMGuWm2RKgp%2BQ5MtAeefCTw5shbYni2BBnQ7ZoxrJfmaHoogIODXm&X-Amz-Signature=6e17499d63e0bdc5feb2fbde697d3331a5288dbe8ec1bb9048eb2b5e97bab54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX3S3DF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjWt108DQ9tOb6PGwkSIgADXTl5PWHqsyDN8UAgVlfbAiEAuEvqH6PYb3%2BtBhKxy5gt2fPwqfzpX%2FGk%2Fn%2FHc4Jq%2FOwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJFisIMPvJR3IfilUircA4HF4yYG%2BK2zzF6yjAipBPBeYPMaMafYKXZKATbpHPKzhZn%2B8DkFETJgolIOF4SgAzow%2FmZiCgH4MKMDUM1mndGpgSQKzoBW8A12dk8dTIMiwCyYcK9HA5FrMCiCeMsGeoegqAc8MFMs5%2FGDLGw%2FGYcvwou6TA7a6y%2FyiU%2BH2w%2BurRVVkps09aFA4ilrKWQq04%2FY7WbD0Fw%2B1fxRiHyxhuPANoKMwEAx7qKXLaOlno1YXMG80KALLwxA2IXQQ9r%2F10ZPYHcpvUSQnUuGOQLJAe2HitVhx%2FSyV7SlTxVy2WjkMHuWhGhWe1HwBw%2B9ZYdSaBeRNaEBx3nkIEKlL19BqFfZx2Yd5cKDk6WnpdFcD2WKNxJxL4a%2FxNKDjd5OD9qJaFh%2BfKWxDTtsHSqMbG3ForH13aaU2kuXag2%2FSzI5PmQRZovc7HWCCNfsg8hL45pMQdqAuunazLCR10XV0CF7PBBxn1YOyvE8iDAnZLh55gwFcWV3B1gBSPC%2FVVAjwVTUOrw0%2BQt92tt1Jd21%2FHddczZ2%2F%2FYkYfFmsMApefpJKmjZadgfK3VZqQSWBn6oLo3o1t3y24elxg%2BdT9tTURyPm9umNtU4ss2zcYb4BP1tWnn3IV0kN02WHcAiEDXmMMjK0ckGOqUB2BLUT5teM4%2FfFqIx6e9crZECPAfGDKpvUVHy8jvayHCi7CBydOkmLOPlpQea0NMJxT6dz136xp%2FeQVCqgosrum1WGvzzZr6J5ggPjspZCfDtR0673GNC2WOc6Y0QNFdwJH1vW%2BWJCxjA2aRjGsejlfrA1l9BLTsKyFp3m1CUMGuWm2RKgp%2BQ5MtAeefCTw5shbYni2BBnQ7ZoxrJfmaHoogIODXm&X-Amz-Signature=ebd571bda3e2b121b89d73da4f742103a5faf598025f10000853aa6a6e199e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

