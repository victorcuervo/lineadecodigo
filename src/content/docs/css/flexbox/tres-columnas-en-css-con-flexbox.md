---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJRSKBS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoHeD%2BeaQw8s61QyNdV7eKnthcWUgoNkW9oQP%2FxVEQUAiApkSMrVCPj3ZXPJqzO0K%2BsYurY635o7fhNcAYOZonf9ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvB8ssmEuWUVEfRG5KtwDpVtsbkKMqYOJRSXD0rV3JKXtFwGK3E%2B6roT9ww6Rf5ceaPhs760T1cUc6OU055TnGuIaKE45ifpxxR4WAw2TRlkONiMNKDZS29rxwYuR0YdvMupL468p5N9wbHqAb%2F0P8xmv0eU4i0p1MrOmZgivznPLdIXZlKHMZUL1cWwr0TxHuAS%2FnclmNq0EifeZ50qwH%2FAhq9TMyk%2BVMWvG3El4PySZmaL3zSi1U3q6d0DJ%2FiSwlt4E3LqZIEb%2B8N1yYcAefy6BByVPX8%2Bb69v%2BsjUDLXYBjVt71apNjnqQUjLRSyNZxtHRoQUIZ8ycTE9usAIqjCQ18Pw%2BKYBipsdkAmz2guu2jEMACAn%2FfNGBjlxcuhvcF1%2BDqgJ8YB46mcrx%2FetcDqYlrMK3KCZa82%2Bv4xK%2F4jboMVQFoq4t3loCaZu1hyNXl%2FSEKhQUU53yLIRqmpEujBlAq66bfI3P3MWrJeUH3%2FWUnFnHURYEkYEhozUP0tnm%2FuvuUnNgd8bWFXbbL%2FwSS70JknGS2VJ4k98Szby5lD2u1LmdRbtZhJFVZkA0KVMvVClZyzZFtiflr1GiTg5pSImh%2BwI5pJv3Ue0nIHZbCw3MEMLTANq5jA1nvZJO3pslhF7l%2FV64K2hSdpEwru%2FLyQY6pgGKLUBw6u1CCt2O080CvmylJMcRBIowfGA0kgFuLixBiBuGjogG%2Bb8nQyba3QmKZGTQGifdVAys9xZaiN5ahgsyhwKlCymWR%2BbJP4tNPjNTk9FSM8QPl780MMXyqRB%2FdJ%2FApEfzYcPkGyTU9MZcjUrgpyhC9MMLKU%2BLUqYxlfQc0hO2iN8K1xSh37RnIN%2FDS1w%2FBAeetyOoVdraSUatmqMawZrobSJr&X-Amz-Signature=d7c9366e056e582c34c937159b99ee4f53ea62f6b23da4951d96771c9c76957a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJRSKBS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoHeD%2BeaQw8s61QyNdV7eKnthcWUgoNkW9oQP%2FxVEQUAiApkSMrVCPj3ZXPJqzO0K%2BsYurY635o7fhNcAYOZonf9ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvB8ssmEuWUVEfRG5KtwDpVtsbkKMqYOJRSXD0rV3JKXtFwGK3E%2B6roT9ww6Rf5ceaPhs760T1cUc6OU055TnGuIaKE45ifpxxR4WAw2TRlkONiMNKDZS29rxwYuR0YdvMupL468p5N9wbHqAb%2F0P8xmv0eU4i0p1MrOmZgivznPLdIXZlKHMZUL1cWwr0TxHuAS%2FnclmNq0EifeZ50qwH%2FAhq9TMyk%2BVMWvG3El4PySZmaL3zSi1U3q6d0DJ%2FiSwlt4E3LqZIEb%2B8N1yYcAefy6BByVPX8%2Bb69v%2BsjUDLXYBjVt71apNjnqQUjLRSyNZxtHRoQUIZ8ycTE9usAIqjCQ18Pw%2BKYBipsdkAmz2guu2jEMACAn%2FfNGBjlxcuhvcF1%2BDqgJ8YB46mcrx%2FetcDqYlrMK3KCZa82%2Bv4xK%2F4jboMVQFoq4t3loCaZu1hyNXl%2FSEKhQUU53yLIRqmpEujBlAq66bfI3P3MWrJeUH3%2FWUnFnHURYEkYEhozUP0tnm%2FuvuUnNgd8bWFXbbL%2FwSS70JknGS2VJ4k98Szby5lD2u1LmdRbtZhJFVZkA0KVMvVClZyzZFtiflr1GiTg5pSImh%2BwI5pJv3Ue0nIHZbCw3MEMLTANq5jA1nvZJO3pslhF7l%2FV64K2hSdpEwru%2FLyQY6pgGKLUBw6u1CCt2O080CvmylJMcRBIowfGA0kgFuLixBiBuGjogG%2Bb8nQyba3QmKZGTQGifdVAys9xZaiN5ahgsyhwKlCymWR%2BbJP4tNPjNTk9FSM8QPl780MMXyqRB%2FdJ%2FApEfzYcPkGyTU9MZcjUrgpyhC9MMLKU%2BLUqYxlfQc0hO2iN8K1xSh37RnIN%2FDS1w%2FBAeetyOoVdraSUatmqMawZrobSJr&X-Amz-Signature=81a59a6511cb93cbbab2b7f3d96749b4080a355016274ca91ba562c24ca329b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

