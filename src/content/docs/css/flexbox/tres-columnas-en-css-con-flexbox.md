---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUITLMFG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpX0aQ7X97kSqRmOofkb%2FLlz0NNbSXUcwCvUb5pdBW0AiEAzwR5zr5cMr7Sq2FpilGgRvYWOtQBLJe3V8RrfvlK%2FfAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTDL0SDSDCDVFJddyrcA9EBhTIXL2zbXGb4vAd5AObbORldEw4j%2Fl8LmL9o0KVZFsRXW0k%2FbvYM%2BdPudlcVWnKCfUl1yzYC3U8GWJUc6N67esm5DfHGW099sgpCkW%2FV%2BEqjQn8TqHgYs6ZJjGFfMBydY3piC4PHMnqEPvMA4glOvdsnym%2BP3ZhSNnmcirE1q6Ge8Jk7zpN%2Fknl6isbxVvWaz3uYSk6DShjLdS3LBxQYj1aLIWZT%2Fa6xTYyR2GbiKgN23ZUcO0%2Fmd%2FgwecLCkzeo%2Bo5fJgjdE%2F%2FnCaKEg10uj6c%2BTX1EjtJpFHagD6fRuiny0FtFYhqWi97VyOevf4pASbiGCXrKYoqk0iyMcUL1suaPBRmsJCcBZHOM0Q2aR7Z3RDDQyrFGkbxA7%2BTu1%2FmLhuWvT%2BYdirGRQYy%2BO2bJIGfg6%2FgcSBVM5Ao0jJOI1Xbe3Gva0SI5Zme0NpVWs9%2BFKiqeKqIm1WD64LqGPCVFaJMx7YEqENDD6xODmuwj0Yg9qOBtVmCkkZAuegUroghEpj5OR8hz61zfiqAxN5CznCHTUOBcW1%2FMMMDa00d9pmTTHrn%2BM%2F8gw6Tueu1dNs3cetx3umNbYUqmKRaoZi5dWbz5h1hrgYmvDsPrjtv%2BOMt9kAQ%2FWq0HgrWsMO%2BU2ckGOqUB%2BWwPBIPtaOUEs9oYWyaLnKeQcrFXX09ooF41tu6tt%2F%2B0ZgexCP0Oro0E%2BKm7Q3rry45DmWbDlsbFOLpJhApjDbqsSsGZK7bmFBWXcFI3GVy4uwctKaH7gT6jtXzRdRx8JtKssMCZmGhyTnkaHHeColP2IRnSughIklk4FAqWxgdAAxkNvh5wt34T2hSpS%2BscvmFjE1pn6rgPbELss%2BW0oinftg4P&X-Amz-Signature=b997dd409d2a85b5f8e4bdc0d268d9991e6b49beb246627553b94f0475278a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUITLMFG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpX0aQ7X97kSqRmOofkb%2FLlz0NNbSXUcwCvUb5pdBW0AiEAzwR5zr5cMr7Sq2FpilGgRvYWOtQBLJe3V8RrfvlK%2FfAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTDL0SDSDCDVFJddyrcA9EBhTIXL2zbXGb4vAd5AObbORldEw4j%2Fl8LmL9o0KVZFsRXW0k%2FbvYM%2BdPudlcVWnKCfUl1yzYC3U8GWJUc6N67esm5DfHGW099sgpCkW%2FV%2BEqjQn8TqHgYs6ZJjGFfMBydY3piC4PHMnqEPvMA4glOvdsnym%2BP3ZhSNnmcirE1q6Ge8Jk7zpN%2Fknl6isbxVvWaz3uYSk6DShjLdS3LBxQYj1aLIWZT%2Fa6xTYyR2GbiKgN23ZUcO0%2Fmd%2FgwecLCkzeo%2Bo5fJgjdE%2F%2FnCaKEg10uj6c%2BTX1EjtJpFHagD6fRuiny0FtFYhqWi97VyOevf4pASbiGCXrKYoqk0iyMcUL1suaPBRmsJCcBZHOM0Q2aR7Z3RDDQyrFGkbxA7%2BTu1%2FmLhuWvT%2BYdirGRQYy%2BO2bJIGfg6%2FgcSBVM5Ao0jJOI1Xbe3Gva0SI5Zme0NpVWs9%2BFKiqeKqIm1WD64LqGPCVFaJMx7YEqENDD6xODmuwj0Yg9qOBtVmCkkZAuegUroghEpj5OR8hz61zfiqAxN5CznCHTUOBcW1%2FMMMDa00d9pmTTHrn%2BM%2F8gw6Tueu1dNs3cetx3umNbYUqmKRaoZi5dWbz5h1hrgYmvDsPrjtv%2BOMt9kAQ%2FWq0HgrWsMO%2BU2ckGOqUB%2BWwPBIPtaOUEs9oYWyaLnKeQcrFXX09ooF41tu6tt%2F%2B0ZgexCP0Oro0E%2BKm7Q3rry45DmWbDlsbFOLpJhApjDbqsSsGZK7bmFBWXcFI3GVy4uwctKaH7gT6jtXzRdRx8JtKssMCZmGhyTnkaHHeColP2IRnSughIklk4FAqWxgdAAxkNvh5wt34T2hSpS%2BscvmFjE1pn6rgPbELss%2BW0oinftg4P&X-Amz-Signature=992c4b5ec0d390c515baecc24bd94a04661145c2c587ebc9d37fcca16526c1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

