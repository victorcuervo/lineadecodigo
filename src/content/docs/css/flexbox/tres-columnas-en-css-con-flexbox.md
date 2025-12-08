---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLHND2Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAxBg4DTrI2KrZYqcCitGgMwgiORSXPwaM8J9ImCGXXAiEA5GwxSnyzzqmLH2Kg1L5DkCslnLKrCSHDKTZPFhPGbLwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3ciirVGUsTex5Q6SrcA3iQ652BAAWlb3FAwQ7dKuap9GySM6u22lq5KfkewNgFEIvBVc9G8LaIFw7XfUfsbQIOrsWZXbxotbUfDqB%2BJ%2F75v8cD58e%2BqUHE9sOdsw3DSSBNfBV38bpben0q4wVw4jFXHhw33B6qY%2FxX23kf3OSxlCRtSNWX8634UpBbaksWmt20Rzn2kFSXpPHSH%2ByiJvmq25gUckApqb%2FUwfMpBSJeCmtbQo1kdeWnHr8FxYTxjmrNlb1zzPRRdQ%2Buw5xad1Ffe9C1nTvIljupwjTUIguam2spRLB4vJpd4ohPLu8r5tNCNm87cpDrIrS4MBOvGkeSehKxYNW3%2FHfvU%2F%2BCvWiLqAC6eq8Xmqcl74yqnBaRczCxg7dfu%2BD3VqB5b1WcfUl2qQj57bJhtQ0tH5du0CK%2FnQQj9ZHQvyLaXIU64MXMQzitvsshTjrh7926tT0FZs0kzaONJGS1oSCEKOOJ5G3AwhpoBlth8iP%2FoMCmj%2FfTScB7uBmHOzXMGCqw3nTCQ5%2FO7kGwQ5pvYzRXCIkuycdBf%2BA7dMlhkEh3IPe046epZQyfzhzCWPI914M8gFqjf5lXqsl4tLB5MpUZJQLfnolm9Y723hpRXn3f2705QM3SodqqY%2BOT5oqK2d6oMNOP28kGOqUBFToX%2BOBK8JguuYyzJRRf4hkgd0HMj97Z5rekxkfE7x1LfO%2FeZElF1MMnloiLnt7VabspQsrEMT4P8D%2FskCE6ZEgxDnkGE2V%2F%2FwFG%2Br%2F1Wwcfrp64iZSUN6x4sF9S%2FK2rohw6y24tVymaLhWWOrdo9s3b0WlFVEaVrFVQ9gvYqH4SV5NEzygQZyzCKlWTRDncqXVIZHkX3y%2FxnBvC5IxEVX1lzVQS&X-Amz-Signature=1ae785d37a60355577e7f3395045f6ac6409ef70242595b3557a4e24b1bb4b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLHND2Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAxBg4DTrI2KrZYqcCitGgMwgiORSXPwaM8J9ImCGXXAiEA5GwxSnyzzqmLH2Kg1L5DkCslnLKrCSHDKTZPFhPGbLwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3ciirVGUsTex5Q6SrcA3iQ652BAAWlb3FAwQ7dKuap9GySM6u22lq5KfkewNgFEIvBVc9G8LaIFw7XfUfsbQIOrsWZXbxotbUfDqB%2BJ%2F75v8cD58e%2BqUHE9sOdsw3DSSBNfBV38bpben0q4wVw4jFXHhw33B6qY%2FxX23kf3OSxlCRtSNWX8634UpBbaksWmt20Rzn2kFSXpPHSH%2ByiJvmq25gUckApqb%2FUwfMpBSJeCmtbQo1kdeWnHr8FxYTxjmrNlb1zzPRRdQ%2Buw5xad1Ffe9C1nTvIljupwjTUIguam2spRLB4vJpd4ohPLu8r5tNCNm87cpDrIrS4MBOvGkeSehKxYNW3%2FHfvU%2F%2BCvWiLqAC6eq8Xmqcl74yqnBaRczCxg7dfu%2BD3VqB5b1WcfUl2qQj57bJhtQ0tH5du0CK%2FnQQj9ZHQvyLaXIU64MXMQzitvsshTjrh7926tT0FZs0kzaONJGS1oSCEKOOJ5G3AwhpoBlth8iP%2FoMCmj%2FfTScB7uBmHOzXMGCqw3nTCQ5%2FO7kGwQ5pvYzRXCIkuycdBf%2BA7dMlhkEh3IPe046epZQyfzhzCWPI914M8gFqjf5lXqsl4tLB5MpUZJQLfnolm9Y723hpRXn3f2705QM3SodqqY%2BOT5oqK2d6oMNOP28kGOqUBFToX%2BOBK8JguuYyzJRRf4hkgd0HMj97Z5rekxkfE7x1LfO%2FeZElF1MMnloiLnt7VabspQsrEMT4P8D%2FskCE6ZEgxDnkGE2V%2F%2FwFG%2Br%2F1Wwcfrp64iZSUN6x4sF9S%2FK2rohw6y24tVymaLhWWOrdo9s3b0WlFVEaVrFVQ9gvYqH4SV5NEzygQZyzCKlWTRDncqXVIZHkX3y%2FxnBvC5IxEVX1lzVQS&X-Amz-Signature=a0efea1e09dd0d3b5865c24853aae525e33e858b6c77a34c39750d17741229c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

