---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P4YIIX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeUfBrIfGDv9SVbWjaEA7PFvhkauHvoBugF0xtHtdK%2FgIgAlW7qmyXIFeVkekR4tXZUNY08mtqbxo2P3vydkhFmXgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFklTNOfxDWvXJWO2ircA%2Fu9cHU5dFfb6kX6rAwrkwrAz6%2F8tLiESz4FCMHsu1fvf9qd5cQFjvlA3AxKuxXKyjzrHpGtSph1SMHZEze3mkUop3y%2Bg7T2L9LRkv%2FqwiIN2%2BJgxVUr6pd1D2vAlevhaeFtL1Ap2QFwc1X55ZicrenyAjTtRb2qL7EnawWUFVy0i1mE9q0zkQSDctzVAuVNKl%2FmEbiUG%2FLdtQ0t6XSSznm0J8gxfG%2FiEnjBmcyAgfMx7xjLN1cO7xw6QGs9xT%2BPxwVtQQD2klastyIHYoVKEvDpkGlt6LDEdxZsuYPHMc8Y7bX%2Bw3E%2FIqYpesxLMU944uOJVEQBb6oPpS2VxH0%2FavJtcQ9f3Wjm1LkssruWL5CoRo1O4t%2F0ZJp%2FttYjyWS2r3rNHiYPuK8i8kt0ReeUCupU1OMc4IhmJudHnu3S%2BmjQoEcXrgEjj76lgHBqc%2F2mQk%2BUZYxYxfKUOikkbcdFEkqIZNJpkcus79oiBxqgIh0n6d4%2F9O%2FLCj5Ho8ckCM2PiMEmMPZP1KWxUHq7rykKUwpm5u1R8iJ4FjLxQ8xFntomOnqV%2FH8KAJsueeNP3lF2SzU%2Bd%2FqXOAGBsE9V%2FPs%2BaZpxX3tviIo%2FV%2Br52jb0pKP0yXol1G7Ykn0NHziqMPXs2ckGOqUBL54NGbZxDWSmDX83aH%2FWD87pTYLCCyls6Hb1zinJ5eBnplxAq1OIg3bEUlzbEjK3fnztNwV82I6WKzhlDUS6QmcMgdYVhep%2BbpREVnDUufYwEDshQEtkG3SFZAVnEQ96rY%2FEwJ5h%2FQsVfP9bNWzm%2BcmIuVpjYYj0h2V%2F0MnznsQpdSj0r7j1jv%2BF%2F7acNWcbJ3FI1WK%2F4ccD7JkK%2FE4vDJJr%2FY3D&X-Amz-Signature=40a0014d92ee5ed5b6dec66a3f7d0fac4ed71db2d34c0c7fad2b8abfc3e8971e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P4YIIX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeUfBrIfGDv9SVbWjaEA7PFvhkauHvoBugF0xtHtdK%2FgIgAlW7qmyXIFeVkekR4tXZUNY08mtqbxo2P3vydkhFmXgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFklTNOfxDWvXJWO2ircA%2Fu9cHU5dFfb6kX6rAwrkwrAz6%2F8tLiESz4FCMHsu1fvf9qd5cQFjvlA3AxKuxXKyjzrHpGtSph1SMHZEze3mkUop3y%2Bg7T2L9LRkv%2FqwiIN2%2BJgxVUr6pd1D2vAlevhaeFtL1Ap2QFwc1X55ZicrenyAjTtRb2qL7EnawWUFVy0i1mE9q0zkQSDctzVAuVNKl%2FmEbiUG%2FLdtQ0t6XSSznm0J8gxfG%2FiEnjBmcyAgfMx7xjLN1cO7xw6QGs9xT%2BPxwVtQQD2klastyIHYoVKEvDpkGlt6LDEdxZsuYPHMc8Y7bX%2Bw3E%2FIqYpesxLMU944uOJVEQBb6oPpS2VxH0%2FavJtcQ9f3Wjm1LkssruWL5CoRo1O4t%2F0ZJp%2FttYjyWS2r3rNHiYPuK8i8kt0ReeUCupU1OMc4IhmJudHnu3S%2BmjQoEcXrgEjj76lgHBqc%2F2mQk%2BUZYxYxfKUOikkbcdFEkqIZNJpkcus79oiBxqgIh0n6d4%2F9O%2FLCj5Ho8ckCM2PiMEmMPZP1KWxUHq7rykKUwpm5u1R8iJ4FjLxQ8xFntomOnqV%2FH8KAJsueeNP3lF2SzU%2Bd%2FqXOAGBsE9V%2FPs%2BaZpxX3tviIo%2FV%2Br52jb0pKP0yXol1G7Ykn0NHziqMPXs2ckGOqUBL54NGbZxDWSmDX83aH%2FWD87pTYLCCyls6Hb1zinJ5eBnplxAq1OIg3bEUlzbEjK3fnztNwV82I6WKzhlDUS6QmcMgdYVhep%2BbpREVnDUufYwEDshQEtkG3SFZAVnEQ96rY%2FEwJ5h%2FQsVfP9bNWzm%2BcmIuVpjYYj0h2V%2F0MnznsQpdSj0r7j1jv%2BF%2F7acNWcbJ3FI1WK%2F4ccD7JkK%2FE4vDJJr%2FY3D&X-Amz-Signature=3aede37c9727ba1eec979ab3953c90d2c220ba99a2eba06161935cd246ece221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

