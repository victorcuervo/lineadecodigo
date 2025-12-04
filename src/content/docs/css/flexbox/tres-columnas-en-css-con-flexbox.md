---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLUIVTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHf1gMTvc82Mv2wvSQvHU2Bj1dj7RnJcVjjPblEF3MmHAiAngZdLFOYxFnI0JgCXhROA9nck4XeXZyROW2lZGqsg7yr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3y9S2%2Fr6c0IEnIAaKtwDy2pAu70nyiKxyVpdJ%2Fln4KPQuq0Z9y5V7V4akOCnZ1K7QLAuJHdHmrfX%2BUkVH1oaG0icifsaNnLhV6khO4CUuIR%2FGmTTt%2FzdHJroaVx0I1UzvaF5EARIUGW21c2EDAIal5HHz%2BiAoO7sKam3vSHO5Qv2BN%2BwBTQ0Tdi1hlZYzTPIENbPuxGAVtilUSk2%2BILtFv4sIAdwCR5K%2BOn9M3Y6bMp7dpR8PSS35PVcgk3MseXbu0BpPLt8Bn6noQCzSfPOwLTBHnd5lotVwC21zb3fY0HpO2v0bwMw6dzAKkonKrcuUuMqtDmVcd18IFafq9%2FtZDAVKdXn3D9gx2pBLRX5xqn84PWAe7QAkwpwu6QY%2B1Afw0LuvMO0S5SbhFogNsGloM5Y4kGvJLN%2FKV%2F5sTEXC70rGrMmjy6cr1JPJA%2FVpB0Melirog9deie5u0cBsk0xHWlJ19KUaqiZesO0s4Z9SIoAiC%2F6uiHXuOfjKdnOHH7gjIgu5UYoWqbxmN2XzJVFaA50r3%2F3hSV8QoeWCanQ%2BcbuVQfUcGgr7j%2B%2BJaM%2BHQ2JGnrOkzh5WzZLIn1JrMpMzchVZBE0WONbf63nVOkrbfWrOjTWmtVe0iBuqz%2F2nbddpsWm9ngS4yxSv5cwxvLDyQY6pgESiAokkoipqEGTxH57aKoM%2FnRm909LIgTW1CY03pLVbVLYNw%2FsW%2BfmdFagwQFi6RF1FafeS7iVtHDpfP3fcTKMr4v5lhvFYdP8dvvnqX%2BBegnsDvOxc5TGjpopZ9vv3BXCU%2F6InQPVr710RGV0VrF8FcVpctdyx9g8ehvGLsxYdhe6qPn7ypdF7iA7ZMxAD4Bqw0n%2BF6vELUz0hjzWenQ9%2FUJyaiFU&X-Amz-Signature=71ca891749b8f80d72b7a83cd3a7b8903d534a3926f034322aa268162d057827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLUIVTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHf1gMTvc82Mv2wvSQvHU2Bj1dj7RnJcVjjPblEF3MmHAiAngZdLFOYxFnI0JgCXhROA9nck4XeXZyROW2lZGqsg7yr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3y9S2%2Fr6c0IEnIAaKtwDy2pAu70nyiKxyVpdJ%2Fln4KPQuq0Z9y5V7V4akOCnZ1K7QLAuJHdHmrfX%2BUkVH1oaG0icifsaNnLhV6khO4CUuIR%2FGmTTt%2FzdHJroaVx0I1UzvaF5EARIUGW21c2EDAIal5HHz%2BiAoO7sKam3vSHO5Qv2BN%2BwBTQ0Tdi1hlZYzTPIENbPuxGAVtilUSk2%2BILtFv4sIAdwCR5K%2BOn9M3Y6bMp7dpR8PSS35PVcgk3MseXbu0BpPLt8Bn6noQCzSfPOwLTBHnd5lotVwC21zb3fY0HpO2v0bwMw6dzAKkonKrcuUuMqtDmVcd18IFafq9%2FtZDAVKdXn3D9gx2pBLRX5xqn84PWAe7QAkwpwu6QY%2B1Afw0LuvMO0S5SbhFogNsGloM5Y4kGvJLN%2FKV%2F5sTEXC70rGrMmjy6cr1JPJA%2FVpB0Melirog9deie5u0cBsk0xHWlJ19KUaqiZesO0s4Z9SIoAiC%2F6uiHXuOfjKdnOHH7gjIgu5UYoWqbxmN2XzJVFaA50r3%2F3hSV8QoeWCanQ%2BcbuVQfUcGgr7j%2B%2BJaM%2BHQ2JGnrOkzh5WzZLIn1JrMpMzchVZBE0WONbf63nVOkrbfWrOjTWmtVe0iBuqz%2F2nbddpsWm9ngS4yxSv5cwxvLDyQY6pgESiAokkoipqEGTxH57aKoM%2FnRm909LIgTW1CY03pLVbVLYNw%2FsW%2BfmdFagwQFi6RF1FafeS7iVtHDpfP3fcTKMr4v5lhvFYdP8dvvnqX%2BBegnsDvOxc5TGjpopZ9vv3BXCU%2F6InQPVr710RGV0VrF8FcVpctdyx9g8ehvGLsxYdhe6qPn7ypdF7iA7ZMxAD4Bqw0n%2BF6vELUz0hjzWenQ9%2FUJyaiFU&X-Amz-Signature=6048cf1fde3ce5753bbfd047c15321c411a9ccac9c072ef4988e83a6b5a322fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

