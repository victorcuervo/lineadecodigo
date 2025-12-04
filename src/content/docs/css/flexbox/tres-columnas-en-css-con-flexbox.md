---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESGFPXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCID%2B1vAWvmm7KVVpiTn3PqSgdNxVvWEkDc8Mpd1m0kNClAiEArsKSHfyRDr8E9Rx%2FjV1hVoMKNA3kxhFhfd3UIO%2FPquMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHBnIapmve%2B9hUJpOyrcA%2B22wZqDyL5mvVxrdrIaZP1Atf94p04nnpdYOAzWHCO2%2B8eE9hSSAmdVzaBylw9qkKj%2Ft%2B72ulf0a%2Bn8CV%2BK2w2YtV2OfPAaCu%2B28gMuL4TbuWWS0oVuyaHhhY4ptHOGetQAVhoKSD2xCNreFYqS%2BBhmJVVOBh6bx8%2BzSkTJAcRmngco9ex3M39ar%2Fen28CNZUKlZ0vlpChTOG3cF1YZnJvnGSz9eRrLTGn2cFDh8g6XB%2B0l1QC0I1WCvKvpApsJmoyySRmlUqwNp5EmSTFQZSMtD9UlLuN51gLnvwZPWzIvLRIErtdDeoPfLI3co21JAtKpwHcZINuiPelCxa1SDX%2FIO1mfxhKptAON7WpxsSkzfTcG5fN78v9TJFwtTXpjW0QdNo346niVvWFVVDkRxhJXL3UTBIBJtKZOJoM9%2BXW3qeu%2FrXbPBFigK9pkMl4mC3UfHumi4ZuTaKB42qW%2ByfK%2BHo1pV%2FSYOmwP0oKQaZyCpyJ8SaiyksGDlvT5QF81fUEFxK3Zqi4yLKb6IfWr2LVSFKZp6WBLbzjW%2FqzUJKxWcfjbqWRhmCxY3gxM2Px8TOQZ3t10ozB48z7Mv4uF67GNQlbt8H3BPOnGIqF3A3VvNOiHn3OptFVeMfeiMJS1w8kGOqUBq5GBkk1TLaL8D2%2F4PbYdVWaAdULQ%2BnaYYQ4YGcjBBeurGAKyuErgMhMyl%2F%2Fk2PP%2Bm34MdWHZ1eXkmoBhvyuXlu8xZ%2Fc7KuYJslbWAfUUbh93k4aj5ADeCTDZR8FXhmFOxz67ulXJIKySEifK6sKE3AGMfKGYlURkF2DI1HOBjudxr9ETfx0W%2Bk6MJnQo0ZZ4dg0tvo%2BEwL%2FUO8coonSzVnzSD4xb&X-Amz-Signature=55fe79857e0788c2742d5893b7bcc0d93bd7b6310e243d2978fd2b05d2265bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESGFPXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCID%2B1vAWvmm7KVVpiTn3PqSgdNxVvWEkDc8Mpd1m0kNClAiEArsKSHfyRDr8E9Rx%2FjV1hVoMKNA3kxhFhfd3UIO%2FPquMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHBnIapmve%2B9hUJpOyrcA%2B22wZqDyL5mvVxrdrIaZP1Atf94p04nnpdYOAzWHCO2%2B8eE9hSSAmdVzaBylw9qkKj%2Ft%2B72ulf0a%2Bn8CV%2BK2w2YtV2OfPAaCu%2B28gMuL4TbuWWS0oVuyaHhhY4ptHOGetQAVhoKSD2xCNreFYqS%2BBhmJVVOBh6bx8%2BzSkTJAcRmngco9ex3M39ar%2Fen28CNZUKlZ0vlpChTOG3cF1YZnJvnGSz9eRrLTGn2cFDh8g6XB%2B0l1QC0I1WCvKvpApsJmoyySRmlUqwNp5EmSTFQZSMtD9UlLuN51gLnvwZPWzIvLRIErtdDeoPfLI3co21JAtKpwHcZINuiPelCxa1SDX%2FIO1mfxhKptAON7WpxsSkzfTcG5fN78v9TJFwtTXpjW0QdNo346niVvWFVVDkRxhJXL3UTBIBJtKZOJoM9%2BXW3qeu%2FrXbPBFigK9pkMl4mC3UfHumi4ZuTaKB42qW%2ByfK%2BHo1pV%2FSYOmwP0oKQaZyCpyJ8SaiyksGDlvT5QF81fUEFxK3Zqi4yLKb6IfWr2LVSFKZp6WBLbzjW%2FqzUJKxWcfjbqWRhmCxY3gxM2Px8TOQZ3t10ozB48z7Mv4uF67GNQlbt8H3BPOnGIqF3A3VvNOiHn3OptFVeMfeiMJS1w8kGOqUBq5GBkk1TLaL8D2%2F4PbYdVWaAdULQ%2BnaYYQ4YGcjBBeurGAKyuErgMhMyl%2F%2Fk2PP%2Bm34MdWHZ1eXkmoBhvyuXlu8xZ%2Fc7KuYJslbWAfUUbh93k4aj5ADeCTDZR8FXhmFOxz67ulXJIKySEifK6sKE3AGMfKGYlURkF2DI1HOBjudxr9ETfx0W%2Bk6MJnQo0ZZ4dg0tvo%2BEwL%2FUO8coonSzVnzSD4xb&X-Amz-Signature=ae2cfef767a470a58a9753fc148897e65120abb7bc147099557958b32742753e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

