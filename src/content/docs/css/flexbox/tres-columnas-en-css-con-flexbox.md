---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJ56Y6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCYRUgw6rKJLzHaYF%2Ft%2FNwdju49Eib1Wq4coWbT1XEdAiEAk%2FCWMqHNOmBzhuXrz59K8zgmzTKXzvIvQmDtCldvzyYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEKwd0yxEdkFNp9GECrcA3J4FCfw3tMifp7dpQLSaGxneW74JVGff5ryq5tnE4vAIv%2B2wUxfZunm5i86T9wilX%2FCUwyLTw4r0XfK1U9cDN5tKZLotJjvCNMQzXyiO%2FhiZTGZ1Pln8TSlIbzyMZO1gVmUOaAs4wueZ4%2F8eHkpr%2F8eC8Vr%2FTcDJqKRmZMJr8exHRtyHPn1mhGyd5GY3CApnFhg5WotGT2A5NCgoKuKLEsPCkRYtcPVfuY6mfBMn%2BdKVkh9ovYS4u8tuhcekvnavaGG2%2FRkMRkyz2buEZCnYfYBp%2B%2BlTlYr%2B9yk%2B%2FezWbFEjPHiOLO%2B%2Fqp%2FPE2V06G6qIT%2FAjwb0Q50iULlGob%2BN4iRNNKalsxQ80pIXkr04o%2BvvUSu7zX%2BA%2Fm9iAeG%2BZhYRljG39ZgvaCwfBT%2B7nsQQfxSvTA4dVBGK0UNIGsc1k0DlUHCeJCnORhIKzkWTd3WrCMucrEFL2RjVKI%2FPRBPmL9NIKFdZpWo%2FTQMZlBVazSaPDW1TmZBgBFjRXymQIL0%2B3sM2zEgr%2BqHN4LOqjAiEnkNeQmr2Q1ZvQdkLGBo2g%2Bp6VCFYTMBkuonnLe3wFb1tchOmDpoxWyCKWi0zOS7u75%2BHdenBuFxBRXKCybBrGTM8U6mFa4JoKa49dSkMJrGzckGOqUBolkygA6aqaro18nAP9ftTkax3PayETpx0k0uFKihXypqj5kANFlu7f4DvAC3qT82tEQ6RHwW93RcV%2B50QElVpVBy9kpkGS%2B21cY%2B2Oum8zuE1a%2FDOL6jVUZzsIUEN%2BLTtoUUHr9pKT6iDvCxm%2FhZ2N8LgbVb6e8%2FDMQDHvd%2FcwF1%2BYeXBaVFm0fDbDKBfbgK0tPOQhEDZ7yKBTb07f9B0xeQ%2FyCR&X-Amz-Signature=5f983b814e9b7ee4d9b2f7eebdab87ada75d0a74e025e29b7289bd6775f043a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJ56Y6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCYRUgw6rKJLzHaYF%2Ft%2FNwdju49Eib1Wq4coWbT1XEdAiEAk%2FCWMqHNOmBzhuXrz59K8zgmzTKXzvIvQmDtCldvzyYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEKwd0yxEdkFNp9GECrcA3J4FCfw3tMifp7dpQLSaGxneW74JVGff5ryq5tnE4vAIv%2B2wUxfZunm5i86T9wilX%2FCUwyLTw4r0XfK1U9cDN5tKZLotJjvCNMQzXyiO%2FhiZTGZ1Pln8TSlIbzyMZO1gVmUOaAs4wueZ4%2F8eHkpr%2F8eC8Vr%2FTcDJqKRmZMJr8exHRtyHPn1mhGyd5GY3CApnFhg5WotGT2A5NCgoKuKLEsPCkRYtcPVfuY6mfBMn%2BdKVkh9ovYS4u8tuhcekvnavaGG2%2FRkMRkyz2buEZCnYfYBp%2B%2BlTlYr%2B9yk%2B%2FezWbFEjPHiOLO%2B%2Fqp%2FPE2V06G6qIT%2FAjwb0Q50iULlGob%2BN4iRNNKalsxQ80pIXkr04o%2BvvUSu7zX%2BA%2Fm9iAeG%2BZhYRljG39ZgvaCwfBT%2B7nsQQfxSvTA4dVBGK0UNIGsc1k0DlUHCeJCnORhIKzkWTd3WrCMucrEFL2RjVKI%2FPRBPmL9NIKFdZpWo%2FTQMZlBVazSaPDW1TmZBgBFjRXymQIL0%2B3sM2zEgr%2BqHN4LOqjAiEnkNeQmr2Q1ZvQdkLGBo2g%2Bp6VCFYTMBkuonnLe3wFb1tchOmDpoxWyCKWi0zOS7u75%2BHdenBuFxBRXKCybBrGTM8U6mFa4JoKa49dSkMJrGzckGOqUBolkygA6aqaro18nAP9ftTkax3PayETpx0k0uFKihXypqj5kANFlu7f4DvAC3qT82tEQ6RHwW93RcV%2B50QElVpVBy9kpkGS%2B21cY%2B2Oum8zuE1a%2FDOL6jVUZzsIUEN%2BLTtoUUHr9pKT6iDvCxm%2FhZ2N8LgbVb6e8%2FDMQDHvd%2FcwF1%2BYeXBaVFm0fDbDKBfbgK0tPOQhEDZ7yKBTb07f9B0xeQ%2FyCR&X-Amz-Signature=26824d32f52dab3584983706d8bd4ee2d5f61c4f0dd84769bd6a1c7c44830be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

