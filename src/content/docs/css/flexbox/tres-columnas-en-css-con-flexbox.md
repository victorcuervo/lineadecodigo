---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQMSDWW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHdWubRuqN5%2FA360%2FBA3UqvNJXYdFPz%2FKh7jl6lSWnwIgBNI6ecJXe44GiGueSncLjo0%2BAguw7ulj3Pi9WwE32gQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf6Vh270L1H%2F5eLNSrcA1ngua0Oam5mErvUWg0913ti9dJXWfbMJVAzGSXfCCKtG2Rhhk1%2BakeOHdRk8d5dGAL6YqE7FFDhq4xWUSOvZNhIYFT9QAiC9oU7hLPHgZxTWAicF%2Fu60ZXdG5RdZD2Mr0y0I66ZVWF1i358AN5%2BZ8Up91ix0AphZtmuMDgRodPWm%2FFywsWUWBoX3ZSLeMtFeihzw1PEnxvtdIudNE5mDbNxH0yN1seyaRkevhGE6FAVRb7KCVsyiWBCdvBDoOeMHxRiISr3PI2y5owFCIWy4KZvscL74h2S49EEUsXk3n7lR6eNraMhZAq%2FPAZZRzg%2ByWoVNP%2Bs4orbdSHPhk%2FKeGwh1Augs7MUXrGubkTJAT6YxRVRFRBLEAti3KusrheJHjlOfjrxi1v9B6wLGF6m7rmI3mlhN6gGLJx98tOYuxuKSe1z6BaMyDCBoteI9lwCPgd8v16F4RWewzTbkZv6WxDjEGD2y4ItA6%2BUj5b1LEnHoa%2FFmVlwHEb35dV2BYBn5wMVTXteR7ZOAQBqZaq%2Bpo47TPxl46drgChtS%2BOZVRrv3tdNIubeKQWFRuP2Y%2Fjeksi14i7dBKBLt9rBWE%2BHVKHHyBHgh05a6yYjO5jpHJWVfgxY6b3Dkq0ycgmzMI7u2MkGOqUB17ZzsZKSttnwBCtVC3AeIwMshjrs%2BQaIiGkwDa76OubkihiORoTFsmidS%2BAsgyjf%2FcTBPE%2BB8OUSYnkjKFxsqGp8y69y0RMU8CC1WYbgnHreNMTySgI%2B%2FbTTMdPiNdDyuTbu0qCCXbDM828rXtjaVz7EV9uM1Szu4Ex84v6nhZKvra7V3TiWSYR0%2Bk%2BjEg4JvXgcZ7t5bwM05IuoQDJpXY3zeXil&X-Amz-Signature=c9d6e9fe6cc7fcd256b82f886a21df859f9bd4592d9c3ceeebf9e85363484289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQMSDWW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHdWubRuqN5%2FA360%2FBA3UqvNJXYdFPz%2FKh7jl6lSWnwIgBNI6ecJXe44GiGueSncLjo0%2BAguw7ulj3Pi9WwE32gQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf6Vh270L1H%2F5eLNSrcA1ngua0Oam5mErvUWg0913ti9dJXWfbMJVAzGSXfCCKtG2Rhhk1%2BakeOHdRk8d5dGAL6YqE7FFDhq4xWUSOvZNhIYFT9QAiC9oU7hLPHgZxTWAicF%2Fu60ZXdG5RdZD2Mr0y0I66ZVWF1i358AN5%2BZ8Up91ix0AphZtmuMDgRodPWm%2FFywsWUWBoX3ZSLeMtFeihzw1PEnxvtdIudNE5mDbNxH0yN1seyaRkevhGE6FAVRb7KCVsyiWBCdvBDoOeMHxRiISr3PI2y5owFCIWy4KZvscL74h2S49EEUsXk3n7lR6eNraMhZAq%2FPAZZRzg%2ByWoVNP%2Bs4orbdSHPhk%2FKeGwh1Augs7MUXrGubkTJAT6YxRVRFRBLEAti3KusrheJHjlOfjrxi1v9B6wLGF6m7rmI3mlhN6gGLJx98tOYuxuKSe1z6BaMyDCBoteI9lwCPgd8v16F4RWewzTbkZv6WxDjEGD2y4ItA6%2BUj5b1LEnHoa%2FFmVlwHEb35dV2BYBn5wMVTXteR7ZOAQBqZaq%2Bpo47TPxl46drgChtS%2BOZVRrv3tdNIubeKQWFRuP2Y%2Fjeksi14i7dBKBLt9rBWE%2BHVKHHyBHgh05a6yYjO5jpHJWVfgxY6b3Dkq0ycgmzMI7u2MkGOqUB17ZzsZKSttnwBCtVC3AeIwMshjrs%2BQaIiGkwDa76OubkihiORoTFsmidS%2BAsgyjf%2FcTBPE%2BB8OUSYnkjKFxsqGp8y69y0RMU8CC1WYbgnHreNMTySgI%2B%2FbTTMdPiNdDyuTbu0qCCXbDM828rXtjaVz7EV9uM1Szu4Ex84v6nhZKvra7V3TiWSYR0%2Bk%2BjEg4JvXgcZ7t5bwM05IuoQDJpXY3zeXil&X-Amz-Signature=ab59ea0df1ad2579c6f82e2aa76a1cfdbac86afe4c88e8765ceccdf270df8e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

