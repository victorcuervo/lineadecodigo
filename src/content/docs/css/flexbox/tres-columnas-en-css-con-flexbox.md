---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEXSXH2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwr8lHl1BoAalNEWS9a%2BzYKvCm8OoyFrGZG8AZe8v%2BpAiEAvw6fm2dmE1T6FmPW%2Fj3nQ8Hx2OmBaqbi0n7NBHauwdIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARTyXj8bS5RZ7bp3ircA04B1yEnIb%2BxQtGibFhd5KG59Uec7Sg788EPoNJeC52dPOpz1n%2FunmmtB7w8kG%2BirWm%2B18E3UbO9ZIa6Uaq6Y3P2t5gLIIXQjzveso%2FPFF%2F%2FT7f9Xe%2BSOYsbph2jUhWGBHJ7RrRmDIOZOtMQiV083LC9TIyII4C1ifqWqVlmAUOtZz0gL67ZGDijtugSMmbLwsyY4kJCKDPvPtTy%2FXgdEmE33%2Fr7xkTWSQ3SZFQ5K8VYrMf1nKzwLMPMaCPrlnyIXv8yvQJajRURqiNOtzLNm8lh7ns%2Bwuk929%2Fkn5jNmGAtCFFvG0xLzTyCEgEjz27HoWjyc9n1GQJIpjAv%2FbCHUTkfxHXurSah8jZAlKm3OMN%2BPVW4rJ3VjpkU7ZlhBWxmlxgF2%2FEtLCfZ0M1couixxO5Yu5cVzh2Sx1%2Fn6XheNIvxsqVVBuSGsmxrgCuwOHRoUIgDPaWWfjriOlVF%2BV6SzSDCBoK88BBRBgFw3dnzrb%2BL8ZwVUE2ssxz3P9kg3LG%2Bnvs0iEeD8wYlkGTtUJ4307QwwjsZTHHexfNUdo7pkjrOAlxaHKs8H0irarP2YiFxmaz7SR0%2F7F9HVUYpTBdCecKaTkxdvxiU3ATWRauXAUiUaGDHM0XmD5U9JEM4MPSN3skGOqUBpw8%2BtnrOXz%2B%2FFCgO8wUSLKK9PzYiaojxfggDmEW5fcK4NGCaLiJv%2FQk1d9LFfjWBmmtVJTa1cqvTTUhsNzrqm4C33nI8v2PD3CCMboVa0f%2BIcYv8LAfwe9UqFtN%2FVwiOF5dxeQafLF79HOrQGowvVgdjCciFkuKtvKC3WVRzgYfO4Wly%2B1EDSEbW5cbUuEUPkG2BjeZzQTIzHve6xSVIj0W3x31F&X-Amz-Signature=254361828818a873498b1f93c5782bceb9cd1713e21ef184484d573d9a996bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEXSXH2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwr8lHl1BoAalNEWS9a%2BzYKvCm8OoyFrGZG8AZe8v%2BpAiEAvw6fm2dmE1T6FmPW%2Fj3nQ8Hx2OmBaqbi0n7NBHauwdIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARTyXj8bS5RZ7bp3ircA04B1yEnIb%2BxQtGibFhd5KG59Uec7Sg788EPoNJeC52dPOpz1n%2FunmmtB7w8kG%2BirWm%2B18E3UbO9ZIa6Uaq6Y3P2t5gLIIXQjzveso%2FPFF%2F%2FT7f9Xe%2BSOYsbph2jUhWGBHJ7RrRmDIOZOtMQiV083LC9TIyII4C1ifqWqVlmAUOtZz0gL67ZGDijtugSMmbLwsyY4kJCKDPvPtTy%2FXgdEmE33%2Fr7xkTWSQ3SZFQ5K8VYrMf1nKzwLMPMaCPrlnyIXv8yvQJajRURqiNOtzLNm8lh7ns%2Bwuk929%2Fkn5jNmGAtCFFvG0xLzTyCEgEjz27HoWjyc9n1GQJIpjAv%2FbCHUTkfxHXurSah8jZAlKm3OMN%2BPVW4rJ3VjpkU7ZlhBWxmlxgF2%2FEtLCfZ0M1couixxO5Yu5cVzh2Sx1%2Fn6XheNIvxsqVVBuSGsmxrgCuwOHRoUIgDPaWWfjriOlVF%2BV6SzSDCBoK88BBRBgFw3dnzrb%2BL8ZwVUE2ssxz3P9kg3LG%2Bnvs0iEeD8wYlkGTtUJ4307QwwjsZTHHexfNUdo7pkjrOAlxaHKs8H0irarP2YiFxmaz7SR0%2F7F9HVUYpTBdCecKaTkxdvxiU3ATWRauXAUiUaGDHM0XmD5U9JEM4MPSN3skGOqUBpw8%2BtnrOXz%2B%2FFCgO8wUSLKK9PzYiaojxfggDmEW5fcK4NGCaLiJv%2FQk1d9LFfjWBmmtVJTa1cqvTTUhsNzrqm4C33nI8v2PD3CCMboVa0f%2BIcYv8LAfwe9UqFtN%2FVwiOF5dxeQafLF79HOrQGowvVgdjCciFkuKtvKC3WVRzgYfO4Wly%2B1EDSEbW5cbUuEUPkG2BjeZzQTIzHve6xSVIj0W3x31F&X-Amz-Signature=ad49070ea9b63789f4f3a2062ff47c43a4f03838f08846edcd3c1afd251ee6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

