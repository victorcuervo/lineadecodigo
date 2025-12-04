---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNZN6B4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFijkcBxPXDiRLTkaRBGp3m0sF2J3yZYhpHpAw0ZkseIAiBSchYC%2FPwCgm%2BYBF90uPcHrg1fdVh7MUEVa%2BdEx%2BWqZyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMDJ4d4M%2BqMagklRCGKtwD8lgmiIAHN5x0RvOIBBdutQHBorCWzxiTOLVUli9lLbqpPPvWUqQFf7kv9V5fQzVKmsiNKN5bZZDr4ly59HJ4kCrhSc0HqAPeBF4uM83G5v9oZy5%2ByBekwyJc%2BaklxTHaMRnpkDoUc26BmoEFMOkUwaXWVkixSQVJzo3qE%2FPP%2FjiIbeSvxvZwYm3Mq%2BbWK0YzqSKR73fKBAbgZhPDudQ7cQx0aX7agCeEhWNCWOr16YGp2Fd7VOUnqr3JqU1taXUNLaAeP1%2F%2FkYbNVwoCgnTuxXdjLBy0K%2FJARZAsbOSO%2F8fgMrqggI04WJzOYzOb6TOa833iiNTNzn5nI8jwBOon%2Fhao%2BPjJFUfbnftMEOfaZ%2FntjyI7Oc4DgeGKe2vYc3UIfTnQRou%2F7%2B%2FTkXMD%2BvXeCX7rkdFzZMhgU%2F0D5ylOzcVoSXS%2BeSaQNHP%2FUsxKoQqwxX8xPuXaalfW41jEsl8Ciuq41cPLNWnBz1j0zFIdkxSVDBi%2FXyCUb1KgV6bDNqdVm0ohhz52gbecNRXMikG2dsIovNmbViM2Q4Em%2Bq9H9aofEUqyFF%2BJqCo95RypICeYGGZXucKzv0%2F7xvQAKrJGx4dn8bbcmUxd%2BlIwyF7EVidwyDOBMM8xfhMgbcUw%2BNPDyQY6pgGWEYTOjjTcwrNgZfCqOawWgTAd7wMgrTuHeguBuy10wBdj8tQp3UXc5buqFI6k00a7vBNpZ%2Bt1%2B6XVK7drkVYii07ofWWlOOna94FSPTlmCgX0bq5FNsGMTSYt8zx%2FNSkkYjlqj382GiIi4Jn5CVPSmv3yYNVgF9JraBQAlGveh1%2BvXv%2FRu3LIL6kW%2FvD0mryPatufrZdsqvwHrX%2BYyMfuEFvM406r&X-Amz-Signature=abe0179f6d36b7c272fd742d76aa09d5e819b4815f43802dcd313dc52db3527b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNZN6B4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFijkcBxPXDiRLTkaRBGp3m0sF2J3yZYhpHpAw0ZkseIAiBSchYC%2FPwCgm%2BYBF90uPcHrg1fdVh7MUEVa%2BdEx%2BWqZyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMDJ4d4M%2BqMagklRCGKtwD8lgmiIAHN5x0RvOIBBdutQHBorCWzxiTOLVUli9lLbqpPPvWUqQFf7kv9V5fQzVKmsiNKN5bZZDr4ly59HJ4kCrhSc0HqAPeBF4uM83G5v9oZy5%2ByBekwyJc%2BaklxTHaMRnpkDoUc26BmoEFMOkUwaXWVkixSQVJzo3qE%2FPP%2FjiIbeSvxvZwYm3Mq%2BbWK0YzqSKR73fKBAbgZhPDudQ7cQx0aX7agCeEhWNCWOr16YGp2Fd7VOUnqr3JqU1taXUNLaAeP1%2F%2FkYbNVwoCgnTuxXdjLBy0K%2FJARZAsbOSO%2F8fgMrqggI04WJzOYzOb6TOa833iiNTNzn5nI8jwBOon%2Fhao%2BPjJFUfbnftMEOfaZ%2FntjyI7Oc4DgeGKe2vYc3UIfTnQRou%2F7%2B%2FTkXMD%2BvXeCX7rkdFzZMhgU%2F0D5ylOzcVoSXS%2BeSaQNHP%2FUsxKoQqwxX8xPuXaalfW41jEsl8Ciuq41cPLNWnBz1j0zFIdkxSVDBi%2FXyCUb1KgV6bDNqdVm0ohhz52gbecNRXMikG2dsIovNmbViM2Q4Em%2Bq9H9aofEUqyFF%2BJqCo95RypICeYGGZXucKzv0%2F7xvQAKrJGx4dn8bbcmUxd%2BlIwyF7EVidwyDOBMM8xfhMgbcUw%2BNPDyQY6pgGWEYTOjjTcwrNgZfCqOawWgTAd7wMgrTuHeguBuy10wBdj8tQp3UXc5buqFI6k00a7vBNpZ%2Bt1%2B6XVK7drkVYii07ofWWlOOna94FSPTlmCgX0bq5FNsGMTSYt8zx%2FNSkkYjlqj382GiIi4Jn5CVPSmv3yYNVgF9JraBQAlGveh1%2BvXv%2FRu3LIL6kW%2FvD0mryPatufrZdsqvwHrX%2BYyMfuEFvM406r&X-Amz-Signature=c2190e12e3f4aae6f8c9e61a47c4d4487ce7e6fd7ba9cab22317a65a03a9d8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

