---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2HQ4T4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG1XTx1mCApBn00UiwCsaKvUHsvccm18FL3sMtF%2FV50QIgSSleUEsEka5YyOptopIG0V8NF7zS4npfI9aUfHOXfjoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKHsKsHWyG6hHT3AiCrcA%2F8PfvWEiKMsBL2Fy7gwpX7nqb52Bh4%2FNw39nZfLePvxRR6LLgODS8dILyXVDswhLMs%2B4UKzkKpMbJ%2BU7ZDJ%2BrD%2FXULnIsNk%2BOrI%2FlPcJJVo1zhm2bVa4FyeeQvM8BxNYV5FnQ0aIdcoDVa5qkvch5aNmUly1Gbt%2B7RxjR3fYiN%2BmMjdtgVHv29bqZd86rgSFSZIuXNKHMBz0DT1ZQjW1AVyWOE91eu0Tqo96V07eBb45qLa6d2%2Fuux1LlzedC%2FGXHSSG3w%2B54eFAIft1%2F2qITqumoTfi8VyERPOAoewaFvlh4FxwZjcKoVj%2BbKxpTbl%2BgRKhALQFf%2FHV2%2Fx2jdPWzn%2BhUREP8OP7JRJjxVgbGPyjuEsHNQpFVrKxQ8coYSb2FCOHYAL9KPgMUBsKbZl%2BK0an37TxJY3RctOsnadtNOGePVpb7W5ToAx3XaCBJ8RKUCN8Riav9m3A%2BICnwuXTN0tXy03%2FFM%2FtD2k1DQMxqLLXsnldwb1FsNVszmcGVQmLgiVCyLHr4lJdi0Zv9i5qnCtNiRXA6nI%2FO4FA6P1mCb3z7GKIXTQuSVlvDZhvkATYPvWFbsHT689JN9YHxPyzgrdibgiZFubfqb1OdAppiNyoFdqLEwovXA%2F100eMNTWyskGOqUBViDYrrI26XnxgNFB71SUk5uXRvizXPeGwYYcBNfrV%2FgNcHSWAKKDrEjmckBgzTRTSNtSPfQblPh7VXCCpQJhKpZp6wa6hqsZxdkqS99yof32C8vYIGiRpg0I7nK%2B8No98lUBd8a0kg4H%2BSkGc2s4sAFx10KZcYPhpxrMjStGW8wRZjgaEI8WvIQ4cjJpd0cd85UypPKy42YU7GBfxJQdM4E%2BacEh&X-Amz-Signature=8cff3b22667c793f964b86a0ab31c03a6d0abbefdf2c25483659503394dd7f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2HQ4T4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG1XTx1mCApBn00UiwCsaKvUHsvccm18FL3sMtF%2FV50QIgSSleUEsEka5YyOptopIG0V8NF7zS4npfI9aUfHOXfjoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKHsKsHWyG6hHT3AiCrcA%2F8PfvWEiKMsBL2Fy7gwpX7nqb52Bh4%2FNw39nZfLePvxRR6LLgODS8dILyXVDswhLMs%2B4UKzkKpMbJ%2BU7ZDJ%2BrD%2FXULnIsNk%2BOrI%2FlPcJJVo1zhm2bVa4FyeeQvM8BxNYV5FnQ0aIdcoDVa5qkvch5aNmUly1Gbt%2B7RxjR3fYiN%2BmMjdtgVHv29bqZd86rgSFSZIuXNKHMBz0DT1ZQjW1AVyWOE91eu0Tqo96V07eBb45qLa6d2%2Fuux1LlzedC%2FGXHSSG3w%2B54eFAIft1%2F2qITqumoTfi8VyERPOAoewaFvlh4FxwZjcKoVj%2BbKxpTbl%2BgRKhALQFf%2FHV2%2Fx2jdPWzn%2BhUREP8OP7JRJjxVgbGPyjuEsHNQpFVrKxQ8coYSb2FCOHYAL9KPgMUBsKbZl%2BK0an37TxJY3RctOsnadtNOGePVpb7W5ToAx3XaCBJ8RKUCN8Riav9m3A%2BICnwuXTN0tXy03%2FFM%2FtD2k1DQMxqLLXsnldwb1FsNVszmcGVQmLgiVCyLHr4lJdi0Zv9i5qnCtNiRXA6nI%2FO4FA6P1mCb3z7GKIXTQuSVlvDZhvkATYPvWFbsHT689JN9YHxPyzgrdibgiZFubfqb1OdAppiNyoFdqLEwovXA%2F100eMNTWyskGOqUBViDYrrI26XnxgNFB71SUk5uXRvizXPeGwYYcBNfrV%2FgNcHSWAKKDrEjmckBgzTRTSNtSPfQblPh7VXCCpQJhKpZp6wa6hqsZxdkqS99yof32C8vYIGiRpg0I7nK%2B8No98lUBd8a0kg4H%2BSkGc2s4sAFx10KZcYPhpxrMjStGW8wRZjgaEI8WvIQ4cjJpd0cd85UypPKy42YU7GBfxJQdM4E%2BacEh&X-Amz-Signature=18db58705c320e93076f0e24c6fb5599555c04e228f78e57b40d054d981b4611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

